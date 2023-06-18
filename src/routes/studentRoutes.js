const express = require('express');

const { createStudent, getAllStudents } = require('../controller/studentController');

const router = express.Router();

router.post('/', createStudent);
router.get('/', getAllStudents);


module.exports = router;
