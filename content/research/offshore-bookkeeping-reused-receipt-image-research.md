---
title: "Reused receipt images in expense claims: a detection and review protocol"
description: "A source-backed method for screening duplicate and near-duplicate receipt images in client expense claims without turning a candidate into an accusation."
published: "2026-11-03"
updated: "2026-11-03"
category: "Evidence & Quality"
type: "research"
featuredImage: "/thumbnails/november-03/offshore-bookkeeping-reused-receipt-image-research.webp"
takeaways: ["Screen for reused receipt images with exact hashes, near-duplicate checks, and claim-level attributes, then keep every candidate as a question.", "Separate a duplicate candidate from a confirmed duplicate and record who resolved it and why.", "Measure candidate rate, false-positive reasons, and time to disposition by requester and entity."]
sources: [{"name": "ACFE, Occupational Fraud 2024: A Report to the Nations", "url": "https://www.acfe.com/fraud-resources/report-to-the-nations"}, {"name": "IRS, Publication 463: Travel, Gift, and Car Expenses", "url": "https://www.irs.gov/publications/p463"}, {"name": "IRS, Recordkeeping", "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"}, {"name": "IRS, Publication 583: Starting a Business and Keeping Records", "url": "https://www.irs.gov/publications/p583"}, {"name": "U.S. GAO, Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g"}, {"name": "NIST, Security and Privacy Controls, SP 800-53 Rev. 5", "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"}, {"name": "COSO, Internal Control Integrated Framework", "url": "https://www.coso.org/internal-control"}, {"name": "PCAOB, AS 2201: An Audit of Internal Control Over Financial Reporting", "url": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"}, {"name": "AICPA and CIMA, Code of Professional Conduct", "url": "https://www.aicpa-cima.com/resources/landing/code-of-professional-conduct"}, {"name": "The Institute of Internal Auditors, Global Internal Audit Standards", "url": "https://www.theiia.org/en/standards/"}]
sourceNotes: [{"claim": "The ACFE report provides a general taxonomy of occupational fraud that includes expense reimbursement schemes, which is the context for this review protocol.", "sourceUrls": ["https://www.acfe.com/fraud-resources/report-to-the-nations"]}, {"claim": "IRS Publication 463 describes substantiation elements for travel, gift, and car expenses, including amount, time, place, and business purpose.", "sourceUrls": ["https://www.irs.gov/publications/p463"]}, {"claim": "GAO internal-control standards support documented transactions, reviewable records, and assigned responsibility.", "sourceUrls": ["https://www.gao.gov/products/gao-14-704g"]}, {"claim": "NIST SP 800-53 addresses audit logging and record integrity, which inform the preservation and access rules proposed here.", "sourceUrls": ["https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"]}, {"claim": "PCAOB AS 2201 discusses the nature and reliability of audit evidence; this protocol uses that idea only as a general evidence-quality principle.", "sourceUrls": ["https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"]}]
relatedLinks: [["Evidence and quality support", "/services"], ["Review the research library", "/research"]]
faqs: [{"question": "Does an identical file hash prove fraud?", "answer": "No. It proves the same image bytes appear in two places. The reviewer still has to establish whether the claims are separate transactions, a split purchase, a resubmission, or an error."}, {"question": "Can this protocol be run on a sample?", "answer": "Yes, but a sample supports a statement about the sampled population only. A full-population screen is better for a first baseline because duplicate files are unevenly distributed across requesters and merchants."}, {"question": "What should be preserved when a duplicate is suspected?", "answer": "Preserve the original images, file hashes, claim identifiers, submission timestamps, card or bank lines, reviewer notes, and the final disposition. Do not replace the original image with a cropped or enhanced copy."}]
---

## Research question and scope

This protocol asks a narrow operational question: when a client submits receipt images for expense claims, what can an offshore bookkeeping team observe that would justify holding two claims for review because the same image may have been used twice? It does not ask whether a claimant acted dishonestly, and it does not produce a fraud determination. The output is a set of candidates with evidence attached, plus a disposition that a named reviewer owns.

The scope is one expense population for one period, such as employee reimbursements or corporate-card claims. The unit is a claim line with at least one attached image, not a person and not a merchant. A claim with three images contributes three image records but remains one claim line for disposition. This distinction matters because duplicate-looking images can appear within one claim when a traveler photographs both a detailed folio and a summary receipt for the same stay.

The protocol assumes the bookkeeping team already has a controlled intake location and a claim identifier. If receipts arrive through personal messaging threads with no stable claim reference, the first remediation is an intake register, not a duplicate screen. Screening an unlabeled pile produces candidates that cannot be traced back to a claim, a card line, or a reviewer.

## Why reused images are a control question

Expense reimbursement is a recognized category in occupational-fraud taxonomies, and the ACFE's Report to the Nations is a standard public reference for that taxonomy. The useful lesson for a bookkeeping team is not a headline number. It is that expense claims combine three things a control system has to separate: a document, a payment, and an approval. A receipt image is only the document. If the same document appears twice, the payment and approval side of the claim still need independent checking.

The evidence-quality principle is familiar from audit standards. PCAOB AS 2201 discusses the nature and reliability of audit evidence, and the underlying idea applies well outside an audit: evidence obtained from an independent source, or evidence that can be corroborated, is stronger than an assertion from the claimant. IRS Publication 463 similarly describes the elements needed to substantiate certain expenses, including amount, time, place, and business purpose. A duplicate image screen tests one narrow attribute of the document. It does not test whether the business purpose is true.

GAO's internal-control standards and COSO's framework both support the broader design: assign responsibility, document transactions, and keep records reviewable. NIST SP 800-53's audit-logging and record-integrity controls inform how the team should preserve the images and the review trail. None of these sources defines a universal duplicate rate or says that a particular screening method is required. They support the discipline of making the check observable and the disposition attributable.

## The observable signals

The first signal is an exact file match. Compute a cryptographic hash, such as SHA-256, over the original file bytes and store it with the claim line. Two identical hashes mean the same file was submitted at least twice. This is the cleanest signal, but it is also the easiest to defeat through re-saving, cropping, or screenshotting. An exact-match count is therefore a lower bound on reuse, not a complete measure.

The second signal is a near-duplicate match. Perceptual hashes, image similarity scores, or keypoint matching can find images that were resized or lightly cropped. These methods produce more false positives than an exact hash, especially with common receipts that share a template. A near-duplicate score should route an item to review, never to automatic rejection.

The third signal is an attribute collision across claims. The same merchant, transaction date, total, and last four digits of a card appearing on two claims from different requesters is a meaningful coincidence, even when the images are not byte-identical. A collision within the same claimant on the same day may be a split transaction or two genuine purchases. The reviewer needs the claim context to tell the difference.

The fourth signal is a document-integrity mismatch. A receipt whose printed card ending does not match the card on the claim, whose merchant address conflicts with the claimed location, or whose receipt number falls outside the merchant's known sequence deserves a question. These are not proof of alteration. They are reasons to compare the document with the bank line and, where appropriate, the merchant's own record.

The fifth signal is a resubmission pattern. A claimant who repeatedly submits the same image after a rejection may be making an administrative error, or may be testing whether the reviewer notices. Measure the pattern by claimant and by claim, but do not publish a person-level rate without a governance decision. The purpose is to improve the queue, not to label an employee.

## A reproducible screening procedure

**Step 1: Freeze the population.** Define the period, the claim types, the entities, and the submission cutoff. List every claim line with an image. Record exclusions, such as claims whose images failed to upload or claims outside the client's reimbursement policy, and state them before screening.

**Step 2: Preserve the originals.** Copy each image to a read-only evidence location. Record the original file name, MIME type, byte size, hash, upload time, claim identifier, and submitter. Do not overwrite the original with a converted or compressed version. If the intake system already transforms images, record that transformation and hash the version the reviewer actually sees.

**Step 3: Run exact-match screening.** Group hashes and flag every group with more than one claim line. Within a single claim, flag only when the images are attached to different expense lines with different amounts or dates. A hotel folio and a card slip for the same stay can share a hash only if they are literally the same file, which is itself worth a note.

**Step 4: Run near-duplicate screening.** Use a documented threshold and record the tool and version. Review the highest-scoring pairs first. For each pair, compare the merchant, date, total, card ending, and claim purpose. A near-duplicate that differs only by crop is a stronger candidate than one that shares a template but shows different line items.

**Step 5: Attach the payment evidence.** Pull the card or bank line for each claim. Compare amount, settlement date, merchant descriptor, and card ending. A receipt that matches no payment line is a different problem from a receipt that matches two claims. Keep the two issues separate in the disposition codes.

**Step 6: Route to a reviewer.** The bookkeeper prepares a candidate packet with the images, hashes, claim details, payment lines, and a short statement of the observed conflict. The reviewer, not the bookkeeper, decides whether the claims are duplicates, whether one should be withdrawn, and whether the client's policy requires escalation. The reviewer's name, date, and reason go into the record.

## Disposition codes that keep the measure honest

A candidate is not a confirmed duplicate. Use a small set of disposition codes so the team can separate the screening result from the resolution. Suggested codes include: separate transactions with a shared template; split purchase across two claims; resubmission after a correction; duplicate claim withdrawn; duplicate claim repaid; unable to determine; and escalated to the client's compliance owner. Each code needs a definition and an example.

The most important distinction is between a false positive caused by the method and a false positive caused by missing context. A shared merchant template is a method limitation. A split purchase is a context limitation. If the team reports only a single false-positive rate, it will miss the fact that different fixes are needed: a better near-duplicate threshold versus a better claim-intake question.

Record time to disposition as well. A candidate that sits open for three weeks is an operational problem even if it is eventually cleared. Age the queue by reviewer and by requester, and separate candidates waiting on the client from candidates waiting on internal review.

## Measures and reporting

The primary measure is the share of claim lines with at least one duplicate candidate, reported with the population definition, the screening method, and the period. Report exact-match and near-duplicate candidates separately. A combined rate hides which control is doing the work.

Supporting measures should include the number of candidates confirmed as duplicates, the number cleared with a reason, the number still open at period end, the median and upper-range age of open candidates, and the share of candidates that required client contact. Break the results down by entity and by claim type, but suppress cells too small to support a stable comparison.

Do not report a person-level "duplicate rate" unless the client has a written policy for doing so and the sample is large enough to be meaningful. A single reused image can be an honest mistake. A pattern across many claims is a different conversation, and it belongs with the client's compliance or HR owner, not in a bookkeeping dashboard.

## Limitations and decision use

Image matching cannot establish intent. It also cannot prove that a transaction did not occur; it can only show that the same or a similar document appears in more than one place. Shared cards, family cards, split payments, recurring merchants, and template receipts all create legitimate collisions. Compression and screenshotting can create near-duplicates that are not the same source image.

The protocol also depends on the intake system preserving originals. If the client's expense tool strips metadata or re-encodes every upload, exact hashing may be less useful and the team should say so in the limitations. A current screenshot cannot prove what the original upload looked like. Record the version observed and the time of observation.

The decision this protocol supports is a review decision, not a legal one. It helps a controller decide which claims to hold, which to clear, and which to escalate. It does not replace the client's reimbursement policy, employment process, or professional advice. Used with that boundary, a duplicate receipt screen is a modest, repeatable control that makes the client's evidence trail harder to reuse by accident and easier to explain when someone asks.
