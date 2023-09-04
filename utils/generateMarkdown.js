
// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
- ${data.description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)

## Installation
- ${data.installation}

## Usage
- ${data.usage}

## Credits
- ${data.credits}

## License

![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application is covered by the ${data.license} license. 

## Features
- ${data.features}

## Tests
- ${data.tests}

## Reach Out
- ${data.github}

- ${data.email}

- ${data.contact}

`;
};

module.exports = generateMarkdown;
