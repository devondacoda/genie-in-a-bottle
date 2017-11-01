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
      name: 'roger',
      email: 's@gmail.com',
      password: 'fdf',
      salt: '1',
      googleId: 'brian',
    }, {
      name: 'brian',
      email: 'thisisbrian@gmail.com',
      password: 'thisismypassword',
      salt: 'andpepper',
      googleId: 'BRIAN',
    }]));

    it('GET /api/users', () => request(app)
      .get('/api/users')
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an('array');
        expect(res.body[0].name).to.be.equal('roger');
        expect(res.body[0].email).to.be.equal('s@gmail.com');
        expect(res.body.length).to.be.equal(2);
      }));

    it('POST /api/users', () => request(app)
      .post('/api/users')
      .send({
        name: 'aname',
        email: 'donkeybrains@gmail.com',
        password: 'birds',
        salt: 'milksteak',
        googleId: 'stillbrian',
      })
      .expect(201)
      .then((res) => {
        const createdUser = res.body[0];
        const wasCreated = res.body[1];
        expect(createdUser).to.be.an('object');
        expect(createdUser.email).to.be.equal('donkeybrains@gmail.com');
        expect(wasCreated).to.be.equal(true);
      }));
  });
});
