const { check } = require('express-validator');
const { validator } = require('../middlewares/validate');

const ValidateStudent = [
  check('name')
    .isString()
    .trim()
    .withMessage('Please enter a valid name')
    .optional(),
  check('lastName')
    .isString()
    .trim()
    .withMessage('Please enter a valid last name')
    .optional(),
  check('age')
    .isNumeric()
    .trim()
    .withMessage('Please enter a valid age')
    .optional(),
  check('course')
    .isString()
    .trim()
    .withMessage('Please enter a valid course')
    .optional(),
  check('turn')
    .custom((value) => {
      if (value === 'morning' || value === 'afternoon') {
        return true;
      }
      throw new Error('Please enter a valid turn');
    })
    .optional(),
  check('amount')
    .isNumeric()
    .trim()
    .withMessage('Please enter a valid amount')
    .optional(),

  (req, res, next) => {
    validator(req, res, next);
  },
];

module.exports = {
  ValidateStudent,
};
