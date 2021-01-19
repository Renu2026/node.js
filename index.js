const generateMarkDown= require("./utils/generateMarkdown")
// array of questions for user
const questions = [
    {
        "type": "input",
        "name": "title",
        "message":"What is project title?"

    },
    {
        "type": "input",
        "name": "description",
        "message":"What is project description?"
    },
    {
        "type": "list",
        "name": "license",
        "message": "what is your project license?",
        "choices": [
            "bsd",
            "mit",
            "gpl",
            "apache"
        ]
    },
    

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    console.log("init")
    var inquirer = require('inquirer');
    inquirer
    .prompt(
        questions
    )
    .then(answers => {
        console.log(answers)
       console.log( generateMarkDown(answers))
    })
    .catch(error => {
        if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else when wrong
        }
    });
}

// function call to initialize program
init();
