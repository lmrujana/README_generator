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

  ##Description


  ##Installation


  ##Usage


  ##License


  ##Contributing


  ##Tests
`;
}

module.exports = generateMarkdown;
