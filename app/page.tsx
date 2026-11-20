import type { CSSProperties } from 'react';
import * as data from './data';
import { Header, Footer, JsonLd, Marquee, ReviewRail, SectionHead } from './components';
import { fleetServices } from './fleet-data';
import { editorialPhoto } from './media';
import { servicePhoto } from './service-photos';

export const metadata = { alternates: { canonical: '/' } };

const site = (data as { site?: Record<string, string> }).site || {};
const blogPosts = ((data as { blogPosts?: Array<Record<string, unknown>> }).blogPosts || []).slice(0, 3);
const offer = ((data as unknown) as { staffingOffer?: { promise?: string; included?: readonly string[] } }).staffingOffer || {};

const marqueeItems = [
  'Monthly close',
  'Bank reconciliations',
  'Transaction coding',
  'Accounts payable',
  'Accounts receivable',
  'Payroll records',
  'Draft reports',
  'Exception logs',
  'Controller review',
  'Source evidence',
];

const metrics = [
  { strong: 'Close calendar', span: 'Due dates for records, reconciliations, questions, and drafts' },
  { strong: 'Approval limits', span: 'Payments, payroll changes, write-offs, and final sign-off stay with you' },
  { strong: 'Matched experience', span: 'A bookkeeper who knows your accounting software and work type' },
  { strong: 'Named reviewer', span: 'One person who can answer exceptions and approve output' },
];

const rules = [
  'Give the bookkeeper one accepted example and a written account map before the first live batch.',
  'Open only the bank feeds, folders, and accounting permissions required for the first queue.',
  'Name the controller, owner, or CPA who approves accounting treatment, payments, and final reports.',
];

const process = [
  { label: 'Scope', title: 'Map the recurring queue', body: 'List the tasks, systems, deadlines, source records, and exception types that slow the close.' },
  { label: 'Match', title: 'Review a relevant bookkeeper', body: 'Match the accounting software, work type, schedule, communication style, and review needs.' },
  { label: 'Pilot', title: 'Run a small live batch', body: 'Start with limited access, a representative sample, daily review, and a visible exception log.' },
  { label: 'Expand', title: 'Add work after evidence', body: 'Expand scope or volume only when accuracy, escalation, and turnaround are steady.' },
];

