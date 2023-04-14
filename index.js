const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Prompt the user for input
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv2', 'Apache', 'Unlicense'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter instructions for running tests for your project:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
])
  .then((answers) => {
    // Generate the markdown content
    const markdownContent = generateMarkdown(answers);

    // Write the markdown content to a file in the 'docs' folder
    fs.writeFile('docs/README.md', markdownContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README file generated in the docs folder!');
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });