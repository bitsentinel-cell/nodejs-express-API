const User = require('../models/Users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {validateRegister , loginValidation} = require('../utils/validation');

const registerUser = async (req , res) => {

   const {error} = validateRegister(req.body);
   if(error) return res.status(400).send(error.details[0].message);

    const {username , email , password} = req.body;
    if(!username || !email || !password){
        res.status(400)
        throw new Error( "all fields are mandetory!!")
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400);
        throw new Error("user already registered");
    }

    //hash password
    const hashed = await bcrypt.hash(password,10);
    const user = await  User.create({
        username,
        email,
        password: hashed,
    });

    console.log(user);
    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400);
        throw new Error("user data is not valid");
    }

};

const userLogin = async (req , res) => {
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const foundUser = await User.findOne({email: req.body.email});
    if(!foundUser){
        res.status(400);
        throw new Error("there is  no user with this email");
    }
    const validPassword = await bcrypt.compare(req.body.password, foundUser.password);
    if(!validPassword){
        res.status(400);
        throw new Error("password is not valid");
    }
    const token = jwt.sign({_id: foundUser.id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "3m"});

    res.status(200).json({token});
}
const CurrentUser = async (req , res) => {
    res.json({massage: "current user"});
}

module.exports = {
    registerUser , userLogin , CurrentUser
};