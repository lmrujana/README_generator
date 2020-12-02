// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  1. [Description](#description "Description")
  2. [Installation](#installation "Installation")
  3. [Usage](#usage "Usage")
  4. [License](#license "License")
  5. [Contributing](#contributing "Contributing")
  6. [Tests](#tests "Tests")
  7. [Questions](#questions "Questions")

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License

  ## Contributing
  ${data.contribution}

  ## Tests

  ## Questions
  [GitHub Page](https://github.com/${data.questions})  
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
