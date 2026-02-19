const chalk = require('chalk');
const ora = require('ora');
const fs = require('fs').promises;
const path = require('path');

async function createSkill(name, options) {
  const template = options.template || 'standard';
  const description = options.description || 'Custom skill created with OpenClaw';
  const author = options.author || 'Unknown';

  const spinner = ora('Creating skill...').start();

  await new Promise(resolve => setTimeout(resolve, 500));

  const skillDir = path.join(process.cwd(), name);

  try {
    await fs.mkdir(skillDir, { recursive: true });

    // Create SKILL.md
    const skillMd = `# ${name}

${description}

## Information

- **Version**: 1.0.0
- **Author**: ${author}
- **Template**: ${template}
- **Created**: ${new Date().toISOString().split('T')[0]}

## Usage

\`\`\`bash
openclaw run ${name} --prompt="your prompt here"
\`\`\`

## Configuration

Edit the following files to customize skill behavior:
- \`prompt.js\`: Main logic and AI prompt
- \`rules.md\`: Validation rules and constraints
- \`config.json\`: Skill configuration

## Examples

\`\`\`bash
# Example 1
openclaw run ${name} --prompt="task 1"

# Example 2
openclaw run ${name} --prompt="task 2"
\`\`\`

## Contributing

Feel free to submit improvements and bug fixes!
`;
    await fs.writeFile(path.join(skillDir, 'SKILL.md'), skillMd);

    // Create prompt.js
    const promptJs = `/**
 * ${name} - Skill Prompt
 *
 * This file contains the main logic for the skill.
 * Modify the execute() function to implement your custom behavior.
 */

module.exports = {
  /**
   * Execute the skill with given options
   * @param {Object} options - User provided options
   * @returns {Promise<Object>} Result object with success and output
   */
  async execute(options) {
    // Process input options
    const prompt = options.prompt || '';
    const input = options.input || '';
    const context = options.context || {};

    try {
      // Implement your skill logic here
      console.log(\`\\n🎯 ${name}\\n\`);
      console.log(\`Prompt: \${prompt}\\n\`);

      // Your processing logic...
      const result = \`Result for: \${prompt}\`;

      return {
        success: true,
        output: result
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
};
`;
    await fs.writeFile(path.join(skillDir, 'prompt.js'), promptJs);

    // Create rules.md
    const rulesMd = `# ${name} - Rules and Constraints

## Execution Rules

1. Always validate input parameters
2. Provide clear error messages
3. Return structured output
4. Handle edge cases gracefully

## Quality Standards

- Code must be production-ready
- Follow best practices
- Include proper error handling
- Document complex logic

## Constraints

- Timeout: 60 seconds maximum
- Input size: Maximum 1MB
- Output format: JSON or plain text

## Validation Checklist

- [ ] Input validation
- [ ] Error handling
- [ ] Output formatting
- [ ] Documentation
`;
    await fs.writeFile(path.join(skillDir, 'rules.md'), rulesMd);

    // Create config.json
    const configJson = JSON.stringify({
      name,
      version: '1.0.0',
      description,
      author,
      template,
      created: new Date().toISOString(),
      settings: {
        timeout: 60000,
        maxInputSize: 1048576,
        outputFormat: 'text'
      }
    }, null, 2);
    await fs.writeFile(path.join(skillDir, 'config.json'), configJson);

    // Create examples directory
    const examplesDir = path.join(skillDir, 'examples');
    await fs.mkdir(examplesDir, { recursive: true });

    // Create example file
    await fs.writeFile(
      path.join(examplesDir, 'basic.js'),
      `// Basic usage example for ${name}

\`\`\`bash
openclaw run ${name} --prompt="example prompt"
\`\`\`
`
    );

    spinner.succeed(chalk.green(`Skill "${name}" created successfully!`));

    console.log(chalk.cyan(`\n📁 Created directory: ${skillDir}\n`));
    console.log(chalk.bold('Files created:'));
    console.log(`  • SKILL.md      - Skill documentation`);
    console.log(`  • prompt.js     - Main logic file`);
    console.log(`  • rules.md      - Execution rules`);
    console.log(`  • config.json   - Configuration`);
    console.log(`  • examples/     - Usage examples`);
    console.log('');

    console.log(chalk.yellow('💡 Next steps:'));
    console.log(`  1. cd ${name}`);
    console.log('  2. Edit prompt.js to implement your skill');
    console.log('  3. Run: openclaw run ' + name + ' --prompt="test"');
    console.log('');

  } catch (error) {
    spinner.fail(chalk.red('Failed to create skill'));
    console.error(error);
    process.exit(1);
  }
}

module.exports = { createSkill };
