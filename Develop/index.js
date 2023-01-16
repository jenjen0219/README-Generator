// the following are the packages needed for this application
const inquirer = require('inquirer');

//this will impoirt the fs package
const fs = require('fs');

//this is where we make the connection from this file to the generateMarkDown
const generateMarkdown = require("./utils/generateMarkdown.js");


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
            name: 'usage',
            message: 'How can people use your project?',
        }, {
            type: 'input',
            name: 'contributing',
            message: 'Explain how people can make contributions to your code!',
        }, {
            type: 'input',
            name: 'tests',
            message: 'Is there a way to test your project or something that is undergoing testing?',
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

// this function initializes the process of adding this new file, and uses the previously made function in order to do so
function init() {
    promptQuestions()
        .then((data) => writeToFile("README.md", generateMarkdown.generateMarkdown(data)))
};

// Function call to initialize app
init();
