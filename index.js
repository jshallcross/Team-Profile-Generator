const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");


class MakeTeam {
    constructor() {
        this.teamMembers = 0;
        this.team = [];
    }
    newTeam() {
        if (this.teamMembers === 0) {
            this.makeManager();
        }    
    }

    makeManager() {
        inquirer
            .prompt([{
                type: 'text',
                name: 'name',
                message: "What is your Manager's name?"
            },
            {
                type: 'text',
                name: 'idNumber',
                message: "What is your Manager's employee ID number?"
            },
            {
                type: 'text',
                name: "email",
                message: "What is your Manager's email address?"
            },
            {    
                type: 'text',
                name: 'officeNumber',
                message: "What is your Manager's office number?"
            }
            ]).then(answers => {
                const manager = new Manager(answers.name, answers.idNumber, answers.email, answers.officeNumber);
                this.teamMembers += 1;
                this.team.push(manager);
                console.log(manager);
                this.addTeamMember();
        })
    }

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
                //this.makeHTML();
            } else {
                this.addTeamMember();
            }     
        })
    }
    makeEngineer() {
        inquirer
            .prompt([{
                type: 'text',
                name: 'name',
                message: "What is your Engineer's name?"
            },
            {
                type: 'text',
                name: 'idNumber',
                message: "What is your Engineer's employee ID number?"
            },
            {
                type: 'text',
                name: "email",
                message: "What is your Engineer's email address?"
            },
            {    
                type: 'text',
                name: 'github',
                message: "What is your Engineer's GitHub username?"
            }
            ]).then(answers => {
                const engineer = new Engineer(answers.name, answers.idNumber, answers.email, answers.github);
                this.teamMembers += 1;
                this.team.push(engineer);
                console.log(engineer);
                this.addTeamMember();
        })
    }
    makeIntern() {
        inquirer
            .prompt([{
                type: 'text',
                name: 'name',
                message: "What is your Intern's name?"
            },
            {
                type: 'text',
                name: 'idNumber',
                message: "What is your Intern's employee ID number?"
            },
            {
                type: 'text',
                name: "email",
                message: "What is your Intern's email address?"
            },
            {    
                type: 'text',
                name: 'school',
                message: "What is your Intern's school?"
            }
            ]).then(answers => {
                const intern = new Intern(answers.name, answers.idNumber, answers.email, answers.school);
                this.teamMembers += 1;
                this.team.push(intern);
                console.log(intern);
                this.addTeamMember();
        })
    }


}

let team = new MakeTeam();
team.newTeam();










