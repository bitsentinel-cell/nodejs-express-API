const Post = require("../models/Post");


const GetAllPosts = async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch (err){
        res.json({massage: err});
    }
};
    

const CreateNewPost = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
};

module.exports = {
    CreateNewPost , GetAllPosts
}