const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING(140),
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: { len: [0, 10000] },
  },
  likes: {
    type: Sequelize.ENUM('Like', 'Dislike'),
  },
});

module.exports = Review;
