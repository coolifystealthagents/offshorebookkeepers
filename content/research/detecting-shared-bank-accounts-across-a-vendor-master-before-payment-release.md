---
title: "Detecting shared bank accounts across a vendor master before payment release"
description: "A source-backed review method for finding vendor records that point to the same bank account, separating legitimate shared accounts from payment-fraud signals, and documenting the decision before money moves."
published: "2026-11-06"
updated: "2026-11-06"
category: "Payables & Expenses"
type: "research"
featuredImage: "/thumbnails/november-06/detecting-shared-bank-accounts-across-a-vendor-master-before-payment-release.webp"
takeaways: ["A shared bank account is a review signal, not proof of fraud; the finding has to be tested against ownership, contracts, and payment history.", "Normalize bank identifiers before comparing them, because formatting differences can hide a real match and create false ones.", "Rank findings by open payment exposure and verify any change through a contact path the team already knows, never through the request itself."]
sources: [{"name": "FBI Internet Crime Complaint Center (IC3)", "url": "https://www.ic3.gov/"}, {"name": "CISA, Avoiding Social Engineering and Phishing Attacks", "url": "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks"}, {"name": "U.S. GAO, Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g"}, {"name": "IRS, Instructions for Forms 1099-MISC and 1099-NEC", "url": "https://www.irs.gov/instructions/i1099mec"}, {"name": "AICPA and CIMA, Code of Professional Conduct", "url": "https://www.aicpa-cima.com/resources/landing/code-of-professional-conduct"}]
sourceNotes: [{"claim": "IC3 documents business email compromise and payment-redirection schemes in which attackers change vendor bank instructions, which frames shared-account review as a payment-control question.", "sourceUrls": ["https://www.ic3.gov/"]}, {"claim": "CISA guidance on social engineering supports verifying unusual payment or account-change requests through a separate, known contact path.", "sourceUrls": ["https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks"]}, {"claim": "GAO internal-control standards support documented transactions, assigned responsibility, and records a reviewer can reconstruct, which frames the evidence file for each shared-account finding.", "sourceUrls": ["https://www.gao.gov/products/gao-14-704g"]}, {"claim": "IRS information-return instructions connect the payee name and taxpayer identification number to the filed form, so a bank-account match cannot be resolved by changing the payee identity without evidence.", "sourceUrls": ["https://www.irs.gov/instructions/i1099mec"]}, {"claim": "The AICPA and CIMA code supports professional competence and due care, which informs the preparer and reviewer split in this protocol.", "sourceUrls": ["https://www.aicpa-cima.com/resources/landing/code-of-professional-conduct"]}]
relatedLinks: [["Vendor master change verification", "/blog/vendor-master-change-verification"], ["Merging duplicate vendor records", "/research/merging-duplicate-vendor-records-without-losing-payment-history"], ["Accounts payable processing", "/services/accounts-payable-processing"]]
faqs: [{"question": "Does a shared bank account always mean two vendors are related?", "answer": "No. A shared account can reflect common ownership, a payroll agent, a factoring arrangement, or a legitimate remit-to service. The finding is a reason to verify ownership and authority before releasing a payment."}, {"question": "Should the bookkeeper change the vendor record after finding a match?", "answer": "No. The bookkeeper should preserve the evidence, rank the exposure, and route any change through the approved vendor-master process with a callback to a known contact."}, {"question": "How often should the review run?", "answer": "Run a full comparison before the annual payment cycle and a shorter review whenever a vendor bank change is requested. High-value payment runs may justify a check on every new vendor."}]
---
## Research question and scope

A vendor master can look clean while two different records point to the same bank account. That pattern may be ordinary, such as a parent company collecting for several subsidiaries, or it may be the visible trace of a payment-redirection attempt. The difference matters before a payment is released, because a bookkeeper who changes the wrong record can send money to an account the business does not intend to pay. This report asks how a small finance team can detect shared bank accounts, test the finding, and document a decision without treating every match as fraud.

The unit of review is one vendor master record and its payment instructions in a defined accounting system. The scope covers the vendor name, tax identifier, remit-to address, bank account, payment history, and approval record. It does not cover the bank's own fraud monitoring or the legal ownership of the vendor. Those questions belong to the client, its bank, and its counsel. The output is a ranked finding with evidence and a named decision, not a conclusion that a supplier is dishonest.

## Why shared bank accounts are a payment-control signal

Payment fraud often depends on a small change that looks routine. An attacker compromises an email thread, learns the vendor's name and invoice pattern, and sends new bank instructions just before a large payment. The request may include a convincing letterhead, a copied signature, and a reason for the change. If the bookkeeper updates the vendor record and pays, the money leaves through an account the real vendor does not control. The visible warning is often that the new account already exists on another vendor record.

The same pattern appears without an attacker. A shared account can indicate a duplicate vendor, a related entity, or a collection agent. Each explanation calls for a different response. The review therefore starts with a comparison, not an accusation. Its purpose is to surface the account relationship while there is still time to ask a question, confirm authority, and keep the payment history attached to the right identity.

## What public guidance supports

Public guidance does not prescribe a shared-account report, but it supports the control logic. The FBI's Internet Crime Complaint Center documents business email compromise and payment-redirection schemes, which is the risk this review is designed to catch. CISA guidance on social engineering recommends verifying unusual requests through a separate, known contact path rather than replying to the message that made the request. Those two ideas shape the verification step.

