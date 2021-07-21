const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const teamMembers = [];
//determine current directory and find path to the output folder 
const OUTPUT_DIR = path.resolve(__dirname, "output")
//where to create our output
const outputPath = path.join(OUTPUT_DIR, "team.html");
//require render function from the page template
const render = require("./src/page-template.js");
const { async } = require("rxjs");


const whatToAdd = [
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
    validate: async (name) => {
      if(!digit_or_letter(name, "Name")){
        console.error('Invalid Input');
        return 'Invalid Input';
      }
      return true;
    }
  },
  {
    type: 'input',
    message: 'What is your Email',
    name: 'email',
    validate: async (email) => {
      if(!digit_or_letter(email, "Email")){
        return 'Invalid Input';
      }
      return true;
    }
  },
  {
    type: 'input',
    message: 'What is your ID',
    name: 'id',
    validate: async (id) => {
      if(!digit_or_letter(id, "Num")){
        return 'Invalid Input';
      }
      return true;
    }
  }
];

let managerPrompt = 
  {
    type: 'input',
    message: 'What is your Office Number',
    name: 'officeNumber',
    validate: async (officeNumber) => {
      if(!digit_or_letter(officeNumber, "Num")){
        return 'Invalid Input';
      }
      return true;
    }
  };
let engineerPrompt = 
  {
    type: 'input',
    message: 'What is your Github',
    name: 'git',
    validate: async (git) => {
      if(!digit_or_letter(git, "Email")){
        return 'Invalid Input';
      }
      return true;
    }
  };
let internPrompt = 
  {
    type: 'input',
    message: 'What is your School',
    name: 'school',
    validate: async (school) => {
      if(!digit_or_letter(school, "Name")){
        return 'Invalid Input';
      }
      return true;
    }
  };
let anotherPrompt = 
  {
  type: 'list',
  message: 'Do you want to add Another',
  name: 'another',
  choices: ['Manager', 'Engineer', 'Intern', 'Other', 'Done Adding']
  }

function digit_or_letter(x, type){
  let reg = /^[0-9]+$/;
  let res = /^[a-zA-Z]+$/;
  let special = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if(type == "Name"){
    if (!x.match(reg) && x.match(res)){
      return true;
    }
  }
  else if(type == "Num"){
    if (x.match(reg) && !x.match(res)){
      return true;
    }
  }
  else if(type == "Email"){
    if (x.match(special, res, reg)){
      return true;
    }
  }
  return false;
}

function newManager(id, email, name, officeNumber){
  const manager = new Manager(id, email, name, officeNumber);
  teamMembers.push(manager);
}
function newEngineer(id, email, name, github){
  const engineer = new Engineer(id, email, name, github);
  teamMembers.push(engineer);
}
function newIntern(id, email, name, school){
  const intern = new Intern(id, email, name, school);
  teamMembers.push(intern);
}
function newEmployee(id, email, name){
  const employee = new Employee(id, email, name);
  teamMembers.push(employee);
}
 async function handleNewEmployee(x){
  switch(x) {
    case "Manager":
      employeePrompt.push(managerPrompt);
      await inquirer.prompt(employeePrompt)
      .then((r) => {
        newManager(r.id, r.email, r.name, r.officeNumber);
      })
      employeePrompt.pop();
      console.log("done");
      await inquirer.prompt(anotherPrompt).then(answer => handleNewEmployee(answer.another));

      break;
    case "Engineer":
      employeePrompt.push(engineerPrompt);
      await inquirer.prompt(employeePrompt)
      .then((r) => {
        newEngineer(r.id, r.email, r.name, r.git);
      })
      employeePrompt.pop();
      console.log("done");
      await inquirer.prompt(anotherPrompt).then(answer => handleNewEmployee(answer.another));
      break;
    case "Intern":
      employeePrompt.push(internPrompt);
      await inquirer.prompt(employeePrompt)
      .then((r) => {
        newIntern(r.id, r.email, r.name, r.school);
      })
      employeePrompt.pop();
      console.log("done");
      await inquirer.prompt(anotherPrompt).then(answer => handleNewEmployee(answer.another));
      break;
    case "Other":
      await inquirer.prompt(employeePrompt)
      .then((r) => {
        newEmployee(r.id, r.email, r.name);
      })
      console.log("done");
      await inquirer.prompt(anotherPrompt).then(answer => handleNewEmployee(answer.another));
      break;
    case "Done Adding":
      buildTeam();
      break;
    default:
     //  code block
  }

}
 async function init() {
  await inquirer.prompt(whatToAdd)
  .then((response) => {
    handleNewEmployee(response.addNew);
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
