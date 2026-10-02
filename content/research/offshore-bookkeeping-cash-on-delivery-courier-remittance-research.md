---
title: "Cash-on-delivery courier remittances: a population-completeness study"
description: "A reproducible method for connecting delivered orders, courier collections, fees, returns, remittances, bank receipts, and clearing-account entries without mistaking net cash for complete evidence."
published: "2026-10-02"
updated: "2026-10-02"
category: "Ecommerce bookkeeping"
type: "research"
featuredImage: "/thumbnails/offshore-bookkeeping-marketplace-payout-bridge.webp"
sources: [{"name":"UPU Postal Payment Services Agreement","url":"https://www.upu.int/en/universal-postal-union/activities/postal-payment-services"},{"name":"PCAOB AS 1105: Audit Evidence","url":"https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105"},{"name":"IRS Publication 583","url":"https://www.irs.gov/publications/p583"},{"name":"NIST Cybersecurity Framework 2.0","url":"https://www.nist.gov/cyberframework"},{"name":"NIST Role Based Access Control","url":"https://csrc.nist.gov/projects/role-based-access-control"}]
sourceNotes: [{"claim":"UPU materials describe postal payment services at an international institutional level; courier contracts and local law govern the specific arrangement being reconciled.","sourceUrls":["https://www.upu.int/en/universal-postal-union/activities/postal-payment-services"]},{"claim":"PCAOB evidence concepts inform traceability, but this protocol is not an audit standard or assurance engagement.","sourceUrls":["https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105"]},{"claim":"IRS and NIST materials support retained transaction records, risk management, and explicit access roles; they do not determine revenue recognition, tax, or courier liability.","sourceUrls":["https://www.irs.gov/publications/p583","https://www.nist.gov/cyberframework","https://csrc.nist.gov/projects/role-based-access-control"]}]
takeaways: ["Begin with the order and delivery populations, not the bank deposit.","Bridge gross cash collected to net remittance through named, evidenced components.","Treat courier disputes, customer refunds, fee approval, and write-offs as client-owned decisions."]
relatedLinks: [["View ecommerce bookkeeping support","/services/ecommerce-bookkeeping"],["Review bank reconciliation support","/services/bank-reconciliation-support"],["Explore the research library","/research"]]
faqs: [{"question":"Why is matching the courier deposit to the bank insufficient?","answer":"A net deposit can conceal fees, returns, shortages, offsets, or orders omitted from the courier statement. The study reconciles the gross order population and every bridge component."},{"question":"Does the protocol set an acceptable remittance delay?","answer":"No. The client derives service expectations from its contracts, jurisdictions, and risk assessment."},{"question":"May an offshore bookkeeper approve a courier shortage?","answer":"Preparation and escalation may be assigned; acceptance, write-off, refund, and policy decisions stay with authorized client owners."}]
serviceHandoff: {"href":"/contact-us","label":"Discuss a controlled COD reconciliation","title":"Connect delivery evidence to cash","body":"Define courier files, order states, remittance clocks, fee rules, exception ownership, and review before delegating the workflow."}
---
## Scope and decision boundary

This study proposes a method for testing cash-on-delivery courier remittances; it does not publish a client result or industry benchmark. Contract, accounting, tax, privacy, and legal conclusions remain with qualified owners.

## Why the clearing balance needs two directions of proof

Cash on delivery creates a chain in which the seller records an order, a courier controls the parcel, a recipient may pay in cash or another local method, and the courier later remits a net amount. A bank-first reconciliation proves only that money arrived. It does not prove that every eligible delivery entered the courier statement or that deductions were authorized. An order-first reconciliation finds missing remittances but can misclassify returns, refused deliveries, exchanges, partial collections, and payments routed through a different courier account.

The study therefore uses two directional tests. Completeness starts with the frozen order and delivery populations and follows each eligible order toward collection and remittance. Occurrence starts with courier settlements and bank receipts and traces them back to orders. The intersection becomes the reconciled population; unmatched records remain visible by state and owner.

Use the order or shipment identifier as the primary key only after testing uniqueness. Preserve courier tracking number, store order number, legal entity, currency, promised amount, delivery state, collection state, return state, statement identifier, remittance batch, bank value date, fee components, refund reference, and ledger posting. Never manufacture a match by order amount alone when common price points occur.

## Population and cutoff design

Freeze exports from the storefront, warehouse or order manager, each courier portal, the bank, and the general ledger. Record parameters, report time zone, extraction timestamp, account or merchant identifier, and file hash. Include cancelled, refused, returned, redirected, lost, partially delivered, and disputed orders so exclusions can be tested. A “successful delivery” filter applied before extraction destroys evidence about whether status logic was appropriate.

Define the operational cutoff separately from the accounting cutoff. A parcel may be delivered before month end, acknowledged by the courier after month end, deposited days later, and posted on the bank value date. The protocol should say which event creates an expected courier collection, how later status corrections are handled, and how remittances in transit cross periods. The bookkeeper applies that approved rule and does not infer policy from last month’s spreadsheet.

