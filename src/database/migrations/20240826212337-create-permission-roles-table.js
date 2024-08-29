'use strict';

const PermissionRole = require('../../models/PermissionRole');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PermissionRoles', PermissionRole.tableAttributes);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PermissionRoles');
  }
};
