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
    }); // end describe('price')
  }); // end describe('getter method')

  describe('null values', () => {
    let productInstance;

    beforeEach(() => Product.create({
      name: 'empty bottle',
      description: 'empty bottle',
      price: 24.54,
      inventory: 1,
      category: 'stuff',
    }).then((product) => {
      productInstance = product;
    }));

    it('throws an error for a null name', () => {
      productInstance.name = null;

      productInstance.validate().then(
        () => {
          throw new Error('validation should fail when content is null');
        },
        (result) => {
          expect(result).to.be.instanceof(Error);
        },
      );
    });

    it('throws an error for a null description', () => {
      productInstance.description = null;

      productInstance.validate().then(
        () => {
          throw new Error('validation should fail when content is null');
        },
        (result) => {
          expect(result).to.be.instanceof(Error);
        },
      );
    });
  });
});
