
const Intern = require('../lib/Intern');


test('setup interns school', () => {
    const school = "U of T";
    const intern = new Intern("Jon", 19, "jon@gmail.com", school);

    expect(intern.school).toBe(school);
});

test('gets staff roles', () => {
    const role = "Intern";
    const intern = new Intern("Jon", 19, "jon@gmail.com", role);

    expect(intern.getRole()).toBe("Intern");
});

test ('gets school from intern', () => {
    const school = "U of T";
    const intern = new Intern("Jon", 19, "jon@gmail.com", school);

    expect(intern.getSchool()).toBe(school);
});