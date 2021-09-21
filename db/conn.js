// database connections
const mongoose = require("mongoose");
// require("dotenv").config();


const uri = "mongodb://localhost:27017/amazon-products";
mongoose.connect(uri).then((data) => {
    console.log("DB is connected..");
}).catch((err) => {
    console.log(err);
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Database connected sucessfully");
})