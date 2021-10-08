const express = require('express');
const studentsController = require('../../controllers/students');

const router = express.Router();
const { ValidateStudent } = require('../../validators/students');

router.route('/').get(studentsController.getAllStudents);
router.route('/').post(ValidateStudent, studentsController.createStudent);

module.exports = router;
