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

module.exports = {
  getAllStudents,
  createStudent,
  updateStudent,
};
