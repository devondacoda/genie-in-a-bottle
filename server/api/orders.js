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
  })

  .put((req, res, next) => {
    const orderId = req.params.orderId;
    Order.findOne({
      where: {
        id: orderId,
      },
    })
      .then(orderToUpdate => orderToUpdate.update(req.body))
      .then(updatedOrder => res.json(updatedOrder))
      .catch(next);
  })
  .delete((req, res, next) => {
    const orderId = req.params.orderId;
    let destroyedOrder;
    Order.findOne({
      where: {
        id: orderId,
      },
    })
      .then((orderToDelete) => {
        destroyedOrder = orderToDelete.id;
        orderToDelete.destroy();
      })
      .then(() => res.send(`Order #${destroyedOrder} is destroyed`))
      .catch(next);
  });
