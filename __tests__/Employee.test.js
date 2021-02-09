

const Employee = require('../lib/Employee');

test('Creates an employee object', () => {
    const employee = new Employee('Jon');

    expect(employee.name).toBe('Jon');
    expect(employee.idNumber).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('get employee role', () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual('Employee');
});


test('get employee name', () => {
    const employee = new Employee();

    expect(employee.getName()).toEqual(this.name);
});

test('get employee email', () => {
    const employee = new Employee();

    expect(employee.getEmail()).toEqual(expect.any(String));
});


test('get employee id number', () => {
    const employee = new Employee();

    expect(employee.getIdNumber()).toEqual(expect.any(Number));
});
