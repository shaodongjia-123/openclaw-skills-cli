#!/usr/bin/env python3
"""
TikTok/抖音视频分析工具
支持：视频下载、截帧、语音转文字、综合分析
"""

import subprocess
import os
import sys
import json
from pathlib import Path

def download_video(url, output_dir="./tiktok_analysis"):
    """下载抖音视频"""
    os.makedirs(output_dir, exist_ok=True)
    video_path = os.path.join(output_dir, "video.mp4")
    
    print(f"📥 下载视频：{url}")
    
    # 使用yt-dlp下载
    cmd = [
        "yt-dlp",
        "-f", "best",
        "-o", video_path,
        url
    ]
    
    try:
        subprocess.run(cmd, check=True, capture_output=True)
        print(f"✅ 视频已下载：{video_path}")
        return video_path
    except subprocess.CalledProcessError as e:
        print(f"❌ 下载失败：{e}")
        return None
    except FileNotFoundError:
        print("❌ yt-dlp未安装！请先安装：pip install yt-dlp")
        return None

def extract_frames(video_path, output_dir="./tiktok_analysis/frames", num_frames=5):
    """提取视频关键帧"""
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"🎞️ 提取关键帧（{num_frames}张）...")
    
    # 获取视频时长
    duration_cmd = [
        "ffprobe",
        "-v", "error",
        "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1",
        video_path
    ]
    
    try:
        duration = float(subprocess.check_output(duration_cmd).decode().strip())
        
        frames = []
        for i in range(num_frames):
            timestamp = (duration / (num_frames + 1)) * (i + 1)
            frame_path = os.path.join(output_dir, f"frame_{i+1:02d}.jpg")
            
            cmd = [
                "ffmpeg",
                "-ss", str(timestamp),
                "-i", video_path,
                "-vframes", "1",
                "-q:v", "2",
                frame_path,
                "-y"
            ]
            
            subprocess.run(cmd, check=True, capture_output=True, stderr=subprocess.DEVNULL)
            frames.append(frame_path)
        
        print(f"✅ 已提取 {len(frames)} 张关键帧")
        return frames
    
    except Exception as e:
        print(f"❌ 截帧失败：{e}")
        return []

def extract_audio(video_path, output_dir="./tiktok_analysis"):
    """提取音频"""
    audio_path = os.path.join(output_dir, "audio.wav")
    
    print("🎵 提取音频...")
    
    cmd = [
        "ffmpeg",
        "-i", video_path,
        "-vn",
        "-acodec", "pcm_s16le",
        "-ar", "16000",
        "-ac", "1",
        audio_path,
        "-y"
    ]
    
    try:
        subprocess.run(cmd, check=True, capture_output=True, stderr=subprocess.DEVNULL)
        print(f"✅ 音频已提取：{audio_path}")
        return audio_path
    except Exception as e:
        print(f"❌ 音频提取失败：{e}")
        return None

def transcribe_audio(audio_path):
    """语音转文字（需要OpenAI Whisper API）"""
    print("🗣️ 转录音频...")
    
    # 调用OpenClaw的Whisper技能
    whisper_script = Path.home() / ".openclaw" / "workspace" / "node_modules" / "openclaw" / "skills" / "openai-whisper-api" / "scripts" / "transcribe.sh"
    
    if not whisper_script.exists():
        print("⚠️ Whisper技能未找到，跳过转录")
        return None
    
    try:
        result = subprocess.run(
            [str(whisper_script), audio_path],
            capture_output=True,
            text=True
        )
        
        transcript_file = audio_path.replace(".wav", ".txt")
        if os.path.exists(transcript_file):
            with open(transcript_file, "r", encoding="utf-8") as f:
                transcript = f.read()
            print(f"✅ 转录完成：{len(transcript)} 字符")
            return transcript
        else:
            print("⚠️ 转录文件未生成")
            return None
    
    except Exception as e:
        print(f"❌ 转录失败：{e}")
        return None

def analyze_douyin(url):
    """完整分析抖音视频"""
    print("=" * 60)
    print("[TikTok] 抖音视频分析工具")
    print("=" * 60)
    
    # 1. 下载视频
    video_path = download_video(url)
    if not video_path:
        return
    
    # 2. 提取关键帧
    frames = extract_frames(video_path, num_frames=5)
    
    # 3. 提取音频
    audio_path = extract_audio(video_path)
    
    # 4. 转录音频
    transcript = None
    if audio_path:
        transcript = transcribe_audio(audio_path)
    
    # 5. 生成分析报告
    print("\n" + "=" * 60)
    print("📊 分析结果")
    print("=" * 60)
    
    print(f"\n📹 视频文件：{video_path}")
    print(f"🖼️ 关键帧数量：{len(frames)}")
    
    if frames:
        print("\n🎞️ 关键帧列表：")
        for i, frame in enumerate(frames, 1):
            print(f"  {i}. {frame}")
    
    if transcript:
        print(f"\n🗣️ 语音转录：")
        print(f"  {transcript[:200]}..." if len(transcript) > 200 else f"  {transcript}")
    
    print("\n" + "=" * 60)
    print("✅ 分析完成！")
    print("💡 现在可以把关键帧发给阿拓进行图片分析")
    print("=" * 60)
    
    # 返回结果
    return {
        "video_path": video_path,
        "frames": frames,
        "audio_path": audio_path,
        "transcript": transcript
    }

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法: python tiktok_analyzer.py <抖音视频链接>")
        sys.exit(1)
    
    url = sys.argv[1]
    analyze_douyin(url)
