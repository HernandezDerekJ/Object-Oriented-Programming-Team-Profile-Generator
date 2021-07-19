// import Employee class

// create Intern which extends Employee
//create a constructor function that takes in name, id, email, school
//use super metheod to pass name, id, email
// and sets them as properties of employee 
//such as this.school= school


// getRole(){}
// getSchool(){}
// export Intern

const Employee = require("./Employee");
class Intern extends Employee{
    constructor(id, email, name, school){
        super(id, email, name);
        this.school = school;
    }
    getRole(){return this.constructor.name}
    getSchool(){return this.school}
}
module.exports = Intern;