# 技能创建者技能

快速创建自定义技能，支持模板生成。

## 信息

- **Version**: 1.0.0
- **Author**: OpenClaw Team
- **Tags**: tools, creator, template
- **Icon**: 🛠️

## 使用方法

```bash
openclaw create my-skill --description="我的专属技能"
```

## 特性

- ✅ 技能模板生成
- ✅ 自动化测试框架
- ✅ 文档生成
- ✅ 即插即用

## 模板类型

### Standard（标准模板）

适用于一般用途的技能

```bash
openclaw create my-skill --template=standard
```

### Advanced（高级模板）

包含测试、完整文档的高级技能

```bash
openclaw create my-skill --template=advanced
```

## 生成的文件结构

```
my-skill/
├── SKILL.md          # 技能说明文档
├── prompt.js         # 主逻辑文件
├── rules.md          # 执行规则
├── config.json       # 配置文件
└── examples/         # 使用示例
    └── basic.js
```

## 自定义步骤

1. 编辑 `prompt.js` 实现核心逻辑
2. 修改 `rules.md` 添加执行规则
3. 更新 `config.json` 配置参数
4. 在 `examples/` 添加使用示例
5. 测试技能：`openclaw run my-skill --prompt="test"`
