import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const failures = [];
const requiredText = ['title', 'description', 'published', 'updated', 'category', 'featuredImage'];
const isoDate = /^\d{4}-\d{2}-\d{2}$/;

function parseScalar(block, key) {
  const match = block.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!match) return '';
  return match[1].trim().replace(/^["']|["']$/g, '');
}

function parseJson(block, key, label) {
  const match = block.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!match) {
    failures.push(`${label}: missing ${key}`);
    return null;
  }
  try { return JSON.parse(match[1]); }
  catch { failures.push(`${label}: invalid ${key} JSON`); return null; }
}

function parseOptionalJson(block, key, label) {
  const match = block.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!match) return undefined;
  try { return JSON.parse(match[1]); }
  catch { failures.push(`${label}: invalid ${key} JSON`); return null; }
}

function frontmatterParts(raw) {
  const match = raw?.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  return match ? { block: match[1], body: match[2] } : undefined;
}

function gitBaseline(relativeFile, raw) {
  const read = (ref) => {
    try { return execFileSync('git', ['show', `${ref}:${relativeFile}`], { cwd: process.cwd(), encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); }
    catch { return undefined; }
  };
  const head = read('HEAD');
  if (head !== undefined && head !== raw) return head;
  return read('HEAD^');
}

function metadataLine(block, key) {
  return block.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.trim();
}

function meaningfulResearchText(block, body) {
  const withoutSourceAppendices = body.replace(/^##\s+(?:Sources?|Source notes)\s*$[\s\S]*?(?=^##\s+|(?![\s\S]))/gmi, '');
  return JSON.stringify({
    title: parseScalar(block, 'title'),
    description: parseScalar(block, 'description'),
    takeaways: metadataLine(block, 'takeaways') ?? '',
    body: withoutSourceAppendices.replace(/\s+/g, ' ').trim(),
  });
}

function isValidIsoDate(value) {
  if (!isoDate.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
}

for (const kind of ['blog', 'research', 'alternatives']) {
  const dir = path.join(process.cwd(), 'content', kind);
  for (const file of fs.readdirSync(dir).filter((name) => /\.mdx?$/.test(name))) {
    const label = `${kind}/${file}`;
    const relativeFile = path.join('content', kind, file);
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    const frontmatter = frontmatterParts(raw);
    if (!frontmatter) { failures.push(`${label}: missing frontmatter`); continue; }
    const { block, body } = frontmatter;
    const baseline = frontmatterParts(gitBaseline(relativeFile, raw));
    const researchChanged = kind === 'research' && (!baseline || baseline.block !== block || baseline.body !== body);

    for (const key of requiredText) if (!parseScalar(block, key)) failures.push(`${label}: missing ${key}`);
    for (const key of ['published', 'updated']) {
      const value = parseScalar(block, key);
      if (value && !isValidIsoDate(value)) failures.push(`${label}: invalid ${key} date`);
    }
    const published = parseScalar(block, 'published');
    const updated = parseScalar(block, 'updated');
    if (isValidIsoDate(published) && isValidIsoDate(updated) && updated < published) failures.push(`${label}: updated date cannot precede published date`);

    const takeaways = parseJson(block, 'takeaways', label);
    if (takeaways !== null && (!Array.isArray(takeaways) || takeaways.length < 1 || takeaways.some((item) => typeof item !== 'string' || !item.trim()))) failures.push(`${label}: takeaways must be a non-empty string array`);

    const faqs = parseOptionalJson(block, 'faqs', label);
    if (researchChanged && faqs !== undefined && faqs !== null && (!Array.isArray(faqs) || faqs.some((entry) => !entry || typeof entry !== 'object' || Array.isArray(entry) || typeof entry.question !== 'string' || !entry.question.trim() || typeof entry.answer !== 'string' || !entry.answer.trim()))) {
      failures.push(`${label}: faqs entries must be {question, answer} objects`);
    }

    const sourceMatch = block.match(/^sources:\s*(.+)$/m);
    let listedSources = [];
    if (sourceMatch) {
      let sources;
      try { sources = JSON.parse(sourceMatch[1]); }
      catch { failures.push(`${label}: invalid sources JSON`); }
      if (sources !== undefined) {
        if (!Array.isArray(sources)) failures.push(`${label}: sources must be an array`);
        else {
          const urls = [];
          for (const source of sources) {
            if (!source || typeof source !== 'object' || typeof source.name !== 'string' || !source.name.trim() || typeof source.url !== 'string' || !/^https:\/\//.test(source.url)) {
              failures.push(`${label}: every source requires a name and HTTPS URL`);
              continue;
            }
            urls.push(source.url);
          }
          if (new Set(urls).size !== urls.length) failures.push(`${label}: duplicate source URLs`);
          listedSources = sources;
          if (kind === 'research') {
            const numberWords = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };
            const claims = `${block}\n${body}`.matchAll(/\b(\d+|one|two|three|four|five|six|seven|eight|nine|ten)\s+public sources?\b/gi);
            for (const claim of claims) {
              const token = claim[1].toLowerCase();
              const count = /^\d+$/.test(token) ? Number(token) : numberWords[token];
              if (count !== sources.length) failures.push(`${label}: claims ${count} public sources but frontmatter lists ${sources.length}`);
            }
          }
        }
      }
    } else if (kind === 'research') failures.push(`${label}: missing sources`);

    const listedUrls = new Set(listedSources.map((source) => source?.url).filter(Boolean));
    const quote = parseOptionalJson(block, 'quote', label);
    if (quote !== undefined && quote !== null && (!quote || typeof quote !== 'object' || typeof quote.sourceUrl !== 'string' || !listedUrls.has(quote.sourceUrl))) {
      failures.push(`${label}: quote.sourceUrl must match a listed source`);
    }

    const sourceNotes = parseOptionalJson(block, 'sourceNotes', label);
    if (researchChanged && sourceNotes === undefined) failures.push(`${label}: missing sourceNotes evidence map`);
    if (sourceNotes !== undefined && sourceNotes !== null) {
      if (!Array.isArray(sourceNotes) || sourceNotes.length < 3) failures.push(`${label}: sourceNotes must contain at least three claim mappings`);
      else for (const note of sourceNotes) {
        if (!note || typeof note.claim !== 'string' || !note.claim.trim() || !Array.isArray(note.sourceUrls) || note.sourceUrls.length < 1) {
          failures.push(`${label}: each sourceNotes entry needs a claim and sourceUrls`);
          continue;
        }
        for (const sourceUrl of note.sourceUrls) if (!listedUrls.has(sourceUrl)) failures.push(`${label}: sourceNotes URL is not a listed source: ${sourceUrl}`);
      }
    }

    if (kind === 'alternatives' && !parseScalar(block, 'type')) failures.push(`${label}: missing type`);
    const headings = [...body.matchAll(/^##\s+(.+)$/gm)];
    if (!headings.length) failures.push(`${label}: requires at least one substantive section`);
    for (let index = 0; index < headings.length; index += 1) {
      const sectionStart = headings[index].index + headings[index][0].length;
      const sectionEnd = headings[index + 1]?.index ?? body.length;
      if (!body.slice(sectionStart, sectionEnd).trim()) failures.push(`${label}: section "${headings[index][1].trim()}" requires a non-empty body`);
    }
    const image = parseScalar(block, 'featuredImage');
    if (image && !fs.existsSync(path.join(process.cwd(), 'public', image.replace(/^\//, '')))) failures.push(`${label}: missing image ${image}`);
  }
}

if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log('Content contracts, source integrity, evidence maps, dates, sections, and featured images passed.');
