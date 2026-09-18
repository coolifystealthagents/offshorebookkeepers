import { Header, Footer } from '../components';
import { filterResearchByTopic, getContent, getResearchTopics, readingMinutes, researchTopic } from '../../lib/content';
import { site } from '../data';

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
  const topicHref = (topic: string) => topic ? `/research?topic=${encodeURIComponent(topic)}` : '/research';

  return <><Header/><main className="research-index-page">
    <section className="research-hero"><div className="container research-hero-grid"><div>
      <p className="eyebrow">Research Library</p>
      <h1>Source-listed research for better staffing decisions</h1>
      <p className="lead">Use these reports to examine roles, controls, and onboarding decisions before building a Philippines-based support team. Each report distinguishes cited guidance from local operating recommendations.</p>
      <div className="research-meta"><span>{researchPosts.length} reports</span><span>Visible source lists</span><span>Stated limitations</span></div>
    </div><aside className="research-hero-card" aria-label="Research quality signals">
      <div><strong>01</strong><span>Sources listed for reader review</span></div>
      <div><strong>02</strong><span>Operational interpretation identified</span></div>
      <div><strong>03</strong><span>Limitations stated on each report</span></div>
    </aside></div></section>
    <section className="section research-library-section"><div className="container">
      <nav className="research-cluster-tabs" aria-label="Research topic filters">
        <a className={!activeTopic ? 'active' : ''} aria-current={!activeTopic ? 'page' : undefined} href={topicHref('')}>All research<small>{researchPosts.length}</small></a>
        {topics.map((topic) => <a className={activeTopic === topic.label ? 'active' : ''} aria-current={activeTopic === topic.label ? 'page' : undefined} href={topicHref(topic.label)} key={topic.label}>{topic.label}<small>{topic.count}</small></a>)}
      </nav>
      {activeTopic && <p className="filter-summary">Showing {visiblePosts.length} reports in <strong>{activeTopic}</strong>. <a href="/research">Clear filter</a></p>}
      <div className="research-card-grid">{visiblePosts.length ? visiblePosts.map((post) => <a className="research-library-card" href={`/research/${post.slug}`} key={post.slug}>
        <span className="research-card-badge">{researchTopic(post)}</span>
        <h2>{post.title}</h2>
        <p className="research-card-excerpt">{post.description}</p>
        <div className="research-card-meta"><span>{site.brand} Research</span><span>{readingMinutes(post)} min read</span><span>{post.sources.length} listed sources</span></div>
      </a>) : <div className="research-library-card empty-state"><span className="research-card-badge">No matching reports</span><h2>Choose another topic</h2><p className="research-card-excerpt">The selected topic has no published reports.</p><a className="btn primary" href="/research">View all research</a></div>}</div>
    </div></section>
    <section className="section research-methodology"><div className="container"><h2>How to use this library</h2><p>These reports summarize listed public guidance and translate it into bounded workflow questions. They are not original empirical studies, professional advice, or proof that a staffing location causes a particular result.</p></div></section>
  </main><Footer/></>;
}
