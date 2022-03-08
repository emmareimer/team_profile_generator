# Team Profile Generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## Description
The Team Profile Generator can be used to create an HTML page that displays credentials of a work team.
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#testing)
- [Questions](#questions)
- [Sources](#sources)

## Installation
1. Clone git hub repo. 
2. Install Nodejs. 
3. Install inquirer in to the file using the integrated terminal.
4. Make sure style.css file is linked in the parse.js file for the rendered HTML
  
## Usage
Using the terminal command `node index.js`, users will be able to create an html file for a team profile using nodejs. The user will be prompted to add their employee information and then after each employee is added will be asked if they'd like to 1. add an engineer, 2. add an intern, or 3. finish building their team. When they are finished building their team, the HTML file will be rendered. 

The team profile HTML file will include a card div for each employee. The cards will be color coded based on the employees role - manager, engineer, or intern. It will include the employee role, name, ID, and email, and other specifics based on their roles - such as github username for engineers, and school for interns. The emails will link to open an outgoing email in the user's email program. The github username will link to the github profile. 

The team profile will be created in a log.html file and each time the user uses the node command, the new informatinon will be appended to the end of that file. I decided to append the file just in case the user did not want to override with each new command and lose the previous data.

The following video shows the functionality of the program:
[Link to Video](https://drive.google.com/file/d/1Wy7XX14HI2lX6d3npa4uCyKtobvw1BIM/view)

## Testing
There are 4 tests included in the repo that test the 4 classes as well as their related functions - Employee, Engineer, Intern, and Manager. To run the tests, make sure inquirer has been downloaded and run `npm run test` in the integrated terminal.

## License
The MIT License

## Questions?

Contact Info:

Github profile: emmareimer

Email: emma@beinproximity.com

## Sources
Nodejs, Inquirer NPM, Javascript
  
    