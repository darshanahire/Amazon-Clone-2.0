const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type:String,
        unique: true,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type:String,
        minLength:6,
        required:true
    }
    ,
    cartdata:{
        type:Array
    },
    liked:{
        type:Array
    },
    orders:{
        type:Array
    },
    deliveredItems:{
        type:Array
    },
})

const User = mongoose.model("users", UserSchema);
module.exports = User;