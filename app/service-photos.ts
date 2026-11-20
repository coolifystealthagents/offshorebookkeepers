type ServicePhoto = { src: string; alt: string };

const photos: Record<string, ServicePhoto> = {
  coding: {
    src: '/photos/services/service-coding.jpg',
    alt: 'Bookkeeper entering transactions beside a laptop and organized source documents',
  },
  reconciliation: {
    src: '/photos/services/service-reconciliation.jpg',
    alt: 'Accounting professional comparing a printed statement with a reconciliation on a laptop',
  },
  receipts: {
    src: '/photos/services/service-receipts.jpg',
    alt: 'Hands sorting receipts beside a scanner and laptop on an accounting desk',
  },
  cleanup: {
    src: '/photos/services/service-cleanup.jpg',
    alt: 'Office professional organizing client files and binders on archive shelves',
  },
  payables: {
    src: '/photos/services/service-payables.jpg',
    alt: 'Accounts payable specialist reviewing vendor bills at a desk with a laptop',
  },
  receivables: {
    src: '/photos/services/service-receivables.jpg',
    alt: 'Accounts receivable professional reviewing an aging report while wearing a headset',
  },
  payroll: {
    src: '/photos/services/service-payroll.jpg',
    alt: 'Payroll administrator reviewing timesheets and payroll paperwork at a desk',
  },
  close: {
    src: '/photos/services/service-close.jpg',
    alt: 'Finance team reviewing printed financial statements around a conference table',
  },
  systems: {
    src: '/photos/services/service-systems.jpg',
    alt: 'Accounting systems specialist working across two monitors with ledger data',
  },
  ecommerce: {
    src: '/photos/services/service-ecommerce.jpg',
    alt: 'Ecommerce operations assistant packing an order beside a laptop',
  },
  property: {
    src: '/photos/services/service-property.jpg',
    alt: 'Property bookkeeper reviewing lease and property records at a desk',
  },
  legal: {
    src: '/photos/services/service-legal.jpg',
    alt: 'Legal bookkeeper organizing client files and a ledger in a quiet law office',
  },
};

const bySlug: Record<string, keyof typeof photos> = {
  'daily-transaction-coding': 'coding',
  'bank-reconciliation-support': 'reconciliation',
  'receipt-expense-documentation': 'receipts',
  'bookkeeping-cleanup-catch-up': 'cleanup',
  'accounts-payable-processing': 'payables',
  'vendor-records-1099-support': 'payables',
  'accounts-receivable-support': 'receivables',
  'payroll-journal-preparation': 'payroll',
  'timesheet-employee-expense-support': 'payroll',
  'month-end-close-support': 'close',
  'management-reporting-support': 'close',
  'cash-forecast-dashboard-support': 'systems',
  'audit-document-support': 'cleanup',
  'fixed-asset-register-support': 'systems',
  'bookkeeping-system-migration-support': 'systems',
  'inventory-cost-data-support': 'systems',
  'job-costing-support': 'systems',
  'sales-tax-data-support': 'payables',
  'ecommerce-bookkeeping': 'ecommerce',
  'property-bookkeeping': 'property',
  'law-firm-bookkeeping': 'legal',
};

const byGroup: Record<string, keyof typeof photos> = {
  'current-books': 'coding',
  'payables-receivables': 'payables',
  'workforce-records': 'payroll',
  'close-reporting': 'close',
  'systems-cost-data': 'systems',
  'industry-workflows': 'ecommerce',
};

export function servicePhoto(slug: string, group?: string): ServicePhoto {
  return photos[bySlug[slug] ?? (group ? byGroup[group] : 'coding')] ?? photos.coding;
}
