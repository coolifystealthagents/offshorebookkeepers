import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const blogManifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-05/blog-off85.json', 'utf8'));
const researchManifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-05/research-off84.json', 'utf8'));
const articles = [...blogManifest.articles, ...researchManifest.articles];
if (blogManifest.articles.length !== 12 || researchManifest.articles.length !== 5 || articles.length !== 17) {
  throw new Error(`expected 12 Blog + 5 Research, received ${blogManifest.articles.length} + ${researchManifest.articles.length}`);
}

const decode = (value) => value
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&quot;|&#x22;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'")
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ').trim();
const markdownText = (value) => value
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  .replace(/[*_`>#]/g, '')
  .replace(/\s+/g, ' ').trim();
const comparable = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');

const baseUrl = process.env.OFF85_BASE_URL;
const blogIndex = decode(baseUrl ? await (await fetch(`${baseUrl}/blog`)).text() : fs.readFileSync('.next/server/app/blog.html', 'utf8'));
const researchIndex = baseUrl ? decode(await (await fetch(`${baseUrl}/research`)).text()) : null;
const sitemap = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
const results = [];
const checkedInternalLinks = new Map();

for (const article of articles) {
  const family = article.family === 'blog' ? 'blog' : 'research';
  const sourcePath = article.sourcePath;
  const source = fs.readFileSync(sourcePath, 'utf8');
  const title = source.match(/^title: "([^"]+)"$/m)?.[1];
  const date = source.match(/^published: "([^"]+)"$/m)?.[1];
  const image = source.match(/^featuredImage: "([^"]+)"$/m)?.[1];
  const body = source.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/)?.[1]?.trim();
  if (!title || !date || !image || !body) throw new Error(`${article.slug}: incomplete source`);
  if (date !== '2026-10-05') throw new Error(`${article.slug}: date ${date}`);
  const htmlPath = `.next/server/app/${family}/${article.slug}.html`;
  const rawHtml = fs.readFileSync(htmlPath, 'utf8');
  const htmlText = decode(rawHtml);
  const comparableHtml = comparable(htmlText);
  const canonical = `https://offshorebookkeepers.com/${family}/${article.slug}`;
  if (!rawHtml.includes(canonical)) throw new Error(`${article.slug}: missing canonical`);
  if (!htmlText.includes(title)) throw new Error(`${article.slug}: missing rendered title`);
  if (!rawHtml.includes('2026-10-05')) throw new Error(`${article.slug}: missing rendered date`);
  if (!rawHtml.includes('datePublished') || !rawHtml.includes('2026-10-05')) throw new Error(`${article.slug}: missing datePublished`);
  if (!rawHtml.includes(image)) throw new Error(`${article.slug}: missing rendered image`);
  const paragraphs = body.split(/\n\s*\n/).filter((p) => p && !p.startsWith('#')).map(markdownText).filter((p) => p.split(/\s+/).length >= 8);
  const missingParagraphs = paragraphs.filter((p) => !comparableHtml.includes(comparable(p)));
  if (missingParagraphs.length) throw new Error(`${article.slug}: ${missingParagraphs.length} source paragraphs absent from rendered body: ${missingParagraphs[0].slice(0, 120)}`);
  const indexText = family === 'blog' ? blogIndex : researchIndex;
  if (indexText && !indexText.includes(title)) throw new Error(`${article.slug}: absent from ${family} index`);
  if (!sitemap.includes(canonical)) throw new Error(`${article.slug}: absent from sitemap`);
  const imagePath = path.join('public', image);
  const imageBuffer = fs.readFileSync(imagePath);
  const imageMeta = await sharp(imageBuffer).metadata();
  if (!imageMeta.format || !imageMeta.width || !imageMeta.height) throw new Error(`${article.slug}: image decode failed`);
  let imageHttpStatus = null;
  let imageHttpContentType = null;
  if (baseUrl) {
    const imageResponse = await fetch(`${baseUrl}${image}`);
    imageHttpStatus = imageResponse.status;
    imageHttpContentType = imageResponse.headers.get('content-type');
    if (!imageResponse.ok || !imageHttpContentType?.startsWith('image/')) throw new Error(`${article.slug}: image HTTP ${imageHttpStatus} ${imageHttpContentType}`);
    const responseImageMeta = await sharp(Buffer.from(await imageResponse.arrayBuffer())).metadata();
    if (responseImageMeta.format !== imageMeta.format || responseImageMeta.width !== imageMeta.width || responseImageMeta.height !== imageMeta.height) throw new Error(`${article.slug}: HTTP image signature/decode differs from source asset`);
  }
  const internalLinks = [
    ...[...source.matchAll(/\]\((\/[^)]+)\)/g)].map((match) => match[1]),
    ...[...source.matchAll(/"(\/(?:services|contact-us|blog|research)[^"]*)"/g)].map((match) => match[1]),
  ];
  for (const href of internalLinks) {
    if (!baseUrl || checkedInternalLinks.has(href)) continue;
    const response = await fetch(`${baseUrl}${href}`, { redirect: 'manual' });
    if (response.status >= 400) throw new Error(`${article.slug}: internal link ${href} returned ${response.status}`);
    checkedInternalLinks.set(href, response.status);
  }
  const sourceHash = hash(source);
  if (article.contentHash && sourceHash !== article.contentHash) throw new Error(`${article.slug}: manifest/source hash mismatch ${article.contentHash} != ${sourceHash}`);
  results.push({ family, slug: article.slug, title, date, canonical, sourceHash, renderedParagraphs: paragraphs.length, image, imageFormat: imageMeta.format, imageWidth: imageMeta.width, imageHeight: imageMeta.height, imageHttpStatus, imageHttpContentType });
}

console.log(JSON.stringify({ required: 17, validated: results.length, timezone: 'UTC', publicationDate: '2026-10-05', checkedInternalLinks: Object.fromEntries(checkedInternalLinks), results }, null, 2));
