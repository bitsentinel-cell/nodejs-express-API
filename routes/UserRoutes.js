const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const verifyToken = require("../middleware/verifywebtoken");



router.post('/register' , UserController.registerUser);
router.post('/login'   ,  UserController.userLogin);
router.get('/current' , verifyToken,  UserController.CurrentUser);

module.exports = router;