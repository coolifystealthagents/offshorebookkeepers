---
title: "A vendor payment hold that survives a bank-detail change"
description: "A practical hold and release routine for a vendor bank-detail change, so a bookkeeping team can pause payment without losing the invoice or the relationship."
published: "2026-11-09"
updated: "2026-11-09"
category: "Accounts Payable"
type: "blog"
featuredImage: "/thumbnails/a-vendor-payment-hold-that-survives-a-bank-detail-change.png"
takeaways: ["Place a hold on the vendor record and the open invoices, not only on one payment run.", "Verify the new bank detail through a channel independent of the request before release.", "Record the reason, the verifier, the approval, and the release date in one place.", "Separate the hold decision from the vendor relationship conversation."]
sources: [{"name":"U.S. GAO, Standards for Internal Control in the Federal Government","url":"https://www.gao.gov/products/gao-14-704g"},{"name":"NIST, SP 800-53 Rev. 5 Update 1","url":"https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"},{"name":"IRS, Recordkeeping","url":"https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"}]
relatedLinks: [["Vendor statement reconciliation","/blog/vendor-statement-reconciliation"],["Accounts payable support","/services/accounts-payable-processing"]]
faqs: [["Should every bank-detail change trigger a hold?","Yes. A changed bank detail is a high-risk event. A short hold while the change is verified is cheaper than recovering a misdirected payment."],["Who should verify the change?","Someone who is not the person who entered the request, using a contact channel from the existing vendor record rather than the new message."],["How long should the hold last?","Set a local service level, such as one business day after the verification is complete. The hold should not linger once the evidence is clear."]]
---

A vendor emails a new bank account and asks the bookkeeping team to update the payment details before the next run. The request looks routine. It may be legitimate, or it may be the most common form of payment fraud a small business faces. The difference is not visible in the email, and the next payment run is tomorrow.

A payment hold is the control between the request and the payment. It pauses the vendor's open invoices while the change is verified, without losing the invoice, the due date, or the vendor relationship. The hold is temporary by design; the goal is a verified release, not a permanent block.

## Put the hold on the vendor record

A hold on one invoice is easy to miss when a second invoice arrives. Put the hold on the vendor record so every open and future invoice inherits it. Mark the reason as a bank-detail change and record the date.

Notify the payment approver and anyone who runs the payment file. A hold that exists only in the bookkeeper's notes is not a control. The payment run should stop on the vendor and show the hold reason.

## Verify through an independent channel

Use a phone number or contact from the existing vendor record, not the number in the new request. Call the vendor and ask for the accounts payable contact. Confirm the change with a person who can speak to it, and record the name, time, and number used.

If the vendor cannot be reached, keep the hold and escalate. Do not release the payment because the vendor is impatient. A short delay is recoverable; a misdirected payment is often not.

## Keep the invoice and the due date visible

A hold should not hide the invoice. Keep the invoice in the aging report with a hold flag, the original due date, and the new expected release date. The team should be able to see the cash impact without opening a separate file.

If the due date passes during the hold, note whether the vendor has been told. A vendor who understands the reason for the delay is less likely to escalate. A vendor who receives no explanation may assume the business is in trouble.

## Record the approval

The release should be approved by someone with authority, and the approval should name the vendor, the new bank detail, and the verification. A short written approval is enough if it is specific.

Separate the person who entered the change from the person who approves the release. In a small team, the same person may do both, but the record should show that the verification happened. The control is the evidence, not the job title.

## Handle the vendor conversation

Tell the vendor that the change is being verified and give a realistic timeline. Do not accuse the vendor of fraud. Use neutral language: the business verifies bank-detail changes before releasing payment.

If the request turns out to be fraudulent, tell the vendor and the bank promptly. Keep the evidence and follow the business's incident process. Do not discuss the case with other vendors or in a broad channel.

## Update the master record after release

Once verified, update the vendor master with the new bank detail and record the effective date. Keep the prior detail in the change history. The next reviewer should be able to see what changed and when.

Remove the hold only after the update is confirmed in the payment system. A hold removed before the master is updated can release a payment to the old account or the new one unpredictably. Verify the payment file before the run.

## Review holds monthly

A monthly review of bank-detail holds shows how many changes occurred, how long verification took, and whether any payment was released early. A pattern of slow verification may point to a contact-data problem. A pattern of rushed releases may point to pressure from the payment calendar.

The review should produce one or two process changes, not a longer report. A better vendor contact field or a clearer approval step is enough. Record the change and the date.

## Decide who can release the hold

Name the role that can release a bank-detail hold, and name a backup. A release that depends on one person becomes a bottleneck during leave, and a bottleneck is where shortcuts start. The authority should be written down and visible to the payment approver.

If the business is small, the owner may be the only approver. That is acceptable if the verification evidence is recorded and the owner reviews it. The control is the evidence trail, not the number of signatures.

## Key takeaways

- Put the hold on the vendor record so every open invoice inherits it.
- Verify the change through a channel from the existing vendor record, not the request.
- Keep the invoice visible with a hold flag and a realistic release date.
- Record the approval, update the master, and review holds monthly.

A bank-detail change is a normal event with a high consequence if handled casually. A short, evidence-based hold protects the payment and the relationship. That routine is what lets a bookkeeping team say yes to a legitimate change without saying yes to a fraudulent one.

For related workflows, see [vendor statement reconciliation](/blog/vendor-statement-reconciliation) and the [accounts payable services](/services) overview.
