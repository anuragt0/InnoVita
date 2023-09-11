const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true,
    },
    password:{
        type: String,
        minLength: 4,
        required: true
    },
    name:{
        type:String,
    },
    gender:{
        type: Number,
        enum: [1,2,3]  //1 is male, 2 is female and 3 is other
    },
    age:{
        type:Number,
    },
    healthIssues: {
        type: Array,
        default: []
    },
    mobile:{
        type: String,
        maxlength :10,
    },
    email:{
        type: String
    },
    address:{
        type: String
    },
    city:{
        type: String
    },
    role:{
        type: Number,
        default: 1, // 1 is user and 2 is admin
        enum: [1, 2]
    },


},
{timestamps: true}

);

module.exports = mongoose.model("User", UserSchema);