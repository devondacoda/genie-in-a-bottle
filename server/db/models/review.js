const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  stars: {
    type: Sequelize.ENUM('1', '2', '3', '4', '5'),
  },
});

module.exports = Review;
