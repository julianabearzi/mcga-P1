const Students = require('../../model/Students');

const getAllStudents = async (req, res) => {
  try {
    const response = await Students.find();

    return res.status(200).json({
      data: response,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      msg: 'Internal Server Error',
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const response = await Students.findOne({ _id: req.params.id });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No student with the id of ${req.params.id}`,
      });
    }

    return res.status(200).json({
      data: response,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      msg: 'Internal Server Error',
    });
  }
};

const getStudentsByTurn = async (req, res) => {
  try {
    const response = await Students.find({
      turn: req.query.turn,
    });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No students in the turn ${req.query.turn}`,
      });
    }

    return res.status(200).json({
      data: response,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      msg: 'Internal Server Error',
    });
  }
};

const createStudent = async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.lastName ||
      !req.body.age ||
      !req.body.course ||
      !req.body.turn ||
      !req.body.amount
    ) {
      return res.status(400).json({
        error: true,
        msg: 'Missing fields to create a student',
      });
    }
    const student = new Students(req.body);
    const newStudent = await student.save();

    return res.status(201).json({
      data: newStudent,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      msg: 'Internal Server Error',
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    if (
      req.body.name === '' ||
      req.body.lastName === '' ||
      req.body.course === ''
    ) {
      return res.status(400).json({
        error: true,
        msg: 'Missing fields to update student',
      });
    }
    const studentUpdated = await Students.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!studentUpdated || studentUpdated.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No student with the id ${req.params.id}`,
      });
    }

    return res.status(201).json({
      msg: 'Student updated',
      data: studentUpdated,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      msg: 'Internal Server Error',
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const studentFound = await Students.findOneAndRemove({
      _id: req.params.id,
    });

    if (!studentFound || studentFound.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No student with the id ${req.params.id}`,
      });
    }

    return res.status(202).json({
      msg: 'Student deleted',
      data: studentFound,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      msg: 'Internal Server Error',
    });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  getStudentsByTurn,
  createStudent,
  updateStudent,
  deleteStudent,
};
