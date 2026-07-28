#!/usr/bin/env python3
"""Deterministic rendered gate for the month-end close article."""
from __future__ import annotations

import html
import re
from html.parser import HTMLParser
from pathlib import Path

SLUG = "philippines-bookkeeper-month-end-close-controls"
TITLE = "Philippines bookkeeper month-end close controls"
MARKER = "philippines-month-end-close-control-guide-2026"
BUILD_FILE = Path(f".next/server/app/blog/{SLUG}.html")


class ArticleParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.article_depth = 0
        self.skip_depth = 0
        self.text: list[str] = []
        self.paragraphs: list[str] = []
        self.current_p: list[str] | None = None
        self.tags: list[tuple[str, dict[str, str]]] = []
        self.article_html: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attrs_map = {key: value or "" for key, value in attrs}
        if tag == "article" and attrs_map.get("data-article-slug") == SLUG:
            self.article_depth = 1
        elif self.article_depth:
            self.article_depth += 1
        if not self.article_depth:
            return
        self.tags.append((tag, attrs_map))
        self.article_html.append(self.get_starttag_text() or "")
        if tag in {"script", "style"}:
            self.skip_depth += 1
        if tag == "p" and not self.skip_depth:
            self.current_p = []

    def handle_endtag(self, tag: str) -> None:
        if not self.article_depth:
            return
        self.article_html.append(f"</{tag}>")
        if tag == "p" and self.current_p is not None:
            self.paragraphs.append(" ".join(self.current_p).strip())
            self.current_p = None
        if tag in {"script", "style"} and self.skip_depth:
            self.skip_depth -= 1
        self.article_depth -= 1

    def handle_data(self, data: str) -> None:
        if not self.article_depth or self.skip_depth:
            return
        clean = " ".join(data.split())
        if clean:
            self.text.append(clean)
            if self.current_p is not None:
                self.current_p.append(clean)
            self.article_html.append(clean)


def require(ok: bool, message: str) -> None:
    if not ok:
        raise AssertionError(message)


raw = BUILD_FILE.read_text(encoding="utf-8")
parser = ArticleParser()
parser.feed(raw)
visible = html.unescape(" ".join(parser.text))
article_html = html.unescape(" ".join(parser.article_html))
words = re.findall(r"\b[\w$'-]+\b", visible)

require(TITLE in visible, "exact title/H1 missing")
require(MARKER in raw, "unique article marker missing")
require(1500 <= len(words) <= 2000, f"visible article words {len(words)} outside 1500-2000")
require(sum(1 for _, attrs in parser.tags if attrs.get("data-article-banner")) == 3, "article banner count is not exactly three")
require(sum(1 for tag, _ in parser.tags if tag == "table") == 1, "expected one table")
require(sum(1 for tag, _ in parser.tags if tag == "svg") == 2, "expected two SVGs")
require(sum(1 for tag, _ in parser.tags if tag == "blockquote") == 1, "expected one expert quote")
require('data-article-chart="close-control-weaknesses"' in raw, "labeled chart marker missing")
require('data-article-graphic="month-end-close-handoff"' in raw, "explanatory graphic marker missing")
require("Method: ACFE Occupational Fraud 2024" in visible, "chart method note missing")
require("Method note: this is a sample close handoff" in visible, "graphic method note missing")
for statistic in ("1,921", "138 countries", "$3.1 billion", "32 percent", "19 percent", "18 percent", "82 percent", "27 percent"):
    require(statistic in visible, f"dated statistic missing: {statistic}")
require("John Warren, J.D., CFE" in visible, "expert attribution missing")
require("We offer this report to business leaders" in visible, "exact quote missing")

article_links = [attrs.get("href", "") for tag, attrs in parser.tags if tag == "a"]
require(len([href for href in article_links if href.startswith("/")]) >= 3, "fewer than three internal links")
require(len([href for href in article_links if href.startswith("https://")]) >= 4, "fewer than four external links")
require(sum(1 for tag, _ in parser.tags if tag == "ol") == 1, "numbered Sources list missing")
require(len([href for href in article_links if href.startswith("https://")]) == 6, "expected five Sources plus the quote link")

for paragraph in parser.paragraphs:
    if paragraph.startswith("Use this board"):
        continue
    sentence_ends = re.findall(r"[.!?](?=\s|$)", paragraph)
    require(2 <= len(sentence_ends) <= 3, f"paragraph sentence count {len(sentence_ends)}: {paragraph}")

for pattern in (r"\bpricing\b", r"\brates?\b", r"\btiers?\b", r"/pricing"):
    require(not re.search(pattern, article_html, re.I), f"forbidden article content matched {pattern}")

for schema_type in ("BlogPosting", "FAQPage", "BreadcrumbList"):
    require(f'\\"@type\\":\\"{schema_type}\\"' in raw or f'"@type":"{schema_type}"' in raw, f"{schema_type} schema missing")

wide_regions = [attrs for tag, attrs in parser.tags if tag == "div" and attrs.get("class") in {"table-scroll", "svg-scroll"}]
require(len(wide_regions) == 3, "expected three wide-content regions")
require(all(attrs.get("tabindex") == "0" and attrs.get("role") == "region" and attrs.get("aria-label") for attrs in wide_regions), "wide region accessibility contract failed")

sitemap = Path(".next/server/app/sitemap.xml.body").read_text(encoding="utf-8")
require(f"/blog/{SLUG}" in sitemap, "sitemap route missing")

print(f"PASS slug={SLUG} visible_words={len(words)} banners=3 table=1 svgs=2 quote=1 sources=5")
