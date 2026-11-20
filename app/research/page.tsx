import type { CSSProperties } from 'react';
import { Header, Footer, PageHero } from '../components';
import {
  filterResearchByTopic,
  getContent,
  getResearchTopics,
  readingMinutes,
  researchTopic,
} from '../../lib/content';
import { site } from '../data';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(`${date}T00:00:00Z`));

export const metadata = {
  title: 'Research',
  description: 'Source-listed analysis for planning Philippines-based bookkeeping support.',
  alternates: { canonical: '/research' },
};

type ResearchQuery = { topic?: string };

export default async function Research({ searchParams }: { searchParams: Promise<ResearchQuery> }) {
  const query = await searchParams;
  const researchPosts = getContent('research');
  const topics = getResearchTopics(researchPosts);
  const { activeTopic, posts: visiblePosts } = filterResearchByTopic(researchPosts, query.topic);
  const topicHref = (topic: string) => (topic ? `/research?topic=${encodeURIComponent(topic)}` : '/research');
  const featuredPosts = visiblePosts.slice(0, 9);

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="ld-page research-index-page">
        <PageHero
          eyebrow="Research library"
          title={<>Source-listed research for better support decisions.</>}
          lead="Use these reports to examine roles, controls, and onboarding decisions before building a Philippines-based bookkeeping team. Each report distinguishes cited guidance from local operating recommendations."
          image="/thumbnails/accounts-payable-invoice-control-benchmarks.webp"
          imageAlt="Research brief cover about accounts payable invoice controls"
          imageCaption="Visible sources, stated limits, practical implications."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Research' }]}
          actions={<a className="ld-btn ld-btn--light" href="/blog">Read the practical guides ↗</a>}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 18 }}>
            <span style={{ padding: '5px 9px', border: '1px solid rgba(255,255,255,.2)', color: '#d4e2da', fontFamily: 'var(--ld-mono)', fontSize: 7 }}>{researchPosts.length} reports</span>
            <span style={{ padding: '5px 9px', border: '1px solid rgba(255,255,255,.2)', color: '#d4e2da', fontFamily: 'var(--ld-mono)', fontSize: 7 }}>Visible source lists</span>
            <span style={{ padding: '5px 9px', border: '1px solid rgba(255,255,255,.2)', color: '#d4e2da', fontFamily: 'var(--ld-mono)', fontSize: 7 }}>Stated limitations</span>
          </div>
        </PageHero>

        <section className="ld-section research-library-section">
          <div className="ld-container">
            <nav className="research-cluster-tabs" aria-label="Research topic filters">
              <a className={!activeTopic ? 'active' : ''} aria-current={!activeTopic ? 'page' : undefined} href={topicHref('')}>
                All research<small>{researchPosts.length}</small>
              </a>
              {topics.map((topic) => (
                <a
                  className={activeTopic === topic.label ? 'active' : ''}
                  aria-current={activeTopic === topic.label ? 'page' : undefined}
                  href={topicHref(topic.label)}
                  key={topic.label}
                >
                  {topic.label}<small>{topic.count}</small>
                </a>
              ))}
            </nav>

            <div className="ld-index-bar">
              <p>{activeTopic ? `Showing ${visiblePosts.length} reports in ${activeTopic}.` : 'Each brief pairs listed public guidance with bounded operating implications.'}</p>
              {activeTopic ? <a href="/research" className="ld-link">Clear filter</a> : <span>{visiblePosts.length} briefs</span>}
            </div>

            <div className="ld-posts">
              {featuredPosts.map((post, index) => (
                <a
                  className="ld-post"
                  href={`/research/${post.slug}`}
                  key={post.slug}
                  data-reveal
                  style={{ '--ld-delay': `${(index % 3) * 55}ms` } as CSSProperties}
                >
                  <img src={post.featuredImage} alt={post.title} loading="lazy" />
                  <div className="ld-post-body">
                    <span className="ld-post-meta">{researchTopic(post)}</span>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <div className="ld-service-foot">
                      <span>{readingMinutes(post)} min read</span>
                      <span>{formatDate(post.published)}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {!visiblePosts.length ? (
              <div className="ld-index-bar"><p>No reports match this topic. <a className="ld-link" href="/research">View all research</a></p></div>
            ) : null}

            <div className="ld-archive" id="research-archive">
              <h2>Complete archive</h2>
              {Array.from(new Set(visiblePosts.map((post) => researchTopic(post)))).map((topic) => {
                const items = visiblePosts.filter((post) => researchTopic(post) === topic);
                return (
                  <details key={topic}>
                    <summary><span>{topic}</span><small>{items.length} briefs</small></summary>
                    <div className="ld-archive-links">
                      {items.map((post) => (
                        <a href={`/research/${post.slug}`} key={post.slug}>
                          <span style={{ color: '#43554c', fontFamily: 'var(--ld-body)', fontSize: 11.5, letterSpacing: 0, textTransform: 'none' }}>{post.title}</span>
                          <span>Read ↗</span>
                        </a>
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
