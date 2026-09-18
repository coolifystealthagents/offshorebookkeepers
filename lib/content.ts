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
  sourceNotes: { claim: string; sourceUrls: string[] }[];
  takeaways: string[];
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  relatedLinks: [string, string][];
  serviceHandoff?: { href: string; label: string; title: string; body: string };
};

const required = ['title', 'description', 'published', 'category', 'featuredImage'] as const;


// The withdrawal manifest is the single publication boundary shared with the validator.
// Sources stay in the repository for editorial repair, but cannot enter public collections.
type WithdrawalManifest = { blog: string[]; research: string[] };
const withdrawalManifestPath = path.join(process.cwd(), 'content', 'withdrawn.json');
const parsedWithdrawalManifest = JSON.parse(fs.readFileSync(withdrawalManifestPath, 'utf8')) as Partial<WithdrawalManifest>;
if (!Array.isArray(parsedWithdrawalManifest.blog) || !Array.isArray(parsedWithdrawalManifest.research)) {
  throw new Error('content/withdrawn.json must define blog and research arrays');
}
export const withdrawnContentSlugs: WithdrawalManifest = {
  blog: parsedWithdrawalManifest.blog,
  research: parsedWithdrawalManifest.research,
};
const withdrawnSlugSets: Partial<Record<ContentKind, ReadonlySet<string>>> = {
  blog: new Set(withdrawnContentSlugs.blog),
  research: new Set(withdrawnContentSlugs.research),
};

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
const august20BlogOrder = ['offshore-bookkeeping-bank-feed-exception-queue','offshore-bookkeeping-vendor-onboarding-packet','offshore-bookkeeping-ar-aging-review','offshore-bookkeeping-payroll-source-pack','offshore-bookkeeping-expense-reimbursement-review','offshore-bookkeeping-intercompany-handoff','offshore-bookkeeping-monthly-reporting-pack','offshore-bookkeeping-subscription-revenue-schedule','offshore-bookkeeping-close-ownership-matrix','offshore-bookkeeping-cash-forecast-inputs','offshore-bookkeeping-fixed-asset-additions','offshore-bookkeeping-document-retention-map'] as const;
const august20Rank: ReadonlyMap<string, number> = new Map(august20BlogOrder.map((slug, index) => [slug, index]));
const august21BlogOrder = ['offshore-bookkeeping-cash-application-policy','offshore-bookkeeping-close-calendar-owner-map','offshore-bookkeeping-ap-accrual-evidence','offshore-bookkeeping-ar-dispute-register','offshore-bookkeeping-payroll-variance-review','offshore-bookkeeping-inventory-count-reconciliation','offshore-bookkeeping-lease-data-handoff','offshore-bookkeeping-chart-of-accounts-change-log','offshore-bookkeeping-foreign-currency-revaluation-pack','offshore-bookkeeping-project-margin-bridge','offshore-bookkeeping-employee-onboarding-ledger','offshore-bookkeeping-monthly-kpi-definition'] as const;
const august21Rank: ReadonlyMap<string, number> = new Map(august21BlogOrder.map((slug, index) => [slug, index]));
const august23BlogOrder = [
  'offshore-bookkeeping-intercompany-recharge-settlement-register',
  'bookkeeping-payroll-benefit-deduction-clearing-review',
  'offshore-bookkeeping-ecommerce-sales-tax-liability-bridge',
  'bookkeeping-saas-contract-change-billing-register',
  'offshore-bookkeeping-property-cam-recovery-tieout',
  'bookkeeping-law-firm-client-cost-advance-ledger',
  'offshore-bookkeeping-nonprofit-grant-drawdown-evidence-log',
  'bookkeeping-construction-change-order-billing-check',
  'offshore-bookkeeping-multicurrency-bank-fee-translation-pack',
  'bookkeeping-subscription-failed-payment-recovery-queue',
  'offshore-bookkeeping-restaurant-delivery-settlement-bridge',
  'bookkeeping-inventory-landed-cost-source-pack',
  'bookkeeping-bank-reconciliation-evidence-index', 'offshore-bookkeeping-customer-credit-policy-handoff',
  'bookkeeping-expense-accrual-reversal-review', 'offshore-bookkeeping-cash-disbursement-cutoff',
  'bookkeeping-vendor-prepayment-reconciliation', 'offshore-bookkeeping-revenue-cutoff-workpaper',
  'bookkeeping-finance-inbox-triage', 'offshore-bookkeeping-entity-close-readiness',
  'bookkeeping-fixed-asset-disposal-workpaper', 'offshore-bookkeeping-commission-source-register',
  'bookkeeping-insurance-claim-recovery-reconciliation', 'offshore-bookkeeping-owner-drawings-review'
] as const;
const august23Rank: ReadonlyMap<string, number> = new Map(august23BlogOrder.map((slug, index) => [slug, index]));
const september3BlogOrder = [
  'offshore-bookkeeping-intercompany-recharge-settlement-register',
  'bookkeeping-payroll-benefit-deduction-clearing-review',
  'offshore-bookkeeping-ecommerce-sales-tax-liability-bridge',
  'bookkeeping-saas-contract-change-billing-register',
  'offshore-bookkeeping-property-cam-recovery-tieout',
  'bookkeeping-law-firm-client-cost-advance-ledger',
  'offshore-bookkeeping-nonprofit-grant-drawdown-evidence-log',
  'bookkeeping-construction-change-order-billing-check',
  'offshore-bookkeeping-multicurrency-bank-fee-translation-pack',
  'bookkeeping-subscription-failed-payment-recovery-queue',
  'offshore-bookkeeping-restaurant-delivery-settlement-bridge',
  'bookkeeping-inventory-landed-cost-source-pack',
] as const;
const september3Rank: ReadonlyMap<string, number> = new Map(september3BlogOrder.map((slug, index) => [slug, index]));
const august31BlogOrder = [
  'offshore-bookkeeping-processor-reserve-release', 'offshore-bookkeeping-stale-check-review',
  'offshore-bookkeeping-chargeback-evidence-pack', 'offshore-bookkeeping-debt-covenant-reporting-pack',
  'offshore-bookkeeping-gift-card-liability-rollforward', 'offshore-bookkeeping-warranty-reserve-source-pack',
  'offshore-bookkeeping-escrow-account-reconciliation', 'offshore-bookkeeping-tips-payable-reconciliation',
  'offshore-bookkeeping-franchise-royalty-reconciliation', 'offshore-bookkeeping-donor-restriction-release-log',
  'offshore-bookkeeping-construction-retainage-review', 'offshore-bookkeeping-healthcare-remittance-reconciliation'
] as const;
const august31Rank: ReadonlyMap<string, number> = new Map(august31BlogOrder.map((slug, index) => [slug, index]));
const august19BlogOrder = [
  'offshore-bookkeeping-unapplied-cash-triage', 'offshore-bookkeeping-ap-approval-evidence',
  'offshore-bookkeeping-bank-reconciliation-breaks', 'offshore-bookkeeping-invoice-intake-queue',
  'offshore-bookkeeping-ar-follow-up-notes', 'offshore-bookkeeping-close-evidence-room',
  'offshore-bookkeeping-payroll-input-freeze', 'offshore-bookkeeping-vendor-change-callback-log',
  'offshore-bookkeeping-marketplace-payout-bridge', 'offshore-bookkeeping-project-cost-source-map',
  'offshore-bookkeeping-quarterly-access-evidence', 'offshore-bookkeeping-review-note-closure',
] as const;
const august19Rank: ReadonlyMap<string, number> = new Map(august19BlogOrder.map((slug, index) => [slug, index]));
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
const august19ResearchOrder = [
  'offshore-bookkeeping-evidence-queue-aging-research',
  'offshore-bookkeeping-time-zone-handoff-research',
  'offshore-bookkeeping-reconciliation-taxonomy-research',
  'offshore-bookkeeping-review-comment-research',
  'offshore-bookkeeping-source-freshness-research',
] as const;
const august19ResearchRank: ReadonlyMap<string, number> = new Map(august19ResearchOrder.map((slug, index) => [slug, index]));
const august20ResearchOrder = [
  'offshore-bookkeeping-ledger-lineage-research', 'bookkeeping-review-sampling-distributed-team-research',
  'bookkeeping-foreign-currency-remeasurement-research', 'bookkeeping-period-cutover-control-research',
  'bookkeeping-source-version-control-research',
] as const;
const august20ResearchRank: ReadonlyMap<string, number> = new Map(august20ResearchOrder.map((slug, index) => [slug, index]));
const august21ResearchOrder = [
  'offshore-bookkeeping-reconciliation-break-triage-research', 'offshore-bookkeeping-intercompany-evidence-ownership-research',
  'offshore-bookkeeping-payroll-cutoff-evidence-research', 'offshore-bookkeeping-approval-escalation-thresholds-research',
  'offshore-bookkeeping-close-evidence-sufficiency-research',
] as const;
const august21ResearchRank: ReadonlyMap<string, number> = new Map(august21ResearchOrder.map((slug, index) => [slug, index]));
const august23ResearchOrder = [
  'offshore-bookkeeping-bank-feed-outage-continuity-research',
  'offshore-bookkeeping-cash-forecast-assumption-traceability-research',
  'offshore-bookkeeping-reporting-variance-bridge-research',
  'offshore-bookkeeping-access-review-evidence-research',
  'offshore-bookkeeping-document-retention-decision-research',
] as const;
const august23ResearchRank: ReadonlyMap<string, number> = new Map(august23ResearchOrder.map((slug, index) => [slug, index]));
const august31ResearchOrder = [
  'offshore-bookkeeping-reviewer-calibration-research',
  'offshore-bookkeeping-evidence-retrieval-latency-research',
  'offshore-bookkeeping-cutoff-assertion-confidence-research',
  'offshore-bookkeeping-exception-recurrence-research',
  'offshore-bookkeeping-operational-dependency-mapping-research'
] as const;
const august31ResearchRank: ReadonlyMap<string, number> = new Map(august31ResearchOrder.map((slug, index) => [slug, index]));
const september3ResearchOrder = [
  'offshore-bookkeeping-supplier-statement-coverage-research',
  'offshore-bookkeeping-payroll-clearing-residual-age-research',
  'offshore-bookkeeping-ecommerce-refund-evidence-latency-research',
  'offshore-bookkeeping-shared-cost-allocation-provenance-research',
  'offshore-bookkeeping-security-deposit-subledger-completeness-research',
] as const;
const september3ResearchRank: ReadonlyMap<string, number> = new Map(september3ResearchOrder.map((slug, index) => [slug, index]));

