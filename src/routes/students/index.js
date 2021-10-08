const express = require('express');
const { param } = require('express-validator');
const studentsController = require('../../controllers/students');

const router = express.Router();
const { ValidateStudent } = require('../../validators/students');

router.route('/').get(studentsController.getAllStudents);
router.route('/').post(ValidateStudent, studentsController.createStudent);
router
  .route('/:id')
  .put(
    param('id').isMongoId(),
    ValidateStudent,
    studentsController.updateStudent
  );

module.exports = router;
