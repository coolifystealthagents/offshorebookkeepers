---
title: "Nonprofit fund accounting support: evidence, releases, and review"
description: "A research brief for building a traceable nonprofit bookkeeping workflow around donor restrictions, internal fund dimensions, release evidence, and finance-owner review."
published: "2026-08-07"
updated: "2026-09-17"
category: "Nonprofit Finance"
type: "research"
featuredImage: "/thumbnails/nonprofit-fund-accounting-support-research.webp"
takeaways: ["For an entity applying U.S. GAAP, internal fund codes should roll into the required net-asset classes rather than replace them.","Create each restriction record from an authoritative gift, grant, or governing document, and preserve the exact passage that supports its purpose or time limit.","Bookkeeping support can maintain registers, prepare tie-outs, and draft release entries; authorized finance leaders retain interpretation, accounting-policy, and final approval decisions."]
sources: [{"name":"FASB, Accounting Standards Update 2016-14: Presentation of Financial Statements of Not-for-Profit Entities","url":"https://storage.fasb.org/ASU%202016-14.pdf"},{"name":"FASB, Accounting Standards Update 2018-08: Clarifying the Scope and Accounting Guidance for Contributions Received and Contributions Made","url":"https://storage.fasb.org/ASU%202018-08.pdf"},{"name":"IRS, Publication 4221-PC: Compliance Guide for 501(c)(3) Public Charities","url":"https://www.irs.gov/pub/irs-pdf/p4221pc.pdf"}]
sourceNotes: [{"claim":"For not-for-profit entities applying U.S. GAAP, ASU 2016-14 requires statements of financial position and activities to report two net-asset classes, with donor restrictions and without donor restrictions. It also says fund-group reporting is not necessary for external reporting, although disaggregated fund information is not precluded, and distinguishes governing-board designations from donor restrictions.","sourceUrls":["https://storage.fasb.org/ASU%202016-14.pdf"]},{"claim":"ASU 2018-08 states that a contribution is conditional when the agreement includes both a barrier that must be overcome and a right of return of transferred assets or release from the promisor's obligation; this classification affects when contribution revenue is recognized. The Update does not make a bookkeeper the authority for interpreting an agreement.","sourceUrls":["https://storage.fasb.org/ASU%202018-08.pdf"]},{"claim":"IRS Publication 4221-PC says a U.S. 501(c)(3) public charity may choose a recordkeeping system suited to its activities that clearly shows income and expenses, should identify income and expenses attributable to each program when it has more than one program, and must retain documentation supporting entries in its books. This tax-compliance guidance is limited to the public charities it addresses.","sourceUrls":["https://www.irs.gov/pub/irs-pdf/p4221pc.pdf"]}]
relatedLinks: [["Reconcile grant restrictions award by award","/research/nonprofit-grant-restriction-reconciliation-research"],["Track donor-restricted fund releases","/blog/offshore-bookkeeping-nonprofit-restricted-fund-release"],["Build a charity restricted-funds ledger","/blog/bookkeeping-charity-restricted-funds-tracking"]]
faqs: [{"question":"Does U.S. GAAP require a separate bank account for every restricted fund?","answer":"The cited FASB guidance addresses financial-statement classification, not a universal one-bank-account-per-restriction rule. Separate bank accounts may be required by an agreement, law, or organizational policy. Track cash location separately from the restriction register and let the authorized finance or legal owner determine any segregation requirement."},{"question":"Is a board-designated fund the same as a donor-restricted fund?","answer":"No. ASU 2016-14 describes board designations as self-imposed limits on resources without donor restrictions. Preserve the board resolution and designation in the internal ledger, but do not relabel it as a donor restriction."},{"question":"When can a bookkeeper prepare a release from restriction?","answer":"After the approved rule is satisfied and the evidence packet identifies the restriction, amount, period, qualifying activity, calculation, and source records. The bookkeeper can draft the entry; the designated accounting owner should approve the conclusion and posting."},{"question":"Why can cash and donor-restricted net assets differ?","answer":"They answer different questions. A cash balance shows where liquid assets are held, while a net-asset restriction reflects limits on the use of resources under the applicable accounting policy. Receivables, payables, investments, timing, and pooled cash can create differences, so both balances need separate reconciliations."}]
---
## Scope: a fund ledger is an operating tool, not the external reporting model

