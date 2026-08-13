---
title: "Foreign-currency bookkeeping: evidence for rate, date, and settlement differences"
description: "A bounded research framework for reconciling foreign-currency transactions, remeasurement entries, and realized settlement differences."
published: "2026-08-13"
updated: "2026-08-13"
category: "Currency Reconciliation"
type: "research"
featuredImage: "/thumbnails/bookkeeping-multi-currency-reconciliation.webp"
takeaways: ["Currency amount, functional-currency amount, and rate date are separate fields.", "Unrealized and realized differences need different evidence.", "Rate policy is an owner decision, not an unexplained spreadsheet choice."]
sources: [{"name":"FASB, Accounting Standards Codification","url":"https://asc.fasb.org/"},{"name":"IASB, IFRS Standards","url":"https://www.ifrs.org/issued-standards/list-of-standards/"},{"name":"GAO, Standards for Internal Control","url":"https://www.gao.gov/products/gao-14-704g"},{"name":"COSO, Internal Control","url":"https://www.coso.org/internal-control"},{"name":"IRS, Foreign Currency","url":"https://www.irs.gov/individuals/international-taxpayers/foreign-currency-and-currency-exchange-rates"},{"name":"SEC, Accounting and Auditing","url":"https://www.sec.gov/page/accounting-and-auditing"},{"name":"PCAOB AS 2201","url":"https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"},{"name":"IRS, Recordkeeping","url":"https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"},{"name":"NIST SP 800-53 Rev. 5","url":"https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"},{"name":"SBA, Manage Your Business","url":"https://www.sba.gov/business-guide/manage-your-business"}]
relatedLinks: [["/research/bookkeeping-bank-feed-continuity-research","/research/bookkeeping-cash-flow-forecast-evidence-research"]]
faqs: [{"question":"What should be retained for a conversion?","answer":"Retain the source currency amount, converted amount, rate, rate source, rate date, and transaction reference."},{"question":"Who approves a rate policy?","answer":"The accounting owner should define and approve the policy and exceptions."}]
---
## Research question
Foreign-currency reconciliation becomes unreliable when a single converted number replaces the evidence behind it. This study treats each transaction as a pair of amounts connected by a rate, date, source, and accounting purpose. It distinguishes an open balance at period end from a settled balance and distinguishes remeasurement from realized settlement difference.

## Record structure
For each material transaction, retain transaction currency, functional currency, original amount, recorded rate, rate date, source, settlement amount, settlement date, and resulting difference. The rate source should be named rather than described as “spot” without evidence. A system-generated rate can be acceptable when its configuration and extraction date are retained.

Reconcile by currency and account before combining totals. A functional-currency balance can agree while a currency subledger is incomplete. Compare opening balance, new transactions, settlements, remeasurement, and closing balance. The reconciliation difference should be shown in both currencies when practical, with rounding rules documented.

## Findings
The strongest review signal is a rate-date exception: transactions using a rate that does not match the approved convention, open items with no rate evidence, or settlements whose realized difference was posted to an unapproved account. These are not proof of error, but they identify where the owner should look. Report exception count and amount for the month and the prior comparable period.

Do not use a manual rate adjustment to force a bank reconciliation to zero. A bank fee, timing difference, or settlement spread may be real. Preserve the bank advice, source-system record, and calculation. The bookkeeper can prepare the bridge; the owner decides the accounting classification and policy interpretation.

## Handoff and limitations
Remote support can extract transactions, document the conversion evidence, reconcile bank and subledger balances, and queue exceptions. The owner retains responsibility for functional currency, presentation, tax treatment, and unusual instruments. This framework does not prescribe rates or settle differences under a particular reporting standard.

The conclusion is that foreign-currency evidence is reviewable when amounts, rates, sources, dates, and settlement status remain visible. Aggregating too early removes the very dimensions needed to explain the close.

## Source notes
The linked standards and control authorities provide context; the entity’s approved accounting policy remains decisive.
