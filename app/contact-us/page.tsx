import type { Metadata } from 'next';
import { Footer, Header, JsonLd } from '../components';
import reviews from '../data/review-provenance.json';
import StandardContactForm from './StandardContactForm';
import './contact.css';

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

type Review = (typeof reviews.records)[number];
function ReviewCard({ review, duplicate = false }: { review: Review; duplicate?: boolean }) {
  return <article className="review-card" aria-hidden={duplicate || undefined}><div className="review-stars" aria-label={duplicate ? undefined : '5 out of 5 stars'}>★★★★★</div><h3>{review.headline}</h3><blockquote>“{review.body}”</blockquote><p><strong>{review.name}</strong><span>{review.detail}</span></p></article>;
}

export default function ContactUsPage() {
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'ContactPage', name: 'Contact Offshore Bookkeepers', url: canonical, description: metadata.description },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://offshorebookkeepers.com' }, { '@type': 'ListItem', position: 2, name: 'Contact Us', item: canonical }] },
    { '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
  ] };
  return <><Header /><main id="main-content" className="contact-page"><JsonLd data={schema} />
    <section className="contact-first-fold"><div className="container contact-fold-grid">
      <div className="contact-opening"><p className="contact-eyebrow">Contact Us</p><h1>Scope a bookkeeping role around your real close.</h1><p className="contact-lead">Share the queue, systems, deadlines, and approvals. We will help turn them into a controlled Philippines-based support role.</p>
        <div className="contact-assurances" aria-label="Consultation details"><span>No obligation</span><span>Scope before access</span><span>Owner approval stays in place</span></div>
        <section className="review-block" aria-labelledby="reviews-title"><div className="review-heading"><h2 id="reviews-title">StealthAgents reviews</h2><a href={reviews.source}>Approved first-party source</a></div>
          <div className="review-viewport" tabIndex={0}><div className="review-track">{reviews.records.map((review) => <ReviewCard review={review} key={review.name} />)}{reviews.records.map((review) => <ReviewCard review={review} duplicate key={`${review.name}-duplicate`} />)}</div></div>
        </section>
      </div>
      <StandardContactForm endpoint="/api/contact" encoding="form" />
    </div></section>

    <section className="contact-parent"><div className="container parent-grid"><figure><img src="/brand/stealth-agents-team-bacolod.webp" width="1536" height="1024" alt="The official StealthAgents operations team in Bacolod" /></figure><div><p className="contact-eyebrow">Managed operating support</p><h2>The people behind the bookkeeping handoff.</h2><p>StealthAgents recruits Philippines-based professionals and supports the managed staffing relationship. Offshore Bookkeepers remains the specialist planning identity, while StealthAgents provides recruiting, team support, and operating continuity around the approved role.</p><div className="official-plate"><img src="/brand/stealth-agents-logo-black.png" width="320" height="86" alt="StealthAgents" /><strong>Official team, Bacolod</strong></div></div></div></section>

    <section className="contact-section contact-soft"><div className="container"><div className="contact-heading"><p className="contact-eyebrow">Prepare for a useful call</p><h2>Bring the operating details that make the role specific.</h2></div><div className="contact-card-grid">{prep.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="contact-section contact-boundaries"><div className="container contact-split"><div><p className="contact-eyebrow">Responsibility and boundaries</p><h2>Delegate preparation, not financial authority.</h2><p>A remote bookkeeper can organize records, prepare routine entries under approved rules, maintain schedules, reconcile accounts, document exceptions, and assemble review-ready reports.</p></div><div className="contact-boundary-card"><h3>Your authorized team retains</h3><ul><li>Payment release and changes to banking or vendor details</li><li>Accounting policy, estimates, write-offs, and final journal approval</li><li>Tax positions, filings, legal conclusions, and regulatory decisions</li><li>Approval of access, exceptions, and any expansion of role scope</li></ul></div></div></section>
    <section className="contact-section"><div className="container"><div className="contact-heading"><p className="contact-eyebrow">Common starting points</p><h2>Begin with a workflow that is recurring and reviewable.</h2></div><div className="contact-path-grid">{pathways.map(([href, title, body]) => <a href={href} key={href}><h3>{title}</h3><p>{body}</p><span>Explore this service →</span></a>)}</div><a className="contact-services-link" href="/services">View all bookkeeping services →</a></div></section>
    <section className="contact-section contact-faq"><div className="container"><div className="contact-heading"><p className="contact-eyebrow">Frequently asked questions</p><h2>Questions about offshore bookkeeping support.</h2></div><div className="contact-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
  </main><Footer /></>;
}
