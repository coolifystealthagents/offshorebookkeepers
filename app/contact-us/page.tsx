import type { Metadata } from "next";
import { Header, Footer } from "../components";
import StandardContactForm from "./StandardContactForm";
import "./contact.css";
import "./image-fix.css";

export const metadata: Metadata = { title: "Contact Us | Offshore Bookkeeping Support", description: "Book a free consultation to scope accountable offshore bookkeeping support for your business.", alternates: { canonical: "/contact-us" }, robots: { index: true, follow: true } };
const services = [
  ["Transaction coding", "Keep routine coding current with documented chart-of-accounts rules and exception queues."],
  ["Accounts payable", "Prepare vendor records, approval-ready bills, and payment queues while your team keeps release authority."],
  ["Reconciliations", "Match bank, card, loan, and platform balances with evidence retained for reviewer sign-off."],
  ["Close and reporting", "Maintain close checklists, schedules, reporting packets, and clearly logged follow-up items."],
];
const quotes = [
  ["Our reconciliations arrived with clear support and an exception list we could review.", "Controller, services company"],
  ["Payables and close tasks finally had visible owners, due dates, and approval points.", "Finance director"],
  ["Clear access limits and controller review made the handoff feel controlled from day one.", "Founder, multi-entity business"],
];

export default function ContactUsPage(){return <>
  <Header/>
  <main className="trusted-contact tc-bookkeeping">
    <section className="tc-hero"><div className="container tc-hero-grid">
      <div className="tc-copy"><p className="tc-kicker">Close-ready support with clear review</p><h1>Give your finance team a cleaner close.</h1><p className="tc-lead">Tell us where reconciliations, payables, receivables, month-end close, or reporting slows the team down. We’ll help scope an offshore bookkeeping role with visible controls and reviewer sign-off.</p><div className="tc-proof-row"><span>35+ industries</span><span>Bookkeeping operations</span><span>Free consultation</span></div><a className="tc-text-link" href="#bookkeeping-support">Explore the close plan →</a></div>
      <StandardContactForm endpoint="/api/contact" encoding="form"/>
    </div></section>
    <section className="tc-strip"><div className="container tc-strip-grid"><strong>A practical consultation</strong><span>✓ Task inventory</span><span>✓ Access boundaries</span><span>✓ Controller review</span><span>✓ Launch plan</span></div></section>
    <section className="tc-section" id="bookkeeping-support"><div className="container"><div className="tc-section-head"><div><p className="tc-kicker">Where capacity helps</p><h2>Move the bookkeeping work, preserve financial control.</h2></div><p>The best offshore bookkeeping roles use consistent source documents, reconciled outputs, and a controller or owner who approves every close.</p></div><div className="tc-card-grid">{services.map(([title,body],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="tc-inline-cta"><strong>Know which queue needs help?</strong><a href="#contactPageForm">Discuss it with our team</a></div></div></section>
    <section className="tc-testimonials"><div className="container"><p className="tc-kicker">What finance teams value</p><h2>A close process with visible ownership.</h2><div className="tc-quote-grid">{quotes.map(([quote,by])=><figure key={quote}><div aria-label="5 out of 5 stars">★★★★★</div><blockquote>“{quote}”</blockquote><figcaption>{by}</figcaption></figure>)}</div></div></section>
    <section className="tc-section"><div className="container tc-check-grid"><div><p className="tc-kicker">Capability checklist</p><h2>Controls make capacity useful.</h2><p>We’ll map the operating conditions that help offshore bookkeeping stay accurate, secure, and reviewable.</p></div><ul><li>Chart-of-accounts and coding decision rules</li><li>Banking, ledger, and source-document access boundaries</li><li>Controller ownership and close review cadence</li><li>Approval thresholds and exception escalation</li><li>Reconciliation support and evidence retention</li><li>Close calendar and first-month scorecard</li></ul></div></section>
    <section className="tc-why"><div className="container tc-why-grid"><img src="/thumbnails/bookkeeping-financial-statement-flux-review.webp" width="1200" height="630" alt="Bookkeeping professional reviewing a financial statement variance report"/><div><p className="tc-kicker">Why structure matters</p><h2>Every close should leave an evidence trail.</h2><p>We shape roles around source documents, named owners, secure access, reconciliations, and reviewer sign-off—so capacity grows without weakening financial control.</p><a href="#contactPageForm">Scope my bookkeeping role →</a></div></div></section>
    <section className="tc-about"><div className="container tc-about-grid"><div><p className="tc-kicker">Powered by a proven team</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We're featured on Forbes as the top rated virtual assistant company.</p></div><a href="https://stealthagents.com" rel="noopener noreferrer">Powered by Stealth Agents</a></div></section>
    <section className="container tc-final"><div><p className="tc-kicker">A better close brief</p><h2>Build bookkeeping support your controller can confidently review.</h2><p>Share your books, close calendar, systems, and review needs. We’ll help define the role and next steps.</p></div><a href="#contactPageForm">Book a free consultation</a></section>
  </main><Footer/>
</>}
