# OFF-85 October 5 Blog QA

- Repository: `coolifystealthagents/offshorebookkeepers`
- Production branch: `main`
- Baseline: `6cc0f2f7ee33115b3dbe661f5d472d8f9eb628fc`
- Draft branch: `off-85-blog-2026-10-05`
- Blog content commit: `20c889116f0e2906df5f68eb3cf435fe84b30b68`
- Blog punctuation correction commit: `91e1253be526f35e53865a9bbe8f3d036c8f6db2`
- Site timezone: `UTC`
- Provisional actual publication date: `2026-10-05`, to be reconciled again immediately before the sole production push
- Required/validated Blog count: `12/12`

## Body lengths

`975, 1058, 1014, 996, 1019, 954, 970, 936, 942, 927, 941, 924` words in manifest order. Every Blog body exceeds 900 substantive words.

## Originality

- Maximum pairwise five-word-shingle overlap: `0.9595%`, freight-broker carrier advances versus commercial-printer paper spoilage.
- Exact repeated substantive paragraphs across the family: `0`.
- Exact repeated substantive sentences across the family: `0`.
- Qualitative repeated-argument and section-sequence review: pass. Each article uses a topic-specific evidence model, workflow order, worked example, exception taxonomy, decision boundary, and reader outcome.
- Prior-corpus collision review: pass. Titles, slugs, and topic phrases were searched across existing Blog and Research files before drafting; none of the twelve topics reused an existing article subject.

## Completed gates

- `npm run validate:content`: pass.
- `npm run lint` (`next typegen && tsc --noEmit`): pass; generated Next.js changes were removed and not staged.
- Featured images: all twelve source paths resolve to existing repository assets.
- Internal calls to action: `/services` and `/contact-us`, both repository routes.
- Research handoff: received from OFF-84 at original SHA `bfcba540def4be7c338e48404cbad0972e8da5f1`, content SHA `611fc208a098e975fed5bf0332726f145fd96c8a`; integrated into this branch without a Research push.

Combined source, rendered-route, asset-response, link, build, sitemap, index, and final-head checks remain gated until the Blog and Research sources are committed together and rebased on the newest remote `main`.
