const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization.split(' ')[1],
      process.env.hasloJWT
    );
    next();
  } catch (err) {
    res.status(401).json({ wiadomość: 'Błąd autoryzacji' });
  }
};
