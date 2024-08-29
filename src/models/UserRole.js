const {connection} = require('../database/connection'); 
const { DataTypes } = require('sequelize');
const User = require('./User');
const Role = require('./Role');

const UserRole = connection.define('UserRole', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    roleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'id',
        },
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
    },
}, {
    timestamps: true,
});

module.exports = UserRole;
