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
    "title": "How to plan an offshore bookkeeping role",
    "excerpt": "Set the task list, access limits, review owner, and close schedule before you hire.",
    "minutes": 6
  },
  {
    "slug": "offshore-bookkeepers-tasks-to-outsource",
    "title": "Bookkeeping tasks to outsource first",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "offshore-bookkeepers-provider-questions",
    "title": "Questions to ask an offshore bookkeeping provider",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "offshore-bookkeepers-onboarding-checklist",
    "title": "First-week checklist for an offshore bookkeeper",
    "excerpt": "Set up tools, sample work, approval limits, review calls, and reporting before live work begins.",
    "minutes": 9
  }
] as const;
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
