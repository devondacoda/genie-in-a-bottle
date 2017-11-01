const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
// orders will only be updated by status
  isCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  status: {
    type: Sequelize.ENUM('Shipped', 'Pending', 'Fulfilled'),
    allowNull: false,
  },
  //   association table -nadim
  //   products: {
  //     type: Sequelize.ARRAY(Sequelize.INTEGER),
  //   },
  total: {
    type: Sequelize.DECIMAL,
    defaultValue: 0,
  },
  time: {
    // getter using js date.now probably -brian
    type: Sequelize.TIME,
    defaultValue: 'now',
  },
});

module.exports = Order;
