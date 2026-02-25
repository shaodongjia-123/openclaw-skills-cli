# 视频内容创作技能

AI驱动的短视频内容创作工具，专为TikTok、抖音等短视频平台优化。

## 信息

- **Version**: 1.0.0
- **Author**: OpenClaw Team
- **Tags**: video, creator, tiktok, content, script
- **Icon**: 🎬

## 功能

- 📝 根据产品特点生成短视频脚本
- 🎬 多种内容类型：产品展示、使用教程、用户评价
- ⏱️ 不同时长：15秒、30秒、60秒、3分钟
- 🎭 多种风格：幽默、专业、故事化
- 📱 针对不同平台格式

## 使用方法

```bash
openclaw run video-content-creator --product="产品描述" --duration="30秒" --style="幽默" --platform="TikTok"
```

## 参数说明

- `--product`: 产品或服务的描述
- `--duration`: 视频时长（15秒/30秒/60秒/3分钟）
- `style`: 内容风格（幽默、专业、故事、教育、推广）
- `--platform`: 发布平台（TikTok、抖音、脸书、IG）

## 示例

```bash
# 示例1：产品展示 30秒 幽默风格
openclaw run video-content-creator --product="多功能厨房小家电" --duration="30秒" --style="幽默" --platform="TikTok"

# 示例2：使用教程 60秒 教育风格
openclaw run video-content创作者的技能创作者的技能的技能 --product="智能家居系统" --duration="60秒" --style="教育" --platform="抖音"

# 示例3：用户评价 15秒 真实风格
openclaw run video-content-creator --product="运动耳机" --duration="15秒" --style="真实" --platform="Instagram"
```

## 输出格式

生成的内容包括：
- 开头钩子（3-5秒）
- 核心价值展示
- 行动号召（CTA）
- TikTok热门BGM建议
- 相关Hashtags建议

## 注意事项

- 内容遵循平台特色（TikTok流行趋势）
- 避免版权音乐问题
- 视频比例：9:16（推荐）
- 字幕友好

## 平台特色

- **TikTok**：音乐驱动、快节奏、15-60秒为主，自然口语
- **抖音**：剧情驱动、教育性强、30秒-3分钟
- **Instagram Reels**：视觉优先、15-30秒
- **Facebook Reels**：真实分享、15-60秒

## 技巧要点

### 开头设计（钩子）
- 直接展示产品痛点
- 提问式开场容易互动
- 视觉冲击（美食、美妆、对比等）

### 结构框架
```
0-3秒：开头钩子
3-10秒：产品核心价值
10-60秒：功能展示/使用方法
60秒-结束：CTA + Hashtags
```

### Hashtags策略
- **大类标签**：#好物推荐 #跨境电商 #东南亚
- **产品标签**：#厨房好物 #小家电
- **场景标签**：#厨房改造 #美食分享
- **互动标签**：#求种 #种草
