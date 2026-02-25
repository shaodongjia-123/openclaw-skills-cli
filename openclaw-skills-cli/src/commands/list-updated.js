const chalk = require('chalk');
const ora = require('ora');
const fs = fs.promises;
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
    name: '客户画像分析技能',
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
  },
  'video-content-creator': {
    name: '视频内容创作技能',
    englishName: 'Video Content Creator',
    description: 'AI驱动的短视频内容创作工具，专为TikTok、抖音平台优化',
    version: '1.0.0',
    author: 'OpenClaw Team',
    tags: ['video', 'creator', 'tiktok', 'content', 'script'],
    icon: '🎬',
    isNew: true
  },
  'social-trend-monitor': {
    name: '社交媒体趋势监控技能',
    englishName: 'Social Trend Monitor',
    description: '监控东南亚地区TikTok、Facebook等社交媒体平台的热门话题和趋势',
    version: '1.0.0',
    author: 'OpenClaw Team',
    tags: ['social', 'monitoring', 'trending', 'analytics'],
    icon: '📊',
    isNew: true
  },
  'competitor-scraper': {
    name: '竞品数据抓取技能',
    englishName: 'Competitor Scraper',
    description: '抓取Shopee、Lazada等平台的竞品数据，用于选品分析',
    version: '1.0.0',
    author: 'OpenClaw Team',
    tags: ['ecommerce', 'scraper', 'shopee', 'lazada', 'data'],
    icon: '🌐',
    isNew: true
  },
  'tiktok-content-analyzer': {
    name: 'TikTok内容分析技能',
    englishName: 'TikTok Content Analyzer',
    description: '深度分析TikTok热门视频内容，提取成功要素和创作策略',
    version: '1.0.0',
    author: 'OpenClaw Team',
    tags: ['tiktok', 'content-analysis', 'video', 'viral', 'marketing'],
    icon: '📺',
    isNew: true
  }
};

async function listSkills() {
  const spinner = ora('Loading skills...').start();

  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    spinner.stop();

    console.log(chalk.bold('\n📦 Available Skills (10 skills):\n'));

    Object.entries(skillsData).forEach(([key, skill], index) => {
      const status = skill.isNew ? '✨ NEW!' : '';
      console.log(`${skill.icon} ${key.padEnd(30)} ${skill.name} ${status}`);
      console.log(`   ${chalk.gray(skill.description)}`);
      console.log(`   ${chalk.dim(`Tags: ${skill.tags.join(', ')}`)}\n`);
    });

    console.log(chalk.gray('─'.repeat(60)));
    console.log(chalk.yellow('💡 New: 4个跨境电商专用技能！🛒️️ 东南亚TikTok专属！'));
    console.log(chalk.gray('🎨 Frontend - UI/Storefront');
    console.log(chalk.gray('🌐 Competitor - Shopee/Lazada数据'));
    console.log(chalk.gray('🎬 Video - 短视频创作'));
    console.log(chalk.gray('📊 Trends - 热门趋势'));
    console.log(chalk.gray('📺 TikTok - 专属TikTok分析'));
    console.log(chalk.gray('🎯 Lead - 客户画像分析'));
    console.log(chalk.gray('📝 Research - 研究/文案'));
    console.log(chalk.gray('💳 Stripe - 支付集成'));
    console.log(chalk.gray('🔍 Domain - 域名查询'));
    console.log(chalk.gray('🛠️ Creator - 创建自定义技能'));
    console.log(chalk.gray('────────────────────────────────────────────────'));
    console.log(chalk.dim('Run `openclaw info <skill>` for detailed information') + '\n');

  } catch (error) {
    spinner.fail(chalk.red('Failed to load skills'));
    console.error(error);
    process.exit(1);
  }
}

module.exports = { listSkills, skillsData };
