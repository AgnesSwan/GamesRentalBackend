const express = require('express');
const router = express.Router();

const GamesController = require('../../controllers/games');
const checkAuth = require('../middleware/check-auth');
router.get('/', GamesController.games_get_all);
router.post('/',  GamesController.games_new);
router.patch('/:gameId', checkAuth, GamesController.game_update);
router.delete('/:gameId', checkAuth, GamesController.game_delete);
module.exports = router;
