import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import ts from 'typescript';

const root = process.cwd();
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const walk = (relative, predicate = () => true) => {
  const start = path.join(root, relative);
  const found = [];
  const visit = (current) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) visit(full);
      else if (predicate(full)) found.push(full);
    }
  };
  visit(start);
  return found;
};

function loadFleetData() {
  const source = read('app/fleet-data.ts');
  const js = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  Function('exports', 'module', 'require', js)(module.exports, module, () => {
    throw new Error('fleet-data.ts must not depend on runtime imports');
  });
  return module.exports;
}

function loadPrivateLimiter(relative) {
  const source = read(relative).replace('function limited(', 'export function limited(');
  const js = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  Function('exports', 'module', 'require', js)(module.exports, module, () => ({}));
  return module.exports.limited;
}

const requiredSlugs = [
  'daily-transaction-coding',
  'bank-reconciliation-support',
  'receipt-expense-documentation',
  'bookkeeping-cleanup-catch-up',
  'accounts-payable-processing',
  'vendor-records-1099-support',
  'accounts-receivable-support',
  'payroll-journal-preparation',
  'timesheet-employee-expense-support',
  'month-end-close-support',
  'management-reporting-support',
  'cash-forecast-dashboard-support',
  'audit-document-support',
  'fixed-asset-register-support',
  'bookkeeping-system-migration-support',
  'inventory-cost-data-support',
  'job-costing-support',
  'sales-tax-data-support',
  'ecommerce-bookkeeping',
  'property-bookkeeping',
  'law-firm-bookkeeping',
];

const legacyTargets = [
  '/services/admin-support',
  '/services/operations-support',
  '/services/reporting-and-qa',
  '/blog/multi-entity-consolidation-handoff',
  '/blog/top-25-bookkeeping-finance-outsourcing-companies',
];

const unsupportedTestimonials = ['Kevin Carabajal', 'Chad Sublet', 'Alex Behrens'];

test('service catalog covers every approved bookkeeping support category with distinct, claim-safe workflows', () => {
  const { fleetServices, serviceGroups } = loadFleetData();
  assert.deepEqual(fleetServices.map((service) => service.slug), requiredSlugs);
  assert.equal(new Set(fleetServices.map((service) => service.slug)).size, requiredSlugs.length);
  assert.ok(Array.isArray(serviceGroups) && serviceGroups.length >= 6);

  const payloads = new Set();
  for (const service of fleetServices) {
    assert.ok(service.group && serviceGroups.some((group) => group.id === service.group), `${service.slug}: valid group`);
    assert.ok(service.problem?.length >= 70, `${service.slug}: specific business problem`);
    assert.ok(service.summary?.length >= 70, `${service.slug}: specific summary`);
    assert.ok(service.tasks?.length >= 4, `${service.slug}: concrete tasks`);
    assert.ok(service.inputs?.length >= 3, `${service.slug}: named inputs`);
    assert.ok(service.outputs?.length >= 3, `${service.slug}: tangible outputs`);
    assert.ok(service.controls?.length >= 3, `${service.slug}: retained controls`);
    assert.ok(service.firstWeek?.length >= 3, `${service.slug}: first-week plan`);
    assert.ok(service.illustration?.src?.startsWith('/'), `${service.slug}: local illustration`);
    assert.ok(service.illustration?.alt?.length >= 25, `${service.slug}: descriptive illustration alt`);
    assert.ok(fs.existsSync(path.join(root, 'public', service.illustration.src)), `${service.slug}: illustration exists`);
    const normalized = JSON.stringify([service.tasks, service.inputs, service.outputs, service.controls, service.firstWeek]);
    assert.ok(!payloads.has(normalized), `${service.slug}: workflow is not duplicated`);
    payloads.add(normalized);
  }
});

