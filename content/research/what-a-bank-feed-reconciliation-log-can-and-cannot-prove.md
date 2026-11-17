---
title: "What a bank feed reconciliation log can and cannot prove"
description: "A research brief on bank feed reconciliation logs, separating a transaction that was matched from one that was reviewed and cleared."
published: "2026-11-17"
updated: "2026-11-17"
category: "Bank Reconciliation"
type: "research"
featuredImage: "/thumbnails/what-a-bank-feed-reconciliation-log-can-and-cannot-prove.png"
takeaways: ["A matched transaction is not a reviewed transaction.", "Separate the feed import, the match, the review, and the clearing entry.", "Record the unresolved items and the owner, not only the matched count.", "Use the pattern to fix the rules and the timing, not to rank the bookkeeper."]
sources: [{"name":"U.S. GAO, Standards for Internal Control in the Federal Government","url":"https://www.gao.gov/products/gao-14-704g"},{"name":"NIST, SP 800-53 Rev. 5 Update 1","url":"https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"},{"name":"IRS, Recordkeeping","url":"https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"}]
faqs: [{"question":"Does a zero unmatched balance mean the reconciliation is complete?","answer":"No. A balance can reach zero through a manual adjustment or a duplicate. The review has to show how the items cleared."},{"question":"What should the log record?","answer":"The import date, the matched items, the reviewed items, the unresolved items, and the owner. The count alone is not enough."},{"question":"How often should the log be reviewed?","answer":"At each reconciliation cycle, with a monthly summary of unresolved items and repeated issues."}]
---

A bank feed imports a hundred transactions and the reconciliation shows a zero difference. The bookkeeper marks the account reconciled. A week later a duplicate payment appears, and nobody can say when it was matched or who reviewed it.
A bank feed reconciliation log records the import, the match, the review, and the clearing. It is useful because the feed makes matching look easier than it is. It is also easy to overclaim, because a matched transaction is not a reviewed one.

## What the log can show

The log can show the feed import date, the number of transactions, and the matched count. It can show the items reviewed, the unresolved items, and the clearing entries. It can show who worked the cycle.
Those facts support a review of the reconciliation process. A cluster of manual adjustments may indicate a rule problem. A cluster of unresolved items may indicate a missing statement or a timing issue.

## What the log cannot show

The log cannot show whether a match was correct. It cannot show whether a transaction was reviewed or simply accepted by a rule. It also cannot show whether the balance was forced to zero.
The log cannot prove that the books are accurate. The reconciliation is evidence of a process, not a guarantee. The review and the supporting documents matter.

## Methodology

We reviewed public guidance on internal control, security controls, and recordkeeping, and mapped it to a private reconciliation process. The sources support documentation and review discipline. They do not prescribe a reconciliation standard or a tool.
We tested the model against four common cases: a feed item matched by rule, a manual match, an unresolved item, and a balance forced to zero. The proposed stages are an operating design.

## Separate import, match, and review

Use three states: imported, matched, and reviewed. A rule can match a transaction without a person looking at it. The review is the step that catches the unusual item.
Record the reviewer and the date for the reviewed state. A match without a review is a draft, not a reconciliation. The distinction is the control.

## Record manual adjustments

A manual adjustment is a signal, not a routine step. Record the amount, the reason, the owner, and the approval. A balance that reaches zero through an adjustment needs a note.
If the adjustment is recurring, review the rule behind it. A recurring adjustment may indicate a mapping error or a missing transaction. The pattern is more useful than the individual entry.

## Track the unresolved items

Record each unresolved item, the amount, the age, and the owner. An unresolved item that sits for a month is a different problem from one that clears in a day. The age is the useful measure.
Do not close the cycle with an unresolved item and no owner. A zero balance with an open item is a false comfort. The log should make the open item visible.

## Reconcile the summary to the ledger

Compare the log summary with the ledger and the bank statement. Check the ending balance, the cleared items, and the adjustments. A summary that does not tie to the ledger is not evidence.
Record the date of the comparison and the person who did it. A reconciliation that is only reviewed in the tool may miss a ledger issue. The external tie-out is the check.

## Review the rules periodically

Bank feed rules are useful until they match the wrong thing. Review the rules after a vendor change, a new bank account, or a repeated mismatch. Record the rule and the change.
A rule that is never reviewed becomes a silent assumption. The review should be part of the reconciliation cycle, not a separate project.

## Protect the bank data

The log can include account numbers, amounts, and vendor names. Keep it in the accounting system and limit access to the people who reconcile. Do not circulate a transaction list in a broad channel.
Set a retention period with the business's records policy. Keep enough to support an audit and no more. A reconciliation log that becomes a copy of the bank statement creates risk without adding insight.

## Keep the sample honest

A review of one month and one entity is a check, not a benchmark. Say so in the summary. Include the transaction count and the reconciliation types so the reader can judge the evidence.
A small sample can show a pattern but cannot support a percentage for every entity. Repeat the review before a conclusion is treated as stable, and state the limits in the same document.

## Agree the review threshold

Not every transaction needs the same review. Agree on a threshold above which a transaction gets a manual look. Record the threshold and the reason. A threshold that is too low creates noise, while one that is too high misses the risk.

## Keep the log light enough to use

The reconciliation log should take a minute per item, not a full case file. Record the import, the match, the review, and the adjustment. Leave the bank detail in the accounting system. Review the fields after a month and remove any that nobody used.

## Review the rule changes with the owner

A new bank feed rule changes the control. Record the rule, the reason, and the owner who approved it. Review the rule set after a bank or vendor change. A rule that is added quietly can hide a mismatch.

## Review the cycle timing

Record when the feed arrives, when the reconciliation starts, and when it is reviewed. A short gap between the feed and the review keeps the items fresh. A long gap makes the review harder and the questions older. Report the timing beside the unresolved items. A fast cycle is easier to review, and the items are still familiar to the team.

## Keep the evidence in one place

Link the log to the statement and the ledger tie-out rather than copying them. A reviewer should be able to open the source from the record. Keep the evidence in the accounting system and the log as the index. A short link is enough to make the record reviewable. It also keeps sensitive bank detail out of the log. The reviewer can open the statement from the link and confirm the balance without asking for a copy. That extra step is what makes the log useful in an audit. It also makes the review faster for the next person. That is the point of a good index. It takes a minute to add.

## Bounded pilot

Review one reconciliation cycle for one entity. Record the import, the matches, the reviews, the adjustments, and the unresolved items. Report the open items and the rule changes. Ask a reviewer who did not reconcile to trace three matches to their reviews. If they cannot, the fields need work.

## Limitations

This brief describes an operating review model. It does not establish an accounting standard, a legal obligation, or a measure of accuracy. The cited sources support general control, records, and security principles. Results depend on the completeness of the log and the accuracy of the bank feed.

## Sources

1. [Standards for Internal Control in the Federal Government](https://www.gao.gov/products/gao-14-704g); U.S. Government Accountability Office; checked November 17, 2026.
2. [Security and Privacy Controls for Information Systems and Organizations](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final); National Institute of Standards and Technology; checked November 17, 2026.
3. [Recordkeeping](https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping); Internal Revenue Service; checked November 17, 2026.

## Conclusion

A bank feed reconciliation log shows imports, matches, and reviews as separate stages. It cannot prove that the books are accurate. Used with the ledger tie-out and the unresolved list, it turns a zero balance into real evidence.
For related workflows, see [the duplicate payment review](/research/what-a-duplicate-payment-review-can-and-cannot-prove) and the [bookkeeping services](/services/bookkeeping) overview.