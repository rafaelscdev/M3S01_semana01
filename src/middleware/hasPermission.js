const { User, Role, Permission } = require('../models');


function hasPermission(requiredRole, requiredPermission) {
    return async (req, res, next) => {
        try {
            const userId = req.userId; 
            const user = await User.findByPk(userId, {
                include: [
                    {
                        model: Role,
                        include: [
                            {
                                model: Permission,
                                through: { attributes: [] },
                            },
                        ],
                    },
                ],
            });

            if (!user) {
                return res.status(403).json({ message: 'Usuário não encontrado.' });
            }

            const userRoles = user.Roles.map(role => role.description);
            const userPermissions = user.Roles.flatMap(role => role.Permissions.map(permission => permission.description));

            if (userRoles.includes(requiredRole) && userPermissions.includes(requiredPermission)) {
                return next();
            }

            return res.status(403).json({ message: 'Acesso negado. Permissão ou Role insuficiente.' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
}

module.exports = hasPermission;
