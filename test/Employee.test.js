//require Employee
const Employee = require("../lib/Employee");
// create test for employee 
test('Does the Object exist?', () => {
    const x = new Employee("1234", "woof@yahoo.com", "Woof");
    //Anything thats not NULL
    expect(x).toStrictEqual(expect.anything());
  });
// test to see if type of new employee is an object
test('Is Employee an Object?', () => {
    const x = new Employee("1234", "woof@yahoo.com", "Woof");
    expect(typeof(x)).toBe('object');
  });
// test if can set name via constructor
test('Check Employee constructor Name?', () => {
    const x = new Employee("616", "Spiderman@outlook.com", "Spiderman");
    expect(x.name).toBe('Spiderman');
  });
// test if can set id via constructor
test('Check Employee constructor ID?', () => {
    const x = new Employee("111", "fallout@outlook.com", "wanderer");
    expect(x.id).toBe('111');
  });
// test if can set email via constructor
test('Check Employee constructor Email?', () => {
    const x = new Employee("888", "derekhernandez@outlook.com", "derek");
    expect(x.email).toBe('derekhernandez@outlook.com');
  });
//test to see if getName() returns name test value
test('Does getName() work?', () => {
    const x = new Employee("888", "derekhernandez@outlook.com", "derek");
    expect(x.getName()).toBe('derek');
  });
//test to see if getId() returns id test value
test('Does getName() work?', () => {
    const x = new Employee("888", "derekhernandez@outlook.com", "derek");
    expect(x.getID()).toBe('888');
  });
//test to see if getEmail() returns email test value
test('Does getEmail() work?', () => {
    const x = new Employee("888", "derekhernandez@outlook.com", "derek");
    expect(x.getEmail()).toBe('derekhernandez@outlook.com');
  });
//test to see if getRole() returns "Employee"
test('Does getRole() work?', () => {
    const x = new Employee("888", "derekhernandez@outlook.com", "derek");
    expect(x.getRole()).toBe('Employee');
  });
