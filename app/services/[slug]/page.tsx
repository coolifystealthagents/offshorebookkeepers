import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-data';
import { site } from '../../data';

const base = `https://${site.domain.toLowerCase()}`;

export function generateStaticParams() {
  return fleetServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);

  if (!service) return { title: 'Not found' };

  const url = `/services/${service.slug}`;
  return {
    title: service.title,
    description: service.desc,
    alternates: { canonical: url },
    openGraph: {
      title: service.title,
      description: service.desc,
      url,
      type: 'website',
    },
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();

  const url = `${base}/services/${service.slug}`;
  const serviceId = `${url}#service`;
  const firstWeekId = `${url}#first-week`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: service.title,
        description: service.desc,
        mainEntity: { '@id': serviceId },
        hasPart: { '@id': firstWeekId },
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: service.title,
        description: service.desc,
        serviceType: 'Philippines-based bookkeeping staffing',
        areaServed: {
          '@type': 'Country',
          name: 'Philippines',
        },
        provider: {
          '@type': 'Organization',
          name: site.brand,
          url: base,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Bookkeeping work to include',
          itemListElement: service.tasks.map((task) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: task,
            },
          })),
        },
      },
      {
        '@type': 'HowTo',
        '@id': firstWeekId,
        name: `How to start ${service.title.toLowerCase()}`,
        description: `A first-week setup plan for a Filipino ${service.title.toLowerCase()} team member.`,
        step: service.firstWeek.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step,
          text: step,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: base },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${base}/services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: url },
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
            <p className="eyebrow">Philippines-based bookkeeping support</p>
            <h1>{service.title}</h1>
            <p className="lead">{service.desc}</p>
            <p>We recruit for this service only in the Philippines. Every candidate is Filipino talent based in the Philippines.</p>
            <a className="btn primary" href="/contact">Discuss this service</a>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-detail-grid">
            <div className="card">
              <h2>Work to include</h2>
              <ul>{service.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
            </div>
            <div className="card">
              <h2>Controls to retain</h2>
              <ul>{service.controls.map((control) => <li key={control}>{control}</li>)}</ul>
            </div>
            <div className="card" id="first-week">
              <h2>First-week plan</h2>
              <ol>{service.firstWeek.map((step) => <li key={step}>{step}</li>)}</ol>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
