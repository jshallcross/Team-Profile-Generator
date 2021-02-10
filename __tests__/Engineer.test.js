

const Engineer = require('../lib/Engineer');

test('setup Github username', () => {
    const github = "jshallcross";
    const engineer = new Engineer("Jon", 19, "jon@gmail.com", github);

    expect(engineer.github).toBe(github);
});

test('gets staff role', () => {
    const role = "Engineer"
    const engineer = new Engineer("Jon", 19, "jon@gmail.com", role);

    expect(engineer.getRole()).toBe("Engineer");
});

test('gets Github username', () => {
    const github = "jshallcross";
    const engineer = new Engineer("Jon", 19, "jon@gmail.com", github);

    expect(engineer.getGithub()).toBe(github);
});