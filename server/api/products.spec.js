/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {
    const createdProducts;

    beforeEach(() => {
      return Product.bulkCreate([{
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
      }]).then((products) => {
        createdProducts = products;
      })
    })

    it('GET /api/products', () => {
      return request(app)
        .get('/api/products')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.be.equal(2);
          expect(res.body[0].name).to.be.equal('empty bottle');
          expect(res.body[0].description).to.be.equal('empty bottle');
          expect(res.body[0].price).to.be.equal('$24.54');
        })
    })
  })
})
