import fs from 'node:fs';
import path from 'node:path';

const published = '2026-09-18';
const articles = [
  {
    slug: 'offshore-bookkeeping-saas-seat-true-up-reconciliation',
    title: 'Reconcile SaaS seat true-ups before the renewal invoice arrives',
    description: 'Build a repeatable SaaS seat true-up schedule that ties contract terms, provisioned users, billing changes, and finance review.',
    category: 'SaaS bookkeeping', image: '/thumbnails/bookkeeping-subscription-revenue-reconciliation.webp',
    service: '/services/accounts-payable-processing',
    problem: 'A SaaS vendor may invoice an annual base quantity, add seats during the term, remove access without issuing a credit, and settle the difference at renewal. The accounting record often contains only invoices, while the operational truth sits in the identity provider and vendor admin console.',
    sources: [['FASB ASC 340 overview','https://asc.fasb.org/topic&trid=2128659'],['NIST account management guidance','https://csf.tools/reference/nist-sp-800-53/r5/ac/ac-2/']],
    fields: 'vendor, contract period, billing frequency, committed seats, provisioned seats, active seats, activation date, deactivation date, unit price, invoice reference, department owner, and exception status',
    example: 'A company prepays for 80 seats, provisions 96 by June, disables 7 in August, and receives a 16-seat true-up quote. The bookkeeper should not accept either 89 active seats or 96 provisioned seats as the billing answer. The schedule separates contractual commitment, billable additions, disabled accounts, and unresolved license ownership so the budget owner can validate the charge.',
    decision: 'whether a disabled account qualifies for a contractual reduction, whether unused licenses should be reassigned, and whether a disputed true-up is accrued',
    reviewer: 'IT owner and finance approver',
    artifact: 'seat true-up bridge'
  },
  {
    slug: 'offshore-bookkeeping-ecommerce-bnpl-settlement-reconciliation',
    title: 'Reconcile buy-now-pay-later settlements to ecommerce orders and refunds',
    description: 'A practical BNPL settlement workflow for matching orders, fees, refunds, disputes, and cash without treating the deposit as sales.',
    category: 'Ecommerce bookkeeping', image: '/thumbnails/ecommerce-bookkeeping-reconciliation-workflow.webp',
    service: '/services/ecommerce-bookkeeping',
    problem: 'Buy-now-pay-later providers usually remit a net settlement rather than the gross checkout amount. Fees, refunds, reserves, dispute movements, timing lags, and foreign-exchange effects can all sit between the order ledger and the bank deposit.',
    sources: [['Consumer Financial Protection Bureau BNPL report','https://www.consumerfinance.gov/data-research/research-reports/buy-now-pay-later-market-trends-and-consumer-impacts/'],['Stripe reconciliation documentation','https://docs.stripe.com/reports/reconciliation']],
    fields: 'provider, order ID, checkout date, gross amount, tax, shipping, merchant fee, refund ID, dispute ID, settlement batch, expected cash, actual cash, currency, and open reason',
    example: 'A store records three orders totaling $1,240. The provider deducts a $62 fee, withholds $180 for a refund initiated after cutoff, and deposits $998. The useful bridge shows $1,240 less $62 less $180 equals $998. It does not post the bank deposit as revenue or bury the refund in fees.',
    decision: 'the revenue, tax, refund, reserve, and foreign-currency treatment under the company’s policies',
    reviewer: 'ecommerce finance owner',
    artifact: 'BNPL settlement bridge'
  },
  {
    slug: 'offshore-bookkeeping-property-owner-statement-tieout',
    title: 'Tie property owner statements to rent, repairs, reserves, and cash',
    description: 'Reconcile a property manager owner statement to tenant activity, vendor bills, reserve movements, management fees, and bank deposits.',
    category: 'Property bookkeeping', image: '/thumbnails/property-bookkeeping-rent-roll-controls.webp',
    service: '/services/property-bookkeeping',
    problem: 'An owner statement is a summary produced by a property manager, not a substitute for the underlying tenant ledger, vendor support, reserve activity, and bank record. Net cash can agree while rent, repairs, fees, or owner reserves are misclassified.',
    sources: [['IRS rental income and expenses guide','https://www.irs.gov/publications/p527'],['HUD project financial guidance','https://www.hud.gov/hud-partners/multifamily-financial-management']],
    fields: 'property, unit, tenant, charge type, receipt date, vendor bill, work order, management fee, reserve contribution, owner distribution, statement line, bank date, and exception owner',
    example: 'A statement reports $14,600 of rent, $2,300 of repairs, a $730 management fee, a $1,000 reserve contribution, and a $10,570 owner distribution. The bank agrees to $10,570, but one $900 repair lacks a work order and $450 of rent belongs to the next period. Those items stay visible instead of disappearing because net cash ties.',
    decision: 'expense capitalization, tenant chargebacks, reserve policy, and period recognition',
    reviewer: 'property manager and finance owner',
    artifact: 'owner statement tieout'
  },
  {
    slug: 'offshore-bookkeeping-construction-stored-materials-billing-check',
    title: 'Check stored-materials billing before updating construction receivables',
    description: 'A bookkeeping handoff for tracing stored materials from pay application support to invoices, insurance, delivery, and later installation.',
    category: 'Construction bookkeeping', image: '/thumbnails/construction-job-costing-control-research.webp',
    service: '/services/accounts-receivable-support',
    problem: 'A construction pay application may include materials purchased but not yet installed. The billed amount can depend on contract terms, ownership evidence, storage location, insurance, prior billing, and retainage. A simple copy of the supplier invoice does not prove every condition.',
    sources: [['AIA G702/G703 overview','https://www.aiacontracts.com/articles/183616-g702-1992-application-and-certificate-for-payment/'],['FAR progress payment rules','https://www.acquisition.gov/far/32.503-1']],
    fields: 'project, pay application, schedule-of-values line, supplier invoice, material description, storage site, received date, insurance evidence, prior billed amount, current requested amount, retainage, and reviewer status',
    example: 'A contractor requests billing for $48,000 of switchgear stored off-site. The supplier invoice supports $48,000, but the certificate lists only $40,000 and the schedule of values already includes $8,000 billed last month. The bookkeeper flags both the evidence gap and possible duplicate without deciding eligibility.',
    decision: 'whether contract conditions for billing stored materials are met and whether the application should be certified',
    reviewer: 'project manager and authorized contract reviewer',
    artifact: 'stored-materials billing check'
  },
  {
    slug: 'offshore-bookkeeping-law-firm-trust-merchant-fee-reconciliation',
    title: 'Reconcile law-firm trust receipts when merchant fees hit operating cash',
    description: 'Trace client trust card receipts, processor fees, transfers, refunds, and client ledgers while preserving the attorney’s review boundary.',
    category: 'Law firm bookkeeping', image: '/thumbnails/law-firm-trust-account-bookkeeping-boundaries.webp',
    service: '/services/law-firm-bookkeeping',
    problem: 'A client may pay an advance by card while the processor deducts its fee from a separate operating account or from the trust settlement. The bank deposit, processor batch, trust liability, and client matter ledger must be connected without assuming the jurisdiction’s rule.',
    sources: [['ABA Model Rule 1.15','https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_15_safekeeping_property/'],['ABA trust accounting resources','https://www.americanbar.org/groups/professional_responsibility/resources/client-protection/']],
    fields: 'matter, client, receipt date, gross card amount, processor batch, fee amount, trust deposit, operating debit, refund, chargeback, client-ledger entry, and attorney review status',
    example: 'A client pays a $5,000 advance. The processor deposits $5,000 to trust and debits a $145 fee from operating two days later. The reconciliation ties both bank movements to one batch and keeps the full client amount in the matter record. If the provider instead nets the fee from trust, the item is escalated under the firm’s jurisdiction-specific procedure.',
    decision: 'the permitted account flow, ownership of fees, trust transfer approval, and response to a chargeback',
    reviewer: 'responsible attorney or trust-account supervisor',
    artifact: 'trust merchant-fee reconciliation'
  },
  {
    slug: 'offshore-bookkeeping-nonprofit-cost-reimbursement-grant-draw',
    title: 'Prepare a nonprofit cost-reimbursement grant draw without losing source detail',
    description: 'Build a grant draw packet that connects eligible expenses, payroll support, allocation rules, prior draws, receivables, and cash.',
    category: 'Nonprofit bookkeeping', image: '/thumbnails/nonprofit-fund-accounting-support-research.webp',
    service: '/services/management-reporting-support',
    problem: 'A cost-reimbursement grant converts approved spending into a reimbursement request. The general ledger may show total program cost, but the draw also needs grant-period, eligibility, allocation, match, prior-claim, and document checks.',
    sources: [['Uniform Guidance cost principles','https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200/subpart-E'],['Uniform Guidance financial management standards','https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200/subpart-D/section-200.302']],
    fields: 'grant, budget category, vendor or employee, transaction date, service period, account, amount, allocation basis, eligible share, match share, prior draw status, source link, and approval status',
    example: 'A nonprofit has $32,000 of program expense. The award covers 75%, but $4,000 falls outside the grant period and $2,000 lacks allocation support. The draft draw begins with the eligible population, excludes the unsupported rows, applies the approved share, and reconciles the request to the grant receivable after approval.',
    decision: 'cost allowability, allocation methodology, match acceptance, and certification of the draw',
    reviewer: 'grant manager and authorized certifier',
    artifact: 'grant draw evidence packet'
  },
  {
    slug: 'offshore-bookkeeping-dental-patient-financing-settlement',
    title: 'Reconcile dental patient-financing settlements to treatment and refunds',
    description: 'Match patient financing approvals, treatment charges, provider fees, refunds, recourse items, and deposits to the dental ledger.',
    category: 'Healthcare bookkeeping', image: '/thumbnails/clinic-bookkeeping-reconciliation-research.webp',
    service: '/services/bank-reconciliation-support',
    problem: 'Patient-financing providers can fund a treatment plan before every procedure is completed, deduct merchant fees, reverse funding after cancellation, or recover refunds from a later settlement. The practice-management ledger and bank deposit therefore need a batch-level bridge.',
    sources: [['CFPB medical credit card report','https://www.consumerfinance.gov/data-research/research-reports/medical-credit-cards-and-financing-plans/'],['HHS HIPAA minimum necessary standard','https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html']],
    fields: 'restricted patient reference, treatment plan, financing approval, transaction date, gross funded amount, provider fee, refund, recourse adjustment, settlement batch, bank deposit, patient-ledger posting, and privacy-safe evidence link',
    example: 'A provider funds $6,000, deducts $360, and deposits $5,640. The patient later cancels a $1,200 procedure, and the provider withholds that refund from another batch. The bridge keeps the original funding, fee, cancellation, refund obligation, and later recovery separate so cash timing does not rewrite treatment activity.',
    decision: 'revenue recognition, refund authorization, patient balance treatment, and access to protected information',
    reviewer: 'practice finance owner and authorized clinical billing lead',
    artifact: 'patient-financing settlement bridge'
  },
  {
    slug: 'offshore-bookkeeping-restaurant-third-party-gift-card-redemption',
    title: 'Reconcile third-party gift-card redemptions across restaurant locations',
    description: 'Track restaurant gift-card sales, redemptions, processor funding, fees, location due-to/due-from entries, and unresolved batches.',
    category: 'Restaurant bookkeeping', image: '/thumbnails/bookkeeping-customer-deposit-reconciliation.webp',
    service: '/services/month-end-close-support',
    problem: 'A restaurant group may sell gift cards centrally, redeem them at another location, and receive a net processor settlement after fees or reserve movements. Point-of-sale sales, redemption reports, intercompany balances, liability activity, and bank cash will not agree without a structured bridge.',
    sources: [['FTC gift card guidance','https://consumer.ftc.gov/articles/gift-cards'],['FASB revenue recognition resources','https://www.fasb.org/page/PageContent?pageId=/projects/revenue-recognition-implementation.html']],
    fields: 'card program, masked card reference, selling location, redeeming location, sale date, redemption date, face value, discount, fee, breakage policy flag, settlement batch, intercompany owner, and exception status',
    example: 'Location A sells a $200 card; Location B redeems $150. The processor funds Location B $145 after a $5 fee while the central books still hold the full liability. The schedule records the redemption, fee, remaining $50 balance, and location settlement separately rather than posting $145 as restaurant sales.',
    decision: 'breakage policy, escheatment review, intercompany allocation, and approval of manual adjustments',
    reviewer: 'restaurant controller',
    artifact: 'gift-card redemption rollforward'
  },
  {
    slug: 'offshore-bookkeeping-agency-client-expense-markup-billing',
    title: 'Check agency client-expense markups before invoices go out',
    description: 'Tie reimbursable agency costs to client authorization, vendor support, markup terms, tax treatment, and the draft invoice.',
    category: 'Agency bookkeeping', image: '/thumbnails/offshore-bookkeeping-project-margin-bridge.webp',
    service: '/services/accounts-receivable-support',
    problem: 'Agencies often incur media, travel, freelance, production, or software costs for clients. Contracts may allow pass-through billing, a percentage markup, a handling fee, or no reimbursement at all. Copying vendor bills into an invoice without applying those terms creates avoidable disputes.',
    sources: [['IRS accountable plan guidance','https://www.irs.gov/publications/p15'],['FTC advertising guidance','https://www.ftc.gov/business-guidance/advertising-marketing']],
    fields: 'client, project, vendor, cost date, cost category, source invoice, approval reference, contract clause, billable base, excluded tax, markup method, calculated charge, prior billed status, and reviewer',
    example: 'An agency pays $20,000 for approved media, $1,500 for freelance design, and $600 for unapproved rush shipping. The contract permits a 5% markup on media only. The draft schedule bills $21,000 for media, passes through design if authorized, and holds shipping for a client-owner decision. It never applies 5% to the entire cash outlay by default.',
    decision: 'whether a cost is contractually billable, which markup base applies, and how tax is handled',
    reviewer: 'account lead and finance approver',
    artifact: 'client-expense billing check'
  },
  {
    slug: 'offshore-bookkeeping-clinic-capitation-payment-reconciliation',
    title: 'Reconcile clinic capitation payments to member months and adjustments',
    description: 'Build a capitation reconciliation that compares eligibility rosters, contracted rates, retroactive changes, withholds, and deposits.',
    category: 'Healthcare bookkeeping', image: '/thumbnails/clinic-bookkeeping-reconciliation-research.webp',
    service: '/services/management-reporting-support',
    problem: 'A capitation remittance can combine current member-month payments, retroactive enrollments, terminations, risk adjustments, withholds, and recoveries. Posting the deposit to revenue gives no explanation for rate or eligibility differences.',
    sources: [['CMS capitation rates and financing','https://www.medicaid.gov/medicaid/managed-care/guidance/rate-review-and-rate-guides/index.html'],['HHS HIPAA minimum necessary standard','https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html']],
    fields: 'payer, plan, masked member reference, coverage month, eligibility status, contracted rate cell, expected amount, current remittance, retroactive adjustment, withhold, recovery, settlement reference, and follow-up owner',
    example: 'A clinic expects 420 member months at $28, or $11,760. The remittance includes $11,200 current capitation, adds $280 for retroactive enrollments, and withholds $140, producing $11,340 cash. The schedule identifies the missing current members and the withhold instead of labeling the $420 gap a generic timing difference.',
    decision: 'contract interpretation, revenue recognition, appeal thresholds, and use of protected member data',
    reviewer: 'payer-contract owner and clinic finance lead',
    artifact: 'capitation payment bridge'
  },
  {
    slug: 'offshore-bookkeeping-wholesale-drop-ship-chargeback-review',
    title: 'Review wholesale drop-ship chargebacks before clearing customer deductions',
    description: 'Connect wholesale customer deductions to purchase orders, ship confirmations, routing rules, shortage evidence, and credit approval.',
    category: 'Wholesale bookkeeping', image: '/thumbnails/bookkeeping-vendor-master-change-control-research.webp',
    service: '/services/accounts-receivable-support',
    problem: 'Retail customers may deduct shortage, late shipment, routing, labeling, or compliance chargebacks from wholesale remittances. In a drop-ship model, the operational evidence may belong to a supplier, carrier, marketplace, or warehouse rather than the seller’s own shipping system.',
    sources: [['FTC business guidance','https://www.ftc.gov/business-guidance'],['UCC Article 2 overview','https://www.law.cornell.edu/ucc/2']],
    fields: 'customer, deduction ID, invoice, purchase order, SKU, quantity, supplier, ship confirmation, tracking event, routing rule, deduction code, amount, dispute deadline, evidence owner, and credit status',
    example: 'A retailer deducts $3,400 for 20 allegedly short units. The supplier confirmation shows all 20 shipped, but carrier proof covers only 18 and the dispute window closes in six days. The bookkeeper ties the deduction to the invoice, preserves the evidence gap, and routes a focused question rather than issuing a credit automatically.',
    decision: 'whether to dispute, accept, recover from the supplier, or issue a credit memo',
    reviewer: 'customer account owner and finance approver',
    artifact: 'drop-ship chargeback register'
  },
  {
    slug: 'offshore-bookkeeping-field-service-warranty-reimbursement',
    title: 'Reconcile field-service warranty reimbursements from work order to cash',
    description: 'Track warranty labor, parts, claim submissions, denials, manufacturer credits, technician costs, and customer balances.',
    category: 'Service business bookkeeping', image: '/thumbnails/bookkeeping-quality-scorecard.webp',
    service: '/services/daily-transaction-coding',
    problem: 'A field-service company may complete work for a customer but seek payment from a manufacturer or warranty administrator. Labor allowances, approved parts, deductibles, denied lines, return requirements, and payment timing can split one work order across several accounting records.',
    sources: [['FTC warranty guidance','https://consumer.ftc.gov/articles/warranties'],['IRS business expense guidance','https://www.irs.gov/publications/p535']],
    fields: 'work order, customer, equipment reference, warranty administrator, service date, technician hours, part number, customer deductible, claim ID, submitted amount, approved amount, denial code, parts-return status, deposit, and follow-up owner',
    example: 'A repair uses four labor hours and a $700 part. The claim requests $1,180, the administrator approves $980, the customer owes a $100 deductible, and the replaced part must be returned before $200 is released. The schedule separates approved receivable, customer balance, denied amount, and conditional holdback.',
    decision: 'claim appeal, customer billing, write-off, inventory disposition, and revenue policy',
    reviewer: 'service manager and finance owner',
    artifact: 'warranty reimbursement bridge'
  }
];

