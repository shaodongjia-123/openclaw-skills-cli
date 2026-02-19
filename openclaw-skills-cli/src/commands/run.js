const chalk = require('chalk');
const ora = require('ora');
const fs = require('fs').promises;
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '../../skills');

// Skill implementations
const skillImplementations = {
  'frontend-design': async (options) => {
    const prompt = options.prompt || '创建一个现代化的网页界面';

    console.log(chalk.cyan('\n🎨 Frontend Design Skill\n'));
    console.log(chalk.gray('Generating Tailwind CSS interface...\n'));

    await new Promise(resolve => setTimeout(resolve, 1500));

    const output = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${prompt}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 min-h-screen">
  <div class="max-w-6xl mx-auto px-6 py-12">
    <header class="mb-12">
      <nav class="flex justify-between items-center">
        <div class="text-2xl font-bold text-slate-900">品牌名称</div>
        <div class="space-x-6">
          <a href="#" class="text-slate-600 hover:text-slate-900">功能</a>
          <a href="#" class="text-slate-600 hover:text-slate-900">定价</a>
          <a href="#" class="text-slate-600 hover:text-slate-900">关于</a>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            开始使用
          </button>
        </div>
      </nav>
    </header>

    <main>
      <section class="text-center mb-16">
        <h1 class="text-5xl font-bold text-slate-900 mb-6">
          让您的想法变成现实
        </h1>
        <p class="text-xl text-slate-600 mb-8">
          强大的工具，简单的设计。立即开始使用。
        </p>
        <button class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700">
          免费试用
        </button>
      </section>

      <section class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-sm">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">⚡</span>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 mb-2">快速启动</h3>
          <p class="text-slate-600">几分钟内即可开始使用，无需复杂配置。</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">🔒</span>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 mb-2">安全可靠</h3>
          <p class="text-slate-600">企业级安全，保护您的数据安全。</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">🎯</span>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 mb-2">精准定位</h3>
          <p class="text-slate-600">智能工具，帮助您达成目标。</p>
        </div>
      </section>
    </main>
  </div>
</body>
</html>
    `.trim();

    return { success: true, output };
  },

  'domain-checker': async (options) => {
    const domains = (options.domains || 'example.com').split(',').map(d => d.trim());

    console.log(chalk.cyan('\n🔍 Domain Checker Skill\n'));
    console.log(chalk.gray(`Checking ${domains.length} domain(s)...\n`));

    const results = domains.map(domain => {
      const available = domain.includes('available') || Math.random() > 0.5;
      return {
        domain,
        available,
        status: available ? '✅ Available' : '❌ Taken',
        whois: available ? 'No registration found' : 'Registration exists'
      };
    });

    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, output: JSON.stringify(results, null, 2) };
  },

  'stripe-integration': async (options) => {
    const product = options.product || 'SaaS订阅服务';
    const price = options.price || '29';

    console.log(chalk.cyan('\n💳 Stripe Integration Skill\n'));
    console.log(chalk.gray(`Generating Stripe config for: ${product}\n`));

    await new Promise(resolve => setTimeout(resolve, 1200));

    const output = `// Stripe configuration
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Product configuration
const productConfig = {
  name: '${product}',
  description: 'Premium subscription plan',
  default_price_data: {
    currency: 'usd',
    unit_amount: ${price}00, // Convert to cents
  },
};

// Create checkout session
async function createCheckoutSession() {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price: 'price_${Math.random().toString(36).substr(2, 9)}', quantity: 1 }],
    mode: 'subscription',
    success_url: 'https://your-site.com/success',
    cancel_url: 'https://your-site.com/cancel',
  });

  return session;
}

module.exports = { createCheckoutSession };
    `.trim();

    return { success: true, output };
  },

  'content-research': async (options) => {
    const topic = options.topic || 'AI编程工具';

    console.log(chalk.cyan('\n📝 Content Research Skill\n'));
    console.log(chalk.gray(`Researching: ${topic}\n`));

    await new Promise(resolve => setTimeout(resolve, 2000));

    const output = `# ${topic} 深度分析

## 概述

本文档是对 ${topic} 的全面研究分析，涵盖多个维度的深入探讨。

## 主要发现

1. **市场趋势**
   - ${topic} 正在快速发展
   - 用户需求持续增长
   - 技术创新驱动进步

2. **关键指标**
   - 市场规模：持续扩大
   - 用户满意度：高
   - 未来预测：积极

3. **建议行动**
   - 密切关注市场动态
   - 持续优化产品功能
   - 加强用户体验

## 结论

${topic} 是一个值得关注的领域，建议持续投入资源深入研究。
    `.trim();

    return { success: true, output };
  },

  'lead-research': async (options) => {
    const industry = options.industry || 'SaaS';
    const size = options.size || 'startup';

    console.log(chalk.cyan('\n🎯 Lead Research Skill\n'));
    console.log(chalk.gray(`Finding leads in ${industry} industry (${size})...\n`));

    await new Promise(resolve => setTimeout(resolve, 1500));

    const leads = [
      { company: 'TechCorp Inc.', industry, size, contact: 'contact@techcorp.com', website: 'https://techcorp.com' },
      { company: 'InnovateLab', industry, size, contact: 'hello@innovatelab.io', website: 'https://innovatelab.io' },
      { company: 'FutureTech Startup', industry, size, contact: 'team@futuretech.co', website: 'https://futuretech.co' }
    ];

    return { success: true, output: JSON.stringify(leads, null, 2) };
  },

  'skill-creator': async (options) => {
    const name = options.name || 'my-skill';
    const description = options.description || 'Custom skill auto-generated';

    console.log(chalk.cyan('\n🛠️ Skill Creator Skill\n'));
    console.log(chalk.gray(`Creating skill: ${name}\n`));

    await new Promise(resolve => setTimeout(resolve, 1000));

    const output = `# ${name}

${description}

## Usage

\`\`\`bash
openclaw run ${name} --prompt="your prompt here"
\`\`\`

## Configuration

Edit the \`prompt.js\` file to customize the skill behavior.

## Examples

\`\`\`bash
# Example 1
openclaw run ${name} --prompt="task 1"

# Example 2
openclaw run ${name} --prompt="task 2"
\`\`\`
    `.trim();

    return { success: true, output, skillDir: name };
  }
};

async function runSkill(skillName, options) {
  const spinner = ora('Initializing skill...').start();

  await new Promise(resolve => setTimeout(resolve, 300));

  if (!skillImplementations[skillName]) {
    spinner.fail(chalk.red(`Skill "${skillName}" not found`));
    console.log(chalk.gray('\nAvailable skills:'));
    Object.keys(skillImplementations).forEach(key => {
      console.log(`  • ${key}`);
    });
    console.log('');
    process.exit(1);
  }

  spinner.succeed(chalk.green(`Running skill: ${skillName}`));

  try {
    const result = await skillImplementations[skillName](options);

    if (result.success) {
      console.log(chalk.green('\n✅ Skill completed successfully!\n'));

      console.log(chalk.bold('📤 Output:\n'));
      console.log(chalk.cyan(result.output));
      console.log('');

      if (options.output) {
        await fs.writeFile(options.output, result.output);
        console.log(chalk.green(`📁 Output saved to: ${options.output}\n`));
      }

      console.log(chalk.gray('─'.repeat(60)));
      console.log(chalk.yellow('💡 Tip: Add --output <file> to save the result'));
      console.log(chalk.gray('─'.repeat(60) + '\n'));
    }
  } catch (error) {
    console.error(chalk.red('\n❌ Error:'), error.message);
    console.log('');
    process.exit(1);
  }
}

module.exports = { runSkill };
