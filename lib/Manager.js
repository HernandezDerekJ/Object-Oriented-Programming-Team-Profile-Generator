// import Employee class

// create Manager which extends Employee
//create a constructor function that takes in name, id, email, officeNumber
//use super method to pass name, id, email
// and sets them as properties of employee 
//such as this.officeNumber= officeNumber


// getRole(){}
// getOfficeNumber(){}
// export Manager


const Employee = require("./Employee");
class Manager extends Employee{
    constructor(id, email, name, officeNumber){
        super(id, email, name);
        this.officeNumber = officeNumber;
    }
    getRole(){return this.constructor.name}
    getOfficeNumber(){return this.officeNumber}
}
module.exports = Manager;