const router = require('express').Router();
const { Order, OrderItemList, Product } = require('../db/models');

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

// Route for getting current cart
router.get('/cart', (req, res, next) => {
  const userId = Number(req.session.passport.user);
  Order.findOne({
    where: { userId, isCart: true },
    include: [{ all: true, nested: true }] // Eager loading not working here? But works in route('/:orderId')
  })
  .then(order => {
    order.update({
      total: order.products.reduce((prev, curr) => {
        return (curr.price * curr.orderItemLists.quantity) + prev
      }, 0)
    })
    res.json(order);
  })
})

router.route('/:orderId')
  .get((req, res, next) => {
    const orderId = req.params.orderId;
    Order.findOne({
      where: {id: orderId},
      include: [{ all: true, nested: true }]
    })
      .then(foundOrder => res.json(foundOrder))
      .catch(next);
  })

  .put((req, res, next) => {
    const { orderId } = req.params;
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

router.route('/user/orders')
  .get((req, res, next) => {
    const userId = Number(req.session.passport.user);
    Order.findAll({
      where: {
        userId,
        isCart: false,
      },
      include: [{ all: true, nested: true }]
    })
      .then(foundOrders => res.json(foundOrders))
      .catch(next);
  })
  .put((req, res, next) => {
    const userId = Number(req.session.passport.user);    
    Order.findOne({
      where: { userId, isCart: true },
      include: [{ all: true, nested: true }]
    })
      .then(foundCart => {
        return foundCart.update({
          isCart: false,
          status: 'Fulfilled',
        })
      })
    
    .then(checkedOutCart => {
      // const productsOnCart = checkedOutCart.products;
      return OrderItemList.findAll({
        where: {
          orderId: checkedOutCart.id,
        }
      })
    })
    .then(arrOfOrderItems => {
      arrOfOrderItems.map(item => {
        Product.findById(item.productId)
        .then(foundProduct => {
          foundProduct.update({
            inventory: foundProduct.inventory - item.quantity,
          })
          return [item, foundProduct.price]
        })
        .then(([item, price]) => {
          item.update({
            fixedPrice: price
          })
        })
      })
      .then(() => {
        return Order.create({status: 'Pending', isCart: true, userId})
      })
      .then((newCart) => {
        res.status(200).json(newCart);
      })
  })
});

