const Employee = require('../lib/Employee')

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)
    }
}

module.exports = Engineer