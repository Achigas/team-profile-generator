const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Alex C',25,'Chig@email.com');
    
    expect(employee.name).toBe('Alex C');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String))
  });

  test("gets employee's name", () => {
    const employee = new Employee('Alex');
    expect(employee.getName()).toHaveProperty('name');
  });

  module.exports = Employee 