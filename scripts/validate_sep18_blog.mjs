import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const date = '2026-09-18';
const manifestPath = path.join(process.cwd(), '.paperclip/daily-content', date, 'blog.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const contentCommit = execFileSync('git', ['rev-parse', 'HEAD'], {encoding:'utf8'}).trim();
const errors = [];
if (manifest.length !== 12) errors.push(`expected 12 manifest entries, found ${manifest.length}`);
const slugs = new Set();
const hashes = new Set();
for (const item of manifest) {
  if (slugs.has(item.slug)) errors.push(`${item.slug}: duplicate slug`);
  slugs.add(item.slug);
  const file = path.join(process.cwd(), item.sourcePath);
  if (!fs.existsSync(file)) { errors.push(`${item.slug}: source missing`); continue; }
  const raw = fs.readFileSync(file, 'utf8');
  const body = raw.replace(/^---[\s\S]*?---/, '').replace(/\[[^\]]+\]\([^\)]+\)/g, 'link');
  const words = body.match(/\b[\w’'-]+\b/g)?.length || 0;
  if (words < 900) errors.push(`${item.slug}: ${words} substantive words; minimum 900`);
  for (const field of ['title','description','published','updated','category','type','featuredImage','sources','takeaways','faqs']) {
    if (!new RegExp(`^${field}:\\s*.+`, 'm').test(raw)) errors.push(`${item.slug}: missing ${field}`);
  }
  if (!raw.includes(`published: "${date}"`) || !raw.includes(`updated: "${date}"`)) errors.push(`${item.slug}: publication date mismatch`);
  if (!raw.includes('[plan the role with Offshore Bookkeepers](/contact-us)')) errors.push(`${item.slug}: missing contact CTA`);
  if (!/\[the relevant Offshore Bookkeepers service\]\(\/services\//.test(raw)) errors.push(`${item.slug}: missing service link`);
  if ((raw.match(/https:\/\//g) || []).length < 2) errors.push(`${item.slug}: fewer than two authoritative source links`);
  const image = raw.match(/^featuredImage:\s*"([^"]+)"/m)?.[1];
  if (!image || !fs.existsSync(path.join(process.cwd(), 'public', image.replace(/^\//,'')))) errors.push(`${item.slug}: featured image missing`);
  const hash = crypto.createHash('sha256').update(raw).digest('hex');
  if (hashes.has(hash)) errors.push(`${item.slug}: duplicate content hash`);
  hashes.add(hash);
  item.contentHash = hash;
  item.wordCount = words;
  item.contentCommit = contentCommit;
  item.status = 'validated';
}
const inventory = fs.readdirSync(path.join(process.cwd(), 'content/blog')).filter(f => f.endsWith('.md'));
for (const slug of slugs) if (inventory.filter(f => f === `${slug}.md`).length !== 1) errors.push(`${slug}: inventory collision`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(`September 18 contract passed: 12 unique articles, ${[...manifest].reduce((n,x)=>n+x.wordCount,0)} substantive words, images and links present.`);
