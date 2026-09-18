---
title: "Nonprofit grant restriction reconciliation: an award-by-award control method"
description: "A source-bounded method for reconciling nonprofit grant and donor-restriction activity from governing terms through ledger balances, qualifying-cost evidence, releases, draws, and review."
published: "2026-08-08"
updated: "2026-09-17"
category: "Nonprofit Finance"
type: "research"
featuredImage: "/thumbnails/nonprofit-grant-restriction-reconciliation.svg"
takeaways: ["Build each reconciliation from the executed award, gift terms, approved accounting conclusion, and amendment history rather than from a grant name alone.","Reconcile the opening balance, additions, qualifying activity, approved releases or other movements, and ending balance by award or restriction ID, then tie the result to the general ledger.","Keep donor-restriction accounting, federal-award cost allowability, cash draws, and program reporting as connected but distinct review layers."]
sources: [{"name":"FASB, Accounting Standards Update 2016-14: Presentation of Financial Statements of Not-for-Profit Entities","url":"https://storage.fasb.org/ASU%202016-14.pdf"},{"name":"FASB, Accounting Standards Update 2018-08: Clarifying the Scope and Accounting Guidance for Contributions Received and Contributions Made","url":"https://storage.fasb.org/ASU%202018-08.pdf"},{"name":"Electronic Code of Federal Regulations, 2 CFR 200.302: Financial management","url":"https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200/subpart-D/section-200.302"},{"name":"Electronic Code of Federal Regulations, 2 CFR 200.403: Factors affecting allowability of costs","url":"https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200/subpart-E/section-200.403"},{"name":"Electronic Code of Federal Regulations, 2 CFR 200.405: Allocable costs","url":"https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200/subpart-E/section-200.405"}]
sourceNotes: [{"claim":"For not-for-profit entities applying U.S. GAAP, ASU 2016-14 establishes the net-asset classes with donor restrictions and without donor restrictions, distinguishes donor restrictions from governing-board designations, and addresses reporting of releases from restrictions. It does not prescribe this brief's award-register template.","sourceUrls":["https://storage.fasb.org/ASU%202016-14.pdf"]},{"claim":"ASU 2018-08 explains that a contribution is conditional when an agreement includes both a barrier that must be overcome and a right of return of transferred assets or release from the promisor's obligation. Determining whether those elements exist remains an accounting judgment based on the agreement and facts.","sourceUrls":["https://storage.fasb.org/ASU%202018-08.pdf"]},{"claim":"For non-Federal entities with Federal awards in scope, 2 CFR 200.302 requires financial-management records that identify Federal awards and provide accurate, current, complete financial results, source-supported accounting records, effective controls, budget-to-actual comparison, and written procedures for payment and allowability. This regulation is not a rule for every private grant or donation.","sourceUrls":["https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200/subpart-D/section-200.302"]},{"claim":"For costs charged to Federal awards in scope, 2 CFR 200.403 states general allowability factors including necessity, reasonableness, allocability, consistency, conformity with award limitations, consistent treatment, and adequate documentation. It does not make a bookkeeping preparer the final allowability authority.","sourceUrls":["https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200/subpart-E/section-200.403"]},{"claim":"For Federal awards in scope, 2 CFR 200.405 explains that a cost is allocable based on relative benefits received and addresses costs benefiting multiple objectives and certain cost shifts. The organization's responsible grant and finance owners must apply the current rule to the actual award and facts.","sourceUrls":["https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200/subpart-E/section-200.405"]}]
relatedLinks: [["Nonprofit fund accounting evidence and releases","/research/nonprofit-fund-accounting-support-research"],["Restricted-fund release workflow","/blog/offshore-bookkeeping-nonprofit-restricted-fund-release"],["Grant drawdown evidence log","/blog/offshore-bookkeeping-nonprofit-grant-drawdown-evidence-log"]]
faqs: [{"question":"Is a board-approved program reserve a donor restriction?","answer":"Not by itself. ASU 2016-14 distinguishes a governing-board designation from a donor-imposed restriction. Record the board action as an internal designation and let the accounting owner approve its presentation rather than relabeling it as donor-restricted."},{"question":"Does an approved grant budget prove every charged cost is allowable?","answer":"No. For an in-scope Federal award, allowability and allocability depend on the current award terms, applicable regulations, facts, consistent treatment, and documentation. A budget is an important control input, but it does not replace transaction-level review or required approvals."},{"question":"Should a cash draw equal revenue or a release from restriction?","answer":"Not automatically. Cash draws, recognized revenue, qualifying expenditures, receivables, deferred or refundable amounts, and releases can occur on different timelines. Reconcile each layer separately and use the nonprofit's approved accounting conclusion to connect them."},{"question":"Who resolves an ambiguous grant term or amendment?","answer":"The designated grant, finance, accounting, or legal owner should determine meaning and document the conclusion. Bookkeeping support can identify the conflict, preserve the source passages, quantify affected activity, and hold the item from unsupported release or reporting."}]
---
## Research scope: one name can hide different accounting and compliance questions

