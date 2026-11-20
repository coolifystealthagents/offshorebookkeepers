import type { CSSProperties } from 'react';
import { Header, Footer, PageHero } from '../components';
import { getContent } from '../../lib/content';

export const metadata = {
  title: 'Bookkeeping alternatives',
  description: 'Compare bookkeeping staffing, service, role, and process alternatives.',
  alternates: { canonical: '/alternatives' },
};

type SearchValue = string | string[] | undefined;
const firstValue = (value: SearchValue) => (Array.isArray(value) ? value[0] ?? '' : value ?? '');

export default async function Alternatives({ searchParams }: { searchParams: Promise<{ q?: SearchValue; type?: SearchValue; page?: SearchValue }> }) {
  const query = await searchParams;
  const all = getContent('alternatives');
  const types = [...new Set(all.map((post) => post.type))];
  const q = firstValue(query.q).trim();
  const type = firstValue(query.type);
  const pageParam = firstValue(query.page);
  const filtered = all.filter((post) => (!q || `${post.title} ${post.description}`.toLowerCase().includes(q.toLowerCase())) && (!type || post.type === type));
  const pageSize = 12;
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const requestedPage = /^[1-9]\d*$/.test(pageParam) ? Number(pageParam) : 1;
  const page = Math.min(requestedPage, pages);
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);
  const paginationHref = (targetPage: number) => {
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (type) params.set('type', type);
    params.set('page', String(targetPage));
    return `?${params.toString()}`;
  };

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="ld-page">
        <PageHero
          eyebrow="Alternatives"
          title={<>Compare bookkeeping operating models.</>}
          lead="Evidence-led comparisons for leaders deciding how to staff and manage finance work."
          image="/photos/services-bookkeeping-review-mikhail-nilov.webp"
          imageAlt="A person reviewing records with a laptop, calculator, notebook, and receipt roll"
          imageCaption="Choose the operating model before comparing providers."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Alternatives' }]}
        />

        <section className="ld-section">
          <div className="ld-container">
            <form className="ld-filters" role="search">
              <label>Search<input name="q" defaultValue={q} placeholder="Search comparisons" /></label>
              <label>Type
                <select name="type" defaultValue={type}>
                  <option value="">All types</option>
                  {types.map((item) => <option value={item} key={item}>{item}</option>)}
                </select>
              </label>
              <button className="ld-btn ld-btn--lime" type="submit">Filter</button>
              {(q || type) ? <a className="ld-link" href="/alternatives">Clear</a> : null}
            </form>

            <div className="ld-index-bar">
              <p>{filtered.length} comparisons. Every guide names the operating boundary and the decisions that stay with your team.</p>
              <span>Page {page} of {pages}</span>
            </div>

            <div className="ld-posts">
              {visible.map((post, index) => (
                <a
                  className="ld-post"
                  href={`/alternatives/${post.slug}`}
                  key={post.slug}
                  data-reveal
                  style={{ '--ld-delay': `${(index % 3) * 55}ms` } as CSSProperties}
                >
                  <img src={post.featuredImage} alt={post.title} loading="lazy" />
                  <div className="ld-post-body">
                    <span className="ld-post-meta">{post.type}</span>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <span className="ld-link">Read the comparison ↗</span>
                  </div>
                </a>
              ))}
            </div>

            {!visible.length ? (
              <div className="ld-index-bar" style={{ marginTop: 26 }}><p>No comparisons match this filter. <a className="ld-link" href="/alternatives">View all alternatives</a></p></div>
            ) : null}

            {pages > 1 ? (
              <nav className="pagination" aria-label="Alternatives pages">
                {Array.from({ length: pages }, (_, i) => (
                  <a aria-current={i + 1 === page ? 'page' : undefined} href={paginationHref(i + 1)} key={i}>{i + 1}</a>
                ))}
              </nav>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
