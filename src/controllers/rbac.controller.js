const { Permission, Role, User, UserRole, PermissionRole } = require('../models');

// Cria uma nova permissão
async function createOnePermission(req, res) {
    try {
        const { description } = req.body;
        const permission = await Permission.create({ description });
        res.status(201).json(permission);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Cria uma nova role
async function createOneRole(req, res) {
    try {
        const { description } = req.body;
        const role = await Role.create({ description });
        res.status(201).json(role);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Lista todas as permissões
async function listPermissions(req, res) {
    try {
        const permissions = await Permission.findAll();
        res.status(200).json(permissions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function listRoles(req, res) {
    try {
        const roles = await Role.findAll();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function listPermissionsByRole(req, res) {
    try {
        const { roleId } = req.params;
        const role = await Role.findByPk(roleId, {
            include: [
                {
                    model: Permission,
                    through: PermissionRole,
                },
            ],
        });
        if (!role) {
            return res.status(404).json({ error: 'Role not found' });
        }
        res.status(200).json(role.Permissions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function addRoleToUser(req, res) {
    try {
        const { userId, roleId } = req.body;
        const user = await User.findByPk(userId);
        const role = await Role.findByPk(roleId);

        if (!user || !role) {
            return res.status(404).json({ error: 'User or Role not found' });
        }

        await UserRole.create({ userId, roleId });
        res.status(200).json({ message: 'Role added to user successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function addPermissionToRole(req, res) {
    try {
        const { permissionId, roleId } = req.body;
        const permission = await Permission.findByPk(permissionId);
        const role = await Role.findByPk(roleId);

        if (!permission || !role) {
            return res.status(404).json({ error: 'Permission or Role not found' });
        }

        await PermissionRole.create({ permissionId, roleId });
        res.status(200).json({ message: 'Permission added to role successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createOnePermission,
    createOneRole,
    listPermissions,
    listRoles,
    listPermissionsByRole,
    addRoleToUser,
    addPermissionToRole,
};
