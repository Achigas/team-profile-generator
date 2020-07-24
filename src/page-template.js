const generateManager = Manager => {
    return `
    <div class="card mx-auto">
    <h5 class="card-header">${Manager.name}<br  /><br  />${Manager.role}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Manager.id}</li>
        <li class="list-group-item">Email: ${Manager.email} </li>
        <li class="list-group-item">Office number: ${Manager.officeNumber}</li>
    </ul>
</div>`
}

const generateEngineers = engineersArr => {
        return `
        ${engineersArr
        .map(({ name, id, email, github, role }) => {
            return `
            <div class="card mx-auto">
                <h5 class="card-header">${name}<br  /><br  />${role}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: ${email} </li>
                    <li class="list-group-item">GitHub: ${github}</li>
                </ul>
            </div>
            `;
        })
        .join('')}
        `}

const generateInterns = internsArr => {
        return `
        ${internsArr
            .map(({ name, id, email, school, role }) => {
                return `
                <div class="card mx-auto">
                    <h5 class="card-header">${name}<br  /><br  />${role}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: ${email} </li>
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                </div>
                `;
            })
            .join('')}
            `};

module.exports = templateData => {

    // destructure page data by section
    const {interns, engineers, ...manager } = templateData;
    console.log(templateData)
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
        <nav class="navbar navbar-light bg-secondary text-center">
            <span class="navbar-brand mb-0 w-100 h1 text-white">Team</span>
        </nav>

      <main class="container my-5">
       ${generateManager(manager)}
       ${generateEngineers(engineers)}
       ${generateInterns(interns)}
      </main>
    </body>
    </html>
    `;
  };