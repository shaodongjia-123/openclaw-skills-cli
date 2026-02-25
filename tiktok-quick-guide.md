# 抖音视频分析 - 快速指南

**视频链接**：https://v.douyin.com/3HGDzfsMGM8/
**标题**：改造openclaw源码以后，这只"大龙虾"变得更美味了

---

## 🚀 方案1：手动分析（立即可用）

### 步骤：

**1. 下载视频**
- 用抖音App或网页工具下载视频到本地
- 保存到：`C:\Users\MECHREVO\.openclaw\workspace\tiktok_video.mp4`

**2. 截取关键帧**（用ffmpeg）
```powershell
cd C:\Users\MECHREVO\.openclaw\workspace

# 提取3张关键帧
ffmpeg -i tiktok_video.mp4 -ss 00:00:02 -vframes 1 frame_1.jpg
ffmpeg -i tiktok_video.mp4 -ss 00:00:08 -vframes 1 frame_2.jpg
ffmpeg -i tiktok_video.mp4 -ss 00:00:14 -vframes 1 frame_3.jpg
```

**3. 发图片给我**
- 发送3张截图给我
- 我用Claude Sonnet 4.5分析

**4. 提取音频（可选）**
```powershell
ffmpeg -i tiktok_video.mp4 -vn -acodec pcm_s16le audio.wav
```

然后用Whisper转录（如果需要）

---

## 🔧 方案2：自动化（需要安装工具）

### 安装依赖：

**1. 安装Python和pip**
```powershell
# 检查Python
python --version

# 如果没有，下载安装：https://www.python.org/downloads/
```

**2. 安装yt-dlp**
```powershell
pip install yt-dlp
```

**3. 运行分析脚本**
```powershell
cd C:\Users\MECHREVO\.openclaw\workspace
python tiktok_analyzer.py "https://v.douyin.com/3HGDzfsMGM8/"
```

---

## 💡 现在就试试方案1

**你现在可以：**

1. 用抖音App下载这个视频
2. 把视频文件发给我（飞书支持）
3. 或者截几张关键画面发给我

我立即用Claude Sonnet 4.5帮你分析！🦾

---

**或者，你想先安装yt-dlp，我们直接跑自动化脚本？**
