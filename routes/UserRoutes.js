const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const validateToken = require("../middleware/ValidateTokenHandler");

router.post('/register' , UserController.registerUser);
router.post('/login' , UserController.userLogin);
router.get('/current' ,validateToken ,  UserController.CurrentUser);

module.exports = router;