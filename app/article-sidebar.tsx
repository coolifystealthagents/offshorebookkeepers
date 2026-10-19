"use client";

import { useEffect, useState } from 'react';

export type TocItem = { id: string; label: string };
type SupportingLink = { href: string; label: string };

type Props = {
  items: TocItem[];
  published?: string;
  updated?: string;
  readingLabel?: string;
  related?: SupportingLink[];
};

function TocLinks({ items, active }: { items: TocItem[]; active: string }) {
  return <ol>{items.map((item) => <li key={item.id}><a className={active === item.id ? 'is-active' : ''} aria-current={active === item.id ? 'location' : undefined} href={`#${item.id}`}>{item.label}</a></li>)}</ol>;
}

export function ArticleMobileToc({ items }: { items: TocItem[] }) {
  return <details className="article-toc-mobile"><summary>Table of contents</summary><nav aria-label="Table of contents"><TocLinks items={items} active="" /></nav></details>;
}

export function ArticleSidebar({ items, published, updated, readingLabel, related = [] }: Props) {
  const [active, setActive] = useState(items[0]?.id || '');
  useEffect(() => {
    const headings = items.map((item) => document.getElementById(item.id)).filter((node): node is HTMLElement => Boolean(node));
    if (!headings.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-110px 0px -68% 0px', threshold: [0, .1, 1] });
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  const toc = <TocLinks items={items} active={active} />;
  return <aside className="article-aside" aria-label="Article tools">
      <div className="article-aside-scroll">
        <nav className="article-toc" aria-label="Table of contents"><h2>On this page</h2>{toc}</nav>
        <section className="article-support" aria-labelledby="article-details"><h2 id="article-details">Article details</h2>{published && <p><strong>Published</strong><span>{published}</span></p>}{updated && updated !== published && <p><strong>Updated</strong><span>{updated}</span></p>}{readingLabel && <p><strong>Reading guide</strong><span>{readingLabel}</span></p>}<p><strong>Publisher</strong><span>Offshore Bookkeepers</span></p></section>
        {related.length > 0 && <section className="article-support"><h2>Related reading</h2><ul>{related.slice(0, 3).map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul></section>}
        <a className="article-sidebar-cta" href="/contact-us"><strong>Plan a controlled handoff</strong><span>Bring one recurring workflow, its inputs, and the named reviewer.</span></a>
      </div>
    </aside>;
}
