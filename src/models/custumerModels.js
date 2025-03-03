const mongoose = require("mongoose")

const custumerSchema = new mongoose.Schema({
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

const custumers = mongoose.model("Custumer" , custumerSchema)

module.exports = { custumers }