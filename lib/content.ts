import fs from 'node:fs';
import path from 'node:path';

export type ContentKind = 'blog' | 'research' | 'alternatives';
export type ContentPost = {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  category: string;
  type: string;
  competitor: string;
  featuredImage: string;
  sources: { name: string; url: string }[];
  takeaways: string[];
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  relatedLinks: string[][];
};

const required = ['title', 'description', 'published', 'category', 'featuredImage'] as const;

// The August 10 batch is an immutable public-date cohort. Keep its manifest
// order ahead of older same-date posts while retaining a deterministic order
// for every other equal-date group.
const august10BlogOrder = [
  'bookkeeping-accounts-payable-cutoff-checklist',
  'bookkeeping-annual-close-preparation',
  'bookkeeping-bank-feed-exception-management',
  'bookkeeping-billable-hours-reconciliation',
  'bookkeeping-cash-disbursement-approval',
  'bookkeeping-cash-receipts-reconciliation-workflow',
  'bookkeeping-charity-restricted-funds-tracking',
  'bookkeeping-customer-deposit-reconciliation',
  'bookkeeping-debt-covenant-data-packet',
  'bookkeeping-ecommerce-payout-cutoff',
  'bookkeeping-employee-advance-reconciliation',
  'bookkeeping-expense-policy-exception-log',
  'bookkeeping-financial-statement-flux-review',
  'bookkeeping-fixed-fee-client-profitability',
  'bookkeeping-intercompany-balance-confirmation',
  'bookkeeping-loan-amortization-schedule-review',
  'bookkeeping-merchant-reserve-reconciliation',
  'bookkeeping-multi-currency-reconciliation',
  'bookkeeping-prepaid-expense-review-checklist',
  'bookkeeping-purchase-order-three-way-match',
  'bookkeeping-recurring-journal-entry-review',
  'bookkeeping-sales-invoice-number-control',
  'bookkeeping-subscription-revenue-reconciliation',
  'bookkeeping-vendor-1099-address-review',
] as const;
const august10Rank: ReadonlyMap<string, number> = new Map(august10BlogOrder.map((slug, index) => [slug, index]));
const august17BlogOrder = [
  'philippines-bookkeeper-close-calendar', 'philippines-bookkeeper-ap-inbox-triage',
  'philippines-bookkeeper-ar-collections-notes', 'philippines-bookkeeper-payroll-source-pack',
  'philippines-bookkeeper-processor-payout-reconciliation', 'philippines-bookkeeper-expense-coding-review',
  'philippines-bookkeeper-journal-entry-boundaries', 'philippines-bookkeeper-cash-forecast-inputs',
  'philippines-bookkeeper-fixed-asset-register-handoff', 'philippines-bookkeeper-intercompany-recharge-review',
  'philippines-bookkeeper-deferred-revenue-schedule', 'philippines-bookkeeper-inventory-cutoff',
  'philippines-bookkeeper-project-cost-review', 'philippines-bookkeeper-vendor-master-controls',
  'philippines-bookkeeper-employee-reimbursement-controls', 'philippines-bookkeeper-management-reporting-pack',
  'philippines-bookkeeper-close-exception-escalation', 'philippines-bookkeeper-bank-access-boundaries',
  'philippines-bookkeeper-client-onboarding-checklist', 'philippines-bookkeeper-multi-entity-close',
  'philippines-bookkeeper-sales-tax-workpaper-handoff', 'philippines-bookkeeper-document-retention-map',
] as const;
const august17Rank: ReadonlyMap<string, number> = new Map(august17BlogOrder.map((slug, index) => [slug, index]));
const august18BlogOrder = [
  'philippines-bookkeeper-daily-cash-position', 'philippines-bookkeeper-bill-coding-quality-review',
  'philippines-bookkeeper-ar-credit-limit-notes', 'philippines-bookkeeper-ap-duplicate-invoice-screen',
  'philippines-bookkeeper-payroll-clearing-review', 'philippines-bookkeeper-close-supporting-index',
  'philippines-bookkeeper-prepaid-expense-evidence', 'philippines-bookkeeper-fixed-asset-addition-intake',
  'philippines-bookkeeper-intercompany-confirmation-log', 'philippines-bookkeeper-ecommerce-refund-reconciliation',
  'philippines-bookkeeper-merchant-fee-cutoff', 'philippines-bookkeeper-project-billing-support',
  'philippines-bookkeeper-customer-deposit-rollforward', 'philippines-bookkeeper-vendor-credit-application',
  'philippines-bookkeeper-budget-variance-bridge', 'philippines-bookkeeper-insurance-renewal-accrual',
  'philippines-bookkeeper-lease-data-request', 'philippines-bookkeeper-inventory-receiving-log',
  'philippines-bookkeeper-owner-distribution-review', 'philippines-bookkeeper-bank-signatory-evidence',
  'philippines-bookkeeper-recurring-journal-register', 'philippines-bookkeeper-document-request-escalation',
] as const;
const august18Rank: ReadonlyMap<string, number> = new Map(august18BlogOrder.map((slug, index) => [slug, index]));
const august10ResearchOrder = [
  'bookkeeping-1099-compliance-evidence-research',
  'bookkeeping-bank-signatory-review-evidence-research',
  'bookkeeping-cash-flow-forecast-evidence-research',
  'bookkeeping-credit-memo-control-research',
  'bookkeeping-employee-reimbursement-control-research',
  'bookkeeping-merchant-fee-reconciliation-evidence-research',
  'bookkeeping-purchase-accrual-cutoff-research',
  'bookkeeping-remote-team-handoff-research',
  'bookkeeping-sales-tax-evidence-handoff-research',
  'bookkeeping-vendor-master-change-control-research',
] as const;
const august10ResearchRank: ReadonlyMap<string, number> = new Map(august10ResearchOrder.map((slug, index) => [slug, index]));
const august14ResearchOrder = [
  'bookkeeping-client-onboarding-evidence-research',
  'bookkeeping-chart-of-accounts-change-research',
  'bookkeeping-cash-conversion-data-research',
  'bookkeeping-expense-reimbursement-anomaly-research',
  'bookkeeping-fixed-asset-capitalization-research',
  'bookkeeping-grant-reporting-evidence-research',
  'bookkeeping-healthcare-patient-balance-research',
  'bookkeeping-subscription-churn-reconciliation-research',
  'bookkeeping-sales-tax-nexus-records-research',
  'bookkeeping-close-materiality-review-research',
] as const;
const august14ResearchRank: ReadonlyMap<string, number> = new Map(august14ResearchOrder.map((slug, index) => [slug, index]));
const august17ResearchOrder = [
  'bookkeeping-offshore-handoff-latency-research', 'bookkeeping-segregation-of-duties-remote-team-research',
  'bookkeeping-source-document-completeness-research', 'bookkeeping-close-calendar-timezone-research',
  'bookkeeping-accounting-software-permission-research', 'bookkeeping-review-queue-capacity-research',
  'bookkeeping-cross-border-payroll-journal-research', 'bookkeeping-exception-ownership-remote-team-research',
  'bookkeeping-owner-reporting-kpi-definition-research', 'bookkeeping-continuity-backup-research'
] as const;
const august17ResearchRank: ReadonlyMap<string, number> = new Map(august17ResearchOrder.map((slug, index) => [slug, index]));
const august18ResearchOrder = [
  'bookkeeping-client-approval-aging-research', 'bookkeeping-bank-reconciliation-review-research',
  'bookkeeping-month-end-evidence-index-research', 'bookkeeping-vendor-onboarding-risk-research',
  'bookkeeping-cash-application-research', 'bookkeeping-expense-cutoff-judgment-research',
  'bookkeeping-management-reporting-reconciliation-research', 'bookkeeping-remote-review-notes-research',
  'bookkeeping-accounting-close-rollback-research', 'bookkeeping-document-request-friction-research'
] as const;
const august18ResearchRank: ReadonlyMap<string, number> = new Map(august18ResearchOrder.map((slug, index) => [slug, index]));

