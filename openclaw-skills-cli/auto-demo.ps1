# OpenClaw Skills CLI - 自动演示脚本
# 执行此脚本会自动运行所有演示命令

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "OpenClaw Skills CLI - 自动演示脚本" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "请准备录制屏幕！" -ForegroundColor Yellow
Write-Host "按 Win+G 打开录制工具" -ForegroundColor Yellow
Write-Host "按任意键开始演示..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
Write-Host ""

Write-Host "=== 演示开始 ===" -ForegroundColor Green
Write-Host ""

# 延迟2秒，让录制者准备
Start-Sleep -Seconds 2

# 命令1：查看所有技能
Write-Host "[1/5] 查看所有技能..." -ForegroundColor Cyan
Write-Host ""
openclaw list
Write-Host ""
Write-Host "停顿3秒，请录制完整输出..." -ForegroundColor Yellow
Start-Sleep -Seconds 3
Write-Host ""

# 命令2：查看技能详情
Write-Host "[2/5] 查看前端设计技能详情..." -ForegroundColor Cyan
Write-Host ""
openclaw info frontend-design
Write-Host ""
Write-Host "停顿3秒..." -ForegroundColor Yellow
Start-Sleep -Seconds 3
Write-Host ""

# 命令3：前端设计技能
Write-Host "[3/5] 运行前端设计技能..." -ForegroundColor Cyan
Write-Host ""
openclaw run frontend-design --prompt="创建一个SaaS产品着陆页"
Write-Host ""
Write-Host "停顿5秒，等待代码生成..." -ForegroundColor Yellow
Start-Sleep -Seconds 5
Write-Host "停顿3秒，展示生成的代码..." -ForegroundColor Yellow
Start-Sleep -Seconds 3
Write-Host ""

# 命令4：域名查询技能
Write-Host "[4/5] 运行域名查询技能..." -ForegroundColor Cyan
Write-Host ""
openclaw run domain-checker --domains="example.com"
Write-Host ""
Write-Host "停顿3秒，查看JSON结果..." -ForegroundColor Yellow
Start-Sleep -Seconds 3
Write-Host ""

# 命令5：创建自定义技能
Write-Host "[5/5] 创建自定义技能..." -ForegroundColor Cyan
Write-Host ""
openclaw create my-awesome-skill --description="我的专属技能"
Write-Host ""
Write-Host "停顿3秒..." -ForegroundColor Yellow
Start-Sleep -Seconds 3
Write-Host ""

Write-Host "=== 演示完成 ===" -ForegroundColor Green
Write-Host ""
Write-Host "请停止录制！" -ForegroundColor Yellow
Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "演示完成！" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
