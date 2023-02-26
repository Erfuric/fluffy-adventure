const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

Role.init(
    {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
        },
        title: {
            type: Datatypes.STRONG(30),
        },
        salary: {
            type: DataTypes.DECIMAL,
        },
        department_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        modelName: 'role'
    }
);

module.exports = Role;