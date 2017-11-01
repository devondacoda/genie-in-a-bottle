const Sequelize = require('sequelize');
const db = require('../db');

const CreditCard = db.define('creditCard', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  number: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isCreditCard: true,
    },
  },
  expMonth: {
    type: Sequelize.ENUM(
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
    ),
    allowNull: false,
  },
  expYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 2017,
      max: 2027,
    },
  },
  cvc: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [3, 4],
    },
  },
});

module.exports = CreditCard;

// maybe make date validation more dynamic?
