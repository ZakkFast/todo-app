const { User } = require('../models');

const userData = {
    username: 'johndoe',
    user_password: 'password',
};

const seedUsers = () => User.create(userData);

module.exports = seedUsers;