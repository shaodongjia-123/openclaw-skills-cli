# 域名查询技能

批量检测域名可用性，WHOIS实时查询。

## 信息

- **Version**: 1.0.0
- **Author**: OpenClaw Team
- **Tags**: domain, whois, network
- **Icon**: 🔍

## 使用方法

```bash
openclaw run domain-checker --domains="example.com,test.com,mysite.com"
```

## 特性

- ✅ WHOIS实时查询
- ✅ 批量检测
- ✅ 详细可用性报告
- ✅ JSON格式输出

## 示例

```bash
# 检查单个域名
openclaw run domain-checker --domains="example.com"

# 批量检查
openclaw run domain-checker --domains="example.com,test.com,mysite.com"
```

## 输出格式

```json
[
  {
    "domain": "example.com",
    "available": false,
    "status": "Taken",
    "whois": "Registration exists"
  },
  {
    "domain": "testavailable.com",
    "available": true,
    "status": "Available",
    "whois": "No registration found"
  }
]
```
