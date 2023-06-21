const express = require('express');

const { createProfessor, getAllProfessors } = require('../controller/professorController');

const router = express.Router();

router.post('/', createProfessor);
router.get('/', getAllProfessors);


module.exports = router;
