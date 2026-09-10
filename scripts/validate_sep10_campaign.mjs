import fs from 'node:fs';
import crypto from 'node:crypto';
const root=(process.env.SEP10_BASE_URL||'http://127.0.0.1:3000').replace(/\/$/,'');
const dir='.paperclip/daily-content/2026-09-10';
const blog=JSON.parse(fs.readFileSync(`${dir}/blog.json`));
const research=JSON.parse(fs.readFileSync(`${dir}/research.json`));
const records=[...blog,...research];
const fail=m=>{throw new Error(m)};
if(blog.length!==12||research.length!==5) fail(`wrong count ${blog.length}+${research.length}`);
for(const field of ['title','slug','route','canonical','sourcePath']) if(new Set(records.map(x=>x[field])).size!==17) fail(`${field} not unique`);
const hashes=records.map(x=>crypto.createHash('sha256').update(fs.readFileSync(x.sourcePath)).digest('hex'));
if(new Set(hashes).size!==17) fail('body identities not unique');
for(const x of records){
  const source=fs.readFileSync(x.sourcePath,'utf8'); const family=x.route.startsWith('/blog/')?'blog':'research';
  if(!source.includes('published: "2026-09-10"')||!source.includes('September 10, 2026')) fail(`${x.sourcePath} date`);
  if(!source.includes(`type: "${family}"`)) fail(`${x.sourcePath} family`);
  if(/[—–]/.test(source)) fail(`${x.sourcePath} dash`);
  const image=source.match(/^featuredImage: "([^"]+)"/m)?.[1]; if(!image||!fs.existsSync(`public${image}`)) fail(`${x.sourcePath} image`);
  const hits=['blog','research'].filter(f=>fs.existsSync(`content/${f}/${x.slug}.md`)); if(hits.length!==1||hits[0]!==family) fail(`${x.slug} duplicate`);
  if(family==='research'){
    for(const heading of ['## Methodology','## Scope and inference boundaries','## Limitations','## References']) if(!source.includes(heading)) fail(`${x.sourcePath} missing ${heading}`);
    if((source.match(/^- \[/gm)||[]).length<10) fail(`${x.sourcePath} source count`);
  }
}
const fetchText=async route=>{const r=await fetch(root+route,{redirect:'manual'});if(r.status!==200)fail(`${route} HTTP ${r.status}`);return r.text()};
const [blogIndex,researchIndex,sitemap]=await Promise.all(['/blog','/research','/sitemap.xml'].map(fetchText));
for(const x of records){
  const html=await fetchText(x.route);
  if(!html.includes('September 10, 2026')||!html.includes('"datePublished":"2026-09-10"')) fail(`${x.route} rendered date`);
  if(!html.includes(`<link rel="canonical" href="${x.canonical}"`)) fail(`${x.route} canonical`);
  const index=x.route.startsWith('/blog/')?blogIndex:researchIndex; if(!index.includes(`href="${x.route}"`)) fail(`${x.route} index`);
  if(!sitemap.includes(`<loc>${x.canonical}</loc>`)) fail(`${x.route} sitemap`);
  const images=[...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m=>m[1]); const og=html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  if(!og) fail(`${x.route} OG image`);
  for(const image of new Set([...images,og])){const u=image.startsWith('http')?image:`${root}${image}`;const r=await fetch(u);if(r.status!==200)fail(`${x.route} image ${r.status}`)}
}
console.log(`PASS ${root}: exactly 12 Blog + 5 Research; all 17 routes pass identity, family, HTTP 200, dates, canonical, index, sitemap, hero and OG image, and Research quality gates.`);
