const jwt = require('jsonwebtoken');

const generateJWT = (_id, username) =>
  new Promise((resolve, reject) => {
    const payload = { _id, username };
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('The token could not be generated ');
        }

        resolve(token);
      }
    );
  });

module.exports = {
  generateJWT,
};
