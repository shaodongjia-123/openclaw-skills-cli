# 潜在客户研究技能

智能寻找B2B潜在客户，多维度筛选。

## 信息

- **Version**: 1.0.0
- **Author**: OpenClaw Team
- **Tags**: b2b, sales, research
- **Icon**: 🎯

## 使用方法

```bash
openclaw run lead-research --industry="SaaS" --size="startup"
```

## 特性

- ✅ 多维度筛选
- ✅ 联系方式提取
- ✅ 个性化挖掘
- ✅ CSV格式输出

## 示例

```bash
# SaaS行业创业公司
openclaw run lead-research --industry="SaaS" --size="startup"

# 大型企业IT部门
openclaw run lead-research --industry="Enterprise" --size="large"

# 电商平台卖家
openclaw run lead-research --industry="E-commerce" --size="medium"
```

## 筛选维度

- **行业**：SaaS, E-commerce, Fintech, Healthtech等
- **规模**：Startup, SME, Large, Enterprise
- **地区**：北美, 欧洲, 亚太等
- **融资阶段**：Seed, Series A, Series B等

## 输出格式

```csv
Company,Industry,Size,Contact,Website
TechCorp Inc.,SaaS,startup,contact@techcorp.com,https://techcorp.com
```
