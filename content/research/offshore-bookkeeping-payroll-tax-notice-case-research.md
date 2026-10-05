---
title: "Payroll tax notice cases: an evidence-lineage research protocol"
description: "A control study for tracing payroll tax notices through filed returns, deposits, payroll-provider records, responses, adjustments, payments, and ledger corrections."
published: "2026-10-05"
updated: "2026-10-05"
category: "Payroll bookkeeping"
type: "research"
featuredImage: "/thumbnails/payroll-reconciliation-evidence.svg"
sources: [{"name":"IRS Tax Topic 651: Notices, What to Do","url":"https://www.irs.gov/taxtopics/tc651"},{"name":"IRS: Understanding Your IRS Notice or Letter","url":"https://www.irs.gov/individuals/understanding-your-irs-notice-or-letter"},{"name":"IRS: Combined Annual Wage Reporting Missing Form W-2 Inquiries","url":"https://www.irs.gov/businesses/small-businesses-self-employed/combined-annual-wage-reporting-missing-form-w-2-inquiries"},{"name":"SSA Employer W-2 Filing Instructions and Information","url":"https://www.ssa.gov/employer/"},{"name":"IRS Publication 15","url":"https://www.irs.gov/publications/p15"}]
sourceNotes: [{"claim":"IRS Topic 651 instructs recipients to follow the notice, retain correspondence, and support credited payments with appropriate evidence.","sourceUrls":["https://www.irs.gov/taxtopics/tc651"]},{"claim":"The IRS CAWR page describes discrepancies between wage information reported to SSA and employment-tax information reported to the IRS; it does not establish that every variance is a bookkeeping error.","sourceUrls":["https://www.irs.gov/businesses/small-businesses-self-employed/combined-annual-wage-reporting-missing-form-w-2-inquiries"]},{"claim":"IRS Publication 15 and SSA employer materials are authoritative inputs for payroll administration, while tax positions and responses remain with authorized specialists.","sourceUrls":["https://www.irs.gov/publications/p15","https://www.ssa.gov/employer/"]}]
takeaways: ["Treat each notice as a case with its own tax period, deadline, amounts, authority, evidence, and final resolution.","Reconcile filed returns and deposits independently before interpreting a notice balance.","Keep tax advice, agency representation, response approval, and payment authority outside the preparer's role."]
relatedLinks: [["Review payroll journal preparation support","/services/payroll-journal-preparation"],["Review audit document support","/services/audit-document-support"],["Browse the research library","/research"]]
faqs: [{"question":"Does a notice prove that the books are wrong?","answer":"No. It identifies an agency position or request that must be compared with returns, deposits, payroll records, correspondence, and later account activity."},{"question":"Can a bookkeeper answer the agency?","answer":"Only within documented authority. Tax interpretation, representation, and approval should remain with the client or qualified tax adviser."}]
serviceHandoff: {"href":"/contact-us","label":"Discuss a payroll evidence workflow","title":"Trace every notice to its resolution","body":"Define intake, restricted access, evidence ownership, deadlines, reconciliations, review authority, and ledger correction rules."}
---
## Research question and role boundary

A payroll tax notice can cite a missing return, unmatched deposit, wage discrepancy, penalty, interest charge, or account adjustment. The amount on the page is not a ready-made journal entry. It must be connected to the correct legal entity, tax form, tax period, filed return, payment record, payroll register, prior correspondence, and agency account history.

This protocol tests whether that chain can be reproduced. It does not decide a tax position, speak for the taxpayer, authorize a response, or conclude that an agency calculation is correct. The client and qualified tax adviser retain those decisions. An offshore bookkeeper can control intake, assemble approved records, prepare reconciliations, track deadlines, and post an authorized entry.

## Create the case before moving the money

Assign an immutable case identifier when a notice arrives. Capture the receiving channel and time, agency, notice number, notice date, response date printed on the notice, entity name, taxpayer identifier in a restricted field, tax form, period, stated reason, proposed tax, penalty, interest, credits, and total. Store an unaltered image of the complete notice, including inserts and envelopes when delivery timing matters.

Do not name a case only by amount. The same amount can recur across entities or periods, and a single notice may combine several components. Link later letters, calls documented by an authorized representative, uploads, postal receipts, payments, abatements, corrected returns, and transcripts to the original case while retaining their own event dates.

Log custody. Record who opened the mail, who scanned it, where the restricted file resides, and who received the escalation. Tax identifiers and employee information should not be copied into general chat or an unrestricted task board. Use named accounts, minimum access, and an approved retention schedule.

## Reconcile three independent views

Build a return view from signed or accepted filings and amendments. Build a payment view from EFTPS or other authorized payment confirmations and bank settlement. Build a payroll view from registers, tax-liability reports, general-ledger postings, and provider invoices. Freeze exports and record report parameters, time zone, extraction time, and file hashes.

For each tax period, bridge gross wages, taxable wage bases, employee withholding, employer taxes, adjustments, deposits, and filed amounts at the level supported by the relevant forms. Do not force all sources to net zero. A provider may group a deposit differently from the return, a bank date may differ from an agency effective date, and an amendment may appear after the original filing.

