# 抖音视频分析工具 - 完整配置指南

**目标**：一劳永逸的抖音视频自动分析
**时间**：2026-02-23 20:10

---

## ✅ 当前进度

### 已完成
- ✅ Claude Sonnet 4.5 已配置（图片分析）
- ✅ ffmpeg 已安装
- ✅ 分析脚本已创建（tiktok_analyzer.py）
- 🔄 Python 正在安装中...

### 待完成
- ⏳ Python 安装
- ⏳ yt-dlp 安装
- ⏳ 测试运行

---

## 📋 安装步骤

### 步骤1：安装Python ✅ 进行中
```powershell
winget install Python.Python.3.12
```

**等待安装完成（约3-5分钟）...**

---

### 步骤2：验证Python安装
```powershell
# 刷新环境变量
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# 测试Python
python --version
pip --version
```

---

### 步骤3：安装yt-dlp
```powershell
pip install yt-dlp
```

---

### 步骤4：测试视频下载
```powershell
yt-dlp --version
yt-dlp -f best "https://v.douyin.com/3HGDzfsMGM8/" -o test_video.mp4
```

---

### 步骤5：运行完整分析
```powershell
cd C:\Users\MECHREVO\.openclaw\workspace
python tiktok_analyzer.py "https://v.douyin.com/3HGDzfsMGM8/"
```

---

## 🎯 预期结果

安装完成后，你可以：

**一键分析任何抖音视频：**
```powershell
python tiktok_analyzer.py "抖音链接"
```

**输出：**
```
📥 下载视频：https://v.douyin.com/xxxxx
✅ 视频已下载：./tiktok_analysis/video.mp4
🎞️ 提取关键帧（5张）...
✅ 已提取 5 张关键帧
🎵 提取音频...
✅ 音频已提取：./tiktok_analysis/audio.wav
🗣️ 转录音频...
✅ 转录完成：XXX 字符

📊 分析结果
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📹 视频文件：./tiktok_analysis/video.mp4
🖼️ 关键帧数量：5

🎞️ 关键帧列表：
  1. ./tiktok_analysis/frames/frame_01.jpg
  2. ./tiktok_analysis/frames/frame_02.jpg
  3. ./tiktok_analysis/frames/frame_03.jpg
  4. ./tiktok_analysis/frames/frame_04.jpg
  5. ./tiktok_analysis/frames/frame_05.jpg

🗣️ 语音转录：
  改造openclaw源码以后，这只大龙虾变得更美味了...

✅ 分析完成！
💡 现在可以把关键帧发给阿拓进行图片分析
```

---

## 🔧 集成到OpenClaw（可选）

创建OpenClaw技能配置：

```json
{
  "skills": {
    "tiktok-analyzer": {
      "enabled": true,
      "command": "python C:\\Users\\MECHREVO\\.openclaw\\workspace\\tiktok_analyzer.py",
      "description": "分析抖音/TikTok视频",
      "trigger": ["分析抖音", "analyze tiktok", "抖音视频"]
    }
  }
}
```

---

## ⚡ 快速命令速查

```powershell
# 分析视频
python tiktok_analyzer.py "抖音链接"

# 只下载视频
yt-dlp -f best "抖音链接" -o video.mp4

# 只截帧（需要视频已下载）
ffmpeg -i video.mp4 -vf "fps=1/3" frame_%03d.jpg

# 只提取音频
ffmpeg -i video.mp4 -vn -acodec pcm_s16le audio.wav
```

---

## 🎬 下一步

1. 等待Python安装完成（约3-5分钟）
2. 安装yt-dlp
3. 测试第一个视频
4. 享受一劳永逸的自动化！

---

**状态**：Python安装中... 🚀

生成时间：2026-02-23 20:10 by 阿拓 🦾
