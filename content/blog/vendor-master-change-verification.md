---
title: "Vendor master change verification for accounts payable"
description: "Verify sensitive vendor-master changes through a trusted contact path, preserve callback evidence, and separate preparation from approval and payment release."
published: "2026-08-07"
updated: "2026-09-17"
category: "Accounts Payable"
type: "blog"
featuredImage: "/thumbnails/vendor-master-change-verification.webp"
takeaways: ["Independent verification uses contact data established before the change request - not a phone number, email address, or link supplied in that request.","The change record should retain old and new values, requester, callback evidence, verifier, approver, system updater, and effective date.","MFA protects access to an account; it does not prove that a vendor requested or authorized a bank-detail change."]
sources: [{"name":"FBI, Business Email Compromise","url":"https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/business-email-compromise"},{"name":"CISA, Multifactor Authentication","url":"https://www.cisa.gov/secure-our-world/use-multifactor-authentication"}]
relatedLinks: [["Accounts payable support","/services/accounts-payable-processing"],["Monthly close support","/services/month-end-close-support"],["Reporting and review support","/services/management-reporting-support"]]
faqs: [["What counts as true independent verification?","A verifier initiates contact through data the business trusted before receiving the change, confirms the request with an authorized vendor representative, and records the callback or equivalent evidence. Contact data supplied only in the request is not independent."],["Does MFA verify a vendor change?","No. MFA helps protect a user's system or email account. It does not establish that the vendor intended the requested master-data change."],["Can a bookkeeper update the vendor master?","A bookkeeper may prepare or enter an approved change within assigned access. An authorized business owner should approve sensitive changes, and payment release should remain separate from preparation."]]
---

Vendor-master verification is a control over the change itself, not merely over system access. The workflow should establish vendor intent before a bank account, payment method, legal name, remittance address, tax field, or key contact is changed. The FBI's discussion of business email compromise explains why a familiar-looking email should not be treated as sufficient authority for a payment-related change.

## Put the request on hold at intake

Create a change ID and preserve the original request, including its received date, channel, requester name, sender address, vendor ID, affected business entity, stated reason, and requested effective date. Record each old value and proposed new value separately. For banking, include bank name, account holder, routing details, account number, currency, and payment method, with sensitive values masked outside restricted evidence storage.

No payment should use the new destination while verification or approval is incomplete. An urgent due date, executive name in the message, or promise to confirm later is not a substitute for the control.

## Use a contact path independent of the request

True independent verification starts with contact data not supplied in the change request. The verifier initiates a callback or other approved contact through a number or channel already held in a previously verified vendor record, executed contract, or controlled procurement file. Do not use a new phone number in the email, an attachment, an email signature, or a link sent with the request.

The callback record should show the date and time, verifier, source of the known contact, masked number or channel used, vendor representative reached and role, questions asked, details confirmed, result, and evidence link. Record an unanswered call, voicemail, conflicting answer, or request to use the new contact as inconclusive. Do not label an attempted callback as verified.

Consider an edge case: the prior contact has left the vendor. The verifier should not simply switch to the replacement named in the request. Escalate to the procurement or finance owner to establish a trusted route from existing records, and document how that route was obtained.

## Preserve approval and system evidence

After successful verification, an authorized approver compares the old and new values, verification result, business reason, effective date, and any payment already queued. The change record names the requester, verifier, approver, and system updater; it also captures approval time, actual effective date, system audit reference, and the first affected payment if one exists. Approval should be affirmative and attributable, not inferred from silence or a copied email.

A bookkeeper can log the request, gather existing records, document factual differences, and enter an approved change. The bookkeeper should not approve their own update, decide that incomplete evidence is acceptable, or release payment. A named finance owner resolves exceptions and decides whether compensating review is needed when staffing prevents ideal role separation.

## Do not confuse MFA with vendor verification

MFA is valuable because it adds protection to user sign-in; CISA recommends it as an account-security measure. But a successfully authenticated employee or vendor mailbox can still contain a mistaken, unauthorized, or manipulated instruction. MFA answers who accessed an account under the authentication process. Independent vendor verification addresses whether an authorized vendor representative intended the specific change. Use both controls for their different purposes.

## Set review frequency from exposure

Do not rely on an arbitrary number of payment cycles to make a change safe. Review open changes before payment runs and sample completed changes according to payment value, change type, vendor risk, role conflicts, and unusual timing. Escalate same-day bank changes, new domains, secrecy requests, conflicting account names, failed callbacks, and changes followed by rapid reversals. The review ends only when evidence meets written policy or an authorized owner records the exception decision.
