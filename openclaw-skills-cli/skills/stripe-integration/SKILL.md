# Stripe集成技能

一键配置Stripe支付流程，自动生成配置文件。

## 信息

- **Version**: 1.0.0
- **Author**: OpenClaw Team
- **Tags**: payment, stripe, integration
- **Icon**: 💳

## 使用方法

```bash
openclaw run stripe-integration --product="SaaS订阅服务" --price=29
```

## 特性

- ✅ 自动生成配置文件
- ✅ 完整的支付流程代码
- ✅ 测试环境支持
- ✅ 多种定价模式

## 示例

```bash
# SaaS订阅（$29/月）
openclaw run stripe-integration --product="SaaS订阅服务" --price=29

# 一次性购买（$99）
openclaw run stripe-integration --product="高级版" --price=99 --type="one-time"

# 按用量计费
openclaw run stripe-integration --product="API调用" --price=0.01 --type="usage"
```

## 输出格式

- Stripe配置文件（Node.js）
- 前端集成代码
- 测试环境设置指南

## 集成步骤

1. 设置Stripe API密钥
2. 配置产品和价格
3. 实现checkout流程
4. 测试支付
5. 部署到生产环境
