//require Engineer
const Engineer = require("../lib/Engineer");
//create test on Engineer class
test('Does Engineer class work?', () => {
    const a = new Engineer("888", "derekhernandez@outlook.com", "derek", "HernandezDerekJ");
    expect(a.constructor.name).toBe('Engineer');
  });
//test to see if you can set github using our constructor
test('Does Engineer constructor work?', () => {
    const a = new Engineer("888", "derekhernandez@outlook.com", "derek", "HernandezDerekJ");
    expect(a.github).toBe('HernandezDerekJ');
  });
//test to see if getRole() returns "Engineer"
test('Does getRole() work?', () => {
    const a = new Engineer("888", "derekhernandez@outlook.com", "derek", "HernandezDerekJ");
    expect(a.getRole()).toBe('Engineer');
  });
//test to see if getGithub() returns github test value
test('Does getGithub() work?', () => {
    const a = new Engineer("888", "derekhernandez@outlook.com", "derek", "HernandezDerekJ");
    expect(a.getGithub()).toBe('HernandezDerekJ');
  });