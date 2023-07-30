const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
   username: {
       type: String,
       required: [true , "must add a username"]
   },
    email: {
        type: String,
        required: [true, "must provide with a valid email"],
        unique: [true, "email address has already been taken"]
    },
    password: {
       type: String,
        required: [true , "password must be provided"]
    },
    date:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User' , UserSchema);