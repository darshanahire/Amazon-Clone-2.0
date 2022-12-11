import React, { useState, useEffect } from 'react'
// import Https from '../servises/Https'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import{setOrders,setDelivered} from "../redux/actions/productsActions"

import Https from '../servises/Https';


function SingleOrder(props) {

    const dispatch = useDispatch();

    let [orderId,setOrderId] = useState(props.val);
    let [orderData,setOrderData] = useState(undefined);
    const USER = useSelector((state) => state.UserName.username);

    useEffect(async()=>{
        let res = await Https.getorderdetails({id:orderId})
            // console.log(res.data);
            setOrderData(res.data)
    },[setOrderData])

    function cancelOrder(e){
        Https.cancelorder({id:orderId,USER}).then((res) => {
            // console.log(res.data);
            setOrderData(undefined)

            dispatch(setOrders(res.data.orders));
            dispatch(setDelivered(res.data.deliveredItems));
            // console.log(res.data.prod[0].prodName);
            
        }).catch((e)=>{
            console.log(e);
            // history.push("/notFound")
        })
    }
    return ( <>{ orderData !== undefined ?
        <div className="container">
       <div className="card mb-4">
           <div className="card-title d-flex border-bottom p-2 font-13 font-sm-12" style={{ "backgroundColor": "rgb(243, 242, 242)" }}>
               <span className="col-md-4 mx-auto">
                   <p className="my-1">ORDER PLACED</p>
                   <p className="m-0">{orderData.orderDate}</p>
               </span>
               <span className="col-md-4 mx-auto text-center">
                   <p className="my-1">TOTAL</p>
                   <p className="m-0">${orderData.prod[0].lowPrice}</p>
               </span>
               <div className="col-md-4  mx-auto px-md-5 text-end">
                   <p className="my-1">ORDER NO : O{orderData.orderNo}</p>
                   <p className="m-0 color-cyne cursor">View order details | invoice</p>
               </div>
           </div>
           <div className="card-body">
               <h4 className="mb-4 text-success">{orderData.status}</h4>
               <div className="row">
                   <div className="col-12 col-md-2 d-flex justify-content-center">
                   <img className="my-3 my-md-0" src={orderData.prod[0].prodImg} alt="" width="150px" />
                   </div>
                   <div className="col-12 col-md-7" >
                       <h5>{orderData.prod[0].prodName} (Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor</h5>
                       <h6>Brand: {orderData.prod[0].prodBrand}
                       </h6>

                       <p className="star_para">{orderData.prod[0].prodBrand} <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                       <div className="text-md-start text-center">
                       <Link className="Link" to={'/TrackOrder/' + orderId}>
                       <button className="btnOrange  d-inline border-1 p-1 mt-3 px-3 mx-3" >Track this Order</button></Link>
                       <Link to={'/paygateway/' + orderData.prod[0]._id}>
                       <button className="btn border-1 btn-white p-1 mb-1 px-3">Buy Again</button></Link>
                       { orderData.status == 'Initiated' ? <Link className="Link" onClick={cancelOrder}>
                       <button className="btnRed d-inline border-1 p-1 mt-3 px-3 mx-3">Request To Cancel Order</button></Link> :<></>}
                   </div>
                   </div>
               </div>
           </div>
       </div>
   </div> :<></>}
   </>
    )
    
}

export default SingleOrder