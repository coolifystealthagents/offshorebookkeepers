# OFF-82 October 2 Blog QA

- Baseline: `449c1417515efa78bd989d5aaf28393b467a38b8`
- Inventory: 12 new Blog source files
- Body-only word counts after substantive restructuring: 1571, 1703, 1851, 1901, 1966, 1998, 2025, 1918, 2081, 1841, 2021, 1929
- Content validation: passed
- Featured image existence: passed
- Maximum pairwise five-word-shingle Jaccard: **48.23% (PASS)**
- Highest-overlap pair: `offshore-bookkeeping-manufacturing-customer-tooling-deposits` / `offshore-bookkeeping-childcare-enrollment-deposit-rollforward`

The shared workflow body was replaced with topic-specific evidence tests, cross-source challenges, transaction logic, exceptions, worked examples, and review boundaries. The set now passes the required overlap gate and is eligible for combined integration validation.

The paired OFF-81 October 2 Research handoff is ready at local SHA `06099da0eb45af2d01e2778f8f18730a9aece234`. No push or deployment has occurred at this checkpoint.

## Provider recovery check

On the continuation heartbeat, the existing `GEMINI_API_KEY` and `GEMINI_SANDBOX` company variables were each tested once with a minimal request. Both returned HTTP 400 `INVALID_ARGUMENT`. Retries stopped after those bounded checks. No credential was changed and no provider recovery is claimed. Manual substantive rewriting remains the Blog recovery path.
