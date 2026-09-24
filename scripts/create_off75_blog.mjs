import fs from 'node:fs';
import crypto from 'node:crypto';

const date = '2026-09-24';
const topics = [
  ['offshore-bookkeeping-construction-retainage-release','Reconcile construction retainage from billing through release','Construction bookkeeping','construction retainage','contract, schedule of values, approved pay application, change-order log, lien-waiver packet, customer remittance, and project ledger','/services/construction-bookkeeping','A contractor bills $240,000, withholds $24,000 as retainage, and receives $216,000. The customer later approves $18,000 for release while $6,000 remains tied to punch-list work. The schedule keeps billed revenue, cash, retained balance, and release eligibility separate.'],
  ['offshore-bookkeeping-ecommerce-marketplace-sales-tax-liability','Tie marketplace sales-tax collections to settlements and liabilities','Ecommerce bookkeeping','marketplace sales-tax activity','order export, jurisdiction report, marketplace statement, refund file, settlement report, bank deposit, filed return, and tax-liability ledger','/services/ecommerce-bookkeeping','Orders show $14,800 of tax, the marketplace remits $12,900 directly, and settlements include $1,600 collected by the seller. Refunds reverse another $300. The bridge identifies which party collected each amount before anyone prepares a filing.'],
  ['offshore-bookkeeping-saas-credit-memo-approval','Control SaaS credit memos from request to ledger posting','SaaS bookkeeping','SaaS credit memos','customer contract, support ticket, usage record, approval matrix, credit-memo batch, invoice history, payment record, and receivable ledger','/services/accounts-receivable-support','A customer requests a $7,200 service credit. Support evidence confirms one affected month worth $4,800, while a sales concession for another $2,400 lacks approval. The queue separates supported service facts from the commercial decision.'],
  ['offshore-bookkeeping-law-firm-client-advance-cost','Reconcile law-firm client advances and matter costs','Legal bookkeeping','client advances and matter costs','engagement terms, matter roster, client deposit, vendor invoice, cost ledger, trust transfer evidence, client bill, reimbursement, and general ledger','/services/legal-bookkeeping','A client advances $20,000. Approved filing and expert costs total $12,600, but the matter ledger contains a $1,900 vendor charge with no matter identifier. The reconciliation leaves that cost unallocated until the responsible attorney reviews it.'],
  ['offshore-bookkeeping-nonprofit-pledge-receivable','Roll forward nonprofit pledges, restrictions, collections, and write-offs','Nonprofit bookkeeping','nonprofit pledge receivables','signed pledge, donor restriction, campaign roster, installment schedule, cash receipt, modification notice, aging report, and fund ledger','/services/nonprofit-bookkeeping','A campaign records $180,000 of pledges. Collections total $132,000, a donor modifies $10,000 in writing, and $8,000 is overdue without a decision. The rollforward shows each movement without assuming collectibility or restriction treatment.'],
  ['offshore-bookkeeping-property-security-deposit-escrow','Reconcile tenant security deposits to escrow cash and the ledger','Property bookkeeping','tenant security deposits','executed lease, tenant roster, receipt, escrow statement, transfer record, move-out inspection, approved deduction, refund evidence, and property ledger','/services/property-bookkeeping','The tenant ledger reports $96,000 of deposits, while escrow cash is $94,500. One $2,000 receipt reached operating cash and a $500 refund cleared after cutoff. The bridge explains both movements while leaving legal compliance decisions to management.'],
  ['offshore-bookkeeping-hotel-room-block-attrition','Reconcile hotel room blocks, attrition charges, deposits, and final bills','Hospitality bookkeeping','hotel room-block activity','group contract, rooming list, pickup report, deposit receipt, cancellation log, folio summary, final invoice, credit, and customer ledger','/services/accounts-receivable-support','A group commits to 300 room nights and uses 264. The contract report calculates 36 unused nights, but 12 fall inside an approved amendment. The schedule reproduces both populations and routes the attrition decision before billing.'],
  ['offshore-bookkeeping-staffing-workers-compensation-audit','Prepare staffing payroll data for a workers-compensation audit','Staffing bookkeeping','workers-compensation payroll audit support','policy schedule, worker roster, job codes, approved time, payroll register, contractor file, certificates, audit request, and payroll ledger','/services/payroll-processing-support','Payroll totals $1.8 million. The audit export assigns $140,000 to a higher-risk code, while approved assignments support only $108,000. The workpaper isolates the $32,000 coding population without deciding insurance classification.'],
  ['offshore-bookkeeping-manufacturing-consigned-inventory','Reconcile consigned inventory across locations, usage, and billing','Manufacturing bookkeeping','consigned inventory','consignment agreement, item master, shipment record, location count, usage report, return record, supplier invoice, and inventory ledger','/services/inventory-cost-data-support','Records show 4,200 units sent to three locations, 2,900 consumed, and 900 counted on hand. Returns explain 250 units, leaving 150 units unresolved. The bridge preserves ownership and location evidence instead of forcing a quantity adjustment.'],
  ['offshore-bookkeeping-healthcare-capitation-remittance','Reconcile healthcare capitation rosters, remittances, and adjustments','Healthcare bookkeeping','capitation remittances','payer contract summary, eligibility roster, member-month file, remittance, retroactive adjustment report, bank deposit, claim offset, and receivable ledger','/services/healthcare-bookkeeping','The eligibility file shows 8,400 member months at approved rates. The remittance excludes 120 retroactively terminated members and adds 70 prior-period members. The bridge separates current and retrospective activity before the finance owner reviews recognition.'],
  ['offshore-bookkeeping-franchise-opening-fee-schedule','Track franchise opening fees, milestones, credits, and collections','Franchise bookkeeping','franchise opening fees','executed agreement, location roster, fee schedule, milestone evidence, invoice, receipt, approved credit, refund record, and franchisee ledger','/services/management-reporting-support','A new location owes $45,000 across signing, training, and opening milestones. The ledger bills all three, but opening approval remains pending and a $2,500 training credit is authorized. The schedule separates earned milestones, billing, cash, and credits.'],
  ['offshore-bookkeeping-dental-insurance-aging-reconciliation','Reconcile dental insurance aging to claims, remittances, and patient ledgers','Dental bookkeeping','dental insurance aging','practice-management aging, claim batch, payer acknowledgment, remittance advice, denial file, patient ledger, bank deposit, and general ledger','/services/healthcare-bookkeeping','The insurance aging totals $118,000. Remittances support $72,000, denials explain $11,000, and $6,500 was posted to patient balances without adjustment approval. The queue preserves each payer and claim status for review.']
];

