const router = require('express').Router();
const departmentRoutes = require('./departmentRoutes');
const employeeRoutes = require('./employeeRoutes');
const roleRoutes = require('./roleRoutes');

router.use('/departmentRoutes', departmentRoutes);
router.use('/employeeRoutes', employeeRoutes);
router.use('/roleRoutes', roleRoutes);

module.exports = router;