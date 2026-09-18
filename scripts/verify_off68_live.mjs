import fs from 'node:fs';

const manifestPath = '.paperclip/daily-content/2026-09-18/blog-off-68.json';
const deployment = {
  applicationUuid: 'qvifib30a3teww1rycuecuj9',
  deploymentUuid: 'gbo5dl4itbxtuaeepr4kj3t1',
  commit: '3cf04e852594c1ea7da59b65fb08c87a5e6524c8',
  status: 'finished',
  finishedAt: '2026-09-18T15:53:51.000000Z'
};
const base = 'https://offshorebookkeepers.com';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const fetchText = async (url) => {
  const response = await fetch(url, { redirect: 'follow' });
  return { status: response.status, url: response.url, text: await response.text() };
};

const sitemap = await fetchText(`${base}/sitemap.xml`);
const indexPages = [];
for (let page = 1; page <= 20; page += 1) {
  const path = page === 1 ? '/blog' : `/blog/page/${page}`;
  const result = await fetchText(`${base}${path}`);
  if (result.status === 404) break;
  indexPages.push({ path, ...result });
}

const failures = [];
for (const item of manifest) {
  const article = await fetchText(item.canonical);
  const imageUrl = new URL(item.featuredImage, base).href;
  const image = await fetch(imageUrl, { redirect: 'follow' });
  const indexPage = indexPages.find((page) => page.text.includes(item.slug));
  const checks = {
    http200: article.status === 200,
    title: article.text.includes(item.title),
    uniqueMarker: article.text.includes(`data-article-slug="${item.slug}"`),
    canonical: article.text.includes(`rel="canonical" href="${item.canonical}"`),
    visibleDate: article.text.includes('September 18, 2026'),
    datePublished: article.text.includes('datePublished') && article.text.includes('2026-09-18'),
    featuredImage: article.text.includes(item.featuredImage) && image.status === 200,
    blogIndex: Boolean(indexPage),
    sitemap: sitemap.status === 200 && sitemap.text.includes(item.canonical)
  };
  const failed = Object.entries(checks).filter(([, pass]) => !pass).map(([name]) => name);
  if (failed.length) failures.push(`${item.slug}: ${failed.join(', ')}`);
  item.liveUrl = article.url;
  item.verificationTime = new Date().toISOString();
  item.publicationDate = '2026-09-18';
  item.status = failed.length ? 'verification-failed' : 'live-verified';
  item.deploymentEvidence = deployment;
  item.verification = { ...checks, blogIndexPath: indexPage?.path ?? null };
  console.log(`${failed.length ? 'FAIL' : 'PASS'} ${item.slug} ${indexPage?.path ?? 'not-indexed'}`);
}

fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`LIVE PASS ${manifest.length}/${manifest.length}`);
