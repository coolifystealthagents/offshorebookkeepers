---
title: "Bank access boundaries for a Philippines bookkeeping role"
description: "Design bank and accounting permissions so a Philippines bookkeeper can reconcile activity while payment release, user administration, and security changes stay controlled."
published: "2026-08-17"
updated: "2026-08-17"
category: "Cash Controls"
type: "blog"
featuredImage: "/thumbnails/bookkeeping-bank-transfer-controls.webp"
takeaways: ["Give access only for the documented reconciliation or preparation task.","Keep user administration, payee changes, transfers, and release outside the role.","Review access when duties or systems change."]
faqs: [["Does a bookkeeper need bank access?","Read-only access can help with reconciliation when the bank supports named users. The business should choose the minimum access that completes the task."],["Who should change bank users?","An authorized finance or security owner should create, modify, and remove users and review those changes."]]
---
## Begin with the task
Write the exact bank and accounting actions the role needs: view statements, download activity, match transactions, or prepare a reconciliation. Avoid granting broad access simply because it is convenient during onboarding.

## Decide access from the reconciliation steps
If the assignment is to reconcile a checking account, view-only online banking access may support statement downloads while the accounting platform supports matching and attachments. It does not follow that the bookkeeper needs to add payees, change security details, initiate transfers, or approve bills. Write each action beside its system permission. If a bank combines roles, document the excess capability and add a compensating review.

## Use named accounts
A named user makes activity attributable and supports timely removal. Shared credentials obscure who viewed or changed information and make review harder for an offshore team.

## Keep money movement separate
Payment creation, transfer setup, payee changes, approval, release, security resets, and user administration should remain with authorized business users. The bookkeeper can prepare evidence without controlling funds.

## Review the permission map
List each bank user, system, role, permitted account, access level, authentication method, approver, grant date, and review date. Compare the map with the tasks the role actually performs, then send excess, missing, or unclear access to the client’s designated security and finance owners. Remove access that is no longer necessary.

## Test the boundary with an exception
Ask the bookkeeper to identify a duplicate withdrawal and an unfamiliar beneficiary without changing either record. The reviewer checks that evidence was captured, the exception was routed, and no payment or credential change occurred. Record the result in the permission map and revisit it if the work changes from reconciliation to payment preparation.

## Design an exception route
If a reconciliation reveals an unexpected transfer or changed destination, the bookkeeper should preserve the record and alert the owner through a trusted channel. They should not investigate by replying to a suspicious request.

## Make offboarding explicit
Remove access when a role ends, a vendor changes, or the task moves systems. Keep the confirmation with the access review record so the boundary is demonstrable later.
