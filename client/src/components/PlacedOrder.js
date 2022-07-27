import React, { useState,useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Https from '../servises/Https';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loader from './helper/Loader';
function PlacedOrder() {

    let { id } = useParams();    
    let [loader, setLoder] = useState(true);
    let [orderData,setOrderData] = useState({});
    function LoaderTime(){ setTimeout(() => {setLoder(false)}, 3000)}
    useEffect(() => {LoaderTime()}, [])
    useEffect(()=>{
        Https.getorderdetails(id).then(async(res) => {
            await setOrderData(res.data)
            // console.log(res.data.prod[0].prodName);
            
        }).catch((e)=>{
            console.log(e);
            // history.push("/notFound")
        })
    },[])
    return (
        <>
            {loader ? <Loader loaderNum={2} bg={'rgb(242 242 242)'}/>: <>
                <div style={{ "marginTop": "150px" }}>
                    <div className="container">
                        <div className="card green-card p-5">
                            <div className="d-flex justify-content-center">
                                <img src="/img/success.gif" alt="" width="50px" />
                                <h3 className="text-success mx-3 my-auto">Thank you, your order has been placed.</h3>
                            </div>
                            <p className="font-14 mx-auto my-4">Thank you for shopping with us. You ordered <span className="color-cyne">{orderData.prod[0].prodName}</span>. An email confirmation has been sent to you.</p>
                            <Link className="nav-link linkDecoretionNone cursor" to={'/TrackOrder/' + orderData._id}>
                                <button className="btnOrange  d-inline border-1 mt-1 px-3 mx-3">View or manage order</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
            }
        </>
    )
}

export default PlacedOrder
