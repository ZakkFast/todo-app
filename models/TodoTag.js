const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class TodoTag extends Model {}

TodoTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    todo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'todo',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'todotag',
  }
);

module.exports = TodoTag;
