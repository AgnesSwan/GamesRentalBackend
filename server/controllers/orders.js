const mongoose = require('mongoose');
const Order = require('../api/models/order');


exports.orders_get_all = (req, res, next) => {
  Order.find()
    .then((orderList) => {
      res.status(200).json({
        wiadomość: 'lista rezerwacji',
        info: orderList,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};
exports.order_new = (req, res, next) => {  
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    quantity: req.body.quantity,
    game: req.body.game
  });
  order.save()
    .then(result => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.order_delete = (req, res, next) => {
  const id = req.params.orderId;
  Order.findByIdAndDelete(id)
    .then((doc) => {
      res.status(200).json({
        wiadomość: 'Anulowano rezerwację o nr ' + id,
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};