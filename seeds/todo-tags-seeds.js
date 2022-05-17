const { TodoTag } = require('../models');

const todoTagsData = [
  {
    todo_id: 1,
    tag_id: 3,
  },
  {
    todo_id: 1,
    tag_id: 4,
  },
  {
    todo_id: 2,
    tag_id: 1,
  },
  {
    todo_id: 2,
    tag_id: 4,
  },
  {
    todo_id: 3,
    tag_id: 1,
  },
  {
    todo_id: 3,
    tag_id: 4,
  },
  {
    todo_id: 4,
    tag_id: 1,
  },
  {
    todo_id: 4,
    tag_id: 2,
  },
  {
    todo_id: 5,
    tag_id: 2,
  },
  {
    todo_id: 6,
    tag_id: 3,
  },
  {
    todo_id: 6,
    tag_id: 4,
  },
  {
    todo_id: 7,
    tag_id: 3,
  },
  {
    todo_id: 8,
    tag_id: 1,
  },
  {
    todo_id: 8,
    tag_id: 2,
  },
];

const seedTodoTags = () => TodoTag.bulkCreate(todoTagsData);

module.exports = seedTodoTags;
