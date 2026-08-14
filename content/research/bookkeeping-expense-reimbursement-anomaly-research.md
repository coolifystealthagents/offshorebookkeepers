---
title: "Expense reimbursements: evidence for reviewing unusual claims"
description: "Research on claim populations, duplicate indicators, policy exceptions, and reviewer ownership in employee reimbursement records."
published: "2026-08-14"
updated: "2026-08-14"
category: "Expense Evidence"
type: "research"
featuredImage: "/thumbnails/bookkeeping-employee-reimbursement-workflow.webp"
takeaways: ["An anomaly is a prompt for review, not a finding of misconduct.", "Duplicate tests need stable fields and an exception owner.", "Policy exceptions should remain visible in the approval trail."]
sources: [{"name":"ACFE, Occupational Fraud 2024","url":"https://www.acfe.com/report-to-the-nations/2024/"},{"name":"GAO, Standards for Internal Control","url":"https://www.gao.gov/products/gao-14-704g"},{"name":"IRS, Recordkeeping","url":"https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"},{"name":"PCAOB AS 2401","url":"https://pcaobus.org/oversight/standards/auditing-standards/details/AS2401"},{"name":"NIST SP 800-53 Rev. 5","url":"https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"},{"name":"COSO, Internal Control Framework","url":"https://www.coso.org/internal-control"},{"name":"CISA, Secure by Design","url":"https://www.cisa.gov/securebydesign"},{"name":"PCAOB AS 1215","url":"https://pcaobus.org/oversight/standards/auditing-standards/details/AS1215"},{"name":"SBA, Manage Your Business","url":"https://www.sba.gov/business-guide/manage-your-business"},{"name":"SEC, Accounting and Auditing","url":"https://www.sec.gov/page/accounting-and-auditing"}]
relatedLinks: [["/research/bookkeeping-travel-expense-evidence-research","/research/bookkeeping-expense-accrual-evidence-research"]]
faqs: [{"question":"What makes a duplicate signal useful?","answer":"Use stable fields such as employee, date, amount, merchant, and receipt reference, then assign a human review owner."},{"question":"Should every exception be rejected?","answer":"No. An exception should be documented and approved under the entity’s policy."}]
---
## Research question
This study asks how a bookkeeping team can identify reimbursement claims that deserve review without labeling an employee or claim fraudulent. The unit is one submitted claim within a stated period, with claimant, amount, currency, merchant, date, purpose, receipt status, approver, and payment status. The research focuses on evidence quality and bounded triage. It does not investigate people, determine intent, or replace the finance owner’s judgment.

## Population design
Start with a complete claim population, including paid, rejected, withdrawn, pending, and policy-exception claims. Excluding rejected claims can hide repeated attempts; excluding pending claims removes current risk from the view. Record the extraction date, entity, currency, and whether company-card transactions are included. Separate reimbursable expense from payroll correction, petty cash, and supplier invoice activity. Similar-looking populations answer different questions, so the report should never present them as one percentage without a bridge.

## Duplicate indicators
Duplicate testing can compare claimant, merchant, date, amount, currency, receipt identifier, and business purpose. Exact matches are easy to find but can miss split claims, altered dates, foreign-currency conversion, or a receipt reused with different descriptions. Near matches are more useful when they are explainable: a conference meal may legitimately have several claims, while the same receipt number attached to two payees requires review. Preserve the match rule and the records compared. A rule that cannot be explained to a reviewer is not a durable control.

## Policy and approval
The evidence trail should show policy version, claim submission, receipt or permitted substitute, approver, exception reason, and payment. Approval proves that an authorized person made a decision; it does not prove that the underlying transaction was business-related. When a manager approves a claim for a direct report, note the relationship if the policy treats it as relevant. Keep delegated approvals and after-the-fact approvals distinct. This allows a later reviewer to understand the control path without guessing from an approval timestamp.

## Review measures
Report claims by status, claimant, merchant, expense class, amount band, and days from submission to payment. Use rates with denominators and identify small cells. Track missing receipts, duplicate candidates, policy exceptions, claims paid before approval, and claims changed after approval. A rise in exceptions can indicate better detection rather than worse behavior. A fall can indicate a quieter period or weaker documentation. Trend metrics should therefore sit beside sampling notes and system-change dates.

