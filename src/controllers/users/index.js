/* eslint-disable no-underscore-dangle */
const Users = require('../../model/Users');
const { generateJWT } = require('../../helpers/jwt');

const createUser = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({
        error: true,
        msg: 'Missing fields to create a user',
      });
    }
    const user = new Users(req.body);
    const newUser = await user.save();

    const token = await generateJWT(newUser._id, newUser.username);

    return res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      password: newUser.password,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      msg: 'Internal Server Error',
    });
  }
};

const logIn = async (req, res) => {
  try {
    const user = req.body;
    const foundValues = await Users.findOne({
      username: user.username,
      password: user.password,
    });
    if (foundValues) {
      const token = await generateJWT(foundValues._id, foundValues.username);
      res.status(200).json({
        _id: foundValues._id,
        token,
      });
    } else {
      res.status(400).json({ errors: ['Invalid username/password'] });
    }
  } catch (error) {
    return res.status(500).json({
      error: true,
      msg: 'Internal Server Error',
    });
  }
};

const revalidateToken = async (req, res) => {
  const { _id, username } = req;
  const token = await generateJWT(_id, username);

  res.json({
    _id,
    username,
    token,
  });
};

module.exports = {
  createUser,
  logIn,
  revalidateToken,
};
