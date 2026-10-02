---
title: "Freight-claim receivables: an evidence-based reconciliation study"
description: "A research protocol for testing whether freight claims remain traceable from damaged or lost shipments through carrier decisions, cash recovery, write-offs, and the ledger."
published: "2026-10-02"
updated: "2026-10-02"
category: "Inventory bookkeeping"
type: "research"
featuredImage: "/thumbnails/offshore-bookkeeping-inventory-count-reconciliation.webp"
sources: [{"name":"Electronic Code of Federal Regulations, 49 CFR Part 370","url":"https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-370"},{"name":"PCAOB AS 1105: Audit Evidence","url":"https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105"},{"name":"PCAOB AS 1215: Audit Documentation","url":"https://pcaobus.org/oversight/standards/auditing-standards/details/AS1215"},{"name":"IRS Publication 583: Starting a Business and Keeping Records","url":"https://www.irs.gov/publications/p583"},{"name":"NIST Cybersecurity Framework 2.0","url":"https://www.nist.gov/cyberframework"}]
sourceNotes: [{"claim":"49 CFR Part 370 provides federal rules for processing certain motor-carrier loss and damage claims; applicability to a shipment is a legal determination, not a bookkeeping conclusion.","sourceUrls":["https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-370"]},{"claim":"PCAOB standards discuss sufficient appropriate evidence and audit documentation in PCAOB engagements; this article borrows evidence-design concepts but does not prescribe an audit procedure.","sourceUrls":["https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105","https://pcaobus.org/oversight/standards/auditing-standards/details/AS1215"]},{"claim":"IRS Publication 583 describes records that support business transactions, while NIST CSF 2.0 provides a risk-management framework; neither source determines claim valuation or accounting treatment.","sourceUrls":["https://www.irs.gov/publications/p583","https://www.nist.gov/cyberframework"]}]
takeaways: ["Reconcile claims as individual cases and as a ledger roll-forward; neither view is sufficient alone.","Separate filed, acknowledged, investigated, approved, paid, denied, appealed, and written-off states.","Keep carrier negotiation, legal conclusions, valuation, and write-off approval with authorized client owners."]
relatedLinks: [["Explore inventory and cost data support","/services/inventory-cost-data-support"],["Review accounts receivable support","/services/accounts-receivable-support"],["Browse the research library","/research"]]
faqs: [{"question":"Does an open carrier claim automatically qualify as a receivable?","answer":"No. Recognition and measurement depend on the facts and the accounting framework selected by management. The protocol preserves evidence for that decision."},{"question":"Can a bookkeeper settle or write off a claim?","answer":"Only if the client has expressly granted that authority. Ordinarily the bookkeeper prepares the case file and reconciliation while an authorized owner decides settlement and write-off."},{"question":"Is the study a legal compliance review?","answer":"No. Counsel or another qualified owner must decide which transport rules and contractual terms apply."}]
serviceHandoff: {"href":"/contact-us","label":"Discuss a controlled freight-claim workflow","title":"Make every claim traceable","body":"Define source documents, case states, accounting boundaries, review ownership, and escalation before assigning preparation work."}
---
## Scope and decision boundary

This study defines a testable bookkeeping protocol for freight-claim receivables. It reports no client result, market average, recovery rate, or legal conclusion; management and qualified advisers retain recognition, valuation, contractual, and legal decisions.

## The decision this study supports

A freight-claim balance can look plausible while containing cases that were never filed, duplicate cases created by two teams, carrier credits posted outside accounts receivable, or denials that nobody routed for a write-off decision. The useful question is not simply whether the ledger total agrees with a spreadsheet. It is whether each amount has an identifiable shipment, asserted loss, responsible carrier, current procedural state, expected accounting disposition, and owner.

The unit of analysis should be the claim case, not an invoice line or email. Assign one immutable case identifier when the business first decides to investigate a loss. Link shipment number, bill of lading or equivalent transport record, sales or purchase document, inventory adjustment, photographs or inspection material, carrier correspondence, credit memo, cash receipt, journal entry, and approval. A case may involve several damaged units and several accounting entries, but it should not silently split into competing records.

This protocol tests traceability and workflow integrity. Management still decides whether an asset exists, how uncertainty affects measurement, whether a recovery should offset cost or be presented elsewhere, and when a balance is no longer supportable. Legal counsel decides contractual rights and the applicability of transport law.

## Freeze the claim population

Start with three independent populations: logistics incidents recorded during the period, claims listed in the carrier or third-party portal, and general-ledger activity in freight-claim, carrier-recovery, inventory-loss, and related cash accounts. Preserve untouched exports with report names, parameters, time zone, extraction time, and file hashes. The comparison matters because a ledger-only study cannot find incidents that never reached accounting, while an operations-only study can miss payments posted directly to cash.

Define cutoff events before matching. Useful dates include incident discovery, delivery, claim submission, carrier acknowledgment, information request, approval or denial, appeal, payment, and ledger posting. Do not replace missing event dates with spreadsheet-created dates. Mark them missing. Record whether currency values are source amounts, claimed amounts, carrier-approved amounts, or ledger carrying amounts.

Reconcile the union of the populations. Every logistics incident should be classified as not claimable under an approved rule, pending assessment, ready to file, filed, or closed. Every portal claim should map to one case. Every ledger movement should identify the case or be placed in an explicit unmatched queue. Duplicate identifiers, reused shipment numbers, and one payment covering several cases need documented allocation rules rather than manual netting.

