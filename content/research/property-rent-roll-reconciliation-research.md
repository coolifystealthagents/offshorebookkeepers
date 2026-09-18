---
title: "Lease and rent-roll to ledger reconciliation research"
description: "A source-scoped reconciliation brief for tracing approved lease charges, tenant activity, cash, deposits, and general-ledger balances by property and cutoff."
published: "2026-08-07"
updated: "2026-09-17"
category: "Property Finance"
type: "research"
featuredImage: "/thumbnails/property-rent-roll-reconciliation-research.webp"
takeaways: ["Reconcile the same lease population through expected charges, tenant-ledger activity, general-ledger control accounts, cash receipts, and deposit liabilities instead of comparing two unsupported totals.","Keep security deposits, advance rent, unapplied cash, concessions, credits, write-offs, and owner funds separate because their accounting and custody consequences are not interchangeable.","A bookkeeper can assemble evidence and investigate differences, while authorized property, accounting, treasury, and legal owners retain lease interpretation, classification, cash movement, write-off, and deposit-disposition decisions."]
sources: [{"name":"Financial Accounting Standards Board, Accounting Standards Codification Topic 842, Leases","url":"https://asc.fasb.org/842/tableOfContent"},{"name":"IFRS Foundation, IFRS 16 Leases","url":"https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/"},{"name":"Internal Revenue Service, Publication 527, Residential Rental Property","url":"https://www.irs.gov/publications/p527"},{"name":"New York State Senate, General Obligations Law section 7-103","url":"https://www.nysenate.gov/legislation/laws/GOB/7-103"},{"name":"California Legislative Information, Civil Code section 1950.5","url":"https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1950.5.&lawCode=CIV"},{"name":"Electronic Code of Federal Regulations, 24 CFR 880.608, Security deposits","url":"https://www.ecfr.gov/current/title-24/subtitle-B/chapter-VIII/part-880/subpart-F/section-880.608"}]
sourceNotes: [{"claim":"FASB Accounting Standards Codification Topic 842 is the official US GAAP lease-accounting topic for entities applying that reporting framework. It governs recognition, measurement, presentation, and disclosure questions, not the detailed operating workflow recommended in this brief.","sourceUrls":["https://asc.fasb.org/842/tableOfContent"]},{"claim":"The IFRS Foundation states that IFRS 16 sets principles for recognition, measurement, presentation, and disclosure of leases. It is relevant only when IFRS Accounting Standards are the applicable reporting framework and does not replace local landlord law or tax rules.","sourceUrls":["https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/"]},{"claim":"IRS Publication 527 is US federal income-tax guidance for residential rental property. It states that advance rent is included in rental income when received and that a refundable security deposit is not income on receipt, while amounts kept for a tenant's lease default are included when kept. These tax statements are not a complete financial-reporting policy.","sourceUrls":["https://www.irs.gov/publications/p527"]},{"claim":"New York General Obligations Law section 7-103 is New York statutory authority stating that rental security money covered by the section remains the tenant's money, is held in trust, must not be mingled with the recipient's personal money, and is deposited as the section provides. Its detailed scope and exceptions require New York review.","sourceUrls":["https://www.nysenate.gov/legislation/laws/GOB/7-103"]},{"claim":"California Civil Code section 1950.5 governs security for California residential rental agreements within its scope. It states that security is held by the landlord for the tenant and specifies permitted claims and disposition requirements, including an itemized statement and return of the remainder within the statutory period. It should not be read as the New York segregation rule.","sourceUrls":["https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1950.5.&lawCode=CIV"]},{"claim":"24 CFR 880.608 is a US federal program rule for properties under the identified Section 8 Housing Assistance Payments Program. It requires covered owners to place security deposits in a segregated, interest-bearing account and keep the account balance equal to deposits from families then in occupancy plus accrued interest; it is not a rule for every property.","sourceUrls":["https://www.ecfr.gov/current/title-24/subtitle-B/chapter-VIII/part-880/subpart-F/section-880.608"]}]
relatedLinks: [["Rental-income reconciliation workflow","/blog/bookkeeping-rental-income-reconciliation"],["Security-deposit register workflow","/blog/offshore-bookkeeping-security-deposit-register"],["Reconciliation exception research","/research/bookkeeping-reconciliation-exception-research"]]
faqs: [{"question":"Why can the general ledger balance even when the rent roll is wrong?","answer":"A control-account total can agree after offsetting tenant errors, unsupported journals, omitted units, or netted deposits. Reconcile by lease, tenant, charge period, transaction type, property, and entity before relying on the aggregate tie-out."},{"question":"Should security deposits be included with rental receipts?","answer":"No. Preserve the receipt split and reconcile deposits to a tenant-level liability and the legally required custody account, if any. Applicable lease, state, local, and housing-program rules determine holding and disposition; tax and financial-reporting classifications also require the designated accounting owner."},{"question":"Who may clear an unapplied tenant receipt?","answer":"A bookkeeper may match identifiers and propose an application. The role authorized by the property's cash-application policy should approve ambiguous allocations, refunds, inter-tenant transfers, or applications that affect a dispute."},{"question":"What cutoff should the reconciliation use?","answer":"Use one documented cutoff across the approved lease snapshot, tenant-ledger export, general ledger, receipt records, bank activity, and deposit schedule. Record extraction times and list post-cutoff activity separately rather than silently mixing versions."}]
---

