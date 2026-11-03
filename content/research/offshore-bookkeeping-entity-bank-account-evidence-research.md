---
title: "Who owns the bank account? Testing entity-account evidence before a multi-entity close"
description: "A source-backed method for testing whether each bank account can be tied to a legal entity, a reporting period, and a reviewable source before the books are consolidated."
published: "2026-11-03"
updated: "2026-11-03"
category: "Close & Reporting"
type: "research"
featuredImage: "/thumbnails/november-03/offshore-bookkeeping-entity-bank-account-evidence-research.webp"
takeaways: ["Treat each bank account to legal-entity link as a record with a source, effective date, and reviewer.", "Test the link against the statement header, bank confirmation, account mandate, and ledger mapping rather than relying on a nickname.", "Measure unlinked accounts, mixed-entity activity, and link age by entity and period."]
sources: [{"name": "IFRS Foundation, IFRS 10 Consolidated Financial Statements", "url": "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-10-consolidated-financial-statements/"}, {"name": "IAS Plus, IFRS 10 Consolidated Financial Statements", "url": "https://www.iasplus.com/en/standards/ifrs/ifrs10"}, {"name": "U.S. GAO, Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g"}, {"name": "COSO, Internal Control Integrated Framework", "url": "https://www.coso.org/internal-control"}, {"name": "NIST, Security and Privacy Controls, SP 800-53 Rev. 5", "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"}, {"name": "PCAOB, AS 2201: An Audit of Internal Control Over Financial Reporting", "url": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"}, {"name": "AICPA and CIMA, Code of Professional Conduct", "url": "https://www.aicpa-cima.com/resources/landing/code-of-professional-conduct"}, {"name": "The Institute of Internal Auditors, Global Internal Audit Standards", "url": "https://www.theiia.org/en/standards/"}, {"name": "IRS, Recordkeeping", "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"}, {"name": "IRS, Publication 583: Starting a Business and Keeping Records", "url": "https://www.irs.gov/publications/p583"}]
sourceNotes: [{"claim": "IFRS 10 establishes the concept of control and the requirement to consolidate entities that are controlled, which frames why legal-entity boundaries matter to the reporting package.", "sourceUrls": ["https://www.ifrs.org/issued-standards/list-of-standards/ifrs-10-consolidated-financial-statements/"]}, {"claim": "IAS Plus provides a public summary of IFRS 10 that is useful for orientation; it is not a substitute for the standard or for local professional advice.", "sourceUrls": ["https://www.iasplus.com/en/standards/ifrs/ifrs10"]}, {"claim": "GAO internal-control standards support documented transactions, assigned responsibility, and reviewable records.", "sourceUrls": ["https://www.gao.gov/products/gao-14-704g"]}, {"claim": "PCAOB AS 2201 discusses the nature and reliability of audit evidence; this protocol borrows only the general evidence-quality principle.", "sourceUrls": ["https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"]}, {"claim": "NIST SP 800-53 addresses access control and audit logging, which inform the preservation and permission rules proposed for the account register.", "sourceUrls": ["https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"]}]
relatedLinks: [["Close and reporting support", "/services"], ["Review the research library", "/research"]]
faqs: [{"question": "Is a bank statement enough to prove account ownership?", "answer": "Not by itself. The statement header, account mandate, bank confirmation, and the legal entity named in the account-opening record should be read together, and the conclusion should be scoped to the period tested."}, {"question": "What if one bank account pays expenses for several entities?", "answer": "Treat it as a shared account with an explicit allocation and intercompany settlement record. Do not quietly split the bank line by entity without a reviewer-approved mapping and support for each allocation."}, {"question": "Who should approve an account-to-entity mapping?", "answer": "A finance owner with authority over the legal entity and the ledger, often a controller or CFO. The bookkeeping team can prepare the evidence and flag conflicts, but should not make the final legal-entity determination."}]
---

## Research question and scope

A multi-entity close can look complete while one basic fact remains unproven: which legal entity actually owns each bank account. The ledger may show a tidy cash balance for every company, and the consolidation worksheet may balance, but if the account-to-entity link is wrong, the cash, the intercompany balances, and the eliminations are all resting on a nickname in the accounting software.

This protocol asks how an offshore bookkeeping team can test that link from observable records. The unit is one bank account for one legal entity for one reporting period. A single account can produce several units over time if ownership, signatories, or the entity structure changes. The output is a tested link with a source, an effective date, a reviewer, and a stated limitation. It is not a legal opinion and it does not replace the client's consolidation policy.

The scope is the cash side of a multi-entity close: bank accounts, card accounts, and payment-processor accounts that feed the ledger. The protocol does not cover every intercompany transaction, nor does it decide whether an entity should be consolidated. It tests whether the evidence needed to support the cash mapping is present and reviewable before the accounting owner signs the consolidation.

## Why the legal-entity boundary matters

IFRS 10 defines control and requires an entity to consolidate subsidiaries it controls. Whatever framework the client uses, the consolidation exercise depends on knowing which assets and liabilities belong to which legal entity. A bank account is not a generic pool of cash. It is an asset of a specific entity, subject to that entity's authority, signatories, and reporting obligations. When the account-to-entity link is implicit, the consolidation can shift cash between companies without anyone deciding to do so.

GAO's internal-control standards and COSO's framework both support the underlying discipline: assign responsibility, document transactions, and keep records available for review. PCAOB AS 2201's discussion of evidence reliability is written for audits, but its general point applies to bookkeeping: evidence from an independent source, or evidence that can be corroborated, is stronger than an internal label. A bank confirmation or a statement header is stronger evidence than an account nickname typed into the chart of accounts.

The sources do not prescribe a particular account register or a universal materiality threshold. They support a method that makes the link explicit and reviewable. That is the modest contribution of this protocol.

## What counts as ownership evidence

The strongest evidence is a bank confirmation that names the account holder, the account number, the currency, and the period. A confirmation is independent of the ledger and usually comes directly from the bank. It is also the most cumbersome to obtain, so many teams use it for new accounts, high-balance accounts, and accounts with an ownership change during the period.

A statement header is weaker but still useful. It shows the name the bank associates with the account, the account number, and the statement period. The header can be affected by a trade name, a DBA, or a servicing entity that differs from the legal entity. The reviewer should record the exact name shown and compare it with the legal entity register, not with the brand name on the website.

An account mandate or signatory card shows who can act on the account. It supports the authority side of the link but does not, by itself, prove which entity owns the balance. A board resolution, an account-opening form, or an intercompany services agreement can support the ownership conclusion when the bank's records use a different name.

The ledger mapping is the weakest layer. It shows where the bookkeeping team posted the account, not who owns it. Use it as the cross-check, not the source. If the ledger mapping conflicts with the bank document, the bank document wins for the ownership question, and the difference becomes an exception for the accounting owner.

## Failure patterns to look for

The first failure is a shared operating account. A parent company pays wages, rent, and vendor bills for several subsidiaries from one account. The bank account belongs to the parent, but the ledger may allocate the expenses to the subsidiaries. That can be legitimate if there is an intercompany recharge and a settlement record. It is not legitimate to present the account as if each subsidiary held its own cash.

The second failure is a merchant or processor account that settles into a different legal entity. An ecommerce entity may own the storefront and the inventory, while the payment processor account is in the name of the parent or a management company. The settlement account needs its own ownership evidence and a clear mapping to the entity that recognizes the revenue. A processor reserve or hold adds another layer that should be documented separately.

The third failure is a dormant or closed account that remains in the ledger. The account may have belonged to a dissolved entity, or it may have been transferred during a reorganization. A zero balance does not prove the account is closed, and a closed account does not prove the historical transactions belonged to the current entity.

The fourth failure is a new account added mid-period without an effective-date record. The bookkeeping team maps it to the entity that requested it, but the request may have come from a shared treasury mailbox with no authority record. The account register should capture the opening date, the requesting entity, the approver, and the bank document that names the holder.

The fifth failure is a signatory change that is not reflected in the access list. The account may still belong to the right entity while the people who can move money have changed. That is an authority exception, not an ownership exception, but both belong in the same review because the reviewer needs to see the whole account picture.

## A reproducible test procedure

**Step 1: Build the account inventory.** List every bank, card, and processor account that appears in the ledger or the bank feed for the period. Include zero-balance and dormant accounts. Record the account number's last four digits, the bank, the currency, the ledger account, the entity currently mapped, and the source of the mapping.

**Step 2: Tie the inventory to the bank feed.** Reconcile the inventory count to the accounts visible in the bank portal or feed. An account in the feed but not the inventory is unlinked. An account in the inventory but not the feed may be closed, restricted, or mis-keyed. Both are exceptions.

**Step 3: Read the primary document.** For each account, obtain the statement header or bank confirmation for the period. Record the account holder name exactly as shown, the account number, the currency, the statement period, and the document date. Do not summarize the name into the entity's common name; preserve the difference.

**Step 4: Compare with the legal entity register.** Use the client's current legal entity list, including dormant entities, trade names, and recent name changes. Match the bank's account holder name to a legal entity. If the match requires an assumption about a DBA or a former name, record the assumption and the supporting document.

**Step 5: Test authority.** Obtain the current signatory list or account mandate. Compare it with the client's approved authority matrix. Record any signatory who is not on the matrix, any former employee who remains active, and any entity whose signatories are shared with another entity. Route the differences to the finance owner.

**Step 6: Test the ledger mapping.** Trace the account to the trial balance and the consolidation worksheet. Confirm the entity, the GL account, and the currency. If the account is shared, trace the allocation and the intercompany settlement. A shared account without a settlement record is an open item.

**Step 7: Record the conclusion and the limitation.** State what the evidence supports, the period it covers, and what remains unverified. A statement header supports the name shown for that period. It does not prove the entity's legal ownership for all time, and it does not replace a legal review of the entity structure.

## Measures that make the test useful

The primary measure is the share of in-scope accounts with a tested entity link for the period. Report the numerator and denominator, the account types included, and the evidence used. An account tested only with a ledger label should not be counted the same as one tested with a bank confirmation. Use evidence tiers so the reader can see the difference.

Supporting measures include the number of unlinked accounts, the number of accounts with a name mismatch, the number of shared accounts without a settlement record, the age of the oldest unresolved link, and the number of signatory exceptions. Break the results down by entity and by bank. A single group-level percentage can hide a small entity with a large exception.

Track link changes separately. An account that moved from one entity to another during the period needs both the old and the new link, the effective date, the approver, and the reason. A change log is more useful than a snapshot because it shows whether the consolidation is using the current mapping or an obsolete one.

## Review, escalation, and limitations

The bookkeeping team can prepare the register, collect the bank documents, compare names, and flag conflicts. The finance owner decides the legal-entity mapping and approves any change. If the ownership question turns on a reorganization, a dissolved entity, or a disputed signatory, route it to the client's legal or treasury owner rather than resolving it in the close workbook.

The method has clear limits. A bank document may use a trade name that does not match the legal register, and the reviewer may need the client's naming history to interpret it. A shared account can be legitimate, but the allocation and settlement evidence must exist. A statement header does not prove beneficial ownership, and a signatory list does not prove authority under the entity's governing documents. The output should say what was tested, what was not, and who accepted the residual risk.

Used within those limits, an entity-account evidence test gives the multi-entity close a firmer foundation. It turns a familiar account nickname into a dated, sourced link that a controller can review, and it gives the next bookkeeper a record they can continue instead of a mapping they have to guess.