Use a separate agency-account view when an authorized transcript or account record is available. Compare it with the business evidence field by field. Label differences as timing, classification, missing source, duplicate, rejected filing, unapplied payment, amended amount, or unresolved. "Per notice" is a source label, not a conclusion.

The IRS CAWR material illustrates why independent views matter: wage information reported to SSA can differ from employment-tax information reported to the IRS. A payroll ledger that agrees with one filing does not prove that the other filing population is complete.

## Evidence gates for case status

Use observable states: received, triaged, records requested, reconciliation prepared, adviser review, response approved, response submitted, agency acknowledgment, payment approved, payment settled, adjustment posted, follow-up received, and closed. Each state needs evidence. A drafted response is not submitted; a portal upload is not acknowledged without a receipt; an approved payment is not settled until traced through the bank and agency account.

Maintain the response deadline exactly as printed and separately record internal review dates. If an extension or different deadline is asserted, attach the authoritative confirmation. A dashboard can calculate days remaining, but it must not overwrite the source date. Escalate conflicting dates and missing pages immediately.

Track amounts by component. Proposed tax, assessed tax, penalty, interest, payment, credit transfer, abatement, refund, and ledger adjustment should not collapse into one "resolved amount." This prevents a paid penalty from being mistaken for correction of the underlying payroll liability.

## Ledger treatment and corrections

The case reconciliation should map existing payroll liabilities, cash disbursements, provider clearing entries, penalties, interest, and prior-period corrections. The preparer proposes a mapping with links to source evidence. An authorized owner approves the tax and accounting treatment before posting.

Never book the entire notice to payroll tax expense merely to make the notice queue disappear. A balance may reflect cash already recorded, a payment applied to the wrong period, an unrecorded penalty, an amendment, or an agency processing difference. Likewise, do not reverse a liability because a response was mailed. Keep the balance and procedural status distinct.

For every authorized entry, retain the case identifier, affected accounts, entity, period, preparer, reviewer, approval, posting date, and reversal behavior. Reconcile the post-entry ledger back to the case bridge and confirm that cash was not duplicated.

## Reviewer tests and operating measures

The reviewer traces every high-risk or material case from notice to source filings and from source filings forward to the recorded resolution. Reperform deposit matching, inspect payment effective dates, verify entity and period, and examine manual spreadsheet adjustments. Review all cases near deadlines, reopened cases, repeated notices, missing acknowledgments, unapplied payments, and entries posted before approval.

Measure intake latency, days to complete the evidence packet, days awaiting client or adviser action, missed internal dates, agency response time, reopened-case rate, and unresolved amount by age. Separate controllable preparation time from external waiting time. Do not advertise these observations as agency benchmarks or service results.

Run a duplicate test using notice number, form, period, entity, and amount, then inspect candidates rather than deleting them automatically. Run a completeness test from mail and portal intake into the register. Finally, sample closed cases and confirm that the agency outcome, bank movement, and ledger disposition all agree.

## Limitations and final packet

Notices can be superseded, corrected, or followed by later account activity. Payroll providers may retain only selected reports. Agency portals may present current status without the full historical sequence. Bank settlement proves that money moved, not that it reached the intended tax period. This protocol cannot eliminate those uncertainties; it makes them visible.

The final packet includes the notice image, case chronology, frozen exports, data dictionary, return-to-payroll bridge, deposit match, agency-account comparison, response and receipt, payment evidence, authorized entries, open questions, reviewer tests, and closure approval. A case closes only when the authorized owner defines the outcome and the operational, cash, and ledger records support it.

Add a subsequent-event check before closing. Search later notices, refunds, credits, deposits, amendments, and provider adjustments for the same entity, form, and period. A later agency letter may reverse an assessment or move a credit without naming the internal case. Record that event on the chronology and reopen the case when it changes the supported outcome. The close reviewer should also confirm that a response or payment was not counted in two cases that reference the same period.

Control the population across intake channels. Reconcile physical mail, scanned-mail logs, agency portals, adviser correspondence, and payroll-provider queues to the case register. A duplicate notice should link to the existing case but remain in the chronology. An unread portal alert is not evidence of a notice's contents, so preserve the actual document and its retrieval date. Periodically select register gaps in the sequence of received mail and investigate them.

Where a provider submits filings or deposits, distinguish the provider's confirmation from agency acceptance. Retain both when available. Record provider corrections as new events, and verify that any provider-funded credit or reimbursement reaches the bank and ledger rather than closing the case from correspondence alone.

## Sources and checked dates

- [IRS Tax Topic 651](https://www.irs.gov/taxtopics/tc651) - Internal Revenue Service; checked October 5, 2026.
- [Understanding Your IRS Notice or Letter](https://www.irs.gov/individuals/understanding-your-irs-notice-or-letter) - Internal Revenue Service; checked October 5, 2026.
- [Combined Annual Wage Reporting Missing Form W-2 Inquiries](https://www.irs.gov/businesses/small-businesses-self-employed/combined-annual-wage-reporting-missing-form-w-2-inquiries) - Internal Revenue Service; checked October 5, 2026.
- [Employer W-2 Filing Instructions and Information](https://www.ssa.gov/employer/) - Social Security Administration; checked October 5, 2026.
- [IRS Publication 15](https://www.irs.gov/publications/p15) - Internal Revenue Service; checked October 5, 2026.
