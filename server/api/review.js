const router = require('express').Router();
const { Review } = require('../db/models');

module.exports = router;

router.route('/:productId').get((req, res, next) => {
  const { productId } = req.params;
  Review.findAll({
    where: {
      productId,
    },
  })
    .then(foundOrders => res.json(foundOrders))
    .catch(next);
});
