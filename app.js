// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {

return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: projectNameInput => {
            if(projectNameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        validate: description => {
            if(description) {
                return true;
            } else {
                console.log('You must provide context about your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? (Provide a step-by-step description of how to get the development environment running)',
        validate: installInstruct => {
            if(installInstruct) {
                return true;
            } else {
                console.log('You must provide a step-by-step description of how to get the development environment running!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. (Include screenshots as needed).',
        validate: usageInstruct => {
            if(usageInstruct) {
                return true;
            } else {
                console.log('You must provide instructions on how to use the application!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    
    {
        type: 'list',
        name: 'license',
        message: 'Does this project have a license?',
        choices: [ 'Apache License 2.0','MIT License','ISC license','GNU LGPLv3' ]
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application if any, then provide examples on how to run them here.',
    }
]);
};


questions();


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();