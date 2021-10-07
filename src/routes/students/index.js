const express = require('express');
const studentsController = require('../../controllers/students');

const router = express.Router();

router.route('/').get(studentsController.getAllStudents);

module.exports = router;
