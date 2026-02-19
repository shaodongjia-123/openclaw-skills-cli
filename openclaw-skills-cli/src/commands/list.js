const chalk = require('chalk');
const ora = require('ora');
const fs = require('fs').promises;
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '../../skills');

const skillsData = {
  'frontend-design': {
    name: '前端设计技能',
    englishName: 'Frontend Design',
    description: '自动生成美观的Tailwind CSS界面，拒绝蓝紫渐变丑UI',
    version: '1.0.0',
    author: 'OpenClaw Team',
    tags: ['frontend', 'ui', 'react', 'tailwind'],
    icon: '🎨'
  },
  'domain-checker': {
    name: '域名查询技能',
    englishName: 'Domain Checker',
    description: '批量检测域名可用性，WHOIS实时查询',
    version: '1.0.0',
    author: 'OpenClaw Team',
    tags: ['domain', 'whois', 'network'],
    icon: '🔍'
  },
  'stripe-integration': {
    name: 'Stripe集成技能',
    englishName: 'Stripe Integration',
    description: '一键配置Stripe支付流程，自动生成配置文件',
    version: '1.0.0',
    author: 'OpenClaw Team',
    tags: ['payment', 'stripe', 'integration'],
    icon: '💳'
  },
  'content-research': {
    name: '内容研究写作技能',
    englishName: 'Content Research',
    description: '自动收集资料并生成文章，支持多源数据',
    version: '1.0.0',
    author: 'OpenClaw Team',
    tags: ['research', 'writing', 'content'],
    icon: '📝'
  },
  'lead-research': {
    name: '潜在客户研究技能',
    englishName: 'Lead Research',
    description: '智能寻找B2B潜在客户，多维度筛选',
    version: '1.0.0',
    author: 'OpenClaw Team',
    tags: ['b2b', 'sales', 'research'],
    icon: '🎯'
  },
  'skill-creator': {
    name: '技能创建者技能',
    englishName: 'Skill Creator',
    description: '快速创建自定义技能，支持模板生成',
    version: '1.0.0',
    author: 'OpenClaw Team',
    tags: ['tools', 'creator', 'template'],
    icon: '🛠️'
  }
};

async function listSkills() {
  const spinner = ora('Loading skills...').start();

  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    spinner.stop();

    console.log(chalk.bold('\n📦 Available Skills:\n'));

    Object.entries(skillsData).forEach(([key, skill]) => {
      console.log(`${skill.icon} ${chalk.bold.cyan(key.padEnd(20))} ${skill.name}`);
      console.log(`   ${chalk.gray(skill.description)}`);
      console.log(`   ${chalk.dim(`Tags: ${skill.tags.join(', ')}`)}`);
      console.log('');
    });

    console.log(chalk.gray('\n─'.repeat(60)));
    console.log(chalk.yellow('💡 Tip: Run `openclaw info <skill>` for detailed information'));
    console.log(chalk.gray('─'.repeat(60) + '\n'));

  } catch (error) {
    spinner.fail(chalk.red('Failed to load skills'));
    console.error(error);
    process.exit(1);
  }
}

module.exports = { listSkills };
