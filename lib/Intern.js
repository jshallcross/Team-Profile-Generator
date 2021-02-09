

function Intern () {
    this.role = "Intern"
    this.school = "";

Intern.prototype.getRole = () => {
        if (this.role === "Intern") {
            return "Intern";
        } else {
            return "Employee";
        }
    }

}


module.exports = Intern;