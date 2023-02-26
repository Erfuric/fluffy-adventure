const Employee = require('./Employee');
const Department = require('./Department');
const Role = require('./Role');

Employee.hasOne(Role, {
    foreignKey: 'employee_id',
    onDelete: 'CASCADE',
});

Employee.hasOne(Department, {
    foreignKey: 'employee_id',
    onDelete: 'CASCADE',
});

Department.hasMany(Roles, {
    // foreignKey: 'employee_id',
});

Department.hasMany(Employee, {
    foreignKey: 'employee_id',
});

Role.hasMany(Employee, {
    foreignKey: 'employee_id',
});

Role.hasMany(Department, {
    // foreignKey: 'employee_id',
});

module.exports = { Department, Employee, Role };

/*
    One to one, one to many, many to many

    Departments can have multiple roles and employees
        Department hasmany roles
        Department hasmany employees

    Roles can have multiple employees and departments
        Role hasmany employees
        Role hasmany departments

    Employees can have one role and department
        Employee hasone role
        Employee hasone department


*/