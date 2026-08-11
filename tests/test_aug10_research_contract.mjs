import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug10-2026/research.json'), 'utf8'));
assert.equal(manifest.schemaVersion, 1);
assert.equal(manifest.contract, 'sites3-aug10-public-date-v6');
assert.equal(manifest.family, 'research');
assert.equal(manifest.repository, 'coolifystealthagents/offshorebookkeepers');
assert.equal(manifest.branch, 'main');
assert.ok(manifest.entries.length >= manifest.minimum);
assert.equal(new Set(manifest.entries.map((entry) => entry.slug)).size, manifest.entries.length);

const detailRoute = fs.readFileSync(path.join(root, 'app/research/[slug]/page.tsx'), 'utf8');
const indexRoute = fs.readFileSync(path.join(root, 'app/research/page.tsx'), 'utf8');
const loader = fs.readFileSync(path.join(root, 'lib/content.ts'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
assert.match(detailRoute, /datePublished:post\.published/);
assert.match(detailRoute, /Verified \{post\.updated\}/);
assert.match(detailRoute, /alternates:\{canonical:`\/research\/\$\{slug\}`/);
assert.match(sitemap, /research\.map\(r=>`\/research\/\$\{r\.slug\}`\)/);
assert.match(loader, /\.sort\(\(a, b\) => b\.published\.localeCompare\(a\.published\)\)/);
assert.match(indexRoute, /getContent\('research'\)/);

function sourceDate(file) {
  const block = fs.readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/);
  assert.ok(block, `${file} has frontmatter`);
  return block[1].match(/^published:\s*["']([^"']+)["']/m)?.[1];
}

function builtArticle(slug) {
  const candidates = [
    path.join(root, '.next/server/app/research', slug, 'page.html'),
    path.join(root, '.next/server/app/research', `${slug}.html`),
  ];
  return candidates.find((file) => fs.existsSync(file));
}

for (const entry of manifest.entries) {
  assert.match(entry.route, /^\/research\/[a-z0-9-]+$/);
  assert.equal(entry.route, `/research/${entry.slug}`);
  assert.equal(entry.provenance, 'original-aug10-batch');
  assert.equal(entry.introducedByCommit, '0f2e0031ca60885f9d2d76ce18d83ed878489e85');
  assert.equal(entry.sourceDateField, 'published');
  assert.equal(entry.sourceDate, '2026-08-10');
  assert.equal(entry.renderedDate, '2026-08-10');
  assert.deepEqual(entry.renderedDateFields, ['datePublished']);
  const source = path.join(root, entry.sourcePath);
  assert.ok(fs.existsSync(source), `${entry.sourcePath} exists`);
  assert.equal(sourceDate(source), '2026-08-10', `${entry.slug} source date`);
  assert.equal(spawnSync('git', ['cat-file', '-e', `${entry.introducedByCommit}^:${entry.sourcePath}`]).status !== 0, true, `${entry.slug} absent before introducing commit`);
  execFileSync('git', ['cat-file', '-e', `${entry.introducedByCommit}:${entry.sourcePath}`]);
  assert.match(execFileSync('git', ['diff', '--name-status', `${entry.introducedByCommit}^`, entry.introducedByCommit, '--', entry.sourcePath], { encoding: 'utf8' }), /^A\s+/m);
  const built = builtArticle(entry.slug);
  assert.ok(built, `${entry.slug} has a built route`);
  const html = fs.readFileSync(built, 'utf8');
  assert.match(html, /2026-08-10/);
  assert.match(html, new RegExp(`research/${entry.slug}`));
}

const dates = manifest.entries.map((entry) => sourceDate(path.join(root, entry.sourcePath)));
assert.ok(dates.every((date) => date === '2026-08-10'));
assert.deepEqual([...dates].sort((a, b) => b.localeCompare(a)), dates);
console.log(`August 10 Research contract passed for ${manifest.entries.length} articles.`);
