const router = require('express').Router();
const productsRouter = require('./products');
const usersRouter = require('./users');

module.exports = router;

router.use('/users', usersRouter);
router.use('/products', productsRouter);

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
