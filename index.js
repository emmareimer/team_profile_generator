// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number

// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const inquirer = require("inquirer");
const fs = require("fs");
const parser = require("./parse");

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
        message: "What is your team manager's name?",
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
      team.manager = answers;
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
        name: "engineerGithubUsername",
        message: "What is the engineer's Github username?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's Github link?",
      },
    ])
    .then((answers) => {
      team.engineers.push(answers);
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
      team.interns.push(answers);
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
