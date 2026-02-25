# Decodo Web Scraper - 通用网页抓取API集成

## 🕷️ Overview

集成 Decodo Web Scraping API - 一个强大的网页抓取工具，可以抓取 Shopee、Lazada、TikTok Shop 等任何电商平台的价格、销量、评价数据。

## 🔗 Official Resources

- **GitHub**: https://github.com/Decodo/decodo-openclaw-skill
- **Documentation**: https://decodo.com/api/docs
- **Status**: Production Ready ✅
- **Language**: Python

## 🎯 Use Cases

### 1. 电商竞品分析
- Shopee 商品价格监控
- Lazada 销量统计
- TikTok Shop 爆款追踪
- 实时价格变动提醒

### 2. 市场调研
- 品类热门商品分析
- 评价文本挖掘
- 排名监控（Top 100）
- 新品追踪

### 3. 价格策略优化
- 竞品价格对比
- 动态定价建议
- 促销活动监控
- 库存预警

## 🛠️ Installation & Setup

### Requirements
```bash
pip install decodo-api
pip install requests beautifulsoup4 pandas
```

### API Key Setup
```python
from decodo import DecodoAPI

# Initialize
client = DecodoAPI(api_key="your_api_key")
```

## 📋 CLI Integration Commands

### Shopee 爬取
```bash
# 抓取单个商品
openclaw skills run decodo-scraper shopee-product \
  --url "https://shopee.co.th/product/123456789"

# 批量抓取商品列表
openclaw skills run decodo-scraper shopee-batch \
  --urls shopee_urls.txt \
  --output ./data/shopee_products.json

# 搜索商品并爬取
openclaw skills run decodo-scraper shopee-search \
  --keyword "pet gloves" \
  --category "home-living" \
  --limit 50
```

### Lazada 爬取
```bash
# 抓取 Lazada 商品
openclaw skills run decodo-scraper lazada-product \
  --url "https://www.lazada.co.th/products/xxx"

# 批量抓取 Lazada Top 100
openclaw skills run decodo-scraper lazada-top \
  --category "home-living" \
  --limit 100
```

### TikTok Shop 爬取
```bash
# 抓取 TikTok Shop 商品
openclaw skills run decodo-scraper tiktok-product \
  --url "https://shop.tiktok.com/item/xxx"

# 监控店铺销量
openclaw skills run decodo-scraper tiktok-shop \
  --shop_id "nestify-th" \
  --interval 3600 \
  --duration 24
```

### 通用网页抓取
```bash
# 抓取任意网页
openclaw skills run decodo-scraper scrape-url \
  --url "https://any-website.com/product" \
  --selectors '{
    "price": ".price",
    "title": ".title",
    "stock": ".stock-count"
  }' \
  --output product.json

# 批量抓取
openclaw skills run decodo-scraper batch-scrape \
  --urls urls.txt \
  --config config.json \
  --output ./results/
```

## 📊 Data Output Format

### Product Data JSON
```json
{
  "product_id": "123456789",
  "platform": "shopee_th",
  "title": "Pet Static Hair Removal Gloves",
  "price": 79.00,
  "currency": "THB",
  "original_price": 129.00,
  "discount_percentage": 38.8,
  "sold_count": 12345,
  "rating": 4.8,
  "review_count": 342,
  "category": "Home & Living",
  "url": "https://shopee.co.th/product/123456789",
  "images": [
    "https://example.com/image1.jpg"
  ],
  "variants": [
    {
      "name": "Color",
      "options": ["Blue", "Pink", "Green"]
    }
  ],
  "seller": {
    "name": "Nestify Shop",
    "verified": true,
    "response_rate": 98.5,
    "location": "Bangkok"
  },
  "scraped_at": "2026-02-25T14:00:00Z"
}
```

### Review Data
```json
{
  "product_id": "123456789",
  "reviews": [
    {
      "rating": 5,
      "text": "很好用！",
      "author": "User123",
      "date": "2026-02-20",
      "verified": true,
      "media": ["image1.jpg"]
    }
  ],
  "sentiment_analysis": {
    "positive": 85,
    "negative": 10,
    "neutral": 5
  }
}
```

## 🔍 Advanced Features

