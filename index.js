const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('.utils/generateMarkdown');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usefaq',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contibutefaq',
        message: 'What does the user need to know about contributing to the repo?'
    },

];

// function to write README file
function writeToFile(fileName, data) {
    // Use FS to write the responses to the markdown file.
    fs.writeFile(fileName, data, (error) =>{
        // If there is an error will stop the process and report an error.
        if (error) {
            console.error(error);
            return;
        }
        // Output a message to indicate the markdown file has been successfully created.
        console.log(`Your ${data.title} README.md file has been created.`);
    });
}

// function to initialize program
function init() {

}

// function call to initialize program
init();