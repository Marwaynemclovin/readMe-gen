// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What was your motivation?",
        name: 'descriptionMotivation',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A motivation is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What problem does the project solve?",
        name: 'descriptionSolve',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A solution is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What did you learn?",
        name: 'descriptionLearn',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("What was learnt required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Provide instructions and examples for use.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "List your collaborators.",
        name: 'credits'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['MIT License', 'The  Unlicense', 'Other'],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, userInputs) {
    let markDown = generateMarkdown(userInputs);
    console.log(markDown, fileName, userInputs, "hello");
  
    fs.writeFileSync(fileName, markDown, function () {
      console.log("README.md has been generated.");
    });
  }
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            console.log("Answers and generated markdown:", answers, markdown);
            writeToFile("readMe.md", markdown);
        })
        .catch((error) => {
            if (error.isTtyErr) {
                console.error("Prompt could not be rendered in the current environment. Try running this program in a terminal or command prompt instead.");
            } else {
                console.error("An error occurred while generating the readme file:", error);
            }
        });
}


// Function call to initialize app
init();