A nonprofit may call a donor gift, foundation agreement, government award, reimbursement contract, or board-funded initiative a **grant**. Those arrangements do not automatically have the same accounting treatment, spending rules, reporting basis, or cash mechanics. A useful reconciliation begins with the actual governing records and the organization's approved conclusion, not with the label used in a project list.

For a not-for-profit entity applying U.S. GAAP, donor restrictions and contribution conditions are accounting questions addressed by the cited FASB updates. For a Federal award in scope of 2 CFR part 200, financial management, cost allowability, and allocability add a separate compliance layer. A private foundation award may instead be governed by its agreement and other applicable requirements. The workflow below keeps these layers connected without treating them as interchangeable.

## Establish the award and restriction master

Create one controlled record for each award or restriction ID before reconciling activity. Preserve the original agreement and every amendment rather than overwriting terms. The master should include:

| Field | Control purpose |
| --- | --- |
| Legal entity, award or restriction ID, funder, and program | Prevents activity from different entities or arrangements from being blended |
| Executed agreement, amendment version, and controlling passage | Shows which document and language support the approved treatment |
| Arrangement type and reporting framework | Separates donor-restriction, contribution-condition, exchange, Federal-award, and other approved classifications |
| Period of performance or restriction dates | Defines the relevant time window without assuming the date alone resolves eligibility |
| Purpose, approved budget, and cost categories | Provides operational parameters without turning a budget into proof of allowability |
| Match, indirect-cost, program-income, or draw terms when applicable | Keeps award-specific requirements visible rather than implied |
| Accounting mapping | Identifies approved net-asset class, accounts, dimensions, and release or recognition method |
| Program, grant, finance, accounting, and legal owners | Assigns interpretation and approval to named roles |
| Status, version, effective date, and approval evidence | Preserves which rule was active for each transaction and reporting period |

A board action can be retained in the master as a designation or internal funding decision, but it should not be presented as donor-imposed unless an external source created the restriction. If documents conflict, open an exception and identify the affected periods; do not resolve the conflict by changing a code.

## Build an award-by-award rollforward

Start with an opening balance that agrees to the prior approved reconciliation. Then classify current-period movements using the nonprofit's approved accounting policy. A working rollforward may include opening balance, recognized additions, qualifying expenditures or other satisfaction events, approved releases, returns or refunds, transfers permitted by policy, corrections, and ending balance.

The arithmetic template is:

`approved opening balance + supported additions - approved releases or other reductions +/- authorized corrections = ending balance`

The labels and signs must be adapted to the arrangement. The equation does not decide whether an award is conditional, whether revenue should be recognized, or whether a cost satisfies a restriction. Those are inputs approved by the responsible accounting and grant owners.

For each movement, retain the transaction or batch ID, ledger account and dimensions, amount, date, source document, restriction or award rule applied, preparer, reviewer, and any journal reference. Grouped lines must remain traceable to a transaction population.

## Reconcile five connected layers

### 1. Governing terms to the master

Confirm that the master reflects the current executed award, gift record, amendment, notice, and approved accounting memo. Compare effective dates and version history. A late amendment should identify which prior transactions, draws, releases, or reports require reassessment.

### 2. Detailed activity to the general ledger

Extract the complete ledger population for the award or restriction dimensions with report name, parameters, extraction time, row count, and accounting period. Tie detailed debits and credits to the ledger control total and identify manual journals, inactive codes, missing dimensions, duplicate imports, and postings outside the approved period.

### 3. Costs or satisfaction evidence to the approved rule

