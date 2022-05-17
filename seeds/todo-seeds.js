const { Todo } = require('../models');

const todoData = [
  {
    todo_name: 'Walk the dog',
    description: 'Take Spunky to the new dog park in O-Town',
    tagIds: [3, 4],
    due_date: '02-11-2023'
  },
  {
    todo_name: 'Fix pod-racer',
    description: 'Need to take a look at the power couplings. (Be sure to not go near the energy-beam this time..)',
    tagIds: [1, 4],
    due_date: '02-15-2023'
  },
  {
    todo_name: 'Finishing collecting infinity Stones',
    description: 'There has to be out there somewhere... right?',
    tagIds: [1, 2],
    due_date: '01-01-2023'
  },
  {
    todo_name: 'Meeting with Sir Bedevere the Wise',
    description: 'Sir Bedevere wishes to dicuss his latest theory on how the world is banana-shaped',
    tagIds: [2],
    due_date: '01-01-2023'
  },
  {
    todo_name: 'Deliever the Amulet of Kings to Jauffre',
    description: 'Just one more side quest.. then to Weynon Priory',
    tagIds: [3, 4],
    due_date: '08-12-2056'
  },
  {
    todo_name: 'Tea Party in Wonderland',
    description: 'Need to also bring gift for Dormouse. Also, do not bring up Cats around them..',
    tagIds: [3],
    due_date: '06-18-2023'
  },
  {
    todo_name: 'Meeting with Marcus Aurelius Antoninus',
    description: 'Wants to discuss his plans for the Parthian Empire.',
    tagIds: [1, 2],
    due_date: '01-01-0160'
  },
  {
    todo_name: 'Delete this Todo',
    description: 'Do it. I dare you.',
    tagIds: [3, 4],
    due_date: '04-05-2023'
  },
];

const seedTodos = () => Todo.bulkCreate(todoData);

module.exports = seedTodos;
