const Sequelize = require('sequelize');
const db = require('../db');

const OrderItemList = db.define('orderItemLists', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  fixedPrice: {
    type: Sequelize.DECIMAL(13, 2),
  },
})

module.exports = OrderItemList;
