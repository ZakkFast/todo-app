const seedUsers = require('./user-seeds');
const seedTags = require('./tag-seeds');
const seedTodos = require('./todo-seeds');
const seedTodoTags = require('./todo-tags-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedTags();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTodos();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedTodoTags();
  console.log('\n----- TODO-TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