function render(a) {
  const sourceLinks = a.sources.map(([name,url]) => `[${name}](${url})`).join(' and ');
  const sourceJson = JSON.stringify(a.sources.map(([name,url]) => ({name,url})));
  return `---
title: "${a.title}"
description: "${a.description}"
published: "${published}"
updated: "${published}"
category: "${a.category}"
type: "blog"
featuredImage: "${a.image}"
sources: ${sourceJson}
takeaways: ["Reconcile the complete source population before investigating individual differences.", "Give each exception an evidence link, owner, due date, and explicit decision request.", "Keep approval and accounting judgment with the authorized reviewer."]
faqs: [["Can an offshore bookkeeper prepare this workpaper?", "Yes. A bookkeeper can collect authorized records, perform documented comparisons, maintain the exception queue, and prepare a review-ready handoff."], ["What should remain with the company reviewer?", "Contract interpretation, accounting policy, approvals, write-offs, legal conclusions, and other judgment calls should remain with the named company owner or professional adviser."]]
---
Published September 18, 2026. This article explains a bookkeeping workflow, not accounting, tax, legal, payroll, medical, or regulatory advice.

## Why this reconciliation needs its own workpaper

${a.problem}

The goal is not to force every number to zero. It is to explain each movement using the records the business is authorized to use, distinguish timing from a real discrepancy, and put decisions in front of the right reviewer. That makes the work suitable for offshore bookkeeping support: the preparer handles repeatable evidence work while the company retains authority.

Useful background for designing the procedure includes ${sourceLinks}. These sources do not replace the company’s contracts, accounting policy, or professional advice. Record the version and access date when a changing rule or provider document affects the workflow.

## Define the population before matching

Write down the legal entity, reporting period, cutoff time, currency, systems, accounts, and locations in scope. Export the full source populations before filtering. Save read-only copies with file names that include the extraction time, then record row counts and control totals. If a system report can change after export, note its filters and timezone.

The working table should contain ${a.fields}. Use stable references instead of names where confidentiality requires it. Never delete unmatched rows merely because they make the schedule untidy. A missing record is an exception with an owner, not permission to invent a value.

Start with opening items from the last reviewed period. Add current activity, separate reversals and corrections, and calculate the expected ending position. Tie that result independently to the ledger, subledger, provider statement, and bank where each is relevant. This four-corner check catches a common failure: cash agrees, but the underlying liability, receivable, expense, or customer record does not.

## Build the ${a.artifact}

Give one row to each traceable unit. Do not combine unrelated invoices, batches, customers, projects, or service periods just because they share a deposit date. Store gross activity, deductions, fees, taxes, reserves, refunds, reversals, and cash in separate columns. Include formulas that are visible to the reviewer rather than typed totals.

Use a clear status vocabulary: ready to match, matched, timing item, missing source, amount mismatch, duplicate risk, policy question, awaiting approval, and closed with evidence. Each open status needs a date, evidence reference, next action, owner, and due date. “Checking” is not useful unless the schedule says what is being checked.

Keep the original value and corrected value in separate fields. If a source file changes, retain both versions and explain the delta. If the ledger requires a proposed entry, put it on a review tab with the entity, accounts, amount, date, explanation, preparer, supporting rows, and approver. The preparer should not post merely to make the reconciliation agree.

## Work through a concrete example

${a.example}

This example matters because a net deposit can look plausible while its components are wrong. The preparer should first reproduce the source arithmetic, then compare it with the contract or approved procedure, and finally show the ledger impact. The exception description should state the observed fact: “source A reports X; source B reports Y; difference is Z.” Possible causes belong in a separate note until evidence confirms one.

Set an escalation threshold based on the company’s policy, but do not use a dollar threshold as the only trigger. A small repeated error, missing approval, altered bank detail, privacy concern, or approaching dispute deadline can deserve immediate attention. Aging also matters. A $100 item unresolved for four months may reveal a broken handoff even when it is not financially large.

## Preserve the decision boundary

The offshore bookkeeper can download approved reports, compare identifiers and amounts, reperform arithmetic, request missing documents, update statuses, and draft a proposed entry for review. The bookkeeper should stop when the work requires ${a.decision}. That decision belongs to the ${a.reviewer}.

Write the decision request so the reviewer can respond without rebuilding the file. Include the amount, deadline, affected period, relevant source links, observed difference, available options, and operational consequence of waiting. Keep the response with the same workpaper. An approval in a private chat is hard to retrieve later; move the decision into the authorized record system.

Access should match the task. Use named accounts, multifactor authentication, and read-only or limited permissions where possible. Keep payment release, bank-detail changes, credit approval, journal posting, period locking, and deletion rights separate from preparation. Review access when the person, client, project, or system assignment changes.

## Review the work in both directions

Trace a sample from source records into the schedule to test completeness. Then trace a sample from the schedule back to original evidence to test validity. Reperform large, unusual, manual, old, and post-cutoff items. Review zero-value and offsetting pairs because equal debits and credits can hide duplicate or misdirected activity.

The reviewer should confirm the population definition, source control totals, reconciliation formula, exception ownership, proposed entries, and decisions made. Review notes need a question, owner, date, and closure evidence. Do not erase the first answer when it changes; preserve enough history to show how the final treatment was reached.

Track a small set of operational measures: population count, matched value, unmatched value, oldest exception, items returned for correction, and percentage reviewed by deadline. These are workflow signals, not promises of financial performance. If the same exception repeats, improve the intake form, source export, naming convention, or approval path before asking the preparer to move faster.

## Close the period without hiding open items

The handoff package should include untouched exports, the reconciliation, the evidence index, exception log, approved entries, reviewer decisions, and a one-page status summary. State what tied, what did not, which amounts remain exposed, who owns each next action, and when the next review occurs. Carry unresolved items into the next period with their original age and reference.

Link the final workpaper from the close checklist rather than storing it in a personal folder. Use consistent naming such as entity-process-period-version. Restrict sensitive records to the minimum necessary audience and follow the company’s retention policy. A clean archive lets a backup reviewer continue the process without relying on memory.

For help defining the underlying role, see [the relevant Offshore Bookkeepers service](${a.service}). If your team needs a Philippines-based bookkeeper to prepare schedules, maintain evidence, and route exceptions while your finance owner keeps approval, [plan the role with Offshore Bookkeepers](/contact-us).
`;
}

const manifest = [];
for (const article of articles) {
  const sourcePath = `content/blog/${article.slug}.md`;
  fs.writeFileSync(path.join(process.cwd(), sourcePath), render(article));
  manifest.push({
    family: article.category,
    topic: article.title,
    title: article.title,
    slug: article.slug,
    route: `/blog/${article.slug}`,
    canonical: `https://offshorebookkeepers.com/blog/${article.slug}`,
    sourcePath,
    featuredImage: article.image,
    sources: article.sources.map(([name,url]) => ({name,url})),
    publicationDate: published,
    status: 'prepared'
  });
}
const manifestDir = path.join(process.cwd(), '.paperclip/daily-content', published);
fs.mkdirSync(manifestDir, {recursive:true});
fs.writeFileSync(path.join(manifestDir, 'blog.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Created ${articles.length} articles and manifest.`);
