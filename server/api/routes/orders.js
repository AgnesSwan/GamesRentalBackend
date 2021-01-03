const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const OrdersController = require('../../controllers/orders');

//lista wszystkich dostępnych gier w wypożyczalni
router.get('/', OrdersController.orders_get_all);
//dodanie nowej gry
router.post('/', OrdersController.orders_new);
module.exports = router;