const express = require('express');
const { param } = require('express-validator');
const studentsController = require('../../controllers/students');

const router = express.Router();
const { ValidateStudent } = require('../../validators/students');
const { validator } = require('../../middlewares/validate');

router.route('/').get(studentsController.getAllStudents);
router.route('/search').get(studentsController.getStudentsByTurn);
router
  .route('/:id')
  .get(param('id').isMongoId(), validator, studentsController.getStudentById);
router.route('/').post(ValidateStudent, studentsController.createStudent);
router
  .route('/:id')
  .delete(param('id').isMongoId(), validator, studentsController.deleteStudent);
router
  .route('/:id')
  .put(
    param('id').isMongoId(),
    ValidateStudent,
    studentsController.updateStudent
  );

module.exports = router;
