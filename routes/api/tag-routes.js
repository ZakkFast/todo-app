const router = require('express').Router();
const { Tag } = require('../../models');

// @router   GET api/tag
// @desc     Get all tags
router.get('/', async (req, res) => {
  try {
    const getTags = await Tag.findAll();
    res.status(200).json(getTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @router   POST api/tag
// @desc     Create Tag
router.post('/', async (req, res) => {
    try {
      const createTag = await Tag.create(req.body);
      res.status(201).json(createTag);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
