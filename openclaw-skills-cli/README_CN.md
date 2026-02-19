# OpenClaw Skills CLI 中文版说明

## 📖 中文文档

OpenClaw Skills CLI 是一个中文友好的工具，以下是主要功能的中文说明：

### 🚀 快速开始

```bash
# 安装
npm install -g openclaw-skills

# 查看所有技能
openclaw list

# 使用技能
openclaw run frontend-design --prompt="创建一个网页"
```

### 📶 6个内置技能说明

#### 1. 🎨 前端设计技能
- **功能**: 自动生成美观的Tailwind CSS界面
- **特色**: 拒绝蓝紫渐变丑UI，采用现代设计
- **输出**: HTML + Tailwind CSS代码

#### 2. 🔍 域名查询技能
- **功能**: 批量检测域名可用性
- **特色**: WHOIS实时查询
- **输出**: JSON格式可用性报告

#### 3. 💳 Stripe集成技能
- **功能**: 一键配置Stripe支付流程
- **特色**: 自动生成配置和代码
- **输出**: Stripe配置文件 + 前端代码

#### 4. 📝 内容研究技能
- **功能**: 自动收集资料并生成文章
- **特色**: 多源数据收集
- **输出**: 结构化Markdown文章

#### 5. 🎯 潜在客户研究技能
- **功能**: 智能寻找B2B潜在客户
- **特色**: 多维度筛选
- **输出**: 客户CSV列表

#### 6. 🛠️ 技能创建者技能
- **功能**: 快速创建自定义技能
- **特色**: 模板生成，开箱即用
- **输出**: 完整的技能目录结构

### 💡 使用技巧

#### 查看技能详情
```bash
openclaw info frontend-design
```

#### 创建自定义技能
```bash
openclaw create my-skill --description="我的专属技能"
```

#### 保存输出到文件
```bash
openclaw run frontend-design --prompt="网页" --output="index.html"
```

### 🌟 为什么选择OpenClaw

1. **中文友好**: 所有文档和错误信息都是中文
2. **开箱即用**: 6个技能，安装即用
3. **质量保障**: 标准化技能，代码稳定
4. **社区驱动**: 欢迎贡献你的技能
5. **完全免费**: MIT开源协议

### 📞 获得帮助

遇到问题？
- 查看English版README.md
- 提交GitHub Issue
- 加入Discord社区（即将开放）

### 🤝 如何贡献

1. Fork这个项目
2. 创建你的技能或改进现有技能
3. 提交Pull Request
4. 我们会尽快审核合并

---

**让AI编程更高效！** 🦾