Normalize identifiers without overwriting source values. Keep leading zeros, country codes, suffixes, and replacement tracking numbers. Document transformations in a crosswalk. For one-to-many cases, such as a remittance covering hundreds of orders, retain both settlement header and settlement detail. For one order split into parcels, specify when collection is expected and how a partial collection is represented.

## Gross-to-net settlement bridge

For each courier batch, calculate gross amounts collected, less contractually identified delivery charges, collection fees, return charges, customer refunds, chargebacks, advances, withholding, and other offsets, equals expected remittance. Tie the expected remittance to a specific bank receipt. Unsupported “adjustment” is not a usable category; retain the carrier’s code, description, underlying order, and client-approved mapping.

Reperform fee calculations for a risk-based selection using the effective rate card and shipment attributes. A correct fee total does not resolve whether the ledger presentation or indirect-tax treatment is correct. Route those questions to the accounting or tax owner. Separate differences caused by rounding and currency conversion from unexplained shortages. Record the source exchange rate and date rather than plugging the bridge to the bank.

At period end, roll forward the courier clearing account: opening amount due from couriers, plus eligible collections, less gross cash remitted, adjusted for approved fees and refunds according to the client’s posting design, equals closing amount. Reconcile that case-level computation to the ledger. Analyze debit and credit balances separately because netting can hide an over-remittance in one courier behind missing cash from another.

## Exception taxonomy and aging

Use states that describe the next action: delivery evidence missing; delivered but collection status missing; collected but absent from settlement; included in settlement but unmatched to order; fee unsupported; bank receipt unmatched; customer refund pending; returned parcel awaiting inventory evidence; courier dispute open; proposed write-off awaiting approval; resolved after cutoff. Each state has a required artifact and a named owner.

Age each exception from the event that made action possible. A collection awaiting remittance ages from collection confirmation. An unidentified bank receipt ages from value date. A courier dispute ages from submission and separately from the latest information request. Publish both counts and values across age bands, plus the oldest consequential items. Median time can describe the middle but must not replace the tail.

Review status reversals. A delivered parcel later marked returned may reflect a legitimate correction, a customer exchange, fraud, or a system mapping issue. Preserve both timestamps and source versions. Do not overwrite the first export and pretend the later state always existed. Reopened records belong in a separate rate because repeated closure can make throughput look better without moving cash.

## Offshore operating design

The offshore preparation team can collect exports, maintain the crosswalk, apply documented mappings, prepare bridges, identify missing evidence, and draft reconciliations. Client owners retain changes to courier contracts, refund approval, customer communication policy, accounting treatment, tax decisions, dispute settlement, write-offs, bank release, and period close. Put those boundaries in the runbook and in system permissions.

Daily handoffs should state the source cutoff, batches processed, unresolved blockers, items needing client judgment, and expected next check. Establish overlap hours for urgent shortages and a maximum unanswered interval. Use named accounts and least privilege. Cash-collection files can contain customer names, addresses, phone numbers, and payment behavior; minimize copied fields and restrict exports to the approved storage location.

Compare couriers only after controlling for shipment volume, geography, customer mix, payment method, delivery timing, contract terms, holidays, and file availability. A higher exception rate is descriptive, not proof of poor performance or misconduct. The purpose is to repair evidence flow and settlement visibility, not to rank workers or vendors from incomparable data.

## Reviewer tests and research limits

The reviewer reconciles export record counts and control totals before sampling. Trace selected orders from store to delivery, collection, settlement, bank, and ledger. Trace selected deposits backward. Inspect all duplicate keys, manual journal entries, unsupported deductions, negative clearing balances, old collected-not-remitted cases, reopened items, and write-offs. Confirm that preparers did not approve their own adjustments.

This study has no universal tolerance or expected delay. Courier portals may revise prior states, cash can be deposited through agents, settlement descriptions can be truncated, and local payment rules differ. Missing evidence may cluster in particular regions or couriers, making observed rates biased. Cross-period trends are meaningful only with stable populations, definitions, and coverage.

Archive the raw exports, query parameters, identifier crosswalk, settlement bridges, clearing roll-forward, exception register, aging, fee tests, reviewer selections, corrections, and approvals. A decision-grade conclusion states how much of the eligible population was traced, what remains uncertain, who owns it, and when it will be checked again.

Add a completeness stress test before release. Select consecutive delivery days from the order system, including a weekend or holiday boundary, and account for every eligible order without starting from courier data. Separately select consecutive courier batches and account for every line without starting from the store. Compare exception rates from the two selections. A large directional difference suggests missing populations or weak keys, not automatically wrongdoing. Record every manual join, reviewer change, and unresolved ambiguity so another reviewer can reproduce the bridge from the same frozen files.

## Sources and checked dates

- [UPU Postal Payment Services](https://www.upu.int/en/universal-postal-union/activities/postal-payment-services) - Universal Postal Union; checked October 2, 2026.
- [PCAOB AS 1105](https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105) - PCAOB; checked October 2, 2026.
- [IRS Publication 583](https://www.irs.gov/publications/p583) - IRS; checked October 2, 2026.
- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) - NIST; checked October 2, 2026.
- [NIST Role Based Access Control](https://csrc.nist.gov/projects/role-based-access-control) - NIST; checked October 2, 2026.
