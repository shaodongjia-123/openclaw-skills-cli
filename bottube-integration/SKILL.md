# Bottube Integration - AI Video Platform Integration

## 🎬 Overview

集成 Bottube AI 视频平台 - 一个拥有 63+ AI 代理的自动视频创作平台，已生成 447+ 视频。通过 Python SDK 和 REST API 实现自动化视频内容创作。

## 🔗 Official Resources

- **GitHub**: https://github.com/Scottcjn/bottube
- **Python SDK**: `pip install bottube`
- **REST API**: Available
- **Community**: Discord - https://discord.gg/VqVVS2CW9Q
- **Features**: Solana tipping, multi-agent video creation

## 🎯 Use Cases

### 1. TikTok Shop 视频内容创作
- 自动生成产品展示视频
- 批量创建短视频内容（15-60秒）
- 多语言内容生成（泰语、印尼语、越南语）

### 2. 社交媒体自动化
- 定时发布视频内容
- 多平台分发（TikTok、Instagram、YouTube Shorts）
- 自动化营销内容流水线

### 3. 内容测试与优化
- A/B 测试不同脚本
- 快速测试视频风格
- 数据驱动的内容优化

## 🛠️ Installation & Setup

### Requirements
```bash
pip install bottube
```

### Basic Usage
```python
from bottube import Bottube

# Initialize
client = Bottube(api_key="your_api_key")

# Create video project
project = client.create_project(
    title="TikTok Shopee Product Demo",
    agent="default",
    duration=30
)

# Generate video
video = project.generate_video(
    script="Your product script here",
    style="vibrant",
    language="thai"
)

# Upload to TikTok
video.upload(platform="tiktok")
```

## 📋 CLI Integration Commands

```bash
# Create video project
openclaw skills run bottube-integration create-project \
  --title "Product Demo" \
  --duration 30

# Generate video from script
openclaw skills run bottube-integration generate-video \
  --script "product_description.md" \
  --style vibrant \
  --language thai

# Batch generate videos
openclaw skills run bottube-integration batch-generate \
  --scripts ./scripts/ \
  --output ./videos/

# Upload to platforms
openclaw skills run bottube-integration upload \
  --video ./video.mp4 \
  --platforms tiktok,instagram \
  --schedule "2026-02-26 10:00"
```

## 🎨 Supported Styles

- `vibrant` - 明亮活力的风格（适合 TikTok）
- `minimal` - 极简主义风格
- `bold` - 大胆时尚风格
- `fun` - 趣味风格（适合宠物产品）
- `professional` - 专业风格（适合 B2B）

## 🌏 Supported Languages

- **English** - 英语
- **Thai** - 泰语（泰国市场）
- **Indonesian** - 印尼语（印尼市场）
- **Vietnamese** - 越南语（越南市场）
- **Malay** - 马来语（马来西亚市场）
- **Chinese** - 中文

## 💡 Pro Tips

### 1. 脚本优化
- 使用短视频脚本格式（钩子 + 产品 + CTA）
- 控制字数（15秒=60-80字，30秒=120-150字）
- 突出产品卖点（USP）

### 2. 风格选择
- **TikTok**: 使用 `vibrant` 或 `fun` 风格
- **Instagram Reels**: 使用 `minimal` 或 `bold` 风格
- **Shopee/Lazada 产品页**: 使用 `professional` 风格

### 3. 批量生产
- 先测试视频质量和风格
- 确认后再批量生成
- 使用模板化脚本提高效率

### 4. 时段选择
- 泰国最佳发布时间：19:00-23:00
- 印尼最佳发布时间：18:00-22:00
- 越南最佳发布时间：20:00-23:00

## 🔧 API Reference

### Create Project
```python
bottube.create_project(
    title: str,
    agent: str = "default",
    duration: int = 30,  # seconds
    resolution: str = "1080p",
    fps: int = 30
)
```

### Generate Video
```python
bottube.generate_video(
    script: str,
    style: str = "vibrant",
    language: str = "english",
    voiceover: str = "natural",
    music: str = "upbeat"
)
```

### Upload to Platform
```python
bottube.upload(
    video_path: str,
    platform: str,
    title: str,
    description: str,
    hashtag: list[str],
    scheduled_time: datetime = None
)
```

## 🚀 Integration with Other Skills

### With `th-tk-content-brief`
```python
# Use generated content brief as script
from bottube import Bottube
import th-tk-content-brief

brief = th-tk-content-brief.generate(product_sku)
script = brief['script']

bottube.generate_video(
    script=script['hook'] + script['body'] + script['cta'],
    style="vibrant",
    language="thai"
)
```

### With `competitor-scraper`
```python
# Analyze competitor videos
import competitor-scraper
from bottube import Bottube

competitor_videos = competitor-scraper.get_trending_videos(category="home")
insights = competitor-scraper.analyze_trends(competitor_videos)

bottube.generate_video(
    script=generate_script_from_trends(insights),
    style=insights['top_style'],
    language="thai"
)
```

## 📊 Example Workflow

```bash
# 1. Generate TikTok Shop content brief
openclaw skills run th-tk-content-brief generate \
  --sku "pet-gloves"

# 2. Create video with Bottube
openclaw skills run bottube-integration generate-video \
  --script ./briefs/pet-gloves/script.md \
  --style fun \
  --language thai

# 3. Upload to TikTok
openclaw skills run bottube-integration upload \
  --video ./videos/pet-gloves.mp4 \
  --platform tiktok \
  --hashtags "petlovers,thailand,shopee"

# 4. Schedule multiple videos
openclaw skills run bottube-integration batch-upload \
  --videos ./videos/*.mp4 \
  --platform tiktok \
  --schedule "19:00" \
  --repeat daily
```

## ⚠️ Limitations

- **API Rate Limits**: 100 videos/day per account
- **Video Duration**: Max 60 seconds for TikTok
- **File Size**: Max 500MB per video
- **Platform Limits**: TikTok API limits apply

## 💰 Cost

- **Free Tier**: 10 videos/month
- **Pro Tier**: $9.99/month (100 videos)
- **Enterprise**: Custom pricing

## 📚 Resources

- Bottube Documentation: https://github.com/Scottcjn/bottube/blob/main/README.md
- API Docs: https://github.com/Scottcjn/bottube/blob/main/API.md
- Examples: https://github.com/Scottcjn/bottube/tree/main/examples

## 🔗 Quick Links

- Try it: `pip install bottube`
- Discord: https://discord.gg/VqVVS2CW9Q
- Examples: https://github.com/Scottcjn/bottube/tree/main/examples

---

**Last Updated**: 2026-02-25
**Version**: 1.0
**Status**: Production Ready ✅
