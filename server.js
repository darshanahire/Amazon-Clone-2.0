const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require("cors");
require("dotenv").config();


require('./db/conn')


const cookieParser = require("cookie-parser");
const router=require('./routes/route');



app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(router)


app.use(express.static("client/build"));
const path = require("path");
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(PORT, () => {
    console.log(`server listion on port :`, PORT);
})