import fs from 'node:fs';

const plans = {
  'offshore-bookkeeping-payment-processor-reserve-research': ['Decision context','Research question and preregistered definitions','Population and data collection'],
  'offshore-bookkeeping-deferred-revenue-contract-change-research': ['Classification protocol','Calculations and reporting','Interpretation for offshore bookkeeping'],
  'offshore-bookkeeping-loan-covenant-input-lineage-research': ['Evidence packet and reviewer test','Limitations and uncertainty','Implementation checklist'],
  'offshore-bookkeeping-marketplace-facilitator-evidence-research': ['Decision context','Classification protocol','Evidence packet and reviewer test'],
  'offshore-bookkeeping-capital-project-commitment-research': ['Research question and preregistered definitions','Calculations and reporting','Limitations and uncertainty'],
};

for (const [slug, removedHeadings] of Object.entries(plans)) {
  const file = `content/research/${slug}.md`;
  let raw = fs.readFileSync(file, 'utf8');
  for (const heading of removedHeadings) {
    const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    raw = raw.replace(new RegExp(`\\n## ${escaped}\\n[\\s\\S]*?(?=\\n## )`), '');
  }
  fs.writeFileSync(file, raw);
}
