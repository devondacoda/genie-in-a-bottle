const router = require('express').Router();
const { User } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next);
});

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(createdUser =>
      res.status(201)
        .json(createdUser))
    .catch(next);
});
