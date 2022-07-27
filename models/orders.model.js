const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    prod:{
        type: Array
    },
    orderNo:{
        type: String,
    },
    TrackNo:{
        type: String,
    },
    status:{
        type:String,
    },
    orderDate:{
        type:String
    },
    orderTime:{
        type:String
    },
    shipDate:{
        type:String
    },
    paymentMethod:{
        type:String
    },
    discount:{
        type:String
    },
    payedAmt:{
        type:String
    },
    deliveryAdd:{
        type:String
    },
    ShipAdd:{
        type:String
    }
})

const Orders = mongoose.model("orders", OrdersSchema);
module.exports = Orders;