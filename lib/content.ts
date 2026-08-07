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
    .sort((a, b) => b.published.localeCompare(a.published));
}

export function getPost(kind: ContentKind, slug: string) {
  return getContent(kind).find((post) => post.slug === slug);
}
