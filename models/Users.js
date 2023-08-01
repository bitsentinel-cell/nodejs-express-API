const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
   username: {
       type: String,
       required: [true , "must add a username"],
       max:255,

   },
    email: {
        type: String,
        required: [true, "must provide with a valid email"],
        unique: [true, "email address has already been taken"],
        max: 255,
        min: 6,
    },
    password: {
       type: String,
        required: [true , "password must be provided"],
        max:1024,
        min:6,
    },
    date:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User' , UserSchema);