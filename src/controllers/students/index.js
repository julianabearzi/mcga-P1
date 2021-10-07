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
      msg: `Internal Server Error`,
    });
  }
};

module.exports = {
  getAllStudents,
};
