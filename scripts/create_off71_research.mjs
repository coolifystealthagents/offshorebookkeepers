import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const date = '2026-09-19';
const displayDate = 'September 19, 2026';
const sources = [
  {name:'U.S. GAO, 2025 Green Book',publisher:'U.S. GAO',url:'https://www.gao.gov/greenbook'},
  {name:'PCAOB, AS 1105: Audit Evidence',publisher:'PCAOB',url:'https://pcaobus.org/oversight/standards/auditing-standards/details/AS1105'},
  {name:'PCAOB, AS 1215: Audit Documentation',publisher:'PCAOB',url:'https://pcaobus.org/oversight/standards/auditing-standards/details/AS1215'},
  {name:'PCAOB, AS 2201: An Audit of Internal Control Over Financial Reporting',publisher:'PCAOB',url:'https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201'},
  {name:'NIST, Cybersecurity Framework 2.0',publisher:'NIST',url:'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20'},
  {name:'NIST, Data Integrity',publisher:'NIST',url:'https://csrc.nist.gov/glossary/term/data_integrity'},
  {name:'NIST, Role Based Access Control',publisher:'NIST',url:'https://csrc.nist.gov/projects/role-based-access-control'},
  {name:'IRS, Recordkeeping',publisher:'IRS',url:'https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping'},
];

const topics = [
  {slug:'offshore-bookkeeping-outstanding-check-aging-research', title:'How to study outstanding-check aging in bank reconciliation', category:'Bank reconciliation', question:'whether issued checks remain uncleared long enough to require investigation, reissue, stop-payment review, or accounting action', unit:'one issued check linked to a bank-account reconciliation', event:'a check that is still outstanding at the defined measurement cutoff', fields:'check ID, bank account, legal entity, issue date, payee token, amount, ledger posting, bank-cleared date, void or reissue status, owner, and evidence link', groups:'bank account, entity, amount band, issue month, payment channel, payee type, and aging band', exceptions:'voids not reflected in the ledger, reissued checks whose original remains open, duplicate check identifiers, bank-feed gaps, stale dates, post-cutoff clearing, and items awaiting authorized stop-payment or escheatment review', owner:'treasury or controller', link:'/services/bank-reconciliation-support'},
  {slug:'offshore-bookkeeping-unapplied-customer-cash-aging-research', title:'How to study unapplied customer-cash aging', category:'Accounts receivable', question:'whether customer receipts are being identified and applied promptly or are accumulating in suspense and distorting account-level receivables', unit:'one customer receipt or receipt component', event:'a receipt component still unapplied after the preregistered cutoff', fields:'receipt ID, payer reference, bank deposit, entity, customer candidate, amount, currency, receipt date, application date, invoice reference, exception reason, owner, and evidence link', groups:'entity, receipt channel, amount band, customer segment, currency, receipt week, and aging band', exceptions:'missing remittance detail, one payment covering multiple invoices, deductions, customer-master ambiguity, cross-entity receipts, reversals, chargebacks, and post-cutoff applications', owner:'accounts-receivable manager or controller', link:'/services/accounts-receivable-support'},
  {slug:'offshore-bookkeeping-payroll-suspense-clearance-research', title:'How to study payroll-suspense clearance', category:'Payroll preparation', question:'whether payroll-related suspense and clearing balances are resolved with evidence before the close or simply carried forward', unit:'one payroll suspense or clearing-account item', event:'an item that lacks a supported final account, employee or tax mapping, or authorized disposition at the cutoff', fields:'payroll run, entity, pay date, source-system ID, ledger line, amount, account, employee token where permitted, jurisdiction, proposed mapping, resolution date, reviewer, and evidence link', groups:'entity, payroll provider, account, jurisdiction, source type, amount band, pay cycle, and aging band', exceptions:'provider-to-ledger differences, returned wages, benefit deductions, tax withdrawals, garnishments, rounding, off-cycle payroll, reversals, and restricted employee data', owner:'payroll owner or controller', link:'/services/payroll-journal-preparation'},
  {slug:'offshore-bookkeeping-close-review-signoff-latency-research', title:'How to study month-end review sign-off latency', category:'Month-end close', question:'where completed close work waits for review, clarification, correction, or final sign-off and which dependency actually controls release of the reporting packet', unit:'one defined close task submitted for review', event:'elapsed time from evidence-complete submission to authorized sign-off, with returned and paused periods reported separately', fields:'task ID, entity, period, preparer submission time, evidence-complete flag, reviewer assignment, first-review time, return times, pause reason, approval time, reopen time, and evidence link', groups:'entity, close area, reviewer role, submission day, complexity band, return count, dependency type, and elapsed-time band', exceptions:'incomplete submissions, reviewer reassignment, weekends and holidays, system outages, reopened tasks, late source data, policy questions, and sign-offs recorded outside the workflow', owner:'close manager or controller', link:'/services/month-end-close-support'},
  {slug:'offshore-bookkeeping-ap-duplicate-candidate-resolution-research', title:'How to study AP duplicate-invoice candidate resolution', category:'Accounts payable', question:'whether duplicate-invoice detection produces timely, supported decisions without allowing candidate alerts to become an unreviewed queue', unit:'one system- or rule-generated duplicate-invoice candidate pair or cluster', event:'a candidate that remains unresolved or is released without the required comparison and approval evidence', fields:'candidate ID, entity, vendor token, invoice references, dates, gross amounts, currency, purchase-order reference, detection rule, disposition, reviewer, resolution time, and evidence link', groups:'entity, vendor segment, detection rule, amount band, invoice channel, purchase-order status, disposition, and aging band', exceptions:'credit notes, recurring invoices, split billing, reused vendor numbers, OCR errors, cross-entity invoices, legitimate installments, and candidates overridden before review', owner:'accounts-payable manager or controller', link:'/services/accounts-payable-processing'},
];

