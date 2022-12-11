const { Router } = require("express");
const mongodb = require('mongodb');
const router = Router();
const showProd = require("./showProd.route")
const Product = require("../models/product.model");
const Orders = require("../models/orders.model");
const User = require("../models/user.model");
// const CartItems = require("../models/cart.model");
require("../db/conn")

router.post("/getallprods", async (req, res) => {
    let data = await Product.find();
    res.status(200).json(data);
})
router.post("/seeprod", async (req, res) => {
    const ProdId = req.body.id;
    Product.findOne({ _id: ProdId }).then((data)=>{
        if (data) {
            res.status(200).json(data);
        }
        else {
            console.log('Product not found');
            res.status(404);
        }
    }).catch((e)=>{
        res.status(500).json(e);
    })

})
router.post("/getLikedArr", async (req, res) => {
    const user = req.body.user;
    try {
        await User.findOne({ username: user }).then((data) => {
            if (data == null) res.status(404);
            else {
                res.status(200).json(data.liked);
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(201).json("Array not geted");
    }

})

router.post("/verification", async (req, res) => {
    const username = req.body.user;
    await User.findOne({ username: username }).then((res) => {

        res.status(200).json(res.data)
    }).catch((e) => {
        res.status(404).json("not found");
        console.log("verification failed");
    })

})

router.post("/getuser", async (req, res) => {
    const user = req.body.user;

    await User.findOne({ username: user }).then((data) => {
        if (data) {
            res.status(200).json(data);
        }
        else {
            console.log('user not found');
            res.status(404);
        }
    }).catch((e) => {
        console.log(e);
        res.status(404);
    })

})

router.post("/order", async (req, res) => {
    const {username, obj} = req.body;
    try {
        const newOrder = await Orders.create(obj);
        try { await User.findOneAndUpdate({ username: username }, { $push: { orders: newOrder._id, $position: 0 } }, { new: true }).then((data) => {
                // console.log(newOrder);
                res.status(200).json(newOrder);
                
            })
        } catch(err){
            res.status(201).json("Order Id Not Added in User Schema");
        }
    } catch (err) {        
        console.log(err);
        res.status(201).json("OrderFail");
    }

})

router.post("/cancelorder", async (req, res) => {
    const {id,USER} = req.body.obj;
    // console.log(req.body.obj);
    
    try {
        const remainingorders = await User.findOneAndUpdate({ _id: id }, { $pull: { _id: id } }, { new: true });
        try { await User.findOneAndUpdate({ username: USER }, { $pull: { orders : new mongodb.ObjectId(id) } }, { new: true }).then((data) => {
                // console.log(data.orders);
                res.status(200).json(data.orders);
                
            })
        } catch(err){
            res.status(201).json("Order Id Not Added in User Schema");
        }
    } catch (err) {        
        console.log(err);
        res.status(201).json("OrderFail");
    }

})

router.post("/getorder", async (req, res) => {
    const {orderId} = req.body; 
    // console.log(orderId);
    try {
        await Orders.findOne({ _id: new mongodb.ObjectId(orderId) }).then(async (data) => {
                // console.log(data);
            res.status(200).json(data);
        })
    }
    catch (err) {
        console.log(err);
        res.status(201).json("Order Not Found");
    }

})

router.post("/getdelivered", async (req, res) => {
    const {orderId} = req.body; 
    // console.log(orderId);
    try {
        await Orders.findOne({ _id: new mongodb.ObjectId(orderId) }).then(async (data) => {
                // console.log(data);
            res.status(200).json(data);
        })
    }
    catch (err) {
        console.log(err);
        res.status(201).json("Order Not Found");
    }

})

router.post("/addtocart", async (req, res) => {
    const username = req.body.user;
    const id = req.body.id._id;
    const d = req.body.id;
    // console.log("d",d);

    try {
        await User.findOneAndUpdate({ username: username }, { $push: { cartdata: d } }, { new: true }).then((data) => {
            // console.log(data.cartdata);
            res.status(200).json(data.cartdata)
        });

    }
    catch (err) {
        console.log(err);
        res.status(201).json("Item Not added to Cart")
    }

})
router.post("/remove-from-cart", async (req, res) => {
    const username = req.body.user;
    const id = req.body.id;
    // console.log(id);

    try {
        // const userData = await User.findOne({username: username})
        // const cd=userData.cartdata;
        // // console.log(cd)
        // userData.deleteOne({cartdata:id})
        // res.status(200).json(userData.cartdata); 
        const data = await User.findOneAndUpdate({ username: username }, { $pull: { cartdata: id } }, { new: true })
        res.status(200).json(data.cartdata);
        // console.log(data.cartdata);

    }
    catch (err) {
        console.log(err);
        res.status(201).json("Plese Login First");
    }
})
router.post("/handlelike", async (req, res) => {
    const username = req.body.username;
    const id = req.body.id;
    const val = req.body.val;
    // console.log(username,id,val);
    if (!val) {
        try {
            await User.findOneAndUpdate({ username: username }, { $push: { liked: id } }).then((data) => {
                res.status(200).json(data)
            });
        } catch (err) {
            console.log(err);
            res.status(201).json("Error occurs")
        }
    }
    else {
        try {
            await User.findOneAndUpdate({ username: username }, { $pull: { liked: id } }).then((data) => {
                res.status(200).json(data)
            });
        }
        catch (err) {
            console.log(err);
            res.status(201).json("Error occurs")
        }
    }
})


router.post("/signup", async (req, res) => {
    const userobj = req.body;
    try {
        await User.create(userobj).then((data) => {
            res.status(200).json("User Created");
        })
    } catch (err) {
        console.log(err);
        res.status(201).json("username or Email is allready register");
    }
})
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        await User.findOne({ email: email }).then(async (data) => {
            if (data !== null) {
                if (data.password === password) {
                    // console.log(data.username);
                    res.status(200).json(data.username);
                }
                else {
                    res.status(201).json("Please Enter Correct Password");
                }
            }
            else {
                res.status(201).json("User Not Found Please SignUp First");
            }
        })
    } catch (err) {
        console.log(err);
        res.status(201).json("Error in login");
    }
})

