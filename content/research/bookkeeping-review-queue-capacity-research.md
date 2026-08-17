---
title: "Review-queue capacity in a bookkeeping support model"
description: "Research on measuring reviewer workload when outsourced bookkeeping preparation feeds a small controller or owner review queue."
published: "2026-08-17"
updated: "2026-08-17"
category: "Scope Benchmarks"
type: "research"
featuredImage: "/thumbnails/finance-dashboard.webp"
takeaways: ["Preparation capacity cannot be judged separately from review capacity.", "Queue age and rework reveal different failure modes.", "A capacity model should use the client's transaction mix rather than a generic volume target."]
sources: [{"name":"BLS, Bookkeeping Clerks","url":"https://www.bls.gov/ooh/office-and-administrative-support/bookkeeping-accounting-and-auditing-clerks.htm"},{"name":"U.S. GAO, Standards for Internal Control","url":"https://www.gao.gov/products/gao-14-704g"},{"name":"PCAOB AS 2201","url":"https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"},{"name":"NIST, Contingency Planning Guide","url":"https://csrc.nist.gov/pubs/sp/800/34/r1/final"}]
faqs: [{"question":"Is transaction count enough for capacity planning?","answer":"No. Complexity, evidence quality, exception rate, and review effort also affect capacity."},{"question":"What should a buyer measure first?","answer":"Start with queue age, items returned for rework, and reviewer hours by transaction class."}]
---
## Research question
What should a business measure before adding outsourced bookkeeping preparation to an existing review queue? The central issue is system capacity: more prepared work can increase delay if review remains the bottleneck.

## Method and evidence scope
The sources provide occupation context and control expectations, not a staffing ratio. This report proposes a four-week baseline using counts by transaction class, preparation time, review time, queue age, returns, and unresolved exceptions. Separate routine items from journals, payroll, intercompany entries, and unusual transactions because their review burden differs.

## Findings
The same number of transactions can create very different queues. A clean bank-feed match may take little review, while a manual accrual needs evidence and judgment. Queue age shows waiting; rework shows inadequate first-pass quality or unclear review criteria. Reviewer hours show whether the constraint sits after preparation. A dashboard that reports only completed entries can reward output while the review queue grows.

## Implications for offshore support
An outsourced bookkeeping role should include the expected evidence package and an escalation route for exceptions. The client should define who reviews and how much protected time exists. If no reviewer owns the queue, adding a preparer may shift unfinished work downstream rather than improve close reliability.

## Limitations and conclusion
The sample design is not a universal benchmark and cannot predict capacity from headcount alone. Public sources do not establish a standard bookkeeper-to-reviewer ratio. They support a narrower conclusion: capacity planning must include review time, transaction mix, and rework. A buyer should measure its queue before setting a volume expectation for a remote bookkeeping role.

## Source notes
The report is about operating measurement, not a promise of staffing output.
