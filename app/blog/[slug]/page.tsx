import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site } from '../../data';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  return {
    title: p?.title || 'Guide',
    description: p?.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = (blogPosts.find((x) => x.slug === slug) || blogPosts[0]) as any;
  const siteUrl = `https://${String(site.domain).toLowerCase()}`;
  const postUrl = `${siteUrl}/blog/${p.slug}`;
  const hasRichArticle = Array.isArray(p.sections) && p.sections.length > 0;
  const faqs = Array.isArray(p.faqs) ? p.faqs : [];
  const sources = Array.isArray(p.sources) ? p.sources : [];
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.excerpt,
        url: postUrl,
        mainEntityOfPage: postUrl,
        publisher: { '@type': 'Organization', name: site.brand, url: siteUrl },
        citation: sources.map((source: any) => source.url),
        hasPart: [
          ...(p.sections || []).map((section: any, index: number) => ({
            '@type': 'WebPageElement',
            position: index + 1,
            name: section.heading,
          })),
          ...(p.modules || []).map((module: any, index: number) => ({
            '@type': 'Table',
            position: (p.sections?.length || 0) + index + 1,
            name: module.title,
          })),
        ],
      },
      ...(faqs.length
        ? [{
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq: string[]) => ({
              '@type': 'Question',
              name: faq[0],
              acceptedAnswer: { '@type': 'Answer', text: faq[1] },
            })),
          }]
        : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: p.title, item: postUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section">
        <JsonLd data={articleSchema} />
        <article className="container" style={{ maxWidth: 920 }}>
          <p className="eyebrow">{site.brand} guide</p>
          <h1>{p.title}</h1>
          <p className="lead">{p.excerpt}</p>

          {hasRichArticle ? (
            <>
              <div className="card">
                <h2>The short answer</h2>
                <ul className="list">
                  {p.takeaways.map((item: string) => <li key={item}>{item}</li>)}
                </ul>
              </div>

              {p.sections.map((section: any) => (
                <section className="card" key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </section>
              ))}

              {p.modules?.map((module: any) => (
                <section className="card" key={module.title}>
                  <h2>{module.title}</h2>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <tbody>
                        {module.rows.map((row: string[], index: number) => (
                          <tr key={row.join('-')}>
                            {row.map((cell: string) => index === 0
                              ? <th key={cell} style={{ textAlign: 'left', borderBottom: '1px solid var(--line)', padding: '10px' }}>{cell}</th>
                              : <td key={cell} style={{ borderBottom: '1px solid var(--line)', padding: '10px', verticalAlign: 'top' }}>{cell}</td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              ))}

              {faqs.length > 0 && (
                <section className="card">
                  <h2>FAQ</h2>
                  {faqs.map((faq: string[]) => (
                    <div key={faq[0]}>
                      <h3>{faq[0]}</h3>
                      <p>{faq[1]}</p>
                    </div>
                  ))}
                </section>
              )}

              {sources.length > 0 && (
                <section className="card">
                  <h2>Sources</h2>
                  <ul className="list">
                    {sources.map((source: any) => <li key={source.url}><a href={source.url}>{source.name}</a></li>)}
                  </ul>
                </section>
              )}
            </>
          ) : (
            <div className="card">
              <h2>The short answer</h2>
              <p>Start with one role, a short task list, and a weekly scorecard. Do not outsource a messy process until examples and rules are clear.</p>
              <h2>What to prepare</h2>
              <ul>
                <li>Task examples and sample replies</li>
                <li>Tool access and permission rules</li>
                <li>Daily output target</li>
                <li>Escalation rules for anything sensitive</li>
              </ul>
              <h2>Questions to ask</h2>
              <ul>
                <li>Who screens the worker?</li>
                <li>Who checks quality?</li>
                <li>What happens if fit is poor?</li>
                <li>How are passwords and customer data handled?</li>
              </ul>
            </div>
          )}
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
