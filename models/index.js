const Todo = require('./Todo');
const Tag = require('./Tag');
const TodoTag = require('./TodoTag');
const User = require('./User');

Todo.belongsToMany(Tag, {
  through: TodoTag,
  foreignKey: 'todo_id',
});

Tag.belongsToMany(Todo, {
  through: TodoTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Todo,
  TodoTag,
  Tag,
  User,
};
