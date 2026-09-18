---
title: "Vendor bank-change log: fields, controls, and review"
description: "Build a traceable log for vendor bank-detail changes without treating the log itself as approval or independent verification."
published: "2026-08-13"
updated: "2026-09-17"
category: "Accounts Payable"
type: "blog"
featuredImage: "/thumbnails/vendor-bank-change-log.svg"
takeaways: ["Record the old and requested bank values, requester, independent-verification evidence, approver, updater, and effective date under one change ID.","Use a trusted contact path established before the request; a reply to the requesting email or a call to a number in the request is not independent verification.","Keep preparation, verification, approval, vendor-master editing, and payment release visibly separated, with unresolved changes held from payment."]
sources: [{"name":"NIST SP 800-53 Rev. 5, Audit and Accountability controls","url":"https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"}]
relatedLinks: [["Accounts payable support","/services/accounts-payable-processing"],["Monthly close support","/services/month-end-close-support"]]
faqs: [["Is a bank-change log proof that a change is valid?","No. The log is an audit trail. Validity depends on the business's independent verification and approval procedure, and the log should link to that evidence."],["Should full bank account details appear in the log?","Limit displayed details to what reviewers need, such as bank name and masked old and new account endings. Store sensitive source documents in an access-controlled location and link to them."],["What happens when verification fails?","Leave the master record unchanged, place affected payments on hold, record the failed or inconclusive attempt, and route the item to the authorized finance owner."]]
---

A vendor bank-change log connects a request to the evidence, decisions, and system activity that followed. It does not make a request legitimate and should never become a shortcut around independent verification. Its purpose is to let a reviewer reconstruct who asked, what changed, how the vendor was contacted, who approved the change, and when it became effective.

## Capture the complete change record

Assign one change ID and record the vendor ID, legal or trading name, paying entity, request received date and channel, requester name and email address, stated reason, requested effective date, and link to the original message or form. Capture the old and requested new values for bank name, routing code, account number, account holder, payment method, and remittance contact. Display only masked bank values in a broadly visible log; keep the full source document in restricted storage.

Add separate fields for verification status, known contact used, source of that contact, callback date and time, verifier, person reached, result, approver and approval time, master-record updater, system change timestamp, actual effective date, and related payment hold. Preserve old values rather than overwriting them.

## Log independent verification accurately

The verifier should use contact data that the business already trusted before the change request - for example, a number in the previously verified vendor master or executed contract. A phone number, link, or contact person supplied only in the change request is not independent. The evidence note should identify the trusted source, the masked number or channel used, the vendor representative reached, what details were confirmed, and the outcome. A voicemail, bounced message, or unanswered call is an attempt, not a successful verification.

For example, if an emailed request changes both the account and the remittance contact, calling the new number in that email proves little. Record the attempt as blocked, use the prior contact path, and leave payments on hold until the result meets policy.

## Separate actions and authority

A bookkeeper may register the request, compare old and new values, attach evidence, and prepare an update after approval. The independent verifier confirms vendor intent. An authorized finance owner approves or rejects the change. The person releasing payment should check that the approved change ID is effective before using the new destination. Where staffing permits, those roles should not be concentrated in one person; at minimum, no requester or updater should approve their own change.

Urgency does not change the boundary. Same-day payment requests, instructions to keep the change confidential, conflicting vendor names, and requests from a new domain should remain on hold and be escalated through a known internal route.

## Review the log by event and risk

Review open changes before each payment run and examine completed changes as part of the business's control schedule. Check that each completed row has old and new values, successful verification evidence, distinct approval, an effective date, and a matching system audit event. Also look for a payment created before approval, repeated failed callbacks, duplicate requests, inactive vendors reactivated with new banking, or changes followed by a reversal.

The reviewer decides whether evidence meets policy and whether a payment may proceed. The bookkeeper reports missing fields and factual conflicts but does not infer vendor intent, waive the control, or release funds. Retain the log and linked evidence under the company's access and record-retention policy; NIST's Audit and Accountability controls are a useful reference when defining what an audit record should capture.
