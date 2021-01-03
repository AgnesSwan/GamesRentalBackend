const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const gamesRoute = require('./api/routes/games');
const orderRoute = require('./api/routes/orders');

mongoose.connect(

  'mongodb+srv://ness:' +
  process.env.hasloAtlasa +
  '@syrenka.6l7qa.mongodb.net/shop?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);



//parsowanie body
app.use(bodyParser.json());




app.use('/games', gamesRoute);
app.use('/orders', orderRoute);

app.use((req, res, next) => {
  const error = new Error('Nie odnaleziono');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ wiadomość: error.message });
});

module.exports = app;