router.post("/add-new-prod", async (req, res) => {
    const obj = req.body
    let a = obj.prodName;
    let b = obj.prodBrand;
    let c = obj.highPrice
    let d = obj.lowPrice
    let e = obj.prodImg
    try {
        const newProd = await Product.create({ prodId: a, prodName: a, prodBrand: b, prodImg: e, prodRating: "", highPrice: c, lowPrice: d });
        res.status(200).json("newProd Added");
    } catch (err) {
        console.log(err);
        res.status(201).json("Product Not Added");
    }

})



























router.post("/get-cart-items", async (req, res) => {
    const user = req.body.user;
    try {
        let data = await User.findOne({ username: user });
        res.status(200).json(data.cartdata);
    }
    catch (err) {
        res.status(201).json("Something went Wrong")
    }

})
router.post("/addtocart", async (req, res) => {
    const username = req.body.user;
    const id = req.body.id._id;
    const prod = req.body.id;
    // console.log("d",prod);

    try {
        await CartItems.create({prod}).then(async (newcart) => {
            await User.findOneAndUpdate({ username: username }, { $push: { cartdata: newcart._id } }, { new: true }).then((data) => {
                res.status(200).json(data.cartdata)
            });
    })
    }
    catch (err) {
        console.log(err);
        res.status(201).json("Item Not added to Cart")
    }

})
router.post("/remove-from-cart", async (req, res) => {
    const username = req.body.user;
    const id = req.body.id;
    // console.log(id);

    try {
        await CartItems.findOneAndUpdate({ _id: id }, { $pull: { _id: id } });
        try { await User.findOneAndUpdate({ username }, { $pull: { cartdata : new mongodb.ObjectId(id) } }, { new: true }).then((data) => {
                res.status(200).json(data.cartdata);
                
            })
        } catch(err){
            res.status(201).json("Order Id Not Added in User Schema");
        }

        // const data = await User.findOneAndUpdate({ username: username }, { $pull: { cartdata: id } }, { new: true })
        // res.status(200).json(data.cartdata);
        // // console.log(data.cartdata);

    }
    catch (err) {
        console.log(err);
        res.status(201).json("Plese Login First");
    }
})

router.post("/getSingleCartData",async(req,res)=>{
    const id = res.body.id;
    // console.log(id);
    try {
        await CartItems.findOne({ _id: new mongodb.ObjectId(id) }).then(async (data) => {
                // console.log(data);
            res.status(200).json(data.data);
        })
    }
    catch (err) {
        console.log(err);
        res.status(201).json("Cart Item Not Found");
    }
})

















module.exports = router;