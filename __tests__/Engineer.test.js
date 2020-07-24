const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const employee = new Engineer('Alex C','25','Chig@email.com','Achigas');
    
    expect(employee.name).toBe('Alex C');
    expect(employee.id).toBe('25');
    expect(employee.email).toBe('Chig@email.com')
    expect(employee.github).toBe('Achigas')
  });

test("gets employee github", () => {
    const employee = new Engineer('Alex','25','Chig@email.com', 'Achigas');

    expect(employee.getGithub()).toEqual(expect.stringContaining(employee.github));
  });


test("gets employee role", () => {
    const employee = new Engineer('Alex','25','Chig@email.com','achigas');

    expect(employee.getRole()).toEqual(expect.stringContaining("Engineer"));
  });
