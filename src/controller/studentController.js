const Student = require('../models/studentModel');

const createStudent = async (req, res) => {
  try {
    const { name, age, grade } = req.body;

    // Check if a file was uploaded
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const photo = req.files.photo;
    const imageBuffer = photo.data;

    const student = new Student({ name, age, grade, image: imageBuffer });

    const savedStudent = await student.save();

    res.json(savedStudent);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'An error occurred during student admission' });
  }
};

// Fetch all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'An error occurred while fetching students' });
  }
};


module.exports = { createStudent, getAllStudents };
