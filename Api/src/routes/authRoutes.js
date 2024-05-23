const express = require('express');
const router = express.Router();
const { login } = require('../controllers/loginController');

// Rota de login
router.post('/login', login);

module.exports = router;
