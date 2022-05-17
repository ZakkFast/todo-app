const router = require('express').Router();
const { Todo, Tag, TodoTag } = require('../../models');

// @router   GET api/todo
// @desc     Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll({
      include: [
        {
          model: Tag,
          through: TodoTag,
        },
      ],
      // Front end will pass sort order through headers
      order: [[req.header('SORT_BY'), 'ASC']],
    });
    if (!todos) {
      res.status(404).send('No todos found');
    } else {
      res.status(200).json(todos);
    }
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @router   GET api/todo
// @desc     Get all todos
// @req.body
/*          {
             "todo_name": "Meeting with Mark",
             "description": "Need to bring presentation materials",
             "due_date": "1900-01-01"
             tagIds: [1, 2, 3, 4]
            }
*/
router.post('/', (req, res) => {
  Todo.create(req.body)
    .then((todo) => {
      // if there's todo tags, we need to create pairings to bulk create in the todoTag model
      if (req.body.tagIds && req.body.tagIds.length) {
        const todoTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            todo_id: todo.id,
            tag_id,
          };
        });
        return TodoTag.bulkCreate(todoTagIdArr);
      }
      // if no product tags, just respond
      res.status(201).json(todo);
    })
    .then((todo) => res.status(201).json(todo))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// @router   GET api/todo
// @desc     Get all todos
router.delete('/:id', async (req, res) => {
  try {
    const deleteTodo = await Todo.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send('Todo deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
