const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const gamesRoute = require('./api/routes/games');
const orderRoute = require('./api/routes/orders');
const userRoute = require('./api/routes/users');

app.use(bodyParser.json());

app.use(cors());
mongoose.connect(

  'mongodb+srv://ness:' +
  process.env.hasloAtlasa +
  '@syrenka.6l7qa.mongodb.net/shop?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.use('/games', gamesRoute);
app.use('/orders', orderRoute);
app.use('/users', userRoute);

app.use((req, res, next) => {
  const error = new Error('Nie odnaleziono');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ wiadomość: error.message });
});

module.exports = app;