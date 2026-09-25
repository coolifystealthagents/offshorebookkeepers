import fs from 'node:fs';
import crypto from 'node:crypto';

const date = '2026-09-25';
const displayDate = 'September 25, 2026';
const topics = [
  ['offshore-bookkeeping-bank-reconciliation-stale-checks','Review stale checks during bank reconciliation without hiding open liabilities','Bank reconciliation','stale and outstanding checks','bank statement, check register, payee record, invoice, void history, stop-payment evidence, unclaimed-property review, and general ledger','/services/bank-reconciliation-support','The register contains 18 checks older than 90 days totaling $31,400. Two cleared after cutoff, five have documented replacements, and eleven still need payee and policy review. The schedule keeps each liability open until an authorized decision is supported.'],
  ['offshore-bookkeeping-accounts-payable-three-way-match-exceptions','Build an accounts-payable three-way-match exception queue','Accounts payable','purchase-order, receipt, and invoice exceptions','approved purchase order, receiving record, vendor invoice, tolerance policy, credit memo, approval history, payment batch, and accounts-payable ledger','/services/accounts-payable-processing','A vendor invoices 1,020 units at $12.50. The purchase order covers 1,000 units at $12, and receiving confirms 990 before cutoff. The queue separates quantity, price, and timing differences instead of forcing one net variance.'],
  ['offshore-bookkeeping-accounts-receivable-short-pay-deductions','Reconcile customer short-pay deductions before closing receivables','Accounts receivable','customer short payments and deductions','customer invoice, remittance advice, deduction code, proof of delivery, contract terms, credit memo, bank receipt, and receivable ledger','/services/accounts-receivable-support','A customer pays $47,500 against a $50,000 invoice and cites freight damage. Support confirms $900, while $1,600 remains disputed. The workpaper applies only the approved credit and keeps the unresolved balance visible.'],
  ['offshore-bookkeeping-month-end-accrual-reversal-control','Control month-end accrual reversals across reporting periods','Month-end close','month-end accruals and reversals','accrual request, source estimate, service period, approval, journal batch, automatic reversal report, subsequent invoice, and general ledger','/services/month-end-close-support','A $36,000 contractor accrual is posted for September and set to reverse October 1. The October invoice is $33,500, but an additional $2,500 belongs to October service. The bridge prevents the reversal and invoice from being mistaken for a duplicate expense.'],
  ['offshore-bookkeeping-ecommerce-gift-card-liability-rollforward','Roll forward ecommerce gift-card sales, redemptions, and refunds','Ecommerce bookkeeping','gift-card liabilities','gift-card platform export, order report, redemption file, refund report, processor settlement, expiration policy, jurisdiction review, and liability ledger','/services/ecommerce-bookkeeping','Customers buy $84,000 of gift cards, redeem $51,000, and receive $3,000 of approved refunds. The platform also reports $1,200 of promotional cards. The rollforward separates cash-funded value from promotions before any recognition decision.'],
  ['offshore-bookkeeping-saas-annual-prepayment-schedule','Reconcile SaaS annual prepayments to service periods and cash','SaaS bookkeeping','annual customer prepayments','executed order form, billing schedule, invoice, payment receipt, service dates, amendment, credit memo, revenue schedule, and general ledger','/services/saas-bookkeeping','A customer prepays $120,000 for a twelve-month term beginning September 15. A $12,000 add-on begins November 1. The schedule assigns each item its own service window and preserves the amendment for reviewer approval.'],
  ['offshore-bookkeeping-property-common-area-maintenance-reconciliation','Prepare a property CAM reconciliation for tenant review','Property bookkeeping','common-area maintenance activity','lease abstract, tenant roster, approved budget, vendor invoices, allocation basis, occupancy schedule, payments, prior billings, and property ledger','/services/property-bookkeeping','Recoverable costs total $420,000. A tenant has a 7.5% share, paid $28,000 in estimates, and disputes $6,000 of capital work included in the pool. The schedule shows the calculation and isolates the disputed classification.'],
  ['offshore-bookkeeping-restaurant-private-event-minimum-spend','Reconcile restaurant private-event minimums, deposits, and final settlement','Restaurant bookkeeping','private-event minimums and deposits','signed event agreement, booking record, deposit receipt, change order, final check, cancellation record, refund approval, processor settlement, and customer ledger','/services/restaurant-bookkeeping','An event requires a $6,000 deposit and a $15,000 minimum spend. The final check is $14,200 before an $800 minimum adjustment, and the processor nets a $350 fee. The rollforward separates the customer balance from settlement fees and cash timing.'],
  ['offshore-bookkeeping-manufacturing-scrap-recovery-reconciliation','Reconcile manufacturing scrap quantities, sales, and cash recovery','Manufacturing bookkeeping','manufacturing scrap and recovery proceeds','production report, material issue record, scrap ticket, weight certificate, buyer statement, sales invoice, bank receipt, and inventory ledger','/services/inventory-cost-data-support','Production reports 14,200 pounds of scrap. Yard tickets support 13,700 pounds, the buyer accepts 13,500, and 200 pounds remain in transit. The reconciliation leaves the remaining 500-pound difference open for operations review.'],
  ['offshore-bookkeeping-nonprofit-restricted-grant-cost-transfer','Review nonprofit restricted-grant cost transfers with an evidence trail','Nonprofit bookkeeping','restricted-grant cost transfers','grant agreement, approved budget, payroll distribution, vendor invoice, program roster, transfer request, approval, and fund ledger','/services/nonprofit-bookkeeping','A program requests a $22,000 transfer into a restricted grant. Payroll support covers $15,000 and vendor evidence covers $4,500; the remaining $2,500 lacks a grant-purpose explanation. The queue keeps that amount outside the proposed transfer.'],
  ['offshore-bookkeeping-healthcare-patient-refund-queue','Build a controlled healthcare patient-refund queue','Healthcare bookkeeping','patient credit balances and refunds','patient-ledger extract, remittance advice, payment receipt, adjustment history, refund request, identity check, approval record, payment evidence, and general ledger','/services/healthcare-bookkeeping','A patient ledger shows a $1,350 credit after insurance repricing. A $900 card payment is traceable, while $450 arose from an unapproved adjustment. The packet routes the two components separately and limits protected information.'],
  ['offshore-bookkeeping-multi-entity-shared-expense-allocation','Reconcile multi-entity shared expenses before posting allocations','Multi-entity bookkeeping','shared-expense allocations','vendor invoice, benefiting-entity roster, approved allocation policy, usage driver, intercompany schedule, approval, journal batch, and entity ledgers','/services/management-reporting-support','A $60,000 software invoice serves four entities. Approved user counts allocate $18,000, $16,000, $14,000, and $12,000, but ten users changed entities midmonth. The schedule exposes the cutoff choice for controller review.']
];

