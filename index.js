const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const makeHtml = require("./lib/htmlTemplate");
const fs = require("fs");
const path = require("path");


const outputFolder = path.resolve(__dirname, "dist")
const outputFile = path.join(outputFolder, "team.html");




class Team {
    constructor() {
        this.teamMembers = 0;
        this.team = [];
        
    }
    newTeam() {
        
        if (this.teamMembers === 0) {
            this.makeManager();
            
        }    
    }
    // Function to create a Manager
    makeManager() {
        console.log("Please build your team below. All fields are required.")
        inquirer
            .prompt([{
                type: 'text',
                name: 'name',
                message: "What is your Manager's name?",
                validate: nameInput => {
                    if(nameInput){
                        return true;
                    } else{
                        console.log("Please enter your Manager's name!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'idNumber',
                message: "What is your Manager's employee ID number?",
                validate: idInput => {
                    if(idInput){
                        return true;
                    } else{
                        console.log("Please enter your Manager's employee number!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: "email",
                message: "What is your Manager's email address?",
                validate: function(email)
                {
                // Regex mail check (return true if valid mail)
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }
            },
            {    
                type: 'text',
                name: 'officeNumber',
                message: "What is your Manager's office number? Format '905-555-5555'",
                validate: officeNumberInput => {
                    if(officeNumberInput){
                        return true;
                    } else{
                        console.log("Please enter your Manager's office number!");
                        return false;
                    }
                }
            }
            ]).then(answers => {
                const manager = new Manager(answers.name, answers.idNumber, answers.email, answers.officeNumber);
                this.teamMembers += 1;
                this.team.push(manager);
                this.addTeamMember();
        })
    }
    // Function to add a team member based on a choice
    addTeamMember() {
        inquirer
            .prompt([{
                type: 'list',
                name: 'choice',
                message: 'Would you like to add more team members?',
                choices: ['Engineer', 'Intern', 'None']
            }
        ]).then(answer => {
            if(answer.choice === 'Engineer'){
                this.makeEngineer();
            } else if (answer.choice === 'Intern'){
                this.makeIntern();
            } else if (answer.choice === 'None'){
                // write file 
                this.display();
            } else {
                this.addTeamMember();
            }     
        })
    }
    // Function to create an Engineer
    makeEngineer() {
        inquirer
            .prompt([{
                type: 'text',
                name: 'name',
                message: "What is your Engineer's name?",
                validate: nameInput => {
                    if(nameInput){
                        return true;
                    } else{
                        console.log("Please enter your Engineer's name!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'idNumber',
                message: "What is your Engineer's employee ID number?",
                validate: idInput => {
                    if(idInput){
                        return true;
                    } else{
                        console.log("Please enter your Engineer's employee number!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: "email",
                message: "What is your Engineer's email address?",validate: function(email)
                {
                    // Regex mail check (return true if valid mail)
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }
            },
            {    
                type: 'text',
                name: 'github',
                message: "What is your Engineer's GitHub username?",
                validate: githubInput => {
                    if(githubInput){
                        return true;
                    } else{
                        console.log("Please enter your Engineer's GitHub username!");
                        return false;
                    }
                }
            }
            ]).then(answers => {
                const engineer = new Engineer(answers.name, answers.idNumber, answers.email, answers.github);
                this.teamMembers += 1;
                this.team.push(engineer);
                this.addTeamMember();
        })
    }
    // Function to create an Intern
    makeIntern() {
        inquirer
            .prompt([{
                type: 'text',
                name: 'name',
                message: "What is your Intern's name?",
                validate: nameInput => {
                    if(nameInput){
                        return true;
                    } else{
                        console.log("Please enter your Intern's name!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'idNumber',
                message: "What is your Intern's employee ID number?",
                validate: idInput => {
                    if(idInput){
                        return true;
                    } else{
                        console.log("Please enter your Intern's employee number!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: "email",
                message: "What is your Intern's email address?",
                validate: function(email)
                {
                // Regex mail check (return true if valid mail)
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }
            },
            {    
                type: 'text',
                name: 'school',
                message: "What is your Intern's school?",
                validate: schoolInput => {
                    if(schoolInput){
                        return true;
                    } else{
                        console.log("Please enter your Intern's School!");
                        return false;
                    }
                }
            }
            ]).then(answers => {
                const intern = new Intern(answers.name, answers.idNumber, answers.email, answers.school);
                this.teamMembers += 1;
                this.team.push(intern);
                this.addTeamMember();
                
        })
    }
    // write the new file with the newly created team
    display() {
        fs.writeFile(outputFile, makeHtml(this.team), function (err){
            if (err) {
                console.log(err)
            } else {
                console.log("Made file!");
            }
        });
    }

}

let team = new Team();
team.newTeam();










