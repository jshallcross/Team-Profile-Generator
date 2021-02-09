

function Employee (name) {
    this.role = "Employee"
    this.name = name;
    this.idNumber = 1;
    this.email = "";

    Employee.prototype.getRole = () => {
            return "Employee";
    }

    Employee.prototype.getName = () => {
        return this.name;
    }

    Employee.prototype.getEmail = () => {
        return this.email;
    }

    Employee.prototype.getIdNumber = () => {
        return this.idNumber;
    }


}


module.exports = Employee;