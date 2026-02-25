const chalk = require('chalk');
const ora = require('ora');
const fs = require('fs').promises;
const path = require('path');

// 从 list.js 导入 skillsData
const { skillsData } = require('./list.js');

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
  console.log(chalk.cyan(`  ${skill.englishName}: ${skill.usage || `openclaw run ${skillName} [options]`}\n`));

  console.log(chalk.bold('📦 Tags:'));
  skill.tags.forEach((tag, i) => {
    console.log(`  ${i + 1}. ${tag}`);
  });
  console.log('');

  console.log(chalk.bold('📤 Output:'));
  console.log(chalk.gray(skill.output || '具体输出格式见技能详情页'));

  console.log(chalk.bold('✅ 特色:'));
  skill.features || skill.featuresList;

  console.log('');

  console.log(chalk.bold('📝 更多:'));
  console.log(chalk.gray('• 文档: SKILL.md'));
  console.log(chalk.gray('• 示区: GitHub Issues'));

  console.log(chalk.gray('─'.repeat(60)));
  console.log(chalk.yellow('Run `openclaw run ' + skillName + '` to use this skill'));
  console.log(chalk.gray('─'.repeat(60) + '\n'));
}

module.exports = { infoSkill };
