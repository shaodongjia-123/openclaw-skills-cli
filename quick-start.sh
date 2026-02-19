#!/bin/bash

echo "🚀 OpenClaw Skills CLI - 快速入门脚本"
echo ""

# 检查Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误：未安装Node.js"
    echo "请先安装Node.js: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js版本: $(node -v)"
echo ""

# 安装依赖
echo "📦 安装依赖..."
npm install

# 创建符号链接（用于开发测试）
echo "🔗 创建开发链接..."
if [[ "$OSTYPE" == "darwin"* || "$OSTYPE" == "linux-gnu"* ]]; then
    sudo npm link
else
    echo "Windows系统，请手动运行: npm link"
fi

echo ""
echo "✅ 安装完成！"
echo ""
echo "🎯 下一步："
echo "  1. 查看所有技能: openclaw list"
echo "  2. 测试技能: openclaw run frontend-design --prompt='创建一个网页'"
echo "  3. 创建自定义技能: openclaw create my-skill"
echo ""
