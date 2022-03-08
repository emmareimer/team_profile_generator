const parser = ({manager, engineers, interns}) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profiles</title>
    </head>
    <body>

    <nav>
    <h1>My Team</h1>
    </nav>
    <main>

    <div class="card">
    <h2>${manager.getName()}</h2>
    <h3>Manager</h3>
        <section class="card-items">
        <h4>ID: ${manager.getId()}</h4>
        <h4>Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></h4>
        <h4>Office Number: ${manager.getOfficeNumber()}</h4>
        </section>
    </div>

    ${
        engineers.map(element => {
            return renderEngineer(element)
        }).join("")
    }

    ${
        interns.map(element => {
            return renderIntern(element)
        }).join("")
    }

    </main>
    </body>
    </html>
    `;
};


const renderEngineer = (engineer) => {
    return `
    <div class="engineer-card">
        <h2>${engineer.getName()}</h2>
        <h3>Engineer</h3>
        <h4>ID: ${engineer.getId()}</h4>
        <h4>Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></h4>
        <h4>Github: <a href ="www.github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></h4>
    </div>
    `
}

// Create const for interns
const renderIntern = (intern) => {
    return `
    <div class="intern-card">
        <h2>${intern.getName()}</h2>
        <h3>Intern</h3>
        <h4>ID: ${intern.getId()}</h4>
        <h4>Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></h4>
        <h4>School: ${intern.getSchool()}</h4>
    </div>
    `
}


// Connects parsemd to index.js
module.exports = parser;
