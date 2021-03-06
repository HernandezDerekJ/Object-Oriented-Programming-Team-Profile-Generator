function handleTeam(teamArray){
    let htmlCode;
    htmlCode = htmlHeader();
    console.log(teamArray);
    for(let x in teamArray){
        console.log(teamArray[x].getRole());
        if(teamArray[x].getRole() == "Manager"){htmlCode = htmlCode + managerHTML(teamArray[x]);}
        else if(teamArray[x].getRole() == "Engineer"){htmlCode = htmlCode + engineerHTML(teamArray[x]);}
        else if(teamArray[x].getRole() == "Intern"){htmlCode = htmlCode + internHTML(teamArray[x]);}
        else if(teamArray[x].getRole() == "Employee"){htmlCode = htmlCode + employeeHTML(teamArray[x]);}
    }
    htmlCode = htmlCode + htmlFoot();
    return htmlCode;
}
function htmlHeader(){
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team</title>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
       
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        
        <div class="jumbotron jumbotron-fluid jumbo_custom">
          <div class="container ">
            <h1 class="display-4 ">Team</h1>
          </div>
        </div>
    
        <div class="container card-deck p-5" id="cardContain">
    `
}
function htmlFoot(){
    return `
    </div>
    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script src="page-template.js"></script>
  </body>
</html>

    `
}

//Cards
function managerHTML(x){
    return `
    <div class="column" >
        <div class="card " style="width: 18rem;">
          <div class="card-header" style="background-color: cadetblue;">
            <div class="card-title" id="headerOne">${x.name}</div>
            <div class="card-subtitle" id="headerOne"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
                <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
            </svg> ${x.getRole()}</div>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${x.id}</li>
              <li class="list-group-item"><a href="mailto:${x.email}">Email: ${x.email}</a></li>
              <li class="list-group-item">Office Number: ${x.officeNumber}</li>
            </ul>
          </div>
        </div>
      </div>
  `
}
function engineerHTML(x){
    return `
    <div class="column" >
        <div class="card " style="width: 18rem;">
          <div class="card-header" style="background-color: cadetblue;">
            <div class="card-title" id="headerOne">${x.name}</div>
            <div class="card-subtitle" id="headerOne"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
              <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
            </svg> ${x.getRole()}</div>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${x.id}</li>
              <li class="list-group-item"><a href="mailto:${x.email}">Email: ${x.email}</a></li>
              <li class="list-group-item">Github: ${x.github}</li>
            </ul>
          </div>
        </div>
      </div>
    
    `
}
function internHTML(x){
    return `
    <div class="column" >
    <div class="card " style="width: 18rem;">
      <div class="card-header" style="background-color: cadetblue;">
        <div class="card-title" id="headerOne">${x.name}</div>
        <div class="card-subtitle" id="headerOne"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calculator-fill" viewBox="0 0 16 16">
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5zm0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1z"/>
        </svg> ${x.getRole()}</div>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${x.id}</li>
          <li class="list-group-item"><a href="mailto:${x.email}">Email: ${x.email}</a></li>
          <li class="list-group-item">School: ${x.school}</li>
        </ul>
      </div>
    </div>
  </div>
    `
}
function employeeHTML(x){
    return `
    <div class="column" >
        <div class="card " style="width: 18rem;">
          <div class="card-header" style="background-color: cadetblue;">
            <div class="card-title" id="headerOne">${x.name}</div>
            <div class="card-subtitle" id="headerOne"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg> ${x.getRole()}</div>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${x.id}</li>
              <li class="list-group-item"><a href="mailto:${x.email}">Email: ${x.email}</a></li>
            </ul>
          </div>
        </div>
      </div>    
    `
}
module.exports = handleTeam;
