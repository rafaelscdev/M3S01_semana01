const {connection} = require('../database/connection'); 
const { DataTypes } = require('sequelize');

const User = connection.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'Users',
    timestamps: true, // createdAt e updatedAt
});

module.exports = User;
