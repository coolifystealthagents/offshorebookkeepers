---
title: "How to design an invoice intake workflow for bookkeeping"
description: "Build a controlled invoice intake process across email, portals, scans, and uploads, with required fields, duplicate checks, approval routing, and exception handling."
published: "2026-08-07"
updated: "2026-09-17"
category: "Accounts Payable"
type: "blog"
featuredImage: "/thumbnails/invoice-intake-bookkeeping-workflow.webp"
takeaways: ["Route every invoice channel into one tracked queue without discarding the original document or receipt context.","Capture invoice-specific fields before coding, including vendor, entity, invoice number and date, currency, tax, totals, purchase reference, and approval owner.","Use exact and near-match duplicate keys, but send ambiguous matches and sensitive vendor changes to an authorized reviewer."]
relatedLinks: [["Cash application support: roles, evidence, and review","/blog/cash-application-bookkeeping-support"],["A monthly bookkeeping review meeting agenda","/blog/bookkeeping-monthly-review-meeting-agenda"],["A controlled chart of accounts cleanup workflow","/blog/chart-of-accounts-cleanup-workflow"]]
faqs: [["Should every invoice have a purchase order?","Not necessarily. The business should define which spend categories require a purchase order and how permitted non-PO invoices are approved. The intake workflow should record the applicable route rather than inventing a purchase reference."],["Can duplicate detection be fully automated?","Software can flag exact and similar records, but ambiguous matches still need review. Recurring charges, installment invoices, credits, and reused supplier references can look like duplicates without being duplicates."],["Who should approve new payment details?","An authorized employee following the business's vendor-change procedure should validate and approve payment-detail changes. Invoice intake staff can flag the change and assemble evidence, but should not verify it solely from contact details shown on the changed invoice."]]
---
An invoice intake workflow is the controlled path from receiving a supplier document to presenting a complete, checked bill for approval. It is not simply an email inbox, and it should not silently turn every attachment into a payable. A useful design preserves the original invoice, identifies the business and transaction it belongs to, tests for likely duplicates, and stops when information or authority is missing.

## Bring every intake channel into one queue

Start by inventorying how invoices actually arrive. Common channels include a dedicated accounts-payable mailbox, supplier portals, electronic data feeds, postal mail scanned by office staff, employee expense or procurement uploads, and invoices attached to personal work emails. Assign an owner and collection frequency to each channel. A supplier portal, for example, may need a scheduled download even when no email notification arrives.

Each item should receive a queue ID and received timestamp. Preserve the original file and, where useful, the covering email or portal receipt. Forwarding everything to a shared mailbox can be convenient, but the final queue should show whether the item has been received, validated, held, rejected, entered, submitted for approval, approved, or posted. That status history prevents the same document from being worked independently in two channels.

Set channel rules suppliers and employees can follow: accepted file formats, one invoice per file where practical, the entity name to show, and the address or portal to use. Password-protected files, unreadable scans, links that have expired, and statements presented as invoices belong in an exception queue rather than being guessed at or ignored.

## Define the invoice record before coding begins

The intake record should capture fields that identify the document and drive later routing. Depending on the business, the required fields may include:

- supplier name and the approved vendor-record ID;
- legal entity, branch, location, department, project, or customer matter;
- invoice number, invoice date, service or delivery period, and due date;
- document type, such as invoice, credit memo, deposit request, or statement;
- currency, subtotal, discount, freight, tax amount, and gross total;
- purchase order, contract, receipt, or other purchasing reference;
- approver or budget owner and the basis for that route;
- remittance address and an indicator for any changed bank or contact details; and
- a stable link to the source document and related receiving evidence.

Blank invoice numbers should not be filled with arbitrary values. Use a documented placeholder convention only if the accounting system requires one, and retain the supplier's actual reference field exactly as shown. Dates should also be distinguished: the date received is not necessarily the invoice date, and neither is automatically the accounting date. The business's accounting owner should define period-cutoff and posting-date rules.

