---
title: "A bank feed exception queue that survives a busy close"
description: "A practical queue and review routine for bank feed exceptions during a close, so a bookkeeping team can clear the list without guessing at the cause."
published: "2026-11-10"
updated: "2026-11-10"
category: "Bank Reconciliation"
type: "blog"
featuredImage: "/thumbnails/a-bank-feed-exception-queue-that-survives-a-busy-close.png"
takeaways: ["Give every feed exception an owner, a cause code, and a next action before the close deadline.", "Separate a feed outage from a coding problem and from a missing document.", "Keep a dated queue with an age bucket so old items cannot hide in the total.", "Clear the queue with a written disposition, not a change of color."]
sources: [{"name":"U.S. GAO, Standards for Internal Control in the Federal Government","url":"https://www.gao.gov/products/gao-14-704g"},{"name":"NIST, SP 800-53 Rev. 5 Update 1","url":"https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"},{"name":"IRS, Recordkeeping","url":"https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"}]
relatedLinks: [["Bank reconciliation support","/services/bank-reconciliation"],["Close management","/services/management-reporting-support"]]
faqs: [["What counts as a bank feed exception?","A transaction that is missing, duplicated, unmatched, or coded incorrectly in the feed. The queue should record which one it is."],["Who should clear the queue?","The bookkeeper owns the queue and the evidence. The owner approves write-offs or reclassifications above a stated limit."],["How often should the queue be reviewed?","At least weekly and daily during a close. The review should check age, owner, and cause, not only the count."]]
---

A bank feed is supposed to remove manual entry. In practice, it produces its own list of exceptions: a transaction that never arrived, a duplicate, a payment with no matching invoice, or a line coded to the wrong account. During a close, that list competes with every other task.

A bank feed exception queue gives the list a home, an owner, and a deadline. It does not make the feed perfect. It makes the exceptions visible and reviewable, which is what a close needs when the team is under pressure.

## Define the queue's scope

Write down what belongs in the queue: missing transactions, duplicates, unmatched payments, coding errors, and feed outages. Decide what does not belong, such as routine accruals or items handled by another team.

A clear scope keeps the queue from absorbing every problem in the close. The bookkeeper should be able to look at an item and know whether it belongs.

## Record the source and the time

For each exception, record the account, the bank, the date, the amount, the reference, and the time the item was noticed. If the item came from a statement review, note the statement date.

The timestamp matters because the feed can change. A transaction that is missing at 9 a.m. may appear at noon. The queue should show whether the item was checked again before it was escalated.

## Give each item a cause code

Use a short set of codes: feed delay, duplicate, unmatched, missing document, coding error, and bank error. The code tells the owner what to look for and keeps the queue sortable.

Do not use a single "exception" code. The causes have different fixes, and a mixed list hides the pattern. A short code with a note is enough.

## Assign an owner and a due date

Every item needs a named owner and a date. The owner may be the bookkeeper, a client contact, or the bank. The due date should reflect the close calendar, not a general hope.

Items that cross a close deadline should be escalated with a note. An item that is old enough to affect the financial statements should not sit in a routine queue.

## Separate feed failures from client failures

A feed outage is a technical problem. A missing receipt is a client problem. A coding error is a process problem. The queue should say which, because the escalation path is different.

If the bank is the cause, the bookkeeper should contact the bank and record the case number. If the client is the cause, the request should go to the client contact with a specific list. If the process is the cause, the fix belongs in the close review.

## Review the queue during the close

During a close, review the queue daily. Check the count, the age, the owners, and the items that could affect the statements. A short stand-up is enough if the queue is current.

After the close, review the causes and the time to clear. A recurring feed delay may need a different connection. A recurring coding error may need a different rule.

## Close with a written disposition

Close an item only when the disposition is recorded: matched, reclassified, written off with approval, or referred to the bank. The note should say who decided and when.

Do not close an item by relabeling it or moving it to another tab. Those actions hide the item without recording the decision. The queue should be able to explain why an item is no longer open.

## Protect the data

The queue contains account numbers, amounts, and client details. Keep it in the approved system and limit access to the people who need it. Do not share a full list in a broad channel.

Set a retention period with the client's records policy. A queue kept indefinitely creates risk without adding insight.

## Decide what to do with a recurring exception

A recurring exception is a process signal. If the same bank delay appears every month, the connection or the timing may need a change. If the same coding error appears every month, the rule or the chart of accounts may need a change.

Do not close the same exception repeatedly without asking why it keeps happening. The queue is a record of the pattern, and the review is where the pattern becomes a fix.

## Key takeaways

- Define the queue's scope and record the source, time, and cause for each item.
- Assign an owner and a close-aware due date, and escalate items that affect the statements.
- Separate feed, client, and process causes so each gets the right fix.
- Close with a written disposition and review the causes after the close.

A bank feed exception queue is a small control that protects a busy close. It does not eliminate the exceptions, but it keeps them from becoming surprises. That is what lets the team close on time with a record it can defend, even when the feed changes late in the cycle.

For related workflows, see [the vendor payment hold routine](/blog/a-vendor-payment-hold-that-survives-a-bank-detail-change) and the [bank reconciliation services](/services) overview.
