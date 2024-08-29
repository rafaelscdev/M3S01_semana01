const express = require('express');
const auth = require('../middleware/auth'); // Middleware de autenticação
const hasPermission = require('../middleware/hasPermission'); // Middleware de validação de permissões
const rbacController = require('../controllers/rbac.controller'); // Importa o controller de RBAC

const router = express.Router();

router.post('/permissions', auth, hasPermission('admin', 'create-permission'), rbacController.createOnePermission);

router.post('/roles', auth, hasPermission('admin', 'create-role'), rbacController.createOneRole);

router.get('/permissions', auth, hasPermission('admin', 'list-permissions'), rbacController.listPermissions);

router.get('/roles', auth, hasPermission('admin', 'list-roles'), rbacController.listRoles);

router.get('/roles/:roleId/permissions', auth, hasPermission('admin', 'list-permissions-by-role'), rbacController.listPermissionsByRole);

router.post('/users/:userId/roles', auth, hasPermission('admin', 'add-role-to-user'), rbacController.addRoleToUser);


router.post('/roles/:roleId/permissions', auth, hasPermission('admin', 'add-permission-to-role'), rbacController.addPermissionToRole);

module.exports = router;
