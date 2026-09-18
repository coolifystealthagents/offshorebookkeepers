import type { Metadata } from 'next';
import { Header, Footer, JsonLd } from '../components';
import { fleetServices, serviceGroups, workflowSteps } from '../fleet-data';

export const metadata: Metadata = {
  title: 'Offshore Bookkeeping Services',
  description: 'Explore claim-safe offshore bookkeeping support for current books, payables, receivables, payroll records, close, reporting, systems, and industry workflows.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Offshore Bookkeeping Services',
    description: 'Explore practical offshore bookkeeping scopes with explicit inputs, outputs, and client-retained controls.',
    url: '/services',
    type: 'website',
  },
};

const base = 'https://offshorebookkeepers.com';

export default function ServicesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Offshore bookkeeping services',
    itemListElement: fleetServices.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      url: `${base}/services/${service.slug}`,
    })),
  };

  return (
    <>
      <Header />
      <main className="ob-services-page">
        <JsonLd data={schema} />
        <section className="ob-services-hero">
          <div className="container ob-services-hero-grid">
            <div>
              <p className="eyebrow">Bookkeeping capacity with review boundaries</p>
              <h1>Choose the workflow that is slowing your finance team down.</h1>
              <p className="lead">Each scope names the records needed, the work a remote bookkeeper can prepare, the output your team receives, and the decisions that stay with your controller, owner, or adviser.</p>
              <div className="ob-hero-actions">
                <a className="btn primary" href="/contact-us">Book a free scope call</a>
                <a className="ob-text-link" href="#service-catalog">Browse all services</a>
              </div>
            </div>
            <aside className="ob-scope-panel" aria-label="How to choose a starting scope">
              <p className="ob-panel-label">Start with the bottleneck</p>
              <ol>
                <li><span>01</span><div><b>Clear a backlog</b><p>Cleanup, coding, reconciliations, and missing-document follow-up.</p></div></li>
                <li><span>02</span><div><b>Run weekly bookkeeping</b><p>Receipts, AP, AR, payroll inputs, and exception queues.</p></div></li>
                <li><span>03</span><div><b>Prepare the monthly review</b><p>Close schedules, evidence, and draft management reporting.</p></div></li>
              </ol>
            </aside>
          </div>
        </section>

        <section className="ob-services-intro" id="service-catalog">
          <div className="container">
            <div className="ob-section-heading">
              <div><p className="eyebrow">A complete service map</p><h2>21 practical scopes, grouped by the work they support.</h2></div>
              <p>These are preparation, organization, reconciliation, and handoff roles. Payment release, accounting judgment, tax positions, legal conclusions, and final approval remain with qualified client owners.</p>
            </div>
          </div>
        </section>

        {serviceGroups.map((group, groupIndex) => {
          const services = fleetServices.filter((service) => service.group === group.id);
          return (
            <section className={`ob-service-group${groupIndex % 2 ? ' is-tinted' : ''}`} id={group.id} key={group.id}>
              <div className="container">
                <header className="ob-group-heading">
                  <span>{String(groupIndex + 1).padStart(2, '0')}</span>
                  <div><h2>{group.title}</h2><p>{group.description}</p></div>
                </header>
                <div className="ob-service-grid">
                  {services.map((service) => (
                    <a className="ob-service-card" href={`/services/${service.slug}`} key={service.slug}>
                      <img src={service.illustration.src} alt={service.illustration.alt} width="640" height="360" loading="lazy" />
                      <ol className="ob-mobile-flow" aria-label={`${service.title} workflow`}>
                        {workflowSteps(service.illustration.caption).map((step, index) => <li key={step}><span>{index + 1}</span><b>{step}</b></li>)}
                      </ol>
                      <div className="ob-card-copy">
                        <h3>{service.title}</h3>
                        <p>{service.problem}</p>
                        <span>See tasks, outputs, and controls <b aria-hidden="true">→</b></span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="ob-final-cta">
          <div className="container ob-final-cta-grid">
            <div><p className="eyebrow">Not sure where to start?</p><h2>Bring one recurring bottleneck. Leave with a clearer role brief.</h2></div>
            <a className="btn primary" href="/contact-us">Book a free scope call</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
