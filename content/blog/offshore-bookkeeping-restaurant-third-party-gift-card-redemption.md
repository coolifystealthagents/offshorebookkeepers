---
title: "Reconcile third-party gift-card redemptions across restaurant locations"
description: "Track restaurant gift-card sales, redemptions, processor funding, fees, location due-to/due-from entries, and unresolved batches."
published: "2026-09-18"
updated: "2026-09-18"
category: "Restaurant bookkeeping"
type: "blog"
featuredImage: "/thumbnails/bookkeeping-customer-deposit-reconciliation.webp"
sources: [{"name":"FTC gift card guidance","url":"https://consumer.ftc.gov/articles/gift-cards"},{"name":"FASB revenue recognition resources","url":"https://www.fasb.org/page/PageContent?pageId=/projects/revenue-recognition-implementation.html"}]
takeaways: ["Reconcile the complete source population before investigating individual differences.", "Give each exception an evidence link, owner, due date, and explicit decision request.", "Keep approval and accounting judgment with the authorized reviewer."]
faqs: [["Can an offshore bookkeeper prepare this workpaper?", "Yes. A bookkeeper can collect authorized records, perform documented comparisons, maintain the exception queue, and prepare a review-ready handoff."], ["What should remain with the company reviewer?", "Contract interpretation, accounting policy, approvals, write-offs, legal conclusions, and other judgment calls should remain with the named company owner or professional adviser."]]
---
Published September 18, 2026. This article explains a bookkeeping workflow, not accounting, tax, legal, payroll, medical, or regulatory advice.

## Why this reconciliation needs its own workpaper

A restaurant group may sell gift cards centrally, redeem them at another location, and receive a net processor settlement after fees or reserve movements. Point-of-sale sales, redemption reports, intercompany balances, liability activity, and bank cash will not agree without a structured bridge.

The goal is not to force every number to zero. It is to explain each movement using the records the business is authorized to use, distinguish timing from a real discrepancy, and put decisions in front of the right reviewer. That makes the work suitable for offshore bookkeeping support: the preparer handles repeatable evidence work while the company retains authority.

Useful background for designing the procedure includes [FTC gift card guidance](https://consumer.ftc.gov/articles/gift-cards) and [FASB revenue recognition resources](https://www.fasb.org/page/PageContent?pageId=/projects/revenue-recognition-implementation.html). These sources do not replace the company’s contracts, accounting policy, or professional advice. Record the version and access date when a changing rule or provider document affects the workflow.

## Define the population before matching

Write down the legal entity, reporting period, cutoff time, currency, systems, accounts, and locations in scope. Export the full source populations before filtering. Save read-only copies with file names that include the extraction time, then record row counts and control totals. If a system report can change after export, note its filters and timezone.

The working table should contain card program, masked card reference, selling location, redeeming location, sale date, redemption date, face value, discount, fee, breakage policy flag, settlement batch, intercompany owner, and exception status. Use stable references instead of names where confidentiality requires it. Never delete unmatched rows merely because they make the schedule untidy. A missing record is an exception with an owner, not permission to invent a value.

Start with opening items from the last reviewed period. Add current activity, separate reversals and corrections, and calculate the expected ending position. Tie that result independently to the ledger, subledger, provider statement, and bank where each is relevant. This four-corner check catches a common failure: cash agrees, but the underlying liability, receivable, expense, or customer record does not.

## Build the gift-card redemption rollforward

Give one row to each traceable unit. Do not combine unrelated invoices, batches, customers, projects, or service periods just because they share a deposit date. Store gross activity, deductions, fees, taxes, reserves, refunds, reversals, and cash in separate columns. Include formulas that are visible to the reviewer rather than typed totals.

Use a clear status vocabulary: ready to match, matched, timing item, missing source, amount mismatch, duplicate risk, policy question, awaiting approval, and closed with evidence. Each open status needs a date, evidence reference, next action, owner, and due date. “Checking” is not useful unless the schedule says what is being checked.

Keep the original value and corrected value in separate fields. If a source file changes, retain both versions and explain the delta. If the ledger requires a proposed entry, put it on a review tab with the entity, accounts, amount, date, explanation, preparer, supporting rows, and approver. The preparer should not post merely to make the reconciliation agree.

## Work through a concrete example

Location A sells a $200 card; Location B redeems $150. The processor funds Location B $145 after a $5 fee while the central books still hold the full liability. The schedule records the redemption, fee, remaining $50 balance, and location settlement separately rather than posting $145 as restaurant sales.

This example matters because a net deposit can look plausible while its components are wrong. The preparer should first reproduce the source arithmetic, then compare it with the contract or approved procedure, and finally show the ledger impact. The exception description should state the observed fact: “source A reports X; source B reports Y; difference is Z.” Possible causes belong in a separate note until evidence confirms one.

Set an escalation threshold based on the company’s policy, but do not use a dollar threshold as the only trigger. A small repeated error, missing approval, altered bank detail, privacy concern, or approaching dispute deadline can deserve immediate attention. Aging also matters. A $100 item unresolved for four months may reveal a broken handoff even when it is not financially large.

## Preserve the decision boundary

The offshore bookkeeper can download approved reports, compare identifiers and amounts, reperform arithmetic, request missing documents, update statuses, and draft a proposed entry for review. The bookkeeper should stop when the work requires breakage policy, escheatment review, intercompany allocation, and approval of manual adjustments. That decision belongs to the restaurant controller.

Write the decision request so the reviewer can respond without rebuilding the file. Include the amount, deadline, affected period, relevant source links, observed difference, available options, and operational consequence of waiting. Keep the response with the same workpaper. An approval in a private chat is hard to retrieve later; move the decision into the authorized record system.

Access should match the task. Use named accounts, multifactor authentication, and read-only or limited permissions where possible. Keep payment release, bank-detail changes, credit approval, journal posting, period locking, and deletion rights separate from preparation. Review access when the person, client, project, or system assignment changes.

## Review the work in both directions

Trace a sample from source records into the schedule to test completeness. Then trace a sample from the schedule back to original evidence to test validity. Reperform large, unusual, manual, old, and post-cutoff items. Review zero-value and offsetting pairs because equal debits and credits can hide duplicate or misdirected activity.

The reviewer should confirm the population definition, source control totals, reconciliation formula, exception ownership, proposed entries, and decisions made. Review notes need a question, owner, date, and closure evidence. Do not erase the first answer when it changes; preserve enough history to show how the final treatment was reached.

Track a small set of operational measures: population count, matched value, unmatched value, oldest exception, items returned for correction, and percentage reviewed by deadline. These are workflow signals, not promises of financial performance. If the same exception repeats, improve the intake form, source export, naming convention, or approval path before asking the preparer to move faster.

## Close the period without hiding open items

The handoff package should include untouched exports, the reconciliation, the evidence index, exception log, approved entries, reviewer decisions, and a one-page status summary. State what tied, what did not, which amounts remain exposed, who owns each next action, and when the next review occurs. Carry unresolved items into the next period with their original age and reference.

Link the final workpaper from the close checklist rather than storing it in a personal folder. Use consistent naming such as entity-process-period-version. Restrict sensitive records to the minimum necessary audience and follow the company’s retention policy. A clean archive lets a backup reviewer continue the process without relying on memory.

For help defining the underlying role, see [the relevant Offshore Bookkeepers service](/services/month-end-close-support). If your team needs a Philippines-based bookkeeper to prepare schedules, maintain evidence, and route exceptions while your finance owner keeps approval, [plan the role with Offshore Bookkeepers](/contact-us).
