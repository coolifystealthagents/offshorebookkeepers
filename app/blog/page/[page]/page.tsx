import type { CSSProperties } from 'react';
import { FeaturedComparison } from '../../FeaturedComparison';
import { notFound } from 'next/navigation';
import { Header, Footer, PageHero } from '../../../components';
import { blogPosts } from '../../../data';
import { postsPerPage } from '../../../fleet-data';
import { editorialPhoto } from '../../../media';

export function generateStaticParams() {
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  return Array.from({ length: pages }, (_, i) => ({ page: String(i + 1) }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  return {
    title: `Blog page ${page}`,
    description: `Page ${page} of Philippines-based bookkeeping staffing and workflow guides.`,
    alternates: { canonical: page === '1' ? '/blog' : `/blog/page/${page}` },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const n = Number(page);
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  if (!Number.isInteger(n) || n < 1 || n > pages) notFound();
  const posts = blogPosts.slice((n - 1) * postsPerPage, n * postsPerPage);

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="ld-page">
        <PageHero
          eyebrow={`Blog · page ${n}`}
          title={<>More guides for a cleaner handoff.</>}
          lead="Browse Philippines-based bookkeeping and workflow articles, ordered by publication date."
          image="/photos/home-bookkeeping-review-lukas.webp"
          imageAlt="A person reviewing printed financial charts with a pen"
          imageCaption="Plan the queue before you hire for it."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: `Page ${n}` }]}
          actions={<a className="ld-btn ld-btn--light" href="/blog">Back to the latest guides</a>}
        />
        <section className="ld-section">
          <div className="ld-container">
            <div className="ld-index-bar">
              <p>Page {n} of {pages}. Every guide stays available at its original URL.</p>
              <span>{posts.length} guides on this page</span>
            </div>
            {n === 2 ? <FeaturedComparison /> : null}
            <div className="ld-posts" style={{ marginTop: n === 2 ? 22 : 0 }}>
              {posts.map((post, index) => (
                <a
                  className="ld-post"
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  data-reveal
                  style={{ '--ld-delay': `${(index % 3) * 55}ms` } as CSSProperties}
                >
                  <img src={editorialPhoto(post.slug)} alt="" loading="lazy" />
                  <div className="ld-post-body">
                    <span className="ld-post-meta">{post.minutes || 7} minute guide</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="ld-link">Read the guide ↗</span>
                  </div>
                </a>
              ))}
            </div>
            <nav className="pagination" aria-label="Blog pages">
              {Array.from({ length: pages }, (_, i) => (
                <a aria-current={i + 1 === n ? 'page' : undefined} href={i === 0 ? '/blog' : `/blog/page/${i + 1}`} key={i}>
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