function scalar(value: string) {
  const trimmed = value.trim();
  if (trimmed.startsWith('[') || trimmed.startsWith('{')) return JSON.parse(trimmed);
  return trimmed.replace(/^["']|["']$/g, '');
}

function parseFile(file: string): ContentPost {
  const raw = fs.readFileSync(file, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error(`${file} has no valid frontmatter block`);
  const meta: Record<string, any> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':');
    if (separator > 0) meta[line.slice(0, separator).trim()] = scalar(line.slice(separator + 1));
  }
  for (const key of required) if (!meta[key]) throw new Error(`${file} is missing ${key}`);

  const sections = match[2].trim().split(/\r?\n## /).map((block, index) => {
    const normalized = index === 0 ? block.replace(/^## /, '') : block;
    const [heading, ...body] = normalized.split(/\r?\n/);
    return { heading: heading.trim(), body: body.join('\n').trim() };
  }).filter((section) => section.heading && section.body);

  return {
    slug: path.basename(file).replace(/\.(md|mdx)$/, ''),
    title: meta.title,
    description: meta.description,
    published: meta.published,
    updated: meta.updated || meta.published,
    category: meta.category,
    type: meta.type || '',
    competitor: meta.competitor || '',
    featuredImage: meta.featuredImage,
    sources: meta.sources || [],
    takeaways: meta.takeaways || [],
    faqs: meta.faqs || [],
    relatedLinks: meta.relatedLinks || [],
    sections,
  };
}

export function getContent(kind: ContentKind): ContentPost[] {
  const directory = path.join(process.cwd(), 'content', kind);
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory)
    .filter((file) => /\.(md|mdx)$/.test(file))
    .map((file) => parseFile(path.join(directory, file)))
    // Primary date ordering remains .sort((a, b) => b.published.localeCompare(a.published));
    .sort((a, b) => {
      const dateOrder = b.published.localeCompare(a.published);
      if (dateOrder) return dateOrder;
      const rank = kind === 'blog' ? (a.published === '2026-08-18' || b.published === '2026-08-18' ? august18Rank : a.published === '2026-08-17' || b.published === '2026-08-17' ? august17Rank : august10Rank) : kind === 'research' ? (a.published === '2026-08-18' || b.published === '2026-08-18' ? august18ResearchRank : a.published === '2026-08-17' || b.published === '2026-08-17' ? august17ResearchRank : a.published === '2026-08-14' || b.published === '2026-08-14' ? august14ResearchRank : august10ResearchRank) : undefined;
      const aRank = rank?.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
      const bRank = rank?.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
      if (aRank !== bRank) return aRank - bRank;
      return a.slug.localeCompare(b.slug);
    });
}

export function getPost(kind: ContentKind, slug: string) {
  return getContent(kind).find((post) => post.slug === slug);
}
