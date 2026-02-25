# 抖音/TikTok视频完整分析方案

**需求**：能够完整"观看"并分析抖音短视频
**时间**：2026-02-23 20:00

---

## 🔍 调研结果

### 已有技能清单

#### ✅ 已安装（可用）
1. **openai-whisper-api** - 语音转文字
   - 功能：提取视频音频并转录为文字
   - 支持格式：m4a, ogg, mp4等
   - 需要：OPENAI_API_KEY

2. **Summarize** - 多格式总结（支持视频）
   - 功能：可能支持YouTube等视频平台
   - 需要验证是否支持抖音链接

#### ❓ GitHub发现（未安装）
1. **bottube** - AI视频平台
   - 功能：视频**创作和上传**，不适合下载分析
   - 不符合需求 ❌

---

## 🎯 一劳永逸方案设计

### 方案A：视频处理工作流（推荐）⭐⭐⭐⭐⭐

**工具链组合：**
```
1. 视频下载 → yt-dlp / you-get
2. 视频截帧 → ffmpeg
3. 语音转文字 → openai-whisper-api
4. 图片分析 → claude-sonnet-4-5（已配置✅）
5. 综合总结 → claude-sonnet-4-5
```

**实现方式：创建自定义技能**
```
技能名称：tiktok-analyzer
功能：
  1. 下载抖音视频（yt-dlp）
  2. 自动截取关键帧（ffmpeg，每2秒一帧）
  3. 提取音频并转文字（Whisper）
  4. 分析所有截图（Claude Vision）
  5. 综合生成视频分析报告
```

---

### 方案B：使用现有工具（快速但不完整）⭐⭐⭐

**步骤：**
1. 手动下载抖音视频（手机App或网页工具）
2. 用ffmpeg手动截帧
3. 发送截图给我分析
4. 用Whisper转录音频
5. 综合分析

**缺点：** 不够自动化，需要手动操作

---

### 方案C：探索Summarize技能（待验证）⭐⭐⭐⭐

Summarize技能声称支持"视频"，可能包括：
- YouTube链接自动分析
- 可能支持其他视频平台

**需要测试：**
- 是否支持抖音/TikTok链接
- 是否能自动提取视频内容

---

## 💡 推荐行动方案

### 立即可做（0-10分钟）

**测试Summarize技能**
```bash
# 试试Summarize能否直接处理视频链接
"总结这个视频：[抖音链接]"
```

---

### 短期方案（1-2小时）

**创建 tiktok-analyzer 技能**

#### 1. 安装依赖工具
```bash
# yt-dlp（视频下载）
pip install yt-dlp

# ffmpeg（已有或需安装）
# Windows: choco install ffmpeg
# Linux: apt install ffmpeg
```

#### 2. 创建技能脚本
```python
# tiktok-analyzer.py
import subprocess
import os

def analyze_tiktok(url):
    # 1. 下载视频
    video_file = download_video(url)
    
    # 2. 截取关键帧
    frames = extract_frames(video_file)
    
    # 3. 提取音频并转文字
    transcript = transcribe_audio(video_file)
    
    # 4. 分析截图（调用Claude Vision）
    visual_analysis = analyze_frames(frames)
    
    # 5. 综合报告
    return generate_report(visual_analysis, transcript)
```

#### 3. 集成到OpenClaw
```json
{
  "skills": {
    "tiktok-analyzer": {
      "enabled": true,
      "command": "python3 tiktok-analyzer.py"
    }
  }
}
```

---

### 中期方案（1周）

**完善功能：**
1. ✅ 支持批量分析
2. ✅ 自动识别爆款元素
3. ✅ 生成改进建议
4. ✅ 导出结构化报告

---

## 🔧 技术细节

### 视频下载（yt-dlp）
```bash
yt-dlp -f best "https://v.douyin.com/xxxxx" -o video.mp4
```

### 视频截帧（ffmpeg）
```bash
# 每2秒截取一帧
ffmpeg -i video.mp4 -vf "fps=1/2" frame_%03d.jpg

# 提取关键3帧（开头、中间、结尾）
ffmpeg -i video.mp4 -ss 00:00:01 -vframes 1 frame_start.jpg
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 frame_mid.jpg
ffmpeg -i video.mp4 -ss 00:00:09 -vframes 1 frame_end.jpg
```

### 音频提取+转录
```bash
# 提取音频
ffmpeg -i video.mp4 -vn -acodec pcm_s16le audio.wav

# Whisper转录
{whisper-api-script} audio.wav
```

### Claude Vision分析
```python
# 调用image工具分析每一帧
for frame in frames:
    analysis = call_claude_vision(frame, prompt="描述这一帧的内容")
```

---

## ✅ 下一步行动

**优先级P0（立即执行）：**
1. 测试Summarize是否支持抖音链接
2. 如果不支持，创建tiktok-analyzer技能

**优先级P1（今天完成）：**
1. 安装yt-dlp和ffmpeg
2. 测试视频下载和截帧
3. 测试Whisper转录功能

**优先级P2（本周完成）：**
1. 完整实现tiktok-analyzer
2. 测试批量分析
3. 优化分析质量

---

## 📊 预期效果

**使用tiktok-analyzer后：**

输入：
```
"分析这个抖音视频：https://v.douyin.com/xxxxx"
```

输出：
```
# 抖音视频分析报告

## 基本信息
- 时长：15秒
- 关键帧：5张

## 视觉分析
- 场景1（0-3秒）：产品特写，蓝色背景
- 场景2（3-8秒）：使用演示，手部动作
- 场景3（8-15秒）：效果展示，before/after对比

## 音频转录
"你还在为XXX烦恼吗？只需三步，轻松解决..."

## 爆款元素
✅ 痛点开场（抓注意力）
✅ 产品演示（建立信任）
✅ 效果对比（刺激购买）
❌ 缺少促销信息（建议添加限时优惠）

## 改进建议
1. 前3秒加强视觉冲击
2. 添加字幕强化卖点
3. 结尾添加CTA引导
```

---

**要开始创建这个技能吗？** 🚀

生成时间：2026-02-23 20:00 by 阿拓 🦾
