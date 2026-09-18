import type { Metadata } from 'next';
import { Footer, Header } from '../../components';
import styles from './comparison.module.css';

const articleUrl = 'https://offshorebookkeepers.com/blog/bookkeeping-outsourcing-due-diligence-checklist';
const title = '25 Questions to Ask Before Outsourcing Bookkeeping Work';
const description = 'A practical due-diligence checklist for comparing bookkeeping support providers, defining review boundaries, and testing a real workflow before hiring.';

const questions = [
  ['Service fit', 'Which exact bookkeeping queues will the role own?', 'Ask for tasks, inputs, cadence, and the expected handoff instead of relying on a broad job title.'],
  ['Service fit', 'Which decisions remain with our controller or owner?', 'Posting approval, payment release, accounting policy, tax positions, and management judgment need named owners.'],
  ['Service fit', 'What work is explicitly outside the scope?', 'Clear exclusions prevent routine support from drifting into unapproved tax, legal, assurance, or treasury work.'],
  ['Service fit', 'Can the provider work from our current systems?', 'Confirm the ledger, banking, expense, payroll, document, and communication tools before candidate matching.'],
  ['Service fit', 'What source records are required?', 'List statements, reports, approvals, and cutoffs so incomplete inputs become visible exceptions.'],
  ['Controls', 'How are user accounts and permissions assigned?', 'Prefer named accounts, least-privilege access, and a documented owner for every permission change.'],
  ['Controls', 'Who can create or change vendor bank details?', 'Vendor changes should receive independent verification outside the person preparing bills.'],
  ['Controls', 'Who can approve and release payments?', 'Preparation and payment release should remain separated and traceable.'],
  ['Controls', 'How are unusual transactions escalated?', 'Agree categories, response times, and the client reviewer who decides each exception.'],
  ['Controls', 'What evidence is retained with the work?', 'A reviewer should be able to connect schedules and prepared entries to source records.'],
  ['Review', 'Who reviews the first sample?', 'Name the person who will approve rules, correct misunderstandings, and own the feedback loop.'],
  ['Review', 'What does a complete deliverable look like?', 'Use a redacted example with required tabs, evidence links, notes, and sign-off fields.'],
  ['Review', 'How are review notes tracked to closure?', 'Open comments need owners, due dates, and a visible resolved status.'],
  ['Review', 'Which quality measures fit the workflow?', 'Use practical measures such as queue age, missing evidence, unreconciled differences, and reopened items.'],
  ['Review', 'How often are rules updated?', 'Document who can change account mappings, thresholds, templates, and exception categories.'],
  ['Continuity', 'Who covers planned or unexpected absence?', 'Ask how work, access, documentation, and reviewer context transfer to approved backup coverage.'],
  ['Continuity', 'Where does process documentation live?', 'The client should retain current checklists, calendars, mappings, and handoff notes.'],
  ['Continuity', 'How are recurring deadlines monitored?', 'Close, payroll, billing, and filing-data cutoffs need shared calendars and clear dependency owners.'],
  ['Continuity', 'What happens when an upstream input is late?', 'Late-source procedures should distinguish waiting, estimating, escalating, and rescheduling.'],
  ['Continuity', 'How is offboarding handled?', 'Access removal, file return, open-item handoff, and credential review should have named owners.'],
  ['Pilot', 'Can we test one representative workflow first?', 'A bounded paid pilot reveals system, communication, and review gaps before access or volume expands.'],
  ['Pilot', 'What will the pilot include and exclude?', 'Set the period, account, volume, inputs, output, reviewer, and acceptance criteria in writing.'],
  ['Pilot', 'How will sensitive data be minimized?', 'Use only the records and fields required for the selected workflow and approved access level.'],
  ['Pilot', 'What would stop the pilot?', 'Define security, quality, timeliness, and communication conditions that require a pause and review.'],
  ['Pilot', 'What evidence supports expanding the scope?', 'Expand only after the sample is accepted, exceptions are understood, and controls work as documented.'],
] as const;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: { title, description, url: articleUrl, type: 'article', siteName: 'Offshore Bookkeepers' },
};

export default function BuyerChecklistArticle() {
  const groups = [...new Set(questions.map(([group]) => group))];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: title, description, mainEntityOfPage: articleUrl, datePublished: '2026-09-16', dateModified: '2026-09-16', publisher: { '@type': 'Organization', name: 'Offshore Bookkeepers', url: 'https://offshorebookkeepers.com' } },
      { '@type': 'ItemList', name: title, numberOfItems: questions.length, itemListElement: questions.map(([, question, answer], index) => ({ '@type': 'ListItem', position: index + 1, name: question, description: answer })) },
    ],
  };

  return (
    <>
      <Header />
      <main className={styles.page} data-content-profile="offshore-bookkeepers-buyer-checklist">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <header className={styles.hero}>
          <div className={`${styles.shell} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}><p className={styles.eyebrow}>Provider due diligence</p><h1>{title}</h1></div>
            <div className={styles.heroSide}><p className={styles.lead}>{description}</p><div className={styles.facts}><span><b>25</b> practical questions</span><span><b>5</b> decision areas</span><span><b>1</b> bounded pilot before expansion</span></div></div>
          </div>
        </header>
        <article className={`${styles.shell} ${styles.body}`}>
          <nav className={styles.jump} aria-label="Article sections">{groups.map((group) => <a href={`#${group.toLowerCase()}`} key={group}>{group}</a>)}</nav>
          <section className={styles.method}><h2>Compare providers against one written workflow</h2><p>Choose a recurring bookkeeping queue and write down its source records, steps, exceptions, output, reviewer, and deadline. Use that same brief for every provider conversation. It creates a fair comparison and keeps the discussion grounded in work a remote bookkeeper can realistically prepare.</p><p>This checklist is not a ranking and does not certify a provider. It is a structure for asking better questions, checking current evidence, and keeping financial authority with named client owners.</p></section>
          {groups.map((group) => <section className={styles.companySection} id={group.toLowerCase()} key={group}><p className={styles.eyebrow}>{group}</p><h2>{group === 'Pilot' ? 'Test the handoff before expanding it' : `Questions about ${group.toLowerCase()}`}</h2><ol className={styles.list}>{questions.map(([itemGroup, question, answer], index) => itemGroup === group ? <li className={`${styles.entry} ${styles.entryIndex}`} key={question}><div className={styles.heading}><div><h3><span>{index + 1}.</span> {question}</h3></div></div><div className={styles.prose}><p>{answer}</p></div></li> : null)}</ol></section>)}
          <section className={styles.checklist}><p className={styles.eyebrow}>A useful first call</p><h2>Bring four things to the provider conversation</h2><div className={styles.checkGrid}><article><b>01</b><h3>One real workflow</h3><p>Name the queue, volume, systems, cadence, and current bottleneck.</p></article><article><b>02</b><h3>One redacted example</h3><p>Show the source records and the completed output you expect.</p></article><article><b>03</b><h3>One approval map</h3><p>Identify preparation, review, approval, and release owners.</p></article><article><b>04</b><h3>One pilot decision</h3><p>Set the sample boundary and the evidence required before expansion.</p></article></div></section>
          <section className={styles.cta}><p className={styles.eyebrow}>Turn the checklist into a role brief</p><h2>Scope a bookkeeping workflow with visible inputs, outputs, and review ownership.</h2><p>Bring one recurring finance bottleneck. We will help organize the questions and define a practical starting scope.</p><a href="/contact-us">Book a free scope call</a></section>
        </article>
      </main>
      <Footer />
    </>
  );
}
