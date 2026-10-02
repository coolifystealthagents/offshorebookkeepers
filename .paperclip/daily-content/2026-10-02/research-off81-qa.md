# OFF-81 October 2 Research handoff

Status: **PASSING LOCAL HANDOFF**

- Baseline: `449c1417515efa78bd989d5aaf28393b467a38b8`.
- Required count: 5; genuinely new Research draft count: 5.
- Body-only word counts, excluding frontmatter and sources appendix: 1,280; 1,237; 1,256; 1,241; 1,232.
- Maximum pairwise five-word-shingle Jaccard overlap: **0.43%**.
- Content validation: passed.
- Type generation and TypeScript check: passed.
- Clean production build: passed; all five routes were statically generated.
- Source URL check: 13 official URLs returned HTTP 200. PCAOB AS 1105 and AS 1215 returned HTTP 403 to automated requests; their established official URLs are retained and the content validator accepted them.
- All five featured-image files exist and passed repository validation.
- Content commit: `73a5a2dbe3a3d17a3e3ebd37bafbfd2f2af6eb7a`.
- Publication status: local drafts only. Research did not push, deploy, or call these articles live.

The `2026-10-02` value is the cycle label and provisional publication metadata for the integrator to reconcile to the site's configured local date immediately before the sole combined release. If first public publication occurs on another local date, the integrator must update article frontmatter and this manifest before push.

## OFF-82 completeness repair candidate

- Added a topic-owned opening section to each of the five sources so every substantive paragraph is represented in the renderer's section model.
- Removed internal cycle/batch bookkeeping phrasing from the public opening paragraphs without changing the articles' analysis or decision boundaries.
- Local rendered substantive counts after repair: 1,357; 1,292; 1,320; 1,303; 1,302.
- Maximum pairwise five-word-shingle Jaccard after repair: **2.20%**.
- Expected-source-segment versus rendered-HTML comparison: **5/5 complete**.
