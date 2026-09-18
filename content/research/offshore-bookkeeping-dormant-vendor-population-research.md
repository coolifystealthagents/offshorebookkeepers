---
title: "What a dormant-vendor review can and cannot establish"
description: "A protocol for defining an inactive vendor population while keeping inactivity separate from fraud, error, and deactivation decisions."
published: "2026-09-07"
updated: "2026-09-17"
category: "Bookkeeping research"
type: "research"
featuredImage: "/thumbnails/bookkeeping-vendor-master-change-control-research.webp"
takeaways: ["Define qualifying activity, the inactivity interval, covered systems, and eligible vendor types against a dated master snapshot.","Treat dormant status as a review flag, not evidence of fraud, error, or lack of business need.","Route status changes to an authorized owner after checking open items, seasonal use, contracts, and recent master-data changes."]
sources: [{"name":"U.S. GAO, A Framework for Managing Fraud Risks in Federal Programs (GAO-15-593SP)","url":"https://www.gao.gov/products/gao-15-593sp"},{"name":"U.S. GAO, Standards for Internal Control in the Federal Government (GAO-14-704G)","url":"https://www.gao.gov/products/gao-14-704g"},{"name":"Internal Revenue Service, Recordkeeping","url":"https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"}]
sourceNotes: [{"claim":"GAO-15-593SP discusses data-analytics activities as part of a broader fraud-risk management process. An inactivity query may help select records for review, but this brief does not treat a dormant flag as a fraud finding or claim that the GAO framework applies directly to private bookkeeping.","sourceUrls":["https://www.gao.gov/products/gao-15-593sp"]},{"claim":"GAO-14-704G Principles 10 and 12 address designed control activities, assigned responsibility, and documented performance. They support requiring an authorized decision and review trail before changing vendor status; GAO does not prescribe an inactivity threshold.","sourceUrls":["https://www.gao.gov/products/gao-14-704g"]},{"claim":"The IRS recordkeeping page identifies purchases and expenses among the records a business should support and explains that retention depends on the record's purpose. It supports retaining transaction evidence for the review, not a universal vendor-master retention period or deactivation rule.","sourceUrls":["https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"]}]
faqs: [{"question":"Does dormant mean that a vendor is invalid or improper?","answer":"No. It means only that the record met a predefined inactivity rule in the covered data. It is a review flag, not a conclusion."},{"question":"Should dormant vendors be disabled automatically?","answer":"No. An authorized owner should consider open items, seasonal or recurring use, contracts, system dependencies, and recent changes before altering status."}]
---
Published September 7, 2026; updated September 17, 2026. This brief describes a population-selection method. It analyzes no vendor master or payment history and does not recommend that any specific record be blocked, merged, or deleted.

## Inactivity is a rule, not a verdict

Freeze the vendor master as of a stated date. Before querying it, define the entities, covered systems, eligible vendor types, qualifying transaction classes, and inactivity interval. One unique vendor ID in that snapshot is the observation unit. Duplicates, one-time vendors, intercompany records, blocked records, and never-used records need written treatment rather than after-the-fact removal.

The output is a population that met the declared rule. It does not establish fraud, duplication, invalid identity, or lack of future business need. GAO's fraud-risk framework makes data analytics part of a wider risk-management process; this protocol adopts the bounded idea of using a query to select records for follow-up, not the conclusion that inactivity is suspicious.

## Assemble the review record

For every eligible ID, retain active status, last qualifying transaction date, open payables or credits, recent master-data changes, recurring or seasonal indicator, responsible owner, and final disposition. Preserve the master snapshot, transaction-extract parameters, extraction time, row counts, and reconciliation of vendor IDs between the two sources.

Only fields needed for identification and review should enter the working file. Bank details, tax identifiers, addresses, and contacts should be masked or omitted unless the approved follow-up requires them. The IRS recordkeeping guidance supports retaining evidence for purchases and expenses, but it does not define this extract or how long a vendor record must remain active.

## Calculate and segment the population

Set a cutoff date by subtracting the approved inactivity interval from the snapshot date. Count eligible vendors whose latest qualifying activity is before that cutoff, then divide by all eligible vendor IDs. Report never-used records separately because they have no last-activity date. Disclose records for which history is missing or the identifier cannot be matched.

Segment, without silently redefining the denominator, dormant records that have open balances, pending payments, recent bank-detail changes, contracts, or recurring status. Those flags help prioritize review. They do not prove the record should be disabled, and they should not change the inactivity result unless the approved inclusion rule says so.

## Put decisions behind an authorization boundary

A bookkeeper can assemble authorized extracts, apply the frozen rule, and route flagged records. The vendor-master owner should approve eligibility, qualifying activity, and any status change. A reviewer should retest samples from dormant, active, never-used, and excluded groups and reconcile unmatched IDs.

GAO's internal-control principles support documented responsibility and review, but they do not require this exact workflow. Callback procedures, payment controls, privacy restrictions, tax treatment, and record retention remain separate decisions for their authorized owners. The dormant label alone should trigger none of them automatically.

## Explain changes before comparing periods

Seasonal suppliers, long-term contracts, acquisitions, duplicate cleanup, entity restructuring, and system migrations can alter the dormant share. Missing legacy transactions can make records appear older, while a consolidated vendor ID can conceal recent activity. These conditions are competing interpretations, not demonstrated causes.

Systems also differ in archival rules, identifier reuse, and transaction coverage. Any reported result should disclose the snapshot date, threshold, qualifying activities, eligible population, covered systems, unmatched IDs, exclusions, missing-history constraints, and review dispositions. No external benchmark follows from this protocol.
