const express = require('express');
const app = express();
const gamesRoute = require('./api/routes/games');
app.use('/games', gamesRoute);
module.express = app;