function scalar(value: string) {
  const trimmed = value.trim();
  if (trimmed.startsWith('[') || trimmed.startsWith('{')) return JSON.parse(trimmed);
  return trimmed.replace(/^["']|["']$/g, '');
}

function normalizeFaqs(value: unknown): ContentPost['faqs'] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((entry) => {
    if (entry && typeof entry === 'object' && !Array.isArray(entry)) {
      const question = 'question' in entry ? entry.question : undefined;
      const answer = 'answer' in entry ? entry.answer : undefined;
      return typeof question === 'string' && typeof answer === 'string' ? [{ question, answer }] : [];
    }
    if (Array.isArray(entry) && typeof entry[0] === 'string' && typeof entry[1] === 'string') {
      return [{ question: entry[0], answer: entry[1] }];
    }
    return [];
  });
}

function normalizeRelatedLinks(value: unknown): ContentPost['relatedLinks'] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((entry) =>
    Array.isArray(entry) && typeof entry[0] === 'string' && typeof entry[1] === 'string'
      ? [[entry[0], entry[1]] as [string, string]]
      : [],
  );
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
    sourceNotes: meta.sourceNotes || [],
    takeaways: meta.takeaways || [],
    faqs: normalizeFaqs(meta.faqs),
    relatedLinks: normalizeRelatedLinks(meta.relatedLinks),
    serviceHandoff: meta.serviceHandoff,
    sections,
  };
}

