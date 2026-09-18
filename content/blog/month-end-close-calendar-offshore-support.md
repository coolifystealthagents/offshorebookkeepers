---
title: "Build a month-end close calendar for offshore bookkeeping support"
description: "Translate the monthly close into sequenced tasks with relative close-day deadlines, dependencies, named owners, review evidence, and escalation rules."
published: "2026-08-07"
updated: "2026-09-17"
category: "Month-End Close"
type: "blog"
featuredImage: "/thumbnails/month-end-close-calendar-offshore-support.webp"
takeaways: ["Anchor deadlines to a defined close day and sequence tasks by dependency instead of assigning every workpaper the same due date.","Give each task a preparer, reviewer, input, output, evidence standard, stop condition, and escalation owner.","Use offshore handoffs deliberately by recording time zone, cutoff, status, source links, open questions, and the next required action."]
relatedLinks: [["An ecommerce bookkeeping reconciliation workflow","/blog/ecommerce-bookkeeping-reconciliation-workflow"],["Property bookkeeping support and rent roll controls","/blog/property-bookkeeping-rent-roll-controls"],["Law firm bookkeeping boundaries for trust account support","/blog/law-firm-trust-account-bookkeeping-boundaries"]]
faqs: [["What does close day mean?","Close day is a relative business-day label tied to period end. CD-1 is the business day before period end, CD+1 is the first designated business day after it, and so on. The company should document treatment of weekends, holidays, and local time zones."],["Should the bookkeeper own the whole close?","A bookkeeper can own assigned preparation and coordination tasks. Management or its accounting lead should retain responsibility for accounting policies, estimates, material judgments, adjustment approval, period lock, and release of reports."],["What happens when a dependency is late?","Record the missing input, affected downstream tasks, current owner, requested decision, and revised forecast. Escalate according to the calendar rather than silently marking the dependent task complete or inserting an unsupported estimate."]]
---
A month-end close calendar is a dependency map, not a list of recurring reminders. It explains which source activity must stop, which reports must arrive, which workpapers can begin, who prepares and reviews each item, and what evidence marks the task complete. That structure is especially important when an offshore bookkeeping team works in a different time zone from approvers and operational owners.

The calendar should reflect the company's accounting basis, systems, material accounts, and reporting deadline. The example below is illustrative; management should adjust tasks and timing to its actual close rather than treating any close-day sequence as a universal standard.

## Define the calendar clock

Choose one period-end convention and write it at the top of the calendar. If `CD` means close day, define whether it follows the entity's local business calendar and how weekends and holidays move due dates. Also specify the time zone and cutoff hour. “Due CD+2” is ambiguous if the preparer reads it as Manila time while the reviewer reads it as New York time.

Relative dates make the template reusable:

- **CD-3** means three designated business days before period end;
- **CD0** is the final calendar or business cutoff defined by the company;
- **CD+1** is the first designated business day after that cutoff; and
- **CD+5** is the fifth designated business day after it.

If different entities close on different statutory calendars, maintain entity-level dates under a group reporting milestone. Freeze the month's actual dates before work begins so holiday assumptions do not change mid-close.

## Give each task a complete control record

A useful calendar row contains more than a task name and date. Include:

- task ID and process area;
- entity, account, system, and period;
- preparer and backup preparer;
- reviewer and escalation owner;
- required inputs and the owner of each input;
- predecessor task IDs;
- planned start and due date expressed as close days and actual timestamps;
- expected output and evidence location;
- review criteria and evidence of approval;
- status, blocker reason, and forecast completion; and
- whether the task blocks reporting or can remain as a disclosed follow-up.

Use names or maintained roles, not “finance team.” A person should know whether they owe a source file, a prepared workpaper, an accounting decision, or approval. Status options should also be defined. “Prepared” should not mean “reviewed,” and “waiting” should identify whom or what the task is waiting for.

## Sequence a representative close

The following calendar illustrates dependencies and ownership. The actual day assigned to each row should follow the company's reporting needs and source availability.

