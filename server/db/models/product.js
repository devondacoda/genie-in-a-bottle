const Sequelize = require('sequelize');
const db = require('../db');
const Order = require('../models/order');

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
    type: Sequelize.FLOAT,
    allowNull: false,
    // get() {
    //   // Format the currency to include a '$' sign
    //   const formattedPrice = this.getDataValue('price').toFixed(2);
    //   return `$${formattedPrice}`;
    // },
  },
  picture: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
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

Product.addToCart = function (UserId) {
  Order.findOne({
    where: {
      userId: UserId,
      isCart: true,
    },
  })
    .then(foundCart => {
      foundCart.addProducts(3)
    })
};

module.exports = Product;
