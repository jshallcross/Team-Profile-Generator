const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");


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
                //this.makeEngineer();
            } else if (answer.choice === 'Intern'){
                //this.makeIntern();
            } else if (answer.choice === 'None'){
                //this.writeFile();
            } else {
                addTeamMember();
            }     
        })
    }

}

let team = new Team();
team.newTeam();










