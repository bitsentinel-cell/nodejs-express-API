const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController')

router.get('/posts' , PostController.GetAllPosts);
router.post('/CreatePost'  ,PostController.CreateNewPost);



module.exports = router;