#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const ora = require('ora');

// Import commands
const { listSkills } = require('../src/commands/list');
const { runSkill } = require('../src/commands/run');
const { infoSkill } = require('../src/commands/info');
const { createSkill } = require('../src/commands/create');
const { exportSkill } = require('../src/commands/export');

const packageJson = require('../package.json');

// CLI configuration
program
  .name('openclaw')
  .description('🚀 OpenClaw Skills CLI - Standardized AI coding skills for maximum productivity')
  .version(packageJson.version);

// Helper: ASCII art banner
function showBanner() {
  console.log(chalk.cyan(`
   ____            __  __
  / __/__  _____  / /_/ /_  _______
 / /_/ _ \\/ ___/ / __/ __ \\/ ___(_)
/ __/  __/ /    / /_/ /_/ / /    //
/_/  \\___/_/     \\__/\\____/_/    /_/
      S K I L S  C L I
  `));
  console.log(chalk.gray(`Version ${packageJson.version} | https://github.com/openclaw/skills-cli\n`));
}

// Command: list skills
program
  .command('list')
  .alias('ls')
  .description('List all available skills')
  .action(async () => {
    showBanner();
    await listSkills();
  });

// Command: run a skill
program
  .command('run <skill>')
  .description('Run a specific skill')
  .option('-p, --prompt <text>', 'Prompt for the skill')
  .option('-i, --input <path>', 'Input file path')
  .option('-o, --output <path>', 'Output file path')
  .option('--model <name>', 'AI model to use (claude/gpt/openai)', 'claude')
  .action(async (skill, options) => {
    showBanner();
    await runSkill(skill, options);
  });

// Command: skill info
program
  .command('info <skill>')
  .description('Show detailed information about a skill')
  .action(async (skill) => {
    showBanner();
    await infoSkill(skill);
  });

// Command: create a new skill
program
  .command('create <name>')
  .description('Create a new skill from template')
  .option('-t, --template <type>', 'Template type (standard/advanced)', 'standard')
  .option('-d, --description <text>', 'Skill description')
  .option('--author <name>', 'Skill author name')
  .action(async (name, options) => {
    showBanner();
    await createSkill(name, options);
  });

// Command: export skill
program
  .command('export <skill>')
  .description('Export a skill for sharing')
  .option('-f, --format <type>', 'Export format (zip/tar/zip)', 'zip')
  .option('-o, --output <path>', 'Output path')
  .action(async (skill, options) => {
    showBanner();
    await exportSkill(skill, options);
  });

// Parse arguments
program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  showBanner();
  program.outputHelp();
}

// Global error handler
process.on('unhandledRejection', (error) => {
  console.error(chalk.red('\n❌ Error:'), error.message);
  process.exit(1);
});