function article(t) {
  const listed = JSON.stringify(sources.map(({name,url})=>({name,url})));
  const notes = JSON.stringify([
    {claim:'GAO presents principles for designing, implementing, and operating internal control and evaluating deficiencies; this article applies those principles by analogy and does not claim GAO prescribes the proposed bookkeeping metric.',sourceUrls:[sources[0].url]},
    {claim:'PCAOB AS 1105 and AS 1215 address evidence and documentation in PCAOB audit contexts; they support the distinction between a recorded conclusion and inspectable support, but do not turn this protocol into an audit procedure.',sourceUrls:[sources[1].url,sources[2].url]},
    {claim:'NIST materials support explicit access roles and protection of data integrity; they do not decide accounting treatment, payment authority, or staffing performance.',sourceUrls:[sources[4].url,sources[5].url,sources[6].url]},
    {claim:'IRS recordkeeping guidance explains that supporting records should substantiate business transactions; retention and tax treatment still depend on the actual record and applicable requirements.',sourceUrls:[sources[7].url]},
  ]);
  return `---
title: "${t.title}"
description: "A reproducible study protocol for ${t.question}, with frozen populations, evidence coverage, decision rights, and limitations."
published: "${date}"
updated: "${date}"
category: "${t.category}"
type: "research"
featuredImage: "/thumbnails/offshore-bookkeeping-cutoff-assertion-confidence-research.png"
sources: ${listed}
sourceNotes: ${notes}
takeaways: ["Freeze the population, cutoff, clock, and status definitions before calculating results.","Report missing evidence, returned work, exclusions, and reopened items beside the headline measure.","Keep preparation with the bookkeeping team and judgment, approval, release, and policy decisions with the authorized client owner."]
relatedLinks: [["View the related service","${t.link}"],["Explore the research library","/research"],["Plan a controlled bookkeeping role","/contact-us"]]
faqs: [{"question":"Does this report publish a market benchmark or client result?","answer":"No. It defines a reproducible study protocol. It contains no private client dataset, prevalence estimate, staffing score, or claimed performance result."},{"question":"Can this measure be used to rank bookkeepers?","answer":"No. It is a workflow diagnostic whose meaning depends on population, systems, evidence coverage, decision rights, and reviewer availability."},{"question":"Who approves judgment-dependent outcomes?","answer":"The client's authorized ${t.owner} retains judgment, policy, approval, release, and accounting decisions. A bookkeeper may assemble records and apply documented rules."}]
serviceHandoff: {"href":"/contact-us","label":"Discuss a controlled bookkeeping scope","title":"Turn the protocol into a reviewable handoff","body":"Define the source records, preparation fields, stops, reviewer, and escalation route before assigning the workflow."}
---
This research brief was published ${displayDate}. Sources were checked on ${displayDate}. It proposes a study protocol and reports no observed client performance. It is not accounting, audit, tax, legal, payroll, statistical, investment, or regulatory advice.

## Decision context

The practical question is ${t.question}. For this protocol, the observation unit is ${t.unit}. The primary event is ${t.event}. Those definitions must be approved before records are examined. Otherwise, a team can improve a result merely by excluding difficult items, moving a cutoff, or changing when the clock starts.

For a business considering Philippines-based bookkeeping support, this is a workflow-design question rather than a claim about geography. A remote bookkeeper can assemble authorized exports, maintain the study table, apply deterministic rules, and route exceptions. The ${t.owner} keeps decisions that affect accounting treatment, policy, approval, or release. A sound staffing scope names the inputs, preparation steps, stop conditions, reviewer, closure evidence, and escalation deadline.

The cited authorities do not publish this proposed measure, provide a benchmark for it, or endorse OffshoreBookkeepers.com. GAO discusses internal-control design; PCAOB standards address evidence and documentation in audit contexts; NIST materials address access and integrity; and IRS guidance discusses supporting business records. This brief uses those principles by analogy to design a transparent bookkeeping study. The calculations and operating recommendations are our analysis, not rules issued by those authorities.

## Research question and preregistered definitions

Ask one narrow question: for a frozen population, how many records meet the event, what states explain the remainder, and how much evidence is missing? Before extraction, record the numerator, denominator, observation period, local time zone, cutoff, eligible states, exclusions, reopen rule, pause rule, and treatment of late-arriving records. A percentage without its underlying counts is not decision-grade.

The denominator is every eligible ${t.unit} in consecutive periods. The primary numerator is every record meeting this event: ${t.event}. Retain open, excluded, and indeterminate records in separate tables with reasons. Never remove a record because its support is inconvenient or because it arrived late. The authorized finance owner should approve eligibility and exception rules before the pilot.

Use system timestamps where they are fit for purpose. State whether elapsed time means continuous clock time or agreed working time. Preserve local time and UTC when teams cross time zones. If an item reopens, either treat the first closure as provisional or create a new episode; choose once, before seeing results. Report reopened counts because apparently quick closure can conceal repeated returns.

## Population and data collection

Select one workflow, one entity or an explicitly listed entity group, and consecutive periods. Avoid a handpicked clean week. Each study row should contain ${t.fields}. Stable identifiers matter: updates to an existing item must not create a second apparent observation, while two genuinely separate events must not be collapsed because their amounts happen to match.

Preserve each raw export, extraction timestamp, report parameters, schema version, row count, control total, and file hash where practical. Reconcile the extract to an independent system report when one exists. Log filters, inaccessible systems, manual supplements, duplicate identifiers, blank timestamps, and post-extraction additions. A larger dataset cannot cure a broken lineage, so evidence coverage belongs beside the primary result.

Collect the least sensitive data the question needs. Replace names with stable study identifiers when identity is irrelevant. Exclude bank credentials, complete account numbers, tax identifiers, compensation detail not needed for the test, and unrelated free text. Store any reidentification key separately, restrict access by role, and follow the client's approved retention and deletion schedule.

## Classification protocol

Create a codebook with observable tests for eligible, achieved, open, returned, excluded, and indeterminate. For this topic, the exception map should explicitly cover ${t.exceptions}. Each state needs required evidence, a decision owner, and a rule for conflicting records. --œDone-- is not usable evidence unless the supporting record, decision, and timestamp can be traced.

Train preparers on ordinary, missing-source, duplicate, late, reopened, and judgment-dependent examples. Then have a second reviewer independently classify a sample without seeing the first result. Publish the sample size, disagreement count, initial codes, and resolution method. Repeated disagreement is evidence that the rule, system field, or evidence requirement needs repair; it is not a reason to erase the conflicting observations.

The bookkeeper may collect records and apply approved rules. The ${t.owner} resolves matters outside those rules. Preparers should not infer approval from a prior-period email, copy last month's treatment without current support, or change a classification to meet a target. Those shortcuts create tidy numbers while weakening the decision the study is meant to support.

## Calculations and reporting

Report the primary event count divided by the frozen eligible population, with the numerator and denominator printed beside the percentage. Also show open, returned, excluded, indeterminate, missing-evidence, late-arriving, and reopened counts. For elapsed time, show a median and useful age bands, plus the oldest open items. An average alone can hide a small group of very old records.

Break down the result by ${t.groups}. Suppress or combine small cells where needed to protect people and counterparties. A difference between groups is descriptive. It does not establish that a person, staffing model, location, or application caused the result. Volume, complexity, policy changes, migrations, outages, source delays, reviewer capacity, and changes in evidence quality are plausible confounders.

Publish a population reconciliation, data-quality table, state counts, age distribution, exception table, reviewer-disagreement table, and change log. Pair every chart with counts. Keep historical extracts immutable and issue corrections through versioned copies. A reviewer should be able to reproduce the total and understand why a later version differs.

## Interpretation for offshore bookkeeping

Use the findings to improve instructions, access, evidence flow, and escalation, not to manufacture a market benchmark. Review actual exceptions before changing headcount or deadlines. When the measure moves, first test whether the population, cutoff, system, rule, evidence coverage, reviewer assignment, or approval path changed. Only then consider an operational explanation. One favorable period is not proof that a control is effective.

For a Philippines-based support team, document overlap hours, handoff cutoff, relevant holidays, source-system availability, named escalation route, and maximum waiting time for unresolved items. Use named accounts, multifactor authentication, and least-privilege access. Where the client's risk assessment requires separation, keep source maintenance, preparation, accounting approval, payment release, and period locking with distinct authorized roles.

The niche-specific conclusion is that ${t.question} can be evaluated only when the client owns definitions and decision rights while the bookkeeping team owns orderly preparation and escalation. That boundary lets an offshore bookkeeper add capacity without quietly inheriting authority reserved for management.

## Evidence packet and reviewer test

The period packet should include the approved protocol, frozen population, untouched exports, report parameters, data dictionary, transformation log, classified study table, exception register, reviewer sample, disagreement log, calculations, version history, and sign-off. Proposed corrections and posted corrections must remain distinguishable. A link to a mutable dashboard is not a substitute for preserving the version reviewed.

The reviewer should trace selected study rows back to source evidence and forward to the reported state, reperform the numerator and denominator, inspect every material exclusion, and review high-risk states set by client policy. The sample size is risk-based and locally approved; these sources provide no universal sample. The reviewer should confirm that no preparer approved their own judgment-dependent exception or released a payment, refund, write-off, payroll change, or period lock outside assigned authority.

## Limitations and uncertainty

This brief contains no private dataset, prevalence estimate, market benchmark, causal effect, savings claim, or provider comparison. A pilot describes only the selected population under its declared rules. Small populations produce unstable rates. Missing timestamps may be systematic rather than random. Different systems can record the same business event at different stages, and decisions made outside the system may be absent.

Comparisons across teams or periods require equivalent definitions, populations, clocks, systems, and evidence coverage. Even then, treat a difference as a prompt for review. Do not rank employees, infer misconduct, promise a financial outcome, or claim control effectiveness from this measure alone. Qualified accounting, audit, tax, legal, security, payroll, treasury, and statistical owners should review issues within their remit.

Before reuse, disclose the sample size, period, entities, exclusions, missingness, system changes, codebook revisions, reviewer disagreement, conflicts, and tolerance choices. Archive the protocol with results. An honest limitation and traceable denominator are more useful than a precise-looking percentage that cannot be reconstructed.

## Implementation checklist

1. Name the workflow and decision owners. 2. Freeze the population and period. 3. Approve the event, exclusion, reopen, clock, and pause rules. 4. Export and reconcile the population. 5. Minimize sensitive fields. 6. Apply the codebook. 7. Independently recode a sample. 8. Publish counts, distributions, missingness, and exceptions. 9. Review source records before changing the workflow. 10. Version the protocol and retain evidence under the approved schedule.

Run consecutive periods long enough to observe ordinary variation, while repairing clear access or evidence defects immediately. Keep protocol defects separate from operational findings. A useful pilot ends with clearer owners, fields, stops, and escalation even when the headline measure remains uncertain.

## Sources and checked dates

${sources.map(s=>`- [${s.name}](${s.url}) --- ${s.publisher}; checked ${displayDate}.`).join('\n')}
`;
}

const outDir = path.join(process.cwd(),'content','research');
const manifest = [];
for (const t of topics) {
  const body = article(t);
  const sourcePath = `content/research/${t.slug}.md`;
  fs.writeFileSync(path.join(process.cwd(),sourcePath),body);
  manifest.push({family:'daily-research',topic:t.title,slug:t.slug,route:`/research/${t.slug}`,canonical:`https://offshorebookkeepers.com/research/${t.slug}`,sourcePath,publicationDate:date,sources:sources.map(s=>({title:s.name,publisher:s.publisher,url:s.url,checkedDate:date})),contentHash:crypto.createHash('sha256').update(body).digest('hex'),commitSHA:null,deploymentEvidence:null,liveURL:null,verifiedAt:null});
}
const manifestPath = path.join(process.cwd(),'.paperclip','daily-content',date,'research-off71.json');
fs.mkdirSync(path.dirname(manifestPath),{recursive:true});
fs.writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n');
console.log(`Created ${manifest.length} research articles and ${path.relative(process.cwd(),manifestPath)}`);
