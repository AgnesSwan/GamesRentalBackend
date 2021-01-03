const mongoose = require('mongoose');
const Order = require('../api/models/order');


exports.orders_get_all = (req, res, next) => {
  Order.find()
    .then((orderList) => {
      res.status(200).json({
        wiadomość: 'lista zamowienia',
        info: orderList,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};
exports.orders_new = (req, res, next) => {  //kod do post
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