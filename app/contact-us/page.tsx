import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import StandardContactForm from './StandardContactForm';
import './contact.css';
import './image-fix.css';

export const metadata: Metadata = {
  title: 'Contact Us | Scope Offshore Bookkeeping Support',
  description: 'Book a free consultation to define a practical offshore bookkeeping scope, its records, outputs, access boundaries, and reviewer ownership.',
  alternates: { canonical: '/contact-us' },
  robots: { index: true, follow: true },
};

const scopes = [
  ['Transaction and document queues', 'Organize recurring coding, receipt, bill, and exception work around approved rules.'],
  ['Reconciliations and close', 'Define schedules, evidence, dependencies, and reviewer sign-off for the monthly cycle.'],
  ['Payables and receivables', 'Prepare approval-ready bills, aging updates, cash application, and dispute registers.'],
  ['Reporting and specialist handoffs', 'Prepare source-tied schedules and data packs for management, controllers, and advisers.'],
];

const process = [
  ['Bring one bottleneck', 'Tell us which queue, deadline, or handoff is consuming finance-team time.'],
  ['Map the work', 'Identify the source records, systems, cadence, output, and common exceptions.'],
  ['Keep authority clear', 'Name the client reviewer and retain approval, release, policy, tax, and legal decisions.'],
  ['Start with a sample', 'Test a representative batch before increasing access, frequency, or volume.'],
];

export default function ContactUsPage() {
  return <>
    <Header />
    <main className="trusted-contact tc-bookkeeping">
      <section className="tc-hero"><div className="container tc-hero-grid">
        <div className="tc-copy"><p className="tc-kicker">A clearer bookkeeping role starts here</p><h1>Scope the queue. Name the reviewer. Start with a controlled sample.</h1><p className="tc-lead">Tell us where coding, payables, receivables, reconciliations, close, or reporting gets stuck. Use the free consultation to define work a remote bookkeeper can prepare and the decisions your team retains.</p><a className="tc-primary-link" href="#contactPageForm">Book a free scope call</a><div className="tc-proof-row"><span>Workflow brief</span><span>Access boundaries</span><span>Review ownership</span></div><a className="tc-text-link" href="#bookkeeping-support">See what the call covers</a></div>
        <StandardContactForm endpoint="/api/contact" encoding="form" />
      </div></section>
      <section className="tc-strip"><div className="container tc-strip-grid"><strong>A practical scope call</strong><span>Task inventory</span><span>Source records</span><span>Client controls</span><span>Pilot plan</span></div></section>
      <section className="tc-section" id="bookkeeping-support"><div className="container"><div className="tc-section-head"><div><p className="tc-kicker">Where capacity can help</p><h2>Move preparation work without moving financial authority.</h2></div><p>Choose the recurring work that is easiest to demonstrate, review, and improve. The service catalog describes 21 realistic bookkeeping support scopes.</p></div><div className="tc-card-grid">{scopes.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="tc-inline-cta"><strong>Already know the bottleneck?</strong><a href="#contactPageForm">Book a free scope call</a></div></div></section>
      <section className="tc-section tc-process"><div className="container"><div className="tc-section-head"><div><p className="tc-kicker">What happens on the call</p><h2>A role brief built from your real workflow.</h2></div><p>No ratings, invented outcomes, or generic promises. The conversation stays focused on the records, work, controls, and first sample.</p></div><div className="tc-card-grid">{process.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="tc-section"><div className="container tc-check-grid"><div><p className="tc-kicker">Prepare for the call</p><h2>Bring enough context to make the scope specific.</h2><p>Redact sensitive records. A process description and representative examples are enough to start.</p></div><ul><li>The queue or deadline creating the bottleneck</li><li>The systems and source records involved</li><li>A redacted example of the expected output</li><li>The person who reviews and approves the work</li><li>Known access limits and escalation rules</li><li>A representative batch for a controlled pilot</li></ul></div></section>
      <section className="tc-why"><div className="container tc-why-grid"><img src="/illustrations/getillustrations/hannah-business-illustrations-svg/finance-review-handoff.svg" width="1000" height="1000" alt="Bookkeeper and finance reviewer coordinating a documented handoff" /><div><p className="tc-kicker">Why the boundaries matter</p><h2>Capacity works better when every handoff has an owner.</h2><p>Prepare routine records, schedules, and exceptions with documented rules. Keep payment release, accounting judgment, tax positions, legal conclusions, and final sign-off with qualified client owners.</p><a href="/services">Explore all 21 bookkeeping services</a></div></div></section>
      <section className="container tc-final"><div><p className="tc-kicker">Start with one recurring workflow</p><h2>Build bookkeeping support your reviewer can actually manage.</h2><p>Share the bottleneck, systems, cadence, output, and control requirements. We will use them to structure the next conversation.</p></div><a href="#contactPageForm">Book a free scope call</a></section>
    </main>
    <Footer />
  </>;
}
