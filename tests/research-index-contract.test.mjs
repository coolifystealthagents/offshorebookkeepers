import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const researchDir = path.join(root, 'content/research');

async function loadContentModule() {
  const source = fs.readFileSync(path.join(root, 'lib/content.ts'), 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
    fileName: 'content.ts',
  }).outputText;
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'research-loader-'));
  const modulePath = path.join(directory, 'content.mjs');
  fs.writeFileSync(modulePath, output);
  return import(`${pathToFileURL(modulePath).href}?v=${Date.now()}`);
}

function writeResearchFixture(directory, overrides = {}) {
  for (const kind of ['blog', 'research', 'alternatives']) fs.mkdirSync(path.join(directory, 'content', kind), { recursive: true });
  fs.mkdirSync(path.join(directory, 'public', 'thumbnails'), { recursive: true });
  fs.writeFileSync(path.join(directory, 'public', 'thumbnails', 'fixture.webp'), 'fixture');
  const metadata = {
    title: 'Fixture research',
    description: 'A validator fixture.',
    published: '2026-09-10',
    updated: '2026-09-10',
    category: 'Quality Control',
    featuredImage: '/thumbnails/fixture.webp',
    takeaways: ['A bounded takeaway.'],
    sources: [{ name: 'Primary source', url: 'https://example.com/source' }],
    sourceNotes: [
      { claim: 'The bounded claim uses the listed source.', sourceUrls: ['https://example.com/source'] },
      { claim: 'The source frames the control context.', sourceUrls: ['https://example.com/source'] },
      { claim: 'The recommendation is an operational interpretation, not an empirical finding.', sourceUrls: ['https://example.com/source'] },
    ],
    faqs: [{ question: 'What is this?', answer: 'A fixture.' }],
    ...overrides,
  };
  const lines = ['---'];
  for (const [key, value] of Object.entries(metadata)) {
    if (value !== undefined) lines.push(`${key}: ${JSON.stringify(value)}`);
  }
  lines.push('---', '', '## Findings', '', 'A non-empty section body.');
  fs.writeFileSync(path.join(directory, 'content/research/fixture.md'), `${lines.join('\n')}\n`);
}

function runValidator(overrides = {}, bodyTransform = (value) => value) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'research-validator-'));
  writeResearchFixture(directory, overrides);
  const file = path.join(directory, 'content/research/fixture.md');
  fs.writeFileSync(file, bodyTransform(fs.readFileSync(file, 'utf8')));
  return spawnSync(process.execPath, [path.join(root, 'scripts/validate-content.mjs')], { cwd: directory, encoding: 'utf8' });
}

test('getContent loads every publishable research file in descending, deterministic order', async () => {
  const content = await loadContentModule();
  const markdown = fs.readdirSync(researchDir).filter((name) => /\.mdx?$/.test(name));
  const withdrawn = content.withdrawnContentSlugs.research;
  const posts = content.getContent('research');
  assert.equal(posts.length, markdown.length - withdrawn.length);
  for (let index = 1; index < posts.length; index += 1) {
    assert.ok(posts[index - 1].published >= posts[index].published, `${posts[index - 1].slug} precedes ${posts[index].slug}`);
  }

  const originalReadDir = fs.readdirSync;
  fs.readdirSync = (...args) => [...originalReadDir(...args)].reverse();
  try {
    assert.deepEqual(content.getContent('research').map((post) => post.slug), posts.map((post) => post.slug));
  } finally {
    fs.readdirSync = originalReadDir;
  }
});