Nonprofits often use the word **fund** for several different things: a donor-restricted purpose, a grant, a program, a board designation, an endowment, or simply an internal reporting bucket. Those labels are useful only when their meanings are explicit.

For a not-for-profit entity applying U.S. GAAP, FASB ASU 2016-14 organizes external reporting around **net assets with donor restrictions** and **net assets without donor restrictions**. The standard does not require external statements to reproduce every internal fund. A practical ledger can therefore carry more detail, but each internal code needs a documented path to the appropriate reporting class.

Keep these concepts separate:

- **Donor restriction:** an outside stipulation attached to contributed resources, subject to the organization's approved accounting interpretation.
- **Condition:** a barrier and a right of return or release, as described in ASU 2018-08. A condition affects whether and when a contribution is recognized; it is not merely another fund tag.
- **Board designation:** an internal limit established by the governing board on resources without donor restrictions. It should not be presented as donor-imposed.
- **Program or department:** an operating dimension used to understand activities and expenses. It does not by itself establish a restriction.
- **Cash location:** the bank or investment account holding assets. It does not by itself prove the amount of net assets subject to restrictions.

This separation prevents a common design error: treating one spreadsheet balance as the cash balance, available spending authority, donor-restricted net assets, and grant-reporting balance at the same time.

## Build the restriction master before coding transactions

The restriction master is the controlled index that connects source language to ledger treatment. Open or change a record only from a source accepted under the nonprofit's document policy, such as an executed gift agreement, award, donor communication, will or trust record, or approved governing action. If the documents conflict or the meaning is unclear, log the ambiguity rather than resolving it through a coding choice.

At minimum, record:

| Field | Purpose |
| --- | --- |
| Restriction ID and name | Gives the item a stable key that survives account-name changes |
| Source type, date, counterparty, and document link | Identifies the authority used to create the record |
| Exact controlling passage | Preserves the language the reviewer evaluated |
| Restriction type | Separates purpose, time, purpose-and-time, endowment, board designation, and other approved categories |
| Start, end, and triggering event | Supports time-based or event-based review without assuming that every restriction expires on a date |
| Eligible activity or cost description | States the approved coding rule without inventing eligibility from a budget line |
| Prohibited or escalation items | Stops known exceptions from passing silently |
| Accounting and program owners | Identifies who interprets the terms and who confirms program facts |
| Reporting class and ledger dimensions | Maps internal detail to the approved chart of accounts and external reporting model |
| Version, status, and approval evidence | Preserves amendment history and the effective rule for each period |

Do not overwrite the original terms when an amendment arrives. Add a version with its effective date, link it to the prior version, and identify which transactions require reassessment.

## Transaction-to-close workflow

### 1. Intake and identify

Capture the source document, counterparty, amount, date, program, and proposed restriction ID. Reject or queue records that lack the minimum evidence defined by policy. A memo written after the transaction should not silently replace the original donor or grant record.

### 2. Apply approved dimensions

Apply only valid combinations from the chart and restriction master. Useful dimensions can include natural account, program or function, restriction ID, grant or donor, location, and project. Prevent retired IDs and incompatible combinations where the accounting system permits it.

### 3. Preserve allocation support

When a cost benefits more than one activity, attach the approved allocation method, input population, calculation, and period. The preparer should be able to reproduce the result from retained evidence. A round percentage copied from the budget is a forecast, not automatically evidence of actual resource use.

### 4. Reconcile three views

At each close, reconcile rather than collapse:

