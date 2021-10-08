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

module.exports = {
  getAllStudents,
  createStudent,
};
