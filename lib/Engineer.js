// import Employee class

// create Engineer which extends Employee

//create a constructor function that takes in name, id, email, github
//use super metheod to pass name, id, email
// and sets them as properties of employee 
//such as this.github= github

// getRole(){}
// getGithub(){}
// export Engineer

const Employee = require("./Employee");
class Engineer extends Employee{
    constructor(id, email, name, github){
        super(id, email, name);
        this.github = github;
    }
    getRole(){return this.constructor.name}
    getGithub(){return this.github}
}
module.exports = Engineer;
