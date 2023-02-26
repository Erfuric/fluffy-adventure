const router = require('express').Router();
const { Department, Employee, Role } = require('../../models');

// GET all roles
router.get('/', async (req, res) => {
    try {
      const roleData = await Role.findAll({
        include: [{ model: Department }, { model: Employee }],
      });
      res.status(200).json(roleData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET a single role
router.get('/:id', async (req, res) => {
    try {
      const roleData = await Role.findByPk(req.params.id, {
        include: [{ model: Employee }, {model: Department }],
      });
  
      if (!roleData) {
        res.status(404).json({ message: 'No Role found with that id.' });
        return;
      }
  
      res.status(200).json(roleData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a role
  router.post('/', async (req, res) => {
    try {
      const newRoleData = await Role.create(req.body);
      res.status(200).json(newRoleData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;