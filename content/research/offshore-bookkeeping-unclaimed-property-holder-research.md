---
title: "Unclaimed property holder records: a bookkeeping control study"
description: "A research protocol for tracing stale checks, customer credits, payroll items, and other potential unclaimed property from the ledger to an authorized disposition."
published: "2026-10-05"
updated: "2026-10-05"
category: "Compliance support"
type: "research"
featuredImage: "/thumbnails/bookkeeping-document-retention-benchmarks.webp"
sources: [{"name":"NAUPA: Reporting Overview","url":"https://unclaimed.org/reporting/"},{"name":"SEC Investor Bulletin: Escheatment of Securities","url":"https://www.sec.gov/resources-for-investors/investor-alerts-bulletins/ib_escheatment"},{"name":"IRS Publication 583: Starting a Business and Keeping Records","url":"https://www.irs.gov/publications/p583"},{"name":"PCAOB AS 1105: Audit Evidence","url":"https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105"}]
sourceNotes: [{"claim":"NAUPA describes holder reporting as state-administered and directs holders to applicable state requirements; this study does not supply a universal dormancy rule.","sourceUrls":["https://unclaimed.org/reporting/"]},{"claim":"The SEC bulletin illustrates that escheatment can affect securities after inactivity and that state law controls the process.","sourceUrls":["https://www.sec.gov/resources-for-investors/investor-alerts-bulletins/ib_escheatment"]},{"claim":"IRS Publication 583 and PCAOB AS 1105 support recordkeeping and evidence concepts, but neither determines a holder's legal obligation.","sourceUrls":["https://www.irs.gov/publications/p583","https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105"]}]
takeaways: ["Build the population from several liability and cash sources rather than a stale-check list alone.","Preserve owner, property type, jurisdiction, dates, outreach, and disposition as separate evidence fields.","Keep legal classification, dormancy, due diligence, filing, and remittance decisions with authorized specialists."]
relatedLinks: [["Review accounts payable support","/services/accounts-payable-processing"],["Review payroll journal support","/services/payroll-journal-preparation"],["Browse the research library","/research"]]
faqs: [{"question":"Does an old credit automatically become unclaimed property?","answer":"No. An authorized specialist must apply the relevant law and facts. The bookkeeping protocol identifies candidates and preserves their history."},{"question":"Can an offshore bookkeeper file a state report?","answer":"Only under an expressly approved scope and review process. Classification and filing authority should remain with the client or qualified adviser."}]
serviceHandoff: {"href":"/contact-us","label":"Discuss a controlled liability review","title":"Make dormant balances traceable","body":"Define the source population, ownership fields, review authority, evidence retention, and escalation path before assigning preparation work."}
---
## Question and boundary

An accounts-payable aging can contain voided checks, supplier credits, employee reimbursements, payroll checks, refunds, and balances left behind by system conversions. Some may be potential unclaimed property. Others may be duplicates, posting errors, active disputes, replacement payments, or amounts the business never owed. This study asks whether the books preserve enough evidence for an authorized owner to make and execute the distinction.

Unclaimed property is administered under state law, and the applicable property type, owner address, transaction history, dormancy rule, exemptions, due-diligence steps, report format, and remittance date can differ. NAUPA's reporting material directs holders to state requirements rather than offering one national rule. A bookkeeper should therefore avoid turning an aging threshold into a legal conclusion. Counsel, a compliance specialist, or another authorized client owner decides whether an item is reportable and where.

The useful output is a reproducible candidate population with a documented disposition. It is not a spreadsheet that labels every old balance "escheat" or clears liabilities to income because nobody replied.

## Constructing the candidate population

Start with frozen exports from accounts payable, payroll, customer credits, deposit liabilities, refund queues, suspense accounts, and bank-reconciliation outstanding items. Include void and reissue history. A check register alone misses credits never paid by check, while a general-ledger query may miss owner details held in a subledger. Record report parameters, extraction time, system time zone, currency, and file hash for each export.

Create one candidate identifier for each underlying obligation. Retain the payee or owner name as recorded at the transaction date, last known address, tax or vendor identifier in a restricted field, source document, original transaction date, payment dates, check numbers, void dates, contact history, balance, currency, legal entity, and ledger account. Keep later name or address changes as dated events instead of overwriting history.

Join sources conservatively. A shared name is not enough to merge two owners, and a reissued check should not appear as a second obligation. Test one-to-many relationships explicitly: one invoice may produce two checks; one check may settle several invoices; one customer account may hold several unrelated credits. Put ambiguous matches in an exception queue.

The initial bridge should explain the movement from the prior review population to the current one: opening unresolved candidates, new candidates, corrected duplicates, owner payments, approved reversals, authorized reportable items, remittances, and closing unresolved candidates. Tie every monetary movement to the ledger and bank activity where applicable.

## Dates and jurisdiction evidence

