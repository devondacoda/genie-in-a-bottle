const User = require('./user');
const Address = require('./address');
const CreditCard = require('./creditCard');
const Product = require('./product');
const Order = require('./order');
const OrderItemList = require('./orderItemList');
const Review = require('./review');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */


User.hasMany(CreditCard);
User.hasMany(Address);

Order.belongsTo(Address, { as: 'billingAddress' });
Order.belongsTo(Address, { as: 'shippingAddress' });
Order.belongsToMany(Product, { through: 'orderItemLists' });
Product.belongsToMany(Order, { through: 'orderItemLists' });
Review.belongsTo(User);
Review.belongsTo(Product);

Order.belongsTo(User);

CreditCard.belongsTo(User);

module.exports = {
  User,
  Address,
  CreditCard,
  Product,
  Order,
  OrderItemList,
  Review,
};
