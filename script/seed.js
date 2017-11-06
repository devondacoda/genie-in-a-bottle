const db = require('../server/db/db');
const User = require('../server/db/models/user');
const Product = require('../server/db/models/product');
const Faker = require('faker');
const Promise = require('bluebird');


function users() {
  Faker.seed(123);
  const usersProm = [];
  for (let i = 0; i < 5; i++) {
    usersProm.push(User.build({
      name: Faker.name.findName(),
      email: Faker.internet.email(),
      googleId: Faker.internet.userName(),
      salt: Faker.image.avatar(),
      password: '1',
    }));
  }
  return usersProm;
}

function createUsers() {
  return Promise.map(users(), user => user.save());
}

function product() {
  Faker.seed(123);
  const products = [];
  for (let i = 1; i < 16; i++) {
    products.push(Product.build({
      name: Faker.commerce.productName(),
      price: Faker.commerce.price(),
      description: Faker.lorem.paragraph(3),
      picture: `/img/${i}.jpg`,
      inventory: Math.floor(Math.random() * 10) + 1,
    }));
  }
  return products;
}

function createProducts() {
  return Promise.map(product(), user => user.save());
}

db
  .sync({ force: true })
  .then(() => Promise.all(createUsers()))
  .then(() => Promise.all(createProducts()))
  .then(
    () => {
      console.log('Seeding successful');
    },
    (err) => {
      console.error('Error while seeding');
      console.error(err.stack);
    },
  )
  .finally(() => {
    db.close();
    return null;
  });
