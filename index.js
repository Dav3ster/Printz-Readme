// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What title would you like your app to have?',      
    name: 'title',
},
{
    type: 'input',
    message: 'Please provide a basic description of your app',      
    name: 'description',
},
{
    type: 'input',
    message: 'What steps are needed for installation',      
    name: 'install',
},
{
    type: 'input',
    message: 'What are the instructions for using this app',      
    name: 'usage',
},
{
    type: 'input',
    message: 'Please provide contributors',      
    name: 'contribution',
},
{
    type: 'input',
    message: 'What instructions are needed for testing this app?',      
    name: 'testing',
},
{
    type: 'list',
    message: 'Please pick a License',      
    name: 'license',
    choices: ['MIT', 'Mozilla Public License', 'Apache', 'GPLv3', 'BSD 3-Clause','None']
},
{
    type: 'input',
    message: 'Please provide your github username',      
    name: 'github',
},
{
    type: 'input',
    message: 'What email can you be reached at?',      
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
            writeToFile('./GeneratedREADME.md', generateMarkdown(data));
            console.log(data)
            console.log(data.license)
            
    })    
}

// Function call to initialize app
init();