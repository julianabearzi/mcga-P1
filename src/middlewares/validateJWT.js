/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');

const validateJWT = (req, res, next) => {
  const token = req.header('x-token');
  if (!token) {
    return res.status(401).json({ ok: false });
  }

  try {
    const { _id, username } = jwt.verify(token, process.env.SECRET_JWT_SEED);

    req._id = _id;
    req.username = username;
  } catch (error) {
    return res.status(401).json();
  }
  next();
};

module.exports = {
  validateJWT,
};
