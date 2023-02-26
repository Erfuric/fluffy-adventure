const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Department.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING(30),
        },
        last_name: {
            type: DataTypes.STRING(30),
        },
        role_id: {
            type: DataTypes.INTEGER,
        },
        manager_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        modelName: 'employee'
    }
);

module.exports = Employee;