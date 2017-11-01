/* global describe beforeEach it */

const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');

const User = db.model('user');

describe('User routes', () => {
  beforeEach(() => db.sync({ force: true }));

  describe('/api/users/', () => {
    beforeEach(() => User.bulkCreate([{
      email: 's@gmail.com',
      password: 'fdf',
      salt: '1',
      googleId: 'brian',
    },{
      email: 'thisisbrian@gmail.com',
      password: 'thisismypassword',
      salt: 'andpepper',
      googleId: 'BRIAN',
    }]));

    it('GET /api/users', () => request(app)
      .get('/api/users')
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.an('array');
        expect(res.body[0].email).to.be.equal('s@gmail.com');
        expect(res.body.length).to.be.equal(2);
      }));
  });
});
