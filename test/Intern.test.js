//Require Intern  
const Intern = require("../lib/Intern");
//create test on Intern class
test('Does the Intern Object exist?', () => {
    const i = new Intern("888", "derekhernandez@outlook.com", "derek", "Texas State");
    //Anything thats not NULL
    expect(i).toBe(expect.anything());
  });
//test to see if you can set school using our constructor
test('Does Intern constructor work?', () => {
    const i = new Intern("888", "derekhernandez@outlook.com", "derek", "Texas State");
    expect(i.school).toBe("Texas State");
  });
//test to see if getRole() returns "Intern"
test('Does Intern getRole() work?', () => {
    const i = new Intern("888", "derekhernandez@outlook.com", "derek", "Texas State");
    expect(i.getRole()).toBe("Intern");
  });
//test to see if getSchool() returns school testvalue
test('Does Intern getSchool() work?', () => {
    const i = new Intern("888", "derekhernandez@outlook.com", "derek", "Texas State");
    expect(i.getSchool()).toBe("Texas State");
  });