# OpenClaw Skills CLI 🚀

> 告别重复编码，用标准化技能提升AI编程效率10倍！

## 📖 简介

OpenClaw Skills CLI 是一个轻量级、跨平台的AI编程技能管理工具，通过标准化技能让你的代码生成更稳定、更高效。

### ✨ 核心特性

- 🔌 **技能标准化**：每个技能都是经过验证的可重复流程
- 🎯 **质量保障**：告别"AI瞎写"，确保代码一致性
- 🛠️ **零IDE依赖**：CLI工具，任何编辑器都能用
- 📦 **开箱即用**：6个核心技能，立即提升效率
- 🤝 **社区驱动**：轻松分享和贡献技能

## 🚀 快速开始

### 安装

```bash
# 全局安装
npm install -g openclaw-skills

# 或使用 pnpm
pnpm add -g openclaw-skills
```

### 基本使用

```bash
# 1. 查看所有可用技能
openclaw skills list

# 2. 查看技能详情
openclaw skills info frontend-design

# 3. 使用技能
openclaw run frontend-design --prompt="创建一个现代化的电商网站首页"

# 4. 创建自定义技能
openclaw skills create my-workflow --template=standard

# 5. 分享技能
openclaw skills export my-workflow --format=zip
```

## 🎨 内置技能

### 1. 前端设计技能 `frontend-design`

自动生成美观的Tailwind CSS界面，拒绝蓝紫渐变丑UI。

```bash
openclaw run frontend-design --prompt="创建一个SaaS产品着陆页"
```

**特性：**
- ✅ 现代化设计风格
- ✅ 完整的响应式布局
- ✅ 可访问性友好
- ✅ 直接可用代码

### 2. 域名查询技能 `domain-checker`

批量检测域名可用性。

```bash
openclaw run domain-checker --domains="example.com,test.com"
```

**特性：**
- ✅ WHOIS实时查询
- ✅ 批量检测
- ✅ 详细可用性报告

### 3. Stripe集成技能 `stripe-integration`

一键配置Stripe支付流程。

```bash
openclaw run stripe-integration --product="SaaS订阅服务" --price=29
```

**特性：**
- ✅ 自动生成配置文件
- ✅ 完整的支付流程代码
- ✅ 测试环境支持

### 4. 内容研究写作技能 `content-research`

自动收集资料并生成文章。

```bash
openclaw run content-research --topic="AI编程工具对比"
```

**特性：**
- ✅ 多源数据收集
- ✅ 自动结构化内容
- ✅ Markdown格式输出

### 5. 潜在客户研究技能 `lead-research`

智能寻找B2B潜在客户。

```bash
openclaw run lead-research --industry="SaaS" --size="startup"
```

**特性：**
- ✅ 多维度筛选
- ✅ 联系方式提取
- ✅ 个性化挖掘

### 6. 技能创建者技能 `skill-creator`

快速创建自定义技能。

```bash
openclaw run skill-creator --name="my-skill" --description="我的专属技能"
```

**特性：**
- ✅ 技能模板生成
- ✅ 自动化测试框架
- ✅ 文档生成

## 🔧 开发

### 贡献技能

欢迎提交你的技能！

```bash
# Fork 这个仓库
# 创建你的技能
mkdir skills/my-awesome-skill
# 提交 PR
```

### 技能结构

```
skills/
├── skill-name/
│   ├── SKILL.md           # 技能说明文档
│   ├── prompt.js          # 提示词模板
│   ├── rules.md           # 编码规则
│   ├── config.json        # 配置文件
│   └── examples/          # 示例代码
│       ├── basic.js
│       └── advanced.js
```

## 📄 License

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 社区

- 📖 [文档](https://docs.openclaw.ai)
- 💬 [Discord](https://discord.gg/clawd)
- 🐛 [问题反馈](https://github.com/openclaw/skills-cli/issues)
- 📢 [Twitter](https://twitter.com/openclaw_ai)

## ⭐ Star History

如果这个项目对你有帮助，请给我们一个Star！

[![Star History Chart](https://api.star-history.com/svg?repos=openclaw/skills-cli&type=Date)](https://star-history.com/#openclaw/skills-cli&Date)

---

**用OpenClaw，让AI编程更高效！** 🦾