## State model and evidence gates

Use observable states. “Filed” requires the submission record and carrier receipt when available. “Acknowledged” requires the carrier’s case reference. “Under investigation” identifies the outstanding request and due owner. “Approved” records the authorized amount and decision date. “Paid” requires bank evidence or a clearly identified credit applied to an invoice. “Denied” retains the stated reason. “Appealed” records the new submission and clock. “Written off” requires the client’s approval and the corresponding entry.

A status label without its evidence gate fails the test. Likewise, a carrier payment does not prove that the original claimed amount was accepted in full. Split settlements into approved recovery, denied portion, deductible or contractual adjustment, foreign-exchange difference, and unresolved remainder. Keep the carrier’s decision separate from management’s accounting conclusion.

The case table should expose contradictions: paid date without cash reference, approved amount greater than claim amount, denial followed by payment, closed case with nonzero ledger balance, or multiple open cases for one shipment and loss type. These are research observations, not automatic errors. A reviewer evaluates the source trail and records the resolution.

## Roll-forward and aging tests

Build a claim roll-forward by currency: opening carrying amount, plus newly recognized cases, plus approved adjustments, less cash or credits received, less approved write-offs, plus or minus foreign-exchange movement, equals closing carrying amount. Tie the closing amount to the ledger. Then reperform the same bridge from case-level events. A difference between the two bridges identifies incomplete linkage even when the final total happens to agree.

Age operational cases from the controlling event for their state, not from a single universal start. A ready-to-file claim is aged from the incident or documented discovery date under the client’s rule. A carrier information request is aged from the request. An approved recovery is aged from approval to receipt. Display counts and amounts in bands and show the oldest cases individually. An average age can hide a small number of consequential claims.

Measure evidence coverage beside value. Report the share of cases with shipment support, proof of loss, submission evidence, carrier reference, current correspondence, accounting conclusion, and reviewer sign-off. A high recovery rate based only on cases with complete evidence may be selection-biased. Show omitted and indeterminate cases rather than excluding them from the denominator without explanation.

## Exception analysis for an offshore team

An offshore bookkeeper can maintain the register, collect approved source records, prepare matches, update evidence-backed states, and draft the roll-forward. The client should retain carrier negotiation, assertions about legal entitlement, estimates, accounting policy, settlement acceptance, journal approval, write-offs, and period locking. The task matrix should name the person who can answer each exception and the maximum wait before escalation.

Time-zone separation changes the design. Set a daily intake cutoff and record which queue snapshot the preparer used. A document added after cutoff belongs to the next run unless a named owner requests an urgent refresh. Use role-based access to carrier portals and shared drives, prohibit shared credentials, and preserve download provenance. Sensitive customer, address, shipment, and payment fields should be limited to what the workflow needs.

Analyze exceptions by carrier, lane, shipping mode, warehouse, loss type, currency, amount band, procedural state, and evidence gap. These are descriptive strata. They do not prove that a carrier, warehouse, employee, or location caused loss. Volume, shipment mix, declared-value rules, packaging, weather, system migration, and claim-selection practices can explain differences.

## Reviewer procedure and limitations

The reviewer first ties population totals to frozen exports, then traces selected cases backward from the ledger to the incident and forward from the incident to disposition. Review all material manual entries, duplicate candidates, negative balances, reopened cases, payments lacking identifiers, denials awaiting decisions, and cases beyond locally approved deadlines. Reperform allocations for multi-case payments and confirm that preparers did not approve their own adjustments.

This protocol contains no private data and supplies no expected recovery percentage. A small or selectively recorded population cannot support broad conclusions. Carrier portals may overwrite history; emails may omit attachments; one shipment can have several contractual parties; currency conversion can create apparent differences; and later legal or commercial decisions can change a case. Comparisons across periods require consistent definitions, source coverage, and cutoff.

The final research packet should include frozen exports, data dictionary, case crosswalk, roll-forward, aging, evidence-coverage table, exception register, unresolved-item owners, reviewer selections, corrections log, and approval record. Retain source versions under the client’s policy. The strongest result is not a neat recovery rate. It is a ledger balance whose cases, uncertainty, authority, and next actions can be inspected without reconstructing the story from inboxes.

Before sign-off, run a counterfactual check on the matching design. Remove carrier case numbers from a copy and test whether shipment, date, and amount would falsely join unrelated cases; then remove internal case numbers and test whether payments still map uniquely. Report ambiguous candidates rather than choosing one. This sensitivity test reveals when the apparent reconciliation depends on a fragile key. Document materiality and review thresholds as locally approved parameters, show items below them in population totals, and never use a threshold to conceal systematic missing evidence.

## Sources and checked dates

- [Electronic Code of Federal Regulations, 49 CFR Part 370](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-370) - U.S. Government Publishing Office; checked October 2, 2026.
- [PCAOB AS 1105: Audit Evidence](https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105) - PCAOB; checked October 2, 2026.
- [PCAOB AS 1215: Audit Documentation](https://pcaobus.org/oversight/standards/auditing-standards/details/AS1215) - PCAOB; checked October 2, 2026.
- [IRS Publication 583](https://www.irs.gov/publications/p583) - Internal Revenue Service; checked October 2, 2026.
- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) - NIST; checked October 2, 2026.
