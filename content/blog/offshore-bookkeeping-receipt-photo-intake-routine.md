---
title: "A receipt photo intake routine that survives the client handoff"
description: "A practical intake routine for client receipt photos, forwarded emails, and card slips so an offshore bookkeeping team can match evidence without guessing."
published: "2026-11-03"
updated: "2026-11-03"
category: "Bookkeeping Operations"
type: "blog"
featuredImage: "/thumbnails/november-03/offshore-bookkeeping-receipt-photo-intake-routine.webp"
takeaways: ["Give every receipt photo an intake record before it reaches the ledger.", "Match on entity, card, date, merchant, and amount, then record what is still missing.", "Treat duplicates, poor images, and late receipts as review items rather than silent edits."]
sources: [{"name": "IRS, Recordkeeping", "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"}, {"name": "IRS, Publication 463: Travel, Gift, and Car Expenses", "url": "https://www.irs.gov/publications/p463"}, {"name": "U.S. GAO, Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g"}, {"name": "NIST, Security and Privacy Controls, SP 800-53 Rev. 5", "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"}]
relatedLinks: [["Bookkeeping operations support", "/services"], ["Review the blog library", "/blog"]]
faqs: [{"question": "Can a bookkeeper accept a receipt photo as final evidence?", "answer": "A photo can support a transaction, but the bookkeeper should record its source, quality, and match to the card or bank line. The accounting owner decides whether an unclear or missing receipt needs a replacement document or a formal exception."}, {"question": "What should happen when two claims use the same receipt?", "answer": "Hold both claims, preserve the images and claim identifiers, and send the question to the reviewer who owns expense approval. Do not delete one claim or merge the amounts without a documented decision."}, {"question": "How should late receipts be handled after the close?", "answer": "Book the receipt to the period supported by the transaction date and the accrual policy, then record the late arrival as a cutoff exception. Do not move the expense into the current month just because the photo arrived late."}]
---

## The photo is an intake item, not a ledger entry

A receipt photo arrives with almost none of the context the ledger needs. It may show a merchant, a total, and a date, but not the card used, the employee, the entity, the business purpose, or whether the purchase was already captured by a bank feed. An offshore bookkeeping team that starts by typing the amount into the first matching-looking expense line is not processing evidence; it is guessing and then dressing the guess as a transaction.

The safer routine is small and repetitive. Every image gets an intake record before anyone touches the ledger. The record holds the file name or message link, the date received, the sender, the entity, the card or bank account, the claimed amount, the merchant, the transaction date, and the person who submitted it. If the message does not answer one of those fields, the field stays blank and the item goes to a request queue. A blank field is useful information.

## Five questions before matching

The first question is **which entity and which account**. A shared subscription may belong to the parent, an operating company, or a project entity. The card ending and the bank line usually settle that question, but only if the intake record captures both. If the receipt shows a card ending that is not on the approved list, stop and ask rather than choosing the entity that seems most likely.

The second question is **what was purchased**. A merchant name alone is weak. "Office supplies" can hide meals, gifts, or personal purchases. Record the line items when they are readable, and require a business-purpose note when the description is generic.

The third question is **when the transaction occurred**, which is not always the date printed at the top. A hotel folio may span two months, and a restaurant receipt may be dated the day of the event while the card settles three days later. Record both the document date and the service date when they differ.

The fourth question is **how much was actually paid**, including tax, tip, and any partial refund. A photo of a subtotal is not a photo of the charge. If the receipt total and the bank line differ, keep the difference visible instead of editing one number to force a match.

The fifth question is **whether this document has already been used**. Record a stable fingerprint, such as a file hash, plus the merchant, date, and amount. When two claims share those attributes, hold both and ask the reviewer to decide. A duplicate screen creates candidates, not conclusions; two people can legitimately buy the same item at the same merchant on the same day.

## Build a naming and folder rule the client can follow

The client will not adopt a complex taxonomy. A short pattern is enough: entity, card ending, transaction date, merchant, and amount, such as `ACME-1042-2026-10-28-harbor-hardware-184.20.jpg`. It gives the bookkeeper a searchable handle and makes missing fields obvious: a file named only `receipt.jpg` is a request, not a document.

Store intake files in one controlled location with access limited to the people who need them. Do not let receipts live only in a personal phone or a chat thread the next bookkeeper cannot search. If the client sends photos through a messaging app, copy the image and the message metadata into the controlled location; the chat is not the archive.

## Separate the request queue from the exception queue

A missing receipt and a suspicious receipt are different problems. The request queue holds items that need a document or clarification, with the exact item, field needed, person who can provide it, and a due date. A weekly reminder is not nagging if it points to a specific unresolved line rather than asking the client to "send receipts."

The exception queue holds items with evidence that still need a decision: a purchase above the approval threshold, a blocked merchant, a name that does not match the cardholder, or a duplicate candidate. The controller decides these items. The bookkeeper prepares the comparison and preserves both versions. Age requests by entity and requester; a two-week-old missing receipt is a different problem from one that arrived an hour ago.

## Match to the bank line, then record the residual

For card transactions, the bank or card feed is the payment evidence, not the receipt. The receipt supports what was bought and why. Matching means tying the receipt to the feed line by amount, date window, merchant descriptor, and card ending. When the merchant descriptor is cryptic, use the amount and date together and record the descriptor as a separate field. Do not overwrite the bank description with the receipt merchant name; keep both so the next reviewer can see how the match was made.

If the receipt total and the bank amount differ, record the residual and its likely cause. A small difference may be a tip or foreign-currency conversion. A large difference may mean the receipt belongs to another transaction. The bookkeeper can propose a disposition, but the reviewer should approve anything that changes the deductible amount, the entity allocation, or the period.

## Close with a reviewable handoff

At month end, the receipt intake register should agree to the expense population for the period. The handoff packet needs the count of receipts received, the count matched, the count waiting on the client, the count in exception review, and the count closed without a receipt under the client's written policy. Those counts are more useful than a single percentage because they show where the work is stuck.

The packet should also list the duplicates screened, the requests older than the client's service level, and any receipt that arrived after the period cutoff. A controller can then ask why this entity's unmatched count is rising or why one requester needed three reminders. It turns a pile of images into answerable operational questions while keeping the accounting decision with the person who owns it.
