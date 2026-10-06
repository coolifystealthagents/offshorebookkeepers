# OFF-85 October 5 Blog QA

- Repository: `coolifystealthagents/offshorebookkeepers`
- Production branch: `main`
- Baseline: `6cc0f2f7ee33115b3dbe661f5d472d8f9eb628fc`
- Draft branch: `off-85-blog-2026-10-05`
- Blog content commit: `20c889116f0e2906df5f68eb3cf435fe84b30b68`
- Blog punctuation correction commit: `91e1253be526f35e53865a9bbe8f3d036c8f6db2`
- Site timezone: `UTC`
- Reconciled and live-verified publication date: `2026-10-06` in site timezone `UTC`; all 17 articles were still unpublished when reconciled.
- Required/validated Blog count: `12/12`

## Body lengths

`975, 1058, 1133, 996, 1019, 954, 971, 936, 942, 927, 941, 924` words in manifest order. Every Blog body exceeds 900 substantive words.

## Originality

- Maximum pairwise five-word-shingle overlap: `1.1329%`, film-production petty cash versus waste-hauling disposal tickets.
- Exact repeated substantive paragraphs across the family: `0`.
- Exact repeated substantive sentences across the family: `0`.
- Qualitative repeated-argument and section-sequence review: pass. Each article uses a topic-specific evidence model, workflow order, worked example, exception taxonomy, decision boundary, and reader outcome.
- Prior-corpus collision review: pass. Titles, slugs, and topic phrases were searched across existing Blog and Research files before drafting; none of the twelve topics reused an existing article subject.
- Corrective prior-corpus audit: all 17 October 5 articles compared with 635 prior Blog/Research files; maximum five-word-shingle overlap `1.2048%` with one shared shingle, exact repeated substantive paragraphs `0`, and no qualitative topic collision. The replacement waste-hauling article has a distinct physical-load, scale-ticket, facility-rate, allocation, and customer-surcharge argument sequence and worked example absent from the prior corpus. The 40% maximum title-token similarity belongs to the Research commission-clawback study versus an older operational Blog guide; manual review found different family, method, structure, evidence model, and reader outcome.

## Completed gates

- Corrective base (GitHub `main`): `a7ffcb5ceea46af5040271e51da05859fe571b32` (40 characters).
- Corrective scope: removed the colliding equipment-rental draft; added the independently structured waste-hauling disposal-ticket article; repaired the two moved FTC references to their exact current official destinations; preserved the other 16 articles.
- Combined ordered source/render validation: `17/17` pass. Each route has a full source hash, source-body hash, rendered-HTML hash, rendered-text hash, canonical, title, structured date, index entry, sitemap entry, and complete rendered body.
- Rendered images: `17/17` returned HTTP 200 with an image MIME type and passed signature/decode and dimension checks.
- Contextual internal links: all checked destinations returned HTTP 200. Authoritative external citations were reviewed, including the current FTC gift-card and health-claims destinations.
- `npm ci`: pass (`26` packages); `npm audit --audit-level=high`: pass (`0` vulnerabilities) after locking patched `source-map-js` `1.2.2`.
- `npm run validate:content`: pass.
- `node scripts/validate-off85-cycle.mjs`: pass (`12/12` Blog).
- `npm run lint` (`next typegen && tsc --noEmit`): pass; generated Next.js changes were removed and not staged.
- `npm run test:source`: cycle-owned checks pass; `35/36` repository tests pass. The sole failure is the pre-existing `/services/bookkeeping` link in `offshore-bookkeeper-bank-reconciliation-aging.md`, outside this cycle.
- `npm run build`: pass; clean production build generated `687` static pages.
- Featured images: all twelve source paths resolve to existing repository assets.
- Internal calls to action: `/services` and `/contact-us`, both repository routes.
- Research handoff: received from OFF-84 at original SHA `bfcba540def4be7c338e48404cbad0972e8da5f1`, content SHA `611fc208a098e975fed5bf0332726f145fd96c8a`; integrated into this branch without a Research push.

The reviewed corrective candidate was pushed and deployed at `81312bb4ff3e902fdd51e607197edef7706b2615`. Any later repair requires a new explicit push exception and separate browser-operator deployment.

## Post-deployment strict hash audit and local-only visible-date repair

The independent live-DOM audit normalized the complete ordered substantive paragraph sequence identically on both sides and produced equal SHA-256 hashes for all 17 routes (`17/17`). It also rasterized every public image to raw RGBA pixels with Sharp `0.35.4`, libvips `8.18.6`, and librsvg `2.62.91`; this is a full pixel decode, including SVGs, rather than an XML dimension read.

That audit exposed a separate visible-copy defect: each of the 12 Blog scope notes still said `Published October 5, 2026` while the truthful first-publication date is October 6 UTC. The local-only repair changes those 12 sentences to `Published October 6, 2026`, refreshes the manifest hashes, and strengthens the combined validator to fetch public article HTML and the public sitemap, enforce identical ordered normalized paragraph-sequence hashes, and record raw-pixel hashes. The repaired local build passes `17/17`; no post-deployment repair push or deployment has occurred.
