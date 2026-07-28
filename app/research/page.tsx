import { Header, Footer } from '../components';
import { getContent } from '../../lib/content';
import { site } from '../data';

export const metadata = { title: `Research | ${site.brand}`, description: 'Source-backed offshore bookkeeping benchmarks and analysis.' };
export default async function Research({ searchParams }: { searchParams: Promise<{ q?: string; cluster?: string; page?: string }> }) {
  const query = await searchParams;
  const all = getContent('research');
  const clusters = [...new Set(all.map((post) => post.category))];
  const filtered = all.filter((post) => (!query.q || `${post.title} ${post.description}`.toLowerCase().includes(query.q.toLowerCase())) && (!query.cluster || post.category === query.cluster));
  const pageSize = 12, page = Math.max(1, Number(query.page) || 1), pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  return <><Header/><main><section className="fleet-hero variant-1"><div className="container"><p className="eyebrow">Research</p><h1>Bookkeeping research and benchmarks</h1><p className="lead">Reviewed, source-backed analysis for finance leaders planning offshore operations.</p></div></section><section className="section"><div className="container">
    <form className="content-filters"><label>Search<input name="q" defaultValue={query.q}/></label><label>Cluster<select name="cluster" defaultValue={query.cluster}><option value="">All clusters</option>{clusters.map((cluster)=><option key={cluster}>{cluster}</option>)}</select></label><button className="btn primary">Filter</button></form>
    <div className="fleet-service-grid">{filtered.slice((page-1)*pageSize,page*pageSize).map((post)=><a className="card content-card" href={`/research/${post.slug}`} key={post.slug}><img src={post.featuredImage} alt=""/><span className="content-badge">{post.sources.length} sources</span><h2>{post.title}</h2><p>{post.description}</p><small>Verified {post.updated}</small></a>)}</div>
    <nav className="pagination" aria-label="Research pages">{Array.from({length:pages},(_,index)=><a aria-current={page===index+1?'page':undefined} href={`?page=${index+1}`} key={index}>{index+1}</a>)}</nav>
  </div></section></main><Footer/></>;
}
