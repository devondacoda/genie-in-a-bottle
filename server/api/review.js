const router = require('express').Router();
const { Review } = require('../db/models');

module.exports = router;

router.route('/').get((req, res, next) => {
  Review.findAll()
    .then(foundOrders => res.json(foundOrders))
    .catch(next);
});