Maintain dates as facts, not as a single calculated age. Useful fields include the obligation date, check issue date, last owner-generated activity, returned-mail date, outreach dates, response date, determination date, report acceptance date, and remittance date. The legally controlling date may vary by property and jurisdiction, so the workpaper should identify which date an authorized reviewer selected and preserve the other candidates.

Address evidence deserves the same treatment. Keep the address associated with the obligation, later verified addresses, mail-return evidence, and the source and date of each update. Do not infer residence from a phone number, bank location, IP address, or a bookkeeper's knowledge. When no address is supported, mark it unknown and route the jurisdiction question for review.

Use an approved rules table that is versioned outside the transaction data. It should identify the source authority, effective period, property classification, calculation fields, exclusions, required outreach, and review owner. The preparer can apply that table mechanically. The preparer should not amend a rule because an item produces an inconvenient result.

## Due diligence and disposition trail

Separate operational states such as candidate, under review, excluded, outreach required, outreach sent, owner response received, payable, reportable, reported, remitted, rejected, corrected, and closed. Each state needs an evidence gate. "Outreach sent" points to the approved notice, destination, method, and date. "Owner paid" points to payment approval and bank settlement. "Reported" points to an accepted filing or other official receipt, not merely an exported file.

Preserve returned mail and responses without exposing unnecessary personal data in a broad shared workbook. Limit access to bank details, taxpayer identifiers, and addresses. Use named accounts and retain an access review. An offshore preparer can assemble the packet, track responses, and reconcile totals, while the client controls communications that make legal representations and approves payments, reports, and write-offs.

Never use nonresponse as proof that the liability no longer exists. Likewise, a successful owner contact does not by itself prove that a payment cleared. Trace a settled item through approval, payment instrument, bank settlement, ledger posting, and closure of the candidate record.

## Tests a reviewer can reperform

Recalculate aging from the approved rules table and compare it with the preparer's result. Sample backward from reportable items to the original obligation and forward from old ledger items to their final state. Review all manual exclusions, negative balances, round-dollar entries, items just below thresholds, repeated voids, changes of owner identity, and post-cutoff adjustments.

Run a completeness test from cash: select stale outstanding checks and trace them into the candidate population. Then test from subledgers: select dormant vendor and customer credits and verify that each is either included or has a documented reason for exclusion. Compare report totals with remittance totals and the liability-clearing entry. Differences should remain visible until resolved.

Analyze counts and amounts separately by property family, entity, age band, jurisdiction candidate, source system, and disposition. These are workflow diagnostics, not evidence that a location or employee caused a problem. A large increase may come from a system migration, a new rule table, improved source coverage, or accumulated unresolved items.

## Limitations and decision output

This design does not determine legal ownership, applicable state, dormancy period, exemption, priority rule, or accounting presentation. Source systems may have overwritten addresses, imported opening balances may lack transaction history, and returned mail may not prove that an owner cannot be found. State rules and portal requirements can change after the checked date.

The final packet should contain frozen source exports, a data dictionary, candidate crosswalk, versioned rules table, exception queue, outreach log, evidence index, roll-forward, filing and remittance receipts, correction log, reviewer selections, and approvals. Report unknowns rather than forcing them into an exclusion category. A reliable result lets a reviewer reconstruct why a balance remained payable, was paid, was reported, or was corrected without relying on an employee's memory.

Before sign-off, compare the candidate population with prior reports by owner name, source identifier, and original obligation. This catches an item that was reported once but remained open in the subledger, as well as an item removed from one entity and recreated in another during conversion. Inspect subsequent cash after the review date for payments that resolve old candidates. Keep those later events in a separate column so they do not alter the period-end facts.

Reperform the report-to-ledger entry at property-type level. Confirm that remittance did not clear unrelated vendor or customer balances and that rejected records returned to the open queue. When a state portal changes an amount or owner record, preserve both the submitted and accepted versions. The difference needs its own explanation and approval rather than an undocumented overwrite.

Document control totals at every handoff. The count and amount exported from each source should agree with the values loaded into the working population, after separately listed rejects. The candidate register should agree with the review queue, and approved reportable records should agree with the submitted file. This prevents a clean-looking final remittance from masking records dropped during import, formatting, or portal rejection.

## Sources and checked dates

- [NAUPA: Reporting Overview](https://unclaimed.org/reporting/) - National Association of Unclaimed Property Administrators; checked October 5, 2026.
- [SEC Investor Bulletin: Escheatment of Securities](https://www.sec.gov/resources-for-investors/investor-alerts-bulletins/ib_escheatment) - U.S. Securities and Exchange Commission; checked October 5, 2026.
- [IRS Publication 583](https://www.irs.gov/publications/p583) - Internal Revenue Service; checked October 5, 2026.
- [PCAOB AS 1105](https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105) - PCAOB; checked October 5, 2026.
