const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, idNumber, email, school) {
        super(name, idNumber, email);

        this.role = "Intern"
        this.school = school;
    }


getRole() {
        return "Intern";
}

getSchool() {
    return this.school;
}

}


module.exports = Intern;