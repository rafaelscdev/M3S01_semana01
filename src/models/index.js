const User = require('./User');
const Role = require('./Role');
const Permission = require('./Permission');
const UserRole = require('./UserRole');
const PermissionRole = require('./PermissionRole');

User.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(User, { through: UserRole });

Role.belongsToMany(Permission, { through: PermissionRole });
Permission.belongsToMany(Role, { through: PermissionRole });

module.exports = { User, Role, Permission, UserRole, PermissionRole };