### Price History Tracking
```python
from decodo import DecodoAPI

client = DecodoAPI(api_key="your_api_key")

# Track price changes
price_history = client.track_price(
    url="https://shopee.co.th/product/123456789",
    duration=30,  # days
    interval=6    # hours
)

# Get price alerts
alerts = client.get_price_alerts(
    threshold=0.90,  # alert if price drops 10%
    notifications=["email", "telegram"]
)
```

### Competitor Analysis
```bash
# 对比多个竞品
openclaw skills run decodo-scraper compare \
  --urls competitor_urls.txt \
  --metrics price,sold_count,rating,discount \
  --output ./analysis/competitor_comparison.csv

# 生成竞品分析报告
openclaw skills run decodo-scraper analyze-competitors \
  --category "pet supplies" \
  --platforms shopee,lazada,tiktok \
  --depth 50 \
  --output ./reports/competitor_report.md
```

### Review Sentiment Analysis
```python
# 分析评价情感
reviews = client.get_reviews(product_id="123456789")

# 情感分析
sentiment = client.analyze_sentiment(reviews)

# 关键词提取
keywords = client.extract_keywords(reviews)

# 生成评价报告
report = client.generate_review_report(sentiment, keywords)
```

## 💡 Pro Tips

### 1. Anti-Scraping Strategies
- 使用代理轮换
- 设置合理的请求间隔（2-5秒）
- 模拟真实用户行为
- 处理验证码

### 2. Data Quality
- 验证数据完整性
- 处理异常值
- 数据清洗和标准化
- 定期更新抓取规则

### 3. Performance Optimization
- 并发抓取（最多 10 个并发）
- 缓存热门商品数据
- 增量更新策略
- 使用 Redis 缓存

## 🚀 Integration with Other Skills

### With `th-tk-sku-gate`
```python
# 使用 Decodo 数据进行 SKU 选品
from decodo import DecodoAPI
import th-tk-sku-gate

# 抓取 Shopee 爆款
products = client.get_trending_products(
    category="home-living",
    limit=100
)

# 选品过滤
selected = th-tk-sku-gate.filter_products(
    products=products,
    min_sales=50,
    min_growth=10,
    price_range=(80, 250)
)
```

### With `th-shopee-listing-pack`
```python
# 使用竞品数据生成 Shopee Listing
competitor_data = client.get_competitor_data(
    product_url="https://shopee.co.th/product/xxx"
)

listing = th-shopee-listing-pack.generate(
    competitor_data=competitor_data,
    optimize_price=True,
    title_optimization=True
)
```

## ⚠️ Limitations

- **Rate Limits**: 1000 requests/day (Free tier)
- **Concurrent Requests**: Max 10 concurrent
- **Data Retention**: 7 days (Free), 30 days (Pro)
- **Proxy Rotations**: Limited (Free), Unlimited (Pro)

## 💰 Pricing

| Plan | Requests/month | Concurrent | Price |
|------|---------------|-----------|-------|
| Free | 1,000 | 10 | $0 |
| Pro | 50,000 | 50 | $29/month |
| Enterprise | Unlimited | Unlimited | Custom |

## 🔒 Privacy & Compliance

- ✅ GDPR Compliant
- ✅ No personal data storage
- ✅ Cookie-free scraping
- ✅ Respect robots.txt

## 📚 Examples

### Example 1: 价格监控
```bash
# 设置价格监控
openclaw skills run decodo-scraper price-monitor \
  --pet-products.csv \
  --alert-threshold -10 \
  --notification telegram

# 输出：价格下跌通知
```

### Example 2: 爆款发现
```bash
# 发现 Shopee 爆款
openclaw skills run decodo-scraper discover-trending \
  --category home-living \
  --platform shopee_th \
  --growth-threshold 50 \
  --output ./products/trending_items.json
```

### Example 3: 竞品分析报告
```bash
# 生成竞品分析报告
openclaw skills run decodo-scraper competitor-report \
  --target_product "pet-gloves" \
  --competitors ./data/competitors.json \
  --output ./reports/competitor_analysis.md
```

## 🔗 Quick Links

- API Docs: https://decodo.com/api/docs
- GitHub: https://github.com/Decodo/decodo-openclaw-skill
- Examples: https://github.com/Decodo/decodo-openclaw-skill/tree/main/examples

---

**Last Updated**: 2026-02-25
**Version**: 1.0
**Status**: Production Ready ✅
