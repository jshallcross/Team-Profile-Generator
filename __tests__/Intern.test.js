
const Intern = require('../lib/Intern');


test('Creates a new intern object', () => {
    const intern = new Intern();

    expect(intern.school).toEqual(expect.any(String));
});

test('get users roles', () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual('Intern');
});