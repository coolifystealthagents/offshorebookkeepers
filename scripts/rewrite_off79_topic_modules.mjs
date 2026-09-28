import fs from 'node:fs';

const modules = {
  'offshore-bookkeeping-payment-processor-reserve-research': `## Reserve roll-forward test

Begin with the processor agreement and identify whether the reserve is rolling, fixed, event-driven, or a mixture. Build a daily roll-forward: opening reserve plus new holds, less releases, plus or minus chargebacks, refunds, fees, and manual adjustments equals closing reserve. Do not infer reserve activity from cash alone because a net settlement can combine sales, fees, refunds, and several reserve movements. Tie each component to the processor report that names it, then tie released cash to the bank and the reserve balance to the ledger.

A useful exception packet shows the merchant account, currency, contractual basis, processor event, expected release window, actual disposition, and owner. Investigate negative settlements separately from reserve releases. For a rolling reserve, recalculate the eligible transaction base and the hold percentage for a sample of settlement days. For a fixed reserve, compare the retained balance with the current agreement and documented amendments. The client decides classification and accounting treatment; the bookkeeper prepares the trace and flags unexplained differences.

## Processor-specific interpretation

Age unresolved holds from the date evidence says the processor retained funds, not from the date somebody opened a spreadsheet row. Separate amounts still within contractual windows from overdue releases and from deductions whose nature is not yet known. A concentration table by processor and currency can reveal operational dependency, but it does not predict collectability. Contract language, disputes, processor solvency, and later events may change management's conclusion.`,
  'offshore-bookkeeping-deferred-revenue-contract-change-research': `## Amendment-to-schedule walkthrough

Select amendments from the contract repository rather than only from schedules already changed. For each selection, record the original arrangement, signed amendment, approval date, effective date, billing consequence, affected performance or service periods, schedule version, posted journal, and reviewer. Then select changed schedule lines and trace backward to an authorized amendment. These two directions test different gaps: an omitted amendment and an unsupported schedule edit.

Keep commercial interpretation outside the preparer's discretion. A cancellation, concession, added service, renewal, usage true-up, or term extension can affect billing and accounting in different ways. The bookkeeper should capture exact terms and route ambiguity to the client's revenue-policy owner. A prior invoice pattern is not evidence that a new amendment has the same effect. Preserve the old schedule, new schedule, change calculation, approval, and posting reference so the transition can be reperformed.

## Version and cutoff analysis

Measure lag at several boundaries: signature to intake, intake to policy decision, decision to schedule update, and update to ledger posting. One total duration hides the actual queue. Report amendments received after close separately and disclose whether the population comes from legal, sales, billing, or finance records. Conflicting repositories are a control finding, not permission to choose the most convenient list.`,
  'offshore-bookkeeping-loan-covenant-input-lineage-research': `## Definition-to-ledger matrix

Start from the executed agreement, amendments, and waivers. Copy each defined term with its page reference into a controlled matrix; do not paraphrase away inclusions, exclusions, averaging periods, entity scope, or permitted adjustments. Map each calculation line to that matrix and then to a closed ledger account, approved report, or separately documented adjustment. The package should reveal whether a number is reported, calculated, or judgment-dependent.

Test lineage in both directions. Trace every submitted input back to its source, and scan relevant ledger accounts for balances absent from the calculation. Reperform formulas, signs, periods, currency conversions, eliminations, and trailing-period logic. Preserve the exact workbook submitted to the lender and distinguish a later correction from the original. Bookkeepers may assemble balances and check arithmetic; the CFO, controller, treasury owner, or counsel resolves agreement interpretation and communication.

## Adjustment governance

Create a register for pro forma adjustments, acquisitions, disposals, waivers, restricted cash, and classification changes. Each row needs an agreement reference, rationale, calculation, source evidence, preparer, approver, and expiry or reuse rule. Recurring an adjustment does not make it self-authorizing. Compare current entries with prior periods to find unexplained disappearance, changed signs, or copied amounts. The outcome is an evidence-readiness assessment, not a legal conclusion about compliance.`,
  'offshore-bookkeeping-marketplace-facilitator-evidence-research': `## Order-channel responsibility test

Construct the population from order-level marketplace exports and direct-channel records, not merely from ledger tax accounts. For every selected order, retain destination, product tax class, taxable base, tax charged, collector indicator, refund history, marketplace identity, and settlement reference. Reconcile gross order tax to marketplace reports before comparing net deposits, because settlements may net commissions, refunds, reserves, and other deductions.

Responsibility can vary by jurisdiction, period, channel, and transaction facts. The study therefore records the evidence used by the client's tax owner instead of creating a universal facilitator rule. A bookkeeper may apply an approved jurisdiction table and flag conflicts; they should not decide nexus, registration, exemption validity, product taxability, or filing positions. Marketplace labels are inputs, not conclusive legal evidence.

## Filing-to-ledger bridge

Bridge seller-collected tax, facilitator-collected tax, refunds, adjustments, remittances, and ending liabilities separately. Test orders around registration changes, month end, destination changes, and amended returns. Mixed baskets and partial refunds deserve their own examples because allocating tax by gross order can conceal errors. Report unsupported collector indicators and unreconciled settlement differences as separate exception families. This design identifies where evidence breaks without claiming that an observed difference is tax due.`,
  'offshore-bookkeeping-capital-project-commitment-research': `## Commitment waterfall

For each project, begin with authorized budget and approved scope. Add signed contracts and purchase orders, incorporate authorized change orders, subtract invoiced or cancelled portions, and identify remaining commitments. Keep incurred cost, accrued cost, cash paid, and future commitment in separate columns. Combining them produces a plausible total that cannot answer which obligation remains open.

Test completeness from procurement to the project register and from the register back to procurement. Search for contracts without purchase orders, purchase orders assigned to closed projects, invoices exceeding commitments, and change orders approved outside the recorded workflow. Retain vendor, currency, authorization, effective date, consumed amount, cancellation evidence, and reviewer. The capital-approval authority decides whether scope and spending remain authorized; bookkeeping support maintains the reconciliation and exception trail.

## Closeout and uncertainty

Closeout needs positive evidence: final invoice status, retainage disposition, open disputes, deposits, unissued changes, shared-contract allocation, and project-owner confirmation. Silence from a vendor is not cancellation. Age open commitments from the latest supported obligation event and show dormant lines separately from recently changed lines. Foreign-currency commitments should disclose the translation basis rather than mixing transaction and reporting currencies. The result supports forecasting and close review but does not establish asset recognition, impairment, or legal enforceability.`
};

for (const [slug, insertion] of Object.entries(modules)) {
  const file = `content/research/${slug}.md`;
  const raw = fs.readFileSync(file, 'utf8');
  if (raw.includes('## Reserve roll-forward test') || raw.includes('## Amendment-to-schedule walkthrough') || raw.includes('## Definition-to-ledger matrix') || raw.includes('## Order-channel responsibility test') || raw.includes('## Commitment waterfall')) continue;
  fs.writeFileSync(file, raw.replace('\n## Limitations and uncertainty\n', `\n${insertion}\n\n## Limitations and uncertainty\n`));
}
