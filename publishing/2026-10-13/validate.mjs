import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '../..');
const manifestPath = path.join(import.meta.dirname, 'manifest.json');
const failures = [];
const fail = (message) => failures.push(message);
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const baseSha = '42ff31658ae649e1dedb186dd65d9331b93045b3';
const dateWords = /(?:2026-10-13|oct(?:ober)?\s+13(?:,\s*2026)?)/i;
const authoritativeHosts = new Set(['www.gao.gov','csrc.nist.gov','www.nist.gov','www.cisa.gov','www.irs.gov','pcaobus.org','www.sec.gov','fedpaymentsimprovement.org']);

function frontmatter(raw, label) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]+)$/);
  if (!match) { fail(`${label}: invalid frontmatter`); return { meta: {}, body: '' }; }
  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const at = line.indexOf(':');
    if (at < 1) continue;
    const key = line.slice(0, at).trim(); const rawValue = line.slice(at + 1).trim();
    try { meta[key] = rawValue.startsWith('[') || rawValue.startsWith('{') ? JSON.parse(rawValue) : rawValue.replace(/^['"]|['"]$/g, ''); }
    catch { fail(`${label}: invalid JSON in ${key}`); }
  }
  return { meta, body: match[2] };
}

if (manifest.site !== 'OffshoreBookkeepers.com') fail('wrong manifest site');
if (manifest.repository !== 'coolifystealthagents/offshorebookkeepers' || manifest.branch !== 'main') fail('wrong repository or branch');
if (manifest.baseSha !== baseSha) fail('unexpected base SHA');
if (manifest.publicationDate !== '2026-10-13') fail('wrong manifest publication date');
if (manifest.counts?.blog !== 12 || manifest.counts?.research !== 5 || manifest.counts?.total !== 17) fail('manifest counts must be 12 Blog + 5 Research');
if (manifest.items?.length !== 17) fail('manifest must list 17 items');

const slugs = new Set(); const titles = new Set(); const thumbs = new Set(); const batchParagraphs = new Map();
for (const item of manifest.items || []) {
  const label = `${item.section}/${item.slug}`;
  if (slugs.has(item.slug)) fail(`${label}: duplicate slug`); slugs.add(item.slug);
  if (titles.has(item.title)) fail(`${label}: duplicate title`); titles.add(item.title);
  if (thumbs.has(item.thumbnailPath)) fail(`${label}: duplicate thumbnail path`); thumbs.add(item.thumbnailPath);
  if (dateWords.test(item.title)) fail(`${label}: title contains publication date`);
  if (item.publicationDate !== '2026-10-13') fail(`${label}: wrong manifest item date`);
  const expectedSection = item.sourcePath.includes('/blog/') ? 'Blog' : item.sourcePath.includes('/research/') ? 'Research' : '';
  if (expectedSection !== item.section) fail(`${label}: mixed section/source path`);
  if (item.route !== `/${item.section.toLowerCase()}/${item.slug}`) fail(`${label}: wrong route`);
  const sourceFull = path.join(root, item.sourcePath); const thumbFull = path.join(root, item.thumbnailPath);
  if (!fs.existsSync(sourceFull)) { fail(`${label}: missing article`); continue; }
  if (!fs.existsSync(thumbFull)) { fail(`${label}: missing thumbnail`); continue; }
  const raw = fs.readFileSync(sourceFull, 'utf8'); const { meta, body } = frontmatter(raw, label);
  if (meta.title !== item.title) fail(`${label}: title mismatch`);
  if (meta.published !== '2026-10-13' || meta.updated !== '2026-10-13') fail(`${label}: frontmatter dates mismatch`);
  if (meta.type !== item.section.toLowerCase()) fail(`${label}: wrong content type`);
  if (meta.featuredImage !== `/${item.thumbnailPath.replace(/^public\//,'')}`) fail(`${label}: featuredImage mismatch`);
  if (!Array.isArray(meta.takeaways) || meta.takeaways.length < 3) fail(`${label}: needs at least three takeaways`);
  const headings = [...body.matchAll(/^##\s+(.+)$/gm)];
  if (headings.length < 6) fail(`${label}: needs at least six substantive sections`);
  const words = (body.match(/\b[\w’'-]+\b/g) || []).length;
  if (item.section === 'Blog' && words < 950) fail(`${label}: Blog body too short (${words})`);
  if (item.section === 'Research' && words < 1150) fail(`${label}: Research body too short (${words})`);
  if (item.section === 'Research') {
    if (!Array.isArray(meta.sources) || meta.sources.length !== 10) fail(`${label}: Research requires exactly 10 authoritative sources`);
    const sourceUrls = new Set();
    for (const source of meta.sources || []) {
      let url; try { url = new URL(source.url); } catch { fail(`${label}: invalid source URL`); continue; }
      if (url.protocol !== 'https:' || !authoritativeHosts.has(url.hostname)) fail(`${label}: source is not on the authoritative HTTPS allowlist: ${source.url}`);
      if (sourceUrls.has(source.url)) fail(`${label}: duplicate research source`); sourceUrls.add(source.url);
    }
    if (!Array.isArray(meta.sourceNotes) || meta.sourceNotes.length < 3) fail(`${label}: incomplete evidence map`);
  }
  for (const paragraph of body.split(/\n\s*\n/)) {
    const normalized = paragraph.replace(/^#+\s*/, '').replace(/\s+/g, ' ').trim().toLowerCase();
    if (normalized.length < 180) continue;
    const prior = batchParagraphs.get(normalized);
    if (prior) fail(`${label}: duplicate substantive paragraph also in ${prior}`); else batchParagraphs.set(normalized, label);
  }
  const svg = fs.readFileSync(thumbFull, 'utf8');
  if (!/width="1200" height="630" viewBox="0 0 1200 630"/.test(svg)) fail(`${label}: thumbnail is not 1200x630`);
  if (!svg.includes(`<title id="title">${item.title.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')}</title>`)) fail(`${label}: thumbnail semantic title mismatch`);
  const visibleTitle = [...svg.matchAll(/<text data-title-line="\d+"[^>]*>([^<]+)<\/text>/g)].map((match) => match[1]).join(' ').replaceAll('&amp;','&').replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&quot;','"');
  if (visibleTitle !== item.title) fail(`${label}: thumbnail visible title is not exact`);
  if (dateWords.test(visibleTitle)) fail(`${label}: thumbnail title contains publication date`);
}

for (const [section, count] of [['Blog',12],['Research',5]]) {
  if (manifest.items.filter((item) => item.section === section).length !== count) fail(`${section}: wrong count`);
}

const blogRoute = fs.readFileSync(path.join(root, 'app/blog/[slug]/page.tsx'), 'utf8');
const researchRoute = fs.readFileSync(path.join(root, 'app/research/[slug]/page.tsx'), 'utf8');
const blogIndex = fs.readFileSync(path.join(root, 'app/blog/page.tsx'), 'utf8');
const researchIndex = fs.readFileSync(path.join(root, 'app/research/page.tsx'), 'utf8');
const loader = fs.readFileSync(path.join(root, 'lib/content.ts'), 'utf8');
if (!blogRoute.includes("from '../../data'") || !blogRoute.includes('datePublished: post.published') || !blogRoute.includes('formatReaderDate(post.published)')) fail('Blog route/date wiring not verified');
if (!researchRoute.includes("getContent('research')") || !researchRoute.includes('datePublished: post.published') || !researchRoute.includes('formatReaderDate(post.published)') || !researchRoute.includes('article-aside')) fail('Research route/date/sidebar wiring not verified');
if (!blogIndex.includes('blogPosts') || !researchIndex.includes('getContent("research")')) fail('separate index wiring not verified');
if (!loader.includes("export type ContentKind = 'blog' | 'research' | 'alternatives'") || !loader.includes('getRelatedResearch')) fail('separate loader/related-content wiring not verified');

// Collision checks are anchored to the immutable pre-edit commit so the validator
// remains valid after this batch is committed. This avoids comparing HEAD to itself.
const baseTree = execFileSync('git', ['ls-tree', '-r', '--name-only', baseSha], { cwd: root, encoding: 'utf8' }).split(/\r?\n/);
for (const item of manifest.items) {
  if (baseTree.includes(item.sourcePath)) fail(`${item.slug}: source path already existed at immutable base`);
  if (baseTree.includes(item.thumbnailPath)) fail(`${item.slug}: thumbnail path already existed at immutable base`);
}
const oldManifest = JSON.parse(execFileSync('git', ['show', `${baseSha}:publishing/2026-10-12/manifest.json`], { cwd: root, encoding: 'utf8' }));
for (const item of manifest.items) {
  if (oldManifest.items.some((old) => old.slug === item.slug)) fail(`${item.slug}: slug duplicates October 12 batch`);
  if (oldManifest.items.some((old) => old.title === item.title)) fail(`${item.title}: title duplicates October 12 batch`);
}

const allExisting = [];
for (const old of oldManifest.items) {
  const raw = execFileSync('git', ['show', `${baseSha}:${old.sourcePath}`], { cwd: root, encoding: 'utf8' });
  const body = raw.replace(/^---[\s\S]*?---\r?\n/, '');
  for (const paragraph of body.split(/\n\s*\n/)) {
    const normalized = paragraph.replace(/^#+\s*/, '').replace(/\s+/g, ' ').trim().toLowerCase();
    if (normalized.length >= 180) allExisting.push([normalized, `${baseSha}:${old.sourcePath}`]);
  }
}
for (const section of ['blog','research']) {
  const dir = path.join(root, 'content', section);
  for (const name of fs.readdirSync(dir).filter((name) => name.endsWith('.md'))) {
    const rel = `content/${section}/${name}`;
    if (manifest.items.some((item) => item.sourcePath === rel)) continue;
    const raw = fs.readFileSync(path.join(dir, name), 'utf8');
    const body = raw.replace(/^---[\s\S]*?---\r?\n/, '');
    for (const paragraph of body.split(/\n\s*\n/)) {
      const normalized = paragraph.replace(/^#+\s*/, '').replace(/\s+/g, ' ').trim().toLowerCase();
      if (normalized.length >= 180) allExisting.push([normalized, rel]);
    }
  }
}
for (const [paragraph, label] of batchParagraphs) {
  const collision = allExisting.find(([existing]) => existing === paragraph);
  if (collision) fail(`${label}: substantive paragraph duplicates existing ${collision[1]}`);
}

// Audit other retained workspace clones and normalized records without requiring them
// to be present. This prevents exact title, slug, or substantive-prose reuse across
// the broader October 12 batch.
const workspace = path.resolve(root, '../../..');
const reposRoot = path.join(workspace, 'work', 'repos');
if (fs.existsSync(reposRoot)) {
  for (const repoName of fs.readdirSync(reposRoot)) {
    const repo = path.join(reposRoot, repoName);
    if (path.resolve(repo) === root) continue;
    for (const section of ['blog', 'research']) {
      const dir = path.join(repo, 'content', section);
      if (!fs.existsSync(dir)) continue;
      for (const name of fs.readdirSync(dir).filter((name) => /\.mdx?$/.test(name))) {
        const raw = fs.readFileSync(path.join(dir, name), 'utf8');
        const existingSlug = name.replace(/\.(md|mdx)$/, '');
        const existingTitle = raw.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1]?.replace(/["']$/, '');
        if (slugs.has(existingSlug)) fail(`workspace slug collision: ${repoName}/${section}/${existingSlug}`);
        if (existingTitle && titles.has(existingTitle)) fail(`workspace title collision: ${repoName}/${section}/${existingTitle}`);
        const body = raw.replace(/^---[\s\S]*?---\r?\n/, '');
        for (const paragraph of body.split(/\n\s*\n/)) {
          const normalized = paragraph.replace(/^#+\s*/, '').replace(/\s+/g, ' ').trim().toLowerCase();
          if (normalized.length < 180) continue;
          const ours = batchParagraphs.get(normalized);
          if (ours) fail(`${ours}: substantive paragraph duplicates workspace ${repoName}/content/${section}/${name}`);
        }
      }
    }
  }
}
const recordsRoot = path.join(workspace, 'work', 'records-2026-10-13');
if (fs.existsSync(recordsRoot)) {
  for (const name of fs.readdirSync(recordsRoot).filter((name) => name.endsWith('.json'))) {
    if (name === 'offshorebookkeepers-manifest.json') continue;
    const raw = fs.readFileSync(path.join(recordsRoot, name), 'utf8');
    for (const item of manifest.items) {
      if (raw.includes(`"slug": "${item.slug}"`) || raw.includes(`"slug":"${item.slug}"`)) fail(`${item.slug}: collision in work/records/${name}`);
      if (raw.includes(`"title": "${item.title.replaceAll('"','\\"')}"`) || raw.includes(`"title":"${item.title.replaceAll('"','\\"')}"`)) fail(`${item.title}: collision in work/records/${name}`);
    }
  }
}

if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(`PASS: ${manifest.counts.blog} Blog + ${manifest.counts.research} Research, visible-date route wiring, 17 exact-title 1200x630 thumbnails, 10 authoritative HTTPS sources per Research, separate systems, and no substantive paragraph duplication.`);
