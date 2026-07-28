# Content contracts

Published files live in `content/blog`, `content/research`, or `content/alternatives`.
Every Markdown or MDX file requires `title`, `description`, `published` (`YYYY-MM-DD`),
`category`, and `featuredImage`. Research requires at least ten source objects.
Alternatives requires `type`, `competitor` (empty for non-competitor pages), exactly
one primary visible source, takeaways, and FAQs. Slugs come from filenames.

Frontmatter arrays and objects use single-line JSON. Article sections start with H2.
Run `npm run validate:content` before committing.
