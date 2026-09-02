import fs from 'node:fs';
import crypto from 'node:crypto';
const root=process.env.SEP2_BASE_URL||'http://127.0.0.1:3000',dir='.paperclip/daily-content/2026-09-02';
const blog=JSON.parse(fs.readFileSync(`${dir}/blog.json`)),research=JSON.parse(fs.readFileSync(`${dir}/research.json`)),records=[...blog,...research];
const fail=m=>{throw new Error(m)};
if(blog.length!==12||research.length!==5)fail(`expected 12 Blog + 5 Research; received ${blog.length} + ${research.length}`);
for(const field of ['title','slug','route','canonical','sourcePath'])if(new Set(records.map(x=>x[field])).size!==17)fail(`${field} is not unique`);
const hashes=records.map(x=>crypto.createHash('sha256').update(fs.readFileSync(x.sourcePath)).digest('hex'));if(new Set(hashes).size!==17)fail('source content hashes are not unique');
for(const x of records){const source=fs.readFileSync(x.sourcePath,'utf8');if(!source.includes('published: "2026-09-02"')||!source.includes('September 2, 2026'))fail(`${x.sourcePath} has incorrect dates`);const image=source.match(/^featuredImage: "([^"]+)"/m)?.[1];if(!image||!fs.existsSync(`public${image}`))fail(`${x.sourcePath} lacks an existing asset`)}
const [blogIndex,researchIndex,sitemap]=await Promise.all(['/blog','/research','/sitemap.xml'].map(async route=>{const r=await fetch(root+route);if(r.status!==200)fail(`${route} returned ${r.status}`);return r.text()}));
for(const x of records){const r=await fetch(root+x.route,{redirect:'manual'});if(r.status!==200)fail(`${x.route} returned ${r.status}`);const html=await r.text();if(!html.includes('September 2, 2026'))fail(`${x.route} lacks visible date`);if(!html.includes('"datePublished":"2026-09-02"'))fail(`${x.route} lacks structured datePublished`);if(!html.includes(`<link rel="canonical" href="${x.canonical}"`))fail(`${x.route} is not self-canonical`);const index=x.route.startsWith('/blog/')?blogIndex:researchIndex;if(!index.includes(`href="${x.route}"`))fail(`${x.route} is absent from index`);if(!sitemap.includes(`<loc>${x.canonical}</loc>`))fail(`${x.route} is absent from sitemap`)}
console.log('PASS: 12 Blog + 5 Research; unique metadata and hashes; 17 HTTP 200 self-canonical routes with visible/structured dates, index links, sitemap entries, and existing assets.');
