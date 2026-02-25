# TikTok Shop Thailand Product Selection Skill

**Skill Name**: th-tiktok-selection
**Description**: TikTok Shop Thailand automated product selection workflow - FastMoss → 1688/Pinduoduo sourcing → Cross-border listing deployment
**Category**: Ecommerce, Automation
**Language**: Chinese

---

## 🎯 Skill Overview

This skill automates the complete TikTok Shop Thailand product selection workflow:
1. Extract product data from FastMoss new product rankings
2. Search for same products on 1688/Pinduoduo based on product images
3. Filter products by price and supplier quality
4. Generate search links and supplier recommendations
5. Provide step-by-step instructions for cross-border listing deployment
6. Prepare data for Missyou (妙手) price/title/image editing

**Target Market**: Thailand (TH)
**Product Category**: Home & Living (家居日用)
**Shop Type**: Cross-border (跨境店)
**Sales Criteria**: >10 daily sales

---

## 📋 Workflow

### Phase 1: FastMoss Data Extraction

**User Actions**:
1. Login to FastMoss: https://www.fastmoss.com/zh/e-commerce/saleslist
2. Set filters:
   - 地区: 泰国 (TH)
   - 类目: 家居日用
   - 店铺: 跨境店
   - 榜单: 新品榜 (New Products)
   - 销量: >10

3. Export data:
   - Click "导出" button (top right)
   - Download Excel file
   - OR manually copy top 20-30 products

**Agent Actions**:
1. Receive CSV/Excel data from user
2. Parse product information:
   - Product name (Chinese + Thai)
   - Price (Thai Baht)
   - Daily sales volume
   - Sales growth rate (week-over-week)
   - Product image URLs
   - Product links

---

### Phase 2: Product Filtering & Selection

**Filter Criteria**:
- ✅ Daily sales >10 orders
- ✅ Price range: 50-300 Thai Baht
- ✅ Sales growth rate >10% (ascending trend)
- ✅ Listing age <30 days (new products)
- ✅ Rating >4.0 stars

**Filtering Process**:
```
Input: 20-30 products from FastMoss
↓
Remove: Products with <10 sales
↓
Remove: Products with negative growth rate
↓
Remove: Products with price >300 THB
↓
Remove: Products with rating <4.0 stars
↓
Output: TOP 10-15 qualified products
```

---

### Phase 3: 1688/Pinduoduo Sourcing

For each selected product:

**Step 3.1: Analyze Product Image**
- Load product image
- Identify key features (color, shape, material, size)
- Extract product keywords from Chinese name

**Step 3.2: Search 1688**
- Generate search keywords based on:
  - Chinese product name
  - Product category
  - Key features identified

- Search on 1688: https://www.1688.com/
- Collect suppliers matching:
  - Price: 5-30 RMB (based on THB price ÷ 5)
  - Monthly sales: >500 units
  - Rating: >95%
  - Matching products: >3 suppliers (indicates market demand)

**Step 3.3: Search Pinduoduo (Optional/Backup)**
- Search with same keywords on Pinduoduo
- Compare prices (typically lower than 1688)
- Check supplier reliability
- Verify product quality

**Step 3.4: Supplier Selection**
For each product, rank suppliers by:
1. Lowest price (main factor)
2. Highest rating (>95%)
3. Highest monthly sales (>500)
4. Fastest shipping time

**Output format for each product**:
```
Product #1:
- FastMoss Name: [Chinese + Thai]
- FastMoss Price: [THB]
- FastMoss Sales: [Daily orders]

1688 Results:
- Search Keyword: "[中文关键词]"
- Recommended Supplier #1:
  * Price: [RMB] (≈ [THB])
  * Monthly Sales: [units]
  * Rating: [X.X%]
  * Supplier: [Name]
  * Product Link: [1688 URL]
- Recommended Supplier #2:
  * ...

Recommendation: ✅ Recommended for listing / ⚠️ Requires comparison / ❌ Not recommended
Reason: [Price suitable + sufficient supply / etc.]

Cross-border listing setup:
- 1688 Product Link: [URL]
- Click "跨境铺货" (Cross-border listing) button
- Or manually add to TikTok Shop
```

---

### Phase 4: Profit Calculation

**For each product, calculate profit margin**:

```
Selling Price (THB): [from FastMoss]

Cost Calculation:
1. Product Cost (RMB × 5): [THB]
   - Convert 1688 price (RMB) to THB (multiplier: 5)
2. Shipping Cost: 10 THB
   - Tengfei Express: 2 RMB/order = 10 THB
3. Platform Commission: [Selling Price × 5%]
4. After-sales Cost: [Selling Price × 10%]

Total Cost: Product Cost + Shipping + Commission + After-sales
Profit: Selling Price - Total Cost
Profit Margin: (Profit / Selling Price) × 100%

Recommendation:
✅ >30%: PRIORITIZED for listing
⚠️ 20-30%: Can list
❌ <20%: Do not recommend
```

