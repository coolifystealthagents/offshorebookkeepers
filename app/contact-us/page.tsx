import type { Metadata } from 'next';
import { Footer, Header, JsonLd, ReviewRail } from '../components';
import StandardContactForm from './StandardContactForm';

const canonical = 'https://offshorebookkeepers.com/contact-us';

export const metadata: Metadata = {
  title: 'Contact Offshore Bookkeepers | Book a Consultation',
  description: 'Define offshore bookkeeping support, access boundaries, review ownership, and a controlled launch plan.',
  alternates: { canonical },
  robots: { index: true, follow: true },
};

const prep = [
  ['Recurring work', 'Bring the weekly and monthly tasks that consume the most finance-team time.'],
  ['Current ownership', 'Identify who prepares, reviews, approves, posts, releases, and resolves exceptions today.'],
  ['Systems and access', 'List the ledger, banking, billing, expense, document, and communication tools involved.'],
  ['Service standard', 'Share deadlines, expected outputs, review cadence, backlog, and required response time.'],
];

const pathways = [
  ['/services/daily-transaction-coding', 'Transaction coding', 'Move routine activity through approved account rules and a visible exception queue.'],
  ['/services/accounts-payable-processing', 'Accounts payable', 'Prepare bills and approval queues while your authorized team retains payment release.'],
  ['/services/bank-reconciliation-support', 'Reconciliations', 'Connect statement balances, ledger activity, and open differences for reviewer sign-off.'],
  ['/services/month-end-close-support', 'Month-end close', 'Maintain schedules, evidence, dependencies, and review notes on one close calendar.'],
];

const faqs = [
  ['What bookkeeping work can be delegated?', 'Document collection, routine coding under approved rules, payable and receivable preparation, reconciliations, schedule maintenance, and reporting preparation are common starting points. Your controller, owner, CPA, or other qualified reviewer retains judgment and final approval.'],
  ['Can an offshore bookkeeper access our accounting system?', 'Yes, when the role requires it and your team approves the access model. Start with named accounts, least-privilege permissions, multi-factor authentication, and a representative sample before expanding access.'],
  ['Do bookkeepers release payments or make tax decisions?', 'No. Payment release, bank-detail approval, accounting-policy decisions, tax positions, legal conclusions, and final financial sign-off remain with authorized or qualified client personnel.'],
  ['How does a controlled launch work?', 'The team documents the workflow and review standard, then starts with a limited batch. Your reviewer checks output and exception handling before scope, volume, or access expands.'],
];

export default function ContactUsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ContactPage', name: 'Contact Offshore Bookkeepers', url: canonical, description: metadata.description },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://offshorebookkeepers.com' }, { '@type': 'ListItem', position: 2, name: 'Contact Us', item: canonical }] },
      { '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    ],
  };

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="ld-page ld-contact-page">
        <JsonLd data={schema} />

        <section className="ld-contact-hero">
          <div className="ld-container ld-contact-grid">
            <div className="ld-contact-copy">
              <p className="ld-eyebrow ld-eyebrow--light">Contact us</p>
              <h1>Scope a bookkeeping role around <span className="ld-mark">your real close.</span></h1>
              <p className="ld-hero-lead">
                Share the queue, systems, deadlines, and approvals. We will help turn
                them into a controlled Philippines-based support role.
              </p>
              <ul className="ld-trust">
                <li>No obligation</li>
                <li>Scope before access</li>
                <li>Owner approval stays in place</li>
              </ul>
              <div className="ld-contact-note">
                <span>What the first call covers</span>
                <div><strong>One queue</strong><p>Choose work with a clear input, output, and reviewer.</p></div>
                <div><strong>One boundary</strong><p>Name the payments, treatment, and sign-off that stay with you.</p></div>
                <div><strong>One first batch</strong><p>Agree the sample, access limits, and daily review rhythm.</p></div>
              </div>
            </div>
            <StandardContactForm endpoint="/api/contact" encoding="form" />
          </div>
        </section>

        <section className="ld-contact-team">
          <div className="ld-container ld-contact-team-grid">
            <figure>
              <img src="/brand/stealth-agents-team-bacolod.webp" width="1536" height="1024" alt="The official StealthAgents operations team in Bacolod" />
              <figcaption>Official team · Bacolod City, Philippines</figcaption>
            </figure>
            <div>
              <p className="ld-eyebrow ld-eyebrow--light">Managed operating support</p>
              <h2>The people behind the bookkeeping handoff.</h2>
              <p>
                StealthAgents recruits Philippines-based professionals and supports the
                managed staffing relationship. Offshore Bookkeepers remains the specialist
                planning identity, while StealthAgents provides recruiting, team support,
                and operating continuity around the approved role.
              </p>
              <div className="ld-contact-plate">
                <img src="/brand/stealth-agents-logo-black.png" alt="StealthAgents" />
                <strong>Official team, Bacolod</strong>
              </div>
            </div>
          </div>
        </section>

        <ReviewRail />

        <section className="ld-section ld-section--paper">
          <div className="ld-container">
            <div className="ld-head" data-reveal>
              <div>
                <p className="ld-eyebrow">Prepare for a useful call</p>
                <h2>Bring the operating details that make the role specific.</h2>
              </div>
              <p>A short queue, a good example, and a named reviewer are enough to start.</p>
            </div>
            <div className="ld-contact-prep">
              {prep.map(([title, body]) => (
                <article key={title}><h3>{title}</h3><p>{body}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="ld-section">
          <div className="ld-container">
            <div className="ld-head" data-reveal>
              <div>
                <p className="ld-eyebrow">Common starting points</p>
                <h2>Begin with a workflow that is recurring and reviewable.</h2>
              </div>
              <p>Each scope keeps preparation with the bookkeeper and approval with your team.</p>
            </div>
            <div className="ld-contact-paths">
              {pathways.map(([href, title, body]) => (
                <a href={href} key={href}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <span>Explore this service ↗</span>
                </a>
              ))}
            </div>
            <a className="ld-link" href="/services" style={{ marginTop: 22 }}>View all bookkeeping services</a>
          </div>
        </section>

        <section className="ld-section ld-section--deep">
          <div className="ld-container ld-control">
            <div className="ld-control-copy" data-reveal>
              <p className="ld-eyebrow ld-eyebrow--light">Responsibility and boundaries</p>
              <h2>Delegate preparation, not financial authority.</h2>
              <p>
                A remote bookkeeper can organize records, prepare routine entries under
                approved rules, maintain schedules, reconcile accounts, document
                exceptions, and assemble review-ready reports.
              </p>
            </div>
            <div className="ld-approval-card" data-tilt data-tilt-strength="2">
              <h3>Your authorized team retains</h3>
              <div className="ld-approval-row"><span>Payment release and bank-detail changes</span><b>Client</b></div>
              <div className="ld-approval-row"><span>Accounting policy, estimates, write-offs</span><b>Client</b></div>
              <div className="ld-approval-row"><span>Final journal and report approval</span><b>Client</b></div>
              <div className="ld-approval-row"><span>Tax, legal, and regulatory positions</span><b>Adviser</b></div>
            </div>
          </div>
        </section>

        <section className="ld-section">
          <div className="ld-container">
            <div className="ld-head" data-reveal>
              <div>
                <p className="ld-eyebrow">Frequently asked questions</p>
                <h2>Questions about offshore bookkeeping support.</h2>
              </div>
              <p>Clear scope and access rules are the starting point, not an afterthought.</p>
            </div>
            <div className="contact-faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}><summary>{question}</summary><p>{answer}</p></details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
