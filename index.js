const fs = require('fs');
const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');
const { prompt } = require('inquirer');

const promptManager = () => {
        
        return inquirer.prompt([
         {  
            type: 'input',
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
    ]).then(managerData  => {
        const {name, id, email, officeNumber} = managerData
         employee = new Manager(name, id, email, officeNumber)
         let role = {role: "Manager"};
         return {...managerData, ...role}
    //})
})
}

const promptEmployee = managerData => {
    console.log(managerData)
    if (!managerData.employees) {
        managerData.employees = [];
    }
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
                ]).then(employeeData => {
                   employee = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github)
                   let role = {role: "Engineer"}
                   managerData.employees.push({...employeeData, ...role})
                   return promptEmployee(managerData)
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
                ]).then(employeeData => {
                    employee = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school)
                    let role = {role: "Intern"}
                    managerData.employees.push({...employeeData, ...role})
                    return promptEmployee(managerData)
                 })
            } else {
                console.log(managerData)
                return managerData
            }
        })
    }          

promptManager()
    .then(promptEmployee)
    .then(managerData => {
        return generatePage(managerData);
      })
      .then(pageHTML => {
        return writeFile(pageHTML);
      })
      .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
      })
      .then(copyFileResponse => {
        console.log(copyFileResponse);
      })
      .catch(err => {
        console.log(err);
      });

