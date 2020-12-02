const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for this project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this application used?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data), (err) => err ? console.log(err) : console.log('File generated!'));
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers =>
        {writeToFile('README.md', answers)
    });
};

// function call to initialize program
init();
