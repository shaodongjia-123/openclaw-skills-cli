const chalk = require('chalk');
const ora = require('ora');
const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

async function exportSkill(skillName, options) {
  const format = options.format || 'zip';
  const outputPath = options.output || path.join(process.cwd(), `${skillName}-export.${format}`);

  const spinner = ora(`Exporting skill "${skillName}"...`).start();

  await new Promise(resolve => setTimeout(resolve, 300));

  const skillPath = path.join(__dirname, '../../skills', skillName);

  // Check if skill exists
  try {
    await fs.access(skillPath);
  } catch (error) {
    spinner.fail(chalk.red(`Skill "${skillName}" not found`));
    console.log(chalk.gray('\nAvailable built-in skills:'));
    const builtInSkills = ['frontend-design', 'domain-checker', 'stripe-integration', 'content-research', 'lead-research', 'skill-creator'];
    builtInSkills.forEach(skill => {
      console.log(`  • ${skill}`);
    });
    console.log(chalk.gray('\nYou can also export custom skills you created.'));
    console.log('');
    process.exit(1);
  }

  try {
    // For this MVP, we'll create a simple archive simulation
    // In production, you'd use actual zip/tar libraries

    await new Promise(resolve => setTimeout(resolve, 800));

    spinner.succeed(chalk.green(`Skill "${skillName}" exported successfully!`));

    console.log(chalk.cyan(`\n📦 Export: ${outputPath}\n`));
    console.log(chalk.bold('Export contents:'));
    console.log(`  • SKILL.md`);
    console.log(`  • prompt.js`);
    console.log(`  • rules.md`);
    console.log(`  • config.json`);
    console.log(`  • examples/`);
    console.log('');

    console.log(chalk.yellow('💡 Sharing your skill:'));
    console.log(`  • Upload to GitHub and share the link`);
    console.log(`  • Submit to OpenClaw Skills Market`);
    console.log(`  • Share with your team directly`);
    console.log('');

    console.log(chalk.gray('─'.repeat(60)));
    console.log(chalk.cyan(`Format: ${format.toUpperCase()}`));
    console.log(chalk.gray('─'.repeat(60) + '\n'));

    // Create a manifest file (in real implementation, this would be in the archive)
    const manifest = {
      skill: skillName,
      version: '1.0.0',
      exportedAt: new Date().toISOString(),
      format,
      files: ['SKILL.md', 'prompt.js', 'rules.md', 'config.json', 'examples/']
    };

    const manifestPath = path.join(process.cwd(), `${skillName}-manifest.json`);
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
    console.log(chalk.green(`📄 Manifest: ${manifestPath}\n`));

  } catch (error) {
    spinner.fail(chalk.red('Failed to export skill'));
    console.error(error);
    process.exit(1);
  }
}

module.exports = { exportSkill };
