# OpenClaw Skills CLI

> 标准化AI编程技能CLI工具 - 让AI技能稳定复现

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/shaodongjia-123/openclaw-skills-cli?style=social)](https://github.com/shaodongjia-123/openclaw-skills-cli)

## 🦾 关于

OpenClaw Skills CLI 是一个标准化的AI编程技能工具，让AI生成的代码从"每次都不一样"到"100%稳定输出"。

**核心价值**：
- ✅ 拒绝AI瞎写
- ✅ 拒绝代码不一致
- ✅ 拒绝重复造轮子

## 📚 深度技术文章

我们的技术方法论完全来自实战经验，详见：

### 🔥 Moltbook技术系列（最新）

**第1篇：从零重构AI记忆系统：四层架构 + 程序性记忆的完整实战**
- 🔗 https://www.moltbook.com/post/12fd5972-54e5-4e14-b88e-8a8a0930c80b
- 核心：四层记忆架构（热→温→冷→化石），成本降低80%，检索提速10-50倍

**第2篇：如何让AI技能稳定复现？我的15个技能标准化之路**
- 🔗 https://www.moltbook.com/post/580576f1-fb0f-4d33-99a5-86371bd3d5e9
- 核心：三层标准化架构（SKILL.md定义 + 生成模板 + 成本优化）

**第3篇：从理论到落地：向量数据库实现的完整实战（含踩坑经验）**
- 🔗 https://www.moltbook.com/post/10cee503-dea9-4e37-806e-949310f040f3
- 核心：ChromaDB落地代码 + 4个坑 + 性能优化 + 混合检索

> 完整代码示例（记忆架构、技能框架、向量数据库）均包含在本仓库中。

## 🛠️ 功能特性

### 标准化技能库（15+技能）

| 类别 | 技能 | 说明 |
|------|------|------|
| **前端开发** | frontend-design | 前端设计（拒绝蓝紫渐变丑UI） |
| **数据分析** | competitor-scraper | 竞品爬取（Shopee/Lazada价格销量） |
| | social-trend-monitor | 社交趋势监控（东南亚热门话题） |
| | tiktok-content-analyzer | TikTok爆款视频分析 |
| **内容创作** | video-content-creator | AI视频内容创作（TikTok/抖音脚本） |
| | th-tk-content-brief | TikTok Shop短视频测试简介（泰国） |
| | th-shopee-listing-pack | Shopee泰国Listing素材包 |
| **选品工具** | th-tk-sku-gate | 泰国TikTok Shop选品筛选 |
| | th-tk-keyword-analyzer | 泰国关键词分析 |
| | th-tk-industry-zone-db | 泰国行业分区数据库 |
| **通用工具** | domain-checker | 域名查询（WHOIS查询） |
| | stripe-integration | Stripe集成（配置支付） |
| | content-research | 内容研究（资料收集+自动成文） |
| | lead-research | 客户画像分析（B2B客户发现） |
| | skill-creator | 技能创建者（模板生成） |

### CLI命令

```bash
# 列出所有技能
./openclaw skills list

# 运行指定技能
./openclaw skills run th-tk-sku-gate --input "帮我筛选这个商品"

# 查看技能信息
./openclaw skills info th-tk-sku-gate
```

## 📦 安装

### 要求
- Node.js v16+
- npm 或 yarn

### 安装
```bash
# Clone仓库
git clone https://github.com/shaodongjia-123/openclaw-skills-cli

# 安装依赖
cd openclaw-skills-cli
npm install

# 全局安装
npm link
```

## 🚀 快速开始

### 运行第一个技能

```bash
# 列出可用技能
./openclaw skills list

# 运行选品技能
./openclaw skills run th-tk-sku-gate --input "帮我筛选商品"

# 查看结果
{"status": "passed", "score": 85, "reason": "..."}
```

## 🎯 使用场景

### 1. TikTok电商卖家
- 选品筛选（th-tk-sku-gate）
- 关键词分析（th-tk-keyword-analyzer）
- Shopee上架素材（th-shopee-listing-pack）

### 2. 开发者
- 前端设计（frontend-design）
- 服务集成（stripe-integration）
- 工具创建（skill-creator）

### 3. 内容创作者
- 视频脚本（video-content-creator）
- 短视频简介（th-tk-content-brief）
- 趋势监控（social-trend-monitor）

## 📊 技术栈

- **语言**: Node.js v16+
- **框架**: Commander.js
- **特性**: 跨平台（Windows/Linux/Mac）
- **开源**: MIT License

## 🤝 贡献

欢迎贡献新技能！

### 创建新技能
```bash
# 使用技能创建模板
./openclaw skills create my-skill

# 编辑SKILL.md
# 实现技能逻辑

# 测试技能
./openclaw skills run my-skill
```

## 📄 License

[MIT License](LICENSE)

## 🔗 相关项目

- **Moltbook**: https://www.moltbook.com/m/builders
- **GitHub**: https://github.com/shaodongjia-123

## 📮 联系方式

- **Email**: 313709276@qq.com
- **GitHub Issues**: https://github.com/shaodongjia-123/openclaw-skills-cli/issues

---

**⭐ 如果这个项目对你有帮助，请给个Star！**
