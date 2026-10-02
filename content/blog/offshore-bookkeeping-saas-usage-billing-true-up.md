---
title: "Reconcile SaaS usage billing true-ups before invoices reach customers"
description: "A practical offshore bookkeeping workflow for usage-based billing true-ups, evidence, exceptions, review, and handoff."
published: "2026-10-02"
updated: "2026-10-02"
category: "SaaS bookkeeping"
type: "blog"
featuredImage: "/thumbnails/bookkeeping-monthly-review-meeting-agenda.webp"
takeaways: ["Build the population around each customer, subscription, meter, and billing period.","Keep exceptions visible until evidence and approval agree.","Separate offshore preparation from client accounting judgment."]
sources: [{"name":"U.S. Small Business Administration, Manage your finances","url":"https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"},{"name":"IRS, Recordkeeping","url":"https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"}]
relatedLinks: [["Bookkeeping services","/services/daily-transaction-coding"],["Management reporting support","/services/management-reporting-support"]]
faqs: [["Can an offshore bookkeeper maintain the usage-based billing true-ups schedule?","Yes. The preparer can maintain evidence, reconciliations, and exception questions while the client retains policy choices and approvals."],["What should each row identify?","At minimum, identify the customer, subscription, meter, and billing period, dates, amounts, status, evidence, ledger mapping, owner, and next action."],["When should an item be closed?","Close it only after the approved action is posted and the source, ledger, and settlement evidence agree."]]
---

Usage billing fails quietly when the product meter, subscription system, pricing contract, and invoice engine disagree. The invoice may still be produced on time, but a missing meter, an old price tier, or a late event can move value between customers and periods. A month-end true-up should catch those differences before customers receive invoices and before accounting relies on the billed total.

The reconciliation needs one record for each customer, subscription, meter, and billing period. That grain matters. A customer-level total can agree while one subscription is overbilled and another is omitted. The workpaper should preserve raw usage, approved pricing inputs, invoice output, and every adjustment between them.

## Prove that every active subscription reached a meter

Start with the subscription population, not the usage export. Capture active and recently terminated subscriptions whose service dates overlap the billing period. Record the customer, contract, product, meter identifier, billing timezone, period boundaries, plan version, and invoice destination.

Match that population to the meter registry. An active subscription with no meter is an exception even if its usage is zero. A meter without an active subscription may belong to a terminated account, test tenant, migration record, or customer that was never connected to billing. Assign each unmatched item to the team that controls the missing link.

Retain changes during the period. Upgrades, downgrades, pauses, cancellations, and meter replacements can split one month into several pricing intervals. Do not overwrite the earlier plan or meter identifier. The true-up needs the effective date of each change to reproduce the charge.

## Set the usage window in the customer's billing timezone

Document the opening and closing timestamps used for extraction. A calendar-month bill in one timezone may include or exclude events near midnight differently from the product database stored in UTC. Save the query parameters and extraction time so the same population can be rerun.

Check for late-arriving events by comparing the first extraction with a controlled second extraction after the ingestion cutoff. Record the event count and units added, removed, or corrected. Management should approve how late events are billed. The preparer should not silently move them into the current or following invoice.

Also test duplicate event identifiers, negative units, impossible timestamps, events outside the subscription term, and meter resets. These checks address data quality before pricing. A perfectly applied rate still produces the wrong bill if the usage population is wrong.

## Rebuild the charge from contract inputs

Create a pricing table that identifies the contract version, effective dates, included allowance, unit definition, tier thresholds, rate, minimum charge, cap, and approved credits. Link every field to the contract or approved amendment used.

Apply the table to reconciled usage outside the invoice engine. Show the quantity assigned to each tier and the resulting amount. If the contract uses a cumulative threshold, do not price each daily file independently. If it uses separate meters, do not combine them unless the agreement permits aggregation.

Consider a customer that upgrades halfway through the month after exceeding the old plan's allowance. The schedule should split the service interval, retain usage by timestamp, apply the approved proration and tier rules, and show both components. It should not average the old and new rates or assign the entire month to whichever plan is active at close.

Contract ambiguity belongs in an exception queue. State the competing interpretations, amount affected, current invoice treatment, evidence available, decision owner, and response deadline. Product or finance leadership retains the pricing decision.

## Compare independent calculation with invoice output

Match the recalculated amount to the draft invoice by customer, subscription, meter, and period. Separate differences caused by units, price version, allowance, tiering, rounding, credits, tax treatment, or manual adjustment. A single net variance hides whether several errors happen to offset.

Every manual invoice adjustment needs a reason, approver, source record, and amount before and after the change. Keep the original draft result. If the invoice engine is corrected and rerun, store the run identifier and compare the new output with the approved adjustment.

Do not clear a difference because the customer has paid a similar amount before. Historical payment behavior does not prove the current usage or price. The reconciliation should close only when source usage, approved contract inputs, invoice output, and authorized adjustments agree.

## Deal with disputes without rewriting the meter

A customer dispute may uncover a product event problem, a contract disagreement, or a billing presentation issue. Record the disputed invoice line, units, amount, claim date, evidence requested, owner, and resolution. Preserve the original meter output alongside any corrected dataset.

If the company issues a credit, link it to the affected subscription and period. A general account credit may settle the customer balance while leaving the underlying meter or price defect unresolved. Track the operational correction separately so the same issue does not recur in the next run.

Age disputes and unresolved usage exceptions from the date action became due. Updating a note should not reset age. The review packet should identify items that block invoicing, items billed under an approved temporary treatment, and items that affect accounting but not the customer invoice.

## Tie billing results to accounting without collapsing the detail

Reconcile approved invoice totals to the billing subledger and general ledger using the exact entity, currency, and period. Keep unbilled approved usage, deferred billing adjustments, issued credits, and cash settlement in separate columns. Each movement needs a posting reference.

Show opening unresolved true-ups, new differences, approved corrections, invoices issued, credits posted, and the ending open balance. If the ledger entry is aggregated, retain the customer-level schedule that supports it. This lets the controller review material items without losing the population behind the total.

Useful operating measures include missing-meter count, late-event volume, draft invoice variance, manual adjustments, reopened disputes, and days to resolution. Present them as control indicators, not claims about product quality or future revenue. [Management reporting support](/services/management-reporting-support) can include the approved results in the recurring close packet.

An offshore bookkeeper can assemble subscription and usage populations, apply approved pricing tables, compare invoice output, maintain exception records, and verify postings. Client management retains contract interpretation, pricing policy, dispute resolution, estimates, write-offs, and final approval. [Bookkeeping services](/services/daily-transaction-coding) can support the recurring preparation under those boundaries.

## Sources

- [U.S. Small Business Administration, Manage your finances](https://www.sba.gov/business-guide/manage-your-business/manage-your-finances)
- [IRS, Recordkeeping](https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping)
