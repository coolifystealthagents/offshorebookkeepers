import { Header, Footer } from './components';

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="ob-thank-you">
        <section className="ob-thank-hero">
          <div className="container">
            <p className="eyebrow">Page not found</p>
            <h1>This bookkeeping page is not in the ledger.</h1>
            <p className="lead">The address may have changed or the page may no longer be available.</p>
            <div className="ob-thank-actions"><a className="btn primary" href="/">Return home</a><a className="ob-text-link" href="/services">Browse services</a></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
