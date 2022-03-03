const parser = ({manager, engineers}) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profiles</title>
    </head>
    <body>

    ${manager.teamManagerName}
    ${manager.employeeID}
    ${manager.email}
    ${manager.officeNumber}
    
    ====

    ${
        engineers.map(element => {
            return renderEngineer(element)
        })
    }
    </body>
    </html>
    `;
};


const renderEngineer = ({engineerName}) => {
    return `
    <div class="card">
    Name: ${engineerName}
    </div>
    `
}

// Create const for interns


// Connects parsemd to index.js
module.exports = parser;
