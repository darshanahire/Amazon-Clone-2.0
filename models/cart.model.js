const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    prod:{
        type: Object
    }
})

const CartItems = mongoose.model("cartItems", CartSchema);
module.exports = CartItems;