const Student = require('../models/studentModel');

const createStudent = async (req, res) => {
  try {
    const { registrationNumber,firstName,middleName,lastName,
      gender,dob,category,fatherName,motherName,religion,
      city,state,country,dist,post,pinCode,phoneNo,altNo,parentNo,address,education,branch,year,status,courseFee
    } = req.body;

    // Check if a file was uploaded
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const photo = req.files.image;
    const imageBuffer = photo.data;

    const student = new Student({ registrationNumber,
       image: imageBuffer,firstName,middleName,lastName,gender,dob,category,fatherName,motherName,religion,
       city,state,country,dist,post,pinCode,phoneNo,altNo,parentNo,address,education,branch,year,status,courseFee
      });

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
