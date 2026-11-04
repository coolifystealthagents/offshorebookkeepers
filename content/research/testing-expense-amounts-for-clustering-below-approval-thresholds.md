---
title: "Testing expense amounts for clustering below approval thresholds"
description: "A source-backed screening protocol for expense amounts that cluster just below an approval limit, with explicit limits on what the pattern can prove."
published: "2026-11-04"
updated: "2026-11-04"
category: "Payables & Expenses"
type: "research"
featuredImage: "/thumbnails/november-04/testing-expense-amounts-for-clustering-below-approval-thresholds.webp"
takeaways: ["Define the approval threshold, the covered expense population, and the clustering window before looking at the data.", "A cluster below a limit is a review signal, not evidence of intent or a confirmed control failure.", "Report candidate counts, window sensitivity, and disposition reasons so the measure survives scrutiny."]
sources: [{"name": "ACFE, Occupational Fraud 2024: A Report to the Nations", "url": "https://www.acfe.com/fraud-resources/report-to-the-nations"}, {"name": "U.S. GAO, Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g"}, {"name": "COSO, Internal Control Integrated Framework", "url": "https://www.coso.org/internal-control"}, {"name": "PCAOB, AS 2201: An Audit of Internal Control Over Financial Reporting", "url": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"}, {"name": "IRS, Publication 463: Travel, Gift, and Car Expenses", "url": "https://www.irs.gov/publications/p463"}, {"name": "NIST, Security and Privacy Controls, SP 800-53 Rev. 5", "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"}]
sourceNotes: [{"claim": "The ACFE report provides a general taxonomy of occupational fraud that includes expense reimbursement schemes, which is the context for screening expense amounts rather than a basis for concluding intent.", "sourceUrls": ["https://www.acfe.com/fraud-resources/report-to-the-nations"]}, {"claim": "GAO internal-control standards support assigned authority, documented approvals, and reviewable records, which is why the approval threshold must be explicit.", "sourceUrls": ["https://www.gao.gov/products/gao-14-704g"]}, {"claim": "COSO's framework supports the separation of a monitoring signal from a control conclusion and the documentation of how exceptions are resolved.", "sourceUrls": ["https://www.coso.org/internal-control"]}, {"claim": "PCAOB AS 2201 discusses the nature and reliability of audit evidence; this protocol borrows only the general evidence-quality principle and does not represent an audit.", "sourceUrls": ["https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"]}, {"claim": "IRS Publication 463 describes substantiation elements for certain expenses, including amount, time, place, and business purpose, which informs the review questions used here.", "sourceUrls": ["https://www.irs.gov/publications/p463"]}, {"claim": "NIST SP 800-53 addresses access control and audit logging, which inform how the approval threshold and the review trail should be preserved.", "sourceUrls": ["https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"]}]
relatedLinks: [["Payables and expense support", "/services/accounts-payable-processing"], ["Review the research library", "/research"]]
faqs: [{"question": "Does clustering below a threshold prove that someone split an expense?", "answer": "No. It shows that amounts are concentrated in a narrow band below a limit. Splitting, policy design, vendor pricing, and ordinary spending can all produce the same shape, so the pattern only justifies a documented review."}, {"question": "What window should be used below the threshold?", "answer": "There is no universal window. Test more than one and report the results together. A narrow window reduces false candidates but may miss deliberate splitting; a wide window produces more candidates and more explanation work."}, {"question": "Should the analysis name individual employees?", "answer": "Only if the client has a written policy for person-level monitoring and the population is large enough to support it. The default output is a claim-level and vendor-level queue for a named reviewer."}]
---

## Research question and scope

This protocol asks a narrow operational question: in a defined expense population, are amounts concentrated in a narrow band just below an approval threshold, and if so, which claims should a reviewer examine first? It does not ask whether a claimant intended to avoid approval, and it does not produce a finding of fraud. The output is a set of candidates with the threshold, the window, the claim details, and the reason each candidate was selected.

The unit is one expense claim line or one invoice line, depending on the population being tested. Employee reimbursements, corporate-card transactions, and vendor invoices each have their own approval rules, so they should be screened separately. Mixing populations with different thresholds produces a blended pattern that is hard to interpret and easy to misreport.

The scope is one entity and one period, or a set of periods that use the same threshold. If the approval limit changed during the period, split the data at the change date and screen each segment against the rule that applied. A threshold change in the middle of a quarter can create an artificial cluster that has nothing to do with claimant behavior.

The protocol assumes the team has the approval policy, the transaction population, and a stable claim identifier. If the policy is oral or the threshold varies by manager without documentation, the first task is to write the rule down. Screening against an ambiguous limit produces candidates that cannot be defended.

## Why amount clustering is a control question

Approval thresholds exist to route spending to someone with the authority to review it. The control depends on the threshold being applied consistently and on transactions above it actually reaching the approver. A cluster of amounts just below the limit is a reason to test both assumptions: that the limit is being applied as written, and that the approval trail is complete.

The ACFE's Report to the Nations is a standard public reference for the taxonomy of occupational fraud, including expense reimbursement schemes. The useful lesson for a bookkeeping team is structural rather than statistical. Expense claims combine a document, a payment, and an approval, and a threshold test touches only the approval side. A receipt can be genuine while the approval path is wrong, and an approval can be properly recorded while the underlying expense is misclassified.

GAO's internal-control standards and COSO's framework support the broader design: assign authority, document approvals, and keep records reviewable. They do not prescribe a clustering test or a universal threshold. They support making the rule explicit and the exception handling attributable, which is what this protocol tries to do.

PCAOB AS 2201's discussion of evidence reliability is written for audits, but the general point applies to bookkeeping review: evidence from an independent source, or evidence that can be corroborated, is stronger than an internal label. A cluster is an internal pattern. It becomes useful only when it is tied to the approval record, the source document, and the payment line.

## Observable signals and their limits

The first signal is the raw count of transactions in a band below the threshold. If the approval limit is 5,000 and 40 percent of claims fall between 4,500 and 4,999, that concentration deserves a question. The count alone does not explain why the shape exists, but it identifies where to look.

The second signal is the distance from the threshold. A cluster within 1 percent of the limit is more striking than one spread across the last 10 percent. Report the distribution rather than a single cutoff, because a hard boundary can make an ordinary spread look like a spike.

The third signal is repetition by claimant, vendor, or approver. One claimant with several amounts just below the limit is a different question from a whole department with the same pattern. Vendor pricing can also create clustering: a supplier may price a standard service just under a client's approval limit because that is the market segment it serves.

The fourth signal is the approval path. For each candidate, check who approved it, whether the approver had authority for that amount, and whether the approval happened before the expense was incurred or reimbursed. A cluster with a complete approval trail is a weaker candidate than a cluster with missing or late approvals.

The fifth signal is the relationship to policy. Some policies exclude certain categories from the threshold, allow split invoices, or permit emergency approval after the fact. A candidate that is fully explained by a written policy exception should be cleared with that reason, not quietly dropped.

Each signal has a limit. Clustering can arise from round-number pricing, budget targets, reimbursement caps, or the way a form validates input. None of the signals establishes intent. The protocol's value is that it makes the review question specific and the disposition auditable.

## A reproducible screening procedure

**Step 1: Fix the rule.** Obtain the written approval policy for the period. Record the threshold amount, the currency, the expense categories covered, the exceptions, and the effective dates. If multiple thresholds apply, define which one governs each population.

**Step 2: Freeze the population.** Extract every claim line or invoice line in scope. Record the claim identifier, entity, date, amount, currency, category, claimant or vendor, approver, approval date, and payment date. State exclusions before screening, such as reversed claims or claims outside the policy.

**Step 3: Normalize the amounts.** Convert to the policy currency using a documented rate and date. Remove tax or tip only if the policy threshold is defined on a net basis; otherwise keep the gross amount. Record the normalization rule so another analyst can reproduce it.

**Step 4: Choose the window or windows.** Test at least two windows, such as 1 percent and 5 percent below the threshold. Report both. A candidate that appears only in the wider window is weaker evidence than one that appears in both, but neither is a conclusion.

**Step 5: Attach the approval evidence.** For each candidate, pull the approval record, the approver's authority limit, and the timestamp. Compare the approved amount with the claimed amount. A claim approved at a lower amount but reimbursed at a higher one is a separate exception.

**Step 6: Route to a reviewer.** The bookkeeper prepares the candidate packet: claim details, amount, distance from the threshold, approval record, source document, and a short statement of the observed pattern. The reviewer, not the bookkeeper, decides whether the claim is acceptable, needs a policy exception, or should be escalated.

**Step 7: Record the disposition.** Use a small set of codes: within policy with valid approval; split purchase documented; vendor pricing explains the amount; approval missing or late; amount changed after approval; referred to the client's compliance owner; unable to determine. Each code needs a definition and an example.

## Measures and reporting

The primary measure is the share of in-scope transactions that fall inside the chosen window below the threshold, reported separately for each window and each population. Always report the denominator and the policy version. A percentage without those two facts is not reproducible.

Supporting measures should include the number of candidates reviewed, the number cleared with a reason, the number with missing or late approval, the number escalated, and the median age of open candidates. Break the results down by entity and by expense category, but suppress cells too small to support a stable comparison.

Sensitivity matters. If the candidate rate moves sharply when the window changes from 1 percent to 5 percent, the pattern is not a stable feature of the population. Report that sensitivity rather than choosing the window that produces the most interesting number.

Do not publish a person-level rate unless the client has a written monitoring policy and the population supports it. A single claim just below a limit is common. A repeated pattern across many claims is a different conversation, and it belongs with the client's compliance or HR owner, not in a bookkeeping dashboard.

## Disposition, escalation, and limitations

Clustering analysis cannot establish intent, and it cannot prove that a transaction was split. It also cannot detect a claimant who stays far below the threshold or one who obtains approval through a different route. The method observes amounts and approval records, not motives.

The analysis also depends on the quality of the approval data. If approvals are recorded in email rather than in the accounting system, the team may need to sample and read the messages. If the policy threshold is applied inconsistently by different managers, the cluster may reflect managerial practice rather than claimant behavior.

The decision this protocol supports is a review decision: which claims to examine, which to clear, and which to escalate. It does not replace the client's expense policy, employment process, or professional advice. Used with that boundary, a threshold-clustering screen is a modest, repeatable control that makes the approval rule visible and the exceptions explainable.
