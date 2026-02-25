# TikTok Shop Thailand Product Selection Automation Skill

## 🎯 Overview

This skill automates the complete TikTok Shop Thailand product selection workflow for Nestify shop. It handles the entire process from FastMoss data extraction to supplier sourcing to cross-border listing deployment.

**Time Savings**: ~80% efficiency improvement (from 2-3 hours/day to 15-20 minutes/day)

---

## 📋 Workflow

```
FastMoss Export → Product Filtering → 1688/Pinduoduo Sourcing → Profit Calculation → Report Generation → Missyou Deployment
```

---

## 🚀 Quick Start

### Usage Option 1: Manual Data Flow (Recommended)

**Step 1: Export from FastMoss**
1. Login: https://www.fastmoss.com/zh/e-commerce/saleslist
2. Set filters:
   - 地区: 泰国 (TH)
   - 类目: 家居日用
   - 店铺: 跨境店
   - 榜单: 新品榜
   - 销量: >10
3. Click "导出" button
4. Download Excel/CSV file

**Step 2: Send to AI Assistant**
```
Copy and paste the Excel data (or upload the file) to this skill

OR

Manually copy top 20 products and paste here
```

**Step 3: Receive Recommendations**
The AI will automatically:
- ✅ Parse product data
- ✅ Filter by criteria (sales >10, growth >10%, price 50-300 THB)
- ✅ Search 1688/Pinduoduo for matching products
- ✅ Calculate profit margins (considering Tengfei shipping costs)
- ✅ Recommend top suppliers
- ✅ Generate Missyou operation guide

**Step 4: Execute in Missyou**
1. Visit 1688 supplier links from recommendations
2. Click "跨境铺货" (Cross-border listing) button
3. Edit price, title, images, SKUs in Missyou
4. Launch product listing

---

## 📊 Selection Criteria

### Filter Standards

| Criterion | Requirement | Priority |
|-----------|-------------|----------|
| Daily Sales | >10 orders | ⭐⭐⭐⭐⭐ |
| Price Range | 50-300 THB | ⭐⭐⭐⭐ |
| Growth Rate | >10% (week-over-week) | ⭐⭐⭐⭐ |
| Listing Age | <30 days | ⭐⭐⭐ |
| Rating | >4.0 stars | ⭐⭐⭐ |

### Profit Calculation

```
Selling Price: [THB]

Costs:
- Product Cost: 1688 Price (RMB) × 5 (exchange rate)
- Shipping Cost: 10 THB (Tengfei Express: 2 RMB/order)
- Platform Commission: 5% of selling price
- After-sales Cost: 10% of selling price

Total Cost = Product Cost + Shipping + Commission + After-sales
Profit = Selling Price - Total Cost
Profit Margin = (Profit / Selling Price) × 100%

Recommendation:
✅ >30%: PRIORITIZED for listing
⚠️ 20-30%: Can list (test product)
❌ <20%: Do not recommend
```

---

## 🔧 AI Agent Tasks

When you send FastMoss data, the AI will:

### Phase 1: Data Parsing
- Extract product names (Chinese + Thai)
- Extract prices (THB)
- Extract daily sales volume
- Extract growth rates
- Extract image URLs

### Phase 2: Product Filtering
- Apply selection criteria
- Remove low-potential products
- Rank by growth rate + sales volume

### Phase 3: Supplier Sourcing
For each product:
1. Generate 1688 search keywords
2. Search for matching products
3. Collect supplier information:
   - Price (RMB)
   - Monthly sales volume
   - Supplier rating
   - Product URL
4. Rank suppliers by:
   - Lowest price
   - Highest rating (>95%)
   - Highest monthly sales (>500)
   - Fastest shipping time

### Phase 4: Profit Analysis
- Convert 1688 price to THB (×5)
- Calculate total costs
- Compute profit margin
- Provide recommendation

### Phase 5: Report Generation
Generate structured report including:
- Product details
- 1688 supplier recommendations
- Profit analysis
- Missyou operation guide
- Inventory recommendations (50-200 units each)

---

## 📝 Output Format

### Example Product Report

```markdown
### Product #1: 宠物毛发去除手套

**FastMoss Data**:
- Name: 宠物毛发去除手套
- Thai Name: ถุงมือกำจัดขนสัตว์เสมือนเดิม
- Price: ฿79
- Daily Sales: 69 orders/day
- Growth Rate: +13.5%
- Ranking: #1
- Link: [FastMoss URL]

**1688 Sourcing**:
- Search Keyword: "宠物毛发去除手套"
- Best Supplier: 义乌宠物用品批发
   * Price: ¥15.80 (≈฿79.00)
   * Monthly Sales: 1,200 units
   * Rating: 98.5%
   * Product Link: [1688 URL]

- Alternative Suppliers:
   * 广州宠物工厂直供: ¥12.50, 97.0%, [URL]

**Profit Analysis**:
- Selling Price: ฿79
- Product Cost: ฿79.00 (¥15.80 × 5)
- Shipping Cost: ฿10
- Platform Commission: ฿4.00 (5%)
- After-sales Cost: ฿8.00 (10%)
- Total Cost: ฿101.00
- Profit: -฿22.00
- Profit Margin: -27.8%

**Recommendation**: ❌ Do NOT list (negative profit)

**Note**: Need to find lower-cost supplier (target price <¥10 for positive margin)

**Missyou Setup**:
1. Visit 1688 link: [URL]
2. Wait for better supplier pricing
3. Click "跨境铺货" when suitable supplier found
4. Set price to competitive level
5. Optimize Thai title with keywords
6. Organize high-quality images
7. Configure SKU options (3-5 colors)
8. Set initial inventory: 100-200 units
```

