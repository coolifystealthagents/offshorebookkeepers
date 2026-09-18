import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, JsonLd } from '../../components';
import { fleetServices, serviceGroups, workflowSteps } from '../../fleet-data';

export function generateStaticParams() {
  return fleetServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.title, description: service.summary, type: 'website', url: `/services/${service.slug}`, images: [service.illustration.src] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const group = serviceGroups.find((item) => item.id === service.group)!;
  const related = fleetServices.filter((item) => item.group === service.group && item.slug !== service.slug).slice(0, 3);
  const base = 'https://offshorebookkeepers.com';
  const url = `${base}/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', name: service.title, description: service.summary, url },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: base },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${base}/services` },
        { '@type': 'ListItem', position: 3, name: group.title, item: `${base}/services#${group.id}` },
        { '@type': 'ListItem', position: 4, name: service.title, item: url },
      ] },
    ],
  };

  return (
    <>
      <Header />
      <main className="ob-service-detail">
        <JsonLd data={schema} />
        <section className="ob-detail-hero">
          <div className="container ob-detail-hero-grid">
            <div>
              <nav className="ob-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/services">Services</a><span aria-hidden="true">/</span><a href={`/services#${group.id}`}>{group.title}</a><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span></nav>
              <p className="eyebrow">{group.title}</p>
              <h1>{service.title}</h1>
              <p className="lead">{service.summary}</p>
              <div className="ob-hero-actions"><a className="btn primary" href="/contact-us">Book a free scope call</a><a className="ob-text-link" href="#scope">Review the scope</a></div>
            </div>
            <figure className="ob-detail-figure">
              <img src={service.illustration.src} alt={service.illustration.alt} width="1200" height="630" />
              <ol className="ob-mobile-flow" aria-label={`${service.title} workflow`}>
                {workflowSteps(service.illustration.caption).map((step, index) => <li key={step}><span aria-hidden="true">{index + 1}</span><b>{step}</b></li>)}
              </ol>
              <figcaption>{service.illustration.caption}</figcaption>
            </figure>
          </div>
        </section>

        <section className="ob-problem-band">
          <div className="container"><span>The operating problem</span><p>{service.problem}</p></div>
        </section>

        <section className="ob-detail-section" id="scope">
          <div className="container ob-work-grid">
            <div className="ob-section-title"><p className="eyebrow">The working scope</p><h2>What the bookkeeper prepares</h2><p>Use this list as a starting point, then match it to your systems, calendar, and approval matrix.</p></div>
            <ol className="ob-task-list">{service.tasks.map((task, index) => <li key={task}><span>{String(index + 1).padStart(2, '0')}</span><p>{task}</p></li>)}</ol>
          </div>
        </section>

        <section className="ob-detail-section is-tinted">
          <div className="container">
            <div className="ob-section-heading"><div><p className="eyebrow">A reviewable handoff</p><h2>Inputs become prepared outputs.</h2></div><p>Named records and tangible deliverables make the role easier to scope, train, review, and improve.</p></div>
            <div className="ob-io-grid">
              <article><h3>Inputs from your team</h3><ul>{service.inputs.map((item) => <li key={item}>{item}</li>)}</ul></article>
              <div className="ob-io-arrow" aria-hidden="true">→</div>
              <article><h3>Outputs for review</h3><ul>{service.outputs.map((item) => <li key={item}>{item}</li>)}</ul></article>
            </div>
          </div>
        </section>

        <section className="ob-detail-section ob-controls-section">
          <div className="container ob-controls-grid">
            <div><p className="eyebrow">Decisions stay accountable</p><h2>Controls your team retains</h2><p>Capacity should not blur authority. These decisions and approvals stay with the named client owner or qualified adviser.</p></div>
            <ul>{service.controls.map((control) => <li key={control}><span aria-hidden="true">✓</span>{control}</li>)}</ul>
          </div>
        </section>

        <section className="ob-detail-section is-tinted">
          <div className="container">
            <div className="ob-section-heading"><div><p className="eyebrow">A controlled start</p><h2>The first week is for mapping and review.</h2></div><p>Start with a representative sample before expanding access or volume.</p></div>
            <div className="ob-first-week">{service.firstWeek.map((step, index) => <article key={step}><span>Day {index + 1}</span><h3>{step}</h3></article>)}</div>
          </div>
        </section>

        {related.length > 0 && <section className="ob-detail-section"><div className="container"><div className="ob-section-heading"><div><p className="eyebrow">Related workflows</p><h2>Build the next connected scope.</h2></div><a className="ob-text-link" href="/services">See all services</a></div><div className="ob-related-grid">{related.map((item) => <a href={`/services/${item.slug}`} key={item.slug}><span>{item.navLabel}</span><p>{item.summary}</p><b>Explore service →</b></a>)}</div></div></section>}

        <section className="ob-final-cta"><div className="container ob-final-cta-grid"><div><p className="eyebrow">Scope this workflow</p><h2>Turn {service.navLabel.toLowerCase()} into a role your reviewer can manage.</h2></div><a className="btn primary" href="/contact-us">Book a free scope call</a></div></section>
      </main>
      <Footer />
    </>
  );
}
