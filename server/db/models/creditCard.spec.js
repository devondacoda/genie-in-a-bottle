/* global describe beforeEach it */

const { expect } = require('chai');
const db = require('../index');

const CreditCard = db.model('creditCard');

describe('CreditCard model', () => {
  beforeEach(() => db.sync({ force: true }));

  describe('createCC', () => {
    describe('correctCC', () => {
      let testCC;

      beforeEach(() => CreditCard.create({
        name: 'Brian',
        number: '4444333322221111',
        expMonth: '02',
        expYear: 2017,
        cvc: '6345',
      })
        .then((CC) => {
          testCC = CC;
        }));

      it('returns number', () => {
        expect(testCC.number).to.be.equal('4444333322221111');
      });

      it('returns name', () => {
        expect(testCC.name).to.be.equal('Brian');
      });

      it('returns expYear', () => {
        expect(testCC.expYear).to.be.equal(2017);
      });
    });
  });
});
