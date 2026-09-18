import { notFound } from 'next/navigation';
import { Header, Footer, JsonLd } from '../../components';
import { ArticleBody } from '../../article-body';
import { getContent, getPost, getRelatedResearch, researchTopic } from '../../../lib/content';
import { site } from '../../data';

const anchor = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const readerDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const formatReaderDate = (value?: string) => !value || !/^\d{4}-\d{2}-\d{2}$/.test(value) ? value ?? '' : readerDate.format(new Date(`${value}T00:00:00Z`));

export function generateStaticParams() { return getContent('research').map((post) => ({ slug: post.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost('research', slug);
  if (!post) return {};
  return { title: post.title, description: post.description, alternates: { canonical: `/research/${slug}` }, openGraph: { title: post.title, description: post.description, images: [post.featuredImage], type: 'article' } };
}

export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost('research', slug);
  if (!post) notFound();
  const related = getRelatedResearch(getContent('research'), post);
  const base = `https://${site.domain.toLowerCase()}`;
  const url = `${base}/research/${slug}`;
  const sourceByUrl = new Map(post.sources.map((source) => [source.url, source]));
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: post.title, description: post.description, datePublished: post.published, dateModified: post.updated, image: post.featuredImage, url, citation: post.sources.map((source) => source.url) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      { '@type': 'ListItem', position: 2, name: 'Research', item: `${base}/research` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ] },
  ] };

  return <><Header/><main className="article-page"><JsonLd data={schema}/><article className="container article-layout"><div>
    <header className="article-header"><p className="eyebrow">{researchTopic(post)}</p><h1>{post.title}</h1><p className="lead">{post.description}</p>
      <span className="article-date">Published <time dateTime={post.published}>{formatReaderDate(post.published)}</time>{post.updated !== post.published && <> · Updated <time dateTime={post.updated}>{formatReaderDate(post.updated)}</time></>} · {post.sources.length} listed sources</span>
      {post.featuredImage && <img className="article-featured-image" src={post.featuredImage} alt={post.description}/>}</header>
    <section className="article-card article-takeaways"><h2>Key takeaways</h2><ul>{post.takeaways.map((item) => <li key={item}>{item}</li>)}</ul></section>
    {post.sections.map((section) => <section className="article-card" id={anchor(section.heading)} key={section.heading}><h2>{section.heading}</h2><ArticleBody body={section.body}/></section>)}
    {post.sourceNotes.length > 0 && <section className="article-card evidence-map" id="evidence-map"><h2>Evidence map</h2><p>These notes connect bounded statements on this page to the listed public sources. They do not turn operational interpretations into empirical findings.</p><ol>{post.sourceNotes.map((note) => <li key={note.claim}><strong>{note.claim}</strong><ul>{note.sourceUrls.map((sourceUrl) => { const source = sourceByUrl.get(sourceUrl); return <li key={sourceUrl}><a href={sourceUrl}>{source?.name || sourceUrl}</a></li>; })}</ul></li>)}</ol></section>}
    {post.serviceHandoff && <section className="article-card" data-service-handoff={post.serviceHandoff.href}><h2>{post.serviceHandoff.title}</h2><p>{post.serviceHandoff.body}</p><a className="btn secondary" href={post.serviceHandoff.href}>{post.serviceHandoff.label}</a></section>}
    <section className="article-card article-sources"><h2>Listed sources</h2><ol>{post.sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a></li>)}</ol></section>
    <section className="article-card"><h2>Related research</h2>{related.length ? <div className="related-three">{related.map((item) => <a href={`/research/${item.slug}`} key={item.slug}>{item.title}</a>)}</div> : <p>More research is in editorial review.</p>}</section>
  </div><aside className="article-aside"><nav aria-label="On this page"><b>On this page</b>{post.sections.map((section) => <a href={`#${anchor(section.heading)}`} key={section.heading}>{section.heading}</a>)}{post.sourceNotes.length > 0 && <a href="#evidence-map">Evidence map</a>}</nav><a className="card consultation-card" href="/contact-us"><b>Plan your finance workflow</b><span>Discuss scope, controls, and review ownership.</span><span className="consultation-card-action">Book a scope call ›</span></a></aside></article></main><Footer/></>;
}
