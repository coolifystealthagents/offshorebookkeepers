---
title: "Testing a ledger for cash-basis and accrual-basis leakage"
description: "A source-backed method for finding where a small-business ledger mixes cash and accrual treatment, building a reviewable bridge, and correcting the records before a tax filing or lender report relies on them."
published: "2026-11-06"
updated: "2026-11-06"
category: "Close & Reporting"
type: "research"
featuredImage: "/thumbnails/november-06/testing-a-ledger-for-cash-basis-and-accrual-basis-leakage.webp"
takeaways: ["A ledger can look consistent at the account level while individual transactions follow different timing methods.", "Test revenue, expenses, fixed assets, and owner flows separately, then reconcile the differences into one basis bridge.", "The bookkeeper should document the pattern and route the tax-method decision to the preparer rather than silently converting entries."]
sources: [{"name": "IRS, Publication 538 (Accounting Periods and Methods)", "url": "https://www.irs.gov/publications/p538"}, {"name": "IRS, Publication 334 (Tax Guide for Small Business)", "url": "https://www.irs.gov/publications/p334"}, {"name": "IRS, Recordkeeping", "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"}, {"name": "U.S. GAO, Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g"}]
sourceNotes: [{"claim": "IRS Publication 538 describes cash and accrual methods and the requirement to apply an accounting method consistently, which frames the leakage test as a method-consistency review.", "sourceUrls": ["https://www.irs.gov/publications/p538"]}, {"claim": "IRS Publication 334 explains that a small business generally chooses an accounting method when it files its first return and must keep records that support the method used.", "sourceUrls": ["https://www.irs.gov/publications/p334"]}, {"claim": "IRS recordkeeping guidance supports organized, retrievable records that allow a reviewer to reconstruct reported amounts, which informs the evidence file for each adjustment.", "sourceUrls": ["https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"]}, {"claim": "GAO internal-control standards support documented transactions, assigned responsibility, and reviewable records, which frames the preparer and reviewer split in this protocol.", "sourceUrls": ["https://www.gao.gov/products/gao-14-704g"]}]
relatedLinks: [["Offshore bookkeeping close evidence room", "/blog/offshore-bookkeeping-close-evidence-room"], ["Fixed-asset capitalization research", "/research/bookkeeping-fixed-asset-capitalization-research"], ["Month-end close support", "/services/month-end-close-support"]]
faqs: [{"question": "Can a business use cash basis for tax and accrual for management reports?", "answer": "Yes, many small businesses keep more than one view, but each view needs a defined method and a reconciliation. The risk is an undocumented mix inside one ledger, not the existence of two reports."}, {"question": "Does one accrual entry mean the whole ledger is accrual basis?", "answer": "No. A single accrual can be a period-end estimate or a correction. The review looks for a pattern across revenue, expenses, assets, and owner transactions before labeling the ledger."}, {"question": "Who decides which method is correct?", "answer": "The business owner and tax preparer decide the filing method. The bookkeeper documents the current treatment, quantifies the difference, and prepares the adjustment for review."}]
---
## Research question and scope

A small-business ledger can pass a trial-balance check and still mix two accounting methods. Revenue may be recorded when cash arrives, while a large vendor bill is accrued when the invoice is received. A fixed asset may be expensed at purchase in one period and depreciated in another. Each choice can be reasonable on its own, but together they make the reported profit hard to explain and the tax return hard to support. This report asks how a bookkeeping team can find that leakage and document it before a filing or lender report relies on the numbers.

The scope is one legal entity and one accounting ledger for a defined fiscal year. The review covers revenue, receivables, expenses, payables, fixed assets, owner transactions, and intercompany flows. It does not decide the entity's tax method or provide tax advice. Those decisions belong to the owner and the tax preparer. The output is an evidence file that shows the method actually applied, the transactions that depart from it, and a quantified bridge to the intended method.

## What basis leakage looks like in a small ledger

Leakage rarely appears as a single wrong account. It appears as a pattern across transactions. A business may record most sales when invoiced but book a few large deposits only when the bank feed clears. It may accrue payroll at month-end but record rent only when the check is written. The general ledger still balances, and the bank reconciliation still ties, so the mixed timing stays invisible until someone compares profit with the tax return or a lender's covenant calculation.

The pattern often starts with a practical workaround. A new bookkeeper inherits a cash-basis file and adds accrual entries for one important vendor. A software migration imports opening balances without their original dates. An owner records a personal payment through the business account. Each workaround solves a local problem and leaves a small inconsistency. The review has to find those inconsistencies without rewriting the entire year or embarrassing the person who inherited them.

## Establish the intended method in writing

Before testing transactions, write down the method the ledger is supposed to follow. State whether revenue is recognized when earned or when collected, whether expenses are recorded when incurred or when paid, and how fixed assets and inventory are treated. Include the tax method used on the last return and the method used for internal reporting if they differ. A short written statement prevents the review from becoming a debate about memory.

Confirm the statement with the owner and the tax preparer. Ask which reports they rely on, which accounts they consider estimates, and whether any elections or special treatments apply. Record the answer and the date. The review is not trying to impose a textbook method; it is trying to establish the baseline against which actual transactions can be compared. Without that baseline, every difference looks like an error and every error looks like a preference.

