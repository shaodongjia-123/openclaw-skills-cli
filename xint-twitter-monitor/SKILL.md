# Xint Twitter Monitor - Twitter/X 社交媒体监控

## 🐦 Overview

集成 X Intelligence CLI - 一个强大的 Twitter/X 社交媒体监控和分析工具，使用 TypeScript + Bun 构建，支持搜索、监控、分析和互动。

## 🔗 Official Resources

- **GitHub**: https://github.com/0xNyk/xint
- **Language**: TypeScript + Bun
- **Type**: CLI Tool
- **Status**: Active (Updated Feb 24, 2026)

## 🎯 Use Cases

### 1. 东南亚热门趋势监控
- 泰国热门话题追踪
- 印尼电商趋势发现
- 越南社交媒体洞察
- 马来西亚营销趋势

### 2. TikTok Shop 相关监控
- TikTok Shop 品牌提及
- 产品口碑监控
- 竞品动向追踪
- KOL/网红发现

### 3. 品牌保护与危机管理
- 负面评论及时发现
- 品牌声誉监控
- 危机预警
- 竞品攻击追踪

## 🛠️ Installation & Setup

### Requirements
```bash
# Install Bun
curl -fsSL https://bun.sh/install | bash

# Install Xint
bun install xint-ai/xint
```

### API Key Setup
```bash
# Configure Twitter API
xint init
```

## 📋 CLI Integration Commands

### 搜索与监控
```bash
# 搜索推文
openclaw skills run xint-twitter-monitor search \
  --query "TikTok Shop Thailand" \
  --count 100 \
  --language th \
  --days 7

# 监控关键词
openclaw skills run xint-twitter-monitor monitor \
  --keywords "TikTok Shop,Shopee,Lazada" \
  --interval 3600 \
  --notifications telegram

# 追踪热门话题
openclaw skills run xint-twitter-monitor trending \
  --location "Thailand" \
  --language "thai" \
  --limit 20
```

### 竞品分析
```bash
# 监控竞品账号
openclaw skills run xint-twitter-monitor track-brand \
  --handles "@competitor1,@competitor2" \
  --metrics engagement,mentions,sentiment \
  --duration 30

# 分析竞品推文表现
openclaw skills run xint-twitter-monitor analyze-tweets \
  --user "@competitor1" \
  --limit 100 \
  --metrics retweets,likes,replies

# 对比品牌表现
openclaw skills run xint-twitter-monitor compare-brands \
  --handles "@brand1,@brand2,@brand3" \
  --metrics "engagement_rate,reach,sentiment" \
  --output ./analysis/brand_comparison.csv
```

### KOL/网红发现
```bash
# 发现相关领域的 KOL
openclaw skills run xint-twitter-monitor find-influencers \
  --topic "home living" \
  --location "Thailand" \
  --min-followers 10000 \
  --min-engagement 3.0

# 分析网红内容
openclaw skills run xint-twitter-monitor analyze-influencer \
  --user "@influencer" \
  --metrics "engagement,audience,topics" \
  --output ./reports/influencer_analysis.md
```

### 情感分析
```bash
# 分析推文情感
openclaw skills run xint-twitter-monitor sentiment \
  --topic "TikTok Shop" \
  --location "Thailand" \
  --days 30 \
  --output ./data/sentiment_analysis.json

# 追踪情感变化
openclaw skills run xint-twitter-monitor sentiment-trend \
  --queries "@YourBrand,YourProduct" \
  --interval "daily" \
  --duration 90
```

### 自动互动
```bash
# 自动回复提及
openclaw skills run xint-twitter-monitor auto-reply \
  --mentions "@YourBrand" \
  --template "./templates/auto_reply.txt"

# 自动转发相关内容
openclaw skills run xint-twitter-monitor auto-retweet \
  --hashtags "#TikTokShop,#Shopee" \
  --min-likes 100 \
  --max-daily 10
```

## 📊 Data Output Format

### Search Results JSON
```json
{
  "query": "TikTok Shop Thailand",
  "results": [
    {
      "id": "1234567890",
      "text": "终于入手了TikTok Shop的新品！",
      "author": {
        "username": "@user123",
        "name": "User Name",
        "followers": 12345,
        "verified": false
      },
      "metrics": {
        "likes": 234,
        "retweets": 45,
        "replies": 23
      },
      "timestamp": "2026-02-25T10:00:00Z",
      "language": "thai",
      "hashtags": ["#TikTokShop", "#Thailand"],
      "sentiment": "positive"
    }
  ]
}
```

### Analysis Report Markdown
```markdown
# Twitter Analysis Report: TikTok Shop Thailand

**Date**: 2026-02-25
**Query**: TikTok Shop Thailand

## Summary

- Total Tweets: 1,234
- Engagement Rate: 4.5%
- Sentiment: 75% Positive, 20% Neutral, 5% Negative

## Top Trends

1. #TikTokShop - 456 tweets
2. #ShopeeThailand - 234 tweets
3. #OnlineShopping - 189 tweets

## Top Influencers

1. @influencer1 - 123K followers, 5.2% engagement
2. @influencer2 - 89K followers, 4.8% engagement
```

## 🔍 Advanced Features

