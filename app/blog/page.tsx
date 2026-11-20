import type { CSSProperties } from 'react';
import { Header, Footer, PageHero } from '../components';
import { blogPosts, site } from '../data';
import { postsPerPage } from '../fleet-data';
import { editorialPhoto } from '../media';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(`${date}T00:00:00Z`));

export const metadata = {
  title: 'Blog',
  description: `Philippines-based ${site.primary} planning guides.`,
  alternates: { canonical: '/blog' },
};

export default function Blog() {
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  const posts = blogPosts.slice(0, postsPerPage);
  const [featured, ...rest] = posts;
  const featuredDate = featured && 'published' in featured && typeof featured.published === 'string' ? featured.published : '';

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="ld-page">
        <PageHero
          eyebrow="Blog"
          title={<>Bookkeeping guides for a cleaner close.</>}
          lead="Practical planning for Philippines-based bookkeeping roles, workflows, and manager handoffs."
          image="/photos/home-bookkeeping-review-lukas.webp"
          imageAlt="A person reviewing printed financial charts with a pen"
          imageCaption="Plan the queue before you hire for it."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
          actions={<a className="ld-btn ld-btn--light" href="/research">Browse the research library ↗</a>}
        />

        <section className="ld-section">
          <div className="ld-container">
            <div className="ld-index-bar">
              <p>Every guide is written for the person who has to make the handoff work.</p>
              <span>{posts.length} guides on this page</span>
            </div>

            {featured ? (
              <a className="ld-feature" href={`/blog/${featured.slug}`} data-reveal>
                <div className="ld-feature-media">
                  <img src={editorialPhoto(featured.slug)} alt="" loading="eager" />
                </div>
                <div className="ld-feature-copy">
                  <span className="ld-post-meta">{featured.minutes || 7} minute guide</span>
                  <h2>{featured.title}</h2>
                  <p>{featured.excerpt}</p>
                  {featuredDate ? <span className="ld-post-meta">Published {formatDate(featuredDate)}</span> : null}
                  <span className="ld-link" style={{ marginTop: 18 }}>Read the guide ↗</span>
                </div>
              </a>
            ) : null}

            <div className="ld-posts">
              {rest.map((post, index) => {
                const date = 'published' in post && typeof post.published === 'string' ? post.published : '';
                return (
                  <a
                    className="ld-post"
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                    data-reveal
                    style={{ '--ld-delay': `${(index % 3) * 55}ms` } as CSSProperties}
                  >
                    <img src={editorialPhoto(post.slug)} alt="" loading="lazy" />
                    <div className="ld-post-body">
                      <span className="ld-post-meta">{date ? formatDate(date) : `${post.minutes || 7} minute guide`}</span>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <span className="ld-link">Read the guide ↗</span>
                    </div>
                  </a>
                );
              })}
            </div>

            <nav className="pagination" aria-label="Blog pages">
              {Array.from({ length: pages }, (_, i) => (
                <a aria-current={i === 0 ? 'page' : undefined} href={i === 0 ? '/blog' : `/blog/page/${i + 1}`} key={i}>
                  {i + 1}
                </a>
              ))}
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
