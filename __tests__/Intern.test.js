const Intern = require('../lib/Intern')

test('creates an Intern object', () => {
    const employee = new Intern('Alex C','25','Chig@email.com','UCLA');
    
    expect(employee.name).toBe('Alex C');
    expect(employee.id).toBe('25');
    expect(employee.email).toBe('Chig@email.com')
    expect(employee.school).toBe('UCLA')
  });

test("gets intern's school", () => {
    const employee = new Intern('Alex','25','Chig@email.com', 'UCLA');

    expect(employee.getSchool()).toEqual(expect.stringContaining(employee.school));
  });


test("gets intern role", () => {
    const employee = new Intern('Alex','25','Chig@email.com','UCLA');

    expect(employee.getRole()).toEqual(expect.stringContaining("Intern"));
  });
