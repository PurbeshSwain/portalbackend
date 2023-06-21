const Professor = require('../models/professorModel');

const createProfessor = async (req, res) => {
  try {
    const { employeeID,firstName,middleName,lastName,
      gender,dob,doj,city,state,country,dist,post,pinCode,phoneNo,altNo,email,address,education,department,qualification,position,salary
    } = req.body;

    // Check if a file was uploaded
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const photo = req.files.image;
    const imageBuffer = photo.data;

    const professor = new Professor({  employeeID, image: imageBuffer,firstName,middleName,lastName,
      gender,dob,doj,city,state,country,dist,post,pinCode,phoneNo,altNo,email,address,education,department,qualification,position,salary
      });

    const savedProfessor = await professor.save();

    res.json(savedProfessor);
  } catch (error) {
    console.error('Error creating professor:', error);
    res.status(500).json({ error: 'An error occurred during add professor' });
  }
};

// Fetch all students
const getAllProfessors = async (req, res) => {
  try {
    const professors = await Professor.find();
    res.json(professors);
  } catch (error) {
    console.error('Error fetching professors:', error);
    res.status(500).json({ error: 'An error occurred while fetching professors' });
  }
};


module.exports = { createProfessor, getAllProfessors };