Internal-control guidance supplies the documentation standard. GAO's internal-control framework emphasizes transactions that are documented, responsibility that is assigned, and records a reviewer can reconstruct. A finding that lives only in an inbox does not meet that standard. The review should preserve the comparison, the evidence, the question asked, the answer received, and the person who approved the outcome. That file is what turns a suspicion into a controlled decision.

## Build the comparison data set

Export the full vendor master rather than the open-payables aging report. A vendor with no current balance can still share an account with an active vendor, and that relationship may matter when the next invoice arrives. Include inactive records for the comparison but mark their status. Keep the original export untouched and work from a copy, because a later reviewer may need to see exactly what the system contained on the review date.

Add the fields needed to test identity: legal name, trade name, tax identifier, remit-to address, bank name, account number, routing number, and the date the bank detail was last changed. Include the vendor creation date and the last payment date. If the accounting system stores bank details in a separate table, export that table too. A vendor list without payment instructions cannot answer the question this review is asking.

## Normalize bank identifiers carefully

Bank data arrives in inconsistent formats. One record may show spaces and dashes, another may mask the middle digits, and a third may store the account as text with a leading apostrophe. Normalize the visible digits while preserving the original value in a separate column. Do not discard masked records, because two records with the same mask may still be a match worth reviewing. Record the normalization rule so another reviewer can repeat the comparison.

Routing numbers and account numbers should be compared separately. A shared routing number is normal because many vendors bank at the same institution. A shared account number across different banks is unusual and may indicate a data-entry error. A shared routing and account pair is the stronger signal. Check for transposed digits and truncated values before reporting a match, since a false positive wastes review time and can damage a good vendor relationship.

## Separate legitimate shared accounts from suspicious ones

Start with the explanations that do not require an accusation. A parent company may collect payments for subsidiaries, a professional employer organization may receive payroll funds for several clients, and a factoring company may own the receivable. A landlord may collect rent for several related entities. Each of these can produce a legitimate shared account, but each should be supported by a contract, a remittance instruction, or a written confirmation from the client.

Then look at the signs that do not fit a legitimate arrangement. A new vendor record created shortly before a large payment, a bank change requested by email, a mismatch between the vendor's legal name and the account holder, or a shared account with no documented relationship all deserve closer review. A vendor whose address changed at the same time as its bank details is another warning sign. The point is not to score the vendor, but to decide which findings need verification before the next payment run.

## Rank findings by payment exposure

A long list of matches is not useful unless it is ordered by risk. Rank each finding by the open balance, the value of recent payments, the number of invoices in the queue, and whether a bank change is pending. A shared account with no activity and no open balance can wait for the next cycle. A shared account attached to a payment scheduled this week needs an answer before release. The ranking gives the reviewer a defensible reason to prioritize one case over another.

Include the vendor's tax identifier status in the ranking. A missing or mismatched identifier makes identity harder to confirm and raises the cost of a wrong decision. Also mark whether the vendor is new, whether the bank detail was changed in the last ninety days, and whether the payment method is automated. These fields help the team decide whether to pause a payment, request a callback, or simply add a note for the next review.

## Verify through a known contact path

Verification should not use the contact information in the change request. Use a phone number, portal, or email address the team already has on file, and speak with a person who can confirm authority to change the account. CISA's guidance on social engineering makes this separation explicit because a compromised mailbox can answer its own verification email. Record the date, the person contacted, the method used, and the answer. If the team cannot reach a known contact, the payment should wait.

The callback should confirm the account holder's legal name, the last four digits of the account, and the reason for any change. Ask whether the vendor uses a collection agent or a shared service, and request written confirmation if the relationship is new. Do not accept a forwarded email as proof. The evidence standard is the same one used for any other vendor-master change, and the [vendor master change verification](/blog/vendor-master-change-verification) routine is a useful companion.

## Record the decision without merging blindly

A shared account is not a reason to merge two vendor records. The records may represent separate legal entities with separate tax reporting and separate contracts. Record the finding, the explanation, and the decision in a cross-reference that names both vendor identifiers. If the client confirms a legitimate relationship, add the supporting document to both records and note who approved it. If the relationship is not confirmed, hold the payment and escalate.

When a genuine duplicate is found, follow a merge protocol that preserves payment history. The [method for merging duplicate vendor records](/research/merging-duplicate-vendor-records-without-losing-payment-history) separates identity decisions from the mechanical move of open items. A shared bank account can be the clue that starts that work, but the merge still needs its own evidence and approval. Combining the two steps without documentation creates the same ambiguity the review was meant to remove.

## Limitations and review cycle

The review has clear limits. It can only compare the data the accounting system holds, so a vendor that uses a different account for each payment may never produce a match. It cannot prove who owns an account, and it cannot detect a fraud that uses a newly created account with no duplicate. It also depends on complete bank fields, which some systems mask or store outside the vendor master. Those gaps should be stated in the review summary rather than hidden.

Run the full comparison before the annual payment cycle and a shorter version whenever a vendor bank change is requested. Add a check for every new vendor above a defined payment threshold. Keep the prior review file so the next reviewer can see what was known and when. Used with that rhythm, a shared-account review becomes a repeatable control that protects the payment run without turning ordinary vendor relationships into exceptions.
