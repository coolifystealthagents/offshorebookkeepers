import { Header, Footer } from '../components';
import { getContent } from '../../lib/content';
export const metadata={title:'Bookkeeping alternatives',description:'Compare bookkeeping staffing, service, role, and process alternatives.',alternates:{canonical:'/alternatives'}};
type SearchValue = string | string[] | undefined;
const firstValue = (value: SearchValue) => Array.isArray(value) ? value[0] ?? '' : value ?? '';

export default async function Alternatives({searchParams}:{searchParams:Promise<{q?:SearchValue;type?:SearchValue;page?:SearchValue}>}){
  const query=await searchParams,all=getContent('alternatives'),types=[...new Set(all.map(post=>post.type))];
  const q=firstValue(query.q).trim(),type=firstValue(query.type),pageParam=firstValue(query.page);
  const filtered=all.filter(post=>(!q||`${post.title} ${post.description}`.toLowerCase().includes(q.toLowerCase()))&&(!type||post.type===type));
  const pageSize=12,pages=Math.max(1,Math.ceil(filtered.length/pageSize));
  const requestedPage=/^[1-9]\d*$/.test(pageParam)?Number(pageParam):1,page=Math.min(requestedPage,pages);
  const paginationHref=(targetPage:number)=>{const params=new URLSearchParams();if(q)params.set('q',q);if(type)params.set('type',type);params.set('page',String(targetPage));return `?${params.toString()}`;};
  return <><Header/><main><section className="fleet-hero variant-2"><div className="container"><p className="eyebrow">Alternatives</p><h1>Compare bookkeeping operating models</h1><p className="lead">Evidence-led comparisons for leaders deciding how to staff and manage finance work.</p></div></section><section className="section"><div className="container"><form className="content-filters"><label>Search<input name="q" defaultValue={q}/></label><label>Type<select name="type" defaultValue={type}><option value="">All types</option>{types.map(item=><option key={item}>{item}</option>)}</select></label><button className="btn primary">Filter</button></form><div className="fleet-service-grid">{filtered.slice((page-1)*pageSize,page*pageSize).map(post=><a className="card content-card" href={`/alternatives/${post.slug}`} key={post.slug}><img src={post.featuredImage} alt=""/><span className="content-badge">{post.competitor?'Competitor':post.type}</span><h2>{post.title}</h2><p>{post.description}</p></a>)}</div><nav className="pagination" aria-label="Alternatives pages">{Array.from({length:pages},(_,i)=><a aria-current={page===i+1?'page':undefined} href={paginationHref(i+1)} key={i}>{i+1}</a>)}</nav></div></section></main><Footer/></>;
}