const tagFor: Record<string, string> = {
  'current-books': 'Current books',
  'payables-receivables': 'AP / AR',
  'workforce-records': 'Payroll',
  'close-reporting': 'Close',
  'systems-cost-data': 'Systems',
  'industry-workflows': 'Industry',
};

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', name: site.brand, url: `https://${site.domain}` },
      { '@type': 'Organization', name: site.brand, url: `https://${site.domain}` },
    ],
  };

  const featured = fleetServices.slice(0, 9);
  const heroPhoto = '/photos/home-bookkeeping-review-lukas.webp';

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="ld-home">
        <JsonLd data={schema} />

        <section className="ld-hero">
          <div className="ld-container ld-hero-grid">
            <div className="ld-hero-copy">
              <p className="ld-eyebrow">Offshore bookkeeping support</p>
              <h1>
                Bookkeeping support built around <span className="ld-mark">your close.</span>
              </h1>
              <p className="ld-hero-lead">
                Get help with monthly close, AP, AR, reconciliations, and draft reports
                while your owner or controller keeps approval and final review.
              </p>
              <div className="ld-actions">
                <a className="ld-btn ld-btn--lime" href="/contact-us" id="cta-page-action-1">Plan my bookkeeping role ↗</a>
                <a className="ld-btn ld-btn--ghost" href="/services">See the work</a>
              </div>
              <ul className="ld-trust">
                <li>Close calendar</li>
                <li>Approval limits</li>
                <li>Source evidence</li>
                <li>Named reviewer</li>
              </ul>
            </div>

            <div className="ld-scene" aria-label="A bookkeeping close dashboard prepared for review">
              <div className="ld-orbit" aria-hidden="true" />
              <figure className="ld-photo" data-depth="7">
                <img src={heroPhoto} width="2000" height="1324" alt="A person reviewing printed financial charts with a pen" fetchPriority="high" />
                <figcaption>Records ready for review</figcaption>
              </figure>

              <div className="ld-console" data-tilt data-tilt-strength="3.5">
                <div className="ld-console-top">
                  <span>Close console</span>
                  <b>OCT · 2026</b>
                </div>
                <div className="ld-console-title">
                  <strong>Month-end close</strong>
                  <em>82% ready</em>
                </div>
                <div className="ld-ledger">
                  <div className="ld-row is-matched"><span>Bank feed · operating</span><b>142 items</b><i>✓</i></div>
                  <div className="ld-row is-matched"><span>Card reconciliation</span><b>38 items</b><i>✓</i></div>
                  <div className="ld-row is-hold"><span>Uncategorized activity</span><b>6 items</b><i>!</i></div>
                  <div className="ld-row is-review"><span>Draft P&amp;L review</span><b>Owner</b><i>→</i></div>
                  <div className="ld-row is-matched"><span>Source documents</span><b>96%</b><i>✓</i></div>
                </div>
                <div className="ld-console-foot">
                  <span>Exception log · 3 open</span>
                  <strong>Review gate: owner</strong>
                </div>
              </div>

              <div className="ld-checklist" data-depth="13">
                <span>Close checklist</span>
                <div>Bank recs matched</div>
                <div>AP bills prepared</div>
                <div>Draft report ready</div>
              </div>

              <div className="ld-stamp" aria-hidden="true">Reconciled</div>
              <div className="ld-balance" aria-hidden="true">
                <span>Prepared output</span>
                <strong>Ready for review</strong>
              </div>
            </div>
          </div>
          <Marquee items={marqueeItems} />
        </section>

        <section className="ld-section ld-section--paper">
          <div className="ld-container">
            <div className="ld-statement">
              <h2 data-reveal>A cleaner close starts with a clear <em>handoff.</em></h2>
              <div className="ld-statement-copy" data-reveal style={{ '--ld-delay': '90ms' } as CSSProperties}>
                <p>
                  Missing receipts, uncategorized transactions, and open reconciliations
                  slow the whole finance team down. None of that is strategy, but it still
                  delays the numbers your team needs.
                </p>
                <p>
                  A well-scoped offshore bookkeeping role gives that work an owner. Your
                  team sets the account map, access, close calendar, and review point
                  before the first live batch.
                </p>
              </div>
            </div>
            <div className="ld-metrics" data-reveal>
              {metrics.map((metric) => (
                <div className="ld-metric" key={metric.strong}>
                  <strong>{metric.strong}</strong>
                  <span>{metric.span}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ld-section" id="teams">
          <div className="ld-container">
            <SectionHead
              eyebrow="Choose the work that fits"
              title={<>Start with one recurring workflow.</>}
              copy="Every scope names the records needed, the work a remote bookkeeper can prepare, the output your team receives, and the decisions that stay with your controller or adviser."
            />
            <div className="ld-services">
              {featured.map((service, index) => (
                <a
                  className="ld-service"
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  data-tilt
                  data-tilt-strength="2.5"
                  data-reveal
                  style={{ '--ld-delay': `${(index % 3) * 60}ms` } as CSSProperties}
                >
                  <div className="ld-service-media">
                    <img src={servicePhoto(service.slug, service.group).src} alt={servicePhoto(service.slug, service.group).alt} loading="lazy" />
                    <span>{tagFor[service.group] || 'Bookkeeping'}</span>
                  </div>
                  <div className="ld-service-body">
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <div className="ld-service-foot">
                      <span>{service.outputs[0]}</span>
                      <span className="ld-service-arrow" aria-hidden="true">↗</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="ld-index-bar" style={{ marginTop: 26, marginBottom: 0, paddingBottom: 0, borderBottom: 0 }}>
              <p>Twenty-two bookkeeping scopes, one managed recruiting and employment team.</p>
              <a className="ld-link" href="/services">Compare every service</a>
            </div>
          </div>
        </section>

        <section className="ld-section ld-section--deep">
          <div className="ld-container ld-control">
            <div className="ld-control-copy" data-reveal>
              <p className="ld-eyebrow ld-eyebrow--light">Preparation moves. Authority does not.</p>
              <h2>A cleaner handoff keeps approval in the right hands.</h2>
              <p>
                Your bookkeeper can organize records, prepare routine entries, maintain
                schedules, reconcile accounts, and assemble review-ready reports. The
                decisions below stay with your authorized team.
              </p>
              <div className="ld-rules">
                {rules.map((rule, index) => (
                  <div className="ld-rule" key={rule}>
                    <span>{`0${index + 1}`}</span>
                    <p>{rule}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="ld-approval" aria-hidden="true">
              <div className="ld-approval-card" data-tilt data-tilt-strength="2.5">
                <h3>Review gate</h3>
                <div className="ld-approval-row"><span>Bank reconciliation</span><b>Prepared</b></div>
                <div className="ld-approval-row"><span>Transaction coding</span><b>Prepared</b></div>
                <div className="ld-approval-row is-hold"><span>Payment release</span><b>Client</b></div>
                <div className="ld-approval-row is-hold"><span>Accounting treatment</span><b>Client</b></div>
                <div className="ld-approval-row is-hold"><span>Final sign-off</span><b>Owner</b></div>
                <span className="ld-approval-stamp">Reviewed by client</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ld-section ld-section--paper">
          <div className="ld-container">
            <SectionHead
              eyebrow="A controlled launch"
              title={<>A small first batch is easier to review.</>}
              copy="Begin with a representative sample, limited access, and one reviewer. Expand only after the evidence is steady."
            />
            <div className="ld-process">
              {process.map((step, index) => (
                <article className="ld-step" key={step.label} data-reveal style={{ '--ld-delay': `${index * 80}ms` } as CSSProperties}>
                  <span className="ld-step-dot" aria-hidden="true">{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ld-section">
          <div className="ld-container ld-team">
            <figure className="ld-team-media" data-reveal data-tilt data-tilt-strength="2">
              <img src="/brand/stealth-agents-team-bacolod.webp" width="1536" height="1024" alt="The official StealthAgents operations team in Bacolod" loading="lazy" />
              <figcaption>StealthAgents team · Bacolod City, Philippines</figcaption>
            </figure>
            <div className="ld-team-copy" data-reveal style={{ '--ld-delay': '90ms' } as CSSProperties}>
              <p className="ld-eyebrow">The team behind the handoff</p>
              <h2>Recruiting, employment, and continuity in one place.</h2>
              <p>
                StealthAgents recruits and supports the Philippines-based professionals
                delivered through Offshore Bookkeepers. Your team keeps the account map,
                approval authority, and final financial review.
              </p>
              <p>
                The bookkeeper works inside your ledger, follows written preparation rules,
                and sends exceptions to the named reviewer instead of guessing.
              </p>
              <a className="ld-link" href="/contact-us">Talk through the role ↗</a>
            </div>
          </div>
        </section>

        <ReviewRail />

        <section className="ld-section">
          <div className="ld-container">
            <SectionHead
              eyebrow="Read before you hire"
              title={<>Bookkeeping guides for a cleaner handoff.</>}
              copy="Practical notes for scoping the queue, protecting access, and reviewing the first batch."
            />
            <div className="ld-posts">
              {blogPosts.map((post, index) => (
                <a
                  className="ld-post"
                  href={`/blog/${post.slug}`}
                  key={String(post.slug)}
                  data-reveal
                  style={{ '--ld-delay': `${index * 60}ms` } as CSSProperties}
                >
                  <img src={editorialPhoto(String(post.slug))} alt="" loading="lazy" />
                  <div className="ld-post-body">
                    <span className="ld-post-meta">{String(post.minutes || 7)} minute guide</span>
                    <h3>{String(post.title || 'Bookkeeping guide')}</h3>
                    <p>{String(post.excerpt || '')}</p>
                    <span className="ld-link">Read the guide ↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="ld-cta">
          <div className="ld-container ld-cta-inner">
            <div data-reveal>
              <p className="ld-eyebrow ld-eyebrow--light">Plan the role before you hire</p>
              <h2>Set the close calendar, access limits, and review owner first.</h2>
              <p>
                {offer.promise || 'Bring the recurring queue, accounting tools, approval points, and deadlines. We will help turn them into one clear bookkeeping role.'}
              </p>
            </div>
            <div className="ld-cta-actions" data-reveal style={{ '--ld-delay': '100ms' } as CSSProperties}>
              <a className="ld-btn" href="/contact-us" id="cta-page-action-4">Plan my bookkeeping role</a>
              <a className="ld-link" href="/services">Review the service map</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
