import type { Metadata } from 'next';
import { Header, Footer } from '../components';

export const metadata: Metadata = {
  title: 'Consultation Booked',
  description: 'Your Offshore Bookkeepers consultation has been booked.',
  alternates: { canonical: '/thanks-whats-next' },
  robots: { index: false, follow: false },
};

export default function ThanksWhatsNextPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="ob-thank-you">
        <section className="ob-thank-hero">
          <div className="container">
            <span className="ob-success-mark" aria-hidden="true">✓</span>
            <p className="eyebrow">Consultation booked</p>
            <h1>Your bookkeeping workflow conversation is on the calendar.</h1>
            <p className="lead">Prepare one representative workflow, its source records, expected output, and reviewer. This keeps the conversation specific and useful.</p>
            <div className="ob-thank-actions">
              <a className="btn primary" href="/services">Review bookkeeping services</a>
              <a className="ob-text-link" href="/blog/bookkeeping-outsourcing-due-diligence-checklist">Use the buyer checklist</a>
            </div>
          </div>
        </section>
        <section className="ob-detail-section">
          <div className="container ob-section-heading">
            <div><p className="eyebrow">Before the call</p><h2>Bring the handoff, not sensitive credentials.</h2></div>
            <p>A redacted example is enough to discuss the queue, systems, deadlines, exceptions, and approval boundaries. Do not send passwords or unrestricted account access.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
