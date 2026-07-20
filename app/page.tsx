import * as data from './data';
import { Header, Footer, JsonLd } from './components';
const d=data as any, site=d.site||{}, services=(d.services||[]).slice(0,6), posts=(d.blogPosts||[]).slice(0,3), stats=(d.stats||[]).slice(0,3), offer=d.staffingOffer||{};
const title=(x:any)=>typeof x==='string'?x:(x.title||x.name||x.label||x.question||'Role');
const text=(x:any)=>typeof x==='string'?x:(x.desc||x.excerpt||x.note||x.body||'Clear scope, review rhythm, and measurable handoff.');
const slug=(x:any)=>(x.slug||title(x).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''));

export default function Home(){const schema={'@context':'https://schema.org','@type':'WebSite',name:site.brand,url:`https://${site.domain}`};return <><Header/><main className="adt"><JsonLd data={schema}/>
<section className="adt-hero"><div className="adt-container adt-grid"><div><p className="adt-eyebrow">Dedicated finance teams</p><h1>Build your offshore bookkeeping team.</h1><p>Get a managed finance team for monthly close, AP, AR, reconciliations, reports, and controller handoff — without losing control of the books.</p><div className="adt-actions"><a href="/contact">Let's talk growth today</a><a href="#teams">Our process</a></div></div><div className="adt-team"><img src={site.serviceImage||site.heroImage} alt={site.alt||'bookkeeping team'}/><div className="adt-team-card"><b>Finance pod</b><span>Bookkeeper • AP • AR • Reviewer</span></div></div></div></section>
<section className="adt-why"><div className="adt-container"><p>Why Offshore Bookkeepers?</p><div className="adt-why-grid">{['Trusted finance handoffs','High monthly retention','Save review time','Happy offshore staff','Large accounting talent pool','Quality close checks'].map((x,i)=><article key={x}><span>{String(i+1).padStart(2,'0')}</span><b>{x}</b><p>{['Clean calendar, exception log, and approval limits.','Stable team support that can grow with the close.','We source, qualify, and structure the finance role.','Teams work best when process and people both matter.','Access bookkeepers, AP, AR, payroll support, and reporting help.','Every close needs evidence before reports go out.'][i]}</p></article>)}</div></div></section>
<section className="adt-container adt-proof"><h2>Finance teams built around your close calendar.</h2><div className="adt-logos">{['Monthly close','Bank recs','AP support','AR aging','Reports','Exception log','Payroll docs','Controller review'].map(x=><span key={x}>{x}</span>)}</div></section>
<section id="teams" className="adt-container adt-roles"><div><p className="adt-eyebrow">Teams we can build</p><h2>Start with one role or a small finance pod.</h2></div><div className="adt-role-grid">{[
  ['Bookkeeping Support','Transaction coding, receipt matching, bank-feed cleanup, and monthly checklist work.'],
  ['AP / AR Support','Vendor bill entry, invoice checks, aging notes, payment-prep support, and exception logs.'],
  ['Month-End Close Pod','Bank recs, payroll source docs, variance notes, close packets, and controller questions.'],
  ['Reporting & Review','Draft P&L, balance sheet notes, KPI summaries, evidence folders, and approval handoff.'],
].map(([name,copy],i)=><a href={services[i]?`/services/${slug(services[i])}`:'/contact'} key={name}><h3>{name}</h3><p>{copy}</p><b>See team handoff →</b></a>)}</div></section>
<section className="adt-partner"><div className="adt-container adt-partner-grid"><div><h2>Your trusted bookkeeping partner.</h2><p>{offer.promise||'Build clean offshore finance support with role planning, candidate matching, onboarding, and managed quality checks.'}</p></div><div>{(offer.included||[]).slice(0,4).map((x:string,i:number)=><article key={i}><span>✓</span><p>{x}</p></article>)}</div></div></section>
<section className="adt-container adt-guides"><h2>Bookkeeping guides</h2>{posts.map((p:any,i:number)=><a href={`/blog/${p.slug}`} key={i}><span>{p.minutes||7} min</span><b>{title(p)}</b><p>{text(p)}</p></a>)}</section>
</main><Footer/></>}
