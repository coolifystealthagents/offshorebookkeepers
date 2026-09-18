export type ServiceGroupId =
  | 'current-books'
  | 'payables-receivables'
  | 'workforce-records'
  | 'close-reporting'
  | 'systems-cost-data'
  | 'industry-workflows';

export type FleetService = {
  slug: string;
  title: string;
  navLabel: string;
  group: ServiceGroupId;
  summary: string;
  problem: string;
  tasks: readonly string[];
  inputs: readonly string[];
  outputs: readonly string[];
  controls: readonly string[];
  firstWeek: readonly string[];
  illustration: { src: string; alt: string; caption: string };
};

export const serviceGroups: readonly { id: ServiceGroupId; title: string; description: string }[] = [
  { id: 'current-books', title: 'Keep the books current', description: 'Organize routine records, clear backlogs, and route exceptions to a named reviewer.' },
  { id: 'payables-receivables', title: 'Manage money in and money out', description: 'Prepare payable and receivable queues without moving approval or release authority.' },
  { id: 'workforce-records', title: 'Support payroll and workforce records', description: 'Prepare payroll journals, timesheet inputs, and expense documentation for client review.' },
  { id: 'close-reporting', title: 'Prepare for close and management review', description: 'Maintain schedules, evidence, and reporting inputs around an accountable close calendar.' },
  { id: 'systems-cost-data', title: 'Maintain systems and cost data', description: 'Structure migrations, inventory, job-cost, asset, and sales-tax data for specialist review.' },
  { id: 'industry-workflows', title: 'Apply the workflow to your industry', description: 'Connect core bookkeeping controls to ecommerce, property, and law-firm source systems.' },
];

const define = (service: FleetService) => service;

