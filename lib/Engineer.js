

function Engineer () {
    this.role = 'Engineer';
    this.github = "";


Engineer.prototype.getGithub = () => {
    return {
        github: this.github,
    }
}

Engineer.prototype.getRole = () => {
    if (this.role === "Engineer") {
        return "Engineer";
    } else {
        return "Employee";
    }
}


}
module.exports = Engineer;