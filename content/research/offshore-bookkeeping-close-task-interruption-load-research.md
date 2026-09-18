---
title: "A protocol for measuring interruptions during the bookkeeping close"
description: "An event-log design for separating unplanned close interruptions from scheduled dependencies, with privacy and interpretation limits."
published: "2026-09-07"
updated: "2026-09-17"
category: "Bookkeeping research"
type: "research"
featuredImage: "/thumbnails/bookkeeping-review-sampling-research.png"
takeaways: ["Define an interruption before logging begins and keep scheduled waits in a separate category.","Report event counts and nonoverlapping interrupted minutes without turning either measure into an employee score.","Use the minimum person-level data needed and annotate outages, close-scope changes, and logging changes before comparing periods."]
sources: [{"name":"U.S. Bureau of Labor Statistics, American Time Use Survey User's Guide","url":"https://www.bls.gov/tus/atususersguide.htm"},{"name":"U.S. GAO, Standards for Internal Control in the Federal Government (GAO-14-704G)","url":"https://www.gao.gov/products/gao-14-704g"},{"name":"NIST Privacy Framework, Version 1.0","url":"https://doi.org/10.6028/NIST.CSWP.01162020"}]
sourceNotes: [{"claim":"The BLS American Time Use Survey User's Guide documents an activity-diary approach that records activities in chronological episodes and assigns activity codes. It is a measurement precedent, not evidence about bookkeeping interruptions or productivity.","sourceUrls":["https://www.bls.gov/tus/atususersguide.htm"]},{"claim":"GAO-14-704G Principles 6, 10, and 13 address defining objectives, designing control activities, and using quality information. They support fixing the task population and logging rule before comparison; GAO reports no close-interruption benchmark.","sourceUrls":["https://www.gao.gov/products/gao-14-704g"]},{"claim":"The NIST Privacy Framework Version 1.0 is a voluntary framework for identifying and managing privacy risk arising from data processing. It supports a privacy review of person-level event logs but does not prescribe this study design or a retention period.","sourceUrls":["https://doi.org/10.6028/NIST.CSWP.01162020"]}]
faqs: [{"question":"What counts as a close-task interruption?","answer":"For this protocol, it is an unplanned stop or diversion after work on a scheduled task begins. A dependency already built into the close plan is recorded separately."},{"question":"Should interruption load be used to rank staff?","answer":"No. The result is sensitive to task mix, escalation duties, outages, logging behavior, and close scope; it is designed to describe workflow conditions."}]
---
Published September 7, 2026; updated September 17, 2026. This brief proposes a measurement design. It contains no organization-level time records, productivity findings, or evidence that an offshore staffing arrangement causes interruptions.

## Start from the close calendar

Freeze the scheduled task list for one close process and a defined sequence of periods. Every scheduled task instance remains in the population, including tasks with no interruption. This prevents an event-only log from hiding the uninterrupted denominator.

For this study, an interruption begins when active work stops because of an unplanned request, access failure, unavailable record, system incident, or decision dependency. It ends when work resumes or the task moves to another declared state. Scheduled handoffs, planned review waits, weekends, and prerequisites already represented in the close calendar use separate status codes. The definitions must be fixed before anyone sees period comparisons.

## Use a small event record

For each interruption, retain the task ID, category, stop time, resume time, initiating dependency, and resolution state. Avoid message bodies, screenshots, keystroke capture, or continuous monitoring. Preparers should be able to correct an accidental timestamp while preserving an edit history.

The BLS time-diary method is useful here only as a precedent for chronological episodes and coding. It does not validate these categories or imply that diary entries measure productivity. GAO's control principles support a defined objective and reviewable information, while the NIST Privacy Framework supplies a reason to assess the privacy consequences of person-level logging. The protocol is an OffshoreBookkeepers.com design built from those bounded ideas.

## Calculate duration without double counting

Report interruption events per scheduled task and nonoverlapping interrupted minutes. If two blockers overlap, count both categories as events but count the elapsed interval once in total interrupted time. State whether elapsed time uses calendar hours, staffed hours, or another convention, and define treatment of overnight spans before calculation.

Keep total wall-clock task duration separate. A task can remain open overnight without being actively interrupted, and a short task can have several diversions. Show counts, medians, and a distribution by predeclared category; do not rely on a single average. Missing stop or resume times should appear as data-quality exceptions rather than imputed precision.

## Review the log as workflow evidence

A reviewer should sample both interrupted and uninterrupted tasks, compare their status histories with the event log, and test the planned-versus-unplanned distinction. Changes to the close calendar or category guide should be versioned. Access to identifiable logs should be limited to a stated purpose and period, with aggregate reporting used where it meets the need.

Preparers may enter events, but the close owner should approve the task population and category definitions. An independent reviewer should test coding and calculations. Employment decisions and individual productivity scoring sit outside this protocol.

## Conditions that change the result

Transaction volume, account complexity, close scope, system outages, deadline changes, and escalation assignments can alter the observed load. Logging may also become more complete over time, making a later period look worse even when work conditions did not deteriorate. These are alternative explanations to investigate, not proven causes.

Manual logs miss brief diversions and may round times; system histories show status changes but not necessarily attention. Small populations make category comparisons unstable. Any report should disclose task coverage, recording method, missing events, privacy controls, overlap rules, calendar changes, and exceptional incidents. No universal threshold follows from this design.
