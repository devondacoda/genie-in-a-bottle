const router = require('express').Router();
const { Product } = require('../db/models');
const { Order } = require('../db/models');

// router.route let's us chain multiple VERB requests off of the same path
// Helps keep code DRY
router.route('/')
  .get((req, res, next) => {
    Product.findAll()
      .then((allProducts) => {
        res.json(allProducts);
      })
      .catch(next);
  })
  .post((req, res, next) => {
    Product.findOrCreate({
      where: req.body,
    })
      .then((createdProduct) => {
        res.status(201).json(createdProduct);
      })
      .catch(next);
  });

router.route('/:productId')
  .get((req, res, next) => {
    Product.findById(Number(req.params.productId))
      .then((product) => {
        res.json(product);
      })
      .catch(next);
  })
  .put((req, res, next) => {
    const productId = req.params.productId;
    Product.findOne({
      where: {
        id: productId,
      },
    })
      .then(productToUpdate => productToUpdate.update(req.body))
      .then(updatedProduct => res.json(updatedProduct))
      .catch(next);
  })
  .delete((req, res, next) => {
    const productId = req.params.productId;
    let destroyedProduct;
    Product.findOne({
      where: {
        id: productId,
      },
    })
      .then((productToDelete) => {
        destroyedProduct = productToDelete.name;
        productToDelete.destroy();
      })
      .then(() => res.send(`${destroyedProduct} is destroyed`))
      .catch(next);
  });

  // Adding product to cart

  router.put('/:productId/add', (req, res, next) => {
    const productId = Number(req.params.productId);
    const userId = Number(req.session.passport.user);
    const { quantity } = req.body;
    Product.addToCart(productId, userId, quantity)
      .then((addedItem) => res.status(201).json(addedItem))
  })

module.exports = router;

