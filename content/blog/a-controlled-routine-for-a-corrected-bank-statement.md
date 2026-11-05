---
title: "A controlled routine for a corrected bank statement"
description: "How an offshore bookkeeping team can replace a corrected bank statement without double-posting, losing the audit trail, or leaving old reconciliation evidence in place."
published: "2026-11-05"
updated: "2026-11-05"
category: "Bank Reconciliation"
type: "blog"
featuredImage: "/thumbnails/november-05/a-controlled-routine-for-a-corrected-bank-statement.webp"
takeaways: ["Treat a corrected statement as a replacement record, not as a second source of transactions.", "Freeze the old statement, document the differences, and decide the treatment of every already-posted line before re-importing.", "Re-run the reconciliation, update the evidence index, and obtain a named reviewer sign-off so the corrected version is the one the close relies on."]
sources: [{"name": "U.S. GAO, Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g"}, {"name": "IRS, Recordkeeping", "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"}]
relatedLinks: [["Bank reconciliation outstanding items", "/blog/bookkeeping-bank-reconciliation-outstanding-items"], ["Month-end close support", "/services/month-end-close-support"]]
faqs: [{"question": "Should the bookkeeper delete the old statement file?", "answer": "No. Keep the original file in a dated archive folder and mark it as superseded. Reviewers need to see what the close originally relied on and why the replacement changed it."}, {"question": "What if the bank corrects a statement after the close is locked?", "answer": "Treat the change as a post-close correction with its own approval. Document the affected period, the entries moved, and whether the correction belongs in the current period or a prior-period adjustment."}, {"question": "Does every corrected statement need a new reconciliation?", "answer": "Every corrected statement that changes a reconciled balance does. If the correction only fixes a description or an address, record the change and confirm that no amount or date moved."}]
---
## Why a corrected statement needs its own routine

A bank sometimes reissues a statement after the original close. A deposit may have been posted twice in the bank's system, a fee may have been reversed, or a check may have cleared in a different period than the first file showed. The client forwards the new PDF with a short note, and the bookkeeping team is expected to make the ledger agree again. Re-importing the file without a routine is how duplicate lines, stale reconciliations, and unexplained differences enter the close.

The right response is to treat the corrected statement as a replacement record with a controlled transition. The team needs to know what changed, which ledger entries already relied on the old version, and who approved the replacement. This article sets out a practical routine for a small team handling bank feeds, reconciliations, and month-end evidence for multiple clients. A short written routine keeps the correction visible from the first difference to the final sign-off.

## Freeze the old version before touching the feed

Start by stopping the normal import process for that account. If the bank feed is still active, pause it or record the exact point at which the team stopped accepting new lines. The goal is to prevent a partial re-import from mixing old and new statement lines while nobody is watching the difference. Save the original statement file in a dated archive with a clear status label. Record the date received, the period covered, and the person who first reconciled it.

Do not rename the old file to match the new one, because two files with the same name make the history impossible to follow. Add a short line to the reconciliation workpaper stating that a corrected statement is expected. That note tells a later reviewer why the account is temporarily out of balance and prevents someone from "fixing" the difference with a plug entry. It also creates a timestamp for the start of the correction.

## Compare the two statements line by line

Put the old and new statements side by side, or export both to a spreadsheet with date, description, amount, and reference columns. Match lines in a stable order and mark the additions, removals, and amount changes. A visual scan is not enough, because a single changed digit can move a balance without changing the page count. For each difference, write a short explanation in plain language. "Bank reversed duplicate deposit on the twelfth" is useful.

"Statement changed" is not, because the next reviewer cannot tell whether the ledger or the bank record is wrong. Check the opening and closing balances separately from the transaction detail. A corrected closing balance with no matching detail change usually means the bank fixed a carry-forward error or supplied a missing page. That case needs its own note, not a transaction-level adjustment.

## Decide what happens to every already-posted line

Before importing anything, list the ledger entries that came from the old statement. For each one, decide whether it stays, reverses, or changes amount. A line removed by the bank should normally be reversed in the ledger with the original date reference, not deleted without a trace. Use the team's existing correction method for bank errors and never edit a posted entry silently. If the accounting software allows a deletion, prefer a reversing entry with a note that points to the corrected statement.

Deletions hide the path from the original close to the replacement, and that path is the evidence a reviewer needs. Assign the decision to a named person. The bookkeeper can propose the treatment and prepare the entry, but the client's accounting owner should approve any change that affects a reported balance. Record the approval reference next to the correction, even when the amount looks small.

## Write the replacement note where reviewers will find it

The replacement note belongs with the reconciliation, not in a chat thread. State the account, period, old and new statement dates, and the reason the bank gave. List the differences that affect the ledger and the differences that do not. Say explicitly which version is now authoritative. A reviewer who opens two statements with no status label will guess, and the guess may favor the file with the later download date.

Mark the old file as superseded in the note and in the archive folder name. Link the note to the affected journal entries, the reconciliation, and any downstream report that changed. If the correction moves a balance in the profit and loss, also link the variance note that explains the movement to the owner. The note should let someone reconstruct the sequence without interviewing the bookkeeper.

## Re-run the reconciliation and update the evidence

After the entries are posted, rerun the reconciliation from the corrected statement. Do not reuse the old reconciliation and change only the ending balance, because the outstanding item list may also have changed. Recalculate the cleared items, the deposits in transit, and the outstanding checks from the new detail, then compare the result with the [outstanding items list](/blog/bookkeeping-bank-reconciliation-outstanding-items). Update the evidence index with the new file version and a pointer to the superseded copy. If the index uses a single link per account, add a version column rather than replacing the original link in place.

Versioning makes a later audit or tax question much easier to answer. Compare the new reconciled balance with the general ledger and with the bank's closing balance. If the numbers do not agree, stop and return to the difference list. A reconciliation that balances by construction, without a clear mapping to the statement lines, is not evidence of anything.

## Check the downstream reports and balances

A corrected statement can change cash, expenses, receivables, or a loan balance. Identify every report that used the old number and decide which ones need a refresh. Cash flow summaries, board packs, and tax workpapers may all depend on it. A corrected payable balance can also change the evidence in a [vendor statement review](/research/using-vendor-statements-to-find-unrecorded-liabilities). Tell the report owner what moved and why. Do not send a revised report without a short change note, because the reader will otherwise compare two versions and assume an error.

The note can be three lines: what changed, which period, and what action the reader should take. Check any automated alert or dashboard that reads the ledger. A corrected balance can trigger a false covenant warning or hide a real one. If the change is material to a lender or investor report, route it through the same approval path the original report used.

## Close the correction with a named sign-off

The routine ends with a review, not a successful import. The reviewer should confirm the old statement is archived, differences are explained, entries are posted with references, and the reconciliation matches the corrected file. Record the reviewer's name and the date. Keep the replacement note with the period's close evidence and mention it in the handoff summary. A future bookkeeper who sees a reversing entry should be able to find the reason in one step. The [GAO's internal-control standards](https://www.gao.gov/products/gao-14-704g) emphasize records a reviewer can reconstruct, which is the standard this routine is trying to meet.

That is the practical test of a controlled correction. Finally, review whether the bank or the feed caused the problem. If the same account produces corrected statements repeatedly, raise it with the client and adjust the reconciliation timing. A routine that only cleans up after each correction will keep repeating the same work. A routine that also tracks the cause reduces the next one.
