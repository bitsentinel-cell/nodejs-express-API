const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/register' , UserController.registerUser);
router.post('/login' , UserController.userLogin);
router.get('/current' , UserController.CurrentUser);

module.exports = router;