const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://fgsoehssvpnwyv:d025277eb3891b34e76680e4d28a1ab518f6381f52c6d1f27e8f2f0ab92593cd@ec2-54-227-237-223.compute-1.amazonaws.com:5432/deahqq74ptej9', {
  logging: false,
});
module.exports = db;
