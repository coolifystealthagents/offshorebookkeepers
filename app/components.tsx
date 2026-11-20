import type { CSSProperties, ReactNode } from 'react';
import * as data from './data';
import { fleetServices } from './fleet-data';
import reviews from './data/review-provenance.json';

const site = (data as { site?: Record<string, string> }).site || {};
const year = new Date().getFullYear();

export function JsonLd({ data: json }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="ld-header">
        <div className="ld-nav">
          <a className="ld-brand" href="/" aria-label={`${site.brand || 'Offshore Bookkeepers'} home`}>
            <img src="/logo.svg" alt="" width="38" height="38" />
            <span className="ld-brand-text">
              <span className="ld-brand-name">Offshore Bookkeepers</span>
              <span className="ld-brand-sub">Powered by StealthAgents</span>
            </span>
          </a>
          <nav className="ld-nav-links" aria-label="Primary navigation">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/contact-us">Contact Us</a>
          </nav>
          <a className="ld-nav-cta" href="/contact-us" id="cta-global-header-contact">Plan my role</a>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="ld-footer">
      <div className="ld-footer-inner ld-container">
        <div className="ld-footer-top">
          <div className="ld-footer-brand">
            <a className="ld-brand" href="/" aria-label="Offshore Bookkeepers home">
              <img src="/logo.svg" alt="" width="38" height="38" />
              <span className="ld-brand-text">
                <span className="ld-brand-name">Offshore Bookkeepers</span>
                <span className="ld-brand-sub">Powered by StealthAgents</span>
              </span>
            </a>
            <p>
              Philippines-based bookkeeping support designed around documented scope,
              clean source records, and accountable review.
            </p>
            <p className="ld-footer-note">
              Offshore Bookkeepers is a specialist subsidiary identity. StealthAgents
              supports recruiting and the managed staffing relationship.
            </p>
          </div>
          <div>
            <h3>Services</h3>
            <div className="ld-footer-links">
              {fleetServices.slice(0, 7).map((service) => (
                <a href={`/services/${service.slug}`} key={service.slug}>{service.title}</a>
              ))}
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="ld-footer-links">
              <a href="/services">All services</a>
              <a href="/blog">Blog</a>
              <a href="/research">Research</a>
              <a href="/alternatives">Alternatives</a>
              <a href="/contact-us">Contact Us</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>

        <div className="ld-footer-parent">
          <a className="ld-footer-parent-logo" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="StealthAgents parent company">
            <img src="/brand/stealth-agents-logo-black.png" alt="StealthAgents" />
          </a>
          <div>
            <h3>Parent company</h3>
            <p>
              StealthAgents recruits, employs, and supports the Philippines-based
              professionals who deliver this work. Offshore Bookkeepers is a
              StealthAgents subsidiary.
            </p>
            <a className="ld-footer-parent-link" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by StealthAgents ↗</a>
          </div>
        </div>

        <div className="ld-footer-bottom">
          <span>© {year} Offshore Bookkeepers.</span>
          <span>{site.domain || 'OffshoreBookkeepers.com'}</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  imageCaption,
  breadcrumb,
  actions,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  breadcrumb?: { label: string; href?: string }[];
  actions?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="ld-page-hero">
      <div className="ld-container ld-page-grid">
        <div className="ld-page-copy">
          {breadcrumb?.length ? (
            <nav className="ld-breadcrumb" aria-label="Breadcrumb">
              {breadcrumb.map((crumb, index) => (
                <span key={`${crumb.label}-${index}`}>
                  {crumb.href ? <a href={crumb.href}>{crumb.label}</a> : crumb.label}
                  {index < breadcrumb.length - 1 ? <span aria-hidden="true"> / </span> : null}
                </span>
              ))}
            </nav>
          ) : null}
          <p className="ld-eyebrow ld-eyebrow--light">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="ld-hero-lead">{lead}</p>
          {actions ? <div className="ld-actions">{actions}</div> : null}
          {children}
        </div>
        {image ? (
          <figure className="ld-page-media" data-tilt data-tilt-strength="3">
            <img src={image} alt={imageAlt || ''} />
            {imageCaption ? <figcaption>{imageCaption}</figcaption> : null}
          </figure>
        ) : (
          <div className="ld-page-orbit" aria-hidden="true">
            <div className="ld-page-seal">
              <span>Bookkeeping<br />close · review<br />exception log</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`ld-head${light ? ' ld-head--light' : ''}`} data-reveal>
      <div>
        {eyebrow ? <p className={`ld-eyebrow${light ? ' ld-eyebrow--light' : ''}`}>{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function Marquee({ items }: { items: readonly string[] }) {
  return (
    <div className="ld-marquee" aria-hidden="true">
      <div className="ld-marquee-track">
        {[0, 1].map((group) => (
          <div className="ld-marquee-group" key={group}>
            {items.map((item, index) => <span key={`${group}-${index}`}>{item}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

type Review = { headline: string; body: string; name: string; detail: string };

export function ReviewRail() {
  const records = reviews.records as Review[];
  return (
    <section className="ld-reviews" aria-labelledby="ld-review-heading">
      <div className="ld-container">
        <div className="ld-review-head">
          <h2 id="ld-review-heading">What clients say about the team</h2>
          <span>Verified source</span>
        </div>
        <div className="ld-review-viewport">
          <div className="ld-review-track">
            {[0, 1].map((group) => (
              <div key={group} style={{ display: 'flex', gap: 13 }} aria-hidden={group === 1 ? true : undefined}>
                {records.map((review) => (
                  <article className="ld-review-card" key={`${group}-${review.name}`}>
                    <div className="ld-review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                    <h3>{review.headline}</h3>
                    <blockquote>“{review.body}”</blockquote>
                    <p>{review.name}<span>{review.detail}</span></p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="ld-review-note">
          Clearly labeled client feedback from the StealthAgents network, reproduced from the{' '}
          <a href={reviews.source} target="_blank" rel="noopener noreferrer">official StealthAgents source</a>.
        </p>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="ld-cta">
      <div className="ld-container ld-cta-inner">
        <div data-reveal>
          <p className="ld-eyebrow ld-eyebrow--light">Plan the role before you hire</p>
          <h2>Set the close calendar, access limits, and review owner first.</h2>
          <p>
            Share the recurring queue, accounting tools, approval points, and deadlines.
            We will help turn them into one clear bookkeeping role.
          </p>
        </div>
        <div className="ld-cta-actions" data-reveal style={{ '--ld-delay': '100ms' } as CSSProperties}>
          <a className="ld-btn" href="/contact-us" id="cta-global-final-contact">Plan my bookkeeping role ↗</a>
          <a className="ld-link" href="/services">Review the service map</a>
        </div>
      </div>
    </section>
  );
}
