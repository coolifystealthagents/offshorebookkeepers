---
title: "Vendor statement reconciliation: a reviewable AP workflow"
description: "Reconcile vendor statements to the payables ledger in both directions, classify open differences, and route accounting decisions to an authorized reviewer."
published: "2026-08-13"
updated: "2026-09-17"
category: "Accounts Payable"
type: "blog"
featuredImage: "/thumbnails/vendor-statement-reconciliation.svg"
takeaways: ["Define the vendor, entity, account, statement date, currency, and ledger cutoff before matching individual invoices, credits, and payments.","Match statement-to-ledger and ledger-to-statement so missing bills and credits are not confused with valid cutoff differences.","Give every unresolved item a reason code, evidence link, amount, owner, next action, and due date; only an authorized reviewer approves entries or write-offs."]
sources: [{"name":"Internal Revenue Service, Publication 583: Starting a Business and Keeping Records","url":"https://www.irs.gov/publications/p583"}]
relatedLinks: [["Accounts payable support","/services/accounts-payable-processing"],["Monthly close support","/services/month-end-close-support"]]
faqs: [["Is the vendor statement the same as the accounts-payable ledger?","No. It is an external view of the vendor account and may use a different cutoff. Reconciliation explains differences; it does not assume either record is automatically correct."],["What if a statement shows an invoice the business cannot locate?","Record it as a missing-document exception and request the invoice and purchasing or receiving support. Do not create a bill from the statement alone unless the company's policy and an authorized reviewer permit it."],["How should a disputed invoice be handled?","Keep it visible as disputed with the amount, reason, vendor correspondence, internal owner, and next review date. A bookkeeper should not write it off or concede the dispute without authorization."]]
---

A vendor statement reconciliation compares the vendor's account summary with the business's accounts-payable records as of a defined cutoff. It can reveal missing invoices, unapplied payments, overlooked credits, duplicate bills, and genuine timing differences. It is not a direction to book every statement line: each correction still needs source support and the appropriate approval.

## Fix the scope before matching

Record the vendor ID and name, business entity, vendor account number, currency, statement date, ledger cutoff date and time, opening balance, statement activity, closing balance, and preparer. Save the original statement and the ledger extract used. If the statement spans several entities or currencies, separate them before comparison rather than forcing a net balance.

Build one row per item with document type, vendor reference, invoice or credit date, due date, gross amount, tax if relevant to the ledger, payment reference, ledger document ID, match status, and evidence link. This detail lets a reviewer distinguish an invoice from a payment or credit that happens to have the same amount.

## Match in both directions

First match every statement invoice, credit, adjustment, and payment to the ledger. Then scan ledger activity for the same vendor that does not appear on the statement. Use stable references first and amount and date only as supporting attributes. One payment may settle several invoices; one invoice may have partial payments or credits, so avoid automatic one-to-one assumptions.

Recalculate the statement movement: opening balance plus invoices and vendor charges, less credits and payments, should explain the closing balance. Separately total matched items and open differences. The reconciliation should show its arithmetic without netting unrelated exceptions.

## Classify differences without guessing

Use factual reason codes such as cutoff timing, missing invoice, missing credit, payment in transit, payment not applied by vendor, duplicate candidate, amount mismatch, disputed charge, wrong entity, or unsupported adjustment. Each exception needs the source amount, ledger amount, difference, date raised, owner, next action, due date, and current status.

For example, a payment dated June 30 may clear the bank on July 1 and reach a June 30 vendor statement later. Keep it as payment in transit with payment and bank references; do not enter a second payment. If a credit appears only on the statement, obtain the credit memo and determine which invoice or cost it relates to before preparing an entry. If the same invoice number appears twice with punctuation differences, flag a duplicate candidate and compare source documents rather than deleting either record.

## Apply preparation and approval boundaries

A bookkeeper can obtain statements, export the subledger, perform matches, request missing documents, maintain the exception register, and prepare supported corrections. The owner, controller, or designated accountant approves new bills, credit applications, write-offs, period adjustments, and dispute outcomes. Payment release remains with the authorized payment role.

Stop and escalate when the vendor identity or account is uncertain, a bank detail changes within the correspondence, an item belongs to another entity, a prior period is locked, or the available evidence conflicts. Vendor correspondence can explain an exception but does not by itself authorize an accounting entry.

## Close with a reproducible packet

The reviewer should receive the statement, exact ledger extract, reconciliation, exception register, proposed corrections, and links to invoices, credits, payment evidence, and correspondence. Record reviewer name, review date, decisions, entry references, and the next action for every item left open. IRS Publication 583 provides a general recordkeeping reference; the business should set retention and access rules with its advisers. Recurring missing documents or unapplied payments should trigger an intake or remittance-process review, not repeated unsupported adjustments.
