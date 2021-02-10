


const Manager = require('../lib/Manager');

test('setup office number for manager', () =>{
    const officeNumber = 123;
    const manager = new Manager("Jon", 19, "jon@gmail.com", officeNumber);

    expect(manager.officeNumber).toBe(officeNumber);
});


test('gets roll of staff', () => {
    const role = "Manager"
    const manager = new Manager("Jon", 19, "jon@gmail.com", 123);

    expect(manager.getRole()).toEqual("Manager");
});


