import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from '../components';
import { fleetServices } from '../fleet-data';
import { site } from '../data';

const base = `https://${site.domain.toLowerCase()}`;
const pageUrl = `${base}/services`;
const description = 'Compare Philippines-based bookkeeping services for close, reconciliations, AP, AR, reporting, and specialist workflows.';

export const metadata: Metadata = {
  title: 'Philippines bookkeeping services',
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Philippines bookkeeping services',
    description,
    url: '/services',
    type: 'website',
  },
};

export default function Services() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': pageUrl,
        url: pageUrl,
        name: 'Philippines bookkeeping services',
        description,
        mainEntity: { '@id': `${pageUrl}#service-list` },
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#service-list`,
        name: 'Philippines-based bookkeeping services',
        numberOfItems: fleetServices.length,
        itemListElement: fleetServices.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.title,
          url: `${pageUrl}/${service.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: base },
          { '@type': 'ListItem', position: 2, name: 'Services', item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="fleet-hero variant-1">
          <div className="container">
            <p className="eyebrow">Philippines-based services</p>
            <h1>Philippines bookkeeping services</h1>
            <p className="lead">Choose a focused bookkeeping workflow, then define its tools, schedule, approvals, and handoffs.</p>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-service-grid">
            {fleetServices.map((service, index) => (
              <a className="card fleet-service-card" href={`/services/${service.slug}`} key={service.slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
                <b>View service →</b>
              </a>
            ))}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
