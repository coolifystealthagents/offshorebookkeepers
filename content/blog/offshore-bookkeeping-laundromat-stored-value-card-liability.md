---
title: "Reconcile laundromat stored-value cards to cash and machine usage"
description: "A bookkeeping bridge for card loads, promotions, refunds, vending activity, equipment records, and unused customer value."
published: "2026-10-05"
updated: "2026-10-05"
category: "Retail bookkeeping"
type: "blog"
featuredImage: "/thumbnails/bookkeeping-cash-application-unapplied-receipts.svg"
sources: [{"name":"FTC gift card scam guidance","url":"https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams"},{"name":"IRS recordkeeping guidance","url":"https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"}]
takeaways: ["Reconcile cash loaded, promotional value, usage, and refunds as separate movements.","Compare the card platform with machine and settlement records rather than relying on one dashboard total.","Escalate expiration, abandoned-value, and customer-dispute decisions to authorized owners."]
faqs: [["Is promotional value the same as customer cash loaded?","No. Track it separately so the register can explain both customer funds and company-funded promotions."],["What if a kiosk settlement is short?","Compare the kiosk load log, processor batch, cash collection, refunds, and errors; leave any unexplained amount open with an owner."]]
---
## Scope and publication note

Published October 5, 2026. This article is about bookkeeping controls and is not accounting, tax, legal, consumer-protection, unclaimed-property, or payment advice.

## Stored value links three operational systems

A card-operated laundromat may accept cash at a kiosk, payment cards through a processor, mobile wallet loads, and promotional credits. Customers then spend value at washers, dryers, and vending devices. The card platform can show a liability-like unused balance, but that number must still be connected to money received, value granted, machine usage, refunds, and manual adjustments. Otherwise a platform outage or operator adjustment can create a difference no one can explain.

Map the data before building the reconciliation. Identify the card or account ID, kiosk or channel, store, load timestamp, payment method, gross cash amount, processor fee, promotional amount, refund, machine ID, usage timestamp, vend price, manual adjustment, and status. Use system identifiers rather than customer names wherever possible. Record each source system's timezone because overnight activity can land in different reporting dates.

## Freeze daily control totals

Save the card-platform activity report, kiosk cash report, payment-processor settlement, bank activity, and machine-usage summary for the same cutoff. Record report filters and extraction times. For cash kiosks, preserve the meter or collection count, counted cash, preparer, reviewer, overage or shortage, and deposit reference. A bank deposit may combine several kiosks; the collection sheet should bridge the combination.

Create daily totals for cash loads, electronic loads, promotional credits, usage, customer refunds, chargebacks, expirations or forfeitures approved under policy, and manual corrections. Recalculate opening unused value plus additions less usage and authorized removals to reach closing unused value. Keep the number of active cards and negative-balance cards as diagnostic counts, not substitutes for the dollar reconciliation.

## Do not let promotions mask settlement gaps

Suppose a Saturday kiosk report shows $4,820 loaded. The processor settled $2,930 of electronic payments, the cash collection sheet shows $1,740, and the platform added $150 of “bonus wash” value. The sources reconcile only if promotional value is presented separately: $2,930 customer electronic cash plus $1,740 customer physical cash plus $150 company promotion equals $4,820 value loaded. Calling the full amount sales or cash would distort the explanation.

If counted cash is $1,710 instead, record a $30 kiosk shortage. Do not reduce promotional value or machine usage to force agreement. Link the shortage to the collection event, seal or bag reference, named preparer, and reviewer. The authorized owner decides investigation and treatment; the bookkeeper maintains the evidence and posts only an approved entry.

## Compare value used with equipment records

Aggregate usage by machine ID and vend price, then compare it with machine-controller cycles or meter changes where those records are reliable and authorized. Differences can arise from test cycles, free-vend modes, refunds, offline operation, maintenance, or configuration changes. Keep these causes distinct. A technician's test should carry a work-order reference instead of being labeled ordinary customer usage.

Review price changes by effective time. If a washer moves from $5.00 to $5.50, a delayed device update can create legitimate mixed prices. Preserve the approved price table and device status. The bookkeeper reports machines using an unexpected rate; operations controls configuration and customer remediation.

## Protect manual adjustments

Every manual credit, debit, refund, balance transfer, or card replacement should show original account, replacement account where relevant, reason, initiating employee, approver, timestamp, and evidence. Use role-based access so a person who creates promotional value cannot also conceal it by altering the review report. Review dormant administrative accounts and changes made outside normal hours.

The FTC publishes current [gift card scam guidance](https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams), and state rules can differ for stored value, fees, expiration, and abandoned property. The bookkeeper should not decide which rule applies. Maintain policy versions and route aging or expiration questions to authorized legal and finance owners. The [IRS recordkeeping page](https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping) is useful background for retaining source support.

## Close the loop from load to bank

Tie electronic loads and refunds to processor batches and bank settlements, cash loads to collections and deposits, stored-value movements to the platform rollforward, and approved ledger movements to the general ledger. Review chargebacks that removed bank cash without reducing customer value, refunds recorded twice, cards with negative balances, and manual credits lacking approval. Test transactions from cash to card and from machine usage back to card history.

## Preserve continuity during outages

When the network or card platform is unavailable, document which machines and kiosks can accept offline activity, what limits apply, and how delayed transactions enter the system. Save the outage window, device list, recovery report, and upload result. An activity spike after service returns may represent accumulated valid usage rather than current-period demand, so the cutoff bridge should follow transaction timestamps and approved system behavior.

If a kiosk reboots with a changed counter or a device is replaced, retain the final old-device reading and the opening new-device reading. Assign the replacement a new effective segment even when the store reuses a familiar display name. This prevents a reset meter from appearing as negative activity and gives technicians a specific exception to resolve.

For multi-store operators, reconcile transfers of customer value across locations without treating the receiving store's usage as a new load. Keep originating cash, destination usage, and any interlocation settlement connected through the card ID and transfer event. Finance decides the approved store-level allocation; the preparer supplies the cross-location totals.

Retain daily snapshots, collection sheets, deposit traces, processor reports, price tables, machine exceptions, adjustment approvals, and the monthly rollforward. Monitor settlement lag, kiosk shortages, unmatched refunds, administrative adjustments, and old unresolved exceptions as control indicators. For support maintaining this routine under your existing cash and system permissions, review [Offshore Bookkeepers' bookkeeping services](/services) or [contact the team](/contact-us).
