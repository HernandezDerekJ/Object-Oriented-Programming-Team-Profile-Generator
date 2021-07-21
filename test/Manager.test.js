//require Manager 
const Manager = require("../lib/Manager");

//create test on manager class
test('Does the Manager Object exist?', () => {
    const m = new Manager("888", "derekhernandez@outlook.com", "derek", "12345");
    //Anything thats not NULL
    expect(typeof(m)).toBe(expect.anything());
  });

//test to see if you can set officeNumber using our constructor
test('Does Manager constructor work?', () => {
    const m = new Manager("888", "derekhernandez@outlook.com", "derek", "12345");
    expect(m.officeNumber).toBe('12345');
  });
//test to see if getRole() returns "Manager"
test('Does Manager getRole() work?', () => {
    const m = new Manager("888", "derekhernandez@outlook.com", "derek", "12345");
    expect(m.getRole()).toBe('Manager');
  });
//test to see if getOfficeNumber() returns officeNumber test value
test('Does getGithub() work?', () => {
    const m = new Manager("888", "derekhernandez@outlook.com", "derek", "12345");
    expect(m.getOfficeNumber()).toBe('12345');
  });