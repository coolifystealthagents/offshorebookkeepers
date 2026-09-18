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

test('the rejected September 18 batch remains preserved but cannot cross the central publication boundary', async () => {
  const content = await loadContentModule();
  assert.equal(content.withdrawnContentSlugs.blog.length, 24);
  assert.equal(content.withdrawnContentSlugs.research.length, 5);

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

test('article body parser preserves supported structure instead of exposing markdown punctuation', async () => {
  const content = await loadContentModule();
  assert.equal(typeof content.parseArticleBody, 'function');
  const blocks = content.parseArticleBody([
    '### Reconciliation steps',
    '',
    'Use **approved evidence** and retain the `reviewer_id`.',
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
    { type: 'text', value: ' and retain the ' },
    { type: 'code', value: 'reviewer_id' },
    { type: 'text', value: '.' },
  ]);
  assert.equal(blocks[2].items.length, 2);
  assert.equal(blocks[3].items.length, 2);
  assert.deepEqual(blocks[4].header.map((cell) => cell[0].value), ['Field', 'Purpose']);
  assert.deepEqual(blocks[4].rows[0].map((cell) => cell[0].value), ['Award ID', 'Prevent blending']);
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