### 实时监控
```bash
# 启动实时监控服务
openclaw skills run xint-twitter-monitor real-time \
  --queries "@YourBrand,#YourProduct" \
  --websocket \
  --port 8080

# WebSocket API 连接
ws://localhost:8080/stream
```

### 地理定位
```bash
# 按地区搜索
openclaw skills run xint-twitter-monitor geo-search \
  --query "shopping" \
  --location "Bangkok,Thailand" \
  --radius 50km \
  --count 100

# 地区热度地图
openclaw skills run xint-twitter-monitor geo-heatmap \
  --topic "ecommerce" \
  --country "Thailand" \
  --output ./maps/heatmap.html
```

### 时间序列分析
```bash
# 日时间趋势
openclaw skills run xint-twitter-monitor hourly-trend \
  --topic "TikTok Shop" \
  --days 7 \
  --timezone "Asia/Bangkok"

# 周模式分析
openclaw skills run xint-twitter-monitor weekly-pattern \
  --query "@YourBrand" \
  --duration 90 \
  --output ./charts/weekly_pattern.png
```

## 💡 Pro Tips

### 1. 东南亚监控策略
- **泰国**: 监控 `#TikTokShopTh`, `#ShopeeTh`, `#LazadaCoTh`
- **印尼**: 监控 `#TikTokShopID`, `#ShopeeID`, `#Tokopedia`
- **越南**: 监控 `#TikTokShopVN`, `#ShopeeVN`, `#LazadaVN`

### 2. 最佳发布时间
- **泰国**: 19:00 - 23:00 (当地晚间)
- **印尼**: 18:00 - 22:00 (当地傍晚)
- **越南**: 20:00 - 23:00 (当地晚间)

### 3. 哈希标签策略
- 使用本土化标签（当地语言）
- 结合热门标签 + 品牌标签
- 每条推文 2-4 个标签最佳

### 4. 互动策略
- 快速回复评论（< 2小时）
- 转发用户生成内容（UGC）
- 适度点赞相关内容
- 避免过度自我推销

## 🚀 Integration with Other Skills

### With `social-trend-monitor`
```bash
# 整合 Twitter 数据到趋势监控
openclaw skills run xint-twitter-monitor trending \
  --location Thailand \
  --output trends.json

openclaw skills run social-trend-monitor analyze \
  --source twitter \
  --data trends.json \
  --output ./reports/trend_analysis.md
```

### With `competitor-scraper`
```bash
# 分析竞品的社交媒体表现
competitor_twitter = xint-twitter-monitor.track-brand(
  handles=["@competitor1", "@competitor2"]
)

competitor_data = competitor-scraper.get_products(
  urls=["https://shopee.co.th/product/xxx"]
)

# 关联分析
analysis_report = generate_cross_report(
  twitter_data=competitor_twitter,
  product_data=competitor_data
)
```

### With `content-research`
```bash
# 使用 Twitter 趋势生成内容
trends = xint-twitter-monitor.trending(
  location="Thailand",
  language="thai"
)

content = content-research.generate(
  trends=trends,
  platform="TikTok",
  tone="engaging"
)
```

## ⚠️ Limitations

- **API Rate Limits**: Twitter API v2 limits apply
- **Search History**: Limited to last 7 days (Standard), last 30 days (Pro)
- **Geographic Search**: Limited precision
- **Real-time Monitoring**: Requires WebSocket support

## 💰 Pricing

| Plan | Requests/month | Real-time | Price |
|------|---------------|-----------|-------|
| Free | 10,000 | No | $0 |
| Pro | 500,000 | Yes | $49/month |
| Enterprise | Unlimited | Yes | Custom |

## 🔒 Privacy & Compliance

- ✅ Twitter API Terms of Service
- ✅ User Consent Required
- ✅ GDPR Compliant
- ✅ Data Anonymization Option

## 📚 Examples

### Example 1: TikTok Shop 趋势发现
```bash
# 发现 TikTok Shop 热门趋势
openclaw skills run xint-twitter-monitor discover-trends \
  --hashtags "#TikTokShop,#Thailand" \
  --location "Thailand" \
  --days 7 \
  --growth-threshold 50 \
  --output ./trends/tiktok_shops_trends.json
```

### Example 2: 品牌健康度监控
```bash
# 监控品牌健康度
openclaw skills run xint-twitter-monitor brand-health \
  --brand "@YourBrand" \
  --metrics sentiment,engagement,reach,mentions \
  --alerts "negative,crisis" \
  --notification telegram
```

### Example 3: KOL 合作发现
```bash
# 发现潜在 KOL 合作对象
openclaw skills run xint-twitter-monitor find-kol \
  --topic "home living" \
  --location "Thailand" \
  --min-followers 10000 \
  --engagement-rate 3.0 \
  --audience-match "60%" \
  --output ./influencers/potential_kols.csv
```

## 🔗 Quick Links

- GitHub: https://github.com/0xNyk/xint
- Twitter API: https://developer.twitter.com/en/docs
- Documentation: https://github.com/0xNyk/xint/blob/main/README.md

---

**Last Updated**: 2026-02-25
**Version**: 1.0
**Status**: Production Ready ✅
