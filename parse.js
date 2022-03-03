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
    <h2>${manager.teamManagerName}</h2>
    <h3>Manager</h3>
        <section class="card-items">
        <h4>ID: ${manager.employeeID}</h4>
        <h4>Email: <a href="mailto: ${manager.email}">${manager.email}</a></h4>
        <h4>Office Number: ${manager.officeNumber}</h4>
        </section>
    </div>

    ${
        engineers.map(element => {
            return renderEngineer(element)
        })
    }

    ${
        interns.map(element => {
            return renderIntern(element)
        })
    }

    </main>
    </body>
    </html>
    `;
};


const renderEngineer = ({engineerName, engineerID, engineerEmail, engineerGithub, engineerGithubUsername}) => {
    return `
    <div class="card">
        <h2>${engineerName}</h2>
        <h3>Engineer</h3>
        <h4>ID: ${engineerID}</h4>
        <h4>Email: <a href="mailto: ${engineerEmail}">${engineerEmail}</a></h4>
        <h4>Github: <a href ="${engineerGithub}" target="_blank">${engineerGithubUsername}</a></h4>
    </div>
    `
}

// Create const for interns
const renderIntern = ({internName, internEmail, internSchool}) => {
    return `
    <div class="card">
        <h2>${internName}</h2>
        <h3>Intern</h3>
        <h4>Email: <a href="mailto: ${internEmail}">${internEmail}</a></h4>
        <h4>School: ${internSchool}</h4>
    </div>
    `
}


// Connects parsemd to index.js
module.exports = parser;
