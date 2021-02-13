const path = require("path");
const fs = require("fs");
const htmlTemplate = path.resolve(__dirname, "../src");

// sorts through the team to find each employee role
const display = employees => {
    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => displayManager(manager)));
        html.push(employees
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => displayEngineer(engineer)));
            html.push(employees
                .filter(employee => employee.getRole() === "Intern")
                .map(intern => displayIntern(intern)));

    return displayIndex(html.join(""));
};

// displays the manager data inputted 
displayManager = manager => {
    let oldData = fs.readFileSync(path.resolve(htmlTemplate, "manager.html"), "utf8");
    oldData = replaceData(oldData, "name", manager.getName());
    oldData = replaceData(oldData, "email", manager.getEmail());
    oldData = replaceData(oldData, "email", manager.getEmail());
    oldData = replaceData(oldData, "idNumber", manager.getIdNumber());
    oldData = replaceData(oldData, "role", manager.getRole());
    oldData = replaceData(oldData, "officeNumber", manager.getOfficeNumber());
    return oldData;
};

// displays the engineer data inputted
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
};

// displays the intern data inputted
displayIntern = intern => {
    let oldData = fs.readFileSync(path.resolve(htmlTemplate, "intern.html"), "utf8");
    oldData = replaceData(oldData, "name", intern.getName());
    oldData = replaceData(oldData, "email", intern.getEmail());
    oldData = replaceData(oldData, "email", intern.getEmail());
    oldData = replaceData(oldData, "idNumber", intern.getIdNumber());
    oldData = replaceData(oldData, "role", intern.getRole());
    oldData = replaceData(oldData, "school", intern.getSchool());
    return oldData;
};

// displays the main html with the created team
const displayIndex = html => {
    const oldData = fs.readFileSync(path.resolve(htmlTemplate, "index.html"), "utf8");
    
    return replaceData(oldData, "team", html)
};

// RegExp to find the pattern of data to be replaced user inputted data
const replaceData = (oldData, mockData, newData) => {
    const textPattern = new RegExp("{"+ mockData +"}");
    
    return oldData.replace(textPattern, newData);
};


module.exports = display; 