| Relative due date | Task and primary owner | Key dependency | Completion evidence | Escalation trigger |
|---|---|---|---|---|
| CD-3 | Send cutoff reminders and source checklist  -  close coordinator | Approved close scope and contact list | Dated notice and tracker opened | Missing source owner or changed deadline |
| CD-1 | Collect recurring schedules  -  process owners; coordinator tracks | Payroll, billing, inventory, debt, and other source calendars | Files stored with period and owner identified | Required schedule not forecast by cutoff |
| CD0 | Confirm subledger and transaction cutoffs  -  system/process owners | Final operational posting windows | Cutoff confirmation and exception list | Activity continues after agreed cutoff |
| CD+1 | Import bank, card, sales, purchasing, and payroll activity  -  bookkeeper | Feeds available and source totals received | Import control totals and rejected-item log | Control totals differ or a source is incomplete |
| CD+2 | Reconcile cash, cards, receivables, and payables  -  bookkeeper | CD+1 imports and subledger reports | Signed workpapers with reconciling items | Unexplained difference or stale material item |
| CD+3 | Prepare accruals, prepaids, fixed assets, payroll, debt, and intercompany schedules  -  assigned preparers | Source schedules and reconciled activity | Workpapers and proposed entries linked | Policy question, unsupported estimate, or entity mismatch |
| CD+4 | Review workpapers and approve adjustments  -  controller/accounting owner | Prepared schedules and exception log | Review notes resolved; entries approved and posted | Material item unresolved or reviewer unavailable |
| CD+5 | Run final statements and management packet  -  reporting preparer | Approved adjustments and reconciliation status | Versioned reports tied to final trial balance | Reports do not tie or blocking task remains open |
| CD+5 | Lock or restrict the period  -  authorized accounting administrator | Release approval | Lock confirmation and approved reopen procedure | Late entry requested without authorization |
| CD+6 | Retrospective and roll-forward  -  close coordinator | Final action log | Carried-forward items, owners, and calendar changes | Repeated blocker lacks a corrective owner |

Some work can run in parallel. Bank reconciliations for an account with a final statement may proceed while another source schedule is pending. The dependency field should make that safe: a task begins when its own inputs are ready, not merely because the calendar date has arrived.

## Define evidence for preparation and review

“Done” should correspond to a reproducible work product. For a bank reconciliation, evidence might include the statement, ledger detail, outstanding-item schedule, explanation of differences, preparer signoff, and reviewer signoff. For an accrual, it might include the source calculation, service period, account and entity coding, reversal treatment, journal entry, and approval.

Store evidence in a predictable period folder or controlled workflow. File names should identify entity, account or task ID, period, and version. Links in the calendar are preferable to attachments scattered across chat. If a report is rerun after review, retain or version the reviewed output so the audit trail does not point to a changing file.

Reviewer fields should capture who reviewed, when, what exceptions were raised, and how they were resolved. A checkbox alone is weak if the underlying task involved judgment. Conversely, do not force long narratives for routine zero-exception work when a tie-out and dated signoff provide clear evidence.

## Establish stop conditions and escalation

The offshore preparer should not be pressured to turn a blocker into an unsupported entry merely to preserve the calendar. Each procedure should state when to stop. Typical stop conditions include a control total that does not agree, missing source documents, an unknown entity or period, an accounting treatment outside the playbook, an unusual related-party item, a proposed entry above the role's authority, or a request to post after lock.

The escalation record should identify:

1. the task and affected accounts or reports;
2. the missing input or decision;
3. checks already performed and links to evidence;
4. the person currently responsible;
5. the decision needed and response deadline;
6. downstream tasks and reporting dates at risk; and
7. the fallback, if management has approved one.

Use tiered timing based on impact. A missing immaterial receipt and an unexplained cash difference may require different owners and response windows. The accounting owner - not the preparer - should decide whether an estimate is acceptable, whether the close may proceed with disclosure, or whether reporting must wait.

## Design the offshore handoff

Time-zone separation can create a productive relay if the handoff is explicit. At the end of the offshore shift, update each active task with work completed, evidence link, unresolved question, current blocker, next action, and owner. The onshore reviewer can respond during their day, allowing the preparer to resume with a recorded decision rather than reconstructing a chat thread.

Set an overlap window only where live discussion is useful, such as unusual adjustments or final close review. Routine questions should use the task record so answers are retained. Also define a response path for urgent or sensitive items and a backup approver for planned absences.

Permissions should match the role map. A preparer may need to upload support and draft an entry without being able to approve that entry, change accounting policy, unlock a period, or release final reporting. Shared credentials blur responsibility and make evidence less reliable.

## Maintain the calendar after each close

After reports are released, review actual completion dates, blocked time, reopened tasks, late adjustments, repeated reconciling items, and unresolved actions. The purpose is to improve dependencies and instructions, not simply to score people on speed. If a source always arrives on CD+3, either change its upstream deadline or move dependent work; repeatedly scheduling the impossible for CD+1 does not create control.

Update task instructions when systems, accounts, entities, or reviewers change. Carry unresolved balance-sheet items into an owned roll-forward log. Record approved calendar changes before the next period opens.

For help structuring recurring preparation, see [monthly close support](/services/month-end-close-support). [Reporting and review support](/services/management-reporting-support) can organize the output that depends on the completed close. In either case, management should approve the calendar, accounting decisions, escalation authority, and final release.
