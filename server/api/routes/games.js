const express = require('express');
const router = express.Router;


//lista wszystkich dostępnych gier w wypożyczalni
router.get('/', (req, res, next) => {
  res.status(200).json({ wiadomość: 'ok' });
});
module.exports = games;
