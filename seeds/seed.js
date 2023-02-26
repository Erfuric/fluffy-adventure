const sequelize = require('../config/connection');
const { Department, Employee, Role } = require('../models');

async function syncDatabase() {
    await sequelize.sync({ force: true });
    console.log('Database synced');
  }
  
  // Seed the database with sample data
  async function seedDatabase() {
    // Create some departments
    const engineering = await Department.create({ name: 'Engineering' });
    const sales = await Department.create({ name: 'Sales' });
  
    // Create some roles
    const engineer = await Role.create({ title: 'Engineer', salary: 100000, department_id: engineering.id });
    const salesperson = await Role.create({ title: 'Salesperson', salary: 80000, department_id: sales.id });
  
    // Create some employees
    const john = await Employee.create({ first_name: 'John', last_name: 'Doe', role_id: engineer.id });
    const jane = await Employee.create({ first_name: 'Jane', last_name: 'Doe', role_id: salesperson.id, manager_id: john.id });
    const bob = await Employee.create({ first_name: 'Bob', last_name: 'Smith', role_id: salesperson.id, manager_id: john.id });
  
    console.log('Database seeded');
  }
  
  // Call the syncDatabase and seedDatabase functions
  syncDatabase().then(() => seedDatabase()).catch(console.error);