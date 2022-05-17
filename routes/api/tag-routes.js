const router = require('express').Router();
const { Tag } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const getTags = await Tag.findAll();
    res.status(200).json(getTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
    try {
      const createTag = await Tag.create(req.body);
      res.status(200).json(createTag);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
