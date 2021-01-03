const express = require('express');
const router = express.Router();
const GamesController = require('../../controllers/games');

//lista wszystkich dostępnych gier w wypożyczalni
router.get('/', GamesController.games_get_all);
//dodanie nowej gry
router.post('/', GamesController.games_new);
module.exports = router;
