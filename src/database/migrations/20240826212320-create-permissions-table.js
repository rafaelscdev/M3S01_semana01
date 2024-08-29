'use strict';

const Permission = require('../../models/Permission');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Permissions', Permission.tableAttributes);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Permissions');
  }
};
