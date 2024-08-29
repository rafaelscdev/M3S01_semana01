const {connection} = require('../database/connection'); 
const { DataTypes } = require('sequelize');
const Permission = require('./Permission');
const Role = require('./Role');

const PermissionRole = connection.define('PermissionRole', {
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
    permissionId: {
        type: DataTypes.INTEGER,
        references: {
            model: Permission,
            key: 'id',
        },
    },
}, {
    timestamps: true,
});

module.exports = PermissionRole;
