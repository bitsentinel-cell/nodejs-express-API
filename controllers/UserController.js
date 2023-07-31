const User = require('../models/Users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

}

const userLogin = async (req , res) => {
    const {email , password} = req.body;
    if( !email || !password){
        res.status(400)
        throw new Error( "all fields are mandetory!!")
    }
    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password , user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                 email: user.email,
                id: user.id,
            },

        }, process.env.ACCESS_TOKEN_SECRET,{expiresIn: "1m"})
        res.status(200).json({accessToken})
    }else{
        res.status(401);
        throw new Error("email or password is not valid");
    }

}
const CurrentUser = async (req , res) => {
    res.json({massage: "current user"});
}

module.exports = {
    registerUser , userLogin , CurrentUser
};