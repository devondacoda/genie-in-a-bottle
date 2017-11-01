const Sequelize = require('sequelize');
const db = require('../db');

const Address = db.define('address', {
  line_1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  line_2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.ENUM(
      'AL',
      'AK',
      'AZ',
      'AR',
      'CA',
      'CO',
      'CT',
      'DE',
      'FL',
      'GA',
      'HI',
      'ID',
      'IL',
      'IN',
      'IA',
      'KS',
      'KY',
      'LA',
      'ME',
      'MD',
      'MA',
      'MI',
      'MN',
      'MS',
      'MO',
      'MT',
      'NE',
      'NV',
      'NH',
      'NJ',
      'NM',
      'NY',
      'NC',
      'ND',
      'OH',
      'OK',
      'OR',
      'PA',
      'RI',
      'SC',
      'SD',
      'TN',
      'TX',
      'UT',
      'VT',
      'VA',
      'WA',
      'WV',
      'WI',
      'WY',
    ),
    allowNull: false,
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
    },
  },
});

// Address.hook('beforeValidate', (address) => {
//   const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(address.zip)
//   if(isValidZip) => 
// })


module.exports = Address;
