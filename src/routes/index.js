const express = require('express');
const students = require('./students');
const users = require('./users');

const router = express.Router();

router.use('/students', students);

router.use('/users', users);

module.exports = router;
