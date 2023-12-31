const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const verifyToken = require("../middleware/verifywebtoken");
const ROLES_LIST = require("../config/roles_list");
const verifyRoles = require("../middleware/VerifyRoles");



router.post('/register' ,UserController.registerUser);
router.post('/login'   ,  UserController.userLogin);
router.get('/current' , verifyToken,  UserController.CurrentUser);

module.exports = router;