# Clawsec - OpenClaw 安全技能套件

## 🔒 Overview

集成 Clawsec - 一个完整的 OpenClaw 代理安全套件，保护 SOUL.md 和敏感文件的安全，检测泄露，提供实时安全建议，自动审计，并验证技能完整性。

## 🔗 Official Resources

- **GitHub**: https://github.com/prompt-security/clawsec
- **Updated**: February 25, 2026
- **Status**: Latest Version ✅
- **Language**: JavaScript

## 🎯 Use Cases

### 1. SOUL.md 保护
- 检测未授权的 SOUL.md 修改
- 防止 SOUL 泄露到外部
- 完整的修改历史追踪
- 异常行为检测

### 2. 敏感数据保护
- API Key 检测和加密
- 密码和凭证保护
- 个人信息脱敏
- 数据传输加密

### 3. 安全审计
- 完整的安全审计日志
- 漏洞扫描
- 技能完整性验证
- 依赖项安全检查

### 4. 实时监控
- 实时安全监控
- 异常行为检测
- 紧急情况报警
- 自动安全响应

## 🛠️ Installation & Setup

### Install Clawsec
```bash
npm install @prompt-security/clawsec
```

### Initialize Configuration
```bash
clawsec init

# Creates clawsec.config.json
# Setup encryption keys
# Configure monitoring rules
```

### Configuration
```json
{
  "protection": {
    "soul_md": {
      "enabled": true,
      "encryption": true,
      "backup_enabled": true,
      "backup_interval": 3600,
      "leak_detection": true
    },
    "api_keys": {
      "enabled": true,
      "encryption": true,
      "rotation_enabled": true,
      "rotation_interval": 7
    },
    "sensitive_data": {
      "enabled": true,
      "patterns": [
        "email",
        "phone",
        "credit_card",
        "password",
        "api_key"
      ]
    }
  },
  "monitoring": {
    "realtime": true,
    "audit_log": true,
    "anomaly_detection": true,
    "alerts": {
      "enabled": true,
      "channels": ["telegram", "email", "webhook"],
      "severity_threshold": "high"
    }
  },
  "verification": {
    "skill_integrity": true,
    "dependency_check": true,
    "code_quality": true
  }
}
```

## 📋 CLI Integration Commands

### 保护 SOUL.md
```bash
# 启用 SOUL.md 保护
openclaw skills run clawsec-security protect-soul \
  --file ./workspace/SOUL.md \
  --encrypt \
  --backup ./backups/

# 检测 SOUL.md 泄露
openclaw skills run clawsec-security detect-leak \
  --source github,discord,telegram,email \
  --pattern "@OWNER_NAME,email"

# 验证 SOUL.md 完整性
openclaw skills run clawsec-security verify-soul \
  --file ./workspace/SOUL.md \
  --compare ./backups/SOUL.md.backup

# 查看修改历史
openclaw skills run clawsec-security soul-history \
  --file ./workspace/SOUL.md \
  --limit 50
```

### API Key 保护
```bash
# 检测明文 API Keys
openclaw skills run clawsec-security scan-keys \
  --directory ./workspace/ \
  --recursive

# 加密 API Keys
openclaw skills run clawsec-security encrypt-keys \
  --keys ./workspace/API_KEYS.md \
  --output ./workspace/encrypted_keys.json

# 自动轮换 API Keys
openclaw skills run clawsec-security rotate-keys \
  --provider openai,anthropic,github \
  --schedule weekly

# 验证 API Key 有效性
openclaw skills run clawsec-security validate-keys \
  --file ./workspace/encrypted_keys.json
```

### 安全审计
```bash
# 运行完整安全审计
openclaw skills run clawsec-security audit \
  --target ./workspace/ \
  --output ./audits/security_audit_report.md

# 扫描依赖项漏洞
openclaw skills run clawsec-security scan-deps \
  --file ./package.json \
  --severity high,critical

# 验证技能完整性
openclaw skills run clawsec-security verify-skills \
  --directory ./skills/ \
  --integrity-check md5,sha256

# 代码质量检查
openclaw skills run clawsec-security code-quality \
  --directory ./src/ \
  --rules security,best-practices
```

### 实时监控
```bash
# 启动实时监控
openclaw skills run clawsec-security monitor \
  --targets ./workspace/SOUL.md,./workspace/USER.md \
  --realtime \
  --alerts telegram

# 配置异常检测规则
openclaw skills run clawsec-security detect-anomaly \
  --rules anomaly_rules.json \
  --threshold high

# 设置安全警报
openclaw skills run clawsec-security set-alerts \
  --severity critical,high,medium \
  --channels webhook,telegram \
  --webhook-url "https://your-webhook.com/alerts"

# 查看实时安全状态
openclaw skills run clawsec-security status \
  --detail
```

## 🔍 Security Features

### 1. SOUL.md Drift Detection
```bash
# 检测未授权修改
clawsec detect-drift \
  --file SOUL.md \
  --baseline SOUL.md.baseline \
  --alert true

# 输出：
# ⚠️  DECTION: Unauthorized change in SOUL.md
# Line changes: 5 additions, 2 deletions
# Changed content: personality_tone section
# Suggestion: Review changes manually
```

### 2. Sensitive Data PII Detection
```bash
# 扫描 PII 数据
clawsec scan-pii \
  --directory ./workspace/ \
  --patterns email,phone,ssn,credit_card

# 输出：
# 🚨  PII FOUND: 3 emails found in USER.md
# Lines: 12, 45, 78
# Action: Mask or encrypt these values
```

