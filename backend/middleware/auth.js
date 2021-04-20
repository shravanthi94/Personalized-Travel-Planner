const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  //Get the requested web token from user
  const token = req.header('x-auth-token');

  // If no token was found
  if (!token) {
    res.status(401).json({ msg: 'No token, authorization is denied.' });
  }

  // Decode web token and verify
  try {
    const decoded = jwt.decode(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ msg: 'Token is invalid' });
  }
};
