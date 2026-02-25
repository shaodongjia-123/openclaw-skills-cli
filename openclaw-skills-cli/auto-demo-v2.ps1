Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "OpenClaw Skills CLI - 自动演示脚本" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "请准备录制屏幕！(Win+G)" -ForegroundColor Yellow
Write-Host "按任意键开始演示..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
Write-Host ""

Write-Host "=== 演示开始 ===" -ForegroundColor Green
Write-Host ""

# 延迟2秒，让录制者准备
Start-Sleep -Seconds 2

# 命令1：查看所有技能
Write-Host "[1/4] 查看所有技能..." -ForegroundColor Cyan
Write-Host ""
openclaw list
Write-Host ""
Write-Host "停顿3秒..." -ForegroundColor Yellow
Start-Sleep -Seconds 3
Write-Host ""

# 命令2：前端设计技能
Write-Host "[2/4] 运行前端设计技能..." -ForegroundColor Cyan
Write-Host ""
openclaw run frontend-design --prompt="创建一个SaaS产品着陆页"
Write-Host ""
Write-Host "停顿5秒，等待代码生成..." -ForegroundColor Yellow
Start-Sleep -Seconds 5
Write-Host "停顿3秒，展示生成的代码..." -ForegroundColor Yellow
Start-Sleep -Seconds 3
Write-Host ""

# 命令3：创建自定义技能
Write-Host "[3/4] 创建自定义技能..." -ForegroundColor Cyan
Write-Host ""

# 先删除旧的同名技能目录（如果存在）
$oldSkill = "my-awesome-skill"
if (Test-Path $oldSkill) {
    Remove-Item -Path $oldSkill -Recurse -Force
}

openclaw create $oldSkill --description="我的专属AI编程技能"

Write-Host ""
Write-Host "停顿3秒..." -ForegroundColor Yellow
Start-Sleep -Seconds 3
Write-Host ""

# 命令4：查看技能列表（再次）
Write-Host "[4/4] 再次查看技能列表..." -ForegroundColor Cyan
Write-Host ""
openclaw list
Write-Host ""
Write-Host "停顿3秒..." -ForegroundColor Yellow
Start-Sleep -Seconds 3
Write-Host ""

Write-Host "=== 演示完成 ===" -ForegroundColor Green
Write-Host ""
Write-Host "请停止录制！（Win+G）" -ForegroundColor Yellow
Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "演示完成！" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
