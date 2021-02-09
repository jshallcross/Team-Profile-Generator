

function Manager() {
    this.role = "Manager"
    this.officeNumber = 3;

Manager.prototype.getRole = () => {
        if (this.role === "Manager") {
            return "Manager";
        } else {
            return "Employee";
        }
    }


}


module.exports = Manager;