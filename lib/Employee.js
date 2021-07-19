// create Employee class

//create a constructor function that takes in name, id, email
// and sets them as properties of employee 
//such as this.name= name

// getName(){}
// getId(){}
// getEmail(){}
// getRole(){}

// export Employee

class Employee {
    constructor(id, email, name){
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getName(){return this.name}
    getID(){return this.id}
    getEmail(){return this.email}
    getRole(){return this.constructor.name}
}

module.exports = Employee;
