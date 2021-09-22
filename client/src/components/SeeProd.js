import React, { useState, useEffect } from 'react'
import { useParams,useHistory } from 'react-router-dom';
import axios from 'axios';

function SeeProd() {


    let [prodData, setProdData] = useState({});

let history=useHistory()

    let { id } = useParams();
    console.log(id);

    useEffect(() => {

        axios.post('/seeprod', { id }).then(async (d) => {
            setProdData(d.data)
        })
    }, [setProdData])

    const addtocart = (e) => {
        let user=localStorage.getItem("user")
        if(user){
        let id =e.target.id;
        axios.post('/addtocart', { id, user }).then((d) => {
            if(d.status==200){
            alert("Item Added to Cart")
            setProdData = d.data;}
            else if(d.status==201){
            alert("Please Login First")
            }
        })}
        else{
            alert("Please Login First")
        }
    }





    return (
        <>
        <div className="prodContainer" style={{background:"white"}} >
            <div className="SeeProdSideBar " style={{ "position": "initial" }}>
                <div className="d-flex cursor" onClick={history.goBack}>
            <i className="fas fa-arrow-left  fa-lg my-auto mx-2"></i> <h5 className="my-auto">Go back</h5> 

                </div>
                <img className="seeFullItem" src={prodData.prodImg} alt="" style={{width:"300px"}} />
                <div className="row mx-4 my-3">
                    <div className="col">
                        <img src="/seeprod1.png" alt="" /><p> Pay on delivary</p>
                    </div>
                    <div className="col">
                        <img src="img/seeprod2.png" alt="" /><p> 7 Days Replacement</p>
                    </div>
                    <div className="col">
                        <img src="img/seeprod3.png" alt="" /><p> Amazon Delivered</p>
                    </div>
                    <div className="col">
                        <img src="img/seeprod4.png" alt="" /><p> 1 Year Warranty</p>
                    </div>
                </div></div>

            <div className="SeeProdSideBar  allDetails" >
                <h4>{prodData.prodName} 10i 5G (Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor</h4>
                <h6>Brand: {prodData.prodBrand}
                </h6>

                <p className="star_para">{prodData.prodBrand}<br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                <h6 className="text-center my-4">Price :	<span  style={{ "text-decoration": "line-through","fontSize":"16px" }}>${prodData.highPrice}</span></h6>
                <h4 className="text-center">M.R.P. :${prodData.lowPrice}</h4>
                <h6 className="text-center">You Save:	${ prodData.highPrice-prodData.lowPrice} (12%)
                    Inclusive of all taxes</h6>
                <button className="btnOrange mx-auto my-3 w-75 " >Buy Now</button>
                <button id={prodData._id} className="btnNocolor mx-auto my-3 w-75 " onClick={addtocart}>Add to Cart</button>
                <h6 className="mt-5">FREE delivery: Saturday, Aug 21 Details</h6>
                <p> Fastest delivery: Tomorrow <br />
                    Order within 1 hr and 10 mins Details</p>
                EMI starts at ₹1,036. No Cost EMI available EMI options
                <h6>Save Extra with 4 offers</h6>
                <p> Bank Offer: Flat INR 1500 Instant Discount on SBI Credit Card Transactions DetailsBank Offer: Flat INR 1500 Instant Discount on SBI Credit Card Transactions Details</p>
            </div>

        </div>
</>
        //     <div className="SeeProdSideBar  allDetails" >
        //         <h4>Mi 10i 5G (Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor</h4>
        //         <h6>Brand: MI
        //         </h6>

        //         <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
        //         <h6 className="text-center">M.R.P. :	<span  style={{ "text-decoration": "line-through","fontSize":"16px" }}>$320,00</span></h6>
        //         <h4 className="text-center">Price :$21,999.00</h4>
        //         <h6 className="text-center">You Save:	₹3,000.00 (12%)
        //             Inclusive of all taxes</h6>
        //         <button className="btnOrange mx-auto my-3 w-75 " >Buy Now</button>
        //         <button className="btnNocolor mx-auto my-3 w-75 ">Add to Cart</button>
        //         <h6>FREE delivery: Saturday, Aug 21 Details</h6>
        //         <p> Fastest delivery: Tomorrow <br />
        //             Order within 1 hr and 10 mins Details</p>
        //         EMI starts at ₹1,036. No Cost EMI available EMI options
        //         <h6>Save Extra with 4 offers</h6>
        //         <p> Bank Offer: Flat INR 1500 Instant Discount on SBI Credit Card Transactions DetailsBank Offer: Flat INR 1500 Instant Discount on SBI Credit Card Transactions Details</p>
        //     </div>

        // </div>

    )
}

export default SeeProd
