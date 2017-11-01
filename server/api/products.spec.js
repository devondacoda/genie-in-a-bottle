/* global describe beforeEach it */

const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');

const Product = db.model('product');

describe('Product routes', () => {
  beforeEach(() => db.sync({ force: true })
    .then(() => {
      Product.bulkCreate([{
        name: 'empty bottle',
        description: 'empty bottle',
        price: 24.54,
        inventory: 1,
        category: 'stuff',
      }, {
        name: 'full bottle',
        description: 'full bottle',
        price: 100,
        inventory: 10,
        category: 'more stuff',
      }]);
    }));

  describe('GET Products', () => {
    describe('GET /api/products', () => {
      it('GET /api/products', () => request(app)
        .get('/api/products')
        .expect(200)
        .then((res) => {
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.be.equal(2);
          expect(res.body[0].name).to.be.equal('empty bottle');
          expect(res.body[0].description).to.be.equal('empty bottle');
          expect(res.body[0].price).to.be.equal('$24.54');
        }));
    });
    describe('GET /api/products/:productId', () => {
      it('GET /api/products/:productId', () => request(app)
        .get('/api/products/1')
        .expect(200)
        .then((res) => {
          expect(res.body).to.be.an('object');
          expect(res.body.name).to.be.equal('empty bottle');
          expect(res.body.price).to.be.equal('$24.54');
        }));
    });
  });
});
