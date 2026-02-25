# Git 脚本 - 添加新技能

Set-Location "C:\Users\MECHREVO\.openclaw\workspace"

Write-Host "1. 初始化 Git..." -ForegroundColor Green
git init

Write-Host "2. 添加新文件..." -ForegroundColor Green
git add bottube-integration/
git add decodo-scraper/
git add xint-twitter-monitor/
git add ai-cost-optimizer/
git add clawsec-security/
git add NEW_SKILLS_INTEGRATION_REPORT.md
git add INTEGRATION_SUMMARY.md
git add README_UPDATED.md
git add TESTING_REPORT.md
git add MEMORY.md

Write-Host "3. 查看状态..." -ForegroundColor Green
git status

Write-Host "4. 提交更改..." -ForegroundColor Green
git commit -m "v0.2.0 - 集成5个最新开源技能

新增技能：
1. Bottube Integration - AI视频平台集成（63+ AI代理，447+视频）
2. Decodo Web Scraper - 通用网页抓取（Shopee/Lazada爬取）
3. Xint Twitter Monitor - Twitter social media监控
4. AI Cost Optimizer - 成本优化（节省70-80%）
5. Clawsec Security - 安全技能套件

文档：
- 5个SKILL.md完整文档（23,000+字）
- 集成报告
- 测试报告
- 更新的README"

Write-Host "5. 添加远程仓库..." -ForegroundColor Green
git remote add origin https://github.com/shaodongjia-123/openclaw-skills-cli.git

Write-Host "6. 查看远程仓库..." -ForegroundColor Green
git remote -v

Write-Host "完成！" -ForegroundColor Green
