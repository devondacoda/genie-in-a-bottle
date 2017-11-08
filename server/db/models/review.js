const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  title: {
    type: Sequelize.TEXT,
    validate: { len: [1, 140] },
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: { len: [1, 500] },
  },
  stars: {
    type: Sequelize.ENUM('1', '2', '3', '4', '5'),
  },
});

module.exports = Review;
