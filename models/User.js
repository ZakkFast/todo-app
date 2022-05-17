const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    user_password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    hooks: {
      beforeCreate: async (user) => {
        if (user.user_password) {
          const salt = await bcrypt.genSaltSync(10, 'a');
          user.user_password = bcrypt.hashSync(user.user_password, salt);
        }
      },
    },
    instanceMethods: {
      validPassword: (user_password) => {
        return bcrypt.compareSync(user_password, this.user_password);
      },
    },
  }
);

module.exports = User;