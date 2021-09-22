const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require("cors");
require("dotenv").config();


require('./db/conn')


const showProd = require("./routes/showProd.route")
const Product = require("./models/product.model");
const User = require("./models/user.model");
app.use(cors())
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());


app.post("/getallprods", async (req, res) => {
    let data = await Product.find();
    res.status(200).json(data);
})
app.post("/seeprod", async (req, res) => {
    const ProdId = req.body.id;
    let data = await Product.findOne({ _id: ProdId });    
    res.status(200).json(data);

})
app.post("/get-cart-items", async (req, res) => {
    const user = req.body.user;
    try{
    let data = await User.findOne({ user: user });    
    res.status(200).json(data.cartdata);}
    catch(err){
        res.status(201).json("Something went Wrong") 
    }

})
app.post("/getLikedArr", async (req, res) => {
    const user = req.body.user;
    try{
    let data = await User.findOne({ user: user });    
    res.status(200).json(data.liked);}
    catch(err){
    console.log(err);
    res.status(201).json("Array not geted"); 
    }

})
app.post("/getuser", async (req, res) => {
    const user = req.body.user;
    let data = await User.findOne({ user: user });       
    res.status(200).json(data);

})
app.post("/addtocart", async (req, res) => {
    const username = req.body.user;
    const id = req.body.id;   
    try {
    await User.findOneAndUpdate({ username: username },{$push:{cartdata:id}}).then((data)=>{    
    res.status(200).json(data.cartdata)});
}
    catch(err){
    console.log(err);
    res.status(201).json("Item Not added to Cart")
    }

})
app.post("/remove-from-cart", async (req, res) => {
    const username = req.body.user;
    const id = req.body.id;
    try{
    await User.findOneAndUpdate({ username: username },{$pull:{cartdata:id}}).then((data)=>{
    res.status(200).json(data.cartdata)});}
    catch(err){
        console.log(err);
        res.status(201).json("Plese Login First");
    }
})
app.post("/handlelike", async (req, res) => {
    const username = req.body.username;
    const id = req.body.id;
    const val=req.body.val;
    console.log(username,id,val);
    if(!val){
    try{
     await User.findOneAndUpdate({ username: username },{$push:{liked:id}}).then((data)=>{
        res.status(200).json(data)});
    }catch(err){
        console.log(err);
        res.status(201).json("Error occurs")
    }}
    else{
    try{
    await User.findOneAndUpdate({ username: username },{$pull:{liked:id}}).then((data)=>{
        res.status(200).json(data)});}
    catch(err){
        console.log(err);
        res.status(201).json("Error occurs")
        }
    }
})


app.post("/signup",async(req,res)=>{
    const userobj =req.body;   
    try{
    await User.create(userobj).then((data)=>{
        res.status(200).json("User Created");
    })}catch(err){
        console.log(err);
        res.status(201).json("username or Email is allready register");
    }
})
app.post("/login",async(req,res)=>{
    const {email , password} =req.body;
    try{
    await User.findOne({email:email}).then(async(data)=>{
        if(data!==null){
            if(data.password===password){
                console.log(data.username);
                res.status(200).json(data.username);
            }
            else{
                res.status(201).json("Please Enter Correct Password"); 
            }
        }
        else{
            res.status(201).json("User Not Found Please SignUp First"); 
        }
    })}catch(err){
        console.log(err);
        res.status(201).json("Error in login");
    }
})

app.post("/add-new-prod", async(req,res)=>{
const obj=req.body
 let a=obj.prodName;
 let b=obj.prodBrand;
 let c=obj.highPrice
 let d=obj.lowPrice
 let e=obj.prodImg
try{
const newProd = await Product.create({prodId:a,prodName:a,prodBrand:b,prodImg:e,prodRating:"",highPrice:c,lowPrice:d});
res.status(200).json("newProd Added");
}catch(err){
    console.log(err);
    res.status(201).json("Product Not Added");
}

})










app.use(express.static("client/build"));
const path = require("path");
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(PORT, () => {
    console.log(`server listion on port :`, PORT);
})