## Research question and conclusion

This brief asks how to reconcile an approved lease and rent-roll population to tenant accounting, cash, deposit custody, and the general ledger. The conclusion is an operating design: move through the records in a traceable chain, preserve gross transaction types, and assign every difference to a decision owner. A two-total comparison is insufficient because equal totals can conceal missing units, offsetting tenant errors, incorrect periods, or an unsupported journal.

The brief does not set a universal revenue policy. FASB Topic 842, IFRS 16, US federal tax guidance, lease terms, and local landlord law answer different questions. The entity's reporting framework and jurisdiction must be established before a reviewer decides accounting treatment or deposit disposition.

## Source hierarchy and applicable scope

| Source | Authority | What it can support here | What it cannot support |
| --- | --- | --- | --- |
| FASB ASC Topic 842 | US accounting standard setter's codification for entities applying US GAAP | Identifies the applicable lease-accounting literature under US GAAP | Does not prescribe this workpaper, prove lease data completeness, or decide landlord-law compliance |
| IFRS 16 | IASB standard for entities applying IFRS Accounting Standards | Identifies the lease recognition, measurement, presentation, and disclosure framework under IFRS | Does not apply merely because a tenant or bookkeeper is outside the United States |
| IRS Publication 527 | US federal tax-administration guidance for residential rental property | Distinguishes advance rent from a refundable security deposit for the described federal income-tax treatment | Does not determine GAAP or IFRS presentation, deposit custody, or state-law rights |
| New York GOL 7-103 | New York statute | Establishes trust, non-commingling, and deposit requirements for money within the section's scope | Does not govern property outside New York or resolve every exception without legal review |
| California Civil Code 1950.5 | California residential-landlord statute | Defines and governs covered residential security, permitted claims, and disposition evidence | Does not create the same text as New York's trust and non-commingling rule |
| 24 CFR 880.608 | Federal regulation for the specified Section 8 program | Establishes segregation, interest, account-balance, disposition, and dispute-record requirements for covered owners | Does not impose those requirements on every federally assisted or private rental property |

This hierarchy prevents a common category error: using a tax publication to decide book presentation, an accounting standard to decide whether deposit cash may be commingled, or one state's statute as a national operating rule.

## Freeze one reconciliation population

Start with the property and lease population, not the ledger balance. For each cycle, record:

- legal entity, property, building, unit, tenant, and lease IDs;
- reconciliation period, contractual charge period, common cutoff, currency, and time zone;
- lease and amendment version, source location, approval status, start and end dates, and occupancy status;
- property-system report name, filters, extraction timestamp, row count, and control total;
- tenant-ledger report name, transaction-status filter, extraction timestamp, row count, and total;
- general-ledger company, property dimension, account set, period status, report timestamp, and trial-balance total;
- receipt source, bank account, deposit batch, settlement date, bank-posting date, and amount;
- preparer, reviewer, open-period status, and links to the prior approved reconciliation.

Save untouched exports. A later report rerun may include backdated charges or corrections and is not the same population. Record later activity in a change tab or subsequent-events section instead of replacing the file that was originally reviewed.

Completeness requires both directions. Trace active leases and occupied units forward into expected charges, and scan posted charges backward for a valid lease and unit. A lease-only test misses unauthorized charges; a ledger-only test misses units that were never billed.

