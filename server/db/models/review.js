const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  likes: {
    type: Sequelize.ENUM('Like', 'dislike'),
  },
});

module.exports = Review;
