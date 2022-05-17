const router = require('express').Router();
const tagRoutes = require('./tag-routes');
const todoRoutes = require('./todo-routes');
const userRoutes = require('./user-routes');


router.use('/tag', tagRoutes);
router.use('/todo', todoRoutes);
router.use('/user', userRoutes)

module.exports = router;