1. **General ledger:** activity and ending balance by approved net-asset class and internal dimension.
2. **Restriction register:** opening balance, additions, releases, transfers or corrections, and ending balance for each restriction ID.
3. **Source populations:** contribution records, grant schedules, investment activity when relevant, and the documents supporting qualifying expenditures or elapsed time.

An operational rollforward can be expressed as:

`opening restriction balance + restricted additions + applicable return or other changes - approved releases +/- approved corrections = ending restriction balance`

That equation is a control template, not a substitute for the nonprofit's accounting policy. Each component must tie to the ledger, and each nonroutine item must identify its preparer, reviewer, date, and evidence.

### 5. Prepare release packets

A release packet should identify the restriction ID, amount proposed for release, period, satisfaction event, qualifying transaction population, calculation, source links, and proposed entry. The reviewer should be able to answer both questions: **what requirement was satisfied, and which evidence proves it?**

Do not release a restriction merely because cash was spent, a budget period ended, or management would prefer to use the balance elsewhere. Conversely, do not leave a supported release unrecorded simply because the resource is held in pooled cash. The approved accounting policy and the underlying terms govern the conclusion.

### 6. Close exceptions visibly

Keep unresolved items out of informal chat and in an exception queue. Record the restriction, affected amount or transaction population, issue, date raised, owner, required decision, due date, status, and final disposition. Reopen the reconciliation if a late amendment or corrected source changes a prior conclusion.

## Evidence and measurement that support review

A control measure is useful only when its numerator, denominator, period, owner, and source system are defined. Suitable measures include:

- transactions using an invalid, missing, or retired restriction ID;
- restriction-register balances that do not tie to the general ledger;
- proposed releases awaiting program confirmation or accounting approval;
- allocations missing a current method or reproducible calculation;
- amendments not yet reflected in the restriction master;
- exceptions aged by reason and decision owner; and
- post-close corrections traced to source, coding, allocation, or review causes.

These measures describe workflow condition, not compliance by themselves. A zero-exception dashboard can result from incomplete testing, and a balanced register does not prove the underlying interpretation is correct. Reviewers should inspect evidence and investigate changes in the measured population.

## Role and authority boundaries

A support team can perform controlled preparation without owning the judgments that create financial authority.

| Activity | Bookkeeping support | Authorized nonprofit owner |
| --- | --- | --- |
| Index agreements and extract stated terms | Prepare and flag conflicts | Confirm accepted source and interpretation |
| Maintain approved dimensions and restriction register | Update from authorized requests | Approve new IDs, mappings, and effective dates |
| Code transactions and run exception reports | Apply documented rules | Resolve ambiguous eligibility or purpose |
| Prepare allocations and release entries | Calculate and attach evidence | Approve method, conclusion, and journal |
| Reconcile subledgers, register, and general ledger | Prepare tie-out and exception list | Review, resolve material items, and sign off |
| Produce draft schedules | Assemble from reconciled data | Approve external financial, donor, tax, or regulatory reporting |
| Move cash or change access | No authority unless separately and explicitly granted | Retain approval under treasury and access policies |

The organization should also separate preparation from review where feasible and restrict system permissions to the assigned task. Remote staffing changes the location of preparation, not the nonprofit's accountability for its records, policies, reporting, or approvals.

## Methodology and limitations

This brief synthesizes FASB standards updates that address U.S. GAAP reporting by not-for-profit entities and contribution accounting, plus IRS recordkeeping guidance specifically for U.S. 501(c)(3) public charities. The operating register, workflow, fields, and measures above are implementation recommendations derived from those bounded principles; they are not quoted requirements from every source.

The brief does not determine whether a transfer is a contribution or exchange transaction, whether an agreement contains a legally enforceable restriction, when a condition has been substantially met, how an endowment law applies, or whether a specific release entry is correct. It also does not establish tax, audit, legal, grant, or financial-reporting requirements outside the cited scope. Applicable rules depend on the entity, reporting framework, jurisdiction, governing documents, donor or grant terms, and facts. A qualified accounting or legal owner should decide those matters and document the conclusion.
