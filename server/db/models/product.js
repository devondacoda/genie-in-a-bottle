const Sequelize = require('sequelize');
const db = require('../db');

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
    get() {
      // Format the currency to include a '$' sign
      return `$${this.getDataValue('price')}`;
    },
  },
  picture: {
    type: Sequelize.STRING,
    defaultValue: 'http://clipart-library.com/image_gallery/123944.png',
    validate: {
      isUrl: true,
    },
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
  },
});

module.exports = Product;