## Escalation boundaries
Bookkeeping support can assemble evidence, run documented comparisons, request missing records, and route exceptions. The owner decides whether to reimburse, recover, suspend a policy exception, or investigate. Do not infer intent from a high amount, weekend date, round number, or repeated merchant alone. Those are review signals with legitimate explanations. Keep sensitive personnel information limited to the people who need it and retain the least information needed for the decision.

## Interpretation
The strongest finding is procedural: anomaly review improves when the population is complete, the comparison fields are explicit, and exception ownership is visible. A dashboard without those features can create false confidence. Conversely, a modest spreadsheet with preserved source references can support a defensible review. This evidence model is relevant to remote bookkeeping because preparation, comparison, and escalation can be separated while the employment and policy decision remains with the client.

## Limitations
No public source supplies a universal duplicate threshold or a reliable fraud score. Employee behavior, travel patterns, currency, and policy vary. Statistical flags can produce both false positives and false negatives, and a reimbursement record may not contain enough context to assess business purpose. This study does not recommend automated denial, employee surveillance, or disciplinary action. Any investigation should follow applicable law and the entity’s approved process.

## Conclusion
Reviewable reimbursement records connect each claim to its population, evidence, approval, and disposition. The practical recommendation is to preserve the rule that created an exception and the owner who resolved it. That makes the bookkeeping record useful for monthly close and later review without turning an indicator into an accusation.

## Testing without overclaiming
An anomaly screen should be reproducible. Preserve the population date, fields used, duplicate key, tolerance, and exclusions. Compare claimant, amount, date, merchant, project, currency, and approval reference where those fields exist. A repeated amount may be a legitimate installment; a different amount may still be a duplicate if the original was split. The screen identifies records for review and does not establish intent, misconduct, or even an accounting error.

Use separate tests for policy exceptions and data-quality exceptions. A missing receipt is an evidence issue; a receipt that does not identify the business purpose may require an owner’s judgment; a claim outside an approved category is a policy issue. Combining these into one risk score can hide the reason for escalation. Each flagged item should show the rule triggered, evidence requested, reviewer, response, and final disposition.

## Decision boundaries
Access to reimbursement records should be limited to the people who need the financial evidence. Avoid copying unnecessary personal details into a review register, and retain the source document according to the organization’s policy. A remote preparer can reconcile claim totals and identify missing support, but approval, disciplinary action, and policy interpretation belong to authorized management.

Measure the screen by reviewed population, confirmed duplicates, unresolved items, average age, and repeat causes. Do not report the number of flags as the number of losses. A higher flag count can mean better coverage or a changed rule. Trend the categories only after the population and method remain stable enough for comparison.

## Reproducibility check
Run the same anomaly test on a defined period and retain its output, even when no flags result. A later reviewer can then determine whether the population, field completeness, and rule changed. Review a sample of clear transactions as well as flagged ones to identify false negatives and understand normal variation. Record the reason each flag was cleared or escalated, not merely the final status. This evidence supports a fair control conversation and helps distinguish incomplete documentation from a suspicious pattern. It does not establish intent, loss, or policy breach without authorized investigation.

## Review conclusion in practice
An anomaly report should make a flagged record understandable without exposing more personal information than needed. Show the rule, transaction identifier, amount, period, evidence state, and disposition. Keep the source receipt in the approved location and link to it by a controlled reference. If a rule changes, mark the boundary between periods rather than restating history under the new rule. That gives management a fair trend and lets the finance owner decide whether a policy update, training response, recovery action, or no further action is appropriate. The result is a reviewable control signal, not a conclusion about a person.

## Additional limitation
Detection quality depends on field completeness and policy stability. Missing merchant or approval data can suppress a rule, while a new integration can increase flags without increasing risk. Treat trend changes as prompts to inspect method and population before drawing a behavioral conclusion. That qualification is necessary for a fair review record.

## Method boundary
The review record should distinguish an automated indicator from a human disposition. Preserve the query result, evidence reviewed, and reason for closure. A cleared flag is not proof that the rule was wrong; it is evidence that the authorized reviewer examined that record under the stated policy. This distinction keeps detection useful without overstating what the data can show.

## Source notes
Keep the test definition with the review result, including the date of the population and the rule version. If policy or system fields change, start a new comparison period rather than implying that flag rates are directly comparable.
Sources provide fraud-risk, internal-control, recordkeeping, audit, and access context. They do not establish a company reimbursement policy.
