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
  },
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

Order.findOrCreateCart = function (UserId) {
  return Order.findOrCreate({
    where: {
      userId: UserId,
      isCart: true,
    },
  });
};


module.exports = Order;
