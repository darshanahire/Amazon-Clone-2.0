const { Router } = require("express");

const router = Router();
const Product = require("../models/product.model");
require("../db/conn")

router.post("/seeprod",async(req,res)=>{
    const Id=req.body.id;
    Product.findOne({ProdId:Id}).then((data)=>{
          res.status(200).json(data);
          console.log("req reached");
    })
    
})
module.exports = router;