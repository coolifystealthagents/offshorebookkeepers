import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../..');
const published = '2026-10-13';

let blogs = [
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

let research = [
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

blogs = [
  { slug:'offshore-bookkeeping-supplier-rebate-accrual-rollforward', title:'Build a Supplier Rebate Accrual Rollforward', category:'Procure-to-Pay', description:'Reconcile earned supplier rebates from purchase evidence through claim, credit, and cash settlement.', record:'program ID, supplier, eligible purchases, tier, earned amount, claim date, supplier confirmation, credit memo, cash receipt, account, owner, and status', boundary:'The bookkeeper prepares eligibility and settlement evidence; procurement confirms commercial terms and the controller approves recognition, estimates, and write-offs.', scenario:'Quarterly purchases cross a volume tier, but the supplier statement arrives after close. The rollforward preserves the documented estimate separately from the later confirmed claim and records the true-up without overwriting either amount.', cadence:'Refresh qualifying purchases monthly, confirm tier assumptions with procurement before close, and reconcile every credit or receipt to the open claim.', evidence:'signed rebate terms, purchase detail, eligibility calculation, approval, supplier confirmation, credit memo or remittance, journal IDs, and reviewer signoff' },
  { slug:'offshore-bookkeeping-undeposited-funds-custody-bridge', title:'Control Undeposited Funds From Receipt to Bank', category:'Cash Controls', description:'Link customer receipts, physical or digital custody, deposit batches, and bank credits without hiding timing differences.', record:'receipt ID, customer, channel, received timestamp, amount, currency, custodian, batch ID, deposit date, bank reference, ledger posting, exception owner, and status', boundary:'The bookkeeper reconciles the custody bridge but does not hold cash, endorse checks, change bank instructions, or approve a write-off.', scenario:'Three checks received Friday appear as one bank deposit Monday. The bridge retains each receipt and custodian event, links all three to the batch, and records the weekend as timing rather than an unexplained cash variance.', cadence:'Reconcile custody events daily, escalate missing batch references the same business day, and age receipts that remain undeposited beyond policy.', evidence:'receipt log, remittance advice, custody acknowledgment, deposit image, bank transaction, accounting entry, exception disposition, and review record' },
  { slug:'offshore-bookkeeping-subscription-usage-billing-evidence-handoff', title:'Handoff Usage Evidence for Subscription Billing', category:'Revenue Operations', description:'Move approved usage measures into billing with versioned extracts, contract rules, and exception ownership.', record:'customer, contract ID, meter, usage period, source version, quantity, unit rate, adjustment, approval, invoice line, owner, and evidence link', boundary:'The offshore bookkeeper validates completeness and prepares billing support; product operations owns meter accuracy, commercial owners approve terms, and finance resolves revenue treatment.', scenario:'A corrected usage export arrives after a draft invoice was created. The handoff preserves both extracts, identifies the changed records, and routes the variance for approval before replacing the draft line.', cadence:'Freeze usage at the contract cutoff, reconcile record counts to the source, and close corrections only after invoice and ledger references are linked.', evidence:'executed contract, rate table, frozen usage export, correction log, approval, invoice, ledger posting, and reviewer confirmation' },
  { slug:'offshore-bookkeeping-multi-entity-shared-service-recharge-allocation', title:'Allocate Shared-Service Recharges Across Entities', category:'Intercompany', description:'Apply approved allocation drivers to shared costs while preserving entity ownership, eliminations, and review evidence.', record:'service pool, source invoice, providing entity, receiving entity, driver, driver period, allocation percentage, amount, tax flag, journal IDs, owner, and status', boundary:'The bookkeeper applies the documented model and prepares reciprocal entries; management approves the service arrangement and the controller owns policy, tax, and consolidation judgments.', scenario:'A support invoice covers three entities but the approved headcount file changes after a transfer. The schedule uses the version effective for the service month and records the later change for the next allocation rather than silently rerunning history.', cadence:'Lock driver versions before preparation, confirm reciprocal entries by entity, and investigate differences before consolidation.', evidence:'service agreement, source invoice, approved driver file, allocation calculation, reciprocal journals, tax review, elimination reference, and signoff' },
  { slug:'offshore-bookkeeping-tax-notice-response-evidence-register', title:'Track Tax Notice Response Evidence Without Giving Tax Advice', category:'Compliance Support', description:'Control notice intake, document requests, response deadlines, and proof of filing while protected tax decisions remain with qualified owners.', record:'notice ID, agency, entity, tax type, period, received date, response deadline, requested evidence, advisor, submission reference, delivery proof, balance status, and owner', boundary:'The bookkeeper indexes records and tracks deadlines; the client and qualified tax adviser interpret the notice, choose positions, authorize responses, and approve payments.', scenario:'A payroll notice names an old address and a short response window. Staff preserve the envelope date, locate filed returns and payment confirmations, and escalate the discrepancy without drafting a substantive tax position.', cadence:'Log notices on receipt, review upcoming deadlines twice weekly, and retain submission and delivery evidence until the adviser closes the matter.', evidence:'complete notice image, envelope or portal timestamp, filed return, payment record, adviser request, approved response, submission receipt, and closure note' },
  { slug:'offshore-bookkeeping-inventory-consignment-ownership-schedule', title:'Maintain an Inventory Consignment Ownership Schedule', category:'Inventory', description:'Separate owned, customer-owned, and supplier-owned goods using location, agreement, movement, and count evidence.', record:'item ID, owner, custodian, location, agreement, receipt date, quantity, unit basis, sale or return event, count date, exception, and reviewer', boundary:'The bookkeeping team maintains the schedule and prepares reconciliations; operations confirms custody and condition, while finance determines recognition and valuation.', scenario:'Supplier-owned units share a warehouse bin with purchased stock. The schedule ties tagged units to the consignment agreement and count sheet so the physical count does not automatically become owned inventory.', cadence:'Reconcile movements monthly, confirm ownership before count adjustments, and obtain counterparty confirmation for aged or disputed units.', evidence:'consignment agreement, receiving record, tagged count sheet, movement report, sales or return record, counterparty confirmation, journal entry, and review' },
  { slug:'offshore-bookkeeping-software-implementation-milestone-billing', title:'Reconcile Software Implementation Milestone Billing', category:'Project Billing', description:'Connect delivery evidence, customer acceptance, approved milestones, invoices, and collection status for implementation projects.', record:'project, milestone ID, contract value, acceptance condition, delivery date, customer evidence, billing approval, invoice, deferred or unbilled status, collection, and owner', boundary:'The bookkeeper compiles milestone support and prepares approved invoices; delivery leaders confirm completion, customers provide acceptance where required, and finance decides accounting treatment.', scenario:'Configuration work is complete but formal acceptance depends on a customer test. The schedule marks operational completion and billing eligibility separately, preventing an unsupported invoice or a lost follow-up.', cadence:'Review open milestones weekly, reconcile eligible amounts to billing, and investigate delivered items that remain unaccepted or uninvoiced at close.', evidence:'signed statement of work, milestone plan, delivery record, customer acceptance, billing approval, invoice, receivable detail, and reviewer signoff' },
  { slug:'offshore-bookkeeping-construction-equipment-deposit-recovery', title:'Recover Construction Equipment Deposits With a Controlled Ledger', category:'Construction Accounting', description:'Track equipment deposits from authorization through return, damage assessment, credit, cash recovery, and final disposition.', record:'project, vendor, equipment ID, agreement, deposit amount, payment, return date, condition evidence, vendor assessment, recovery method, account, owner, and status', boundary:'The bookkeeper maintains evidence and follows up; field operations confirms return and condition, procurement disputes charges, and finance approves write-offs or reclassification.', scenario:'A lift is returned on time but the vendor deducts a cleaning fee. The ledger connects the original deposit, return ticket, condition photos, disputed fee, and final credit instead of netting the difference into rental expense without review.', cadence:'Review open deposits weekly, request return evidence at equipment release, and reconcile vendor credits and receipts to the original payment.', evidence:'rental agreement, approved payment, equipment receipt, return ticket, condition record, vendor statement, dispute approval, recovery reference, and journal' },
  { slug:'offshore-bookkeeping-professional-services-reimbursable-expense-billing', title:'Bill Professional-Service Reimbursable Expenses With Evidence', category:'Client Billing', description:'Map employee and vendor costs to contract reimbursement rules before preparing client invoice support.', record:'engagement, expense ID, traveler or vendor token, date, category, amount, currency, receipt, contract rule, markup, client approval, invoice line, and status', boundary:'The bookkeeper tests documentation and contract mapping; engagement leaders confirm business purpose and client eligibility, while finance approves tax and revenue treatment.', scenario:'A consultant submits rail travel and a meal on one receipt, but the contract allows travel at cost and excludes meals. The schedule splits the evidence and routes the excluded amount without altering the original expense record.', cadence:'Review expenses before each billing cutoff, return unsupported lines promptly, and reconcile accepted items to invoice and general-ledger references.', evidence:'client contract, expense report, receipt, business-purpose approval, reimbursement rule, calculation, invoice, exception disposition, and review' },
  { slug:'offshore-bookkeeping-insurance-premium-audit-true-up', title:'Reconcile Insurance Premium Audit True-Ups', category:'Expense Accounting', description:'Bridge estimated premiums, exposure reports, carrier audits, deposits, refunds, and final ledger adjustments.', record:'policy, coverage period, exposure basis, estimated exposure, audited exposure, rate, deposit premium, audit adjustment, dispute, payment or refund, account, and owner', boundary:'The bookkeeper assembles financial records and calculates the bridge; insurance advisers and management validate classifications, dispute carrier findings, and approve settlement and accounting decisions.', scenario:'A carrier classifies subcontractor payments as payroll exposure. The schedule retains the carrier calculation, the company evidence, and the disputed amount separately until the authorized owner accepts or contests it.', cadence:'Prepare exposure support before audit, reconcile carrier schedules on receipt, and age disputed or unpaid adjustments through final settlement.', evidence:'policy, estimate, payroll or sales reports, carrier audit, classification support, correspondence, approved settlement, payment or refund, and journal' },
  { slug:'offshore-bookkeeping-customer-wallet-credit-liability', title:'Roll Forward Customer Wallet Credit Liabilities', category:'Ecommerce Bookkeeping', description:'Reconcile funded credits, promotional credits, redemptions, expirations, refunds, and breakage decisions without merging unlike obligations.', record:'wallet event ID, customer token, credit type, funding source, issue date, amount, currency, redemption, expiration rule, refund, balance, ledger mapping, and reviewer', boundary:'The bookkeeper reconciles authorized wallet events; product and legal owners define terms, customer service approves adjustments, and finance owns liability and breakage policy.', scenario:'A customer receives both a cash-funded refund credit and a promotional credit. The rollforward keeps separate expiration and refund rights even though the storefront shows one combined wallet balance.', cadence:'Reconcile event totals to the platform daily, review negative or stale balances weekly, and tie the ending liability to the ledger at period end.', evidence:'wallet event export, customer transaction, approved promotion, terms version, redemption record, refund approval, ledger entry, and reconciliation signoff' },
  { slug:'offshore-bookkeeping-warehouse-damage-claim-receivable', title:'Control Warehouse Damage Claim Receivables', category:'Claims Accounting', description:'Track inventory damage claims from incident evidence through acknowledgment, settlement, recovery, and ledger closure.', record:'claim ID, warehouse, item, incident date, quantity, cost basis, claimed amount, carrier or operator, acknowledgment, settlement, receipt, write-off, owner, and status', boundary:'The bookkeeping role assembles the receivable schedule and matches recoveries; warehouse teams establish incident facts, commercial owners negotiate claims, and finance approves recognition and write-offs.', scenario:'A fulfillment partner acknowledges damaged units but disputes replacement freight. The schedule separates product cost, freight, accepted amount, and disputed amount so partial recovery does not close the whole claim.', cadence:'Open claims from approved incident reports, follow up by aging bucket, and reconcile settlements and cash receipts to claim components.', evidence:'incident report, inventory record, cost support, photos, contract terms, submitted claim, counterparty response, settlement, bank receipt, and accounting review' },
];

research = [
  { slug:'offshore-bookkeeping-close-exception-reopen-rate-study', title:'Studying Why Close Exceptions Reopen After Review', category:'Close Process Research', description:'A reproducible study of exception reopening that distinguishes incomplete evidence, changed facts, and reviewer correction.', question:'How often do closed bookkeeping exceptions reopen, what event triggers reopening, and what elapsed time and rework follow?', unit:'one uniquely identified close exception and each version of its status history', fields:'exception ID, entity, account, period, opening reason, evidence version, preparer, reviewer, first close time, reopen time, trigger, revised disposition, final close time, and correction indicator', compare:'Compare reopening distributions by workflow, initial reason, evidence version, amount band, close day, trigger category, reviewer queue, and resolution path.', caution:'A reopened exception can reflect healthy review or newly available facts; it is not by itself evidence of weak preparation or reviewer inconsistency.' },
  { slug:'offshore-bookkeeping-bank-feed-auto-match-confidence-study', title:'Evaluating Bank-Feed Auto-Match Confidence', category:'Reconciliation Research', description:'A controlled method for comparing system confidence signals with reviewed bank-feed match outcomes.', question:'How do auto-match confidence bands relate to accepted, corrected, split, duplicated, and unresolved transaction matches after human review?', unit:'one imported bank-feed transaction and its complete candidate-match history', fields:'feed ID, bank token, transaction date, amount, currency, description token, candidate IDs, confidence score, rule version, reviewer outcome, correction type, posting ID, and elapsed time', compare:'Report outcomes by confidence band, transaction class, bank connection, rule version, amount band, recurring status, and presence of multiple candidates.', caution:'Observed reviewer outcomes do not prove the correctness of an accounting treatment, and scores from different products or rule versions may not be comparable.' },
  { slug:'offshore-bookkeeping-evidence-link-decay-study', title:'Measuring Evidence Link Decay in Bookkeeping Workpapers', category:'Evidence Research', description:'A longitudinal design for testing whether retained workpaper links remain accessible, specific, and version-correct.', question:'What proportion of evidence links remain accessible to an authorized reviewer over time, and which failure modes appear?', unit:'one evidence link attached to one issued bookkeeping workpaper version', fields:'workpaper ID, link token, source system, evidence type, issued date, access test date, permission state, target version, failure reason, repair action, repair time, and reviewer result', compare:'Compare accessibility and repair time by evidence type, source system, age band, permission model, workpaper class, and whether an immutable copy exists.', caution:'A successful link test establishes retrievability at one time, not the completeness, authenticity, or accounting sufficiency of the underlying evidence.' },
  { slug:'offshore-bookkeeping-review-queue-concentration-study', title:'Analyzing Concentration in Bookkeeping Review Queues', category:'Workflow Research', description:'A descriptive framework for measuring whether review demand accumulates around particular owners, periods, or exception classes.', question:'How concentrated are submitted review items across reviewers and time windows, and how does concentration relate to waiting time and reassignment?', unit:'one review request at one submitted version with a stable queue identifier', fields:'request ID, workflow, entity, submitted time, due time, assigned reviewer, reassignment, complexity band, evidence state, first response, disposition, completion time, and reopen event', compare:'Analyze volume and waiting-time distributions by reviewer capacity band, close day, workflow, complexity, evidence state, reassignment status, and time zone.', caution:'Concentration can reflect specialization, independence requirements, or calendar design and should not be interpreted as individual underperformance without process evidence.' },
  { slug:'offshore-bookkeeping-source-system-timestamp-divergence-study', title:'Testing Timestamp Divergence Across Bookkeeping Systems', category:'Data Quality Research', description:'A source-backed method for quantifying clock, posting, import, and approval timestamp differences across connected systems.', question:'How often do linked bookkeeping events show timestamp order or time-zone differences large enough to affect cutoff and queue metrics?', unit:'one linked business event represented in two or more source systems', fields:'event ID, system, timestamp type, raw timestamp, time zone, normalized timestamp, import time, posting date, approval time, correction flag, source version, and reviewer note', compare:'Describe divergence by system pair, event type, time-zone rule, interface method, close day, correction status, and whether the date crosses a reporting cutoff.', caution:'Timestamp divergence can arise from legitimate business definitions or batch processing; it does not alone establish a cutoff error or unreliable system.' },
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
  const titleLines = lines.map((line, i) => `<text data-title-line="${i}" x="72" y="${168 + i * 51}" font-family="Arial,sans-serif" font-size="${font}" font-weight="800" fill="${palettes[3]}">${esc(line)}</text>`).join('');
  const [a,b,c,d] = palettes;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
<title id="title">${esc(item.title)}</title><desc id="desc">${kind === 'research' ? 'Research briefing' : 'Workflow guide'} for Offshore Bookkeepers.</desc>
<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient><filter id="shadow"><feDropShadow dy="10" stdDeviation="14" flood-color="${d}" flood-opacity=".14"/></filter></defs>
<rect width="1200" height="630" rx="34" fill="url(#bg)"/><circle cx="1090" cy="70" r="210" fill="${c}" opacity=".09"/><circle cx="1020" cy="535" r="125" fill="${d}" opacity=".06"/>
<text x="72" y="72" font-family="Arial,sans-serif" font-size="17" font-weight="800" letter-spacing="2.4" fill="${c}">OFFSHORE BOOKKEEPERS • ${kind === 'research' ? 'RESEARCH' : 'WORKFLOW GUIDE'}</text>
${titleLines}
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

## Reconcile the population before measuring performance

Start with a control total from the governing source, then account for every ${item.category.toLowerCase()} record as completed, open, excluded, or carried forward. Record the reason and approver for each exclusion. This population bridge prevents a fast queue from appearing complete merely because difficult items vanished from the working view.

For ${item.title.toLowerCase()}, compare opening items, new activity, resolved items, corrections, and ending items. Tie amounts as well as counts when monetary values apply. Investigate unexpected duplicates, gaps in identifiers, reversed timestamps, or records that changed after review. Document the query or report version used so the next preparer can reproduce the same boundary.

## Design exception ownership for handoffs

For ${item.title.toLowerCase()}, assign each exception to the person who can supply the missing fact or make the protected decision, not automatically to the preparer who discovered it. The escalation should state the exact question, relevant deadline, value at risk, evidence already checked, and the consequence of no response. Keep follow-up timestamps in the queue rather than relying on private reminders.

When an exception in ${item.title.toLowerCase()} crosses a reporting cutoff, preserve its original period and status. A later answer may support an adjustment, correction, or next-period action, but it should not erase what was known at the cutoff. Review carryforwards explicitly so recurring gaps lead to a process decision instead of becoming permanent background noise.

## Test the workflow with a reviewer-ready sample

Before treating the process as stable, select one routine item, one high-value item, and one exception from the ${item.title.toLowerCase()} population. Ask a reviewer who did not prepare the queue to reconstruct the status using only the linked evidence and procedure. Record missing definitions, inaccessible links, ambiguous ownership, and any calculation that cannot be repeated. Correct the process, then retest the failed sample rather than merely adding an explanatory note.

Use the ${item.title.toLowerCase()} results to refine field validation and training examples. A useful test confirms that totals reconcile, approvals came from authorized roles, dates use the stated cutoff, and corrections retain their history. It should also verify that the preparer could not release cash, change protected master data, or approve the same work. Schedule another sample after a system change, role change, unusual transaction cycle, or recurring exception pattern.

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

## Validation protocol and change control

Before issuing the ${item.title.toLowerCase()} report, rerun the extraction from the frozen source instructions and compare record counts, key totals, null rates, and duplicate identifiers with the first run. Have a second analyst trace a risk-based sample through every join and derived field. Log each discrepancy with its cause, correction, affected observations, reviewer, and version. If the population changes after the as-of time, publish a revised version rather than silently replacing the evidence used for the original result.

For ${item.title.toLowerCase()}, predefine the conditions that would justify a workflow experiment and the measures that would show whether it helped. A change should name its owner, affected systems, start and end dates, protected approvals, rollback trigger, and follow-up sample. Compare the changed process with a relevant baseline while keeping calendar and case-mix differences visible. These safeguards turn descriptive findings into testable operating questions without overstating causality or allowing an exploratory metric to become an unreviewed control.
`;
}

const records = [];
fs.mkdirSync(path.join(root, 'content/blog'), { recursive: true });
fs.mkdirSync(path.join(root, 'content/research'), { recursive: true });
fs.mkdirSync(path.join(root, 'public/thumbnails'), { recursive: true });
for (const [index, item] of [...blogs, ...research].entries()) {
  const kind = index < blogs.length ? 'blog' : 'research';
  const sourcePath = `content/${kind}/${item.slug}.md`;
  const thumbnailPath = `public/thumbnails/${item.slug}.svg`;
  fs.writeFileSync(path.join(root, sourcePath), kind === 'blog' ? blogMarkdown(item) : researchMarkdown(item));
  fs.writeFileSync(path.join(root, thumbnailPath), thumbnail(item, index, kind));
  records.push({ section: kind === 'blog' ? 'Blog' : 'Research', slug: item.slug, title: item.title, sourcePath, thumbnailPath, route: `/${kind}/${item.slug}`, publicationDate: published });
}

const manifest = {
  site: 'OffshoreBookkeepers.com', repository: 'coolifystealthagents/offshorebookkeepers', branch: 'main', baseSha: '42ff31658ae649e1dedb186dd65d9331b93045b3',
  publicationDate: published, counts: { blog: blogs.length, research: research.length, total: records.length }, items: records,
  registryPaths: ['content/blog', 'content/research'], routePaths: ['app/blog/[slug]/page.tsx', 'app/research/[slug]/page.tsx'], indexPaths: ['app/blog/page.tsx', 'app/research/page.tsx'],
};
fs.writeFileSync(path.join(import.meta.dirname, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Generated ${blogs.length} Blog and ${research.length} Research articles with ${records.length} SVG thumbnails.`);
