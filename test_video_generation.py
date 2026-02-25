#!/usr/bin/env python3
"""
Bottube 视频生成测试脚本
用于测试基本的视频上传功能
"""

import sys
import os

try:
    from bottube_sdk import BoTTubeClient
    print("✅ Bottube SDK 安装成功！")
except ImportError:
    print("❌ Bottube SDK 未安装")
    print("请运行: pip install bottube")
    sys.exit(1)

def test_bottube_connection():
    """测试 Bottube API 连接"""
    print("\n=== 测试 1: API 连接 ===")
    print("注意: 需要先访问 https://bottube.ai/signup 注册并获取 API Key")
    print()

    # 提示用户输入 API Key
    api_key = input("请输入你的 Bottube API Key: ").strip()

    if not api_key:
        print("❌ 未提供 API Key，跳过测试")
        return None

    try:
        client = BoTTubeClient(api_key=api_key)
        print("✅ 客户端初始化成功")
        return client
    except Exception as e:
        print(f"❌ 客户端初始化失败: {e}")
        return None

def test_get_trending(client):
    """测试获取热门视频"""
    print("\n=== 测试 2: 获取热门视频 ===")

    try:
        trending = client.trending()
        print(f"✅ 获取成功！共 {len(trending)} 个热门视频")

        print("\n前5个热门视频:")
        for i, video in enumerate(trending[:5], 1):
            print(f"{i}. {video.get('title', 'N/A')}")
            print(f"   观看: {video.get('views', 0)}")
            print(f"   作者: {video.get('author', 'N/A')}")
            print()

        return True
    except Exception as e:
        print(f"❌ 获取失败: {e}")
        return False

def test_video_upload(client):
    """测试视频上传（需要准备实际视频文件）"""
    print("\n=== 测试 3: 视频上传 ===")
    print("注意: 需要提供一个视频文件（mp4/webm格式，<8秒）")
    print()

    video_path = input("请输入视频文件路径（例如: video.mp4）: ").strip()

    if not os.path.exists(video_path):
        print(f"❌ 文件不存在: {video_path}")
        print("跳过上传测试")
        return False

    title = input("输入视频标题: ").strip()
    if not title:
        title = "Test Video"

    try:
        print(f"正在上传: {os.path.basename(video_path)}...")
        video = client.upload(
            video_path,
            title=title,
            description="Upload by Bottube test script",
            tags=["test", "bottube"]
        )
        print(f"✅ 上传成功！")
        print(f"   视频ID: {video.get('video_id', 'N/A')}")
        print(f"   URL: {video.get('url', 'N/A')}")
        return True
    except Exception as e:
        print(f"❌ 上传失败: {e}")
        return False

def generate_sample_video_script():
    """生成示例视频脚本"""
    print("\n=== 视频脚本生成器 ===")
    print("这个工具可以帮助你生成产品展示视频脚本")
    print()

    # 产品信息
    product_name = input("产品名称（例如：Pet Static Hair Removal Gloves）: ").strip()
    price = input("价格（泰铢，例如：79）: ").strip()
    key_features = input("核心卖点（用逗号分隔，例如：易用,便宜,有效）: ").strip()

    # 生成脚本
    title = f"Why You Need {product_name}"
    hook = f"Stop struggling with pet hair! 🐱"
    body = f"""
This amazing {product_name} removes pet hair in seconds!

Just {price} THB only at TikTok Shop!

Why choose it?
- {key_features.replace(',', chr(10) + '- ')}
- Fast shipping from Thailand
- 100% customer satisfaction

Order now! Link in bio!
"""
    cta = "Click the link below to order 👇"

    # 保存脚本
    script_content = f"""# 视频脚本: {title}

 Duration: 30-45 seconds
 Style: Vibrant, Fun
 Music: Upbeat

---

## Hook (0-5秒)
{hook}

## Body (5-40秒)
{body}

## CTA (40-45秒)
{cta}

---

## Tags
#petlovers #thailand #tiktokshop #{product_name.replace(' ', '')}
"""

    # 保存到文件
    script_filename = f"script_{product_name.replace(' ', '_').lower()}.txt"
    with open(script_filename, 'w', encoding='utf-8') as f:
        f.write(script_content)

    print(f"\n✅ 脚本已保存到: {script_filename}")
    print("\n=== 脚本内容 ===")
    print(script_content)

    return script_filename

def generate_tiktok_command_example():
    """生成 TikTok 上传命令示例"""
    print("\n=== TikTok 上传命令示例 ===")
    print()
    print("使用 TikTok API 上传的 Python 代码示例:")
    print()
    print("""
# 需要安装 tiktok-api 库
# pip install tiktok-api

from tiktok import TikTok

# 初始化
tiktok = TikTok(session_id="your_session_id")

# 上传视频
video = tiktok.upload(
    video_path="your_video.mp4",
    caption="Amazing product! #TikTokShopee #Thailand",
    hashtags=["petlovers", "thailand", "tiktokshop"]
)

print(f"✅ 上传成功: {video['url']}")
    """)

def main():
    """主函数"""
    print("=" * 60)
    print("🎬 Bottube 视频生成测试")
    print("=" * 60)

    print("\n【选项】")
    print("1. 测试 Bottube API 连接")
    print("2. 生成视频脚本")
    print("3. 查看上传示例")
    print("4. 全部测试（需要 API Key 和视频文件）")
    print("5. 退出")

    choice = input("\n请选择 (1-5): ").strip()

    if choice == "1":
        client = test_bottube_connection()
        if client:
            test_get_trending(client)
    elif choice == "2":
        generate_sample_video_script()
    elif choice == "3":
        generate_tiktok_command_example()
    elif choice == "4":
        client = test_bottube_connection()
        if client:
            test_get_trending(client)
            test_video_upload(client)
    elif choice == "5":
        print("👋 再见！")
    else:
        print("❌ 无效选择")

if __name__ == "__main__":
    main()
