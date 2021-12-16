const express = require('express');
const { body } = require('express-validator');
const usersController = require('../../controllers/users');

const router = express.Router();
const { validator } = require('../../middlewares/validate');

router
  .route('/login')
  .post(
    body('username', 'Invalid username').isString().trim().notEmpty(),
    body('password', 'Invalid password').isString().trim().notEmpty(),
    validator,
    usersController.logIn
  );
router
  .route('/')
  .post(
    body('username', 'Invalid username').isString().trim().notEmpty(),
    body('password', 'Invalid password').isString().trim().notEmpty(),
    validator,
    usersController.createUser
  );

module.exports = router;