test('withdrawn editorial batches remain preserved but cannot cross the central publication boundary', async () => {
  const content = await loadContentModule();
  const newlyWithdrawn = {
    blog: [
      'ofb-access-boundary', 'ofb-access-recertification', 'ofb-audit-pack', 'ofb-capacity-plan',
      'ofb-cross-team-escalation', 'ofb-cross-training-map', 'ofb-customer-rep-handoff',
      'ofb-documentation-drift', 'ofb-duplicate-payment-prevention', 'ofb-escalation-log',
      'ofb-exception-path', 'ofb-handoff-record', 'ofb-intake-evidence-control',
      'ofb-meeting-followup', 'ofb-metric-definition', 'ofb-onboarding-plan', 'ofb-quality-sample',
      'ofb-queue-ownership', 'ofb-retention-disposal', 'ofb-risk-register', 'ofb-sla-review',
      'ofb-source-map', 'ofb-vendor-onboarding-packet', 'ofb-weekly-brief',
    ],
    research: [
      'ap-approval-trace-method', 'ar-dispute-resolution-method', 'bank-exception-aging-method',
      'close-evidence-completeness-method', 'ofb-access-removal', 'ofb-aged-backlog-evidence',
      'ofb-capacity-error', 'ofb-cross-training-coverage', 'ofb-document-expiry-risk',
      'ofb-duplicate-request-rate', 'ofb-escalation-wait', 'ofb-handoff-completeness',
      'ofb-intake-reliability', 'ofb-queue-aging', 'ofb-retention-compliance',
      'ofb-reviewer-agreement', 'ofb-role-change-continuity', 'ofb-shared-inbox-coverage',
      'ofb-vendor-cycle', 'payroll-source-reconciliation-method',
    ],
  };
  assert.equal(content.withdrawnContentSlugs.blog.length, 48);
  assert.equal(content.withdrawnContentSlugs.research.length, 25);
  for (const kind of ['blog', 'research']) {
    const withdrawn = new Set(content.withdrawnContentSlugs[kind]);
    for (const slug of newlyWithdrawn[kind]) assert.ok(withdrawn.has(slug), `${kind}/${slug} stays withdrawn`);
  }

  for (const kind of ['blog', 'research']) {
    const published = new Set(content.getContent(kind).map((post) => post.slug));
    for (const slug of content.withdrawnContentSlugs[kind]) {
      assert.ok(fs.existsSync(path.join(root, 'content', kind, `${slug}.md`)), `${kind}/${slug} source is preserved`);
      assert.equal(published.has(slug), false, `${kind}/${slug} is excluded from listings and static params`);
      assert.equal(content.getPost(kind, slug), undefined, `${kind}/${slug} cannot resolve directly`);
    }
  }
});

test('research taxonomy counts and filtering are derived from loaded content', async () => {
  const { filterResearchByTopic, getContent, getResearchTopics, researchTopic } = await loadContentModule();
  const posts = getContent('research');
  const topics = getResearchTopics(posts);
  assert.ok(topics.length > 1);
  assert.ok(topics.length < new Set(posts.map((post) => post.category)).size, 'raw category labels are consolidated');
  assert.equal(topics.reduce((count, topic) => count + topic.count, 0), posts.length);

  for (const topic of topics) {
    const filtered = filterResearchByTopic(posts, topic.label);
    assert.equal(filtered.activeTopic, topic.label);
    assert.equal(filtered.posts.length, topic.count);
    assert.ok(filtered.posts.every((post) => researchTopic(post) === topic.label));
  }
  assert.deepEqual(filterResearchByTopic(posts, 'not-a-topic'), { activeTopic: '', posts });
});

test('prepaid-expense research keeps its close-support handoff and owner boundary', async () => {
  const content = await loadContentModule();
  const post = content.getPost('research', 'bookkeeping-prepaid-expense-rollforward-research');
  assert.ok(post, 'the selected research record loads');
  assert.equal(post.updated, '2026-10-21');
  assert.deepEqual(post.serviceHandoff, {
    href: '/services/month-end-close-support',
    label: 'See Month-End Close Support',
    title: 'Prepare the prepaid schedule for close review',
    body: 'A Philippines-based bookkeeper can maintain the rollforward, gather agreements and invoices, and route exceptions. Your controller or accountant decides recognition, impairments, write-offs, and journal approval.',
  });
});

test('duplicate-invoice research keeps its accounts-payable handoff and approval boundary', async () => {
  const content = await loadContentModule();
  const post = content.getPost('research', 'offshore-bookkeeping-ap-duplicate-candidate-resolution-research');
  assert.ok(post, 'the selected research record loads');
  assert.equal(post.updated, '2026-10-23');
  assert.deepEqual(post.serviceHandoff, {
    href: '/services/accounts-payable-processing',
    label: 'See Accounts Payable Processing',
    title: 'Prepare duplicate-invoice evidence for approval',
    body: 'A Philippines-based bookkeeper can assemble invoice comparisons, document exceptions, and route the evidence to the approved reviewer. Your accounts-payable manager or controller keeps payment approval, release, policy, and accounting decisions.',
  });
});

