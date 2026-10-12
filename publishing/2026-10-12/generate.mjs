import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../..');
const published = '2026-10-12';

const blogs = [
  {
    slug: 'offshore-bookkeeping-corporate-card-receipt-recovery',
    title: 'Corporate Card Receipt Recovery Without Delaying the Close',
    category: 'Expense Controls',
    description: 'Build a receipt-recovery queue that protects the close calendar while keeping unsupported corporate card charges visible.',
    record: 'cardholder, transaction date, merchant, amount, entity, card suffix, receipt status, business purpose, coding status, owner, due date, and evidence link',
    boundary: 'The offshore bookkeeper may match receipts and prepare coding, but the cardholder or finance owner decides whether unsupported spend is reimbursable, taxable, or approved as an exception.',
    scenario: 'A software charge posts on the final business day and the cardholder is traveling. The bookkeeper marks the line “receipt pending,” uses no guessed account, and routes the amount to the named approver instead of holding the entire card reconciliation.',
    cadence: 'Review new charges twice weekly, escalate receipts still missing after five business days, and separate unresolved items in the month-end packet.',
    evidence: 'statement export, issuer transaction ID, receipt image, cardholder explanation, approval record, coding decision, and reconciliation reference',
  },
  {
    slug: 'offshore-bookkeeping-early-payment-discount-register',
    title: 'An Early-Payment Discount Register for Accounts Payable',
    category: 'Accounts Payable',
    description: 'Track vendor discount terms, approval readiness, and payment deadlines without letting bookkeeping support release funds.',
    record: 'vendor, invoice number, invoice date, gross amount, discount formula, discount deadline, net due date, approval state, exception, payment owner, and source document',
    boundary: 'The offshore bookkeeper can identify documented terms and calculate the candidate discount; an authorized payment owner chooses timing and releases cash.',
    scenario: 'An invoice offers 2/10 net 30, but receiving evidence is incomplete on day eight. The register shows the possible discount and the missing receipt separately, so an approver can decide without treating the discount as guaranteed savings.',
    cadence: 'Refresh the register each morning during discount windows, reconcile it to the approved invoice queue, and close each row with the actual payment reference.',
    evidence: 'vendor invoice, purchase approval, receiving record, discount calculation, approval timestamp, payment confirmation, and ledger posting',
  },
  {
    slug: 'offshore-bookkeeping-health-premium-payroll-bridge',
    title: 'Bridge Health Premium Invoices to Payroll Deductions',
    category: 'Payroll Support',
    description: 'Reconcile carrier invoices, employer costs, and employee payroll deductions without exposing unnecessary health information.',
    record: 'coverage month, plan code, employee token, employer amount, employee amount, payroll deduction, carrier adjustment, effective date, variance reason, and reviewer',
    boundary: 'The bookkeeping role prepares the financial tie-out using minimum necessary identifiers; HR and payroll owners decide eligibility, coverage, correction, and employee communication.',
    scenario: 'A new-hire deduction begins one pay cycle after the carrier charge. The bridge preserves the timing difference by coverage month and effective date rather than forcing the carrier invoice to equal one payroll run.',
    cadence: 'Compare each carrier invoice with the completed payroll register, age timing differences, and obtain HR disposition before changing any employee-level amount.',
    evidence: 'carrier summary, payroll register, approved enrollment change, adjustment notice, general-ledger detail, and reviewer signoff',
  },
  {
    slug: 'offshore-bookkeeping-change-order-billing-status-board',
    title: 'Build a Change-Order Billing Status Board',
    category: 'Project Accounting',
    description: 'Separate proposed, approved, billed, collected, and disputed change orders for a reviewable project billing handoff.',
    record: 'project, change-order ID, request date, customer status, approved value, billing eligibility, invoice reference, collection status, cost impact, owner, and evidence link',
    boundary: 'An offshore bookkeeper can maintain the board and prepare eligible billing support; the project manager and finance lead approve scope, price, revenue treatment, and customer disputes.',
    scenario: 'A contractor performs emergency work before the customer signs the change order. The board keeps the proposed value visible but excludes it from approved billing until the named commercial owner documents the decision.',
    cadence: 'Reconcile the board to project meetings weekly and to invoices, contract assets, and receivables at period end.',
    evidence: 'base contract, request, estimate, customer approval, project-manager note, invoice, collection record, and accounting review',
  },
  {
    slug: 'offshore-bookkeeping-contract-renewal-billing-handoff',
    title: 'Contract Renewal Billing Handoffs That Prevent Missed Invoices',
    category: 'Revenue Operations',
    description: 'Move approved renewal terms from sales operations to billing with effective dates, evidence, and exception ownership.',
    record: 'customer, contract ID, current end date, renewal status, approved price, billing frequency, service start, purchase-order requirement, billing owner, and source link',
    boundary: 'The bookkeeping team may verify completeness and prepare invoices from approved terms; sales and legal owners resolve commercial changes, while finance approves accounting treatment.',
    scenario: 'A customer accepts a renewal by email but has not issued the required purchase order. The handoff marks the commercial acceptance and billing hold as different facts instead of treating the contract as either fully ready or lost.',
    cadence: 'Review renewals at 90, 60, and 30 days before expiration, then confirm invoice creation and first-period collection after activation.',
    evidence: 'signed agreement, authorized amendment, CRM approval, purchase order, billing schedule, invoice ID, and acceptance record',
  },
  {
    slug: 'offshore-bookkeeping-cash-transfer-confirmation-pack',
    title: 'A Confirmation Pack for Interaccount Cash Transfers',
    category: 'Cash Management',
    description: 'Link both sides of an approved cash transfer without giving an offshore bookkeeping role authority to move money.',
    record: 'transfer ID, initiating account, receiving account, legal entity, currency, amount, requestor, approver, bank timestamps, fees, ledger entries, and clearing status',
    boundary: 'The bookkeeper assembles and reconciles the confirmation pack; treasury or the authorized owner initiates and releases every transfer.',
    scenario: 'A transfer leaves one bank late Friday and reaches the destination Monday. The pack records a transfer-in-transit item tied to both bank references instead of posting an unexplained plug to clear the weekend difference.',
    cadence: 'Match outbound and inbound confirmations daily, escalate cross-entity or wrong-currency items immediately, and review all open transfers at close.',
    evidence: 'approved request, bank confirmation from each account, exchange-rate record if relevant, fee detail, journal IDs, and reviewer disposition',
  },
  {
    slug: 'offshore-bookkeeping-continuity-runbook',
    title: 'A Continuity Runbook for Offshore Bookkeeping Work',
    category: 'Operations',
    description: 'Keep critical bookkeeping queues controlled through connectivity, power, staffing, or accounting-system interruptions.',
    record: 'incident ID, affected process, start time, last trusted export, temporary record location, restricted fields, assigned operator, approver, recovery owner, and reconciliation status',
    boundary: 'Offshore staff follow the approved fallback and record facts; the client owner declares priority, authorizes temporary methods, and approves restoration to the primary system.',
    scenario: 'The accounting platform is unavailable during invoice cutoff. Staff record only invoice identifiers and secure evidence locations in the approved contingency register, then reconcile every temporary ID after service returns.',
    cadence: 'Test one process quarterly, verify contact details monthly, and reconcile temporary records before closing an incident.',
    evidence: 'incident notice, last successful export, temporary register, approval message, restoration timestamp, reconciliation log, and post-incident review',
  },
  {
    slug: 'offshore-bookkeeping-purchasing-card-merchant-coding',
    title: 'Purchasing Card Merchant Coding With Reviewable Rules',
    category: 'Expense Controls',
    description: 'Use merchant, purpose, entity, and receipt evidence to prepare purchasing-card coding without guessing from vendor names.',
    record: 'transaction ID, merchant, cardholder, transaction date, amount, entity, business purpose, receipt, proposed account, project or department, reviewer, and status',
    boundary: 'The offshore bookkeeper proposes coding from written rules; budget owners confirm business purpose and finance decides ambiguous, capital, related-party, or tax-sensitive treatment.',
    scenario: 'A purchase from an electronics retailer could be office supplies, an asset, or a personal item. The queue pauses coding until the cardholder supplies the itemized receipt and purpose, even though the merchant name is familiar.',
    cadence: 'Triage transactions after each issuer feed, route uncertain items within one business day, and lock the reviewed mapping with the card reconciliation.',
    evidence: 'issuer feed, itemized receipt, cardholder purpose, coding rule version, manager approval, account assignment, and reconciliation ID',
  },
  {
    slug: 'offshore-bookkeeping-processor-dispute-fee-ledger',
    title: 'Reconcile Processor Dispute Fees Separately From Chargebacks',
    category: 'Ecommerce Bookkeeping',
    description: 'Track dispute principal, processor fees, reversals, and recoveries as separate settlement events.',
    record: 'dispute ID, order ID, event date, principal amount, fee amount, currency, processor status, evidence submitted, reversal date, settlement batch, owner, and ledger mapping',
    boundary: 'The bookkeeping role reconciles processor events and prepares entries; customer service owns dispute evidence, and finance approves write-offs and account policy.',
    scenario: 'A $300 dispute is won, but a $15 processor fee is not returned. The ledger restores the receivable or revenue effect for the principal according to approved policy while retaining the fee as its own supported cost.',
    cadence: 'Import dispute events weekly, tie every movement to a settlement batch, and age cases that remain open across two processor cycles.',
    evidence: 'processor dispute file, order record, customer correspondence, evidence submission, settlement detail, fee schedule, and approved accounting map',
  },
  {
    slug: 'offshore-bookkeeping-billing-portal-access-offboarding',
    title: 'Offboard Billing Portal Access Without Losing Evidence',
    category: 'Access Controls',
    description: 'Remove former staff and vendors from billing portals while preserving invoice, approval, and audit records.',
    record: 'user name, portal, role, legal entity, last login, open assignments, export owner, disable request, approver, disable confirmation, and follow-up date',
    boundary: 'An offshore bookkeeper can inventory users and export permitted records; the system owner authorizes deactivation and decides record-retention or reassignment requirements.',
    scenario: 'A contractor leaves while two draft invoices remain under their login. The offboarding checklist transfers ownership, captures the audit trail, and then disables the named account rather than sharing its credentials with a replacement.',
    cadence: 'Trigger review on the termination date, confirm disablement the same day for sensitive roles, and include all billing portals in the periodic access review.',
    evidence: 'termination notice, user export, assignment list, preservation record, approved disable request, system confirmation, and reviewer check',
  },
  {
    slug: 'offshore-bookkeeping-accrual-estimate-supersession-log',
    title: 'Track When Actual Invoices Supersede Accrual Estimates',
    category: 'Month-End Close',
    description: 'Connect an accrual estimate to its reversal, actual invoice, variance explanation, and final review.',
    record: 'accrual ID, service period, vendor, estimate basis, amount, account, reversal journal, actual invoice, variance, explanation owner, and reviewer status',
    boundary: 'The bookkeeper maintains links and calculates the variance; the controller approves estimate methods, materiality decisions, and any change in accounting treatment.',
    scenario: 'A utilities accrual of $9,500 reverses automatically and the invoice arrives for $10,240. The log links both entries, attributes the $740 variance to usage and rate details, and prevents a second manual reversal.',
    cadence: 'Open the log during accrual preparation, update it when actuals arrive, and review aged estimates that survive beyond the expected invoice cycle.',
    evidence: 'estimate calculation, service-period support, approval, journal entry, reversal record, vendor invoice, variance analysis, and close signoff',
  },
  {
    slug: 'offshore-bookkeeping-voided-check-custody-reconciliation',
    title: 'Reconcile Voided Checks From Custody to Ledger',
    category: 'Cash Controls',
    description: 'Account for unused, spoiled, stopped, and reissued checks with physical and system evidence.',
    record: 'bank account, check number, check stock range, void reason, physical custody status, system status, stop-payment reference, replacement check, owner, and review date',
    boundary: 'The bookkeeping role updates the register and reconciles sequences; the authorized bank signer controls check stock, approves stop payments, and releases replacements.',
    scenario: 'A printer jams after producing a partially legible check. The operator marks the physical item void, retains it under policy, records the number, and requests a replacement without deleting the original payment history.',
    cadence: 'Reconcile check sequences after each run, investigate gaps immediately, and compare the custody register with bank and ledger records monthly.',
    evidence: 'check-stock log, voided instrument record, system audit trail, stop-payment confirmation, replacement approval, bank clearing detail, and reviewer initials',
  },
];