test('informative article images have meaningful alternatives and redundant listing images are decorative', () => {
  assert.match(read('app/blog/[slug]/page.tsx'), /alt=\{post\.description \|\| post\.excerpt\}/);
  assert.match(read('app/research/[slug]/page.tsx'), /alt=\{post\.description\}/);
  assert.match(read('app/alternatives/page.tsx'), /<img src=\{post\.featuredImage\} alt=""\/>/);
});

test('unsupported testimonials and visible parent-brand copy are absent from first-party pages', () => {
  const readerFiles = [
    ...walk('app', (file) => file.endsWith('.tsx') && !file.endsWith('layout.tsx')),
    path.join(root, 'app/fleet-data.ts'),
    path.join(root, 'app/data.ts'),
    ...walk('content', (file) => /\.mdx?$/.test(file)),
  ];
  for (const file of readerFiles) {
    let value = fs.readFileSync(file, 'utf8');
    value = value.replaceAll('https://go.oncehub.com/StealthAgentsTeam', '');
    value = value.replaceAll('https://acrtracking.stealthagents.us/v1/tracker.js', '');
    for (const name of unsupportedTestimonials) assert.ok(!value.includes(name), `${path.relative(root, file)} contains ${name}`);
    assert.doesNotMatch(value, /stealth\s*agents/i, `${path.relative(root, file)} contains visible parent-brand copy`);
  }
});

test('legacy internal targets are fully canonicalized in application and content sources', () => {
  const files = [
    ...walk('app', (file) => /\.(?:ts|tsx)$/.test(file)),
    ...walk('content', (file) => file.endsWith('.md')),
  ];
  for (const file of files) {
    const value = fs.readFileSync(file, 'utf8');
    for (const target of legacyTargets) assert.ok(!value.includes(target), `${path.relative(root, file)} contains ${target}`);
  }
});

test('contact has one canonical implementation and a permanent legacy redirect', async () => {
  assert.equal(fs.existsSync(path.join(root, 'app/contact/page.tsx')), false, 'duplicate /contact page must be removed');
  const config = (await import(path.join(root, 'next.config.mjs') + `?t=${Date.now()}`)).default;
  assert.equal(typeof config.redirects, 'function');
  const redirects = await config.redirects();
  assert.ok(redirects.some((rule) => rule.source === '/contact' && rule.destination === '/contact-us' && rule.permanent === true));
  assert.ok(redirects.some((rule) => rule.source === '/cancellation' && rule.destination === '/cancellation-policy' && rule.permanent === true));
  assert.ok(redirects.some((rule) => rule.source === '/blog/page/1' && rule.destination === '/blog' && rule.permanent === true));
  assert.ok(redirects.some((rule) => rule.source === '/blog/top-25-bookkeeping-finance-outsourcing-companies'
    && rule.destination === '/blog/bookkeeping-outsourcing-due-diligence-checklist'
    && rule.permanent === true));
});

