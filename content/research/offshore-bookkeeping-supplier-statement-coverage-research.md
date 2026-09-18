---
title: "A protocol for measuring supplier-statement coverage"
description: "How to define the eligible supplier population, measure statement receipt and usability, and interpret missing statements without claiming ledger completeness."
published: "2026-09-03"
updated: "2026-09-17"
category: "Accounts Payable Research"
type: "research"
featuredImage: "/thumbnails/accounts-payable-invoice-control-benchmarks.webp"
takeaways: ["Freeze the eligible supplier-period population before counting statements received.","Treat a missing statement as an evidence gap and a received statement as evidence to evaluate, not proof that accounts payable is complete.","Keep comparison work with the preparer while authorized finance owners decide adjustments, disputes, and payments."]
sources: [{"name":"PCAOB AS 1105, Audit Evidence","url":"https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105"},{"name":"PCAOB AS 2310, The Confirmation Process","url":"https://pcaobus.org/oversight/standards/auditing-standards/details/AS2310"},{"name":"U.S. GAO, Standards for Internal Control in the Federal Government (GAO-14-704G)","url":"https://www.gao.gov/products/gao-14-704g"}]
sourceNotes: [{"claim":"PCAOB AS 1105 states, in an audit context, that evidence reliability depends on its nature, source, and circumstances and that evidence from a knowledgeable independent source may be more reliable. That supports evaluating a supplier statement rather than treating receipt alone as conclusive.","sourceUrls":["https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105"]},{"claim":"PCAOB AS 2310 defines an external confirmation as a direct written response to the auditor and requires auditor control over confirmation requests and responses. A statement obtained through an ordinary bookkeeping channel is not automatically an auditor-controlled confirmation; this brief measures statement coverage, not audit confirmation coverage.","sourceUrls":["https://pcaobus.org/oversight/standards/auditing-standards/details/AS2310"]},{"claim":"GAO-14-704G Principles 10, 12, and 13 address control activities, documented responsibility, and quality information. They support a frozen population and traceable exception process but do not require businesses to collect supplier statements or set a coverage target.","sourceUrls":["https://www.gao.gov/products/gao-14-704g"]}]
faqs: [{"question":"Does a supplier statement prove accounts payable is complete?","answer":"No. Its usefulness depends on the supplier identity, covered period, source, and contents, and suppliers may omit disputed or recent items."},{"question":"What does a missing statement mean?","answer":"It means the planned evidence was unavailable at the cutoff. Record the reason and any approved alternative evidence without treating absence alone as a ledger error."}]
---
Published September 3, 2026; updated September 17, 2026. This brief proposes a completeness-review workflow. It uses no client ledger, supplier document, controlled trial, or representative sample and therefore reports no coverage benchmark or detection rate.

## Define who was eligible to provide a statement

Coverage cannot be calculated from the documents that happened to arrive. Freeze a supplier-period population from a dated accounts-payable extract using a written rule, such as vendors with activity or an open balance during the period. Record entity, vendor ID, period, activity, closing balance, whether a statement is expected, and the responsible contact.

Separately identify intercompany counterparties, employee reimbursements, card providers, one-time payees, or other groups that use a different evidence process. Preserve the unaltered export, filter logic, extraction time, row count, and control total. Adding only suppliers that sent statements would create a circular denominator.

## Distinguish receipt, usability, and confirmation

Track statements requested, received by cutoff, and usable for the defined comparison as separate states. A usable document should identify the supplier, covered period, and enough transaction or balance detail for the procedure. Record how it was obtained and any authenticity or completeness concern.

PCAOB AS 1105 supplies an audit-context principle: reliability varies with source, nature, and circumstances. PCAOB AS 2310 draws a further boundary around auditor-controlled external confirmations. An emailed or portal statement collected in routine bookkeeping may be useful external evidence, but it is not automatically a confirmation under that standard. This protocol makes no audit claim.

## Compare movements, not only ending balances

For each usable statement, compare supplier identity, statement date, opening balance, invoices, credit notes, payments, adjustments, and closing balance with the ledger. Preserve gross movements so offsetting differences are visible. Link every discrepancy to the statement line and ledger reference.

Use observable categories such as cutoff, missing invoice, missing credit, unapplied payment, duplicate, disputed charge, entity mismatch, currency issue, and unresolved. Do not force an unexplained item into a timing category. A preparer can perform the documented comparison; an authorized finance owner decides whether to post an entry, accept a credit, dispute a charge, or release payment.

## Report a chain of coverage measures

Use the frozen eligible supplier-period count as the denominator and show, in sequence, expected statements, requests sent, documents received, usable documents, comparisons completed, differences identified, and owner decisions completed. Also report request age and unresolved counts where timestamps are reliable. Each measure needs its own numerator rather than one composite percentage.

A higher usable-statement share may create more opportunity to observe differences, but this article does not claim that collection causes a more complete ledger. Agreement with statements also cannot prove completeness because documents may omit transactions, use another cutoff, or contain errors.

## Give every missing document a status

Reason codes can include supplier does not issue statements, contact unavailable, portal access unavailable, request outstanding, received after cutoff, no longer eligible, or approved alternative evidence used. Retain follow-ups under the supplier-period ID. Missing evidence is a queue condition, not proof that a liability exists or does not exist.

GAO's Green Book supports assigned control responsibility and quality information in its government-control setting; it does not prescribe supplier-statement collection. The accounts-payable owner should approve eligibility and alternatives, and a second reviewer should retest samples of included and excluded suppliers plus selected comparisons.

## Limits on comparison

Supplier populations differ by industry, payment channel, entity structure, and system design. Statements can be unavailable, incomplete, altered, or prepared to different dates. Repeated supplier-period observations are related, small populations can exaggerate rare outcomes, and a coverage percentage says nothing by itself about monetary exposure.

A report should disclose the eligibility rule, cutoff, statement expectation, covered entities and systems, acquisition channels, usable-document rule, alternatives, unresolved differences, and owner decisions. Privacy and access constraints may limit retention. Accounting, tax, legal, and payment decisions remain outside the coverage calculation.
