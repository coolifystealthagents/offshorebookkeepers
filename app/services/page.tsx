import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { Header, Footer, JsonLd, PageHero } from '../components';
import { fleetServices, serviceGroups } from '../fleet-data';
import { servicePhoto } from '../service-photos';

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

const tagFor: Record<string, string> = {
  'current-books': 'Current books',
  'payables-receivables': 'AP / AR',
  'workforce-records': 'Payroll',
  'close-reporting': 'Close',
  'systems-cost-data': 'Systems',
  'industry-workflows': 'Industry',
};

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
      <main id="main-content" tabIndex={-1} className="ld-page ob-services-page">
        <JsonLd data={schema} />
        <PageHero
          eyebrow="Offshore bookkeeping services"
          title={<>Give recurring bookkeeping work a clear owner.</>}
          lead="Build support around the records, deadlines, systems, and review boundaries your finance team already uses. Start with one bottleneck or connect several scopes around the same close."
          image="/photos/services-bookkeeping-review-mikhail-nilov.webp"
          imageAlt="A person reviewing records with a laptop, calculator, notebook, and receipt roll"
          imageCaption="Start with the work that repeats."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
          actions={<a className="ld-btn ld-btn--lime" href="/contact-us">Book a free scope call ↗</a>}
        />

        <section className="ld-section ld-section--paper">
          <div className="ld-container">
            <div className="ld-head" data-reveal>
              <div>
                <p className="ld-eyebrow">Choose where you need a hand</p>
                <h2>Support across the bookkeeping cycle.</h2>
              </div>
              <p>Every scope names the records needed, the work a remote bookkeeper can prepare, the output your team receives, and the decisions that stay with your controller, owner, or adviser.</p>
            </div>
            <div className="ld-metrics">
              <div className="ld-metric"><strong>Clear incomplete work</strong><span>Organize missing records, reconcile open periods, and build a visible cleanup queue.</span></div>
              <div className="ld-metric"><strong>Keep routine work moving</strong><span>Prepare coding, payables, receivables, payroll inputs, and recurring documentation.</span></div>
              <div className="ld-metric"><strong>Prepare for review</strong><span>Maintain close schedules, reporting inputs, evidence, questions, and approval handoffs.</span></div>
              <div className="ld-metric"><strong>Keep authority visible</strong><span>Payments, accounting treatment, tax positions, and final sign-off stay with your team.</span></div>
            </div>
          </div>
        </section>

        <div className="ld-catalog">
          <div className="ld-container">
            {serviceGroups.map((group) => {
              const services = fleetServices.filter((service) => service.group === group.id);
              return (
                <section className="ld-group" id={group.id} key={group.id}>
                  <div className="ld-group-head" data-reveal>
                    <h2>{group.title}</h2>
                    <p>{group.description}</p>
                  </div>
                  <div className="ld-services">
                    {services.map((service, index) => (
                      <a
                        className="ld-service"
                        href={`/services/${service.slug}`}
                        key={service.slug}
                        data-tilt
                        data-tilt-strength="2.5"
                        data-reveal
                        style={{ '--ld-delay': `${(index % 3) * 50}ms` } as CSSProperties}
                      >
                        <div className="ld-service-media">
                          <img src={servicePhoto(service.slug, service.group).src} alt={servicePhoto(service.slug, service.group).alt} loading="lazy" />
                          <span>{tagFor[service.group] || 'Bookkeeping'}</span>
                        </div>
                        <div className="ld-service-body">
                          <h3>{service.title}</h3>
                          <p>{service.summary}</p>
                          <div className="ld-service-foot">
                            <span>{service.outputs[0]}</span>
                            <span className="ld-service-arrow" aria-hidden="true">↗</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        <section className="ld-section ld-section--deep">
          <div className="ld-container">
            <div className="ld-head ld-head--light" data-reveal>
              <div>
                <p className="ld-eyebrow ld-eyebrow--light">A useful operating boundary</p>
                <h2>Prepared work reaches the right reviewer.</h2>
              </div>
              <p>A bookkeeping handoff should make routine work easier to review without moving sensitive decisions to the wrong person.</p>
            </div>
            <div className="ld-metrics" style={{ borderColor: 'rgba(255,255,255,.16)', marginTop: 0 }}>
              <div className="ld-metric" style={{ borderColor: 'rgba(255,255,255,.16)' }}><strong style={{ color: '#fff' }}>Bookkeepers prepare</strong><span style={{ color: '#a4bbb0' }}>Records, reconciliations, schedules, queues, draft reports, and supporting evidence.</span></div>
              <div className="ld-metric" style={{ borderColor: 'rgba(255,255,255,.16)' }}><strong style={{ color: '#fff' }}>Your team reviews</strong><span style={{ color: '#a4bbb0' }}>Exceptions, accounting treatment, estimates, approvals, payment release, and final reporting.</span></div>
              <div className="ld-metric" style={{ borderColor: 'rgba(255,255,255,.16)' }}><strong style={{ color: '#fff' }}>Specialists decide</strong><span style={{ color: '#a4bbb0' }}>Tax positions, legal conclusions, assurance, and other qualified professional judgment.</span></div>
              <div className="ld-metric" style={{ borderColor: 'rgba(255,255,255,.16)' }}><strong style={{ color: '#fff' }}>Evidence before sign-off</strong><span style={{ color: '#a4bbb0' }}>Source documents, reconciliation notes, open questions, and the reviewer's acceptance.</span></div>
            </div>
          </div>
        </section>

        <section className="ld-section">
          <div className="ld-container">
            <div className="ld-head" data-reveal>
              <div>
                <p className="ld-eyebrow">Planning your support</p>
                <h2>Questions before you choose a scope.</h2>
              </div>
              <p>Start with one queue and a named reviewer. Add connected work only after the first handoff is steady.</p>
            </div>
            <div className="contact-faq-list">
              <details open><summary>Can several services work together?</summary><p>Yes. Related scopes can share source records, deadlines, and review owners. The consultation defines which tasks belong together and where each approval stays.</p></details>
              <details><summary>Do we need to change bookkeeping software?</summary><p>No change is assumed. Compatibility, access, source exports, and the working process are reviewed before setup.</p></details>
              <details><summary>Can we start with one recurring problem?</summary><p>Yes. A contained backlog, reconciliation queue, or close task can establish the records, controls, and review rhythm before the scope expands.</p></details>
              <details><summary>What happens to unusual or sensitive items?</summary><p>They remain visible in an exception queue and move to the authorized reviewer. Support staff do not make final accounting, tax, legal, or payment decisions.</p></details>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
