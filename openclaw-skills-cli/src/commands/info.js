const chalk = require('chalk');
const ora = require('ora');
const fs = require('fs').promises;
const path = require('path');

const skillsData = {
  'frontend-design': {
    name: '前端设计技能',
    description: '自动生成美观的Tailwind CSS界面，拒绝蓝紫渐变丑UI',
    usage: 'openclaw run frontend-design --prompt="创建一个现代化的电商网站首页"',
    examples: [
      '创建一个SaaS产品着陆页',
      '设计一个个人博客页面',
      '制作一个登录注册表单'
    ],
    features: [
      '✅ 现代化设计风格',
      '✅ 完整的响应式布局',
      '✅ 可访问性友好',
      '✅ 直接可用代码'
    ],
    output: '包含完整的HTML + Tailwind CSS代码',
    icon: '🎨'
  },
  'domain-checker': {
    name: '域名查询技能',
    description: '批量检测域名可用性，WHOIS实时查询',
    usage: 'openclaw run domain-checker --domains="example.com,test.com"',
    examples: [
      '检查单个域名: example.com',
      '批量检查: example.com,test.com,mysite.com'
    ],
    features: [
      '✅ WHOIS实时查询',
      '✅ 批量检测',
      '✅ 详细可用性报告'
    ],
    output: 'JSON格式的可用性报告',
    icon: '🔍'
  },
  'stripe-integration': {
    name: 'Stripe集成技能',
    description: '一键配置Stripe支付流程，自动生成配置文件',
    usage: 'openclaw run stripe-integration --product="SaaS订阅服务" --price=29',
    examples: [
      'SaaS订阅服务（$29/月）',
      '一次性购买产品（$99）',
      '按用量计费（$0.01/次）'
    ],
    features: [
      '✅ 自动生成配置文件',
      '✅ 完整的支付流程代码',
      '✅ 测试环境支持'
    ],
    output: 'Stripe配置文件 + 前端集成代码',
    icon: '💳'
  },
  'content-research': {
    name: '内容研究写作技能',
    description: '自动收集资料并生成文章，支持多源数据',
    usage: 'openclaw run content-research --topic="AI编程工具对比"',
    examples: [
      'AI编程工具对比',
      '前端框架2025趋势',
      'Web开发最佳实践'
    ],
    features: [
      '✅ 多源数据收集',
      '✅ 自动结构化内容',
      '✅ Markdown格式输出'
    ],
    output: '结构化的Markdown文章',
    icon: '📝'
  },
  'lead-research': {
    name: '潜在客户研究技能',
    description: '智能寻找B2B潜在客户，多维度筛选',
    usage: 'openclaw run lead-research --industry="SaaS" --size="startup"',
    examples: [
      'SaaS行业创业公司',
      '大型企业IT部门',
      '电商平台卖家'
    ],
    features: [
      '✅ 多维度筛选',
      '✅ 联系方式提取',
      '✅ 个性化挖掘'
    ],
    output: '潜在客户CSV列表',
    icon: '🎯'
  },
  'skill-creator': {
    name: '技能创建者技能',
    description: '快速创建自定义技能，支持模板生成',
    usage: 'openclaw run skill-creator --name="my-skill" --description="我的专属技能"',
    examples: [
      '创建自动化测试技能',
      '部署脚本生成技能',
      '文档生成技能'
    ],
    features: [
      '✅ 技能模板生成',
      '✅ 自动化测试框架',
      '✅ 文档生成'
    ],
    output: '完整的技能目录结构',
    icon: '🛠️'
  }
};

async function infoSkill(skillName) {
  const spinner = ora(`Loading info for ${skillName}...`).start();

  await new Promise(resolve => setTimeout(resolve, 500));
  spinner.stop();

  const skill = skillsData[skillName];

  if (!skill) {
    console.log(chalk.red(`\n❌ Skill "${skillName}" not found\n`));
    console.log(chalk.gray('Available skills:'));
    Object.keys(skillsData).forEach(key => {
      console.log(`  • ${key}`);
    });
    console.log('');
    return;
  }

  console.log(chalk.bold(`\n${skill.icon} ${skill.name}\n`));
  console.log(chalk.white(skill.description));
  console.log('');

  console.log(chalk.bold('📖 Usage:'));
  console.log(chalk.cyan(`  ${skill.usage}\n`));

  console.log(chalk.bold('📋 Features:'));
  skill.features.forEach(feature => {
    console.log(`  ${feature}`);
  });
  console.log('');

  console.log(chalk.bold('💡 Examples:'));
  skill.examples.forEach((example, index) => {
    console.log(`  ${index + 1}. ${chalk.dim(example)}`);
  });
  console.log('');

  console.log(chalk.bold('📤 Output:'));
  console.log(chalk.gray(skill.output));
  console.log('');

  console.log(chalk.gray('─'.repeat(60)));
  console.log(chalk.yellow('Run `openclaw run ' + skillName + '` to use this skill'));
  console.log(chalk.gray('─'.repeat(60) + '\n'));
}

module.exports = { infoSkill };
