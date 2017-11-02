const db = require('../server/db/db');
const User = require('../server/db/models/user');
const Product = require('../server/db/models/product');
const Faker = require('faker');

function users() {
  Faker.seed(123);
  const x = [];
  for (let i = 0; i < 5; i++) {
    x.push(User.create({
      name: Faker.name.findName(),
      email: Faker.internet.email(),
      googleId: Faker.internet.userName(),
      salt: Faker.image.avatar(),
      password: Faker.lorem.word(1),
    }));
  }
  return x;
}

function product() {
  Faker.seed(123);
  const products = [];
  for (let i = 0; i < 25; i++) {
    products.push(Product.create({
      name: Faker.commerce.productName(),
      price: Faker.commerce.price(),
      description: Faker.lorem.paragraph(3),
      picture: Faker.image.avatar(),
      inventory: Math.floor(Math.random() * 4) + 1,
    }));
  }
  return products;
}

db
  .sync({ force: true })
  .then(() => Promise.all(users()))
  .then(() => Promise.all(product()))
  .then(() => {
    console.log('Seeding successful');
    db.close();
    return null;
  });
