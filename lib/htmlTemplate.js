const path = require("path");
const fs = require("fs");
const htmlTemplate = path.resolve(__dirname, "../dist");


const display = employees => {
    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => displayManager(manager)));
        html.push(employees
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => displayEngineer(engineer)));

    return displayIndex(html.join(""));
}


displayManager = manager => {
    let oldData = fs.readFileSync(path.resolve(htmlTemplate, "manager.html"), "utf8");
    oldData = replaceData(oldData, "name", manager.getName());
    oldData = replaceData(oldData, "email", manager.getEmail());
    oldData = replaceData(oldData, "email", manager.getEmail());
    oldData = replaceData(oldData, "idNumber", manager.getIdNumber());
    oldData = replaceData(oldData, "role", manager.getRole());
    oldData = replaceData(oldData, "officeNumber", manager.getOfficeNumber());
    return oldData;
}

displayEngineer = engineer => {
    let oldData = fs.readFileSync(path.resolve(htmlTemplate, "engineer.html"), "utf8");
    oldData = replaceData(oldData, "name", engineer.getName());
    oldData = replaceData(oldData, "email", engineer.getEmail());
    oldData = replaceData(oldData, "email", engineer.getEmail());
    oldData = replaceData(oldData, "idNumber", engineer.getIdNumber());
    oldData = replaceData(oldData, "role", engineer.getRole());
    oldData = replaceData(oldData, "github", engineer.getGithub());
    oldData = replaceData(oldData, "github", engineer.getGithub());
    return oldData;
}



const displayIndex = html => {
    const oldData = fs.readFileSync(path.resolve(htmlTemplate, "index.html"), "utf8");
    return replaceData(oldData, "team", html)



  };

const replaceData = (oldData, oldDataData, newData) => {
    const textPattern = new RegExp("{"+ oldDataData +"}");

    return oldData.replace(textPattern, newData);
}


module.exports = display; 