const sources = [
  {name:'IRS recordkeeping guidance',url:'https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping'},
  {name:'NIST data integrity glossary',url:'https://csrc.nist.gov/glossary/term/data_integrity'}
];

function render(t) {
  const [slug,title,category,subject,evidence,service,example] = t;
  return `---
title: "${title}"
description: "A practical offshore bookkeeping workflow for ${subject}, with complete populations, evidence, exception ownership, and review boundaries."
published: "${date}"
updated: "${date}"
category: "${category}"
type: "blog"
featuredImage: "/thumbnails/bookkeeping-sop-handoff-template.webp"
sources: ${JSON.stringify(sources)}
takeaways: ["Freeze the complete source population before matching records.","Give every exception evidence, an owner, a due date, and a focused question.","Keep approvals, policy, and accounting judgment with the authorized company reviewer."]
faqs: [["Can an offshore bookkeeper prepare this workpaper?","Yes. A bookkeeper can gather authorized records, perform documented comparisons, maintain the exception queue, and prepare a review-ready handoff."],["What remains with the company reviewer?","Contracts, policy, approvals, legal conclusions, write-offs, releases, and other judgment calls remain with the authorized owner or adviser."]]
---
Published ${displayDate}. This guide covers bookkeeping preparation and review support. It is not accounting, tax, legal, payroll, medical, investment, or regulatory advice.

## Why ${subject} needs a dedicated workpaper

The records for ${subject} rarely live in one system or arrive at the same time. A dependable packet connects the ${evidence}. Posting only the final net amount removes the trail needed to explain timing, ownership, deductions, approvals, and unresolved differences.

Useful background includes [IRS recordkeeping guidance](${sources[0].url}) and the [NIST definition of data integrity](${sources[1].url}). These sources support disciplined record handling; they do not decide the company’s accounting treatment, contractual obligations, approval policy, or local compliance. Record the source and access date when changing guidance affects the procedure.

The goal is not a cosmetically clean spreadsheet. It is a reproducible bridge from original records to the proposed bookkeeping result. A reviewer should be able to identify the population, reproduce the arithmetic, inspect every material exception, and understand which decisions remain open.

## Define the population and cutoff first

Start by fixing the legal entity, reporting period, local time zone, cutoff, currency, source systems, preparer, and reviewer. Download untouched reports with extraction timestamps, filters, row counts, and control totals. Keep a dated copy when a report can change. Missing evidence must stay visible rather than being replaced with an estimate presented as fact.

Build the population from stable identifiers, not descriptions or amounts alone. Capture the source date, effective date, service period, gross amount, deductions, fees, tax, refunds, currency, account, evidence link, current status, owner, and next action. Preserve original and corrected values. Do not merge unrelated events merely because they share a date or net to the same amount.

Create an evidence index before investigating discrepancies. For every file, note who supplied it, where the approved copy is stored, its extraction parameters, the covered period, and whether it is complete. Compare its record count and total with an independent control such as a system summary, signed schedule, statement, or ledger report.

Document late-arriving records separately. A transaction received after cutoff may still belong to the period, but the authorized finance owner decides treatment under the company’s policy. The bookkeeper records the facts, quantifies the effect, and routes the decision.

## Reconcile movements instead of only the ending balance

Reproduce each source total before comparing systems. Roll the opening position through additions, applications, releases, reversals, transfers, refunds, credits, corrections, and the closing position. Tie the result to the operating report, subledger, general ledger, and bank activity where applicable. A net agreement can conceal equal and opposite errors.

### A concrete example

${example}

First reproduce the arithmetic in every source. Then compare the result with the approved agreement or operating procedure. Finally show the ledger effect. Describe an exception as an observed fact: one source reports a value, another reports a different value, and the difference is quantified. Keep possible causes in a separate note until evidence confirms them.

Use statuses that tell the next person what to do: ready to match, matched, timing item, missing evidence, amount mismatch, duplicate risk, policy question, awaiting approval, disputed, and closed with evidence. Every open row needs an owner, due date, value, and focused question. When an exception carries forward, retain its original age.

Set escalation thresholds through company policy, but do not use dollars as the only signal. A small repeated error, altered payment instructions, unusual access, an approaching deadline, or a missing approval may deserve immediate attention. Aging and recurrence often reveal broken handoffs that a single-period total hides.

## Separate preparation from authority

An offshore bookkeeper can collect approved exports, compare identifiers and values, reperform calculations, request missing documents, update statuses, and draft a proposed entry. The bookkeeper should not interpret a contract, approve a credit, release money, decide accounting policy, change master data, or close a disputed item without the authorized reviewer.

Make each decision request answerable without rebuilding the file. Include the entity, period, amount, deadline, evidence links, observed difference, available options, and operational consequence of delay. Save the response with the workpaper rather than relying on a private message. If the response changes, retain the earlier version and explain the superseding decision.

Protect access as carefully as the arithmetic. Use named accounts, multifactor authentication, and least-privilege permissions. Separate preparation from payment release, bank-detail changes, customer credits, refunds, write-offs, journal approval, period locking, and deletion. Store sensitive evidence only in approved systems and mask identifiers that the task does not need.

## Review completeness in both directions

Trace samples from the untouched source into the workpaper, then select workpaper rows and trace them back to source evidence. Reperform large, unusual, old, manual, zero-value, and post-cutoff transactions. Investigate repeated exceptions even when each amount is individually small.

The reviewer confirms the population, control totals, formulas, exception ownership, proposed entries, and judgment calls. A review note should state one question, its owner, the response date, the response, and closure evidence. Review is not complete merely because every spreadsheet cell is populated.

Useful operating measures include population count, matched and unmatched value, oldest exception, returned corrections, records missing evidence, and percentage reviewed by the agreed deadline. These are workflow signals, not promises of accuracy, savings, compliance, or financial performance. Changes in volume, systems, policies, or reviewer availability should be noted beside the measures.

When a recurring difference appears, repair the intake form, export, naming convention, mapping rule, or approval path. Do not silently add a spreadsheet plug. A controlled procedure makes the exception easier to prevent or diagnose next period.

## Close the packet without hiding open items

Close with the untouched exports, reconciliation, evidence index, exception log, approved entries, decisions, and a concise summary. State what tied, what remains open, the amount involved, the next owner, and the next review date. Link the packet from the close checklist using a consistent entity-process-period-version name.

Archive the reviewed version under the company’s retention and access rules. Do not overwrite the approved packet when a late item arrives; create a new version with a change note. If a proposed entry is rejected or changed, preserve both the proposal and the authorized outcome.

For help defining the preparation lane, see [the relevant Offshore Bookkeepers service](${service}). If your company needs a Philippines-based bookkeeper to maintain this schedule while its finance owner retains approval, [plan the role with Offshore Bookkeepers](/contact-us).
`;
}

const manifest=[];
for (const t of topics) {
  const [slug,title,category,,,service] = t;
  const sourcePath=`content/blog/${slug}.md`;
  if (fs.existsSync(sourcePath) && !fs.readFileSync(sourcePath,'utf8').includes(`Published ${displayDate}.`)) throw new Error(`Refusing to overwrite ${sourcePath}`);
  const body=render(t);
  fs.writeFileSync(sourcePath,body);
  manifest.push({family:category,topic:title,slug,sourcePath,canonical:`https://offshorebookkeepers.com/blog/${slug}`,route:`/blog/${slug}`,sources,publicationDate:date,status:'prepared',contentHash:crypto.createHash('sha256').update(body).digest('hex'),wordCount:(body.match(/\b[\w’'-]+\b/g)||[]).length,service,commitSHA:null,deploymentEvidence:null,liveURL:null,verifiedAt:null});
}
fs.mkdirSync(`.paperclip/daily-content/${date}`,{recursive:true});
fs.writeFileSync(`.paperclip/daily-content/${date}/blog-off-78.json`,JSON.stringify(manifest,null,2)+'\n');
console.log(`Created ${manifest.length} OFF-78 articles.`);