test('contact success is gated by authoritative delivery and direct thank-you visits are non-confirmatory', () => {
  const form = read('app/contact-us/StandardContactForm.tsx');
  const route = read('app/api/contact/route.ts');
  const thankYou = read('app/thank-you/page.tsx');
  const contactPage = read('app/contact-us/page.tsx');

  assert.match(contactPage, /endpoint="\/api\/contact" encoding="form"/);
  assert.match(form, /phoneLocal: String\(data\.get\("f4"\)/);
  assert.match(form, /countryCode,/);
  assert.match(form, /headers:\s*\{[^}]*["']Accept["']:\s*["']application\/json["']/s);
  assert.match(form, /const receipt = await response\.json\(\)/);
  assert.match(form, /if \(!response\.ok \|\| receipt\?\.ok !== true\) throw new Error/);
  assert.match(form, /await trackAcceptedLead\(payload\)/);
  assert.match(form, /window\.location\.assign\("\/thank-you"\)/);
  assert.doesNotMatch(form, /catch[^}]*thank-you/s);
  assert.match(route, /result\?\.ok !== true/);
  assert.match(route, /cookies\.set\('ob_lead_accepted'/);
  assert.match(route, /request\.headers\.get\('accept'\)\?\.includes\('application\/json'\)/);
  assert.match(route, /NextResponse\.json\(\{ ok: true \}\)/);
  assert.match(route, /NextResponse\.redirect\(new URL\('\/thank-you', origin!\)/);
  assert.doesNotMatch(route, /function redirectOrigin/);
  assert.match(thankYou, /cookies\(\).*ob_lead_accepted/s);
  assert.match(thankYou, /No submission was confirmed in this browser/);
});

test('central tracker is withheld on contact until authoritative acceptance and tracks the lead once', () => {
  const layout = read('app/layout.tsx');
  const acr = read('app/acr-client.tsx');
  const form = read('app/contact-us/StandardContactForm.tsx');
  const trackerUrl = 'https://acrtracking.stealthagents.us/v1/tracker.js';

  assert.match(layout, /endpoint:'\/ingest\/track'/, 'first-party tracking endpoint remains configured');
  assert.ok(!layout.includes(trackerUrl), 'layout must not preload the tracker on every route');
  assert.ok(acr.includes(trackerUrl), 'the standard central tracker integration remains in use');
  assert.match(acr, /usePathname\(\)/, 'route changes are observed in the persistent root client');
  assert.match(acr, /pathname !== ['"]\/contact-us['"][^]*loadAcrTracker\(\)/,
    'ordinary routes load the tracker after direct or SPA navigation, while contact does not');
  assert.doesNotMatch(acr, /addEventListener\(['"]submit|dispatchEvent|requestSubmit\(/,
    'the central client must not capture or replay form submission');

  const acceptedIndex = form.indexOf('receipt?.ok !== true');
  const acceptedTrackingIndex = form.indexOf('await trackAcceptedLead(payload)');
  const redirectIndex = form.indexOf('window.location.assign("/thank-you")');
  const helperIndex = form.indexOf('async function trackAcceptedLead');
  const loadIndex = form.indexOf('await loadAcrTracker()', helperIndex);
  const trackIndex = form.indexOf('.trackLead?.(payload)', helperIndex);
  assert.ok(acceptedIndex >= 0 && acceptedTrackingIndex > acceptedIndex && redirectIndex > acceptedTrackingIndex,
    'accepted tracking happens only after acceptance, before redirect');
  assert.ok(helperIndex >= 0 && loadIndex > helperIndex && trackIndex > loadIndex,
    'the central tracker loads before the accepted lead call');
  assert.equal(form.match(/\.trackLead\?\.\(payload\)/g)?.length, 1, 'accepted lead is tracked exactly once');
  assert.match(form, /try\s*\{[^]*await loadAcrTracker\(\)[^]*trackLead\?\.\(payload\)[^]*\}\s*catch\s*\{\}/,
    'tracker load/call failures are isolated from accepted form delivery');
  assert.doesNotMatch(form, /dispatchEvent|requestSubmit\(/, 'accepted tracking must not submit the form again');
  assert.doesNotMatch(form, /name=["'](?:firstName|lastName|email|phoneLocal|companyName)["']|type=["'](?:email|tel)["']/,
    'PII controls remain invisible to tracker hint scanning after prior-route SPA navigation');
  assert.doesNotMatch(form, /<textarea\b/i,
    'the hosted tracker classifies every textarea as lead_message, so accepted-lead forms cannot contain one');
  assert.match(form, /contentEditable[^>]*role=["']textbox["']/,
    'multiline message input remains usable without becoming a form element scanned by the hosted tracker');
  assert.match(form, /contentEditable[^>]*aria-required=["']true["']/,
    'the custom multiline textbox exposes its required state to assistive technology');
  assert.doesNotMatch(form, /<form[^>]*(?:method|action)=/,
    'the JavaScript-owned form must not advertise an incompatible native fallback');
});

test('alternatives query parameters are normalized before filtering and pagination', () => {
  const alternatives = read('app/alternatives/page.tsx');
  assert.match(alternatives, /string\s*\|\s*string\[\]/);
  assert.match(alternatives, /Array\.isArray\(value\)/);
  assert.match(alternatives, /\/\^\[1-9\]\\d\*\$\//);
  assert.doesNotMatch(alternatives, /query\.q\.toLowerCase\(\)/);
  assert.doesNotMatch(alternatives, /Number\(query\.page\)/);
});

test('tracking and lead routes bound bodies, origins, payloads, and request rates', () => {
  const contact = read('app/api/contact/route.ts');
  const tracking = read('app/ingest/track/route.ts');
  for (const source of [contact, tracking]) {
    assert.match(source, /MAX_BODY_BYTES/);
    assert.match(source, /request\.body\.getReader\(\)/);
    assert.match(source, /request\.headers\.get\('origin'\)/);
    assert.match(source, /limited\(/);
    assert.match(source, /function acceptedOrigin/);
    assert.match(source, /https:\/\/offshorebookkeepers\.com/);
    assert.doesNotMatch(source, /x-forwarded-host/);
    assert.doesNotMatch(source, /x-forwarded-for|x-real-ip/);
    assert.match(source, /MAX_RATE_KEYS/);
    assert.match(source, /attempts\.delete\(storedKey\)/);
    assert.match(source, /limited\('global'/);
  }
  assert.match(tracking, /payload\.site_id !== SITE_ID/);
  assert.match(tracking, /payload\.events\.length > MAX_EVENTS/);
});

test('rate-limit buckets stay bounded after exhaustion and client limits run before global limits', () => {
  const originalNow = Date.now;
  try {
    for (const [relative, windowMs, clientPattern] of [
      ['app/api/contact/route.ts', 15 * 60_000, /limited\(`ip:\$\{ip\(request\)\}`/],
      ['app/ingest/track/route.ts', 60_000, /limited\(ip,/],
    ]) {
      const source = read(relative);
      const limiter = loadPrivateLimiter(relative);
      let now = 1_000_000;
      Date.now = () => now;
      assert.equal(limiter(`test:${relative}`, 2), false);
      assert.equal(limiter(`test:${relative}`, 2), false);
      now += windowMs - 1;
      for (let index = 0; index < 1_000; index += 1) assert.equal(limiter(`test:${relative}`, 2), true);
      now += 1;
      assert.equal(limiter(`test:${relative}`, 2), false, `${relative}: rejected calls must not extend or enlarge the bucket`);
      const clientIndex = source.search(clientPattern);
      const globalIndex = source.indexOf("limited('global'");
      assert.ok(clientIndex >= 0 && globalIndex >= 0 && clientIndex < globalIndex, `${relative}: client limit runs before global limit`);
    }
  } finally {
    Date.now = originalNow;
  }
});

test('contact rejects malformed, honeypot, and invalid fields before spending the global bucket', () => {
  const source = read('app/api/contact/route.ts');
  const globalIndex = source.indexOf("limited('global', 300)");
  const clientIndex = source.indexOf('limited(`ip:${ip(request)}`, 10)');
  const bodyReadIndex = source.indexOf('await readBoundedBody(request)');
  const honeypotIndex = source.indexOf("text(form, 'websiteConfirm')");
  const emailValidationIndex = source.indexOf('!EMAIL_RE.test(email)');
  const requiredValidationIndex = source.indexOf('!phoneLocal || !business');
  const emailLimitIndex = source.indexOf('limited(`email:${email}`, 3)');

  assert.ok(clientIndex >= 0 && clientIndex < bodyReadIndex, 'per-client IP limit stays early');
  assert.match(source, /text\(form, 'f0'\)/, 'the API enforces the opaque honeypot used by the client form');
  for (const [label, index] of [
    ['bounded/malformed body handling', bodyReadIndex],
    ['honeypot rejection', honeypotIndex],
    ['email validation', emailValidationIndex],
    ['required-field validation', requiredValidationIndex],
    ['per-email limit', emailLimitIndex],
  ]) {
    assert.ok(index >= 0 && index < globalIndex, `${label} must run before the global bucket`);
  }
});

test('reviewed accessibility fixes keep focus order, contrast tokens, and breadcrumbs aligned', () => {
  const form = read('app/contact-us/StandardContactForm.tsx');
  const contactCss = read('app/contact-us/contact.css');
  const serviceCss = read('app/globals.css');
  const service = read('app/services/[slug]/page.tsx');
  const guideCss = read('app/blog/bookkeeping-outsourcing-due-diligence-checklist/comparison.module.css');

  assert.doesNotMatch(contactCss, /sa-form-card\{order:-1\}/);
  assert.match(contactCss, /--tc-accent:#8a570c/);
  assert.match(form, /border:1px solid #7b8796/);
  assert.match(form, /border-color:#087ea4/);
  assert.match(form, /color:#5f6b7d/);
  assert.match(form, /button\{[^}]*color:#102f36/);
  assert.match(serviceCss, /\.ob-services-hero \.eyebrow,\.ob-detail-hero \.eyebrow\{color:#9de7d5\}/);
  assert.match(guideCss, /--accent:#0b6575/);
  assert.match(service, /position: 3, name: group\.title/);
  assert.match(service, /position: 4, name: service\.title/);
  assert.match(service, /<a href=\{`\/services#\$\{group\.id\}`\}>\{group\.title\}<\/a>/);
  assert.match(serviceCss, /\.ob-breadcrumb\{[^}]*flex-wrap:wrap/);
  assert.match(serviceCss, /\.pagination\{[^}]*flex-wrap:wrap/);
  assert.match(serviceCss, /\.ob-detail-figure img\{[^}]*object-fit:contain/);
});

test('every page template emits a route-specific canonical', () => {
  const pageFiles = walk('app', (file) => file.endsWith('page.tsx'));
  assert.equal(pageFiles.length, 16);
  for (const file of pageFiles) {
    const source = fs.readFileSync(file, 'utf8');
    assert.match(source, /alternates\s*:\s*\{\s*canonical\s*:/, `${file} is missing canonical metadata`);
  }
});

test('campaign validators reject only actual Unicode en and em dashes', () => {
  for (const name of ['validate_sep4_campaign.mjs', 'validate_sep7_campaign.mjs', 'validate_sep8_campaign.mjs', 'validate_sep10_campaign.mjs']) {
    const source = read(`scripts/${name}`);
    assert.match(source, /\\u2013\\u2014/);
    assert.doesNotMatch(source, /\/\[,-\]\//);
  }
  assert.doesNotMatch(read('scripts/create_aug21_blog.mjs'), /beside,not instead of,the/);
});

test('build and container contracts are deterministic, standalone, and non-root', async () => {
  const pkg = JSON.parse(read('package.json'));
  assert.match(pkg.scripts.test, /npm run build/);
  assert.doesNotMatch(pkg.scripts['test:source'], /python|pytest/);
  assert.match(pkg.scripts.lint, /next typegen/);
  const config = (await import(path.join(root, 'next.config.mjs') + `?standalone=${Date.now()}`)).default;
  assert.equal(config.output, 'standalone');
  const dockerfile = read('Dockerfile');
  assert.match(dockerfile, /RUN npm ci/);
  assert.equal(fs.existsSync(path.join(root, '.dockerignore')), true);
  assert.match(dockerfile, /\.next\/standalone/);
  assert.match(dockerfile, /\.next\/static/);
  assert.match(dockerfile, /COPY --from=builder[^\n]+\/public \.\/public/);
  assert.match(dockerfile, /USER node/);
  assert.match(dockerfile, /CMD \["node", "server\.js"\]/);
});

test('only the canonical form owns contact delivery and global headers are hardened', async () => {
  const acr = read('app/acr-client.tsx');
  assert.doesNotMatch(acr, /addEventListener\(['"]submit|sendBeacon|\/api\/contact/);
  const config = (await import(path.join(root, 'next.config.mjs') + `?headers=${Date.now()}`)).default;
  const headers = (await config.headers())[0].headers;
  for (const key of ['Content-Security-Policy', 'Strict-Transport-Security', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) {
    assert.ok(headers.some((item) => item.key === key), `missing ${key}`);
  }
  const csp = headers.find((item) => item.key === 'Content-Security-Policy')?.value || '';
  assert.match(csp, /frame-src[^;]*https:\/\/go\.oncehub\.com[^;]*https:\/\/\*\.oncehub\.com[^;]*https:\/\/\*\.scheduleonce\.com/);
});

test('reader-facing application and content sources contain no banned Unicode dash characters', () => {
  const files = [
    ...walk('app', (file) => /\.(?:ts|tsx)$/.test(file)),
    ...walk('content', (file) => file.endsWith('.md')),
  ];
  const violations = [];
  for (const file of files) {
    const value = fs.readFileSync(file, 'utf8');
    if (/[\u2013\u2014]/u.test(value)) violations.push(path.relative(root, file));
  }
  assert.deepEqual(violations, []);
});

test('current Website Optimization Project decisions are documented without retrospective claims', () => {
  const ledger = read('docs/website-optimization-project.md');
  assert.match(ledger, /Current remediation scope/i);
  assert.match(ledger, /service gap analysis/i);
  for (const slug of requiredSlugs) assert.ok(ledger.includes(slug), `ledger includes ${slug}`);
  assert.doesNotMatch(ledger, /proves? (?:the )?previous|retroactive/i);
});

test('rich article SVG titles hydrate as one text node', () => {
  const article = read('app/blog/[slug]/page.tsx');
  assert.match(article, /<title id="detection-chart-title">\{`\$\{chart\.title\}, measured in \$\{chart\.unit\.toLowerCase\(\)\}`\}<\/title>/);
});

test('research article grids, source links, and consultation actions remain usable on mobile', () => {
  const css = read('app/globals.css');
  const research = read('app/research/[slug]/page.tsx');
  const articleBody = read('app/article-body.tsx');
  assert.match(css, /\.article-layout>div\{min-width:0\}/);
  assert.match(css, /@media\(max-width:720px\)\{\.article-page\{padding-top:46px\}\.article-header h1\{font-size:36px;letter-spacing:-\.8px\}/);
  assert.doesNotMatch(css, /\.article-header h1\{[^}]*overflow-wrap:anywhere/);
  assert.match(css, /\.article-sources a\{[^}]*overflow-wrap:anywhere/);
  assert.match(articleBody, /target: '_blank', rel: 'noopener noreferrer'/);
  assert.match(research, /consultation-card-action/);
  assert.match(css, /\.consultation-card-action\{[^}]*text-decoration:underline/);
});

test('service workflow illustrations retain aspect ratio and become readable HTML steps on mobile', () => {
  const { fleetServices, workflowSteps } = loadFleetData();
  const index = read('app/services/page.tsx');
  const detail = read('app/services/[slug]/page.tsx');
  const css = read('app/globals.css');

  for (const service of fleetServices) {
    const steps = workflowSteps(service.illustration.caption);
    assert.equal(steps.length, 3, `${service.slug}: exactly three workflow steps`);
    assert.ok(steps.every((step) => step.length >= 3), `${service.slug}: non-empty workflow steps`);
  }
  assert.match(index, /workflowSteps\(service\.illustration\.caption\)/);
  assert.match(detail, /workflowSteps\(service\.illustration\.caption\)/);
  assert.match(index, /className="ob-mobile-flow"/);
  assert.match(detail, /className="ob-mobile-flow"/);
  assert.match(css, /\.ob-service-card img\{display:block;[^}]*object-fit:contain/);
  assert.match(css, /\.ob-detail-figure img\{display:block;[^}]*height:auto[^}]*object-fit:contain/);
  const desktopCss = css.slice(0, css.indexOf('@media(max-width:700px)'));
  assert.doesNotMatch(desktopCss, /\.ob-(?:service-card(?:>| )img|detail-figure(?:>| )img)[^{]*\{[^}]*display:none/);
  assert.match(css, /\.ob-mobile-flow\{display:none/);
  assert.match(css, /\.ob-mobile-flow b\{[^}]*color:var\(--ob-navy\)[^}]*font-size:15px/);
  assert.match(css, /@media\(max-width:700px\)[^]*\.ob-service-card>img,\.ob-detail-figure>img\{display:none\}[^]*\.ob-mobile-flow\{display:grid/);
});

test('research navigation and reading metadata are derived from content and preserve active filters', () => {
  const research = read('app/research/page.tsx');
  assert.match(research, /searchParams/);
  assert.match(research, /researchTopic\(post\)/);
  assert.match(research, /encodeURIComponent/);
  assert.match(research, /readingMinutes/);
  assert.doesNotMatch(research, /\(i%3\)\+1|6 min read/);
  assert.doesNotMatch(research, /href="\/research" key=\{cluster\}/);

  const alternatives = read('app/alternatives/page.tsx');
  assert.match(alternatives, /paginationHref/);
  assert.match(alternatives, /params\.set\('q'/);
  assert.match(alternatives, /params\.set\('type'/);
});

test('article metadata distinguishes publication, revision, evidence listing, and image meaning', () => {
  const blog = read('app/blog/[slug]/page.tsx');
  const research = read('app/research/[slug]/page.tsx');
  const data = read('app/data.ts');
  assert.match(blog, /dateModified: post\.updated/);
  assert.match(blog, /Updated <time dateTime=\{post\.updated\}>/);
  assert.match(blog, /alt=\{post\.description \|\| post\.excerpt\}/);
  assert.match(data, /updated: post\.updated/);
  assert.match(data, /quote\.sourceUrl/);
  assert.match(data, /source\.url === post\.quote\.sourceUrl/);
  assert.match(research, /Updated <time dateTime=\{post\.updated\}>/);
  assert.match(research, /listed sources/);
  assert.doesNotMatch(research, />Verified /);
  assert.match(research, /alt=\{post\.description\}/);
});

test('reviewed research has distinct prose and traceable claim-to-source evidence maps', () => {
  const names = [
    'offshore-bookkeeping-evidence-queue-aging-research.md',
    'offshore-bookkeeping-reconciliation-taxonomy-research.md',
    'offshore-bookkeeping-review-comment-research.md',
    'offshore-bookkeeping-source-freshness-research.md',
    'offshore-bookkeeping-time-zone-handoff-research.md',
  ];
  const paragraphOwners = new Map();
  for (const name of names) {
    const value = read(`content/research/${name}`);
    assert.match(value, /^sourceNotes:\s*\[/m, `${name}: evidence map`);
    assert.doesNotMatch(value, /rechecked on|The evidence supports this bounded conclusion/i, `${name}: unsupported verification/outcome claim`);
    const body = value.split(/\r?\n---\r?\n/, 2)[1] || '';
    for (const paragraph of body.split(/\n\s*\n/).map((item) => item.trim()).filter((item) => !item.startsWith('## ') && item.length >= 180)) {
      const owners = paragraphOwners.get(paragraph) || [];
      owners.push(name);
      paragraphOwners.set(paragraph, owners);
    }
  }
  const duplicates = [...paragraphOwners].filter(([, owners]) => owners.length > 1);
  assert.deepEqual(duplicates, [], `duplicated long research paragraphs: ${duplicates.map(([, owners]) => owners.join(',')).join('; ')}`);
});

test('content validation binds quote attribution and research evidence maps to listed sources', () => {
  const validator = read('scripts/validate-content.mjs');
  assert.match(validator, /quote\.sourceUrl/);
  assert.match(validator, /sourceNotes/);
  assert.match(validator, /sourceUrls/);
  assert.match(validator, /listed source/);
});
