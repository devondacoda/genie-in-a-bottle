const router = require('express').Router();
const { User } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next);
});

router.get('/:userId', (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
    .then(users => res.json(users))
    .catch(next);
});

router.post('/', (req, res, next) => {
  User.findOrCreate({
    where: req.body,
  })
    .then(createdUser =>
      res.status(201)
        .json(createdUser))
    .catch(next);
});

router.put('/:userId', (req, res, next) => {
  const userId = req.params.userId;
  User.findOne({
    where: {
      id: userId,
    },
  })
    .then(userToUpdate => userToUpdate.update(req.body))
    .then(updatedUser => res.json(updatedUser))
    .catch(next);
});

router.get('/:userId', (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
    .then(users => res.json(users))
    .catch(next);
});

router.delete('/:userId', (req, res, next) => {
  const userId = req.params.userId;
  let destroyedUser;
  User.findById(userId)
    .then((userToDelete) => {
      destroyedUser = userToDelete.name;
      userToDelete.destroy();
    })
    .then(() => res.send(`${destroyedUser} is destroyed`))
    .catch(next);
});
