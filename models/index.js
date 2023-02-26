const Employee = require('./Employee');
const Department = require('./Department');
const Role = require('./Role');

Role.BelongsTo(Department, {
    foreignKey: 'department_id',
});

Employee.belongsTo(Role, {
    foreignKey: 'role_id',
});

Employee.belongsTo(Employee, {
    as: 'manager',
    foreignKey: 'manager_id',
});

Employee.hasMany(Employee, {
    as: 'directReports',
    foreignKey: 'manager_id',
});

module.exports = { Employee, Department, Role };