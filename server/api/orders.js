const router = require('express').Router();
const { Order } = require('../db/models');

module.exports = router;

router.route('/')
  .get((req, res, next) => {
    Order.findAll()
      .then(foundOrders => res.json(foundOrders))
      .catch(next);
  })

  .post((req, res, next) => {
    Order.create(req.body).then(createdOrder =>
      res.send(`Order #${createdOrder.id} was created `))
      .catch(next);
  });

router.route('/:orderId')
  .get((req, res, next) => {
    const orderId = req.params.orderId;
    Order.findById(orderId)
      .then(foundOrder => res.json(foundOrder))
      .catch(next);
  });
