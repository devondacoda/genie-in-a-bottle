/* global describe beforeEach it */
const { expect } = require('chai');
const db = require('../index');

const Address = db.model('address');

describe('Address model', () => {
  beforeEach(() => db.sync({ force: true }));

  describe('createAddress', () => {
    describe('correctAddress', () => {
      let testAddress;

      beforeEach(() => Address.create({
        line_1: 'testing line 1',
        line_2: 'nothing here',
        city: 'new york',
        state: 'NY',
        zip: '11234',
      })
        .then((address) => {
          testAddress = address;
        }));

      it('able to read properties', () => {
        expect(testAddress.state).to.be.equal('NY');
      });
    }); // end describe('correctPassword')
  }); // end describe('instanceMethods')
}); // end describe('User model')
