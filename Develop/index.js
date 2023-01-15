// the following are the packages needed for this application
const inquirer = require('inquirer');

//this will impoirt the fs package
const fs = require('fs');

// Created an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Hey there silly goose! What is the title of your project?',
        }, {
            type: 'input',
            name: 'description',
            message: 'Tell me, what is your project about?',
        }, {
            type: 'input',
            name: 'installation',
            message: 'What do the people need to install in order to use your project? Give proper installation instructions.',
        }, {
            type: 'input',
            name: 'contributing',
            message: 'Explain how people can make contributions to your code!',
        }, {
            type: 'input',
            name: 'tests',
            message: 'Is there a way to test your project?',
        }, {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
        }, {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        }, {
            type: 'checkbox',
            name: "license",
            message: "Last question buckaroo, What type of license did ya want?",
            choices: [
                "MIT",
                "Apache",
                "GPL",
                "BSD",
                "None"
            ]
        }
    ]);
};

// this function is using the writeToFile method that literally allows us the ability to create files!!! 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
};

// TODO: Create a function to initialize app
//what do they meaaaaaaaan
function init() { }

// Function call to initialize app
init();
