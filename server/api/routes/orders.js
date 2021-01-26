const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const OrdersController = require('../../controllers/orders');
const checkAuth = require('../middleware/check-auth');

//lista wszystkich dostępnych gier w wypożyczalni
router.get('/', checkAuth, OrdersController.orders_get_all);
//dodanie nowej gry
router.post('/', checkAuth, OrdersController.order_new);
router.delete('/:orderId', checkAuth, OrdersController.order_delete);

module.exports = router;