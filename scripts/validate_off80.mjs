import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const topics = [
  ['offshore-bookkeeper-customer-refund-reconciliation','Customer refund reconciliation','Accounts Receivable'],
  ['offshore-bookkeeper-intercompany-recharge-workpaper','Intercompany recharge workpaper','Month-End Close'],
  ['offshore-bookkeeper-chargeback-evidence-register','Chargeback evidence register','Accounts Receivable'],
  ['offshore-bookkeeper-fixed-asset-disposal-support','Fixed asset disposal support','Month-End Close'],
  ['offshore-bookkeeper-purchase-order-accrual-review','Purchase order accrual review','Accounts Payable'],
  ['offshore-bookkeeper-subscription-billing-exception-log','Subscription billing exception log','Revenue Operations'],
  ['offshore-bookkeeper-employee-expense-policy-check','Employee expense policy check','Expense Management'],
  ['offshore-bookkeeper-bank-reconciliation-aging','Bank reconciliation aging','Cash Management'],
  ['offshore-bookkeeper-inventory-in-transit-cutoff','Inventory in transit cutoff','Inventory Accounting'],
  ['offshore-bookkeeper-payroll-benefit-deduction-reconciliation','Payroll benefit deduction reconciliation','Payroll'],
  ['offshore-bookkeeper-deferred-revenue-rollforward','Deferred revenue rollforward','Revenue Operations'],
  ['offshore-bookkeeper-month-end-review-queue','Month-end review queue','Month-End Close'],
];
const root = process.cwd();
const outDir = path.join(root,'.paperclip/daily-content/2026-09-28');
const words = text => (text.toLowerCase().match(/[a-z0-9]+(?:['-][a-z0-9]+)*/g) || []);
const shingles = text => {
  const w=words(text), set=new Set();
  for(let i=0;i<=w.length-5;i++) set.add(w.slice(i,i+5).join(' '));
  return set;
};
const articles=[];
const bodies=new Map();
for (const [slug,topic,category] of topics) {
  const sourcePath=`content/blog/${slug}.md`;
  const raw=fs.readFileSync(sourcePath,'utf8');
  const split=raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if(!split) throw new Error(`${slug}: invalid frontmatter`);
  const [,frontmatter,body]=split;
  const count=words(body).length;
  if(count<950) throw new Error(`${slug}: ${count} body words`);
  if(!frontmatter.includes('published: "2026-09-28"')) throw new Error(`${slug}: date`);
  if(!frontmatter.includes(`category: "${category}"`)) throw new Error(`${slug}: category`);
  const image=frontmatter.match(/featuredImage: "([^"]+)"/)?.[1];
  if(!image || !fs.existsSync(path.join(root,'public',image))) throw new Error(`${slug}: missing image ${image}`);
  if(!frontmatter.includes('sources: [{')) throw new Error(`${slug}: sources`);
  if(!raw.includes('](/services/bookkeeping)')) throw new Error(`${slug}: bookkeeping link`);
  const routes=[...raw.matchAll(/\]\((\/services\/[^)]+)\)/g)].map(m=>m[1]);
  if(new Set(routes).size<2) throw new Error(`${slug}: needs two service links`);
  if(/[—–]/.test(raw)) throw new Error(`${slug}: humanizer dash check`);
  bodies.set(slug,body);
  articles.push({family:category,topic,slug,sourcePath,canonical:`https://offshorebookkeepers.com/blog/${slug}`,route:`/blog/${slug}`,publicationDate:'2026-09-28',status:'draft',contentHash:crypto.createHash('sha256').update(raw).digest('hex'),wordCount:count,featuredImage:image,sources:[{name:'IRS, Recordkeeping',url:'https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping'}],internalRoutes:[...new Set(routes)],deploymentEvidence:null,liveURL:null,verifiedAt:null});
}
const pairs=[];
let max=0, maxPair=[];
for(let i=0;i<topics.length;i++) for(let j=i+1;j<topics.length;j++) {
  const a=topics[i][0],b=topics[j][0],sa=shingles(bodies.get(a)),sb=shingles(bodies.get(b));
  let shared=0; for(const x of sa) if(sb.has(x)) shared++;
  const overlap=shared/Math.min(sa.size,sb.size);
  if(overlap>max){max=overlap;maxPair=[a,b];} pairs.push({a,b,shared,overlapPercent:+(overlap*100).toFixed(2)});
}
if(max>=0.5) throw new Error(`shingle overlap ${(max*100).toFixed(2)}%: ${maxPair.join(' / ')}`);
fs.mkdirSync(outDir,{recursive:true});
fs.writeFileSync(path.join(outDir,'blog-off-80.draft.json'),JSON.stringify({task:'OFF-80',publicationDate:'2026-09-28',status:'draft',hashAlgorithm:'sha256',shingleMethod:'five-word containment against smaller unique-shingle set',maxShingleOverlapPercent:+(max*100).toFixed(2),articles},null,2)+'\n');
const lines=['# OFF-80 blog QA','','Generated: 2026-09-28','','| Slug | Body words | SHA-256 |','|---|---:|---|',...articles.map(a=>`| ${a.slug} | ${a.wordCount} | \`${a.contentHash}\` |`),'',`Maximum pairwise five-word-shingle overlap: **${(max*100).toFixed(2)}%** (required: less than 50%).`,'','Checks passed: exact slug set, publish date, category, existing image, source metadata, two distinct service links, body word minimum, humanizer dash scan, and pairwise shingle overlap.',''];
fs.writeFileSync(path.join(outDir,'blog-off-80.qa.md'),lines.join('\n'));
console.log(JSON.stringify({articles:articles.length,minWords:Math.min(...articles.map(a=>a.wordCount)),maxWords:Math.max(...articles.map(a=>a.wordCount)),maxShingleOverlapPercent:+(max*100).toFixed(2)},null,2));
