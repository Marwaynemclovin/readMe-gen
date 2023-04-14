function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

![License Badge](https://img.shields.io/badge/license-${data.license}-green)

This application is covered by the ${data.license} license.

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;