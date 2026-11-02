import type { Metadata } from 'next';
import { Header, Footer, JsonLd } from '../components';
import { fleetServices, serviceGroups } from '../fleet-data';

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
      <main id="main-content" className="ob-services-page ob-services-editorial">
        <JsonLd data={schema} />

        <section className="ob-services-hero">
          <div className="container ob-services-hero-grid">
            <div className="ob-services-hero-copy">
              <p className="eyebrow">Offshore bookkeeping services</p>
              <h1>Give recurring bookkeeping work a clear owner.</h1>
              <p className="lead">Build support around the records, deadlines, systems, and review boundaries your finance team already uses. Start with one bottleneck or connect several scopes around the same close.</p>
              <div className="ob-hero-actions">
                <a className="btn primary" href="/contact-us">Book a free scope call</a>
                <a className="ob-text-link" href="#service-catalog">Explore the service map</a>
              </div>
            </div>
            <figure className="ob-services-photo">
              <img src="/photos/services-bookkeeping-review-mikhail-nilov.webp" srcSet="/photos/services-bookkeeping-review-mikhail-nilov-mobile.webp 900w, /photos/services-bookkeeping-review-mikhail-nilov.webp 1900w" sizes="(max-width: 760px) 100vw, 50vw" alt="A person reviewing records with a laptop, calculator, notebook, and receipt roll" width="1900" height="1267" fetchPriority="high" />
              <figcaption><b>Start with the work that repeats.</b><span>Define the inputs, prepared output, review owner, and exception path before handoff.</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="ob-services-intro" id="service-catalog">
          <div className="container ob-services-intro-grid">
            <div>
              <p className="eyebrow">Choose where you need a hand</p>
              <h2>Support across the bookkeeping cycle.</h2>
            </div>
            <p>Every scope names the records needed, the work a remote bookkeeper can prepare, the output your team receives, and the decisions that stay with your controller, owner, or adviser.</p>
          </div>
          <div className="container ob-starting-points" aria-label="Common places to start">
            <article><h3>Clear incomplete work</h3><p>Organize missing records, reconcile open periods, and build a visible cleanup queue.</p></article>
            <article><h3>Keep routine work moving</h3><p>Prepare coding, payables, receivables, payroll inputs, and recurring documentation.</p></article>
            <article><h3>Prepare for review</h3><p>Maintain close schedules, reporting inputs, evidence, questions, and approval handoffs.</p></article>
          </div>
        </section>

        <div className="ob-service-catalog">
          {serviceGroups.map((group, groupIndex) => {
            const services = fleetServices.filter((service) => service.group === group.id);
            return (
              <section className={`ob-service-group ob-catalog-layout-${groupIndex % 3}${groupIndex % 2 ? ' is-tinted' : ''}`} id={group.id} key={group.id}>
                <div className="container ob-catalog-group">
                  <header className="ob-group-heading">
                    <h2>{group.title}</h2>
                    <p>{group.description}</p>
                  </header>
                  <div className="ob-service-grid">
                    {services.map((service) => (
                      <a className="ob-service-card" href={`/services/${service.slug}`} key={service.slug}>
                        <div className="ob-card-copy">
                          <h3>{service.title}</h3>
                          <p>{service.summary}</p>
                          <div className="ob-card-output"><small>Prepared output</small><span>{service.outputs[0]}</span></div>
                          <strong>View service scope <span aria-hidden="true">→</span></strong>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <section className="ob-boundaries">
          <div className="container ob-boundaries-grid">
            <div>
              <p className="eyebrow">A useful operating boundary</p>
              <h2>Prepared work reaches the right reviewer.</h2>
              <p>A bookkeeping handoff should make routine work easier to review without moving sensitive decisions to the wrong person.</p>
            </div>
            <div className="ob-boundary-list">
              <article><h3>Bookkeepers prepare</h3><p>Records, reconciliations, schedules, queues, draft reports, and supporting evidence.</p></article>
              <article><h3>Your team reviews</h3><p>Exceptions, accounting treatment, estimates, approvals, payment release, and final reporting.</p></article>
              <article><h3>Specialists decide</h3><p>Tax positions, legal conclusions, assurance, and other work requiring qualified professional judgment.</p></article>
            </div>
          </div>
        </section>

        <section className="ob-service-faq">
          <div className="container ob-service-faq-grid">
            <div><p className="eyebrow">Planning your support</p><h2>Questions before you choose a scope.</h2></div>
            <div>
              <details open><summary>Can several services work together?</summary><p>Yes. Related scopes can share source records, deadlines, and review owners. The consultation defines which tasks belong together and where each approval stays.</p></details>
              <details><summary>Do we need to change bookkeeping software?</summary><p>No change is assumed. Compatibility, access, source exports, and the working process are reviewed before setup.</p></details>
              <details><summary>Can we start with one recurring problem?</summary><p>Yes. A contained backlog, reconciliation queue, or close task can establish the records, controls, and review rhythm before the scope expands.</p></details>
              <details><summary>What happens to unusual or sensitive items?</summary><p>They remain visible in an exception queue and move to the authorized reviewer. Support staff do not make final accounting, tax, legal, or payment decisions.</p></details>
            </div>
          </div>
        </section>

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
