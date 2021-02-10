

const Employee = require('../lib/Employee');

test('Creates an employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
});


test('gets role of staff', () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual('Employee');
});


test('gets employee name', () => {
    const name = "Jon";
    const employee = new Employee(name);

    expect(employee.getName()).toBe(name);
});

test('gets employee id number', () => {
    const idNumber = 19;
    const employee = new Employee("Jon", idNumber);

    expect(employee.getIdNumber()).toBe(idNumber);
});

test('gets employee email', () => {
    const email = "jon@gmail.com";
    const employee = new Employee("Jon", 19, email)
    expect(employee.getEmail()).toBe(email);
});



