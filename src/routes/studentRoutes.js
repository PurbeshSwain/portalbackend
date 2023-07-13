const express = require('express');

const { createStudent, getAllStudents, countAllStudents, deleteStudent } = require('../controller/studentController');

const router = express.Router();

router.post('/', createStudent);
router.get('/', getAllStudents);
router.get('/count', countAllStudents);
router.delete('/:_id', deleteStudent);


module.exports = router;
