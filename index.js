const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
    type: "input",
    name: "installation",
    message: "Provide a step-by-step description of how to get the development environment running.",
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
    type: "input",
    message: "Email for related questions to project.",
    name: "email"
  },
  {
    type: 'list',
    message: "Choose a license for your project.",
    choices: ['MIT License', 'The Unlicense', 'Apache License 2.0', 'GNU General Public License v3.0', 'Mozilla Public License 2.0', 'Other'],
    name: 'license'
  },
  {
    type: 'input',
    message: "Please specify the license for your project.",
    name: 'customLicense',
    when: function(answers) {
      return answers.license === 'Other';
    }
  }
];

// Function to write README file
function writeToFile(fileName, userInputs) {
  let markDown = generateMarkdown(userInputs);

  let filePath = "./docs/" + fileName;

  fs.writeFileSync(filePath, markDown, function () {
    console.log("README.md has been generated.");
  });
}

function writeToFile(fileName, userInputs) {
    let markDown = generateMarkdown(userInputs);
    console.log(markDown, fileName, userInputs, "hello");
  
    fs.writeFileSync(fileName, markDown, function () {
      console.log("README.md has been generated.");
    });
  }

// Function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      let readMeData = generateMarkdown(answers);
      writeToFile("README.md", readMeData);
      console.log("README.md has been generated successfully.");
    })
    .catch((err) => {
      console.log("An error occurred while generating the README file:", err);
    });
}

// Function call to initialize program
init();