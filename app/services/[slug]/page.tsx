import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

const serviceDetails: Record<string, { tasks: string[]; controls: string[]; firstWeek: string[] }> = {
  'operations-support': {
    tasks: ['Bank and card reconciliations', 'Close checklist updates', 'Variance notes and missing-document follow-up'],
    controls: ['Read-only bank feeds where possible', 'Exception list for judgment calls', 'Controller sign-off on final reports'],
    firstWeek: ['Review the chart of accounts', 'Complete one sample reconciliation', 'Agree on close dates and review owners'],
  },
  'customer-support': {
    tasks: ['Invoice and customer-account checks', 'AR aging notes', 'Collection follow-up from approved scripts'],
    controls: ['Owner approval for credits and write-offs', 'A record of every customer follow-up', 'Weekly review of disputed balances'],
    firstWeek: ['Review invoice and payment examples', 'Set the follow-up schedule', 'Define when an account must be escalated'],
  },
  'admin-support': {
    tasks: ['Vendor bill entry', 'Receipt and purchase-order matching', 'Payment packet preparation'],
    controls: ['No authority to release payments', 'Two-person approval where required', 'Exception notes for duplicates or changed bank details'],
    firstWeek: ['Review vendor and coding rules', 'Process a sample bill batch', 'Test the approval handoff'],
  },
  'reporting-and-qa': {
    tasks: ['Draft P&L and balance sheet packets', 'Account and variance notes', 'Source-document folder checks'],
    controls: ['Tie reports to reconciled accounts', 'Flag unusual or missing items', 'Owner, controller, or CPA approval before use'],
    firstWeek: ['Choose the report format', 'Review one prior close packet', 'Set due dates for draft and final review'],
  },
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return {
    title: service?.title || 'Service',
    description: service?.desc,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: service?.title || 'Offshore bookkeeping service',
      description: service?.desc,
      url: `/services/${slug}`,
      type: 'website',
    },
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const details = serviceDetails[service.slug];
  const siteUrl = `https://${site.domain.toLowerCase()}`;
  const pageUrl = `${siteUrl}/services/${service.slug}`;
  const serviceId = `${pageUrl}#service`;
  const launchPlanId = `${pageUrl}#first-week`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: service.title,
        description: service.desc,
        mainEntity: { '@id': serviceId },
        hasPart: { '@id': launchPlanId },
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: service.title,
        description: service.desc,
        serviceType: 'Offshore bookkeeping support',
        provider: {
          '@type': 'Organization',
          name: site.brand,
          url: siteUrl,
        },
      },
      {
        '@type': 'HowTo',
        '@id': launchPlanId,
        name: `How to start ${service.title.toLowerCase()}`,
        description: `A first-week setup plan for ${service.title.toLowerCase()}.`,
        step: details.firstWeek.map((item, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: item,
          text: item,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: service.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">Offshore bookkeeping role</p>
              <h1>{service.title}</h1>
              <p className="lead">{service.desc}</p>
              <a className="btn" href="/contact">Plan this role</a>
            </div>
            <div className="hero-card">
              <img src={site.serviceImage} alt={`${service.title} offshore service team`} />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container cards">
            <div className="card">
              <h3>Work to hand off</h3>
              <ul>{details.tasks.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card">
              <h3>Checks to keep</h3>
              <ul>{details.controls.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card" id="first-week">
              <h3>First week</h3>
              <ol>{details.firstWeek.map((item) => <li key={item}>{item}</li>)}</ol>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
