---
title: "A bank feed duplicate check before the monthly reconciliation"
description: "A short duplicate check for bank feeds before reconciliation, so a transaction is not counted twice or matched to the wrong statement line."
published: "2026-11-19"
updated: "2026-11-19"
category: "Bank Reconciliation"
type: "blog"
featuredImage: "/thumbnails/a-bank-feed-duplicate-check-before-the-monthly-reconciliation.png"
takeaways: ["Compare imported transactions against the prior period before reconciling.", "Match on date, amount, and counterparty, not on date alone.", "Record the resolution for each suspected duplicate.", "Review rules that import or re-import transactions after a connection reset."]
sources: [{"name":"U.S. GAO, Standards for Internal Control in the Federal Government","url":"https://www.gao.gov/products/gao-14-704g"},{"name":"IRS, Recordkeeping","url":"https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"}]
relatedLinks: [["Bookkeeping support","/services/bookkeeping"],["Bank reconciliation","/services/bank-reconciliation"]]
faqs: [["Why do duplicates appear in a bank feed?","A connection reset, an edited rule, or a manual import can bring the same transaction in twice. The feed does not always mark the second copy."],["Should a duplicate be deleted?","Not before it is checked against the statement. Record the pair, confirm which line is valid, then remove or exclude the copy under the client's policy."],["How often should the check run?","Before each reconciliation, with a quick review of any import-rule change during the month."]]
---

A bank feed imports a payment twice after a connection reset. The bookkeeper reconciles the statement, sees two identical amounts, and matches one while leaving the other as an unexplained item. The reconciliation balances, and the ledger is still wrong.

A duplicate check before reconciliation keeps the feed clean enough to trust. It is a short pass, and it catches the errors that are easiest to miss because they look like normal transactions.

## Compare the feed to the prior period

Before matching anything, compare the imported transactions against the prior period. A duplicate often appears near the boundary, where a re-import brings in transactions that were already recorded.

Sort by date and amount, then scan for adjacent pairs. This is not a full audit; it is a quick visual check that catches the most common duplication pattern.

## Match on three fields

Match on date, amount, and counterparty. A date-only match produces false positives when a client pays two invoices on the same day for the same amount. A three-field match is more reliable.

Where the description is generic, use the statement line and the invoice reference. Record the fields used so the next bookkeeper can repeat the check without guessing.

## Check the import rules

Most duplicates come from rules, not from the bank. A rule that re-imports a date range, or a manual import after a failed connection, can create copies without warning.

Review the import rules monthly and note any change. If a rule was edited, run the duplicate check on the affected period before reconciling.

## Record the resolution

For each suspected duplicate, record the transaction pair, the evidence, and the decision. "Excluded the second copy; statement line matched to invoice 1042" is enough.

Do not delete a transaction until the statement confirms which line is valid. A deletion made too early removes the evidence and makes the reconciliation harder to explain.

## Watch for split transactions

A payment can appear as two lines when a bank splits a fee from the main amount. That is not a duplicate, and treating it as one will understate the payment.

Check the total against the expected amount. If the two lines sum to the payment plus a fee, record the split and continue. The distinction matters at month end.

## Keep the check short

A duplicate check that takes an hour will be skipped in a busy close. Keep it to the sorted scan, the three-field match, the rule review, and the recorded resolution.

The goal is not to prove the feed is perfect. It is to make the reconciliation start from a clean list, so the remaining differences are real and worth investigating.

## When the feed includes a transfer

A transfer between the client's own accounts often appears twice: once as an outflow and once as an inflow. That is not a duplicate, and matching both sides is part of the reconciliation.

Record the transfer pair and confirm it appears on both statements. If only one side is imported, the reconciliation will show an unexplained difference that looks like a missing transaction.

## Checking credit card feeds

Credit card feeds duplicate in the same way as bank feeds, and the copy is often created when a card is reconnected after a failed sync. Run the same three-field check against the card account.

Card refunds deserve their own look. A refund and a charge for the same amount can appear as a pair and are easy to misread as a duplicate. Check the sign and the description before acting.

## When the pair is unclear

If two lines look identical but the statement shows only one, do not guess. Mark both as under review, pull the statement line, and check the invoice or receipt behind the payment.

Record the question and the person who can answer it. An unresolved pair that stays in the reconciliation is better than a deletion that removes the evidence.

## Keep a short log for the reviewer

A duplicate log with the transaction pair, the evidence, and the resolution takes a few lines. It gives the reviewer a clear trail and makes the monthly check repeatable.

Attach the log to the reconciliation file. The next bookkeeper should be able to see what was checked without reconstructing it from memory.

## Year-end duplicate review

At year end, run the check across the full year rather than the month. A duplicate that was excluded in one month can reappear when statements are re-imported for the annual review.

Record the year-end pass separately. It is a different scope, and the log should show that the full period was covered.

## Review the pattern monthly

Count the duplicates found and the rules that caused them. A recurring cause is a process fix, not a training issue, and the count shows whether the fix worked.

Share the count with the client in the monthly summary. It takes one line, and it demonstrates that the reconciliation starts with a controlled feed rather than an assumption.
