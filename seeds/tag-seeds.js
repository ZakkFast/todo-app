const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Urgent'
  },
  {
    tag_name: 'Work'
  },
  {
    tag_name: 'Leisure'
  },
  {
    tag_name: 'Home'
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;

