const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true, 
        trim : true
    },
    email : {
        type : String, 
        required : true, 
        trim : true,
        unique : true,
        validate: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format']
    },
    phone : {
        type : Number,
        required : true,
        trim : true,
    },
    adress : {
        type : String,
        required : true,
        trim : true
    }
}, {timestamps : true})

const Users = mongoose.model("User" , UserSchema)

module.exports = { Users }