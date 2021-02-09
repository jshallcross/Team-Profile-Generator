

const Engineer = require('../lib/Engineer');


test('creates new engineer object', () => {
    const engineer = new Engineer();

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets users github', () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).toEqual(expect.any(Object));
});

test('get users roles', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual('Engineer');
});
