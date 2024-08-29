const express = require('express');
const rbacRoutes = require('./rbacRoutes');

const router = express.Router();

router.use('/rbac', rbacRoutes); 
module.exports = router;
