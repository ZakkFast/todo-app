require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: "dbm8c8be0cedsb",
  username: "luspcykhnocszl",
  password: "a45e261a4f588e7ca9121a084a43cb2dbcd148025f28d35b42c61c3da32e2588",
  host: "ec2-44-194-117-205.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
});

module.exports = sequelize;
