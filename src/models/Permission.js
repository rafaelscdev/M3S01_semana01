const {connection} = require('../database/connection'); 
const { DataTypes } = require('sequelize');

const Permission = connection.define('Permission', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Permission;
