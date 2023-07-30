const User = require('../models/Users')
const bcrypt = require('bcrypt');
const registerUser = async (req , res) => {
    const {username , email , password} = req.body;
    if(!username || !email || !password){
        res.status(400)
        throw new Error( "all filds are mandetory!!")
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400);
        throw new Error("user already registered");
    }

    //hash password
    const hashed = await bcrypt.hash(password,10);
    console.log(hashed);
    res.json({massage: "user registration"});
}

const userLogin = async (req , res) => {
    res.json({massage: "user login"});
}
const CurrentUser = async (req , res) => {
    res.json({massage: "current user"});
}

module.exports = {
    registerUser , userLogin , CurrentUser
};