---

## 🎯 Missyou (妙手) Operations

### Quick Setup Guide

For each recommended product:

```
1. Open 1688 supplier link
2. Click "跨境铺货" (Cross-border listing) button
   - This imports product to your TikTok Shop

3. In Missyou, edit:
   ▸ Price: Set to competitive level (ensure >30% margin)
   ▸ Title: Optimize for Thailand SEO
     Template: [Product Name Thai] | [Feature 1] | [Feature 2] | [Price] | Nestify
   ▸ Images:
     * Main image (white background)
     * Product detail images (2-4)
     * Usage scenario images (2-3)
     * SKU display images (if applicable)
   ▸ SKUs: 3-5 variations (colors, sizes)
   ▸ Inventory: 50-200 units for new products
   ▸ Description: Highlight key features and benefits
```

### Title Optimization (Thai)

``` Example: ```
ถุงมือกำจัดขนสัตว์เสมือนเดิม | ไม่หมุนเกินไป | 3 สีให้เลือก | ฿79 ส่งฟรี | Nestify

Translation: Pet Static Hair Removal Gloves | Safe and Gentle | 3 Colors Available | THB79 Free Shipping | Nestify
```

---

## 📈 Daily Routine

### Morning (5 minutes):
- Open FastMoss
- Export new product data
- Send to AI agent

### Mid-Day (5 minutes):
- Review AI recommendations
- Check 1688 suppliers for top 3 products
- Verify pricing and quality

### Afternoon (10 minutes):
- Execute Missyou operations
- List 3-5 products
- Monitor launch

**Total Daily Time**: ~20 minutes (vs 2-3 hours manually)

---

## 🚨 Important Notes

### 1688 Selection Criteria:
- **Price**: ¥5-30 (converts to ฿25-150)
- **Monthly Sales**: >500 units
- **Rating**: >95%
- **Matching Products**: >3 suppliers (indicates healthy market)

### Common Issues:

**Issue**: 1688 price too high → profit <30%
**Solution**: Search for alternative suppliers OR adjust selling price

**Issue**: Multiple identical products on 1688
**Solution**: Compare:
- Price (lowest first)
- Rating (highest preferred)
- Sales volume (higher better)
- Response time (faster better)

**Issue**: No matching products on 1688
**Solution**: Try Pinduoduo (usually cheaper)
- Search with same keywords
- Verify product quality
- Check supplier reliability

---

## 📂 File Structure

```
skills/
└── th-tiktok-selection/
    ├── SKILL.md              # Skill documentation
    ├── run.py                # Python automation script
    ├── README.md             # Usage instructions
    └── examples/             # Example outputs
        ├── report_20260220.json
        └── report_20260220.md
```

---

## 🔄 Continuous Improvement

### Daily Workflow:
1. ⏰ **08:00** - FastMoss export
2. 🤖 **08:05** - AI analysis complete
3. 🔍 **09:00** - 1688 supplier verification
4. 📝 **10:00** - Missyou listing setup
5. 🚀 **11:00** - Products live

### Weekly Review:
- Analyze sales performance
- Identify top/bottom products
- Adjust pricing strategy
- Optimize product mix
- Scale up winners (increase inventory)

---

## 💡 Tips for Success

### 1. Price Competitiveness
- Target: 20-30% lower than top sellers
- Monitor: Check competitor prices daily
- Strategy: Start low, raise after reviews

### 2. Product Selection
- Start: 3-5 products/test batch
- Focus: Items with highest growth rate
- Verify: Read 1688 reviews for quality

### 3. Supplier Relationships
- Negotiate: Better pricing for volume
- Communicate: Fast shipping requirements
- Backup: Always have 2-3 alternative suppliers

### 4. Market Testing
- Launch: 1-2 weeks per product batch
- Monitor: Sales, conversion rates, returns
- Decision: Keep/adjust/drop based on data

---

## 📞 Support

For issues or improvements, contact:
- **AI Agent**: OpenClaw Assistant
- **Documentation**: See SKILL.md for technical details

---

**Skill Status**: ✅ Active (Ready for daily use)
**Last Updated**: 2026-02-20
**Efficiency Gain**: 80% time reduction
**Target**: Process 20-30 products/day in ~15-20 minutes