const sources = [
  { name: 'U.S. GAO, Standards for Internal Control in the Federal Government', url: 'https://www.gao.gov/products/gao-14-704g' },
  { name: 'NIST, Security and Privacy Controls for Information Systems and Organizations', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final' },
  { name: 'NIST, Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' },
  { name: 'CISA, Secure Our World', url: 'https://www.cisa.gov/secure-our-world' },
  { name: 'IRS, Recordkeeping', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping' },
  { name: 'IRS, Publication 583', url: 'https://www.irs.gov/publications/p583' },
  { name: 'PCAOB, AS 2301: The Auditor’s Responses to the Risks of Material Misstatement', url: 'https://pcaobus.org/oversight/standards/auditing-standards/details/AS2301' },
  { name: 'PCAOB, AS 2201: An Audit of Internal Control Over Financial Reporting', url: 'https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201' },
  { name: 'SEC, Books and Records Requirements', url: 'https://www.sec.gov/about/divisions-offices/division-investment-management/books-records-requirements' },
  { name: 'Federal Reserve, FraudClassifier Model', url: 'https://fedpaymentsimprovement.org/strategic-initiatives/payments-security/fraudclassifier-model/' },
];

const research = [
  {
    slug: 'offshore-bookkeeping-close-adjustment-approval-lag-study',
    title: 'Measuring Approval Lag for Close Adjustments',
    category: 'Close Governance',
    description: 'A source-backed observational design for measuring how adjustment approval time affects close readiness without confusing delay with error.',
    question: 'How long do proposed close adjustments wait between complete evidence, reviewer assignment, decision, posting, and final verification?',
    unit: 'one proposed adjustment for one entity and accounting period',
    fields: 'stable adjustment ID, account, entity, period, amount band, evidence-complete timestamp, reviewer assignment, first response, disposition, posting time, rejection reason, and reopen event',
    compare: 'Compare medians and upper quartiles by adjustment type, amount band, entity, reviewer queue, evidence-completeness state, and whether the item was reopened.',
    caution: 'A longer interval may reflect complexity, materiality, unavailable evidence, or an intentionally independent review; it is not proof of poor reviewer performance.',
  },
  {
    slug: 'offshore-bookkeeping-duplicate-payment-recovery-study',
    title: 'Studying the Duplicate-Payment Recovery Lifecycle',
    category: 'Accounts Payable Research',
    description: 'A research framework for following suspected duplicate payments from detection through vendor confirmation, recovery, credit use, and ledger closure.',
    question: 'Which evidence and ownership conditions are associated with a suspected duplicate reaching a supported financial resolution?',
    unit: 'one suspected duplicate-payment pair or cluster',
    fields: 'case ID, vendor token, invoice references, payment references, amounts, detection source, confirmation date, recovery method, credit memo, cash receipt, ledger correction, owner, and close date',
    compare: 'Stratify cases by detection source, payment channel, vendor response state, recovery method, value band, evidence completeness, and aging bucket.',
    caution: 'Detection records are selected cases, so the study cannot estimate the population duplicate-payment rate or claim that one control caused recovery.',
  },
  {
    slug: 'offshore-bookkeeping-fx-rate-source-consistency-study',
    title: 'Testing Foreign-Exchange Rate Source Consistency',
    category: 'Multi-Currency Research',
    description: 'A bounded method for checking whether offshore bookkeeping work uses the approved rate source, date convention, currency direction, and retained evidence.',
    question: 'How consistently do prepared transactions and period-end workpapers apply the organization’s documented foreign-exchange source and timing rule?',
    unit: 'one transaction, balance translation, or remeasurement line requiring an exchange rate',
    fields: 'item ID, currency pair, source currency, reporting currency, rate, rate direction, approved provider, rate date, retrieval timestamp, transaction date, preparer, reviewer, and correction',
    compare: 'Report consistency by transaction class, currency pair, entity, preparer, system, rate-date rule, manual override status, and review outcome.',
    caution: 'Consistency with a documented convention does not establish that the accounting policy or resulting financial-statement treatment is correct.',
  },
  {
    slug: 'offshore-bookkeeping-review-evidence-resubmission-study',
    title: 'Review Evidence Resubmission as a Process Signal',
    category: 'Quality Research',
    description: 'An observational study design for identifying why bookkeeping workpapers return for missing, stale, mismatched, or inaccessible evidence.',
    question: 'What portion of review packets require evidence resubmission, what reason is recorded, and how much queue time occurs before acceptance?',
    unit: 'one submitted review packet at one version',
    fields: 'packet ID, workflow, submission version, required-evidence checklist, return reason, reviewer note, resubmission timestamp, accepted version, elapsed working time, access failure, and owner',
    compare: 'Analyze return and acceptance patterns by workflow, reason code, source system, preparer tenure band, reviewer, evidence age, and packet complexity.',
    caution: 'A resubmission can reflect diligent review or changing source records; it should not automatically be treated as an operator defect.',
  },
  {
    slug: 'offshore-bookkeeping-manual-journal-risk-tier-study',
    title: 'Risk-Tiered Sampling for Manual Journal Review',
    category: 'Journal Entry Research',
    description: 'A source-grounded framework for grouping manual journals before review sampling while preserving complete populations and reviewer judgment.',
    question: 'Can a documented risk-tier model help reviewers allocate attention without excluding low-value or routine manual journals from the population record?',
    unit: 'one posted, proposed, reversed, or rejected manual journal entry',
    fields: 'journal ID, entity, period, accounts, amount band, preparer, approver, posting time, entry source, reversal flag, support status, related-party indicator, tier reason, sample status, and disposition',
    compare: 'Describe review outcomes across tiers defined by observable features such as unusual timing, privileged preparer, sensitive account, round amount, late support, or post-close posting.',
    caution: 'Risk indicators prioritize review; they neither prove misconduct nor justify omitting the full journal population from reconciliation and retention.',
  },
];

const esc = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const wrap = (title, max = 34) => {
  const words = title.split(/\s+/); const lines = []; let line = '';
  for (const word of words) { const next = line ? `${line} ${word}` : word; if (next.length > max && line) { lines.push(line); line = word; } else line = next; }
  if (line) lines.push(line); return lines;
};
const json = (value) => JSON.stringify(value);

function thumbnail(item, index, kind) {
  const palettes = [
    ['#ecfeff','#fff7ed','#0e7490','#082f49'], ['#eef2ff','#fffaf0','#6366f1','#312e81'],
    ['#ecfdf5','#fff7ed','#059669','#064e3b'], ['#fff1f2','#f0f9ff','#e11d48','#881337'],
    ['#f5f3ff','#ecfeff','#7c3aed','#4c1d95'], ['#fffbeb','#eff6ff','#d97706','#78350f'],
  ][index % 6];
  const lines = wrap(item.title, 25).slice(0, 3);
  const font = lines.length === 3 ? 38 : 42;
  const tspans = lines.map((line, i) => `<tspan x="72" dy="${i ? 51 : 0}">${esc(line)}</tspan>`).join('');
  const [a,b,c,d] = palettes;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
<title id="title">${esc(item.title)}</title><desc id="desc">${kind === 'research' ? 'Research briefing' : 'Workflow guide'} for Offshore Bookkeepers.</desc>
<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient><filter id="shadow"><feDropShadow dy="10" stdDeviation="14" flood-color="${d}" flood-opacity=".14"/></filter></defs>
<rect width="1200" height="630" rx="34" fill="url(#bg)"/><circle cx="1090" cy="70" r="210" fill="${c}" opacity=".09"/><circle cx="1020" cy="535" r="125" fill="${d}" opacity=".06"/>
<text x="72" y="72" font-family="Arial,sans-serif" font-size="17" font-weight="800" letter-spacing="2.4" fill="${c}">OFFSHORE BOOKKEEPERS • ${kind === 'research' ? 'RESEARCH' : 'WORKFLOW GUIDE'}</text>
<text x="72" y="168" font-family="Arial,sans-serif" font-size="${font}" font-weight="800" fill="${d}">${tspans}</text>
<g transform="translate(72 398)" filter="url(#shadow)"><rect width="1056" height="132" rx="25" fill="#fff" stroke="${d}" stroke-opacity=".12" stroke-width="2"/><g transform="translate(34 31)" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><path d="M0 8h58v70H0zM13 26h32M13 42h32M13 58h23"/><path d="M92 43h90m-17-16 17 16-17 16"/><circle cx="230" cy="43" r="32"/><path d="m216 43 10 10 20-23"/></g><text x="360" y="58" font-family="Arial,sans-serif" font-size="15" font-weight="800" fill="${d}">${kind === 'research' ? 'DEFINE • OBSERVE • COMPARE' : 'CAPTURE • PREPARE • REVIEW'}</text><text x="360" y="91" font-family="Arial,sans-serif" font-size="15" font-weight="600" fill="#52606d">Evidence linked to a named owner and review.</text></g>
<rect x="72" y="578" width="1056" height="2" fill="${d}" opacity=".12"/><text x="72" y="610" font-family="Arial,sans-serif" font-size="15" font-weight="700" fill="#52606d">Preparation remains separate from protected approval and accounting judgment.</text></svg>`;
}

function blogMarkdown(item) {
  const sourceList = [sources[0], sources[4]];
  return `---
title: ${json(item.title)}
description: ${json(item.description)}
published: "${published}"
updated: "${published}"
category: ${json(item.category)}
type: "blog"
featuredImage: "/thumbnails/${item.slug}.svg"
takeaways: ${json([`Use one controlled record for ${item.title.toLowerCase()} rather than reconstructing decisions from inboxes.`, item.boundary, `Retain ${item.evidence} so a reviewer can reproduce the handoff.`])}
sources: ${json(sourceList)}
relatedLinks: ${json([['Explore bookkeeping services','/services'],['Read the research library','/research'],['Plan a controlled role','/contact-us']])}
faqs: ${json([
    {question:`Who owns final decisions in this ${item.category.toLowerCase()} workflow?`,answer:'The client-designated owner or finance reviewer keeps approval and accounting judgment. The offshore bookkeeping role prepares records, follows written rules, and escalates exceptions.'},
    {question:'What should happen when required evidence is missing?',answer:'Keep the item visible with a specific missing-evidence reason, a named owner, and a due date. Do not invent support or silently clear the exception.'},
    {question:'Can the workflow operate in a spreadsheet?',answer:'Yes, if access, version ownership, identifiers, validation rules, and review evidence are controlled. Use the accounting or workflow system when it provides a stronger audit trail.'}
  ])}
---
## Define the outcome before assigning the queue

${item.description} The working definition should name the covered entities, accounts, period, source systems, cutoff, preparer, reviewer, and the event that closes a row. A queue is useful only when another person can tell what is ready, what is waiting, and what decision remains protected.

For this workflow, record ${item.record}. Use stable identifiers from the governing systems. Free-text notes may explain an exception, but they should not replace the transaction ID, source date, amount, status, or evidence location that lets the reviewer reproduce the result.

## Keep authority separate from preparation

${item.boundary} Put that boundary in the procedure and in system permissions. A checklist cannot compensate for a user account that allows the preparer to approve, release, or erase the same activity.

For ${item.title.toLowerCase()}, route judgment questions with the facts already assembled. State the requested decision, the deadline, the affected amount or period, the current system state, and the evidence link. This makes escalation useful without nudging the bookkeeper to resolve an issue outside the assigned role.

## Work through a concrete exception

${item.scenario} The point is not to eliminate exceptions. It is to prevent uncertainty from becoming an undocumented entry, an invisible delay, or an approval performed by the wrong person.

Within the ${item.title.toLowerCase()} workflow, give each exception one primary reason code and allow a short secondary note. Record when it entered the queue, who must respond, which period or payment it could affect, and what evidence will count as resolution. If the answer changes an earlier record, preserve both the original fact and the authorized correction.

## Set a review rhythm that matches the risk

${item.cadence} Volume metrics should be paired with completion checks: evidence coverage, aged exceptions, returned items, late approvals, and corrections after review. Speed alone can reward premature closure.

Use a small daily view for ${item.title.toLowerCase()} deadlines and a broader period-end view for completeness. The daily view answers what needs attention next. The close view proves that every in-scope record was included, reconciled, or carried forward with a named owner and reason.

## Build the evidence packet

The minimum packet for ${item.title.toLowerCase()} includes ${item.evidence}. Keep links durable and permissions narrow enough that the reviewer can open the source without exposing unrelated records. If a source is replaced, retain its version date and the reason for replacement.

IRS recordkeeping guidance supports retaining source documents that substantiate business transactions, while the GAO Green Book describes documentation and separation of duties as internal-control principles. Neither source prescribes ${item.title.toLowerCase()}; the field design here is an operating model that the business should adapt to its systems, policies, and professional advice.

## Close the loop without erasing history

A ${item.title.toLowerCase()} row closes only when the expected evidence exists, the authorized person has made any protected decision, the accounting or operational record reflects that decision, and the reviewer can trace the outcome. Mark abandoned, duplicate, or out-of-scope items explicitly rather than deleting them from the population.

At period end, export an exception summary with opening count, additions, resolutions, carryforwards, and corrections. Review a sample back to source records, note any access or version failures, and update the procedure only through a dated owner-approved change. That closeout turns ${item.title.toLowerCase()} into a repeatable control instead of a collection of personal reminders.
`;
}

function researchMarkdown(item) {
  const notes = [
    { claim: 'GAO internal-control principles support defined responsibilities, documentation, and ongoing monitoring, but do not validate the proposed metric.', sourceUrls: [sources[0].url] },
    { claim: 'NIST access, audit, and accountability controls inform the study’s treatment of permissions and event records, not bookkeeping outcomes.', sourceUrls: [sources[1].url, sources[2].url] },
    { claim: 'IRS recordkeeping guidance supports retaining transaction evidence but does not prescribe this sampling or comparison design.', sourceUrls: [sources[4].url, sources[5].url] },
    { claim: 'PCAOB standards provide risk-assessment and control-testing context; this report does not represent an audit under those standards.', sourceUrls: [sources[6].url, sources[7].url] },
    { claim: 'SEC and Federal Reserve materials add recordkeeping and payment-risk context without establishing causal results for offshore teams.', sourceUrls: [sources[8].url, sources[9].url] },
  ];
  return `---
title: ${json(item.title)}
description: ${json(item.description)}
published: "${published}"
updated: "${published}"
category: ${json(item.category)}
type: "research"
featuredImage: "/thumbnails/${item.slug}.svg"
takeaways: ${json([`Define the observation unit as ${item.unit} before extracting data.`, item.caution, 'Preserve the complete eligible population, exclusion reasons, field definitions, and reproducible calculations alongside any summary.'])}
sources: ${json(sources)}
sourceNotes: ${json(notes)}
relatedLinks: ${json([['Explore bookkeeping services','/services'],['Browse operational guides','/blog'],['Discuss a controlled staffing scope','/contact-us']])}
serviceHandoff: ${json({href:'/contact-us',label:'Plan the workflow',title:'Translate the findings into a bounded role',body:'Define source access, preparation duties, reviewer ownership, exception routes, and evidence retention before assigning live bookkeeping work.'})}
---
## Research question and decision use

${item.question} The study is designed as a descriptive operating review, not as proof that an offshore location, staffing model, or individual caused an outcome. Its practical use is to locate review friction and formulate follow-up questions before changing access, staffing, or approval policy.

For ${item.title.toLowerCase()}, the intended decision is whether a process owner should clarify evidence requirements, rebalance a queue, change an escalation threshold, or test a specific control more directly. The analysis should never be used as an automated employee score or as a substitute for accounting judgment.

## Population and observation unit

Define one observation as ${item.unit}. Establish the legal entities, systems, accounts, workflow states, and periods in scope before extraction. Freeze an as-of timestamp and preserve the query or export instructions so a second analyst can reconstruct the same eligible population.

Include every eligible ${item.unit}, not only successful or exceptional cases. Record exclusions in a separate table with a reason such as test record, duplicate export, wrong entity, outside period, or corrupted source. An unexplained reduction between source count and analysis count is itself a data-quality exception.

## Data dictionary and provenance

Collect ${item.fields}. Define each timestamp’s time zone, each amount’s currency, allowed null states, and the system that governs the field. Hash or version raw exports when practical, then conduct analysis on a working copy with restricted identifiers.

Build the ${item.title.toLowerCase()} lineage table from source system and export time through cleaning rule, derived field, and final observation. When two systems disagree, retain both original values and document the rule used for comparison. Do not overwrite inconvenient values to make totals align.

## Analysis plan

${item.compare} Publish counts as well as percentages so small groups do not look more certain than they are. Use median and interquartile range for elapsed time when long-tail cases make a simple average misleading.

For this ${item.category.toLowerCase()} analysis, predefine missing-data categories: not applicable, not captured, inaccessible, failed extraction, or awaiting owner confirmation. Run sensitivity checks that show how conclusions change when unresolved observations are excluded, treated as failures, or reported as a separate state. Keep exploratory findings labeled as exploratory.

## Control interpretation

The GAO Green Book supports documented responsibilities, appropriate segregation, quality information, and monitoring. NIST materials provide control language for least privilege, accountable actions, audit records, and system resilience. Those sources justify asking whether the workflow leaves reviewable evidence; they do not supply a benchmark for ${item.title.toLowerCase()}.

PCAOB risk-assessment and internal-control standards can inform ${item.title.toLowerCase()} questions about population completeness, evidence reliability, and control operation. This proposed review is not an audit, does not express assurance, and should not borrow audit terminology to imply a level of testing that was not performed.

## Bias, privacy, and limitations

${item.caution} Other limitations include inconsistent user clocks, overwritten statuses, differences in workflow configuration, inaccessible messages, and unrecorded work completed outside the approved system. Report those limitations next to results rather than burying them after recommendations.

Minimize personal data in the ${item.title.toLowerCase()} dataset. Use stable tokens instead of names where individual identity is not needed, restrict raw extracts, and publish only groups large enough for the business’s privacy rules. Reviewers should examine process design and evidence before attributing a pattern to a person or location.

## Interpretation guardrails for ${item.category}

Treat each result as a prompt for record-level review. If one group differs from another, inspect source completeness, system configuration, calendar effects, assignment rules, and case complexity before suggesting a workflow change. For ${item.title.toLowerCase()}, a count without the underlying eligible population, observation definition, and unresolved states is not decision-ready evidence.

Create a ${item.title.toLowerCase()} results table that separates observed value, calculation, possible operational explanation, evidence required for confirmation, responsible owner, and follow-up date. This prevents a plausible story from being reported as a finding. It also gives the controller a practical bridge from analysis to targeted testing without changing a control on the strength of correlation alone.

Run a small record-level verification for every notable ${item.title.toLowerCase()} pattern. Select items from the center and tails of the distribution, trace the listed fields back to source, and document contradictions. If the verification changes the pattern materially, correct the dataset and reissue the analysis with a version note rather than treating the first result as immutable.

## Reproducibility and quality checks

Have a second analyst reproduce the eligible ${item.unit} count and a sample of derived fields from the frozen extracts. Test uniqueness of observation IDs, allowable status transitions, timestamp order, currency completeness, and joins between source systems. Reconcile reported group totals back to the overall population.

Store the ${item.title.toLowerCase()} extraction instructions, data dictionary, exclusion log, transformation steps, calculation formulas, quality results, and approved report together. Version corrections rather than replacing the issued result silently. These practices make the conclusion inspectable even when source applications later change.

## Reporting template

Lead the ${item.title.toLowerCase()} report with the population boundary, as-of date, observation count, and missing-data count. Follow with the primary distribution, stratified comparisons, unresolved states, and representative process examples that contain no sensitive details. Separate observed facts from interpretations and proposed operating changes.

End with a limitation statement, the owner of each follow-up, and the date for reassessment. A useful report on ${item.title.toLowerCase()} narrows uncertainty and makes the next control question explicit; it does not manufacture precision from incomplete operational records.
`;
}

const records = [];
for (const [index, item] of [...blogs, ...research].entries()) {
  const kind = index < blogs.length ? 'blog' : 'research';
  const sourcePath = `content/${kind}/${item.slug}.md`;
  const thumbnailPath = `public/thumbnails/${item.slug}.svg`;
  fs.writeFileSync(path.join(root, sourcePath), kind === 'blog' ? blogMarkdown(item) : researchMarkdown(item));
  fs.writeFileSync(path.join(root, thumbnailPath), thumbnail(item, index, kind));
  records.push({ section: kind === 'blog' ? 'Blog' : 'Research', slug: item.slug, title: item.title, sourcePath, thumbnailPath, route: `/${kind}/${item.slug}`, publicationDate: published });
}

const manifest = {
  site: 'OffshoreBookkeepers.com', repository: 'coolifystealthagents/offshorebookkeepers', branch: 'main', baseSha: '09b4d1a2713ce5863dfd2ef6c3d40d5bcb1e0da3',
  publicationDate: published, counts: { blog: blogs.length, research: research.length, total: records.length }, items: records,
  registryPaths: ['content/blog', 'content/research'], routePaths: ['app/blog/[slug]/page.tsx', 'app/research/[slug]/page.tsx'], indexPaths: ['app/blog/page.tsx', 'app/research/page.tsx'],
};
fs.writeFileSync(path.join(import.meta.dirname, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Generated ${blogs.length} Blog and ${research.length} Research articles with ${records.length} SVG thumbnails.`);
