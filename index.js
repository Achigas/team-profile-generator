const fs = require('fs');
const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');
const { prompt } = require('inquirer');

Employees = []

const promptManager = () => {
        return inquirer.prompt([
         {  type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ]).then(({ name, id, email, officeNumber}) => {
         employee = new Manager(name, id, email, officeNumber)
    }).then (employeeData => Employees.push(employeeData))
};

const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Would you like to add an engineer, an intern, or finish building your team?",
            choices: ['Engineer', 'Intern', 'Finished']
        }
    ]).then(({ role }) => {
            if (role === "Engineer") {
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the employee's name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the employee's ID number?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the user's email?",
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is the engeineer's GitHub username?"
                    }
                ]).then(({ name, id, email, github}) => {
                   employee = new Engineer(name, id, email, github)
                }).then (employeeData => {
                    Employees.push(employeeData)
                    return promptEmployee(Employees)
                })
            } else if (role === "Intern") {
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the employee's name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the employee's ID number?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the user's email?",
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "Which school does the intern attend?"
                    }
                ]).then(({ name, id, email, school}) => {
                    employee = new Intern(name, id, email, school)
                 }).then (employeeData => {
                     Employees.push(employeeData)
                     return promptEmployee(Employees)
                 })
            } else {
                return Employees
            }
        })
    }          

promptManager()
.then(promptEmployee)

