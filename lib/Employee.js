

class Employee {
    constructor(name, idNumber, email) {
    this.role = "Employee"
    this.name = name;
    this.idNumber = idNumber;
    this.email = email;
}
    getRole() {
            return "Employee";
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getIdNumber()  {
        return this.idNumber;
    }

}


module.exports = Employee;