const router = require('express').Router();
const productsRouter = require('./products');
module.exports = router

router.use('/users', require('./users'));
router.use('/products', productsRouter);

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
