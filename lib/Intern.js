const Employee = require('../lib/Employee')

class Intern extends Employee {
    constructor (name, id, email, school) {
    super(name,id,email)
    }
}

module.exports = Intern