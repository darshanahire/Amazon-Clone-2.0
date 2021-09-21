const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prodSchema = new Schema({
    prodId:{
        type:String,
        unique: true
    },
    prodName:{
        type:String,
    },
    prodImg:{
        type:String
    },
    prodBrand:{
        type:String
    },
    prodRating:{
        type:String
    },
    highPrice:{
        type:String
    },
    lowPrice:{
        type:String
    }
})

const Product = mongoose.model("prod", prodSchema);
module.exports = Product;