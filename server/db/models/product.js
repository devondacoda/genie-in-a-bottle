const Sequelize = require('sequelize');
const db = require('../db');
const Order = require('../models/order');
const OrderItemList = require('../models/orderItemList');


const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(13, 2),
    allowNull: false,
  },
  picture: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  category: {
    type: Sequelize.STRING,
  },
});

Product.addToCart = function (productId, userId, quantity) {
  return Order.findOne({
    where: {
      userId,
      isCart: true,
    },
  })
    .then(foundCart => {
      return OrderItemList.findCreateFind({
        where: {
          orderId: foundCart.id,
          productId
        }
      });     
    })
    .then(foundOrderItemList => {
      return foundOrderItemList[0].update({
          quantity: foundOrderItemList[0].quantity + Number(quantity)
        });
    })
};

module.exports = Product;