export type ArticleInline =
  | { type: 'text' | 'strong' | 'code'; value: string }
  | { type: 'link'; value: string; href: string };
export type ArticleBlock =
  | { type: 'heading'; level: 3; segments: ArticleInline[] }
  | { type: 'paragraph'; segments: ArticleInline[] }
  | { type: 'unordered-list'; items: ArticleInline[][] }
  | { type: 'ordered-list'; items: ArticleInline[][] }
  | { type: 'table'; header: ArticleInline[][]; rows: ArticleInline[][][] };

function safeArticleHref(value: string) {
  if (value.startsWith('/') && !value.startsWith('//') && !value.includes('\\')) return value;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : undefined;
  } catch {
    return undefined;
  }
}

function parseArticleInline(value: string): ArticleInline[] {
  const tokens: ArticleInline[] = [];
  const pattern = /(\[[^\]\n]+\]\([^\s)\n]+\)|\*\*[^*\n]+\*\*|`[^`\n]+`)/g;
  let cursor = 0;
  for (const match of value.matchAll(pattern)) {
    const index = match.index ?? cursor;
    if (index > cursor) tokens.push({ type: 'text', value: value.slice(cursor, index) });
    const token = match[0];
    const link = token.match(/^\[([^\]\n]+)\]\(([^\s)\n]+)\)$/);
    const href = link ? safeArticleHref(link[2]) : undefined;
    if (link && href) tokens.push({ type: 'link', value: link[1], href });
    else if (token.startsWith('**')) tokens.push({ type: 'strong', value: token.slice(2, -2) });
    else if (token.startsWith('`')) tokens.push({ type: 'code', value: token.slice(1, -1) });
    else tokens.push({ type: 'text', value: token });
    cursor = index + token.length;
  }
  if (cursor < value.length) tokens.push({ type: 'text', value: value.slice(cursor) });
  return tokens.length ? tokens : [{ type: 'text', value }];
}

