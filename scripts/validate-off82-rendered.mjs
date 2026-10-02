import crypto from 'node:crypto';
import fs from 'node:fs';
import sharp from 'sharp';

const base = (process.env.OFF82_VERIFY_BASE_URL || 'http://127.0.0.1:3417').replace(/\/$/, '');
const output = process.env.OFF82_VERIFY_OUTPUT || '';
const blog = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/blog-off-82.json', 'utf8')).articles;
const research = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/research-off81.json', 'utf8'));
const entries = [...blog, ...research];
const failures = [];
const assetCache = new Map();

const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');
const decode = (value) => value
  .replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const visibleText = (value) => decode(value
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const normalize = (value) => visibleText(value).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const words = (value) => value.match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu) || [];
const fm = (raw, key) => (raw.match(new RegExp(`^${key}:\\s*["']?(.*?)["']?\\s*$`, 'm')) || [,''])[1];
const fmJson = (raw, key) => JSON.parse((raw.match(new RegExp(`^${key}:\\s*(.+)$`, 'm')) || [,'[]'])[1]);

function expectedSegments(raw, family) {
  const body = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n([\s\S]*)$/)?.[1] || '';
  const withoutSources = body.split(family === 'research' ? /^## Sources and checked dates\s*$/m : /^## Sources\s*$/m)[0];
  return withoutSources.split(/\n\s*\n/).map((segment) => segment
    .replace(/^#{2,3}\s+/gm, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
  ).map(normalize).filter((segment) => words(segment).length > 0);
}

async function get(url) {
  const response = await fetch(url, {redirect: 'follow', headers: {'user-agent': 'OFF-82-rendered-validator/1.0'}});
  return response;
}

async function verifyImage(imagePath) {
  if (assetCache.has(imagePath)) return assetCache.get(imagePath);
  const response = await get(base + imagePath);
  const buffer = Buffer.from(await response.arrayBuffer());
  const mime = response.headers.get('content-type') || '';
  const signature = mime.includes('webp')
    ? buffer.subarray(0, 4).toString() === 'RIFF' && buffer.subarray(8, 12).toString() === 'WEBP'
    : mime.includes('svg') ? /<svg\b/i.test(buffer.toString('utf8', 0, 500))
      : mime.includes('png') ? buffer.subarray(1, 4).toString() === 'PNG'
        : mime.includes('jpeg') ? buffer[0] === 0xff && buffer[1] === 0xd8 : false;
  let metadata = {};
  try { metadata = await sharp(buffer).metadata(); } catch {}
  const result = {
    url: base + imagePath, status: response.status, mime, signature,
    decode: Boolean(metadata.width && metadata.height), width: metadata.width || null,
    height: metadata.height || null, format: metadata.format || null, sha256: sha256(buffer),
  };
  result.pass = result.status === 200 && mime.startsWith('image/') && signature && result.decode;
  assetCache.set(imagePath, result);
  return result;
}

const blogIndexResponse = await get(base + '/blog');
const blogIndex = await blogIndexResponse.text();
const researchIndexResponse = await get(base + '/research');
const researchIndex = await researchIndexResponse.text();
const sitemapResponse = await get(base + '/sitemap.xml');
const sitemap = await sitemapResponse.text();
const routes = [];

for (const entry of entries) {
  const family = entry.sourcePath.includes('/research/') ? 'research' : 'blog';
  const route = entry.route || `/${family}/${entry.slug}`;
  const url = base + route;
  const raw = fs.readFileSync(entry.sourcePath, 'utf8');
  const segments = expectedSegments(raw, family);
  const response = await get(url);
  const html = await response.text();
  const articleHtml = (html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i) || [,''])[1];
  const articleVisible = normalize(articleHtml
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<aside\b[^>]*>[\s\S]*?<\/aside>/gi, ' '));
  const missingSegments = segments.filter((segment) => !articleVisible.includes(segment));
  const title = fm(raw, 'title');
  const published = fm(raw, 'published');
  const updated = fm(raw, 'updated');
  const imagePath = fm(raw, 'featuredImage');
  const takeaways = fmJson(raw, 'takeaways');
  const faqs = fmJson(raw, 'faqs');
  const renderedFaqs = family === 'blog' ? faqs.flatMap((faq) => Array.isArray(faq) ? faq : [faq.question, faq.answer]) : [];
  const supplemental = [...takeaways, ...renderedFaqs].map(normalize);
  const missingSupplemental = supplemental.filter((segment) => segment && !articleVisible.includes(segment));
  const substantiveText = [...segments, ...supplemental].join(' ');
  const bodyWords = words(substantiveText).length;
  const canonical = decode((html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i) || [,''])[1]);
  const h1 = visibleText((html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [,''])[1]);
  const visibleDate = (html.match(/<time\b[^>]*dateTime="([^"]+)"/i) || [,''])[1];
  const schemaBlocks = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)]
    .map((match) => { try { return JSON.parse(decode(match[1])); } catch { return null; } }).filter(Boolean);
  const schemaNodes = schemaBlocks.flatMap((schema) => Array.isArray(schema['@graph']) ? schema['@graph'] : [schema]);
  const schema = schemaNodes.find((node) => ['Article', 'BlogPosting'].includes(node?.['@type'])) || {};
  const image = await verifyImage(imagePath);
  const internalLinks = [...new Set([...raw.matchAll(/\[[^\]]+\]\((\/[^)]+)\)/g)].map((match) => match[1]))];
  const internalLinkResults = [];
  for (const href of internalLinks) { const linked = await get(base + href); internalLinkResults.push({href, status: linked.status, pass: linked.status === 200}); }
  const sourceLinks = [...new Set([...raw.matchAll(/\[[^\]]+\]\((https?:\/\/[^)]+)\)/g)].map((match) => match[1]))];
  const sourceLinkResults = sourceLinks.map((href) => ({href, rendered: html.includes(`href="${href}`)}));
  const expectedCanonical = `https://offshorebookkeepers.com${route}`;
  const canonicalMatches = canonical === (base.startsWith('http://127.') ? expectedCanonical : url)
    && (schema.mainEntityOfPage || schema.url) === expectedCanonical;
  const indexHtml = family === 'blog' ? blogIndex : researchIndex;
  const checks = {
    http200: response.status === 200, title: h1 === title,
    completeBody: missingSegments.length === 0 && missingSupplemental.length === 0,
    bodyMinimum: bodyWords >= (family === 'blog' ? 900 : 1200),
    sourceHash: sha256(raw) === entry.contentHash,
    visibleDate: visibleDate === published, datePublished: schema.datePublished === published,
    dateModified: schema.dateModified === updated, canonical: canonicalMatches,
    contextualLinks: internalLinkResults.every((item) => item.pass),
    sources: sourceLinkResults.length >= 2 && sourceLinkResults.every((item) => item.rendered),
    imageReference: html.includes(`src="${imagePath}"`), image: image.pass,
    index: indexHtml.includes(route), sitemap: sitemap.includes(expectedCanonical),
  };
  const pass = Object.values(checks).every(Boolean);
  if (!pass) failures.push(`${route}: ${Object.entries(checks).filter(([, value]) => !value).map(([key]) => key).join(', ')}`);
  routes.push({family, slug: entry.slug, route, url, status: response.status, title, h1, bodyWords,
    sourceHash: sha256(raw), renderedBodyHash: sha256(substantiveText), published, updated,
    visibleDate, datePublished: schema.datePublished || null, dateModified: schema.dateModified || null,
    canonical, image: {path: imagePath, ...image}, internalLinks: internalLinkResults,
    sourceLinks: sourceLinkResults, missingSegments, missingSupplemental, checks, pass});
}

const report = {generatedAt: new Date().toISOString(), base, required: 17,
  passed: routes.filter((route) => route.pass).length, failed: routes.filter((route) => !route.pass).length,
  indexes: {blog: {status: blogIndexResponse.status, present: blog.filter((entry) => blogIndex.includes(`/blog/${entry.slug}`)).length, total: 12},
    research: {status: researchIndexResponse.status, present: research.filter((entry) => researchIndex.includes(entry.route)).length, total: 5}},
  sitemap: {status: sitemapResponse.status, present: entries.filter((entry) => sitemap.includes(`https://offshorebookkeepers.com${entry.route || `/blog/${entry.slug}`}`)).length, total: 17},
  images: [...assetCache.values()], routes};
if (output) fs.writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({generatedAt: report.generatedAt, required: 17, passed: report.passed, failed: report.failed, indexes: report.indexes, sitemap: report.sitemap, failures}, null, 2));
if (failures.length || report.indexes.blog.present !== 12 || report.indexes.research.present !== 5 || report.sitemap.present !== 17) process.exit(1);
