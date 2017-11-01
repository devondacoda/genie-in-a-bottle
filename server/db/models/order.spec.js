// /* global describe beforeEach it */

// const { expect } = require('chai');
// const db = require('../index');

// const Order = db.model('order');
// describe('Order model', () => {
//   beforeEach(() => db.sync({ force: true }));

//   describe('Order model', () => {
//     describe('Order', () => {
//       let emptyOrder;

//       beforeEach(() => Order.create({
//         name: 'empty bottle',
//         description: 'empty bottle',
//         price: 24.54,
//         inventory: 1,
//         category: 'stuff',
//       }).then((product) => {
//         emptyBottle = product;
//       }));

//       it('returns formatted currency', () => {
//         expect(emptyBottle.price).to.be.equal('$24.54');
//       });
//     });
//   });
// });
