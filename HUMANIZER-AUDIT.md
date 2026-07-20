# Humanizer audit

Date: 2026-07-20
Scope: user-facing marketing and editorial copy on OffshoreBookkeepers.com

## Files reviewed

- `app/page.tsx`
- `app/data.ts`
- `app/components.tsx`
- `app/layout.tsx`
- `app/services/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`

## What changed

- Replaced unsupported claims such as high retention, trusted handoffs, and happy staff with concrete bookkeeping controls.
- Removed broad staffing copy that could have belonged to any outsourcing site.
- Rewrote the homepage around close dates, reconciliations, AP, AR, approval limits, evidence, and controller review.
- Replaced the generic service-page template with task, control, and first-week details for monthly close, AR, AP, and reporting work.
- Rewrote repetitive guide titles and the thin-article fallback so they speak to bookkeeping buyers.
- Replaced salesy and robotic CTAs with direct role-planning language.
- Removed the em dash in the hero and the placeholder text on the thank-you page.
- Rewrote footer, contact, blog-index, and metadata copy in plain language.
- Fixed the header links so the service and task links point to the existing homepage section.

## Final anti-AI pass

The remaining copy was checked for significance puffery, generic corporate language, vague authority claims, forced contrasts, em-dash overuse, chatbot artifacts, empty conclusions, and common AI vocabulary. The published copy now uses short, specific statements and keeps financial decisions with the owner, controller, or CPA.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were not edited. Their legal meaning remains unchanged. Route slugs, source citations, schema types, and existing factual guidance were preserved.
