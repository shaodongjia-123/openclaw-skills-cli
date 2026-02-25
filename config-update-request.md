# OpenClaw 配置更新请求

**执行者**：阿拓 🦾
**时间**：2026-02-23 19:00
**目标**：切换到优云智算 Claude Sonnet 4.5

---

## ✅ 已完成

### 1. 创建 models.json 配置
- **路径**：`C:\Users\MECHREVO\.openclaw\models.json`
- **模型ID**：`claude-sonnet-4-5-20250929`
- **Base URL**：`https://api.modelverse.cn`
- **API Key**：`fHw9iQk6PXZr1DyI81B6F572-a7b7-48C0-97fE-49C045B8`

---

## 🔧 配置详情

### 主聊天模型
```json
{
  "id": "claude-sonnet-4-5",
  "name": "Claude Sonnet 4.5",
  "type": "anthropic",
  "provider": "modelverse",
  "capabilities": ["text", "image", "tools"]
}
```

### 图片分析模型
```json
{
  "id": "claude-sonnet-4-5-vision",
  "name": "Claude Sonnet 4.5 (Vision)",
  "useFor": "image",
  "capabilities": ["image"]
}
```

---

## 📋 下一步操作

### 选项A：更新 Gateway 配置
```bash
openclaw config.patch --json '{"agents":{"defaultModel":"claude-sonnet-4-5","imageModel":"claude-sonnet-4-5"}}'
```

### 选项B：重启 Gateway
```bash
openclaw gateway restart
或
openclaw gateway restart --reason "切换到优云智算 Claude Sonnet 4.5"
```

### 选项C：手动更新配置
如果以上无法执行，可能需要手动编辑配置文件。

---

## 🧪 测试计划

配置完成后，测试：
1. ✅ 基本对话功能
2. ✅ 图片分析功能（读取之前收到的图片）
3. ✅ 工具调用功能

---

## ⚠️ 注意事项

1. 可能需要重启Gateway才能生效
2. 首次调用可能会有延迟（模型需要加载）
3. API使用量会计费，但Sonnet 4.5成本合理

---

等待Gateway重启确认 🚀
