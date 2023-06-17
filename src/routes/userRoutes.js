// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/register', userController.registerUser);

module.exports = router;
