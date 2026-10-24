---
title: "Testing Payroll Source Reconciliation"
description: "A method for comparing hours, rates, deductions, taxes, and the posted journal across sources."
published: "2026-10-22"
updated: "2026-10-22"
category: "Payroll & Tax"
type: "research"
featuredImage: "/oct22-heroes/payroll-source-reconciliation-method.svg"
takeaways: ["Define the unit, population, and exclusions before reviewing outcomes.","Preserve source, version, owner, and disposition for every record.","Report denominators and limitations; do not infer causation from a bounded sample."]
sources: [{"name":"NIST, SP 800-53 Rev. 5","url":"https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"},{"name":"U.S. GAO, Standards for Internal Control in the Federal Government","url":"https://www.gao.gov/products/gao-14-704g"},{"name":"NIST, Privacy Framework","url":"https://www.nist.gov/privacy-framework"}]
sourceNotes: [{"claim":"The sources support documented controls, reviewable evidence, and separation of duties.","sourceUrls":["https://www.gao.gov/products/gao-14-704g","https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"]}]
relatedLinks: [["Close and reporting support","/services/management-reporting-support"],["Review the research library","/research"]]
faqs: [{"question":"What does this method measure?","answer":"It measures whether the documented record supports the stated question and owner decision."},{"question":"What can it not establish?","answer":"It cannot establish causation, a legal conclusion, or a performance rating for an individual."}]
---

## Research question and scope

This study asks whether each payroll component reconciles to an approved source before posting. The unit is one record in a declared population. The method defines the period, entity, source systems, inclusion rules, exclusions, and the owner who may act on the result. It is an operating measurement protocol, not an audit opinion or a claim about every bookkeeping team.

## Population and evidence

Collect the source, pay component, variance, owner, journal, verification for each record. Include routine, returned, corrected, disputed, reopened, and unresolved cases. Preserve original timestamps and timezones, source identifiers, versions, and retrieval dates. Mark missing or conflicting evidence instead of filling the gap with an assumption.

## Coding and independent review

Two reviewers classify the same frozen sample and record their reasons separately. Agreement is measured for source extraction, classification, routing, and closure. Disagreements are adjudicated against the written definition; if the reviewers cannot reconcile the rule, the definition changes before the sample expands.

## Measures and limitations

Report counts with denominators, exclusions, and missing-data rates. Common measures include source completeness, owner wait time, rework, unresolved rate, and verified closure. The sample is bounded, the records may be incomplete, and the method does not establish causation. State what the record cannot prove.

## Decision use

Give the owner a one-page result, the affected population, the main gap, the proposed control change, and a retest date. Change one control at a time. Stop the pilot if the evidence cannot be produced consistently or if the owner cannot name the decision the measurement supports.
