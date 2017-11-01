const router = require('express').Router();
const { Product } = require('../db/models');

// router.route let's us chain multiple VERB requests off of the same path
// Helps keep code DRY
router.route('/')
  .get((req, res, next) => {
    Product.findAll()
      .then((allProducts) => {
        res.json(allProducts);
      })
      .catch(next);
  });

module.exports = router;

