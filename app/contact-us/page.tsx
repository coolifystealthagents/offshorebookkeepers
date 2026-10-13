import type { Metadata } from 'next';
import { Footer, Header, JsonLd } from '../components';
import StandardContactForm from './StandardContactForm';
import './contact.css';

const canonical = 'https://offshorebookkeepers.com/contact-us';

export const metadata: Metadata = {
  title: 'Contact Offshore Bookkeepers | Book a Consultation',
  description: 'Book a free consultation to define offshore bookkeeping support, access boundaries, review ownership, and a controlled launch plan.',
  alternates: { canonical: canonical }, robots: { index: true, follow: true },
};

const steps = [
  ['Workflow discovery', 'Map the recurring queue, source records, deadlines, current owners, and the exceptions that slow the team down.'],
  ['Role design', 'Define the bookkeeper’s responsibilities, access boundaries, outputs, review points, schedule, and escalation rules.'],
  ['Candidate matching', 'Review Philippines-based candidates against the systems, bookkeeping routines, communication needs, and working hours in the brief.'],
  ['Controlled launch', 'Begin with representative work, review the first outputs closely, and expand scope only after the handoff is reliable.'],
];
const prep = [
  ['Recurring work', 'Bring the weekly and monthly tasks that consume the most finance-team time.'],
  ['Current ownership', 'Identify who prepares, reviews, approves, posts, releases, and resolves exceptions today.'],
  ['Systems and access', 'List the ledger, banking, billing, expense, document, and communication tools involved.'],
  ['Service standard', 'Share deadlines, expected outputs, review cadence, backlog, and the response time the workflow needs.'],
];
const pathways = [
  ['/services/daily-transaction-coding', 'Transaction coding', 'Keep routine activity moving through approved account rules and an exception queue.'],
  ['/services/accounts-payable-processing', 'Accounts payable', 'Prepare bills and approval queues while your authorized team retains payment release.'],
  ['/services/bank-reconciliation-support', 'Reconciliations', 'Connect statement balances, ledger activity, and open differences for reviewer sign-off.'],
  ['/services/month-end-close-support', 'Month-end close', 'Maintain schedules, evidence, dependencies, and review notes on one close calendar.'],
  ['/services/management-reporting-support', 'Management reporting', 'Refresh approved reporting templates and tie key figures back to source records.'],
];
const faqs = [
  ['What bookkeeping work can be delegated?', 'Document collection, routine coding under approved rules, payable and receivable preparation, reconciliations, schedule maintenance, and reporting preparation are common starting points. Your controller, owner, CPA, or other qualified reviewer retains judgment and final approval.'],
  ['Can an offshore bookkeeper access our accounting system?', 'Yes, when the role requires it and your team approves the access model. Start with named accounts, least-privilege permissions, multi-factor authentication, and a representative sample before expanding access.'],
  ['Do bookkeepers release payments or make tax decisions?', 'No. Payment release, bank-detail approval, accounting-policy decisions, tax positions, legal conclusions, and final financial sign-off remain with authorized or qualified client personnel.'],
  ['Which systems can candidates support?', 'The consultation begins with your actual ledger, banking, billing, expense, document, and communication stack. Matching is based on the tools and workflow in the approved role brief rather than an assumed platform list.'],
  ['How does a controlled launch work?', 'The team documents the workflow and review standard, then starts with a limited batch. Your reviewer checks the output and exception handling before scope, volume, or access expands.'],
  ['What should we bring to the consultation?', 'Bring the recurring bottleneck, current owner, systems involved, expected output, review deadline, known access constraints, and a redacted example if one is useful.'],
];