## Build expected charges from approved terms

Create one expected-charge row for each lease, charge code, and service period. Recommended evidence fields are:

- property, unit, tenant, lease, and charge IDs;
- lease source citation and amendment or notice reference;
- service-period start and end, due date, and effective date;
- base rent, recurring fee, approved concession, subsidy or tenant split where applicable, tax, and expected billed amount;
- proration basis stated in policy, with the input dates preserved;
- deposit requirement shown separately from rent;
- source currency, ledger currency, and approved exchange-rate reference if relevant;
- approval ID for nonstandard terms or manual overrides; and
- expected tenant-ledger code and general-ledger mapping version.

Do not fill an unclear lease term by copying last month's posting. Prior billing is comparison evidence, not authority for the current period. Send ambiguity to the property or legal owner and preserve the disputed text and affected amount.

The expected schedule should make gross components visible. A concession that is netted into base rent may reproduce the amount due while hiding its expiry date. A security deposit labeled as rent may reproduce cash while misstating both rental activity and the deposit obligation.

## Reconcile through the accounting chain

The recommended bridge has separate stages.

### Approved lease terms to tenant charges

For each expected row, match property, unit, tenant, lease, charge code, service period, amount, and effective date to the tenant ledger. Classify differences as missing, duplicate, wrong amount, wrong period, wrong tenant, wrong code, or unsupported charge. Keep approved prorations and concessions as explicit reconciling items.

### Tenant subledger to general ledger

Roll the tenant balance using opening receivable, charges, receipts applied, credits, refunds, write-offs, transfers, and closing receivable. Sum by legal entity, property, currency, and mapped control account, then compare with the general ledger at the same cutoff.

A direct journal to the receivable control account should appear as an exception unless the approved procedure explicitly permits it and links the tenant-level effect. Otherwise, the general ledger may tie while the tenant balances do not.

### Receipts to bank activity and tenant application

Match receipt ID, payer reference, amount, receipt date, deposit batch, bank posting, and tenant application. Keep these states distinct:

- received and applied;
- received but unapplied;
- applied before bank confirmation;
- returned or reversed;
- deposited in transit at cutoff;
- unidentified; and
- refunded or transferred with authorization.

Timing differences should carry the later clearing reference. An unidentified receipt is not rental income merely because cash reached the bank. A bookkeeper can research the payer and lease references, but ambiguous application, inter-tenant transfer, or refund remains an authorized cash decision.

### Security-deposit liability to custody evidence

Maintain a tenant-level rollforward of opening deposit liability, receipts, approved deductions, refunds, transfers, interest where required, and closing liability. Compare that schedule with the general-ledger liability and then with the applicable bank or custody account under the governing rule.

Do not assume that one deposit model applies everywhere. New York section 7-103 uses trust and non-commingling language for covered money. California section 1950.5 says covered security is held for the tenant and establishes permitted claims and disposition requirements, but the cited section should not be restated as New York's bank-segregation rule. For properties within 24 CFR 880.608, the federal regulation expressly requires a segregated, interest-bearing account and an account balance equal to covered deposits from families then in occupancy plus accrued interest.

The reconciliation should therefore include a jurisdiction and program field, the legal or compliance owner's documented rule, bank-account ID, tenant principal, required interest treatment, deductions pending approval, refunds pending, and any shortfall. Never offset a custody-account shortage with operating cash in the workpaper merely to display zero.

### General ledger to reporting output

Map reconciled activity to the entity's approved chart of accounts and reporting basis. Keep book, tax, and management-reporting adjustments separately identified. IRS Publication 527's treatment of advance rent and refundable deposits is federal income-tax guidance; it is not a substitute for the accounting policy selected under US GAAP, IFRS, or another valid basis.

The controller or qualified accounting owner decides recognition, classification, impairment, modification, and presentation. The bookkeeper may prepare the bridge and proposed entry support, but should not turn an unreconciled difference into revenue or expense to force agreement.

## Maintain an exception register that can be acted on

Every exception should include the property, unit, tenant or payer, lease and transaction IDs, issue type, first-detected date, exact source values, amount if known, affected period, evidence checked, proposed next action, decision owner, due date, current status, and resolution reference.

Article-specific exception categories include:

