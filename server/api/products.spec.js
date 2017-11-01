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

    it('GET /api/products/:productId', () => request(app)
      .get('/api/products/1')
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body.name).to.be.equal('empty bottle');
        expect(res.body.price).to.be.equal('$24.54');
      }));
  });

  describe('POST Products', () => {
    it('POST /api/products', () => request(app)
      .post('/api/products')
      .send({
        name: 'half full bottle',
        description: 'half empty bottle',
        price: 0.50,
        inventory: 1,
        category: 'stuff',
      })
      .expect(201)
      .then((res) => {
        const created = res.body[0];
        const wasCreated = res.body[1];

        expect(created).to.be.an('object');
        expect(created.name).to.be.equal('half full bottle');
        expect(created.price).to.be.equal('$0.50');
        expect(wasCreated).to.equal(true);
      }));
  });
});