const sources = [
  {name:'IRS recordkeeping guidance',url:'https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping'},
  {name:'NIST data integrity glossary',url:'https://csrc.nist.gov/glossary/term/data_integrity'}
];
const core = `Begin by fixing the entity, period, cutoff, currency, systems, preparer, and reviewer. Download untouched reports with timestamps, filters, row counts, and control totals. Keep a dated copy when a source can change. Missing evidence must remain visible; it cannot be replaced with a guess.

Build the population from stable identifiers rather than descriptions alone. Record the source date, effective date, service period, gross amount, deductions, fees, taxes, refunds, currency, account, evidence link, status, owner, and next action. Preserve both original and corrected values. Do not combine unrelated events because they settle on the same day.

Reproduce each source total independently before comparing systems. Roll the opening position through additions, applications, releases, reversals, transfers, refunds, credits, corrections, and the closing position. Tie the result to the operating report, subledger, general ledger, and bank activity as applicable. A net agreement can conceal equal and opposite errors.

Use clear statuses such as ready to match, matched, timing item, missing evidence, amount mismatch, duplicate risk, policy question, awaiting approval, disputed, and closed with evidence. Every open item needs an owner, due date, quantified value, and focused question. Keep its original age when carrying it forward.

Test completeness in both directions. Trace samples from the untouched source into the workpaper, then select workpaper rows and trace them back to original evidence. Reperform large, unusual, old, manual, zero-value, and post-cutoff transactions. Investigate repeated exceptions even when each amount is small.

Protect access as carefully as the arithmetic. Use named accounts, multifactor authentication, and least-privilege access. Keep preparation separate from payment release, bank-detail changes, customer credits, refunds, write-offs, journal posting, period locking, and record deletion. Store sensitive evidence only in approved systems and mask unnecessary identifiers.

The reviewer confirms the population, control totals, formulas, exception ownership, proposed entries, and judgment calls. A review note should state one question, its owner, the response date, the response, and closure evidence. Preserve superseded answers so the file explains the final treatment.

Close with the source exports, reconciliation, evidence index, exception log, approved entries, decisions, and concise summary. State what tied, what remains open, the amount exposed, the next owner, and the next review date. Link the packet from the close checklist with a consistent entity-process-period-version name.`;

