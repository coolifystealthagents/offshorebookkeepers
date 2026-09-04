import fs from 'node:fs';
import crypto from 'node:crypto';

const root = process.env.SEP4_BASE_URL || 'http://127.0.0.1:3000';
const directory = '.paperclip/daily-content/2026-09-04';
const blog = JSON.parse(fs.readFileSync(`${directory}/blog.json`));
const research = JSON.parse(fs.readFileSync(`${directory}/research.json`));
const records = [...blog, ...research];
const fail = (message) => { throw new Error(message); };

if (blog.length !== 12 || research.length !== 5) fail(`expected 12 Blog + 5 Research; received ${blog.length} + ${research.length}`);
for (const field of ['title', 'slug', 'route', 'canonical', 'sourcePath']) {
  if (new Set(records.map((record) => record[field])).size !== 17) fail(`${field} is not unique`);
}
const hashes = records.map((record) => crypto.createHash('sha256').update(fs.readFileSync(record.sourcePath)).digest('hex'));
if (new Set(hashes).size !== 17) fail('source content hashes are not unique');

for (const record of records) {
  const source = fs.readFileSync(record.sourcePath, 'utf8');
  if (!source.includes('published: "2026-09-04"') || !source.includes('September 4, 2026')) fail(`${record.sourcePath} has incorrect dates`);
  if (/[—–]/.test(source)) fail(`${record.sourcePath} contains an em or en dash`);
  const image = source.match(/^featuredImage: "([^"]+)"/m)?.[1];
  if (!image || !fs.existsSync(`public${image}`)) fail(`${record.sourcePath} lacks an existing asset`);
  const otherFiles = [...fs.readdirSync('content/blog'), ...fs.readdirSync('content/research')].filter((name) => name === `${record.slug}.md`);
  if (otherFiles.length !== 1) fail(`${record.slug} is duplicated across content families`);
}

const [blogIndex, researchIndex, sitemap] = await Promise.all(['/blog', '/research', '/sitemap.xml'].map(async (route) => {
  const response = await fetch(root + route);
  if (response.status !== 200) fail(`${route} returned ${response.status}`);
  return response.text();
}));

for (const record of records) {
  const response = await fetch(root + record.route, { redirect: 'manual' });
  if (response.status !== 200) fail(`${record.route} returned ${response.status}`);
  const html = await response.text();
  if (!html.includes('September 4, 2026')) fail(`${record.route} lacks visible date`);
  if (!html.includes('"datePublished":"2026-09-04"')) fail(`${record.route} lacks structured datePublished`);
  if (!html.includes(`<link rel="canonical" href="${record.canonical}"`)) fail(`${record.route} is not self-canonical`);
  const index = record.route.startsWith('/blog/') ? blogIndex : researchIndex;
  if (!index.includes(`href="${record.route}"`)) fail(`${record.route} is absent from index`);
  if (!sitemap.includes(`<loc>${record.canonical}</loc>`)) fail(`${record.route} is absent from sitemap`);
}

console.log('PASS: 12 Blog + 5 Research; unique metadata and hashes; 17 HTTP 200 self-canonical routes with visible and structured dates, index links, sitemap entries, and existing assets.');
