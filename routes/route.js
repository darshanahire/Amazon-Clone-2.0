const { Router } = require("express");

const router = Router();
const showProd = require("./showProd.route")
const Product = require("../models/product.model");
const User = require("../models/user.model");
require("../db/conn")

router.post("/getallprods", async (req, res) => {
    let data = await Product.find();
    res.status(200).json(data);
})
router.post("/seeprod", async (req, res) => {
    const ProdId = req.body.id;
    let data = await Product.findOne({ _id: ProdId });    
    res.status(200).json(data);

})
router.post("/get-cart-items", async (req, res) => {
    const user = req.body.user;
    try{
    let data = await User.findOne({ username: user });    
    res.status(200).json(data.cartdata);}
    catch(err){
        res.status(201).json("Something went Wrong") 
    }

})
router.post("/getLikedArr", async (req, res) => {
    const user = req.body.user;
    try{
    let data = await User.findOne({ username: user });    
    res.status(200).json(data.liked);}
    catch(err){
    console.log(err);
    res.status(201).json("Array not geted"); 
    }

})
router.post("/getuser", async (req, res) => {
    const user = req.body.user;
    
    let data = await User.findOne({ username: user });       
    res.status(200).json(data);    

})
router.post("/addtocart", async (req, res) => {
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
router.post("/remove-from-cart", async (req, res) => {
    const username = req.body.user;
    const id = req.body.id;
    try{
    const data = await User.findOneAndUpdate({ username: username },{$pull:{cartdata:id}},{ new: true })
    res.status(200).json(data.cartdata);    
}
    catch(err){
        console.log(err);
        res.status(201).json("Plese Login First");
    }
})
router.post("/handlelike", async (req, res) => {
    const username = req.body.username;
    const id = req.body.id;
    const val=req.body.val;
    // console.log(username,id,val);
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


router.post("/signup",async(req,res)=>{
    const userobj =req.body;   
    try{
    await User.create(userobj).then((data)=>{
        res.status(200).json("User Created");
    })}catch(err){
        console.log(err);
        res.status(201).json("username or Email is allready register");
    }
})
router.post("/login",async(req,res)=>{
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

router.post("/add-new-prod", async(req,res)=>{
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
module.exports = router;