function tableCells(line: string) {
  return line.trim().replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim());
}

function isTableSeparator(line: string) {
  const cells = tableCells(line);
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

export function parseArticleBody(body: string): ArticleBlock[] {
  const lines = body.replace(/\r\n?/g, '\n').split('\n');
  const blocks: ArticleBlock[] = [];
  const isTableStart = (index: number) => lines[index]?.trim().startsWith('|') && isTableSeparator(lines[index + 1] || '');
  const isBlockStart = (index: number) => {
    const line = lines[index]?.trim() || '';
    return /^###\s+/.test(line) || /^[-*+]\s+/.test(line) || /^\d+[.)]\s+/.test(line) || isTableStart(index);
  };

  for (let index = 0; index < lines.length;) {
    const line = lines[index].trim();
    if (!line) { index += 1; continue; }

    const heading = line.match(/^###\s+(.+)$/);
    if (heading) {
      blocks.push({ type: 'heading', level: 3, segments: parseArticleInline(heading[1]) });
      index += 1;
      continue;
    }

    if (isTableStart(index)) {
      const header = tableCells(lines[index]).map(parseArticleInline);
      index += 2;
      const rows: ArticleInline[][][] = [];
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        const cells = tableCells(lines[index]).map(parseArticleInline);
        if (cells.length === header.length) rows.push(cells);
        index += 1;
      }
      blocks.push({ type: 'table', header, rows });
      continue;
    }

    const unordered = line.match(/^[-*+]\s+(.+)$/);
    if (unordered) {
      const items: ArticleInline[][] = [];
      while (index < lines.length) {
        const item = lines[index].trim().match(/^[-*+]\s+(.+)$/);
        if (!item) break;
        items.push(parseArticleInline(item[1]));
        index += 1;
      }
      blocks.push({ type: 'unordered-list', items });
      continue;
    }

    const ordered = line.match(/^\d+[.)]\s+(.+)$/);
    if (ordered) {
      const items: ArticleInline[][] = [];
      while (index < lines.length) {
        const item = lines[index].trim().match(/^\d+[.)]\s+(.+)$/);
        if (!item) break;
        items.push(parseArticleInline(item[1]));
        index += 1;
      }
      blocks.push({ type: 'ordered-list', items });
      continue;
    }

    const paragraph: string[] = [];
    while (index < lines.length && lines[index].trim() && !isBlockStart(index)) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push({ type: 'paragraph', segments: parseArticleInline(paragraph.join(' ')) });
  }
  return blocks;
}

