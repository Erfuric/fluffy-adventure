const router = require('express').Router();
const { Department, Employee, Role } = require('../../models');

// GET all departments
router.get('/', async (req, res) => {
    try {
      const departmentData = await Department.findAll({
        include: [{ model: Employee }, { model: Role }],
      });
      res.status(200).json(departmentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET a single department
router.get('/:id', async (req, res) => {
    try {
      const departmentData = await Department.findByPk(req.params.id, {
        include: [{ model: Role }],
      });
  
      if (!departmentData) {
        res.status(404).json({ message: 'No Department found with that id.' });
        return;
      }
  
      res.status(200).json(departmentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a department
  router.post('/', async (req, res) => {
    try {
      const newDepData = await Department.create(req.body);
      res.status(200).json(newDepData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
module.exports = router;