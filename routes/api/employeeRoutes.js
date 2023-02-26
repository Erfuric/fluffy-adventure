const router = require('express').Router();
const { Department, Employee, Role } = require('../../models');

// GET all employee's
router.get('/', async (req, res) => {
    try {
      const employeeData = await Employee.findAll({
        include: [{ model: Department }, { model: Role }],
      });
      res.status(200).json(employeeData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// GET a single employee
router.get('/:id', async (req, res) => {
    try {
      const employeeData = await Employee.findByPk(req.params.id, {
        include: [{ model: Role }, {model: Department }],
      });
  
      if (!employeeData) {
        res.status(404).json({ message: 'No Employee found with that id.' });
        return;
      }
  
      res.status(200).json(employeeData);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
// CREATE an employee
router.post('/', async (req, res) => {
    try {
      const newEmpData = await Employee.create(req.body);
      res.status(200).json(newEmpData);
    } catch (err) {
      res.status(400).json(err);
    }
});

// UPDATE an employee based on their employee_id
router.put('/:employee_id', (req, res) => {
    // Calls the update method on the Employee model
    Employee.update(
      {
        // Only updating the employee's role
        role_id: req.body.role_id,
      },
      {
        // Gets the employee based on the ID given in the request
        where: {
          employee_id: req.params.employee_id,
        },
      }
    )
      .then((updatedEmployee) => {
        // Sends the updated employee as a json response
        res.json(updatedEmployee);
      })
      .catch((err) => res.json(err));
});
  
module.exports = router;