For each selected or required item, preserve the invoice, payroll or allocation support, service period, program relationship, approval, and the exact award or policy criterion applied. For Federal awards in scope, the responsible owner should apply the current allowability and allocability requirements, including any award-specific limitation. The bookkeeping preparer may test required fields and calculations but should not make an undocumented legal or compliance conclusion.

When a cost benefits multiple activities, retain the allocation objective, population, driver, calculation, period, result, and approval. Do not shift a cost merely to use an available budget or clear an overrun. If the basis is uncertain, leave the item in the exception population.

### 4. Accounting balance to releases or other movements

Tie every proposed release, recognition entry, return, or correction to the approved accounting conclusion and source evidence. A cash payment does not by itself prove that a donor restriction was satisfied. A program milestone does not by itself prove that a contribution condition was met unless the approved analysis identifies it as the relevant barrier and addresses the agreement's return or release provision.

The review packet should show the opening balance, movement population, calculation, proposed journal, net-asset presentation, and resulting ending balance. Preserve rejected proposals as part of the decision trail.

### 5. Draws and reports to their own control totals

For reimbursement or advance-funded awards, reconcile requests and receipts separately from expense and revenue. Record the request ID, covered period, submitted amount, accepted amount, receipt date, cash account, unresolved reduction, and linked expenditure population. For program or financial reports, retain the submitted version, control totals, certification or approval, amendments, and tie-out to the reconciled records.

A draw-to-ledger difference may be a timing item, receivable, advance, rejected cost, or error. It should not be forced to zero with an unsupported journal. Likewise, a report that agrees to the ledger can still include an ineligible cost if the underlying evidence and rules were not reviewed.

## Manage exceptions without hiding judgment

Use an exception register with award ID, transaction or balance affected, amount, period, issue type, source links, requirement or policy in question, date opened, owner, next action, due date, blocked output, disposition, approver, and closure evidence.

Useful categories include missing agreement or amendment, conflicting terms, unapproved code, expense outside the approved period, unsupported allocation, missing match evidence, questioned allowability, duplicate charge, budget variance requiring action, draw difference, stale receivable or advance, report-to-ledger variance, unsupported release, and post-close correction.

Age from the original open date rather than the latest comment. Priority should reflect reporting deadline, known exposure, decision dependency, and whether cash, a release, a draw, or an external report is blocked. This brief provides no universal monetary or age threshold; management must approve thresholds for the specific award portfolio.

## Role and authority boundaries

| Activity | Bookkeeping support | Retained authority |
| --- | --- | --- |
| Index agreements and amendments | Capture records, passages, dates, and missing items | Grant or legal owner determines governing terms |
| Maintain the award master | Apply authorized updates and preserve versions | Finance and accounting owners approve classification and mapping |
| Prepare transaction populations and allocations | Assemble evidence and calculate under approved methods | Program and grant owners confirm activity; accounting or compliance owners approve treatment |
| Prepare rollforwards, releases, draws, and reports | Tie data, draft schedules, and log exceptions | Named owners approve journals, draws, certifications, and external submissions |
| Resolve disputed or unclear items | Quantify impact and preserve the question | Qualified finance, grant, legal, tax, or accounting owner decides |
| Move cash or change access | No implied authority | Authorized treasury and system owners approve under separate controls |

Remote or offshore support changes where preparation occurs, not who owns grant compliance, donor interpretation, accounting policy, cash custody, or external certification. Access should be limited to the required records and tasks, with named accounts and review of privileged changes.

## Methodology and limitations

This brief synthesizes FASB standards updates for U.S. GAAP nonprofit reporting and contribution accounting with selected provisions of 2 CFR part 200 for Federal awards. The award master, five-layer reconciliation, exception fields, and role table are implementation recommendations. They are not mandatory templates quoted from the sources.

The brief does not determine whether an arrangement is a contribution or exchange transaction, whether a donor stipulation is legally enforceable, whether a condition has been met, whether a specific cost is allowable, whether a Federal rule applies, or whether an accounting entry or external report is correct. It does not address every grantor rule, state requirement, endowment law, tax issue, audit procedure, or contractual remedy. Apply the current agreement, reporting framework, jurisdiction, regulations, organizational policy, and facts with qualified owners before approving a release, draw, correction, or submission.
