import type { Metadata } from 'next';
import { Header, Footer } from '../components';

const scheduler = 'https://go.oncehub.com/StealthAgentsTeam';

export const metadata: Metadata = {
  title: 'Choose a Consultation Time',
  description: 'Choose an available time to discuss your bookkeeping workflow and role scope.',
  alternates: { canonical: '/thank-you' },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="sa-booking-page ob-thank-you">
        <div className="container sa-booking-grid">
          <div className="sa-booking-left">
            <p className="sa-booking-kicker">Request received</p>
            <h1>Choose a time to review your bookkeeping workflow.</h1>
            <p className="sa-booking-lead">Use the scheduler to select an available time. Opening this page directly does not confirm that a form submission was delivered.</p>
            <img className="sa-booking-image" src="/brand/stealth-agents-team-bacolod.png" alt="StealthAgents operations team in the Bacolod office" width="1200" height="800" />
            <div className="booking-prep">
              <h2>Bring one reviewable workflow</h2>
              <ul>
                <li>The source records and systems involved</li>
                <li>The expected output and deadline</li>
                <li>The person who reviews exceptions and approvals</li>
              </ul>
            </div>
          </div>
          <section className="sa-booking-calendar" aria-labelledby="booking-calendar-title">
            <h2 id="booking-calendar-title">Pick a time that works for you</h2>
            <iframe
              src={`${scheduler}?brdr=1pxd8d8d8&dt=&em=1&Si=1`}
              id="SOI_StealthAgentsTeam"
              name="ScheduleOnceIframe"
              title="Schedule a bookkeeping workflow consultation with StealthAgents"
              scrolling="yes"
              frameBorder="0"
              height="850"
              width="100%"
              className="sa-oncehub-frame"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <p className="booking-fallback">If the scheduler does not load, <a href={scheduler} target="_blank" rel="noopener noreferrer">open the StealthAgents booking page</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