## Test revenue timing and receivables

Start with a sample of sales across the year, including the first and last month. For each sale, compare the invoice date, the delivery or service date, the payment date, and the date the revenue was posted. Look for invoices that were posted only when cash arrived, and for deposits that were recorded as revenue before the work was complete. The pattern matters more than any single item, so group the exceptions by month and by customer.

Then reconcile the revenue accounts to the receivables ledger and the bank deposits. A cash-basis ledger may have no meaningful receivables balance, while an accrual ledger should show open invoices that match the sales detail. If both appear, identify which population each balance represents. Check credit memos, refunds, and customer prepayments separately, because those items often carry their own timing rules and can distort a simple revenue total.

## Test expense timing and payables

Expense leakage is usually easier to see in the payables ledger than in the profit and loss account. Sample bills received near month-end and compare the invoice date, the receipt date, the period the expense was posted, and the payment date. A bill received in December but posted in January may be a cutoff error, a deliberate cash-basis treatment, or a late invoice. The review should classify the reason rather than assume the worst.

Review the accounts payable aging for bills that were entered without a matching expense, and for expenses that were paid directly without a bill. Both can be legitimate, but they need a consistent rule. Check recurring items such as rent, insurance, and professional fees, because they are often posted on a cash schedule while the rest of the ledger follows accrual. Also review reversing entries to confirm that an accrual was reversed in the correct period and not left to distort the next month.

## Test fixed assets and depreciation

Fixed assets are a common source of basis leakage because the purchase entry and the depreciation entry tell different stories. A cash-basis ledger may expense a computer or a vehicle when it is paid, while an accrual ledger capitalizes it and records depreciation over time. Pull the fixed asset register and compare additions, disposals, and depreciation expense with the general ledger. Look for assets that were expensed in full and never entered in the register.

The [fixed-asset capitalization research](/research/bookkeeping-fixed-asset-capitalization-research) sets out the evidence needed for cost, placed-in-service date, and useful life. Use that evidence to decide whether an item belongs in the register. Do not reclassify a purchase only because the amount is large. The review should identify the current treatment, quantify the difference, and leave the capitalization decision with the owner and tax preparer. A clear bridge is more useful than a silent correcting entry.

## Test owner draws and intercompany flows

Owner transactions can look like expenses or revenue when they are neither. A payment to the owner may be a draw, a loan repayment, or a reimbursement, and each treatment affects the ledger differently. Review the equity and due-to-owner accounts for entries that were posted through an operating expense or a sales account. Confirm the intent with the owner and keep the supporting document with the entry.

Intercompany transfers need the same care. A transfer between related entities may be a loan, a capital contribution, or a payment for services, and the two ledgers should tell the same story. Compare the balances on both sides and document any difference. A one-sided entry can look like cash-basis timing when it is actually an unreconciled intercompany balance. The review should separate the two explanations before proposing a correction.

## Build a basis bridge the owner can review

Once the exceptions are classified, build a bridge from the ledger's reported result to the intended method. Start with the profit or loss as recorded, add or subtract the revenue timing differences, the expense timing differences, the fixed-asset treatment, and the owner or intercompany items. Show each adjustment with a reference to the transaction and the reason. The bridge should reconcile to the intended-method total without a plug.

Keep the bridge in a spreadsheet that a reviewer can follow, and summarize it in one page for the owner. Use the same period and the same account mapping throughout. If an item cannot be quantified, list it as an open question with an owner and a due date. A bridge with a visible unresolved item is more honest than a clean total that hides a judgment. The [close evidence room](/blog/offshore-bookkeeping-close-evidence-room) model works well for storing the supporting files.

## Review with the tax preparer

The tax preparer should see the bridge before the return is finalized. Give the preparer the method statement, the exception list, the quantified adjustments, and the source documents. Ask whether the proposed treatment matches the method on the return and whether any election or disclosure is needed. Do not send a corrected ledger without explaining what changed and why. The preparer needs to distinguish a bookkeeping correction from a tax adjustment.

Record the preparer's response and the date. If the preparer disagrees with an adjustment, keep the original evidence and note the decision. The bookkeeper's role is to prepare and explain, not to overrule the filing position. This split is consistent with the documentation and review emphasis in GAO's internal-control standards, which ask for records that a reviewer can reconstruct and responsibility that is clearly assigned.

## Limitations and decision record

The method has limits. It depends on complete records, so a year with missing invoices or undocumented owner payments may produce a bridge with several open items. It cannot infer the correct tax method from the ledger alone, and it cannot resolve a disagreement between the owner and the preparer. It also cannot repair a ledger that has been overwritten without a history. Those limits should be stated in the review summary rather than left for the next person to discover.

Close the review with a decision record: the method tested, the period, the exceptions found, the adjustments proposed, the preparer's response, and the reviewer's name. File it with the tax workpapers and the close evidence. Run a shorter version of the test at each year-end, and a targeted check whenever a new bookkeeper, a software migration, or a large owner transaction changes the pattern. That rhythm keeps the ledger's method visible instead of leaving it to be guessed.
