const router = require('express').Router();
const { Review, User } = require('../db/models');

module.exports = router;

router.route('/:productId')
  .get((req, res, next) => {
    const { productId } = req.params;
    Review.findAll({
      include: [{ model: User }],
      where: {
        productId,
      },
    })
      .then(foundOrders => res.json(foundOrders))
      .catch(next);
  })

  .post((req, res, next) => {
    console.log(req.session, '!#!#!#!##!#!#')
    console.log(req.body,'BODY');
    const { productId } = req.params;
    Review.create(req.body)
      .then(createdReview => createdReview.setUser(req.session.passport.user))
      .catch(next);
  });