export default function ContactUsPage() {
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'ContactPage', name: 'Contact Offshore Bookkeepers', url: canonical, description: metadata.description },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://offshorebookkeepers.com' }, { '@type': 'ListItem', position: 2, name: 'Contact Us', item: canonical }] },
    { '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
  ] };
  return <><Header /><main className="contact-page"><JsonLd data={schema} />
    <section className="contact-hero"><div className="container contact-hero-copy"><p className="contact-eyebrow">Contact Us</p><h1>Get In Touch</h1><p>Build dependable bookkeeping capacity around your real close calendar, financial controls, and reviewer responsibilities.</p><a className="contact-hero-button" href="#contactPageForm">Book a free consultation</a></div></section>
    <section className="contact-section contact-intro"><div className="container contact-intro-grid"><div className="contact-intro-copy"><p className="contact-eyebrow">Bookkeeping staffing consultation</p><h2>Turn a recurring finance bottleneck into a controlled support role.</h2><p>Tell us where coding, payables, receivables, reconciliations, close, or reporting is getting stuck. We will help define work a remote bookkeeper can prepare and the authority your team must retain.</p><h3>What to Expect</h3><ul><li>A practical review of the work, systems, volume, timing, and handoffs</li><li>A role brief with outputs, access limits, review points, and escalation rules</li><li>Candidate matching based on the approved workflow and working schedule</li><li>A controlled first phase before permissions or volume expand</li></ul><p className="contact-email">Prefer email? <a href="mailto:hello@offshorebookkeepers.com">hello@offshorebookkeepers.com</a></p></div><StandardContactForm endpoint="/api/contact" encoding="form" /></div></section>
    <section className="contact-section contact-cred"><div className="container contact-split"><img src="/illustrations/getillustrations/hannah-business-illustrations-svg/finance-review-handoff.svg" width="1000" height="1000" alt="Bookkeeper and finance reviewer coordinating a documented financial handoff" /><div><p className="contact-eyebrow">Powered by Stealth Agents</p><h2>Bookkeeping expertise. Stealth Agents support.</h2><p>Stealth Agents provides dedicated virtual assistant staffing with recruiting and ongoing support designed around each client’s approved role. For bookkeeping work, the operating model starts with documented tasks, limited access, visible exceptions, and accountable client review.</p><p><strong>Offshore Bookkeepers is a subsidiary of Stealth Agents.</strong></p><a className="contact-button" href="#contactPageForm">Book a consultation</a></div></div></section>
    <section className="contact-section contact-booking"><div className="container contact-booking-grid"><div><p className="contact-eyebrow">Direct scheduling</p><h2>Or Skip the Wait: Book a Call Now</h2><p>Choose a time to discuss the bookkeeping queue, systems, deadlines, controls, and reviewer ownership your team needs.</p></div><iframe title="Book an offshore bookkeeping consultation" src="https://go.oncehub.com/StealthAgentsTeam" loading="lazy" allow="camera; microphone" /></div></section>
    <section className="contact-section"><div className="container"><div className="contact-heading"><p className="contact-eyebrow">After you reach out</p><h2>A clear path from workflow to controlled launch.</h2></div><div className="contact-card-grid">{steps.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="contact-section contact-soft"><div className="container"><div className="contact-heading"><p className="contact-eyebrow">Prepare for a useful call</p><h2>Bring the operating details that make the role specific.</h2></div><div className="contact-card-grid">{prep.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="contact-section contact-boundaries"><div className="container contact-split"><div><p className="contact-eyebrow">Responsibility and boundaries</p><h2>Delegate preparation, not financial authority.</h2><p>A remote bookkeeper can organize records, prepare routine entries under approved rules, maintain schedules, reconcile accounts, document exceptions, and assemble review-ready reports.</p></div><div className="contact-boundary-card"><h3>Your authorized team retains</h3><ul><li>Payment release and changes to banking or vendor details</li><li>Accounting policy, estimates, write-offs, and final journal approval</li><li>Tax positions, filings, legal conclusions, and regulatory decisions</li><li>Payroll authorization, executive decisions, and financial-statement sign-off</li><li>Approval of access, exceptions, and any expansion of role scope</li></ul></div></div></section>
    <section className="contact-section"><div className="container"><div className="contact-heading"><p className="contact-eyebrow">Common starting points</p><h2>Begin with a workflow that is recurring and reviewable.</h2></div><div className="contact-path-grid">{pathways.map(([href, title, body]) => <a href={href} key={href}><h3>{title}</h3><p>{body}</p><span>Explore this service →</span></a>)}</div><a className="contact-services-link" href="/services">View the full services collection →</a></div></section>
    <section className="contact-section contact-faq"><div className="container"><div className="contact-heading"><p className="contact-eyebrow">Frequently asked questions</p><h2>Questions about offshore bookkeeping support.</h2></div><div className="contact-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
  </main><Footer /></>;
}
