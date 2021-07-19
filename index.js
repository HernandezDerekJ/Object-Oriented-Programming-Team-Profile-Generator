const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const team = [];

//determine current directory and find path to the output folder 
const OUTPUT_DIR = path.resolve(__dirname, "output")
//where to create our output
const outputPath = path.join(OUTPUT_DIR, "team.html");
//require render function from the page template
const render = require("./src/page-template.js");

//use inquirer to determine what kind of employee you will be adding or to exit and build html
//based on the reponse trigger another inquire block
// use answers to create a "new Employee" and add the employee to the 
//teamMembers array
//
const whatToAdd = [
  {
    type: 'list',
    message: 'Do you want to Auto-Generate',
    name: 'auto',
    choices: ['Yes', 'No']
  },
  {
  type: 'list',
  message: 'What do you want to add',
  name: 'addNew',
  choices: ['Manager', 'Engineer', 'Intern', 'Other', 'No']
  }
];
let employeePrompt = [
  {
    type: 'input',
    message: 'What is your Name',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your Email',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your ID',
    name: 'id',
  }
];

let managerPrompt = 
  {
    type: 'input',
    message: 'What is your Office Number',
    name: 'officeNumber'
  };
let engineerPrompt = 
  {
    type: 'input',
    message: 'What is your Github',
    name: 'git'
  };
let internPrompt = 
  {
    type: 'input',
    message: 'What is your School',
    name: 'school'
  };
let anotherPrompt = 
  {
  type: 'list',
  message: 'Do you want to add Another',
  name: 'another',
  choices: ['Manager', 'Engineer', 'Intern', 'Other', 'No']
  }

function digitsOnly(x){
  var reg = /^\d+$/;
  if (x.match(reg)){
    return true
  }
  return false;
}
function lettersOnly(x){
  let res = /^[a-zA-Z]+$/;
  if (x.match(res)){
    return true
  }
  return false;
}
function newManager(id, email, name, officeNumber){
  const manager = new Manager(id, email, name, officeNumber);
  team.push(manager);
}
function newEngineer(id, email, name, github){
  const engineer = new Engineer(id, email, name, github);
  team.push(engineer);
}
function newIntern(id, email, name, school){
  const intern = new Intern(id, email, name, school);
  team.push(intern);
}
function newEmployee(id, email, name){
  const employee = new Employee(id, email, name);
  team.push(employee);
}
function handleNewEmployee(x){
  let again = null;
  switch(x) {
    case "Manager":
      employeePrompt.push(managerPrompt);
      employeePrompt.push(anotherPrompt);
      inquirer.prompt(employeePrompt)
      .then((r) => {
        console.log(r);
        again = r.another
      })
      employeePrompt.pop();
      employeePrompt.pop();
      return again;
    case "Engineer":
      employeePrompt.push(engineerPrompt);
      inquirer.prompt(employeePrompt)
      .then((r) => {
        console.log(r);
      })
      employeePrompt.pop();
      break;
    case "Intern":
      employeePrompt.push(internPrompt);
      inquirer.prompt(employeePrompt)
      .then((r) => {
        console.log(r);
      })
      employeePrompt.pop();
      break;
    case "Other":
      inquirer.prompt(employeePrompt)
      .then((r) => {
        console.log(r);
      })
      break;
    case "No":
      // code block
      break;
    default:
      // code block
    
  }
}
function init() {
  console.log(employeePrompt);

  inquirer.prompt(whatToAdd)
  .then((response) => {
    console.log(response);
    switch(response.auto) {
      case "Yes":
        // code block
        break;
      case "No":
        let loopControl = "Yes";
        do {
          loopControl = handleNewEmployee(response.addNew)
        } while (loopControl != "No");
        break;
      default:
        // code block
    }

  
  });
}


  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    //write html to output/team.html using function exported from page-template.js
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

init();