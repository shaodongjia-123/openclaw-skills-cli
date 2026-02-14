---
name: th-tk-sku-gate
description: Fast product gate for Thailand TikTok Shop home-living items. Use when selecting or rejecting candidate SKUs before opening a store, or when weekly filtering product pools by profitability, logistics, compliance, and content potential.
---

Run this 4-step gate and output only the final table + decision.

## Step 1: Hard Reject
Reject if any is true:
- fragile/high breakage risk
- compliance claim risk (medical/safety overclaim)
- poor content demo potential
- oversized volumetric burden
- after-sales risk likely high (size mismatch/complex install)

## Step 2: Score (100)
- Profit & fulfillment: 40
- Content conversion fit: 35
- Competition entry fit: 25

## Step 3: Grade
- A: >=80 (test first)
- B: 70-79 (backup)
- C: <70 (drop)

## Step 4: Output Format
Return compact markdown:
- Top 5 A/B SKUs
- 1-line why
- 1-line risk
- Next action (sample / script / drop)

Keep response under 220 Chinese characters per SKU.