export const fleetServices: readonly FleetService[] = [
  define({
    slug: 'daily-transaction-coding', title: 'Transaction Coding Support', navLabel: 'Transaction coding', group: 'current-books',
    summary: 'Keep bank and card activity moving through approved account and dimension rules, with unfamiliar items held in a visible exception queue.',
    problem: 'Uncategorized activity and inconsistent coding accumulate when recurring merchants, dimensions, and exception rules live only in one reviewer’s memory.',
    tasks: ['Apply the approved chart-of-accounts map', 'Attach available source documents', 'Split transactions using documented rules', 'Queue unfamiliar, owner-related, capital, loan, or tax-sensitive items'],
    inputs: ['Bank and card feeds', 'Chart of accounts and coding guide', 'Vendor, customer, and dimension lists'],
    outputs: ['Prepared coding queue', 'Missing-document list', 'Exception and reclassification log'],
    controls: ['The client approves new accounting treatment', 'Sensitive or unusual items remain unposted', 'A named reviewer approves the first batch and rule changes'],
    firstWeek: ['Sample recent transactions and recurring merchants', 'Document account and dimension rules', 'Review the first prepared batch and exception taxonomy'],
    illustration: { src: '/illustrations/services/daily-transaction-coding.svg', alt: 'Bank-feed records pass through approved coding rules, while exceptions move to a separate review queue.', caption: 'Bank feed → coding rules → prepared queue, with exceptions held for review.' },
  }),
  define({
    slug: 'bank-reconciliation-support', title: 'Bank and Credit Card Reconciliation Support', navLabel: 'Reconciliations', group: 'current-books',
    summary: 'Prepare account-by-account reconciliations that connect statement balances, ledger activity, outstanding items, and reviewer questions.',
    problem: 'Ledger and statement balances drift when duplicate entries, stale items, timing differences, and missing records do not have one owned follow-up queue.',
    tasks: ['Match ledger activity to statements', 'Identify outstanding and duplicate entries', 'Prepare account reconciliation schedules', 'Research differences using supplied records'],
    inputs: ['Bank and card statements', 'Ledger detail and prior reconciliations', 'Deposit, processor, and payment reports'],
    outputs: ['Draft account reconciliation', 'Outstanding-item register', 'Unexplained-difference list'],
    controls: ['The client approves write-offs and journals', 'Statement totals and cutoffs receive reviewer checks', 'Voids and corrections remain approval-gated'],
    firstWeek: ['Inventory every account and statement source', 'Reproduce one prior reconciliation', 'Agree aging and escalation rules for open differences'],
    illustration: { src: '/illustrations/services/bank-reconciliation-support.svg', alt: 'Statement and ledger records are matched, with unresolved differences routed to review.', caption: 'Statement + ledger → matching → reconciliation and difference review.' },
  }),
  define({
    slug: 'receipt-expense-documentation', title: 'Receipt and Expense Documentation', navLabel: 'Receipt documentation', group: 'current-books',
    summary: 'Collect, index, and match expense records so missing receipts and policy exceptions reach the right manager before review deadlines.',
    problem: 'Receipts spread across inboxes, cards, and expense apps leave legitimate costs unsupported and questionable transactions difficult to investigate.',
    tasks: ['Collect and index receipts', 'Match documents to transactions or claims', 'Populate approved coding fields', 'Flag missing documents, duplicates, and policy exceptions'],
    inputs: ['Receipt inbox and card feed', 'Expense claims and policy', 'Project, client, and department codes'],
    outputs: ['Matched-receipt register', 'Missing-document queue', 'Prepared expense batch and exception list'],
    controls: ['Claimants do not approve their own expenses', 'Managers decide policy exceptions', 'Personal-looking and unsupported activity stays flagged'],
    firstWeek: ['Configure intake and naming rules', 'Test a representative expense batch', 'Confirm exception categories and the client approver'],
    illustration: { src: '/illustrations/services/receipt-expense-documentation.svg', alt: 'Receipts and expense records are matched, with missing documents and policy exceptions separated for review.', caption: 'Receipts + claims → document match → prepared batch and exception queues.' },
  }),
  define({
    slug: 'bookkeeping-cleanup-catch-up', title: 'Bookkeeping Cleanup and Catch-up', navLabel: 'Cleanup and catch-up', group: 'current-books',
    summary: 'Assess incomplete periods, reconcile available evidence, and prepare a sequenced correction plan without silently rewriting accounting history.',
    problem: 'Old suspense balances, unreconciled accounts, duplicate entries, and missing records make current reports hard to trust and future closes slower.',
    tasks: ['Inventory affected periods and accounts', 'Reconcile available source records', 'Trace duplicate and stale balances', 'Prepare corrections and missing-data questions'],
    inputs: ['General ledger and trial balance', 'Statements and subledger exports', 'Prior reports and accountant notes'],
    outputs: ['Cleanup diagnostic', 'Period and account tracker', 'Draft correction and unresolved-item register'],
    controls: ['Periods are not reopened without approval', 'Corrections remain drafts until reviewed', 'Tax-return differences go to the tax adviser'],
    firstWeek: ['Freeze a working copy of the source data', 'Assess account and period completeness', 'Complete one representative account before sizing the remainder'],
    illustration: { src: '/illustrations/services/bookkeeping-cleanup-catch-up.svg', alt: 'Incomplete periods move through account reconciliation into a sequenced correction plan and open-item list.', caption: 'Old periods → reconcile accounts → correction plan, without rewriting history.' },
  }),
  define({
    slug: 'accounts-payable-processing', title: 'Accounts Payable Support', navLabel: 'Accounts payable', group: 'payables-receivables',
    summary: 'Turn invoices from multiple channels into an approval-ready queue while the client keeps vendor-change verification and payment release authority.',
    problem: 'Bills are missed or paid late when intake, duplicate checks, due dates, purchase evidence, and approval status are tracked in separate places.',
    tasks: ['Capture and index vendor bills', 'Check required fields and duplicates', 'Match purchase and receiving evidence', 'Route approvals and prepare payment proposals'],
    inputs: ['Invoice inbox', 'Purchase orders and receiving records', 'Vendor master and approval matrix'],
    outputs: ['Entered-bill queue', 'Approval and due-date report', 'Duplicate or discrepancy log'],
    controls: ['Preparers do not release payments', 'Bank-detail changes require independent verification', 'A client approver accepts every payment proposal'],
    firstWeek: ['Map invoice intake and approval paths', 'Review the active vendor master', 'Run one sample batch through approval without releasing funds'],
    illustration: { src: '/illustrations/services/accounts-payable-processing.svg', alt: 'Vendor invoices pass through duplicate and purchase-evidence checks before entering a client approval queue.', caption: 'Invoices → duplicate and evidence checks → approval-ready queue.' },
  }),
  define({
    slug: 'vendor-records-1099-support', title: 'Vendor Records and 1099 Data Support', navLabel: 'Vendor and 1099 data', group: 'payables-receivables',
    summary: 'Maintain vendor records, document status, and payment data so a client or tax professional receives an organized review workbook.',
    problem: 'Vendor tax forms, addresses, classifications, and payment records are often incomplete when the client or adviser begins year-end reporting.',
    tasks: ['Collect approved onboarding documents', 'Maintain vendor-master fields', 'Track W-9 and address status', 'Compile payment and exclusion data for review'],
    inputs: ['Vendor onboarding forms', 'W-9 documents and vendor master', 'Payment history and client classification rules'],
    outputs: ['Vendor onboarding packet', 'Missing-W-9 list', 'Draft 1099 review workbook'],
    controls: ['Tax classification and filing stay with the client or adviser', 'Sensitive data access stays limited', 'Bank-detail changes receive separate verification'],
    firstWeek: ['Define required vendor fields and storage', 'Review active vendors for record gaps', 'Name the person who decides classifications and submits forms'],
    illustration: { src: '/illustrations/services/vendor-records-1099-support.svg', alt: 'Vendor forms and payment records move through a completeness check into a tax-professional review pack.', caption: 'Vendor records → completeness check → 1099 data review pack.' },
  }),
  define({
    slug: 'accounts-receivable-support', title: 'Accounts Receivable Support', navLabel: 'Accounts receivable', group: 'payables-receivables',
    summary: 'Prepare billing from approved data, apply receipts, and maintain aging notes so disputes and unapplied cash have visible owners.',
    problem: 'Customer balances age when billing inputs arrive late, cash remains unapplied, and disputes or short payments are not kept in one follow-up register.',
    tasks: ['Prepare invoices from approved billing data', 'Apply receipts and remittance details', 'Maintain aging notes', 'Send approved reminders and flag disputes'],
    inputs: ['Approved billing schedule', 'Customer master and bank receipts', 'Remittance advice and communication templates'],
    outputs: ['Prepared invoice register', 'Updated aging report', 'Unapplied-cash and dispute queue'],
    controls: ['The client approves pricing and terms', 'Credits, refunds, and write-offs require approval', 'Dispute settlements stay with authorized personnel'],
    firstWeek: ['Tie opening aging to the ledger', 'Segment overdue and disputed balances', 'Confirm invoice and customer-communication approvals'],
    illustration: { src: '/illustrations/services/accounts-receivable-support.svg', alt: 'Approved billing and bank receipts flow through cash application into aging and dispute follow-up queues.', caption: 'Billing + receipts → cash application → aging and dispute follow-up.' },
  }),
  define({
    slug: 'payroll-journal-preparation', title: 'Payroll Journal Preparation', navLabel: 'Payroll journals', group: 'workforce-records',
    summary: 'Translate final provider reports into a mapped draft journal, source pack, and clearing-account reconciliation for client approval.',
    problem: 'Payroll reports do not consistently reach the ledger when earning, tax, deduction, benefit, and liability mappings are undocumented or outdated.',
    tasks: ['Collect final payroll reports', 'Map earnings, taxes, deductions, and liabilities', 'Prepare draft payroll journals', 'Reconcile clearing and liability balances'],
    inputs: ['Final payroll register', 'Funding and tax reports', 'Benefits data and approved account map'],
    outputs: ['Draft payroll journal', 'Payroll source pack', 'Clearing reconciliation and variance notes'],
    controls: ['Payroll calculation and submission stay authorized', 'Employee changes remain client-owned', 'A reviewer approves every journal before posting'],
    firstWeek: ['Obtain one prior payroll pack', 'Validate the account mapping', 'Run a parallel draft and record reviewer changes'],
    illustration: { src: '/illustrations/services/payroll-journal-preparation.svg', alt: 'Final payroll reports pass through an approved account map into a draft journal and reviewer checkpoint.', caption: 'Payroll reports → approved account map → draft journal for review.' },
  }),
  define({
    slug: 'timesheet-employee-expense-support', title: 'Timesheet and Employee Expense Support', navLabel: 'Timesheets and expenses', group: 'workforce-records',
    summary: 'Check completion, project coding, approvals, and receipts before workforce data moves into billing, payroll, or project reporting.',
    problem: 'Missing time, unapproved hours, and incomplete expense claims delay downstream work and obscure which manager owns each exception.',
    tasks: ['Check timesheet completion', 'Validate project and activity codes', 'Assemble approved downstream inputs', 'Match expense claims to receipts and flag exceptions'],
    inputs: ['Time-system export', 'Staff and project roster', 'Expense claims, receipts, and approval rules'],
    outputs: ['Completion report', 'Approved-input export', 'Uncoded-time and expense exception list'],
    controls: ['Managers approve time and expenses', 'Payroll and billing owners approve downstream use', 'Support staff do not set employment or reimbursement policy'],
    firstWeek: ['Map cutoffs and approval hierarchy', 'Test one department or project', 'Confirm handling for late, changed, and disputed submissions'],
    illustration: { src: '/illustrations/services/timesheet-employee-expense-support.svg', alt: 'Timesheets and expense claims pass through code and approval checks before payroll and billing handoffs.', caption: 'Time + expenses → code and approval checks → payroll and billing inputs.' },
  }),
  define({
    slug: 'month-end-close-support', title: 'Month-End Close Support', navLabel: 'Month-end close', group: 'close-reporting',
    summary: 'Keep assigned close work, evidence, dependencies, review notes, and outstanding questions visible on one accountable calendar.',
    problem: 'Close work stretches when schedules are rebuilt from memory, evidence is scattered, dependencies arrive late, and reviewer questions lack owners.',
    tasks: ['Maintain the close calendar', 'Prepare assigned reconciliations and rollforwards', 'Collect source packs', 'Track draft entries and review notes'],
    inputs: ['Close checklist and ledger', 'Statements and subledger reports', 'Prior schedules and accounting policies'],
    outputs: ['Updated close tracker', 'Draft schedules and journal support', 'Evidence and open-item register'],
    controls: ['The controller retains estimates and judgment', 'Final journals require approval', 'Period locking and financial-statement sign-off stay client-owned'],
    firstWeek: ['Assign each close item an owner and reviewer', 'Reproduce selected prior schedules', 'Agree evidence naming and sign-off conventions'],
    illustration: { src: '/illustrations/services/month-end-close-support.svg', alt: 'Close schedules and evidence move through an owned close calendar to a reviewer sign-off checkpoint.', caption: 'Schedules + evidence → close calendar → reviewer sign-off.' },
  }),
  define({
    slug: 'management-reporting-support', title: 'Management Reporting Support', navLabel: 'Management reporting', group: 'close-reporting',
    summary: 'Refresh approved report templates, variance schedules, and KPI data with a source-to-report tie-out for management review.',
    problem: 'Monthly reporting consumes unnecessary time when spreadsheets are rebuilt manually and KPI definitions or source owners change without documentation.',
    tasks: ['Refresh approved reporting templates', 'Prepare period comparisons and variance schedules', 'Update defined KPI data', 'Trace report figures to source records'],
    inputs: ['Closed or provisional ledger', 'Approved report templates', 'KPI definitions, budgets, and operational exports'],
    outputs: ['Draft reporting pack', 'Variance and KPI tables', 'Source tie-out and management question list'],
    controls: ['Management owns forecasts and commentary', 'Metric definitions require approval', 'Reports are not described as audited or assured'],
    firstWeek: ['Confirm every metric definition and source', 'Recreate the prior reporting pack', 'Reconcile key totals and record reviewer edits'],
    illustration: { src: '/illustrations/services/management-reporting-support.svg', alt: 'Ledger and defined KPI data are tied to sources before entering a draft management report pack.', caption: 'Ledger + KPI data → source tie-out → draft reporting pack.' },
  }),
  define({
    slug: 'cash-forecast-dashboard-support', title: 'Cash Forecast Input and Dashboard Support', navLabel: 'Cash forecast inputs', group: 'close-reporting',
    summary: 'Refresh approved cash inputs and assumption logs so leaders can review a dated short-term scenario without mistaking it for a guarantee.',
    problem: 'Short-term cash views become stale when receivable, payable, payroll, debt, and recurring-payment inputs update on different schedules.',
    tasks: ['Refresh opening cash', 'Load approved AR, AP, payroll, debt, and recurring inputs', 'Maintain assumption versions', 'Compare prior forecasts with actuals'],
    inputs: ['Bank balances and aging reports', 'Payroll and debt schedules', 'Approved management assumptions'],
    outputs: ['Updated cash-input workbook', 'Short-term dashboard', 'Assumption log and variance bridge'],
    controls: ['Management approves assumptions and timing overrides', 'Financing decisions remain client-owned', 'Scenarios are labeled as forecasts, not guarantees'],
    firstWeek: ['Define horizon and update cadence', 'Tie opening cash and known commitments', 'Publish a trial version with assumptions clearly labeled'],
    illustration: { src: '/illustrations/services/cash-forecast-dashboard-support.svg', alt: 'Opening cash and approved receivable and payable inputs feed an assumption log and dated weekly scenario.', caption: 'Cash + AR/AP inputs → assumption log → dated weekly scenario.' },
  }),
  define({
    slug: 'audit-document-support', title: 'Audit Schedule and Document Support', navLabel: 'Audit document support', group: 'close-reporting',
    summary: 'Organize request trackers, evidence folders, and agreed schedules so responsible owners and reviewers can answer external requests efficiently.',
    problem: 'Evidence requests stall when files are scattered across email, schedule versions are unclear, and judgmental questions reach the wrong person.',
    tasks: ['Maintain a provided-by-client tracker', 'Gather and index supporting records', 'Prepare agreed rollforwards and listings', 'Link schedules to source evidence'],
    inputs: ['Auditor or adviser request list', 'Ledger exports and reconciliations', 'Contracts, invoices, statements, and prior schedules'],
    outputs: ['Request tracker', 'Indexed evidence room', 'Prepared schedules and unresolved-question log'],
    controls: ['The auditor controls audit scope', 'Management signs representations', 'Support staff do not provide assurance or answer judgmental questions'],
    firstWeek: ['Normalize requests and due dates', 'Assign a client owner to each item', 'Complete one request end to end to establish conventions'],
    illustration: { src: '/illustrations/services/audit-document-support.svg', alt: 'An external request list is connected to indexed evidence before a client reviewer handoff.', caption: 'Request list → indexed evidence → client reviewer handoff.' },
  }),
  define({
    slug: 'fixed-asset-register-support', title: 'Fixed Asset Register Support', navLabel: 'Fixed asset register', group: 'close-reporting',
    summary: 'Maintain approved asset fields and supporting schedules while capitalization, useful-life, impairment, and disposal decisions remain with the client.',
    problem: 'Asset additions, disposals, locations, and invoices drift from the ledger when register updates are irregular or policy decisions go undocumented.',
    tasks: ['Collect addition and disposal documents', 'Update approved register fields', 'Match register balances to the ledger', 'Prepare draft depreciation using approved methods'],
    inputs: ['Purchase invoices and disposal approvals', 'Asset tags and locations', 'Ledger detail and capitalization policy'],
    outputs: ['Updated asset register', 'Addition and disposal schedule', 'Register-to-ledger reconciliation and draft depreciation'],
    controls: ['The client approves capitalization', 'Useful lives and impairment require specialist judgment', 'All journals remain approval-gated'],
    firstWeek: ['Tie the opening register to the ledger', 'Test recent additions and disposals', 'Document missing fields and approval points'],
    illustration: { src: '/illustrations/services/fixed-asset-register-support.svg', alt: 'Asset invoices, tags, and disposal approvals update an asset register that is then tied to the ledger.', caption: 'Asset records → register update → register-to-ledger tie-out.' },
  }),
  define({
    slug: 'bookkeeping-system-migration-support', title: 'Bookkeeping System Setup and Migration Support', navLabel: 'System migration support', group: 'systems-cost-data',
    summary: 'Prepare mappings, clean import files, and trial-load tie-outs so a client can review migration completeness before production cutover.',
    problem: 'Ledger migrations fail quietly when account mappings, master records, opening balances, and record counts are not tested against retained source exports.',
    tasks: ['Inventory source data', 'Clean approved customer, vendor, and account lists', 'Document source-to-target mappings', 'Run trial loads and tie-outs'],
    inputs: ['Source-system exports', 'Target import templates', 'Opening trial balance and migration rules'],
    outputs: ['Migration plan', 'Mapping workbook and import files', 'Trial-load tie-out and defect list'],
    controls: ['The client approves configuration and mappings', 'Opening balances and cutover require controller approval', 'Source exports and change history are retained'],
    firstWeek: ['Define the migration boundary and cutover date', 'Profile source files for gaps', 'Test one data object before planning full loads'],
    illustration: { src: '/illustrations/services/bookkeeping-system-migration-support.svg', alt: 'Retained source data passes through an approved field mapping into a trial-load tie-out and defect list.', caption: 'Source data → approved mapping → trial-load tie-out.' },
  }),
  define({
    slug: 'inventory-cost-data-support', title: 'Inventory and Cost Data Support', navLabel: 'Inventory and cost data', group: 'systems-cost-data',
    summary: 'Reconcile approved count, receipt, cost, and sales data between operating systems and the ledger while valuation decisions stay with management.',
    problem: 'Counts, purchases, returns, and sales move on different timelines, creating negative quantities and unexplained subledger-to-ledger variances.',
    tasks: ['Import approved item and count data', 'Reconcile subledger totals to the ledger', 'Maintain purchase and landed-cost inputs', 'Flag negative quantities and stale variances'],
    inputs: ['Item master and count sheets', 'Purchase and shipment records', 'Sales, returns, and approved costing data'],
    outputs: ['Count reconciliation', 'Subledger-to-ledger bridge', 'Cost-input file and variance queue'],
    controls: ['Management approves count adjustments', 'Costing method and reserves require approval', 'Write-down and valuation judgments stay client-owned'],
    firstWeek: ['Map systems and item identifiers', 'Tie one location or product group', 'Agree quantity and value variance thresholds'],
    illustration: { src: '/illustrations/services/inventory-cost-data-support.svg', alt: 'Count and receipt records are compared in a variance bridge before inventory totals are reviewed against the ledger.', caption: 'Counts + receipts → variance bridge → ledger review.' },
  }),
  define({
    slug: 'job-costing-support', title: 'Job Costing Support', navLabel: 'Job costing', group: 'systems-cost-data',
    summary: 'Map approved labor, material, subcontractor, and purchasing data to jobs so project owners can review cost completeness and coding exceptions.',
    problem: 'Project margins become difficult to explain when time, materials, bills, and allocations arrive late or remain outside approved job and phase codes.',
    tasks: ['Maintain job and phase codes', 'Map approved labor and purchasing feeds', 'Allocate costs using documented rules', 'Prepare budget-to-actual and unassigned-cost reports'],
    inputs: ['Job master and budgets', 'Timesheets and purchase records', 'Subcontractor bills and allocation rules'],
    outputs: ['Prepared job-cost ledger', 'Unassigned-cost queue', 'Budget-to-actual report and source bridge'],
    controls: ['Project owners approve coding', 'The controller approves overhead policy', 'Revenue recognition and margin conclusions remain client-owned'],
    firstWeek: ['Select representative active jobs', 'Map each source to job fields', 'Trace labor, material, and subcontractor costs end to end'],
    illustration: { src: '/illustrations/services/job-costing-support.svg', alt: 'Labor, materials, and subcontractor bills pass through approved job codes into prepared project costs.', caption: 'Labor + materials + bills → job codes → prepared project costs.' },
  }),
  define({
    slug: 'sales-tax-data-support', title: 'Sales Tax Data Preparation Support', navLabel: 'Sales tax data', group: 'systems-cost-data',
    summary: 'Compile sales, jurisdiction, marketplace, and exemption evidence into a review pack for the client’s qualified tax owner or adviser.',
    problem: 'Tax review slows when channel totals, ship-to fields, exemption records, marketplace reports, and ledger sales cannot be tied together.',
    tasks: ['Compile taxable-sales data', 'Organize jurisdiction and exemption fields', 'Reconcile marketplace and direct-channel reports', 'Maintain filing-calendar inputs and evidence links'],
    inputs: ['Sales and customer exports', 'Exemption certificates and marketplace reports', 'Prior workpapers and tax-engine exports'],
    outputs: ['Sales-tax data workbook', 'Jurisdiction summary', 'Marketplace reconciliation and missing-certificate list'],
    controls: ['A qualified adviser determines nexus and taxability', 'Registration and filing remain client-owned', 'Rates, positions, payments, and authority responses require approval'],
    firstWeek: ['Identify every channel and source system', 'Reproduce one prior-period data pack', 'Document gaps for tax-adviser review'],
    illustration: { src: '/illustrations/services/sales-tax-data-support.svg', alt: 'Direct and marketplace sales feed a jurisdiction evidence pack that stops at a qualified adviser review gate.', caption: 'Channel sales → jurisdiction evidence pack → adviser review.' },
  }),
  define({
    slug: 'ecommerce-bookkeeping', title: 'Ecommerce Bookkeeping Support', navLabel: 'Ecommerce bookkeeping', group: 'industry-workflows',
    summary: 'Connect store orders, processor activity, marketplace payouts, fees, refunds, reserves, and bank deposits in one reviewable workflow.',
    problem: 'Ecommerce books drift when orders, payouts, fees, returns, reserves, and inventory events settle through different systems and dates.',
    tasks: ['Prepare payout-to-order bridges', 'Reconcile processor clearing accounts', 'Organize fees, refunds, chargebacks, and reserves', 'Prepare inventory and sales-tax data handoffs'],
    inputs: ['Store and marketplace exports', 'Processor settlement reports', 'Bank deposits, returns, and inventory records'],
    outputs: ['Payout reconciliation', 'Clearing-account schedule', 'Channel fee, refund, reserve, and exception summary'],
    controls: ['The client approves revenue policy', 'Inventory valuation and reserves require approval', 'Refund and sales-tax positions remain client-owned'],
    firstWeek: ['Diagram each channel-to-bank flow', 'Reconcile one payout per active channel', 'Agree treatment for timing differences and reserves'],
    illustration: { src: '/illustrations/services/ecommerce-bookkeeping.svg', alt: 'Store orders and processor payouts converge in a clearing bridge before bank deposit reconciliation.', caption: 'Orders + payouts → clearing bridge → bank tie-out.' },
  }),
  define({
    slug: 'property-bookkeeping', title: 'Property Bookkeeping Support', navLabel: 'Property bookkeeping', group: 'industry-workflows',
    summary: 'Tie rent-roll and property-manager records to bank activity and property-level books, with owner decisions held at the correct boundary.',
    problem: 'Property reports become inconsistent when rent rolls, deposits, expenses, loans, entities, and owner activity are not mapped to the same structure.',
    tasks: ['Reconcile rent-roll or manager exports', 'Code approved activity by property', 'Maintain deposit and loan support schedules', 'Prepare property-level reporting inputs'],
    inputs: ['Rent roll and property-manager export', 'Bank and loan statements', 'Vendor bills and approved property map'],
    outputs: ['Rent-roll-to-ledger reconciliation', 'Property-coded transaction queue', 'Deposit, loan, and reporting schedules'],
    controls: ['The owner approves lease interpretation', 'Tenant adjustments and distributions require approval', 'Legal and tax conclusions remain with qualified advisers'],
    firstWeek: ['Map entities, properties, and bank accounts', 'Reconcile one representative property', 'Document intercompany and owner-approval paths'],
    illustration: { src: '/illustrations/services/property-bookkeeping.svg', alt: 'Rent-roll and bank records pass through property coding into a property-level ledger tie-out.', caption: 'Rent roll + bank → property coding → property ledger tie-out.' },
  }),
  define({
    slug: 'law-firm-bookkeeping', title: 'Law Firm Bookkeeping Support', navLabel: 'Law firm bookkeeping', group: 'industry-workflows',
    summary: 'Prepare matter billing support, client-cost schedules, and supervised account reconciliations while the firm owns trust-account compliance.',
    problem: 'Matter billing, client costs, operating cash, and trust-related records require careful separation and firm-specific supervisory procedures.',
    tasks: ['Organize approved time and billing data', 'Code client or matter costs', 'Prepare operating and trust reconciliation schedules', 'Maintain outstanding-item and evidence logs'],
    inputs: ['Practice-management exports', 'Bank statements and client ledgers', 'Approved billing records and firm procedures'],
    outputs: ['Draft billing support', 'Matter-cost schedule', 'Supervised account reconciliation and exception list'],
    controls: ['The firm defines trust procedures', 'Lawyers or authorized staff approve transfers and disbursements', 'Compliance decisions remain with the firm'],
    firstWeek: ['Document account and matter structure', 'Review firm-provided trust procedures', 'Complete a supervised reconciliation sample'],
    illustration: { src: '/illustrations/services/law-firm-bookkeeping.svg', alt: 'Operating-account and trust-account records remain in separate lanes before supervised reconciliation and firm approval.', caption: 'Separate operating and trust lanes → supervised reconciliation → firm approval.' },
  }),
];

export const postsPerPage = 20;
