// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name:'username',
        message: 'Enter your Github username?',
    },
    {
        type: 'input',
        name:'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name:'name',
        message: "What is the project's name?",
    },
    {
        type: 'input',
        name:'description',
        message: 'Type the description of your project?',
    },
    {
        type: 'input',
        name:'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name:'use',
        message: 'What instructions does your user need for how to use the repo?'
    },
    {
        type: 'input',
        name:'contributions',
        message: 'What instructions does your user need in regards to contributing to the repo?',
    },
    {
        type:'input',
        name:'features',
        message:'What are the features your application offers?',
    },
    {
        type:'input',
        name: 'credit',
        message:'Who should receive credit for their work on the application?'
    },
    {
        type: 'list',
        name:'license',
        message: 'What license does your project have?',
        choices: ['Mit', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({...inquirerResponses}));
});
}

// Function call to initialize app
init();
