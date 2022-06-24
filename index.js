const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkDown = require('./utils/generateMarkdown.js')
const path = require('path') 


const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What will be the title for this project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please write an appropriate description for this app?',
    },

    {
        type: 'input',
        name: 'instal',
        message: 'Please write instructions on how install dependecies to run this app: ',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please write the usage information for this app: ',
    },

    {
        type: 'option',
        name: 'test',
        message: 'Please write down the instructions on how to test this app: ',
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'Please enter contributors, if applicable: ',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please choose a lincense for this app: ',
        choices: ['MIT', 'BSD 3', 'APACHE 2.0', 'GPL 3.0', 'None'],
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
    },
];


function writeToFile(fileName, data) {
    fs.writeFileSync(fileName + '.md', data, (err) => {
        err ? console.log("whoops, error") : console.log("made my day")
    });
};



function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log('README is being created...');
            writeToFile('README', generateMarkDown(response))
        });
};


init();