## Check identity and completeness before account coding

First match the supplier to the approved vendor master and confirm that the named entity is one the business expects to pay. Then check the arithmetic visible on the document, currency, tax presentation, purchasing reference, and evidence of receipt where that evidence is required. A bookkeeper can report that the quantities or price differ from the purchase order; the purchaser or budget owner decides whether the difference is acceptable.

Code only under the approved chart-of-accounts and dimension rules. If the invoice spans departments or periods, prepare the proposed split and show the basis. Do not infer an unfamiliar account, tax treatment, capitalization decision, or prepaid schedule merely to clear the queue. Mark the item as needing an accounting decision and assign it to the designated reviewer.

## Use layered duplicate keys

A single duplicate test is rarely enough. The primary exact-match key can combine normalized vendor ID, legal entity, invoice number, and document type. Normalization may remove spaces, punctuation, and case differences so that `INV-1042` and `inv 1042` are compared consistently. Add amount and currency where supplier numbering is unreliable.

Secondary tests should surface near matches such as:

- the same vendor, amount, and invoice date with different invoice formatting;
- the same purchase order and amount received through email and a portal;
- an invoice number already used under a similar vendor record;
- the same file hash or attachment name received more than once; and
- an invoice that resembles a prior bill but is actually a credit, installment, or recurring charge.

A match is a reason to inspect, not automatic proof of duplication. The reviewer should see links to both records, their posting and payment status, and the reason for the alert. If an apparent duplicate has already been paid, escalation is more urgent than simply deleting the new copy.

## Separate vendor changes from invoice processing

An invoice that introduces a new remittance address, email domain, bank account, or payment instruction should trigger the vendor-change process. The person processing the invoice should not treat the altered invoice as independent verification of its own instructions. Hold the bill's payment details, preserve the evidence, and route the change to an authorized person who can use the business's approved verification method. Record who approved the change and when; do not place sensitive banking details in an unrestricted comment field.

This boundary also applies to new vendors. Intake staff can collect tax forms, contact details, and purchasing support, but vendor creation and payment authority should follow assigned roles. Access should be limited to what each role needs: reading an invoice does not necessarily require the ability to edit vendor bank data or release a payment.

## Design approval and exception routes

Approval routing should be based on documented attributes such as entity, department, purchase-order match, spend category, or amount band. The record should distinguish operational approval (the goods or services were accepted), coding review, and payment authorization. Those actions may be assigned differently in each business.

Give every hold a reason code, owner, opened date, next action, and target date. Useful reasons include missing purchase reference, entity unclear, receipt mismatch, duplicate candidate, invalid arithmetic, changed payment details, accounting-policy question, and approver unavailable. Aging reports should measure time in each status rather than treating all unposted invoices as the same problem.

A clean handoff to the approver includes the invoice image, proposed coding, purchasing and receiving references, duplicate-check result, prior conversation, and a concise question. After approval, retain the approval record with the bill and record who posted it. For support around recurring invoice intake and approval-ready queues, see [accounts payable support](/services/accounts-payable-processing); [monthly close support](/services/month-end-close-support) can then organize the approved records on the close calendar. The service arrangement should still reflect the business's own approval matrix, systems, and payment controls.

## Monitor the workflow without inventing a universal target

Useful operational views include invoices waiting by reason, items approaching their contractual due dates, duplicate alerts awaiting resolution, vendor changes on hold, and invoices returned because required fields were missing. Set thresholds from the company's payment terms, staffing, approval structure, and close calendar rather than adopting an arbitrary industry number.

Review recurring exceptions for process fixes. If invoices repeatedly name the wrong entity, update supplier instructions. If approvers cannot determine what was purchased, improve purchase-order or receipt capture. If portal invoices arrive late, change the collection schedule. The goal is a traceable payable record: the original document, captured fields, checks performed, decisions made, and final system entry should tell one coherent story.
