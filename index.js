const inquirer = require("inquirer");
const fs = require("fs");
const parser = require("./parse");
const manager = require("./utils/manager")
const engineer = require("./utils/engineer")
const intern = require("./utils/intern")

let team = {
  manager: "",
  engineers: [],
  interns: [],
};

const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "teamManagerName",
        message: "What is your employee's name?",
      },
      {
        type: "input",
        name: "employeeID",
        message: "What is your employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
    ])
    .then((answers) => {
      team.manager = new manager(answers.teamManagerName, answers.employeeID, answers.email, answers.officeNumber);
      showMenu();
    });
};

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's Github username?",
      },
    ])
    .then((answers) => {
      team.engineers.push(new engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub));
      showMenu();
    });
};

const addIntern = () => {
    inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "internID",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the intern's school?",
      },
    ])
    .then((answers) => {
      team.interns.push(new intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool));
      showMenu();
    });
};

// Gets called after every person gets added
const showMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menuChoice",
        message:
          "Would you like to add an engineer or an intern or to finish building your team?",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "Finish Building my Team",
        ],
      },
    ])
    .then((choice) => {
      const { menuChoice } = choice;
      if (menuChoice == "Add an Engineer") {
        addEngineer();
      } else if (menuChoice == "Add an Intern") {
        addIntern();
      } else {
        renderHtml();
      }
    });
};

const renderHtml = () => {
  const data = parser(team);
  // Appends data to log.md file/creates file if one is not already created
  fs.appendFile("log.html", data, (err) =>
    // if error, console log error, else console log commit logged
    err ? console.error(err) : console.log("Commit logged!")
  );
};

addManager();
