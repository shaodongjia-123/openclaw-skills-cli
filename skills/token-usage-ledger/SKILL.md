---
name: token-usage-ledger
description: |
  Track, summarize, and cost out LLM token usage (total + per-task delta) during an OpenClaw session. Use when the user asks for token consumption, remaining budget, RMB/USD conversion, or wants a repeatable “usage ledger” / “one data collection cost” workflow.
---

# Token Usage Ledger (OpenClaw)

## Workflow (precise)

1) **Define the scope** (what counts as “one run”): e.g. “FastMoss采集=新品榜前3页+输出Top20保守清单”.

2) **Take a pre-run snapshot** (tokens baseline):
- Call `session_status` and record:
  - Tokens in/out
  - Context usage
  - Any remaining % if shown

3) Execute the work (browser automation, exports, analysis, etc.).

4) **Take a post-run snapshot** with `session_status`.

5) Compute deltas:
- in_delta = in_after - in_before
- out_delta = out_after - out_before
- total_delta = in_delta + out_delta
- out_ratio = out_delta / total_delta

6) Cost conversion (requires pricing assumptions):
- If the user provides **total budget** (e.g. $5) and **total token cap** (e.g. 272,000), treat it as:
  - cost_per_token = budget_usd / token_cap
  - used_usd = total_used_tokens * cost_per_token
  - remaining_tokens = token_cap - total_used_tokens
- RMB:
  - used_rmb = used_usd * fx

## Output format (copy/paste)

- 输入：<in_delta 或 in_total>
- 输出：<out_delta 或 out_total>
- 合计：<total>
- 输出占比：<out_ratio>
- 已用：<used_tokens>/<cap_tokens> ≈ <percent>
- 剩余：<remaining_tokens>（≈ <remaining_percent>）
- 折合人民币：$<used_usd> ≈ ¥<used_rmb>（汇率 <fx>）

## Calculator script

If you want deterministic math, run:

- `node scripts/calc.js --in 52600 --out 1227 --cap 272000 --budget 5 --fx 7.2`

Script path: `scripts/calc.js`.