export function getContent(kind: ContentKind): ContentPost[] {
  const directory = path.join(process.cwd(), 'content', kind);
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory)
    .filter((file) => /\.(md|mdx)$/.test(file))
    .filter((file) => !withdrawnSlugSets[kind]?.has(file.replace(/\.(md|mdx)$/, '')))
    .map((file) => parseFile(path.join(directory, file)))
    .sort((a, b) => {
      const dateOrder = b.published.localeCompare(a.published);
      if (dateOrder) return dateOrder;
      const rank = kind === 'blog' ? (a.published === '2026-09-03' || b.published === '2026-09-03' ? september3Rank : a.published === '2026-08-31' || b.published === '2026-08-31' ? august31Rank : a.published === '2026-08-23' || b.published === '2026-08-23' ? august23Rank : a.published === '2026-08-21' || b.published === '2026-08-21' ? august21Rank : a.published === '2026-08-20' || b.published === '2026-08-20' ? august20Rank : a.published === '2026-08-19' || b.published === '2026-08-19' ? august19Rank : a.published === '2026-08-18' || b.published === '2026-08-18' ? august18Rank : a.published === '2026-08-17' || b.published === '2026-08-17' ? august17Rank : august10Rank) : kind === 'research' ? (a.published === '2026-09-03' || b.published === '2026-09-03' ? september3ResearchRank : a.published === '2026-08-31' || b.published === '2026-08-31' ? august31ResearchRank : a.published === '2026-08-23' || b.published === '2026-08-23' ? august23ResearchRank : a.published === '2026-08-21' || b.published === '2026-08-21' ? august21ResearchRank : a.published === '2026-08-20' || b.published === '2026-08-20' ? august20ResearchRank : a.published === '2026-08-19' || b.published === '2026-08-19' ? august19ResearchRank : a.published === '2026-08-18' || b.published === '2026-08-18' ? august18ResearchRank : a.published === '2026-08-17' || b.published === '2026-08-17' ? august17ResearchRank : a.published === '2026-08-14' || b.published === '2026-08-14' ? august14ResearchRank : august10ResearchRank) : undefined;
      const aRank = rank?.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
      const bRank = rank?.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
      if (aRank !== bRank) return aRank - bRank;
      return a.slug.localeCompare(b.slug);
    });
}

export const researchTopics = [
  'Close & Reporting',
  'Payables & Expenses',
  'Receivables & Revenue',
  'Cash & Treasury',
  'Payroll & Tax',
  'Reconciliation',
  'Access & Governance',
  'Evidence & Quality',
  'Industry Workflows',
  'Bookkeeping Operations',
] as const;

export type ResearchTopic = typeof researchTopics[number];

export function researchTopic(post: Pick<ContentPost, 'category'>): ResearchTopic {
  const category = post.category.toLowerCase();
  if (/construction|property|nonprofit|healthcare|legal|ecommerce|saas/.test(category)) return 'Industry Workflows';
  if (/payable|\bap\b|expense|purchase|vendor|disbursement/.test(category)) return 'Payables & Expenses';
  if (/receivable|\bar\b|revenue|subscription/.test(category)) return 'Receivables & Revenue';
  if (/cash|bank|treasury|currency/.test(category)) return 'Cash & Treasury';
  if (/payroll|tax/.test(category)) return 'Payroll & Tax';
  if (/reconcil/.test(category)) return 'Reconciliation';
  if (/close|report|general ledger|multi-entity|asset|inventory/.test(category)) return 'Close & Reporting';
  if (/access|governance|hiring/.test(category)) return 'Access & Governance';
  if (/evidence|record|quality|review/.test(category)) return 'Evidence & Quality';
  return 'Bookkeeping Operations';
}

export function getResearchTopics(posts: readonly ContentPost[]) {
  const counts = new Map<ResearchTopic, number>();
  for (const post of posts) {
    const topic = researchTopic(post);
    counts.set(topic, (counts.get(topic) ?? 0) + 1);
  }
  return researchTopics.filter((topic) => counts.has(topic)).map((label) => ({ label, count: counts.get(label)! }));
}

export function filterResearchByTopic(posts: ContentPost[], requestedTopic?: string) {
  const activeTopic = getResearchTopics(posts).some(({ label }) => label === requestedTopic) ? requestedTopic as ResearchTopic : '';
  return { activeTopic, posts: activeTopic ? posts.filter((post) => researchTopic(post) === activeTopic) : posts };
}

export function getRelatedResearch(posts: ContentPost[], post: ContentPost, limit = 3) {
  const topic = researchTopic(post);
  return posts.filter((candidate) => candidate.slug !== post.slug && researchTopic(candidate) === topic).slice(0, limit);
}

export function readingMinutes(post: ContentPost) {
  const text = [post.title, post.description, ...post.takeaways, ...post.sections.flatMap((section) => [section.heading, section.body])].join(' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getPost(kind: ContentKind, slug: string) {
  return getContent(kind).find((post) => post.slug === slug);
}
