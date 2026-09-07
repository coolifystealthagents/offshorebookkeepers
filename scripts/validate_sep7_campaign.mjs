import fs from 'node:fs';
import crypto from 'node:crypto';

const root = (process.env.SEP7_BASE_URL || 'http://127.0.0.1:3000').replace(/\/$/, '');
const directory = '.paperclip/daily-content/2026-09-07';
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
  const expectedType = record.route.startsWith('/blog/') ? 'blog' : 'research';
  if (!source.includes('published: "2026-09-07"') || !source.includes('September 7, 2026')) fail(`${record.sourcePath} has incorrect dates`);
  if (!source.includes(`type: "${expectedType}"`)) fail(`${record.sourcePath} has incorrect family`);
  if (/[—–]/.test(source)) fail(`${record.sourcePath} contains an em or en dash`);
  const image = source.match(/^featuredImage: "([^"]+)"/m)?.[1];
  if (!image || !fs.existsSync(`public${image}`)) fail(`${record.sourcePath} lacks an existing asset`);
  const familyHits = ['blog', 'research'].filter((family) => fs.existsSync(`content/${family}/${record.slug}.md`));
  if (familyHits.length !== 1 || familyHits[0] !== expectedType) fail(`${record.slug} is duplicated or in the wrong family`);
  if (expectedType === 'research' && (source.match(/^- \[/gm) || []).length < 10) fail(`${record.sourcePath} has fewer than 10 sources`);
  if (expectedType === 'research' && !source.includes('## Scope and limitations')) fail(`${record.sourcePath} lacks scope and limitations`);
}

const fetchText = async (route) => {
  const response = await fetch(root + route, { redirect: 'manual' });
  if (response.status !== 200) fail(`${route} returned ${response.status}`);
  return response.text();
};
const [blogIndex, researchIndex, sitemap] = await Promise.all(['/blog', '/research', '/sitemap.xml'].map(fetchText));

for (const record of records) {
  const html = await fetchText(record.route);
  if (!html.includes('September 7, 2026')) fail(`${record.route} lacks visible date`);
  if (!html.includes('"datePublished":"2026-09-07"')) fail(`${record.route} lacks structured datePublished`);
  if (!html.includes(`<link rel="canonical" href="${record.canonical}"`)) fail(`${record.route} is not self-canonical`);
  const index = record.route.startsWith('/blog/') ? blogIndex : researchIndex;
  if (!index.includes(`href="${record.route}"`)) fail(`${record.route} is absent from its family index`);
  if (!sitemap.includes(`<loc>${record.canonical}</loc>`)) fail(`${record.route} is absent from sitemap`);
  const renderedImages = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((match) => match[1]);
  const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  if (!ogImage) fail(`${record.route} lacks an OG image`);
  for (const image of new Set([...renderedImages, ogImage])) {
    const imageUrl = image.startsWith('http') ? image : `${root}${image}`;
    const response = await fetch(imageUrl, { redirect: 'follow' });
    if (response.status !== 200) fail(`${record.route} image ${imageUrl} returned ${response.status}`);
  }
}

console.log(`PASS ${root}: Blog 12/12; Research 5/5; all 17 routes pass HTTP 200, visible and structured date, self-canonical, family, index, sitemap, rendered image, OG image, scope/limits, and unique identity gates.`);
