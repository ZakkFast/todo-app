const router = require('express').Router();
const tagRoutes = require('./tag-routes');
const todoRoutes = require('./todo-routes');

router.use('/tag', tagRoutes);
router.use('/todo', todoRoutes);

module.exports = router;
