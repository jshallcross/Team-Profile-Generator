


const Manager = require('../lib/Manager');

test('Creates new manager object', () =>{
    const manager = new Manager();

    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('get users roles', () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual('Manager');
});
