import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loader from './helper/Loader';
function PlacedOrder() {

    let [loader, setLoder] = useState(true);
    function LoaderTime(){ setTimeout(() => {setLoder(false)}, 3000)}
    useEffect(() => {LoaderTime()}, [])
    
    return (
        <>
            {loader ? <Loader />: <>
                <div style={{ "margin-top": "90px" }}>
                    <div className="container">
                        <div className="card green-card p-5">
                            <div className="d-flex justify-content-center">
                                <img src="img/success.gif" alt="" width="50px" />
                                <h3 className="text-success mx-3 my-auto">Thank you, your order has been placed.</h3>
                            </div>
                            <p className="font-14 mx-auto my-4">Thank you for shopping with us.You ordered <span className="color-cyne">IPhone 13 Pro</span>. An email confirmation has been sent to you.</p>
                            <Link className="nav-link linkDecoretionNone cursor" to={'/trackOrder'}>
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
