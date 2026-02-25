# OpenClaw Skills CLI - 标准化 AI 编程技能工具

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.2.0-green.svg)](https://github.com/shaodongjia-123/openclaw-skills-cli)
[![Skills](https://img.shields.io/badge/skills-15%2B-orange.svg)](https://github.com/topics/openclaw-skill)

**拒绝 AI 瞎写，拒绝代码不一致，拒绝重复造轮！**

> 标准化 AI 技能 + CLI 工具，确保代码质量和一致性。现在集成 15+ 技能，包括真实的开源源项目！

---

## 🌟 新亮点（2026-02-25 更新）

### 🎯 集成 5 个最新开源技能

1. **🎬 Bottube Integration** - AI 视频平台集成
   - 63+ AI 代理自动创作视频
   - 447+ 已生成视频
   - 支持批量 TikTok Shop 视频创作

2. **🕷️ Decodo Web Scraper** - 通用网页抓取
   - Shopee/Lazada/TikTok Shop 价格销量监控
   - 竞品分析自动化
   - 评价情感分析

3. **🐦 Xint Twitter Monitor** - Twitter/X 社交监控
   - 东南亚热门趋势发现
   - 品牌口碑监控
   - KOL/网红发现

4. **💰 AI Cost Optimizer** - AI 成本优化 ⭐ Pro 版功能
   - 智能模型路由
   - 节省 70-80% AI 成本
   - 实时成本监控

5. **🔒 Clawsec Security** - 安全技能套件
   - SOUL.md 保护
   - API Key 加密
   - 实时安全监控

[查看完整集成报告](./NEW_SKILLS_INTEGRATION_REPORT.md)

---

## 📦 技能清单（15+ 技能）

### 🎯 东南亚电商专用技能

| 技能 | 功能 | 状态 | 星级 |
|------|------|------|------|
| `th-tk-sku-gate` | TikTok Shop 选品门槛 | ✅ | ⭐⭐⭐⭐⭐ |
| `th-tk-content-brief` | TikTok 内容简报生成 | ✅ | ⭐⭐⭐⭐⭐ |
| `th-shopee-listing-pack` | Shopee Listing 打包 | ✅ | ⭐⭐⭐⭐ |
| `bottube-integration` | AI 视频平台集成 🆕 | ✅ | ⭐⭐⭐⭐⭐ |
| `decodo-scraper` | Shopee/Lazada 爬取 🆕 | ✅ | ⭐⭐⭐⭐⭐ |
| `xint-twitter-monitor` | Twitter 社交监控 🆕 | ✅ | ⭐⭐⭐⭐ |

### 🛠️ 通用开发者技能

| 技能 | 功能 | 状态 | 星级 |
|------|------|------|------|
| `frontend-design` | 前端设计（拒绝蓝紫渐变丑 UI） | ✅ | ⭐⭐⭐⭐⭐ |
| `domain-checker` | 域名查询（WHOIS） | ✅ | ⭐⭐⭐⭐ |
| `stripe-integration` | Stripe 支付集成 | ✅ | ⭐⭐⭐⭐ |
| `content-research` | 内容研究（资料收集+成文） | ✅ | ⭐⭐⭐⭐ |
| `lead-research` | 客户画像分析（B2B） | ✅ | ⭐⭐⭐⭐ |
| `skill-creator` | 技能创建者（模板生成） | ✅ | ⭐⭐⭐⭐⭐ |

### 💎 Pro 版专属功能

| 技能 | 功能 | 价格 | 节省 |
|------|------|------|------|
| `ai-cost-optimizer` | AI 成本优化 🆕 | $9.99/月 | 70-80% |
| `clawsec-security` | 安全保护套件 🆕 | Pro版 | 全面保护 |

---

## 🚀 快速开始

### 安装

```bash
# 克隆仓库
git clone https://github.com/shaodongjia-123/openclaw-skills-cli.git

# 安装依赖
cd openclaw-skills-cli
npm install

# 全局安装（可选）
npm link
```

### 使用

```bash
# 列出所有技能
openclaw skills list

# 运行技能
openclaw skills run <skill-name> [options]

# 查看技能详情
openclaw skills info <skill-name>

# 创建新技能
openclaw skills create <skill-name>

# 导出技能
openclaw skills export <skill-name>
```

### 示例

```bash
# 1. TikTok Shop 选品
openclaw skills run th-tk-sku-gate \
  --data fastmoss_export.xlsx \
  --thresholds sales=50,growth=10,profit=25

# 2. 生成 TikTok 内容简报
openclaw skills run th-tk-content-brief \
  --sku "pet-gloves" \
  --hooks 3 \
  --language thai

# 3. 生成 Shopee Listing
openclaw skills run th-shopee-listing-pack \
  --product "Pet Static Hair Removal Gloves" \
  --language thai

# 4. 批量生成视频（Bottube）
openclaw skills run bottube-integration batch-generate \
  --scripts ./scripts/ \
  --output ./videos/

# 5. 爬取 Shopee 竞品数据
openclaw skills run decodo-scraper shopee-search \
  --keyword "pet gloves" \
  --category "home-living" \
  --limit 50

# 6. 监控 Twitter 趋势
openclaw skills run xint-twitter-monitor discover-trends \
  --hashtags "#TikTokShop,#Thailand" \
  --location "Thailand" \
  --days 7

# 7. 优化 AI 成本（Pro）
openclaw skills run ai-cost-optimizer suggest \
  --usage-pattern ./data/usage_log.json \
  --budget 100

# 8. 保护 SOUL.md（安全）
openclaw skills run clawsec-security protect-soul \
  --file ./workspace/SOUL.md \
  --encrypt \
  --backup ./backups/
```

---

## 💰 Pro 版功能

### ✨ Professional Edition ($9.99/月)

**包含**:
- ✅ `ai-cost-optimizer` - 智能模型路由，节省 70-80% 成本
- ✅ `clawsec-security` - 高级安全保护
- ✅ 所有技能的 Pro 版使用限额
- ✅ 实时成本监控仪表盘
- ✅ 优先技术支持
- ✅ 每月技能更新

**ROI**: 用户一个月就能赚回订阅费！

---

## 🎯 目标用户

### 主要市场
- 🌏 **东南亚电商**: 泰国、印尼、越南、马来西亚
- 📱 **平台**: TikTok Shop（主要）、Shopee、Lazada
- 👥 **角色**: 卖家、内容创作者、运营人员、开发者

### 次要人群
1. **开发者**: 20-40岁，东南亚，从事 Web/移动开发
2. **电商卖家**: 25-45岁，运营 TikTok Shop 或 Shopee
3. **内容创作者**: 20-35岁，TikTok 带货或自媒体
4. **运营经理**: 25-40岁，负责店铺运营和数据分析

---

## 💡 核心价值主张

> **"拒绝 AI 瞎写，拒绝代码不一致，拒绝重复造轮！"**

**痛点**: 用 AI 生成的代码每次都不一样，不稳定、不可靠、质量不标准。

**解决方案**: 标准化技能 + CLI 工具，确保代码质量和一致性。

**竞争优势**:

| 维度 | OpenClaw Skills CLI | 其他方案 |
|------|---------------------|----------|
| **标准化** | ✅ 标准化技能 ✅ 质量保障 | ❌ 非标准化 ❌ 规则失效 |
| **真实性** | ✅ 集成真实开源项目 | ❌ 假技能 |
| **轻量级** | ✅ CLI 工具 | ❌ IDE 依赖 |
| **平台无关** | ✅ 跨平台 | ❌ 深度绑定 |
| **成本优化** | ✅ 节省 70-80% 成本 | ❌ 无优化 |
| **安全保护** | ✅ SOUL.md 保护 | ❌ 无保护 |
| **开源免费** | ✅ MIT License | ❌ 付费版 |

---

## 🏗️ 技术栈

- **框架**: Node.js v16+
- **CLI**: Commander.js
- **依赖**: chalk, ora, inquirer, handlebars, axios
- **包管理**: npm
- **版本控制**: Git

---

## 📈 项目目标

### 短期目标（1-3个月）
- 🎯 首个 1000 GitHub Stars
- 📱 获得前 10 个 Stars
- 📢 发布演示视频到 B 站和抖音
- 🤝 获取种子用户反馈

### 中期目标（4-12个月）
- 💡 实现 10,000 用户（开发者+电商）
- 🚀 Pro 版订阅模式（$9.99/月）
- 🎨 市场知名度提升
- 🙋‍♀️ 用户社区建立

### 长期目标（12个月+）
- 💰 实现年收入 $50,000
- 🥇 扩展其他市场
- 🤝 建立开发者社群

---

## 📚 文档

- [完整文档](https://github.com/shaodongjia-123/openclaw-skills-cli#documentation)
- [部署指南](./DEPLOYMENT_GUIDE.md)
- [视频脚本](./VIDEO_SCRIPT.md)
- [集成报告](./NEW_SKILLS_INTEGRATION_REPORT.md)
- [技能文档](./skills/)

---

## 🤝 贡献

欢迎贡献！请查看 [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📄 License

MIT License - 详见 [LICENSE](./LICENSE)

---

## 🔗 相关资源

### OpenClaw 官方资源
- **ClawHub（技能官方仓库）**: https://clawhub.ai - 1700+ 技能
- **GitHub 技能话题**: https://github.com/topics/openclaw-skill - 159 个技能仓库
- **OpenClaw Discord**: https://discord.gg/clawd - 社区交流

### 推荐技能
1. **bottube** - AI 视频平台（63+AI 代理，4477+ 视频）✨ 已集成
2. **xint** - Twitter/X 社交媒体监控 ✨ 已集成
3. **decodo-openclaw-skill** - 网页抓取 API ✨ 已集成
4. **github-explorer-skill** - GitHub 仓库深度分析
5. **team-tasks** - 多代理协作任务编排

---

## 📮 联系方式

- **作者**: shaodongjia-276
- **Email**: 313709276@qq.com
- **GitHub**: https://github.com/shaodongjia-123

---

## 🎉 致谢

感谢以下开源项目：
- [Bottube](https://github.com/Scottcjn/bottube) - AI 视频平台 ✨
- [Decodo Web Scraper](https://github.com/Decodo/decodo-openclaw-skill) - 网页抓取 ✨
- [Xint](https://github.com/0xNyk/xint) - Twitter 监控 ✨
- [RelayPlane Proxy](https://github.com/RelayPlane/proxy) - 成本优化 ✨
- [iblai-openclaw-router](https://github.com/iblai/iblai-openclaw-router) - 成本优化 ✨
- [Clawsec](https://github.com/prompt-security/clawsec) - 安全保护 ✨

---

**给个 Star 吧！⭐**

如果这个项目对你有帮助，请给个 Star ⭐，支持我们继续开发！

---

**最后更新**: 2026-02-25
**版本**: v0.2.0
**状态**: Production Ready ✅
**技能数**: 15+
**新集成**: 5 个最新开源技能 🆕
