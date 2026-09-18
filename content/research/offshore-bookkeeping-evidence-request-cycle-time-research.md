---
title: "Measuring bookkeeping evidence-request cycle time by source"
description: "A prospective method for timing evidence requests from a valid request through receipt of complete evidence, including unresolved items."
published: "2026-09-07"
updated: "2026-09-17"
category: "Bookkeeping research"
type: "research"
featuredImage: "/thumbnails/offshore-bookkeeping-evidence-queue-aging-research.webp"
takeaways: ["Start the clock only when the request identifies the required evidence, covered period, source, and owner.","Measure first response separately from receipt of evidence that meets the predefined completion rule.","Keep unresolved requests in the population and disclose the cutoff, channel coverage, and business-time convention."]
sources: [{"name":"PCAOB AS 1105, Audit Evidence","url":"https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105"},{"name":"PCAOB AS 1215, Audit Documentation","url":"https://pcaobus.org/oversight/standards/auditing-standards/details/AS1215"},{"name":"U.S. GAO, Standards for Internal Control in the Federal Government (GAO-14-704G)","url":"https://www.gao.gov/products/gao-14-704g"}]
sourceNotes: [{"claim":"PCAOB AS 1105 explains, in an audit context, that evidence must be sufficient and appropriate and that reliability depends on its nature, source, and circumstances. This brief uses those attributes to define complete receipt; it does not claim a bookkeeping request is audit evidence under the standard.","sourceUrls":["https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105"]},{"claim":"PCAOB AS 1215 requires audit documentation to identify work performed, evidence obtained, and who performed and reviewed work. The proposed request register borrows those traceability attributes only as an operational analogy.","sourceUrls":["https://pcaobus.org/oversight/standards/auditing-standards/details/AS1215"]},{"claim":"GAO-14-704G Principles 13 through 15 address quality information and internal and external communication. They support naming information requirements and owners before timing the flow; GAO provides no evidence-request response-time target.","sourceUrls":["https://www.gao.gov/products/gao-14-704g"]}]
faqs: [{"question":"Does the first reply stop evidence-request cycle time?","answer":"Only if it supplies evidence that meets the predefined completion rule. Track an acknowledgment or incomplete response under a separate first-response measure."},{"question":"How should requests still open at the cutoff be handled?","answer":"Retain them as unresolved observations and report their age at the cutoff. Do not assign a fabricated completion time or remove them from the population."}]
---
Published September 7, 2026; updated September 17, 2026. This article defines a prospective timing study. It contains no client request log, response-time result, or service-level benchmark.

## Define a valid start and a valid finish

Select fixed close cycles and include every in-scope request issued during them. A valid request has a unique ID and states the required record, covered period, source system, document type, and responsible owner. The clock starts when that complete request is sent, not when a vague question or draft is created.

The completion event occurs when the requested evidence is received and meets a written sufficiency rule. An acknowledgment, inaccessible link, wrong period, or partial file does not stop that clock. PCAOB AS 1105 supplies audit-context concepts of sufficiency, appropriateness, and source reliability; the process owner must translate those concepts into a bookkeeping-specific acceptance rule.

## Build one event chain per request

Maintain the request timestamp, first response, each evidence receipt, completeness decision, reminders, reopening, cancellation, and final status under the original ID. Link duplicate messages rather than treating them as new observations. Define bundled requests, scope changes, and cancellations before analysis.

Do not copy document contents or unnecessary message text into the timing file. Store event metadata and evidence references under existing access controls. The proposed lineage borrows from PCAOB AS 1215's audit-documentation attributes, while GAO's Green Book supports explicit information requirements and communication ownership. Neither authority prescribes this register for ordinary bookkeeping.

## Publish separate timing measures

For completed requests, calculate time from valid request to complete receipt using one declared convention: calendar time, stated business hours, or another reproducible clock. Report time to first response separately. Show the number of requests and medians plus ranges or selected percentiles by source and document type when groups are large enough to describe responsibly.

Requests open at the study cutoff remain in the denominator. Report their age at cutoff and unresolved count; do not code them as zero, assign the cutoff as completion, or analyze only completed records without warning. If a formal time-to-event method is used, specify it and obtain appropriate statistical review rather than presenting a completed-only average as the full experience.

## Test completion decisions and timestamps

A reviewer should trace a sample from the original request through the referenced file and completeness decision, including reopened and still-open items. The reviewer should also test edited or missing timestamps and verify that reminders did not create duplicate IDs. Source and document-type labels should be locked before group comparisons.

A bookkeeper may maintain the register and apply approved statuses. The process owner defines acceptable evidence and who may close or reopen a request. The measure describes a workflow and should not become an individual performance score.

## Bound the interpretation

System availability, request specificity, document complexity, weekends, holidays, access failures, and changed scope can coincide with longer elapsed time. Source groups may also have different document mixes. These factors require stratification or case review; they do not establish why one observation took longer.

Email and ticket timestamps record system events, not effort. Calls and chat may be absent, and reviewers may apply completion rules inconsistently. A report should disclose included channels and cycles, cutoff treatment, missing timestamps, completion criteria, clock convention, reopening rules, group counts, and process changes. The method yields a local description, not a universal target for offshore or client teams.
