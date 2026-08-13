import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site } from '../../data';
const readerDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const formatReaderDate = (value?: string) => {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return value ?? '';
  return readerDate.format(new Date(`${value}T00:00:00Z`));
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `/blog/${slug}`,
    },
  };
}

function ArticleBanner({ banner, index }: { banner: readonly string[]; index: number }) {
  return (
    <aside className={`article-banner article-banner-${index + 1}`} data-article-banner={index + 1}>
      <div>
        <span className="article-banner-label">Philippines-based bookkeeping support</span>
        <h2>{banner[0]}</h2>
        <span className="article-banner-copy">{banner[1]}</span>
      </div>
      <a href={banner[2]}>{banner[3]}</a>
    </aside>
  );
}

function DetectionChart({ chart }: { chart: any }) {
  const colors = ['#0f8f73', '#f27b3d', '#17324d'];
  const maxValue = chart.maxValue || Math.max(...chart.bars.map((bar: readonly [string, number]) => bar[1]));
  const ticks = chart.ticks || [0, 10, 20, 30, 40];
  const scale = 400 / maxValue;
  const formatValue = (value: number) => chart.valuePrefix === '$'
    ? `$${value.toLocaleString('en-US')}`
    : `${value}${chart.valueSuffix || '%'}`;
  return (
    <figure className="article-visual article-chart" data-article-chart={chart.marker || 'fraud-detection'}>
      <h2>{chart.title}</h2>
      <span className="visual-deck">{chart.description}</span>
      <div className="svg-scroll" role="region" aria-label={`${chart.title}. Scroll horizontally if needed.`} tabIndex={0}>
        <svg viewBox="0 0 720 330" role="img" aria-labelledby="detection-chart-title detection-chart-desc">
          <title id="detection-chart-title">{chart.title}, measured in {chart.unit.toLowerCase()}</title>
          <desc id="detection-chart-desc">{chart.accessibleDescription || chart.bars.map((bar: readonly [string, number]) => `${bar[0]} ${formatValue(bar[1])}`).join(', ')}</desc>
          <text x="190" y="42" className="svg-unit">{chart.unit}</text>
          {ticks.map((tick: number) => (
            <g key={tick}>
              <line x1={190 + tick * scale} y1="58" x2={190 + tick * scale} y2="274" className="chart-grid" />
              <text x={190 + tick * scale} y="298" textAnchor="middle" className="chart-tick">{formatValue(tick)}</text>
            </g>
          ))}
          {chart.bars.map((bar: readonly [string, number], index: number) => {
            const y = 78 + index * 70;
            return (
              <g key={bar[0]}>
                <text x="174" y={y + 25} textAnchor="end" className="chart-label">{bar[0]}</text>
                <rect x="190" y={y} width={bar[1] * scale} height="38" rx="8" fill={colors[index]} />
                <text x={204 + bar[1] * scale} y={y + 25} className="chart-value">{formatValue(bar[1])}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption>{chart.methodNote}</figcaption>
    </figure>
  );
}

function HandoffGraphic({ graphic }: { graphic: any }) {
  const ownerSteps = Array.isArray(graphic.ownerSteps) ? graphic.ownerSteps : [3, 4];
  return (
    <figure className="article-visual article-process" data-article-graphic={graphic.marker || 'ap-handoff'}>
      <h2>{graphic.title}</h2>
      <span className="visual-deck">{graphic.description}</span>
      <div className="svg-scroll" role="region" aria-label={`${graphic.title}. Scroll horizontally if needed.`} tabIndex={0}>
        <svg viewBox="0 0 900 360" role="img" aria-labelledby="handoff-title handoff-desc">
          <title id="handoff-title">{graphic.title}</title>
          <desc id="handoff-desc">{graphic.accessibleDescription || graphic.description}</desc>
          <line x1="95" y1="104" x2="805" y2="104" className="process-line" />
          {graphic.steps.map((step: readonly string[], index: number) => {
            const x = 95 + index * 142;
            const ownerStep = ownerSteps.includes(index);
            return (
              <g key={step[0]}>
                <circle cx={x} cy="104" r="34" className={ownerStep ? 'process-owner' : 'process-bookkeeper'} />
                <text x={x} y="113" textAnchor="middle" className="process-number">{step[0]}</text>
                <text x={x} y="166" textAnchor="middle" className="process-title">{step[1]}</text>
                <foreignObject x={x - 62} y="184" width="124" height="90">
                  <div className="process-copy">{step[2]}</div>
                </foreignObject>
              </g>
            );
          })}
          <g transform="translate(250 308)">
            <circle cx="0" cy="0" r="10" className="process-bookkeeper" />
            <text x="20" y="6" className="process-legend">{graphic.bookkeeperLegend || 'Bookkeeper prepares or records'}</text>
            <circle cx="330" cy="0" r="10" className="process-owner" />
            <text x="350" y="6" className="process-legend">{graphic.ownerLegend || 'Finance owner decides'}</text>
          </g>
        </svg>
      </div>
      <figcaption>{graphic.methodNote || "Method note: this is a planning model, not a universal control standard. Match each step to the company's written approval policy and banking permissions."}</figcaption>
    </figure>
  );
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = blogPosts.find((item) => item.slug === slug);
  if (!found) notFound();

  const post = found as any;
  const siteUrl = `https://${String(site.domain).toLowerCase()}`;
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const sections = Array.isArray(post.sections) ? post.sections : [];
  const faqs = Array.isArray(post.faqs) ? post.faqs : [];
  const sources = Array.isArray(post.sources) ? post.sources : [];
  const banners = Array.isArray(post.banners) ? post.banners : [];
  const richArticle = sections.length > 0;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url: postUrl,
        mainEntityOfPage: postUrl,
        datePublished: post.published,
        dateModified: post.published,
        publisher: { '@type': 'Organization', name: site.brand, url: siteUrl },
        citation: sources.map((source: any) => source.url),
        hasPart: [
          ...sections.map((section: any, index: number) => ({ '@type': 'WebPageElement', position: index + 1, name: section.heading })),
          ...(post.table ? [{ '@type': 'Table', name: post.table.title }] : []),
          ...(post.chart ? [{ '@type': 'ImageObject', name: post.chart.title, caption: post.chart.methodNote }] : []),
          ...(post.graphic ? [{ '@type': 'ImageObject', name: post.graphic.title }] : []),
        ],
      },
      ...(faqs.length ? [{
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq: readonly string[]) => ({
          '@type': 'Question',
          name: faq[0],
          acceptedAnswer: { '@type': 'Answer', text: faq[1] },
        })),
      }] : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="article-page">
        <JsonLd data={schema} />
        <article className="container article-shell" data-article-slug={post.slug} data-article-marker={post.marker || post.slug}>
          <header className="article-header">
            <span className="eyebrow">{site.brand} guide</span>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p><div className='blog-standards-strip' aria-label='Article standards'><span>Source-backed guidance</span><span>Contextual internal links</span><span>Top, middle, and bottom CTAs</span></div>
            {post.published && <span className="article-date">Published <time dateTime={post.published}>{formatReaderDate(post.published)}</time> · {post.minutes} minute read</span>}
          </header>

          {richArticle ? (
            <>
              <section className="article-card article-takeaways">
                <h2>The short answer</h2>
                <ul>{post.takeaways.map((item: string) => <li key={item}>{item}</li>)}</ul>
              </section>

              {sections.map((section: any, index: number) => (
                <div key={section.heading}>
                  <section className="article-card article-section">
                    <h2>{section.heading}</h2>
                    {(section.paragraphs || [section.body]).filter(Boolean).map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
                  </section>
                  {index === 2 && banners[0] && <ArticleBanner banner={banners[0]} index={0} />}
                  {index === 7 && banners[1] && <ArticleBanner banner={banners[1]} index={1} />}
                </div>
              ))}

              {post.table && (
                <section className="article-card article-table" data-article-table="ap-controls">
                  <h2>{post.table.title}</h2>
                  <p>{post.table.intro}</p>
                  <div className="table-scroll" role="region" aria-label={`${post.table.title}. Scroll horizontally to see all columns.`} tabIndex={0}>
                    <table>
                      <thead><tr>{post.table.columns.map((column: string) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
                      <tbody>{post.table.rows.map((row: string[]) => <tr key={row.join('|')}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody>
                    </table>
                  </div>
                  <span className="scroll-cue">Swipe or scroll to read every column.</span>
                </section>
              )}

              {post.chart && <DetectionChart chart={post.chart} />}
              {post.graphic && <HandoffGraphic graphic={post.graphic} />}

              {post.quote && (
                <figure className="expert-quote" data-expert-quote="ic3">
                  <blockquote>"{post.quote.text}"</blockquote>
                  <figcaption>
                    {post.quote.person}, {post.quote.title}. <a href={post.quote.sourceUrl}>{post.quote.sourceName}</a>.
                  </figcaption>
                </figure>
              )}

              {faqs.length > 0 && (
                <section className="article-card article-faq">
                  <h2>Questions owners ask</h2>
                  {faqs.map((faq: readonly string[]) => <div key={faq[0]}><h3>{faq[0]}</h3><p>{faq[1]}</p></div>)}
                </section>
              )}

              {Array.isArray(post.relatedLinks) && (
                <section className="article-card related-guides">
                  <h2>Keep planning</h2>
                  <ul>{post.relatedLinks.map((link: readonly string[]) => <li key={link[1]}><a href={link[1]}>{link[0]}</a></li>)}</ul>
                </section>
              )}

              {banners[2] && <ArticleBanner banner={banners[2]} index={2} />}

              {sources.length > 0 && (
                <section className="article-card article-sources" id="sources">
                  <h2>Sources</h2>
                  <ol>{sources.map((source: any) => <li key={source.url}><a href={source.url}>{source.name}</a></li>)}</ol>
                </section>
              )}
            </>
          ) : (
            <section className="article-card">
              <h2>Start with a defined process</h2>
              <p>For Philippines-based staffing, document the work, tools, schedule, and expected result before candidate matching. Keep business judgment and final approvals with a named manager.</p>
              <aside className='article-rotation-banner article-rotation-banner-middle' data-article-banner='true'><p className='eyebrow'>Midpoint planning check</p><h2>Compare providers against one written workflow</h2><p>Use one task lane, one reviewer, and one quality check so each provider conversation is easier to judge.</p><a className='btn' href='/contact-us'>Contact Us</a></aside><h2>Prepare representative examples</h2>
              <p>Use real, properly redacted examples to explain quality and review the first work together. Update the written process whenever the team finds a new exception.</p>
              <h2>Plan access and handoffs</h2>
              <p>Provide only the access needed for the position and use named accounts where possible. Write down which questions need approval and who receives them.</p>
            </section>
          )}
        <p className='article-source-note'><a href="https://www.ilo.org/global/topics/non-standard-employment/WCMS_534825/lang--en/index.htm" target="_blank" rel="noopener noreferrer">International Labour Organization guidance on remote work arrangements</a> reinforces why remote role briefs should document expectations, communication rhythms, and accountable handoffs.</p>
        </article>
        {!richArticle && <CTA />}
      </main>
      <Footer />
    </>
  );
}
