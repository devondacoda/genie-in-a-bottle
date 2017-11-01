/* global describe beforeEach it */

const { expect } = require('chai');
const db = require('../index');

const Product = db.model('product');
describe('Product model', () => {
  beforeEach(() => db.sync({ force: true }));

  describe('getter method', () => {
    describe('price', () => {
      let emptyBottle;

      beforeEach(() => Product.create({
        name: 'empty bottle',
        description: 'empty bottle',
        price: 24.54,
        inventory: 1,
        category: 'stuff',
      }).then((product) => {
        emptyBottle = product;
      }));

      it('returns formatted currency', () => {
        expect(emptyBottle.price).to.be.equal('$24.54');
      });

      it('has an inventory no less than 0', () => {
        emptyBottle.inventory = -1;
        emptyBottle.validate().then(() => {}, (reason) => {
          expect(reason).to.be.instanceOf(Error);
        });
      });
    });
  });
});