- occupied unit with no expected charge;
- charge without an active approved lease or outside the approved term;
- incorrect commencement, renewal, increase, concession, or move-out effective date;
- duplicate charge or omitted approved proration;
- receipt applied to the wrong tenant, property, entity, or period;
- cash in bank with no tenant application, or tenant receipt with no bank evidence;
- credit, write-off, refund, or transfer without the required approval;
- tenant-subledger total that does not match the general-ledger control account;
- manual journal posted directly to a control account without tenant detail;
- deposit recorded as rent or deposited into an account inconsistent with the documented rule;
- deposit liability that exceeds applicable custody-account evidence;
- stale refund, disputed deduction, or missing disposition statement;
- cross-property or cross-entity posting; and
- prior-period change introduced after the original export.

Do not assign a made-up universal tolerance or closure time. Management should set materiality, escalation, and review cadence for the entity, while legal deadlines and program rules take precedence where applicable. Zero-dollar data exceptions, trust-account shortfalls, and unauthorized changes may require escalation regardless of amount.

Close an item only when the cited evidence arrives, the authorized decision is recorded, and any resulting entry or system correction can be traced. A comment such as "reviewed" is not resolution evidence.

## Evidence packet and reviewer sign-off

A reproducible period packet should contain:

1. the frozen lease and unit population;
2. the expected-charge schedule with lease citations;
3. tenant-ledger, receipt, bank, deposit, and general-ledger exports with parameters and timestamps;
4. lease-to-charge, subledger-to-ledger, cash, and deposit rollforwards;
5. mapping tables and the version used;
6. the complete exception register, including open and reopened items;
7. approval records for concessions, credits, write-offs, refunds, transfers, and journals;
8. proposed and posted entry references kept visibly distinct; and
9. preparer and reviewer names, dates, scope, unresolved items, and final sign-off.

The reviewer should reperform selected paths in both directions and inspect all categories management has designated as sensitive, such as deposit custody, direct control-account journals, write-offs, and retroactive lease changes. Selection depth is risk-based and locally approved; the cited sources do not supply a universal sample size.

## Decision authority

| Decision or task | Bookkeeping preparation | Authority that remains with the client |
| --- | --- | --- |
| Extract terms and build expected charges | Transcribe observable terms with page or clause citations | Property or legal owner resolves ambiguous lease language and commercial terms |
| Match charges, receipts, and ledger entries | Perform comparisons, document differences, and draft proposed corrections | Controller approves account policy, mappings, period treatment, and entries requiring judgment |
| Apply unidentified or disputed cash | Research payer, unit, and lease evidence | Authorized property or treasury role approves application, transfer, or refund |
| Credit or write off a tenant balance | Assemble aging, correspondence, and calculation support | Authorized property and finance owners approve the commercial decision and accounting entry |
| Hold, deduct, transfer, or refund a deposit | Maintain the schedule and prepare disposition evidence | Authorized property, treasury, and legal or compliance roles decide under governing law and lease terms |
| Move money or release a payment | Prepare an approved payment packet if assigned | Bank signer or payment approver releases funds; the preparer does not self-approve |
| Select US GAAP, IFRS, tax, or other treatment | Keep separate bridges and cite the identified framework | Qualified accounting and tax owners determine applicable treatment |

Remote or offshore staffing does not change these boundaries. Access should be limited to what the assigned preparation task needs, especially for bank and deposit accounts.

## Method and limitations

This brief synthesizes accounting-framework pages, US federal tax guidance, two state statutes, and a federal housing-program regulation. The reconciliation steps and evidence fields are operating recommendations inferred from the need to connect those separate records. They are not procedures issued by FASB, the IASB, the IRS, New York, California, or HUD.

The sources cover different populations and may change. Publication 527 addresses US federal income tax for residential rental property, not every property type or reporting question. Topic 842 and IFRS 16 apply only under their respective reporting frameworks. The New York, California, and Section 8 deposit provisions are not substitutes for a current review of every state, locality, program, lease, or bank arrangement affecting a property.

A completed reconciliation cannot prove that the lease is enforceable, notices are valid, all units were disclosed, a bank account has the legally required title, or a deposit deduction is permissible. It also does not estimate fraud, error, vacancy, or collection performance. Before use, the responsible accounting, tax, property, treasury, and legal owners should approve the population, mappings, custody model, materiality, deadlines, and escalation rules for the actual portfolio.
