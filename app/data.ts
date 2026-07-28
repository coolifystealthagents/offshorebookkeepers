export const site = {
  "domain": "OffshoreBookkeepers.com",
  "slug": "offshorebookkeepers",
  "brand": "Offshore Bookkeepers",
  "primary": "offshore bookkeepers",
  "audience": "owners and finance managers moving bookkeeping work offshore",
  "angle": "monthly close, AP, AR, reconciliations, reports, and controller handoff",
  "style": "Ledger fintech",
  "dark": "#102018",
  "color": "#16a34a",
  "accent": "#0ea5e9",
  "heroImage": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  "serviceImage": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  "alt": "bookkeeper reviewing accounting reports on computer",
  "badge": "Clean books"
} as const;
export const services = [
  {
    "slug": "operations-support",
    "title": "Monthly Close Support",
    "desc": "Offshore help with reconciliations, close checklists, variance notes, and the evidence your controller needs for review."
  },
  {
    "slug": "customer-support",
    "title": "Accounts Receivable Support",
    "desc": "Keep invoice checks, aging notes, customer account records, and collection follow-up organized for your finance lead."
  },
  {
    "slug": "admin-support",
    "title": "Accounts Payable Support",
    "desc": "Prepare vendor bills, match receipts, maintain approval records, and flag payment questions without giving up payment control."
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and Review",
    "desc": "Prepare draft reports, account notes, exception lists, and review packets before the owner, controller, or CPA signs off."
  }
] as const;
export const blogPosts = [
  {
    "slug": "philippines-bookkeeper-accounts-payable-controls",
    "title": "Philippines bookkeeper accounts payable controls",
    "excerpt": "A Philippines bookkeeper can prepare bills and keep the approval trail clean. The owner or finance lead should still control vendor changes, invoice approval, exceptions, and payment release.",
    "minutes": 12,
    "published": "2026-07-25",
    "takeaways": [
      "Let the bookkeeper collect, check, enter, route, and reconcile bills, but do not give one person end-to-end payment control.",
      "Confirm every vendor bank change through a known contact path that did not come from the change request.",
      "Keep one exception log so missing proof, duplicates, tax questions, and approval holds stay visible until a named owner decides."
    ],
    "sections": [
      {
        "heading": "The job is preparation, not payment control",
        "paragraphs": [
          "A Philippines bookkeeper can take a large share of the daily accounts payable work when the boundaries are written down. The role can collect bills, route questions, maintain due-date notes, and prepare the reconciliation packet.",
          "The role should not create a vendor and approve that vendor, change bank details and release a payment, or clear its own exception. Those decisions stay with the owner, controller, or another finance lead who can check the evidence and accept the business risk."
        ]
      },
      {
        "heading": "Why a clean approval trail matters",
        "paragraphs": [
          "The FBI recorded 21,442 business email compromise complaints in its 2024 Internet Crime Report. Reported losses for that crime type reached $2,770,151,146, so an email that looks routine can carry a very large risk when it asks for a payment or bank change.",
          "The same report said all 2024 complaints produced $16.6 billion in reported losses, a 33 percent increase from 2023. These are complaint figures, not a forecast for one company, but they explain why an accounts payable role needs a second set of eyes before money moves."
        ]
      },
      {
        "heading": "Set the role before sharing the inbox",
        "paragraphs": [
          "Start with a written list of what the bookkeeper may do in the accounting system and shared inbox. Give each task an owner, a required source document, an expected output, and a clear point where the bookkeeper must stop and ask.",
          "Use named accounts rather than a shared password, and turn on multi-factor authentication for email and finance tools. CISA says MFA adds another layer of protection when a password is compromised, while NIST control AC-6 calls for giving users only the access needed for assigned tasks."
        ]
      },
      {
        "heading": "Build an invoice intake rule",
        "paragraphs": [
          "Send every bill to one controlled intake point, whether that is an AP inbox or an approved upload folder. The bookkeeper should record when the bill arrived, the vendor name, invoice number, invoice date, service period, amount, due date, purchase record, and the person expected to approve it.",
          "A bill that arrives by chat, personal email, or an unfamiliar file-sharing link should move to a hold queue. The bookkeeper can ask the vendor to resend it through the normal channel, but should not make a rushed exception just because the message says it is urgent."
        ]
      },
      {
        "heading": "Check the bill before data entry",
        "paragraphs": [
          "The first check is basic but useful: does the legal vendor name match the vendor record, and has the invoice number already been entered? Then compare the amount, quantity, tax line, purchase record, receipt of goods or services, and any approval limit that applies.",
          "The bookkeeper should mark each check as passed, missing, or not applicable instead of relying on memory. If the bill does not match, the record stays on hold with a short note that tells the approver exactly what must be answered."
        ]
      },
      {
        "heading": "Treat vendor bank changes as a separate event",
        "paragraphs": [
          "A bank-detail change should never ride through as a normal invoice update. The bookkeeper can log the request and gather the supporting record, but a finance owner should verify it by calling a known number or using a trusted contact already stored in the vendor file.",
          "Do not use the phone number, email address, or link supplied inside the change request for that verification. After the owner approves the change, keep the old value, new value, verification date, verifier name, and evidence reference in a change log."
        ]
      },
      {
        "heading": "Keep invoice approval outside the bookkeeping role",
        "paragraphs": [
          "The person who knows the purchase should confirm that the goods or service were received and that the amount is correct. The bookkeeper can route the bill and remind the approver, but silence is not approval and an email reaction is not enough unless the written process accepts it as evidence.",
          "Approval should name the invoice, amount, decision, date, and approver. If the approver asks for a split, credit, or account change, the bookkeeper records the instruction and keeps it with the bill so the controller can follow the history later."
        ]
      },
      {
        "heading": "Use a two-step payment handoff",
        "paragraphs": [
          "After approval, the bookkeeper can prepare a payment batch or a payment-ready list without having release rights. A separate finance owner checks the payee, destination account, amount, due date, approval record, duplicate flag, and any late change before releasing funds.",
          "The bank confirmation should return to a controlled record that the bookkeeper can use for reconciliation. This keeps preparation and release separate while still letting the offshore role finish the follow-up work and keep the books current."
        ]
      },
      {
        "heading": "Give exceptions one visible home",
        "paragraphs": [
          "An exception log stops open questions from disappearing across inboxes and chat threads. Each row should include the vendor, invoice, issue, amount, date raised, evidence link, person who must decide, due date, and current status.",
          "Use plain status names such as waiting for vendor, waiting for approver, duplicate review, bank change hold, tax review, and ready after correction. The bookkeeper updates the facts, while the named owner records the final decision and why it was made."
        ]
      },
      {
        "heading": "Review the controls every week",
        "paragraphs": [
          "A weekly review can be short if the records are clean. Look at bills entered without purchase support, changes to vendor details, duplicate warnings, overdue approvals, manual journal requests, released payments that lack a complete packet, and exceptions that have remained open too long.",
          "The ACFE's 2024 study of 1,921 occupational fraud cases found that tips uncovered 43 percent of cases, compared with 14 percent found by internal audit and 13 percent by management review. That result does not measure one AP team, but it supports giving staff and vendors a clear way to report something that looks wrong."
        ]
      },
      {
        "heading": "Run a controlled first week",
        "paragraphs": [
          "On day one, explain the task boundary and show a clean invoice packet beside a held packet. On day two, let the bookkeeper process redacted examples, then compare every field and note with the reviewer before any live entry.",
          "Days three and four can use a small live batch with no payment access and same-day review. On day five, review the exception log, fix unclear instructions, confirm access is still limited, and decide whether the bookkeeper is ready for a larger batch."
        ]
      },
      {
        "heading": "Use questions that reveal judgment",
        "paragraphs": [
          "Ask the candidate what they would do if a familiar vendor sends new bank details and asks for payment that afternoon. A strong answer separates logging and evidence gathering from independent verification, owner approval, and payment release.",
          "Then show two invoices with the same number and slightly different amounts. The candidate should pause both records, compare source documents and prior entries, write a clear exception note, and avoid choosing one without approval."
        ]
      },
      {
        "heading": "Measure the work without rewarding shortcuts",
        "paragraphs": [
          "Useful checks include the share of bills with complete support, duplicate alerts resolved before entry, bank changes verified through a trusted path, exceptions with named owners, and reconciled payments linked to approval evidence. These checks show whether the process is complete without pushing the bookkeeper to clear bills too quickly.",
          "Do not use bill volume alone as the score. A careful hold on a suspicious request is good work, even when it lowers the number of bills processed that day."
        ]
      }
    ],
    "table": {
      "title": "Accounts payable control board",
      "intro": "This board assigns the daily work to the Philippines bookkeeper and keeps final decisions with the business. Adapt the evidence fields to the accounting system, bank, and approval policy already in use.",
      "columns": ["Step", "Bookkeeper action", "Required proof", "Owner control"],
      "rows": [
        ["Invoice intake", "Log the bill and source channel", "Original file, received date, vendor record", "Set accepted intake channels"],
        ["Duplicate check", "Search vendor, number, amount, and date", "Search result or duplicate flag", "Decide any true exception"],
        ["Purchase match", "Compare order, receipt, and bill", "Purchase and receipt references", "Confirm disputed delivery or scope"],
        ["Vendor change", "Log and hold the request", "Old and new details, request copy", "Verify through a known contact and approve"],
        ["Invoice approval", "Route the complete packet", "Named approval with date and amount", "Approve or reject the bill"],
        ["Payment preparation", "Prepare a payment-ready list", "Approved bill and due-date note", "Check and release the payment"],
        ["Reconciliation", "Match bank result to the bill", "Bank confirmation and ledger entry", "Review unmatched or reversed items"],
        ["Exception close", "Record the answer and attach proof", "Decision, owner, date, reason", "Own the decision and any policy change"]
      ]
    },
    "chart": {
      "title": "How occupational fraud was first detected",
      "description": "Three leading detection methods in the ACFE 2024 study",
      "unit": "Percent of cases",
      "methodNote": "Method: ACFE 2024 Report to the Nations, 1,921 investigated occupational fraud cases across 138 countries and territories. Only the three leading methods are shown, so the bars do not total 100 percent.",
      "bars": [
        ["Tips", 43],
        ["Internal audit", 14],
        ["Management review", 13]
      ]
    },
    "graphic": {
      "title": "The AP handoff in six steps",
      "description": "The bookkeeper prepares and records the work. A finance owner controls approvals, changes, and release.",
      "steps": [
        ["1", "Receive", "Bookkeeper logs the bill"],
        ["2", "Check", "Bookkeeper matches the proof"],
        ["3", "Hold", "Bookkeeper flags any exception"],
        ["4", "Approve", "Finance owner decides"],
        ["5", "Release", "Authorized owner moves funds"],
        ["6", "Reconcile", "Bookkeeper closes the record"]
      ]
    },
    "quote": {
      "text": "Without the information you report to us through IC3 or your local FBI Field Office, we simply cannot piece together the puzzle of this ever-shifting threat landscape.",
      "person": "B. Chad Yarbrough",
      "title": "Operations Director for Criminal and Cyber, Federal Bureau of Investigation",
      "sourceName": "2024 IC3 Annual Report",
      "sourceUrl": "https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf"
    },
    "faqs": [
      ["Can a Philippines bookkeeper approve invoices?", "The bookkeeper can check and route an invoice, but approval should come from the person who owns the purchase or finance decision. Keep the named approval with the invoice packet."],
      ["Should the bookkeeper have bank access?", "Read-only access can help with reconciliation when the bank supports it. Payment creation and release rights should remain limited to authorized finance owners under the company's control policy."],
      ["Who verifies a vendor bank change?", "A finance owner should verify the change through a known phone number or trusted contact already on file. The bookkeeper can log the request and evidence, but should not verify it using contact details supplied in the same request."],
      ["What should happen when an invoice does not match?", "Place the invoice on hold and record the exact mismatch in the exception log. The bookkeeper gathers facts, while the purchase owner or finance lead decides what to approve or correct."]
    ],
    "relatedLinks": [
      ["See the accounts payable support scope", "/services/admin-support"],
      ["Plan reporting and review checks", "/services/reporting-and-qa"],
      ["Use the month-end close checklist", "/blog"],
      ["Map a Philippines bookkeeping role", "/contact"]
    ],
    "banners": [
      ["Define the AP boundary", "Map invoice work, access limits, approval owners, and exception rules before candidate matching.", "/contact", "Plan the role"],
      ["Connect AP to the close", "Use one review packet so approved bills, open exceptions, and reconciled payments reach month-end together.", "/blog", "Open the close guide"],
      ["Keep review independent", "Set a reporting and QA handoff that leaves final finance decisions with your owner, controller, or CPA.", "/services/reporting-and-qa", "See review support"]
    ],
    "sources": [
      { "name": "FBI, 2024 IC3 Annual Report", "url": "https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf" },
      { "name": "Association of Certified Fraud Examiners, Occupational Fraud 2024: A Report to the Nations", "url": "https://www.acfe.com/-/media/files/acfe/pdfs/rttn/2024/2024-report-to-the-nations.pdf" },
      { "name": "NIST, Security and Privacy Controls for Information Systems and Organizations, SP 800-53 Rev. 5", "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" },
      { "name": "CISA, Turn On MFA", "url": "https://www.cisa.gov/secure-our-world/turn-mfa" },
      { "name": "Federal Trade Commission, Cybersecurity for Small Business", "url": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity" }
    ]
  },
  {
    "slug": "philippines-bookkeeper-bank-reconciliation-controls",
    "marker": "philippines-bank-reconciliation-control-guide-2026",
    "title": "Philippines bookkeeper bank reconciliation controls",
    "excerpt": "A Philippines bookkeeper can prepare bank reconciliations and keep every exception tied to proof. The owner or controller should keep bank administration, approval, write-off, and final review authority.",
    "minutes": 12,
    "published": "2026-07-28",
    "takeaways": [
      "Give the bookkeeper read-only bank access when possible, then keep user administration and money movement with an authorized finance owner.",
      "Match each bank line to a ledger entry and source record, while unresolved differences stay in an exception queue with a named reviewer.",
      "Close the reconciliation only after the reviewer checks the opening balance, ending balance, outstanding items, adjustments, and proof packet."
    ],
    "sections": [
      {
        "heading": "The role prepares the reconciliation",
        "paragraphs": [
          "A Philippines bookkeeper can do the careful matching work that a bank reconciliation requires. The role can download statements, compare bank activity with the ledger, attach proof, list differences, and prepare a review packet.",
          "The role should not add bank users, change permissions, release money, approve its own adjustment, or hide an unresolved difference. Those actions stay with the owner, controller, or another finance lead named in the company's control rules."
        ]
      },
      {
        "heading": "Why small differences deserve a clear record",
        "paragraphs": [
          "A bank difference may be a timing item, a duplicate entry, a bank fee, a missing deposit, or a transaction posted to the wrong account. Most are ordinary, but the bookkeeper should prove the cause instead of forcing the ledger to match.",
          "The Association of Certified Fraud Examiners studied 1,921 occupational fraud cases from 138 countries and territories for its 2024 report. Those cases caused more than $3.1 billion in total losses, which is broad global evidence rather than a prediction for one bookkeeping team."
        ]
      },
      {
        "heading": "Use the same evidence rule for every account",
        "paragraphs": [
          "Write down what counts as proof before the bookkeeper starts. A normal packet may include the bank statement, ledger detail, deposit record, payment approval, processor report, prior reconciliation, and a note for each open item.",
          "The Internal Revenue Service says a business needs records that clearly show income and expenses, and that supporting documents can include invoices, receipts, deposit information, and canceled checks. The tax rule does not design a reconciliation for you, but it supports keeping source records tied to the books."
        ]
      },
      {
        "heading": "Limit bank access before sharing live work",
        "paragraphs": [
          "Use a named bank user with read-only access when the bank offers it. Keep user setup, account linking, payee changes, transfer creation, transfer release, and security reset rights away from the bookkeeping role.",
          "NIST control AC-6 calls for least privilege, which means giving users only the access needed for assigned tasks. Apply that idea to the accounting system too, so the bookkeeper can prepare and document a reconciliation without gaining approval rights."
        ]
      },
      {
        "heading": "Start from a trusted opening balance",
        "paragraphs": [
          "The current reconciliation should start with the prior period's approved ending record. The bookkeeper checks that the bank opening balance, ledger opening balance, and carried outstanding items agree with that signed packet before matching new activity.",
          "If the opening balance changed, stop and trace the change before doing the rest of the month. A prior-period edit, deleted entry, reversed payment, or changed opening item needs a dated explanation and review from the finance owner."
        ]
      },
      {
        "heading": "Match deposits in both directions",
        "paragraphs": [
          "First trace each ledger deposit to the bank, then trace each bank deposit back to the ledger and its source. This two-way check catches missing entries, duplicate records, wrong dates, and deposits placed in the wrong account.",
          "Keep processor timing separate from a true error. If a customer payment is recorded before a processor sends the net deposit, the bookkeeper should tie the gross amount, fees, refunds, and net settlement to the processor report."
        ]
      },
      {
        "heading": "Match withdrawals without approving them",
        "paragraphs": [
          "For checks, card activity, transfers, and automated debits, match the bank line to the ledger entry and approval record. The bookkeeper records what happened, but the person who approved the payment remains responsible for the business decision.",
          "A withdrawal with no support moves to the exception queue instead of a guessed account. The note should show the date, amount, bank description, search already completed, records still missing, and the person who must answer."
        ]
      },
      {
        "heading": "Give suspicious changes a separate path",
        "paragraphs": [
          "Do not treat a changed destination account or unexpected transfer as a routine coding question. The bookkeeper should preserve the message, avoid replying through the same contact path, and alert the finance owner through a known channel.",
          "The FBI recorded 21,442 business email compromise complaints in its 2024 Internet Crime Report, with $2,770,151,146 in reported losses. Complaint data does not show the chance of loss for one company, but it gives a sound reason to verify changes outside the message that requested them."
        ]
      },
      {
        "heading": "Keep an exception queue that can be reviewed",
        "paragraphs": [
          "One row should hold each unresolved difference until it is cleared. Record the account, transaction date, amount, issue, source links, date raised, current owner, next action, expected answer date, and final outcome.",
          "Use plain status labels such as waiting for statement, waiting for deposit proof, duplicate review, unknown withdrawal, prior-period change, and ready for owner review. A status should describe the next fact needed, not make the problem look finished."
        ]
      },
      {
        "heading": "Do not use a plug to make the balance work",
        "paragraphs": [
          "A plug is an unsupported entry used only to remove a difference. It makes the current report look neat while breaking the link between the bank, ledger, and source record.",
          "If an adjustment is needed, the bookkeeper can prepare the proposed entry with its reason and proof. A controller, owner, or CPA should review the accounting treatment and approve the entry under the company's written policy."
        ]
      },
      {
        "heading": "Age old items instead of carrying them forever",
        "paragraphs": [
          "List outstanding checks, deposits in transit, and other timing items by age. The bookkeeper can confirm whether each item cleared after period end, remains valid, was replaced, or needs a decision from the finance owner.",
          "Set a review point for old items, but do not let the bookkeeper cancel, reissue, write off, or change them alone. The final action can affect cash, vendor records, customer balances, or tax reporting, so it needs documented approval."
        ]
      },
      {
        "heading": "Review the packet and the final number",
        "paragraphs": [
          "A zero difference does not prove that the reconciliation is sound. The reviewer should check the statement identity, opening balance, ending balance, matching evidence, old items, unusual transactions, manual entries, and every exception closed during the period.",
          "The ACFE's 2024 study reported a $145,000 median loss per occupational fraud case, and the typical case lasted 12 months before detection. These figures cover investigated cases, yet they show why a reviewer should look at the trail instead of accepting a balanced total without questions."
        ]
      },
      {
        "heading": "Use a careful first-week handoff",
        "paragraphs": [
          "On the first day, show one approved reconciliation and explain each access boundary. On the second day, use redacted bank and ledger records so the bookkeeper can practice matching, documenting, and raising an exception without touching live money controls.",
          "Use a small live account for the next three days with same-day review. At the end of the week, check the evidence links, note quality, open questions, access logs, and reviewer feedback before adding another account."
        ]
      }
    ],
    "table": {
      "title": "Bank reconciliation control board",
      "intro": "Use this board to separate preparation from approval while keeping every bank line tied to a source record.",
      "columns": ["Check", "Philippines bookkeeper", "Proof to retain", "Finance owner"],
      "rows": [
        ["Opening balance", "Tie to the prior approved packet", "Prior reconciliation and current statement", "Review any prior-period change"],
        ["Deposits", "Match ledger, bank, and processor records", "Deposit slip or settlement report", "Decide unresolved customer or processor issues"],
        ["Withdrawals", "Match the bank line to entry and approval", "Invoice, approval, and payment record", "Own the payment decision"],
        ["Bank charges", "Identify and prepare the entry", "Statement line and account note", "Approve the accounting treatment"],
        ["Unknown activity", "Place on hold and document the search", "Bank detail, ledger search, and alert", "Contact the bank or decide the response"],
        ["Old items", "Age and trace each open item", "Original record and later bank activity", "Approve cancellation, replacement, or write-off"],
        ["Final packet", "Prepare totals, links, and exception list", "Statement, ledger, notes, and proposed entries", "Review and sign off"]
      ]
    },
    "chart": {
      "marker": "fraud-duration-loss",
      "title": "Median loss rose with longer fraud duration",
      "description": "Selected duration groups from the ACFE 2024 study",
      "unit": "Median loss in US dollars",
      "valuePrefix": "$",
      "maxValue": 1000000,
      "ticks": [0, 250000, 500000, 750000, 1000000],
      "accessibleDescription": "Under 6 months, $30,000 median loss; 24 to 36 months, $250,000; over 60 months, $875,000.",
      "methodNote": "Method: ACFE Occupational Fraud 2024, based on 1,921 investigated cases. This chart shows three selected duration groups and their median losses; it is not a forecast for one company.",
      "bars": [
        ["Under 6 months", 30000],
        ["24 to 36 months", 250000],
        ["Over 60 months", 875000]
      ]
    },
    "graphic": {
      "marker": "bank-reconciliation-handoff",
      "title": "The reconciliation handoff in six steps",
      "description": "The bookkeeper gathers, matches, and documents. A finance owner reviews decisions and signs off.",
      "accessibleDescription": "Six steps show statement collection, ledger matching, proof linking, exception logging, owner review, and close-file completion.",
      "ownerSteps": [4],
      "bookkeeperLegend": "Bookkeeper prepares the record",
      "ownerLegend": "Finance owner reviews or decides",
      "methodNote": "Method note: this is a sample handoff, not an accounting standard. Match the steps to the company's accounts, approval policy, software, and professional advice.",
      "steps": [
        ["1", "Collect", "Get the approved statement"],
        ["2", "Match", "Compare bank and ledger"],
        ["3", "Link", "Attach source proof"],
        ["4", "Log", "List every difference"],
        ["5", "Review", "Finance owner decides"],
        ["6", "Close", "File the signed packet"]
      ]
    },
    "quote": {
      "text": "We offer this report to business leaders, government officials, anti-fraud professionals, and the general public in hopes that the data presented herein will help improve our collective ability to protect organizations from the harm caused by occupational fraud.",
      "person": "John Warren, J.D., CFE",
      "title": "CEO, Association of Certified Fraud Examiners",
      "sourceName": "Occupational Fraud 2024: A Report to the Nations",
      "sourceUrl": "https://www.acfe.com/-/media/files/acfe/pdfs/rttn/2024/2024-report-to-the-nations.pdf"
    },
    "faqs": [
      ["Can a Philippines bookkeeper complete bank reconciliations?", "The bookkeeper can prepare the full reconciliation, link proof, and list exceptions. A named finance owner should review the packet and keep authority over adjustments, write-offs, bank access, and final sign-off."],
      ["Should the bookkeeper have online banking access?", "Read-only access is useful when the bank supports a separate named user. Keep user administration, security resets, transfers, payee changes, and payment release with authorized staff inside the business."],
      ["What happens when the bank and ledger do not match?", "The difference goes into an exception queue with its amount, evidence, owner, and next action. The bookkeeper investigates the facts, while the owner or controller approves any adjustment or business decision."],
      ["How often should reconciliations be reviewed?", "Match the review schedule to transaction volume, account risk, and the company's close plan. High-activity cash accounts may need checks during the month as well as a signed period-end review."]
    ],
    "relatedLinks": [
      ["See the bank reconciliation support scope", "/services/bank-reconciliation-support"],
      ["Plan reporting and review checks", "/services/reporting-and-qa"],
      ["Read the accounts payable control guide", "/blog/philippines-bookkeeper-accounts-payable-controls"],
      ["Map a Philippines bookkeeping role", "/contact"]
    ],
    "banners": [
      ["Set the bank-access boundary", "Map read-only access, evidence rules, reviewer ownership, and stop points before candidate matching.", "/contact", "Plan the role"],
      ["Connect reconciliation to review", "Build a packet that lets the owner check balances, old items, adjustments, and open exceptions.", "/services/reporting-and-qa", "See review support"],
      ["Keep cash decisions inside the business", "Use Philippines bookkeeping support for preparation while your authorized finance owner keeps bank control and sign-off.", "/services/bank-reconciliation-support", "See the service scope"]
    ],
    "sources": [
      { "name": "1. Association of Certified Fraud Examiners, Occupational Fraud 2024: A Report to the Nations", "url": "https://www.acfe.com/-/media/files/acfe/pdfs/rttn/2024/2024-report-to-the-nations.pdf" },
      { "name": "2. Federal Bureau of Investigation, 2024 IC3 Annual Report", "url": "https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf" },
      { "name": "3. NIST, Security and Privacy Controls for Information Systems and Organizations, SP 800-53 Rev. 5", "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" },
      { "name": "4. CISA, Recognize and Report Phishing", "url": "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing" },
      { "name": "5. Internal Revenue Service, Publication 583: Starting a Business and Keeping Records", "url": "https://www.irs.gov/publications/p583" }
    ]
  },] as const;
export const stats = [{label:'Typical savings target',value:'30-60%',note:'depends on role, management, and local hiring plan'},{label:'Best pilot length',value:'14 days',note:'enough time to test quality before scaling'},{label:'Start with',value:'5-10 tasks',note:'clear recurring tasks beat vague job descriptions'}] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a bookkeeping staffing plan based on your close schedule, accounting tools, approval rules, and review needs.',
  fit: [
    'owners who need bookkeeping help but want to keep control of payments and final review',
    'finance teams that need steady support for close, AP, AR, reconciliations, or reporting',
    'companies with documented accounting rules, sample work, and a named reviewer',
  ],
  included: [
    'a role planning call to sort daily work, close work, and owner-only decisions',
    'candidate matching based on accounting skills, schedule, software, and communication needs',
    'onboarding guidance for close checklists, review notes, and limited tool access',
    'a clear contact for quality, attendance, and replacement questions',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'Sort the task list into daily work, month-end work, and decisions that stay with the owner or controller.' },
  { step: '2', title: 'Match the bookkeeper', body: 'Match accounting skills, software experience, work hours, and communication needs to the role.' },
  { step: '3', title: 'Set up the handoff', body: 'Start with sample work, limited access, a close checklist, and a named reviewer.' },
  { step: '4', title: 'Add work carefully', body: 'Move more tasks only after the first reconciliations and close checks are accurate and on time.' },
] as const;

export const staffingFitNote = 'The right setup depends on your task list, close schedule, accounting software, access limits, and reviewer. Send those details so the team can map the role.';
