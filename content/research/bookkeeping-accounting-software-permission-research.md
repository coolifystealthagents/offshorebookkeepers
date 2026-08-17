---
title: "Accounting-software permissions for outsourced bookkeeping"
description: "Research on matching bookkeeping access to preparation, review, reconciliation, and reporting duties without granting unnecessary authority."
published: "2026-08-17"
updated: "2026-08-17"
category: "Hiring Controls"
type: "research"
featuredImage: "/thumbnails/controller-review.webp"
takeaways: ["Least privilege starts with a task and ends with a tested permission.", "Report export, journal posting, and payment access are different capabilities.", "Access reviews need an owner, evidence, and a removal trigger."]
sources: [{"name":"NIST SP 800-53 Rev. 5","url":"https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"},{"name":"CISA, Multifactor Authentication","url":"https://www.cisa.gov/secure-our-world/turn-mfa"},{"name":"COSO, Internal Control Integrated Framework","url":"https://www.coso.org/internal-control"},{"name":"U.S. GAO, Standards for Internal Control","url":"https://www.gao.gov/products/gao-14-704g"}]
faqs: [{"question":"Should a bookkeeper have administrator access?","answer":"Only when a documented task requires it and an owner accepts the risk; routine preparation usually needs less access."},{"question":"How often should permissions be reviewed?","answer":"Set a cadence and review after role, system, or employment changes."}]
---
## Research question
How can a business grant an outsourced bookkeeper enough accounting-software access to perform assigned work without creating unnecessary authority? This report translates access-control principles into bookkeeping capabilities.

## Methodology
NIST and CISA provide technical access principles, while COSO and GAO provide internal-control context. The analysis separates capabilities that are often bundled under “bookkeeping access”: viewing source records, importing transactions, preparing journals, posting journals, changing the chart of accounts, exporting reports, managing users, and releasing payments. The evidence does not depend on one software vendor.

## Findings
Least privilege is easier to review when permissions map to named tasks. A preparer may need to attach evidence and draft a journal without changing users. A reconciliation role may need statement access but not payment release. A reporting role may export a report without changing the underlying configuration. These boundaries are not universal; the system's role model and the client's risk profile control the final assignment.

## Review design
An access review should show the user, role, business owner, last review date, and decision. Include dormant accounts and shared logins because a clean active-user list can still hide weak accountability. Multifactor authentication protects account entry, but it does not replace authorization review. Remove access when the assignment ends rather than waiting for the next routine review.

## Limitations and conclusion
Public frameworks describe principles, not a permissions matrix for every accounting application. They do not prove that an outsourced worker is risky by default. The evidence supports a practical conclusion: write the role boundary first, map it to system capabilities, and retain review evidence. Payment authorization, user administration, and material accounting judgment should remain with designated client owners unless governance explicitly assigns otherwise.

## Source notes
The report addresses access design for bookkeeping support. It does not replace vendor documentation, security review, or legal requirements.
