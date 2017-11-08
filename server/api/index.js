const router = require('express').Router();
const productsRouter = require('./products');
const usersRouter = require('./users');
const orderRouter = require('./orders');
const reviewRouter = require('./review');

module.exports = router;

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/orders', orderRouter);
router.use('/review', reviewRouter);

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
