---
title: "A protocol for measuring reviewer disagreement in bookkeeping"
description: "How to dual-code the same evidence, calculate initial disagreement, and use the result to improve definitions rather than rank reviewers."
published: "2026-09-07"
updated: "2026-09-17"
category: "Bookkeeping research"
type: "research"
featuredImage: "/thumbnails/offshore-bookkeeping-reviewer-calibration-research.png"
takeaways: ["Give reviewers the same frozen evidence and label guide, then lock their initial decisions independently.","Report raw disagreement with the full label-by-label count table and keep adjudicated outcomes separate.","Interpret disagreement in light of prevalence, sample selection, evidence gaps, and definition changes; it does not identify which reviewer was correct."]
sources: [{"name":"U.S. GAO, Content Analysis: Principles and Practices (GAO-13-591SP)","url":"https://www.gao.gov/products/gao-13-591sp"},{"name":"U.S. GAO, Standards for Internal Control in the Federal Government (GAO-14-704G)","url":"https://www.gao.gov/products/gao-14-704g"}]
sourceNotes: [{"claim":"GAO-13-591SP describes developing mutually exclusive and exhaustive coding categories, training coders, pilot testing, and documenting coding decisions. Those practices support freezing the bookkeeping label guide before dual coding.","sourceUrls":["https://www.gao.gov/products/gao-13-591sp"]},{"claim":"GAO-13-591SP discusses assessing intercoder reliability and notes limitations of percent agreement and chance-corrected measures. This brief therefore requires the category table and sample information beside any summary statistic rather than treating one rate as conclusive.","sourceUrls":["https://www.gao.gov/products/gao-13-591sp"]},{"claim":"GAO-14-704G Principles 10, 12, and 16 address designed control activities, documented responsibility, and evaluation of control issues. They support a review and remediation trail; GAO does not set an acceptable reviewer-disagreement rate for bookkeeping.","sourceUrls":["https://www.gao.gov/products/gao-14-704g"]}]
faqs: [{"question":"Does disagreement show which reviewer was correct?","answer":"No. It shows only that the initial labels differed. Correctness requires separate evaluation against the evidence and approved definition."},{"question":"Should reviewers discuss an item before it enters the calculation?","answer":"No. Lock the two initial labels independently. Record later adjudication and any definition revision as separate fields."}]
---
Published September 7, 2026; updated September 17, 2026. This article proposes a calibration study. It reports no observed disagreement rate and provides no threshold for employee evaluation or accounting decisions.

## Choose a codable question

Select one recurring workpaper type and one defined classification task, such as assigning an approved exception category. Freeze the eligible population before drawing the sample. Each observation is one item independently classified by two reviewers using the same evidence snapshot and label guide.

The guide should define every label, boundaries between labels, and the treatment of insufficient information. GAO's content-analysis guide provides the methodological basis for explicit categories, coder training, pilot testing, and documented decisions. Applying that approach to bookkeeping exceptions is this brief's proposed adaptation.

## Lock the initial decisions

Freeze sample IDs, evidence versions, and definitions before production coding. Reviewers work independently and cannot see each other's choice until both entries are locked. Record each initial label, an abstention or insufficient-evidence code where allowed, and any evidence unavailable to both reviewers.

Training examples do not belong in the measured sample. Items reviewed by only one person are coverage exceptions rather than agreements. If a reviewer knows material context outside the shared packet, record that condition and resolve the evidence design before interpreting the label pair.

## Show the calculation in full

The raw disagreement rate is the number of eligible dual-coded items with different initial labels divided by all eligible dual-coded items. Apply the preregistered rule for abstentions and publish the label-by-label count table. A table reveals whether differences cluster around one boundary that a single percentage conceals.

Keep the adjudicated label separate from the locked initial pair. If a chance-adjusted measure is used, specify the statistic in advance and report sample size and category prevalence beside it. GAO-13-591SP discusses both agreement assessment and the limitations of simple and chance-corrected summaries; it does not make a particular statistic suitable for every bookkeeping sample.

## Adjudicate definitions, not people

After calculation, an authorized adjudicator can examine disagreements against the shared evidence and approved rule. The outcome may affirm one label, identify insufficient evidence, or require a prospective definition change. Do not overwrite the original entries, and do not back-apply a revised guide without labeling a new analysis version.

The method owner controls sampling and calculation. Reviewers classify; the adjudicator resolves; the finance owner retains authority over accounting treatment. GAO's internal-control guidance supports assigned responsibility and documented evaluation, but it supplies no pass rate for this exercise. Results should be used for calibration, not as a stand-alone performance score.

## Read rates in their design context

Observed disagreement depends on label prevalence, sample difficulty, evidence completeness, prior calibration, and reviewer familiarity. A sample deliberately enriched for ambiguous cases cannot be compared fairly with a routine random sample. High raw agreement can also occur when nearly every item receives one dominant label.

Agreement does not prove correctness, and adjudication can involve judgment. Small or sparse samples produce unstable category rates, and results do not automatically transfer to another workpaper or reviewer pair. A report should disclose selection, label definitions, category counts, abstentions, evidence gaps, outside context, adjudication, and guide changes.
