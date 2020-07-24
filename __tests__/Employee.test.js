const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Alex C','25','Chig@email.com');
    
    expect(employee.name).toBe('Alex C');
    expect(employee.id).toBe('25');
    expect(employee.email).toBe('Chig@email.com')
  });

  test("gets employee's name", () => {
    const employee = new Employee('Alex','25','Chig@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
  });

  test("gets employee's id", () => {
    const employee = new Employee('Alex','25','Chig@email.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id))
  });

  test("gets employee email", () => {
    const employee = new Employee('Alex','25','Chig@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
  });

  test("gets employee role", () => {
    const employee = new Employee('Alex','25','Chig@email.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
  });

  module.exports = Employee 