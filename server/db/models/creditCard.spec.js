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

      it('returns true if number is correct', () => {
        expect(testCC.number).to.be.equal('4444333322221111');
      });

      it('returns true if name is correct', () => {
        expect(testCC.name).to.be.equal('Brian');
      });

      it('returns true if expYear is correct', () => {
        expect(testCC.expYear).to.be.equal(2017);
      });
    });
  });
});
