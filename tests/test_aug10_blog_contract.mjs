import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';

const root = process.cwd();
const manifestPath = path.join(root, '.paperclip/aug10-2026/blog.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
assert.equal(manifest.contract, 'sites3-aug10-public-date-v6');
assert.ok(manifest.entries.length >= manifest.minimum);
assert.equal(new Set(manifest.entries.map((entry) => entry.slug)).size, manifest.entries.length);

const detailRoute = fs.readFileSync(path.join(root, 'app/blog/[slug]/page.tsx'), 'utf8');
const sitemapRoute = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
const dataSource = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
assert.match(detailRoute, /datePublished:\s*post\.published/);
assert.match(detailRoute, /Published \{post\.published\}/);
assert.match(detailRoute, /alternates:\s*\{\s*canonical:\s*`\/blog\/\$\{slug\}`/);
assert.match(sitemapRoute, /blogs\.map.*blog\/\$\{b\.slug\}/s);
assert.match(dataSource, /\.sort\(\(a, b\) => b\.published\.localeCompare\(a\.published\)\)/);

function frontmatter(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const block = raw.match(/^---\n([\s\S]*?)\n---/);
  assert.ok(block, `${file} has frontmatter`);
  const published = block[1].match(/^published:\s*["']([^"']+)["']/m);
  return published?.[1];
}

function builtArticle(slug) {
  const candidates = [
    path.join(root, '.next/server/app/blog', slug, 'page.html'),
    path.join(root, '.next/server/app/blog', `${slug}.html`),
  ];
  return candidates.find((file) => fs.existsSync(file));
}

for (const entry of manifest.entries) {
  assert.match(entry.route, /^\/blog\/[a-z0-9-]+$/);
  assert.equal(entry.sourceDate, '2026-08-10');
  assert.equal(entry.renderedDate, '2026-08-10');
  assert.equal(entry.sourceDateField, 'published');
  const source = path.join(root, entry.sourcePath);
  assert.ok(fs.existsSync(source), `${entry.sourcePath} exists`);
  assert.equal(frontmatter(source), '2026-08-10', `${entry.slug} source date`);

  const parent = `${entry.introducedByCommit}^:${entry.sourcePath}`;
  const before = spawnSync('git', ['cat-file', '-e', parent]);
  assert.notEqual(before.status, 0, `${entry.slug} absent before introducing commit`);
  const introduced = execFileSync('git', ['cat-file', '-e', `${entry.introducedByCommit}:${entry.sourcePath}`], { encoding: 'utf8' });
  assert.equal(introduced, '', `${entry.slug} present at introducing commit`);
  const diff = execFileSync('git', ['diff', '--name-status', `${entry.introducedByCommit}^`, entry.introducedByCommit, '--', entry.sourcePath], { encoding: 'utf8' });
  assert.match(diff, /^A\s+/m, `${entry.slug} added by introducing commit`);

  const built = builtArticle(entry.slug);
  assert.ok(built, `${entry.slug} has a built route`);
  const html = fs.readFileSync(built, 'utf8');
  assert.match(html, /2026-08-10/, `${entry.slug} rendered date`);
  assert.match(html, new RegExp(`blog/${entry.slug}`), `${entry.slug} canonical route`);
}

const orderedDates = manifest.entries.map((entry) => frontmatter(path.join(root, entry.sourcePath)));
assert.ok(orderedDates.every((date) => date === '2026-08-10'));
console.log(`August 10 blog contract passed for ${manifest.entries.length} articles.`);
