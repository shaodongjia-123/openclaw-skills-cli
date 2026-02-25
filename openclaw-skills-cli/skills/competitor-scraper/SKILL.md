# 竞争数据抓取技能

自动抓取主流电商平台（Shopee, Lazada等）的竞品数据，用于选品分析。

## 信息

- **Version**: 1.0.0
- **Author**: OpenClaw Team
- **Tags**: ecommerce, scraper, competitor, shopee, lazada
- **Icon** 🌐

## 功能

- 🕸️ 批量抓取竞品数据（价格、销量、评价、评分）
- 📊 自动生成对比分析报告
- 🔍 竞品关键词挖掘（发现潜在机会）
- 📈 销量趋势分析

## 使用方法

```bash
# 抓取Shopee某类产品TOP10
openclaw run competitor-scraper --platform="Shopee" --category="厨房小家电" --top=10

# 抓取Lazada某类产品TOP20
openclaw run competitor-scraper --platform="Lazada" --category="美妆" --top=20

# 单个产品详细分析
openclaw run competitor-scraper --url="https://shopee.sg/shop/product-url"
```

## 参数说明

- `--platform`: 电商平台（Shopee/Lazada）
- `--category`: 产品类别
- `--top`: 抓取Top N个
- `--url`: 单个商品URL
- `--output`: 输出文件路径
- `--format`: 输出格式（CSV/JSON）

## 输出格式

### CSV格式
```csv
排名,商品名称,店铺,价格,销量,评分,评价数,链接
1,多功能厨房小电器电煮锅,官方店,199,5万,4.8,2000,https://....
2,智能电饭煲3L品牌A,店铺A,299,3万,4.5,1500,https://....
```

### JSON格式
```json
{
  "product": "...",
  "data": {
    "price": 199,
    "sales": 50000,
    "rating": 4.8,
    "reviews": 2000,
    "shop": {
      "name": "官方店",
      "stars": "⭐⭐⭐⭐⭐",
      "sales": "5万+"
    }
  }
}
```

## 支持的平台

### Southeast Asia
- 🇸🇬 Shopee Singapore
- 🇲🇲 Lazada Malaysia
- 🇹🇹 Shopee Thailand
- 🇻🇳 Lazada Vietnam
- 🇵🇭 Shopee Philippines

### 东南亚平台特色

**Shopee**：
- 价格战激烈
- Chat Shop功能
- Flash Sale活动
- Local Favorites区域
- 社交化购物（Shop直播）

**Lazada**：
- 品牌导向
- 质量导向
- LazMall品牌旗舰店
- Free Shipping门槛较低

## 选品分析维度

### 价格分析
- 同类产品价格对比
- 价格区间分布
- 低价/中端/高端市场机会

### 销量分析
- 月销量统计
- 销量增长趋势
- 爆款商品

### 评价分析
- 评分分布（平均分、4.5+占比）
- 评价关键词提取
- 负面评价vs正面

### 竞品策略

### 高价高销量：
- 说明：有品牌溢价能力
- 策略：品质定位、品牌故事

### 低价高销量：
- 说明：性价比市场
- 策略：直击痛点、快速获客

### 中等价销量：
- 说明：主流价格带
- 策略：平衡价格和利润

### 差异化机会
- 颜色/功能创新
- 服务优化
- 品牌故事
- 组合套装

## 数据应用场景

### 商品定价
- 参考竞品价格区间
- 避免价格战陷阱
- 找到定价机会

### 选品策略
- 高利润低竞争产品
- 新兴趋势产品
- 空白市场产品

### 营销角度
- 竞品痛点对比
- 优势卖点提炼
- 差异化展示

## 注意事项

- 遵守各平台规则，防止被封
- 数据仅供参考，需结合实际情况
- 定期更新数据（建议每周）
- 避免过于频繁的抓取请求

## 技术实现

### 反反检测机制
- 随机请求间隔（2-5秒）
- User-Agent轮换
- IP代理池（可选）
- 模拟真实用户行为

### 数据清洗
- 去除异常数据
- 标准化价格格式
- 合并重复商品
- 过滤已下架商品
