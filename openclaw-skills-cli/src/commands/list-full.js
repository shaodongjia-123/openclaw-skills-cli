const chalk = require('chalk');
const ora = require('ora');

const skillsData = {
  // Original 6 Skills
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

  // E-commerce Skills 7-10 (Phase 1)
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
  },

  // New Skills 11-15 (Phase 2 - From TikTok Shop Tutorial Analysis)
  'tiktok-shop-eligibility-checker': {
    name: 'TikTok Shop开店资格检查技能',
    englishName: 'TikTok Shop Eligibility Checker',
    description: '智能检查账号是否符合TikTok Shop开店要求，提供详细分析和建议',
    version: '1.0.0',
    author: 'OpenClaw Team',
    tags: ['tiktok', 'shop', 'eligibility', '开店', '审核'],
    icon: '✅',
    isNew: true
  },
  'account-matrix-planner': {
    name: '账号矩阵规划技能',
    englishName: 'Account Matrix Planner',
    description: '智能规划TikTok Shop账号矩阵，最大化账号起量效果，降低封号风险',
    version: '1.0.0',
    author: 'OpenClaw Team',
    tags: ['account-matrix', 'tiktok', 'growth', 'ip-isolation', 'risk-management'],
    icon: '📱',
    isNew: true
  },
  'tiktok-ai-content-factory': {
    name: 'TikTok AI内容工厂技能（增强版）',
    englishName: 'TikTok AI Content Factory',
    description: '一站式AI内容生产平台，为TikTok Shop账号矩阵批量生成高质量、差异化的短视频内容',
    version: '2.0.0',
    author: 'OpenClaw Team',
    tags: ['tiktok', 'content-factory', 'ai', 'batch-production', 'automation', '多语言'],
    icon: '🏭',
    isNew: true
  },
  'influencer-matcher': {
    name: '达人匹配推荐技能',
    englishName: 'Influencer Matcher',
    description: '智能匹配TikTok Shop适合的达人，预估合作效果，优化达人带货策略',
    version: '1.0.0',
    author: 'OpenClaw Team',
    tags: ['influencer', 'tiktok', '达人', 'partnership', 'roi-prediction', '合作模式'],
    icon: '🤝',
    isNew: true
  },
  'tool-stack-optimizer': {
    name: '工具栈优化推荐技能',
    englishName: 'Tool Stack Optimizer',
    description: '智能推荐TikTok Shop必备的运营工具栈，优化预算和效率，避免购买不必要的服务',
    version: '1.0.0',
    author: 'OpenClaw Team',
    tags: ['tools', 'optimization', 'stack', 'tiktok-shop', 'cost-optimization', 'budget'],
    icon: '🛠️',
    isNew: true
  }
};

async function listSkills() {
  const spinner = ora('Loading skills...').start();

  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    spinner.stop();

    console.log(chalk.bold('\n📦 Available Skills (15 skills):\n'));

    Object.entries(skillsData).forEach(([key, skill], index) => {
      const newTag = skill.isNew ? ' ✨ NEW!' : '';
      const phase = skill.isNew ? (index < 10 ? 'Phase 1' : 'Phase 2') : '';
      console.log(`${skill.icon} ${key.padEnd(40)} ${skill.name}${newTag}${phase}`);
      console.log(`   ${chalk.gray(skill.description)}`);
    });

    console.log(chalk.gray('\n─'.repeat(60)));
    console.log(chalk.yellow('🌟 Phase 2 - TikTok Shop专用工具（新增5个）'));
    console.log(chalk.gray('📊 新增: +5技能 → 总计15技能'));
    console.log(chalk.gray('🎯 定位: 东南亚TikTok跨境电商全流程解决方案'));
    console.log(chalk.gray('💰 目标: 12个月$50,000年收入'));
    console.log(chalk.gray('─'.repeat(60) + '\n'));

  } catch (error) {
    spinner.fail(chalk.red('Failed to load skills'));
    console.error(error);
    process.exit(1);
  }
}

module.exports = { listSkills, skillsData };
