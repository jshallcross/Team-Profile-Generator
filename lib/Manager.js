const Employee = require('./Employee');


class Manager extends Employee {
    constructor (name, idNumber, email, officeNumber){
    super(name, idNumber, email);

    this.role = "Manager"
    this.officeNumber = officeNumber;
}

getRole() {
    return "Manager";
}

getOfficeNumber() {
    return this.officeNumber;
}

}


module.exports = Manager;