### 3. Skill Integrity Verification
```bash
# 验证技能完整性
clawsec verify-integrity \
  --skill ./skills/bottube-integration/ \
  --method sha256 \
  --intensive
```

### 4. Anomaly Detection
```bash
# 异常行为检测
clawsec detect-anomaly \
  --file SOUL.md \
  --behavior "mass_deletion,unusual_patterns"
```

## 💡 Pro Tips

### 1. 定期备份
```bash
# 自动备份 SOUL.md
clawsec backup \
  --file SOUL.md \
  --schedule daily \
  --retention 30
```

### 2. 加密敏感数据
```bash
# 加密 API Keys
clawsec encrypt \
  --input ./API_KEYS.md \
  --output ./encrypted_keys.json \
  --algorithm AES-256
```

### 3. 访问控制
```bash
# 设置访问控制规则
clawsec acl \
  --allow read/write \
  --deny external_read \
  --file SOUL.md
```

### 4. 依赖项安全
```bash
# 定期检查依赖项漏洞
clawsec deps-scan \
  --file package.json \
  --auto-update true
```

## 🚀 Integration with Other Skills

### With All Skills
```bash
# 自动为新添加的技能启用安全检查
clawsec auto-enable \
  --directory ./skills/ \
  --rules integrity,dependency_check

# 在每次技能运行前验证完整性
clawsec pre-check \
  --skill auto \
  --verify true
```

### With `ai-cost-optimizer`
```bash
# 保护 API Keys
clawsec protect-keys \
  --provider openai,anthropic \
  --encrypt true

# 与成本优化器集成
# 自动加密新添加的 API Keys
```

### With `bottube-integration`
```bash
# 保护视频脚本敏感信息
clawsec sanitize-scripts \
  --directory ./scripts/ \
  --remove pii,api_keys
```

## 📊 Security Dashboard

### 1. Security Score
```
📊 Security Score: 85/100

✅ SOUL.md Protection: Active
✅ API Key Encryption: Active
✅ Real-time Monitoring: Active
⚠️ Dependency Check: 2 vulnerabilities found
✅ Skill Integrity: All verified
```

### 2. Audit Log
```
📋 Security Audit Log (Last 24h)

2026-02-25 14:30 | INFO | SOUL.md backup completed
2026-02-25 14:25 | WARN | Unusual activity detected in USER.md
2026-02-25 14:20 | CRITICAL | API Key rotation needed
2026-02-25 14:15 | INFO | Skill integrity verified
```

### 3. Vulnerability Report
```
🚨 Vulnerability Report

Package: lodash@4.17.21
Severity: High
CVE: CVE-2023-4528
Action: Update to 4.17.22 or later
```

## ⚠️ Common Security Issues

### Issue 1: API Keys in Plain Text
❌ **Wrong**: Store API keys in plain text in config files
```javascript
const apiKey = "sk-proj-xxx"
```

✅ **Correct**: Encrypt and use environment variables
```javascript
const apiKey = process.env.OPENAI_API_KEY
```

### Issue 2: SOUL.md on Public Repos
❌ **Wrong**: Commit SOUL.md to public GitHub
```bash
git add SOUL.md
git commit -m "Add SOUL.md"
git push
```

✅ **Correct**: Add to .gitignore or encrypt
```bash
# .gitignore
SOUL.md
USER.md
```

### Issue 3: Outdated Dependencies
❌ **Wrong**: Never update dependencies
✅ **Correct**: Regularly check for vulnerabilities
```bash
clawsec scan-deps --auto-update true
```

## 📈 Security Best Practices

### 1. 基本安全原则
- ✅ 最小权限原则
- ✅ 深度防御
- ✅ 安全设计优先
- ✅ 定期审计

### 2. 数据保护
- ✅ 加密敏感数据
- ✅ 定期备份
- ✅ 访问控制
- ✅ 日志审计

### 3. 开发流程
- ✅ 安全代码审查
- ✅ 依赖项检查
- ✅ 渗透测试
- ✅ 持续监控

## 🔔 Alert Configuration

### Example Alert Configuration
```json
{
  "alerts": {
    "critical": {
      "enabled": true,
      "channels": ["telegram", "webhook"],
      "immediate": true
    },
    "high": {
      "enabled": true,
      "channels": ["telegram"],
      "immediate": false
    },
    "medium": {
      "enabled": true,
      "channels": ["email"],
      "batch": true,
      "batch_interval": 3600
    }
  }
}
```

## 🚨 Incident Response

### Step 1: Detect
```bash
# 检测安全事件
clawsec detect \
  --type unauthorized_access \
  --auto-investigate
```

### Step 2: Notify
```bash
# 发送警报
clawsec notify \
  --level critical \
  --message "Unauthorized SOUL.md access detected"
```

### Step 3: Isolate
```bash
# 隔离受影响文件
clawsec isolate \
  --file SOUL.md \
  --mode read-only
```

### Step 4: Remediate
```bash
# 重新验证完整性
clawsec verify \
  --file SOUL.md \
  --restore-from-backup
```

## 📚 Resources

- Clawsec Documentation: https://github.com/prompt-security/clawsec/blob/main/README.md
- Security Best Practices: https://clawsec.com/docs/best-practices
- Incident Response: https://clawsec.com/docs/incident-response

## 🔗 Quick Links

- GitHub: https://github.com/prompt-security/clawsec
- Issues: https://github.com/prompt-security/clawsec/issues
- Discussions: https://github.com/prompt-security/clawsec/discussions

---

**Last Updated**: 2026-02-25
**Version**: 1.0
**Status**: Production Ready ✅
**Security Level**: 🔒 High Security