function render(t) {
  const [slug,title,category,subject,evidence,service,example] = t;
  return `---
title: "${title}"
description: "A practical offshore bookkeeping workflow for ${subject}, with evidence, exception ownership, and clear review boundaries."
published: "${date}"
updated: "${date}"
category: "${category}"
type: "blog"
featuredImage: "/thumbnails/bookkeeping-sop-handoff-template.webp"
sources: ${JSON.stringify(sources)}
takeaways: ["Reconcile the complete source population before investigating differences.","Give every exception evidence, an owner, a due date, and a focused question.","Keep approval and accounting judgment with the authorized company reviewer."]
faqs: [["Can an offshore bookkeeper prepare this reconciliation?","Yes. A bookkeeper can gather authorized records, perform documented comparisons, maintain the exception queue, and prepare a review-ready handoff."],["What stays with the company reviewer?","Contracts, policy, approvals, legal conclusions, write-offs, and other judgment calls remain with the authorized owner or adviser."]]
---
Published September 24, 2026. This guide covers bookkeeping preparation and review support. It is not accounting, tax, legal, payroll, medical, investment, or regulatory advice.

## Why ${subject} needs a dedicated workpaper

The records for ${subject} rarely arrive in one system or at one time. A dependable packet connects the ${evidence}. Posting a final bank amount alone removes the trail needed to explain timing, deductions, ownership, and unresolved differences.

Useful background includes [IRS recordkeeping guidance](${sources[0].url}) and the [NIST definition of data integrity](${sources[1].url}). These references support disciplined evidence handling but do not replace the company’s contracts, policies, jurisdiction-specific rules, or professional advice. Record the access date and source version when changing guidance affects the procedure.

## Define the population before matching

${core.split('\n\n').slice(0,2).join('\n\n')}

Create an evidence index before investigating discrepancies. It should identify who supplied each report, where the approved copy is stored, the extraction parameters, and whether the file covers the entire period. Compare counts and amounts with an independent control such as a system dashboard, statement summary, or signed schedule.

## Reconcile the movement, not only the ending balance

${core.split('\n\n').slice(2,4).join('\n\n')}

### A concrete example

${example}

First reproduce each system’s arithmetic. Then compare its result with the approved agreement or procedure. Finally show the ledger effect. Write the exception as an observed fact: one source reports a value, another reports a different value, and the difference is quantified. Possible causes belong in a separate note until evidence confirms them.

Set escalation thresholds under company policy, but do not rely on dollars alone. A small repeated error, an approaching deadline, an access concern, altered payment details, or a missing approval can require immediate attention. A modest item open for months may expose a broken handoff.

## Separate preparation from decisions

An offshore bookkeeper can collect approved exports, compare identifiers and amounts, reperform arithmetic, request missing documents, update statuses, and draft a proposed entry. The bookkeeper should not interpret contracts, approve a credit, release cash, decide accounting policy, or close a disputed item without the authorized reviewer.

Make a decision request answerable without rebuilding the file. Include the amount, period, deadline, evidence links, observed difference, available options, and operational consequence of delay. Save the response with the workpaper rather than relying on a private message.

${core.split('\n\n')[5]}

## Review in both directions

${core.split('\n\n').slice(4,7).join('\n\n')}

Track the population count, matched and unmatched values, oldest exception, corrections returned, and percentage reviewed by deadline. These are workflow signals, not promises of financial performance. Repeated exceptions should lead to a better intake form, export, naming convention, or approval path.

## Close without hiding open items

${core.split('\n\n')[7]}

For help defining the preparation lane, see [the relevant Offshore Bookkeepers service](${service}). If your company needs a Philippines-based bookkeeper to maintain this schedule while your finance owner retains approval, [plan the role with Offshore Bookkeepers](/contact-us).
`;
}

const manifest=[];
for (const t of topics) {
  const [slug,title,category,,,service] = t;
  const sourcePath=`content/blog/${slug}.md`;
  if (fs.existsSync(sourcePath)) throw new Error(`Refusing to overwrite ${sourcePath}`);
  const body=render(t);
  fs.writeFileSync(sourcePath,body);
  manifest.push({family:category,topic:title,slug,sourcePath,canonical:`https://offshorebookkeepers.com/blog/${slug}`,route:`/blog/${slug}`,sources,publicationDate:date,status:'prepared',contentHash:crypto.createHash('sha256').update(body).digest('hex'),wordCount:(body.match(/\b[\w’'-]+\b/g)||[]).length,service});
}
fs.mkdirSync(`.paperclip/daily-content/${date}`,{recursive:true});
fs.writeFileSync(`.paperclip/daily-content/${date}/blog-off-75.json`,JSON.stringify(manifest,null,2)+'\n');
console.log(`Created ${manifest.length} OFF-75 articles.`);
