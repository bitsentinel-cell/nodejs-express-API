const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/TicketController');
const verifyToken = require("../middleware/verifywebtoken");
const ROLES_LIST = require("../config/roles_list");
const verifyRoles = require("../middleware/VerifyRoles");




router.post('/create' , verifyToken, verifyRoles(ROLES_LIST.merchant)  ,TicketController.createTicket);

module.exports = router;