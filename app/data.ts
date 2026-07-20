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
    "title": "Operations Support",
    "desc": "Operations Support for teams using offshore bookkeepers with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Customer Support for teams using offshore bookkeepers with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Admin Support for teams using offshore bookkeepers with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Reporting and QA for teams using offshore bookkeepers with clear SOPs, weekly review, and measurable handoffs."
  }
] as const;
export const blogPosts = [
  {
    "slug": "offshore-bookkeepers-month-end-close-checklist",
    "title": "Offshore bookkeeper month-end close checklist",
    "excerpt": "A practical close checklist for owners who want offshore help without losing control of the books.",
    "minutes": 8,
    "takeaways": [
      "Start offshore bookkeeping with repeatable close tasks, not final review or tax decisions.",
      "Keep bank access, approvals, and adjusting entries with the owner, controller, or CPA until trust is proven.",
      "Use one close calendar, one evidence folder, and one exception log so review does not turn into a scavenger hunt."
    ],
    "sections": [
      {
        "heading": "What an offshore bookkeeper can own first",
        "body": "Give the bookkeeper work that repeats every month and has proof behind it. Good first tasks include bank feed cleanup, transaction coding from approved rules, receipt matching, vendor bill entry, customer invoice checks, AR aging notes, AP support, and draft close reports. Keep judgment calls separate. If a transaction needs a new account, a write-off, a payroll correction, or tax treatment, the bookkeeper should flag it instead of deciding alone."
      },
      {
        "heading": "The close calendar",
        "body": "A simple calendar removes most confusion. Day 1 is document collection. Day 2 is bank and card reconciliation. Day 3 is AP and AR review. Day 4 is payroll, loans, fixed assets, and owner questions. Day 5 is draft reporting. Small teams may need fewer steps, but the order matters. The offshore bookkeeper should know what is due each day and where to put exceptions."
      },
      {
        "heading": "Access rules that protect the business",
        "body": "Start with least-privilege access. The bookkeeper needs accounting software access, source documents, and read-only bank feeds where possible. They do not need the power to release payments, change payroll, approve refunds, or move money. The Federal Trade Commission advises businesses to limit access to sensitive data to people who need it for their job. That rule fits offshore bookkeeping well."
      },
      {
        "heading": "Quality checks before reports go out",
        "body": "Do not judge the close by speed alone. Review unreconciled accounts, old uncategorized items, negative balances, stale receivables, unpaid bills, payroll clearing accounts, and large month-over-month swings. The offshore bookkeeper can prepare the checks. The owner, controller, or CPA should sign off before reports are used for taxes, lending, investor updates, or big spending decisions."
      },
      {
        "heading": "The exception log",
        "body": "The exception log is where the system becomes manageable. Each row should show the date, account, issue, amount, source document link, suggested next step, owner question, and status. A good question sounds like this: \"The $1,842 Stripe deposit on May 6 does not match the payout report. Should I split it between sales and processing fees using the Stripe summary, or leave it in uncategorized for review?\" That is much easier to answer than a vague message saying the bank feed is messy."
      }
    ],
    "modules": [
      {
        "title": "5-day offshore close board",
        "rows": [
          ["Day", "Offshore bookkeeper work", "Owner or controller check"],
          ["1", "Collect statements, receipts, invoices, payroll reports, and loan notes", "Confirm missing sources and priority accounts"],
          ["2", "Reconcile bank, card, payment processor, and clearing accounts", "Review unmatched or stale items"],
          ["3", "Update AP, AR, vendor bills, customer invoices, and aging notes", "Approve write-offs, credits, and payment holds"],
          ["4", "Prepare variance notes and exception questions", "Answer judgment calls and adjust rules"],
          ["5", "Draft P&L, balance sheet, cash notes, and close packet", "Sign off before reports are shared" ]
        ]
      }
    ],
    "faqs": [
      ["Can an offshore bookkeeper close the books alone?", "They can prepare most close work when the process is documented. Final review, tax treatment, payroll changes, write-offs, and payment approval should stay with the owner, controller, or CPA."],
      ["What should I send before the first close?", "Send prior month reports, chart of accounts rules, bank and card statements, payroll summaries, invoice samples, vendor bill rules, and a list of accounts that must be reviewed every month."],
      ["How long should the first offshore close take?", "Plan for one slower setup month. The first close often needs extra questions because the bookkeeper is learning the accounts, tools, and review style. A cleaner five-day close can come after rules and examples are stable."]
    ],
    "sources": [
      { "name": "FTC data security guidance", "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security" },
      { "name": "AICPA monthly close process overview", "url": "https://www.aicpa-cima.com/resources/article/month-end-close-process" },
      { "name": "QuickBooks bank reconciliation guide", "url": "https://quickbooks.intuit.com/accounting/bank-reconciliation/" }
    ]
  },
  {
    "slug": "offshore-bookkeepers-planning",
    "title": "Offshore Bookkeepers: What does it plan?",
    "excerpt": "A plain-English guide to staffing details, scope, and hidden planning.",
    "minutes": 6
  },
  {
    "slug": "offshore-bookkeepers-tasks-to-outsource",
    "title": "Offshore Bookkeepers: What tasks should you outsource first?",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "offshore-bookkeepers-provider-questions",
    "title": "Offshore Bookkeepers: Questions to ask before hiring",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "offshore-bookkeepers-onboarding-checklist",
    "title": "Offshore Bookkeepers: First week onboarding checklist",
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
] as const;
export const stats = [{label:'Typical savings target',value:'30-60%',note:'depends on role, management, and local hiring plan'},{label:'Best pilot length',value:'14 days',note:'enough time to test quality before scaling'},{label:'Start with',value:'5-10 tasks',note:'clear recurring tasks beat vague job descriptions'}] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
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
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
