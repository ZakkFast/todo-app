const router = require('express').Router();
const tagRoutes = require('./tag-routes');

router.use('/tag', tagRoutes);

module.exports = router;