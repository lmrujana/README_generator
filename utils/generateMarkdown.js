// function to generate markdown for README
function generateMarkdown(data) {
  let license;
  let licenseLink;

  switch(data.license){
    case 'Apache':
      license = 'Apache%202.0';
      licenseLink = 'Apache-2.0';
      break;
    case 'BSD':
      license = 'BSD%203--Clause';
      licenseLink = 'BSD-3-Clause';
      break;
    case 'MIT':
      license = 'MIT';
      licenseLink = 'MIT';
      break;
    case 'Mozilla':
      license = 'MPL%202.0';
      licenseLink = 'MPL-2.0';
  };

  return `# ${data.title}

  ## Table of Contents
  1. [Description](#description "Description")
  2. [Installation](#installation "Installation")
  3. [Usage](#usage "Usage")
  4. [License](#license "License")
  5. [Contribution](#contribution "Contributing")
  6. [Tests](#tests "Tests")
  7. [Questions](#questions "Questions")

  ## Description
  [![License](https://img.shields.io/badge/License-${license}-blue.svg "License Badge")](https://opensource.org/licenses/${licenseLink})

  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  For more information on the license for this project, please click on the following link:
  [License](https://opensource.org/licenses/${licenseLink})

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions regarding this application, please contact me at:  
  [GitHub Page](https://github.com/${data.questions})  
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
