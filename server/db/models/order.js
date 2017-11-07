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
  total: {
    type: Sequelize.DECIMAL,
    defaultValue: 0,
  },
  time: {
    // getter using js date.now probably -brian
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

Order.findOrCreateCart = function (UserId) {
  return Order.findCreateFind({ where: { userId: UserId, isCart: true, status: 'Pending' } });
};


module.exports = Order;
