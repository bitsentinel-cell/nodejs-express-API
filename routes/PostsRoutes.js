const express = require('express');
const router = express.Router();

const Postcontroller = require('../controllers/PostController')

router.get('/' , Postcontroller.GetAllPosts);
router.post('/' , Postcontroller.CreateNewPost);



module.exports = router;