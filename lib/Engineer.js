const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, idNumber, email, github) {
        super(name, idNumber, email);

        this.role = 'Engineer';
        this.github = github;
    }



getGithub() {
    return  this.github;
}

getRole() {
        return "Engineer";


}


}
module.exports = Engineer;