const Employee = require('../lib/Employee')

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber

    //getName()
    //getid()
    //getEmail()
    //getRole()
    }
}

module.exports = Manager 