# OFF-82 October 2 Blog QA

- Baseline: `449c1417515efa78bd989d5aaf28393b467a38b8`
- Inventory: 12 new Blog source files
- Body-only word counts: 1522, 1528, 1526, 1526, 1527, 1528, 1534, 1533, 1537, 1528, 1542, 1539
- Content validation: passed
- Featured image existence: passed
- Maximum pairwise five-word-shingle Jaccard: **83.74% (FAIL)**
- Highest-overlap pair: `offshore-bookkeeping-manufacturing-customer-tooling-deposits` / `offshore-bookkeeping-childcare-enrollment-deposit-rollforward`

These drafts are preserved for substantive restructuring, but are not eligible for integration or production. Their shared workflow body must be replaced with independently structured, topic-specific analysis, examples, controls, and limitations until the maximum overlap is below 50%. No cosmetic padding is acceptable.

The paired OFF-81 October 2 Research handoff is also still pending. No push or deployment has occurred.

## Provider recovery check

On the continuation heartbeat, the existing `GEMINI_API_KEY` and `GEMINI_SANDBOX` company variables were each tested once with a minimal request. Both returned HTTP 400 `INVALID_ARGUMENT`. Retries stopped after those bounded checks. No credential was changed and no provider recovery is claimed. Manual substantive rewriting remains the Blog recovery path.
