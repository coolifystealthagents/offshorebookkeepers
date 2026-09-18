import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Header, Footer } from '../components';

export const metadata: Metadata = {
  title: 'Next Steps',
  description: 'Prepare for a bookkeeping workflow consultation.',
  alternates: { canonical: '/thank-you' },
  robots: { index: false, follow: false },
};

const nextSteps = [
  ['Request review', 'The team reviews the workflow, systems, timeline, and role details you submitted.'],
  ['Scope follow-up', 'A follow-up conversation can clarify source records, outputs, access, and reviewer ownership.'],
  ['Controlled start', 'If the scope is a fit, begin with a representative sample before expanding access or volume.'],
];

export default async function ThankYouPage() {
  const accepted = (await cookies()).get('ob_lead_accepted')?.value === '1';
  return (
    <>
      <Header />
      <main className="ob-thank-you">
        <section className="ob-thank-hero"><div className="container"><span className="ob-success-mark" aria-hidden="true">{accepted ? '✓' : '→'}</span><p className="eyebrow">{accepted ? 'Request received' : 'Consultation planning'}</p><h1>{accepted ? 'Thank you. Your bookkeeping workflow is ready for review.' : 'Start with a real bookkeeping bottleneck.'}</h1><p className="lead">{accepted ? 'You do not need to submit the form again. Use the time before follow-up to gather a redacted example, the source records, and the name of the person who will review the work.' : 'No submission was confirmed in this browser. Use the contact form to send your workflow, source records, expected output, and reviewer details.'}</p>{!accepted && <div className="ob-thank-actions"><a className="btn primary" href="/contact-us">Go to the contact form</a></div>}</div></section>
        {accepted && <section className="ob-detail-section"><div className="container"><div className="ob-section-heading"><div><p className="eyebrow">What happens next</p><h2>A short path from bottleneck to role brief.</h2></div><p>The next conversation should stay grounded in the real work, not generic promises or unsupported outcomes.</p></div><div className="ob-first-week">{nextSteps.map(([title, body], index) => <article key={title}><span>Step {index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="ob-thank-actions"><a className="btn primary" href="/services">Review the service catalog</a><a className="ob-text-link" href="/blog/bookkeeping-outsourcing-due-diligence-checklist">Use the 25-question buyer checklist</a></div></div></section>}
      </main>
      <Footer />
    </>
  );
}