**Example**:
```
Product: Pet Static Hair Removal Gloves

Selling Price: 79 THB

Costs:
- Product Cost: 16 RMB × 5 = 80 THB
- Shipping: 10 THB
- Commission: 79 × 5% = 3.95 ≈ 4 THB
- After-sales: 79 × 10% = 7.9 ≈ 8 THB

Total Cost: 80 + 10 + 4 + 8 = 102 THB
Profit: 79 - 102 = -23 THB (Loss)
Profit Margin: -29.1%

Recommendation: ❌ Do NOT list (negative profit)

修正：Need to re-check 1688 price for lower cost
```

---

### Phase 5: Missyou (妙手) Operations Guide

**User Actions in Missyou**:
1. Import product from 1688 recommendation
2. Adjust price:
   - Set to competitive market price (or slightly higher)
   - Ensure profit margin >30%
3. Edit title:
   - Optimize for Thailand SEO (Thai keywords)
   - Include Chinese for clarity
   - Include key benefits/features
4. Organize images:
   - Use 1688 supplier images
   - Add white background images
   - Include infographic highlights
5. Set SKUs:
   - 3-5 variants (colors/sizes)
   - Price each SKU appropriately
6. Set inventory:
   - 50-200 units for new products
   - More for top-performing products

**Title Template** (Thai):
```
[Product Name Thai] | [Key Feature 1] | [Key Feature 2] | [Key Feature 3] | [Brand] | [Shipping/COD info]

Example:
ถุงมือกำจัดขนสัตว์เสมือนเดิม | ขนเสมือนเดิมไม่หมุน | 3 สีให้เลือก | ฿79 ส่งฟรี | Nestify
```

---

### Phase 6: Final Output Format

**Generate structured report**:

```markdown
# TikTok Shop Thailand Product Selection Report
**Date**: [Date]
**Source**: FastMoss New Product Rankings
**Target**: Thailand Cross-border Shop - Nestify

---

## TOP 10 Recommended Products for Listing

### Product #1: [Product Name]
**FastMoss Data**:
- Price: [THB]
- Daily Sales: [orders/day]
- Growth Rate: [+X%]
- Ranking: #[Ranking]
- Link: [FastMoss URL]

**1688 Sourcing**:
- Search Keyword: "[中文关键词]"
- Best Supplier: [Supplier Name]
   * Price: [RMB] (≈ [THB])
   * Monthly Sales: [units]
   * Rating: [X.X%]
   * Product Link: [1688 URL]
- Alternative Suppliers:
   * [Supplier 2]: [RMB], [Rating], [URL]
   * [Supplier 3]: [RMB], [Rating], [URL]

**Profit Analysis**:
- Selling Price: [THB]
- Product Cost: [THB]
- Shipping Cost: 10 THB
- Platform Commission: [THB]
- After-sales Cost: [THB]
- Total Cost: [THB]
- **Profit**: [THB]
- **Profit Margin**: [X.X]%

**Recommendation**: ✅ PRIORITIZED / ⚠️ TEST / ❌ SKIP

**Missyou Setup**:
1. Visit 1688 link: [URL]
2. Click "跨境铺货" (Cross-border listing) button
3. Set price to: [THB]
4. Edit title: "[Thai title]"
5. Organize images: [Image count]
6. Set SKUs: [number and options]
7. Set inventory: [number of units]

---

### Product #2: [Product Name]
...

---

## Summary Statistics

- Total Products Analyzed: [Number]
- Products Recommended for Listing: [Number]
- Average Profit Margin: [X.X%]
- Estimated Total Investment: [THB]

---

## Next Steps

1. **Immediate** (Today):
   - Verify top 3 products with suppliers
   - Negotiate price and shipping with Tengfei Express

2. **Tomorrow**:
   - Import products to Missyou
   - Edit prices, titles, images, SKUs
   - Set up product listings

3. **Day 2-3**:
   - Launch first 3 products
   - Monitor sales and conversion rates

4. **Day 5-7**:
   - Analyze performance data
   - Adjust pricing or inventory based on results
   - Expand to next batch of products

---

## Automation Notes

**Daily Routine**:
1. Open FastMoss and export new product rankings
2. Send data to this skill
3. Review generated recommendations
4. Select top products for Missyou listing
5. Execute listing operations

**Time Savings**:
- Manual workflow: ~2-3 hours/day
- Automated workflow: ~15-20 minutes/day
- **Efficiency**: 80% time reduction

---

**Skill Created**: 2026-02-20
**Last Updated**: 2026-02-20
**Author**: 阿拓 (OpenClaw Agent)
