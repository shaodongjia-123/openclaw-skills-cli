#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
TikTok/Douyin Video Analyzer
Simple version for Windows with full paths
"""

import subprocess
import os
import sys

# Full paths
YT_DLP = r"C:\Users\MECHREVO\AppData\Local\Programs\Python\Python312\Scripts\yt-dlp.exe"
FFMPEG = r"C:\Users\MECHREVO\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.0.1-full_build\bin\ffmpeg.exe"
FFPROBE = r"C:\Users\MECHREVO\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.0.1-full_build\bin\ffprobe.exe"

def download_video(url, output_dir="./tiktok_analysis"):
    """Download video"""
    os.makedirs(output_dir, exist_ok=True)
    video_path = os.path.join(output_dir, "video.mp4")
    
    print(f"[Download] URL: {url}")
    
    cmd = [YT_DLP, "-f", "best", "-o", video_path, url]
    
    try:
        result = subprocess.run(cmd, check=True, capture_output=True, text=True, encoding='utf-8', errors='ignore')
        print(f"[OK] Video saved: {video_path}")
        return video_path
    except Exception as e:
        print(f"[ERR] Download failed: {e}")
        return None

def extract_frames(video_path, output_dir="./tiktok_analysis/frames", num_frames=5):
    """Extract key frames"""
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"[Extract] Getting {num_frames} frames...")
    
    # Get video duration
    duration_cmd = [
        FFPROBE,
        "-v", "error",
        "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1",
        video_path
    ]
    
    try:
        duration = float(subprocess.check_output(duration_cmd, encoding='utf-8', errors='ignore').strip())
        
        frames = []
        for i in range(num_frames):
            timestamp = (duration / (num_frames + 1)) * (i + 1)
            frame_path = os.path.join(output_dir, f"frame_{i+1:02d}.jpg")
            
            cmd = [
                FFMPEG,
                "-ss", str(timestamp),
                "-i", video_path,
                "-vframes", "1",
                "-q:v", "2",
                frame_path,
                "-y"
            ]
            
            subprocess.run(cmd, check=True, capture_output=True, stderr=subprocess.DEVNULL)
            frames.append(frame_path)
        
        print(f"[OK] Extracted {len(frames)} frames")
        return frames
    
    except Exception as e:
        print(f"[ERR] Frame extraction failed: {e}")
        return []

def extract_audio(video_path, output_dir="./tiktok_analysis"):
    """Extract audio"""
    audio_path = os.path.join(output_dir, "audio.wav")
    
    print("[Audio] Extracting audio...")
    
    cmd = [
        FFMPEG,
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
        print(f"[OK] Audio saved: {audio_path}")
        return audio_path
    except Exception as e:
        print(f"[ERR] Audio extraction failed: {e}")
        return None

def analyze_douyin(url):
    """Complete analysis"""
    print("=" * 60)
    print("[TikTok] Video Analysis Tool")
    print("=" * 60)
    
    # 1. Download
    video_path = download_video(url)
    if not video_path:
        return
    
    # 2. Extract frames
    frames = extract_frames(video_path, num_frames=5)
    
    # 3. Extract audio
    audio_path = extract_audio(video_path)
    
    # 4. Report
    print("\n" + "=" * 60)
    print("[Results] Analysis Complete")
    print("=" * 60)
    
    print(f"\n[Video] {video_path}")
    print(f"[Frames] {len(frames)} key frames extracted")
    
    if frames:
        print("\n[Frame List]:")
        for i, frame in enumerate(frames, 1):
            print(f"  {i}. {frame}")
    
    if audio_path:
        print(f"\n[Audio] {audio_path}")
        print("[Note] Use Whisper API to transcribe audio")
    
    print("\n" + "=" * 60)
    print("[Done] Send frames to Claude Sonnet 4.5 for analysis!")
    print("=" * 60)
    
    return {
        "video_path": video_path,
        "frames": frames,
        "audio_path": audio_path
    }

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python douyin_analyzer.py <video_url>")
        sys.exit(1)
    
    url = sys.argv[1]
    analyze_douyin(url)