test('article body parser preserves supported structure instead of exposing markdown punctuation', async () => {
  const content = await loadContentModule();
  assert.equal(typeof content.parseArticleBody, 'function');
  const blocks = content.parseArticleBody([
    '### Reconciliation steps',
    '',
    'Use **approved evidence**, retain the `reviewer_id`, and read [FASB guidance](https://www.fasb.org/standards).',
    '',
    '- Confirm the source.',
    '- Record the exception.',
    '',
    '1. Prepare the tie-out.',
    '2. Obtain review.',
    '',
    '| Field | Purpose |',
    '| --- | --- |',
    '| Award ID | Prevent blending |',
  ].join('\n'));
  assert.deepEqual(blocks.map((block) => block.type), ['heading', 'paragraph', 'unordered-list', 'ordered-list', 'table']);
  assert.deepEqual(blocks[0], { type: 'heading', level: 3, segments: [{ type: 'text', value: 'Reconciliation steps' }] });
  assert.deepEqual(blocks[1].segments, [
    { type: 'text', value: 'Use ' },
    { type: 'strong', value: 'approved evidence' },
    { type: 'text', value: ', retain the ' },
    { type: 'code', value: 'reviewer_id' },
    { type: 'text', value: ', and read ' },
    { type: 'link', value: 'FASB guidance', href: 'https://www.fasb.org/standards' },
    { type: 'text', value: '.' },
  ]);
  assert.equal(blocks[2].items.length, 2);
  assert.equal(blocks[3].items.length, 2);
  assert.deepEqual(blocks[4].header.map((cell) => cell[0].value), ['Field', 'Purpose']);
  assert.deepEqual(blocks[4].rows[0].map((cell) => cell[0].value), ['Award ID', 'Prevent blending']);

  const unsafeValues = [
    '[script](javascript:prompt)',
    '[data](data:text/html,unsafe)',
    '[protocol relative](//evil.example/x)',
    String.raw`[backslash authority](/\evil.example/x)`,
  ];
  for (const value of unsafeValues) {
    const unsafe = content.parseArticleBody(`Do not render ${value} as a link.`);
    assert.equal(unsafe[0].segments.some((segment) => segment.type === 'link'), false, value);
    assert.match(unsafe[0].segments.map((segment) => segment.value).join(''), /\[[^\]]+\]\([^)]+\)/, value);
  }

  const canonicalExternal = content.parseArticleBody('[Safe](HTTPS://SAFE.EXAMPLE/x)');
  assert.deepEqual(canonicalExternal[0].segments, [{ type: 'link', value: 'Safe', href: 'https://safe.example/x' }]);
  const internal = content.parseArticleBody('[Internal](/services)');
  assert.deepEqual(internal[0].segments, [{ type: 'link', value: 'Internal', href: '/services' }]);
});

test('October 2 Research sources preserve their opening paragraphs as renderable sections', async () => {
  const content = await loadContentModule();
  const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/daily-content/2026-10-02/research-off81.json'), 'utf8'));
  for (const entry of manifest) {
    const raw = fs.readFileSync(path.join(root, entry.sourcePath), 'utf8');
    const body = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n([\s\S]*)$/)?.[1] || '';
    assert.match(body.trimStart(), /^##\s+\S/, `${entry.slug} starts with a renderable topic heading`);
    const post = content.getPost('research', entry.slug);
    assert.ok(post, `${entry.slug} loads`);
    assert.equal(post.sections[0].heading, 'Scope and decision boundary');
    assert.ok(post.sections[0].body.length > 80, `${entry.slug} preserves its opening purpose paragraph`);
    assert.doesNotMatch(post.sections[0].body, /\b(?:research[- ]cycle|cycle brief|belongs to the .* cycle|labeled for the .* cycle)\b/i);
  }
});

test('validator enforces dates, FAQ objects, section bodies, and evidence maps without a ten-source quota', () => {
  assert.equal(runValidator().status, 0, 'one listed source with a claim map is valid');

  const staleUpdate = runValidator({ updated: '2026-09-09' });
  assert.notEqual(staleUpdate.status, 0);
  assert.match(staleUpdate.stderr, /updated date cannot precede published date/);

  const tupleFaq = runValidator({ faqs: [['Question?', 'Answer.']] });
  assert.notEqual(tupleFaq.status, 0);
  assert.match(tupleFaq.stderr, /faqs entries must be \{question, answer\} objects/);

  const emptySection = runValidator({}, (raw) => raw.replace('A non-empty section body.', ''));
  assert.notEqual(emptySection.status, 0);
  assert.match(emptySection.stderr, /section "Findings" requires a non-empty body/);

  const noMap = runValidator({ sourceNotes: undefined });
  assert.notEqual(noMap.status, 0);
  assert.match(noMap.stderr, /missing sourceNotes evidence map/);
});
