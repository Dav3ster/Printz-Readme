// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the project title?',      
    name: 'title',
},
{
    type: 'input',
    message: 'Please add a description of the project.',      
    name: 'description',
},
{
    type: 'input',
    message: 'How is the app installed and run?',      
    name: 'install',
},
{
    type: 'input',
    message: 'What are the usage instructions for the app?',      
    name: 'usage',
},
{
    type: 'input',
    message: 'Who else contributed to this project?',      
    name: 'contribution',
},
{
    type: 'input',
    message: 'What are the instructions for testing the app?',      
    name: 'testing',
},
{
    type: 'checkbox',
    message: 'What License does the app use?',      
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'Eclipse 1.0', 'GNU GPL v3', 'Mozilla Public License'],
},
{
    type: 'input',
    message: 'What is your GitHub username?',      
    name: 'github',
},
{
    type: 'input',
    message: 'What is your contact email?',      
    name: 'email',
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(error) {
        console.log(fileName)
        console.log(data)
        if (error){
            return console.log(error)
        }else {
            console.log("success")
        }
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile('./README.md', generateMarkdown(data));
            console.log(data)
            
    })    
}

// Function call to initialize app
init();