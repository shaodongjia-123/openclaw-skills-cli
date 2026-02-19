@echo off
chcp 65001 >nul
echo 🚀 OpenClaw Skills CLI - 快速入门脚本
echo.

REM 检查Node.js
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 错误：未安装Node.js
    echo 请先安装Node.js: https://nodejs.org/
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✅ Node.js版本: %NODE_VERSION%
echo.

REM 安装依赖
echo 📦 安装依赖...
call npm install

REM 创建链接（用于开发测试）
echo 🔗 创建开发链接...
if %errorlevel% equ 0 (
    call npm link
) else (
    echo Windows系统，以管理员身份运行此脚本
)

echo.
echo ✅ 安装完成！
echo.
echo 🎯 下一步：
echo   1. 查看所有技能: openclaw list
echo   2. 测试技能: openclaw run frontend-design --prompt="创建一个网页"
echo   3. 创建自定义技能: openclaw create my-skill
echo.

pause
