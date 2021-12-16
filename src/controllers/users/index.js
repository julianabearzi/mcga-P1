const Users = require('../../model/Users');

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

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({
      error: true,
      msg: 'Internal Server Error',
    });
  }
};

const logIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const foundValues = await Users.findOne({
      username,
      password,
    });
    if (foundValues) {
      res.status(200).json({});
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

module.exports = {
  createUser,
  logIn,
};
