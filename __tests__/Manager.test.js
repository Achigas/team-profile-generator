const Manager = require('../lib/Manager')

test('creates an Manager object', () => {
    const employee = new Manager('Alex C','25','Chig@email.com', '52');
    
    expect(employee.name).toBe('Alex C');
    expect(employee.id).toBe('25');
    expect(employee.email).toBe('Chig@email.com')
    expect(employee.officeNumber).toBe('52')
  });

test("gets manager's office number", () => {
    const employee = new Manager('Alex','25','Chig@email.com', '52');

    expect(employee.getOfficeNumber()).toEqual(expect.stringContaining(employee.officeNumber.toString()));
  });


test("gets manager's role", () => {
    const employee = new Manager('Alex','25','Chig@email.com','52');

    expect(employee.getRole()).toEqual(expect.stringContaining("Manager"));
  });
