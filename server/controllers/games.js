const mongoose = require('mongoose');
const Game = require('../api/models/game');

exports.games_get_all = (req, res, next) => {
  Game.find()
    .then((gameList) => {
      res.status(200).json({
        wiadomość: 'lista dostępnych gier',
        info: gameList,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};
exports.games_new = (req, res, next) => {
  const game = new Game({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    priceForRent: req.body.priceForRent,
    difficultyLevel: req.body.difficultyLevel,
    age: req.body.age,
    device: req.body.device,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  });
  game
    .save()
    .then((doc) => {
      res.status(200).json({
        wiadomość: 'Dodano nowy produkt',
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};

exports.game_update = (req, res, next) => {
  const id = req.params.gameId;
  Game.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      priceForRent: req.body.priceForRent,
      difficultyLevel: req.body.difficultyLevel,
      age: req.body.age,
      device: req.body.device,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
    },
    { new: true }
  )
    .then((doc) => {
      res.status(200).json({
        wiadomość: 'Gra o nr ' + id + ' została zmieniona ',
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};

exports.game_delete = (req, res, next) => {
  const id = req.params.gameId;
  Game.findByIdAndDelete(id)
    .then((doc) => {
      res.status(200).json({
        wiadomość: 'Usunięto grę o nr ' + id,
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};