const mongoose = require('mongoose');
//ref wskazanie modelu do ktorego chcemy się podłaczyc

const orderSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  },
  quantity: {
    type: Number,
    required: true
  }

});
module.exports = mongoose.model('Order', orderSchema);