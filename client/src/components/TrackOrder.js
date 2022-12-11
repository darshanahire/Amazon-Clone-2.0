import React ,{useState,useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Swal from 'sweetalert2'


import { useDispatch, useSelector } from 'react-redux'
import{setOrders } from "../redux/actions/productsActions"

import Https from '../servises/Https';

import Loader from './helper/Loader';

function TrackOrder() {
    let history = useHistory()

    let [loader, setLoder] = useState(true);
    let [orderData,setOrderData] = useState();
    let [orderType,setOrderType] = useState();
    const dispatch = useDispatch();
    const USER = useSelector((state) => state.UserName.username);

    let { id } = useParams();    
    function LoaderTime(){ setTimeout(() => {setLoder(false)},1000)}
    useEffect(() => {LoaderTime()}, [])

    useEffect(()=>{
        if(!USER){ history.push('/login')}

        Https.getorderdetails(id).then((res) => {
            setOrderData(res.data)
            setOrderType(res.data.status);
            // console.log(res.data);
            
        }).catch((e)=>{
            console.log(e);
            // history.push("/notFound")
        })
    },[])

    function cancelOrder(e){
        Https.cancelorder({id,USER}).then((res) => {
            // console.log(res.data);
            setOrderData(undefined)
            dispatch(setOrders(res.data));

            Swal.fire(
                'Success',
                'Order Cancel Successful',
                'success'
            )
             history.push("/")
            
        }).catch((e)=>{
            console.log(e);
            // history.push("/notFound")
        })
    }
    return (
        <>{loader || orderData === undefined? <Loader loaderNum={1} bg={'#eeeeee'}/>:
        <div style={{ "marginTop": "60px" }}>
            <div className="container">
                <h3 className="py-3">Order Tracking</h3>
                <hr />
                <div className="row">
                    <div className="col-md-6 col-12">
                        {orderType == 'Initiated' ? 
                        <>
                            <h4 className="py-2 color-brown text-sm-center text-md-start">In Transit : On shedule</h4>
                            <h5>Expected delivery: <span className="text-success">{orderData.shipDate}, by 9 PM</span></h5> 
                        </> :
                        <>
                            <h4 className="py-2 color-brown text-sm-center text-md-start">Item successfully delivared </h4>
                            <h5>Delivared on : <span className="text-success">{orderData.shipDate} </span></h5>
                        </>
                        }
                    </div>
                    <div className="col-md-6 col-12 text-end">
                        <p className="py-3"><span className="bold-6"> Your package is arrived at the courier facility</span> <span className="font-12">(Updated 0 minute(s) ago)</span></p>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col">
                        <ul id="progressbar">
                            <li className="step0 active " id="step1">Order Placed</li>
                            <li className="step0 active text-center" id="step2">Shipped</li>
                            <li className={`step0 text-center ${orderType == 'Initiated' ? "" : "active"}`} id="step3">Out for Delivery</li>
                            <li className={`step0 text-muted text-right ${orderType == 'Initiated' ? "" : "active"}`} id="step4">Delivered</li>
                        </ul>
                    </div>
                    <div className='card mb-3'>
                    <div className="row my-5">
                        <div className="col-12 col-md-2 d-flex justify-content-center">
                            <img className="my-3 my-md-0" src={orderData.prod[0].prodImg} alt="" width="150px" />
                        </div>
                        <div className="col-12 col-md-7" >
                            <h5>{orderData.prod[0].prodName}(Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor</h5>
                            <h6>Brand: {orderData.prod[0].prodBrand}
                            </h6>

                            <p className="star_para">{orderData.prod[0].prodBrand} <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                            <div className="text-md-start text-center">
                            <Link className="Link" to={'/orders'}>
                                <button className="btnOrange  d-inline border-1 p-1 mt-3 px-3 mx-3" >View All Orders</button>
                                </Link>
                                <Link className="Link">
                                {orderType == 'Initiated' ?
                                <button className="btnRed  d-inline border-1 p-1 mt-3 px-3 mx-3" onClick={cancelOrder}>Request to cancel order</button> :
                                <button className="btn border-1 btn-white p-1 mb-1 px-3" >Share Feedback</button> }
                            </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="card mb-4 p-0">
                        <div className="card-title d-flex border-bottom p-2" style={{ "backgroundColor": "rgb(243, 242, 242)" }}>
                            <span className="col-12 col-md-4 text-center">
                                <h5>Tracking Details:</h5>
                            </span>
                        </div>
                        <div className="card-body">
                            <table className="font-13 row justify-content-around m-0" width="100%">
                                <tr className="trackTable mx-auto mb-0 col-12 col-md-4" width="30%">
                                    <td>
                                        <tr>Document No-</tr>
                                        <tr>O{orderData.orderNo}</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Order No-</tr>
                                        <tr>O{orderData.orderNo}</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Track and Trace Number-</tr>
                                        <tr className="text-primary cursor">T{orderData.TrackNo}</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Order Status-</tr>
                                        <tr className="text-success">{orderData.status}</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Order Date-</tr>
                                        <tr>{orderData.orderDate}</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Order Time-</tr>
                                        <tr>{orderData.orderTime}</tr>
                                    </td>
                                <hr className='d-md-none'/>
                                </tr>
                                <tr className="trackTable mx-auto mb-2 col-12 col-md-4" width="30%">
                                <td>
                                        <tr>Shipment Date-</tr>
                                        <tr>{orderData.shipDate}</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>location Code-</tr>
                                        <tr> 0010</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Payment Method-</tr>
                                        <tr>{orderData.paymentMethod}</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>{orderType == 'Initiated' ? "Expected" :""} Delivery Date-</tr>
                                        <tr>{orderData.shipDate}</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Payment Discount-</tr>
                                        <tr>{orderData.discount}</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Paid Ammount-</tr>
                                        <tr>${orderData.prod[0].lowPrice}</tr>
                                    </td>
                                    <td>
                                    </td>                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="bdr-gray mb-5 py-3 font-14">
                    <div className="d-flex justify-content-md-around justify-content-between" >

                        <div>
                        <h5 className="color-cyne ">Fulfillment Address</h5>
                            <p className="m-0">
                            D-4112, <br />
                            MIDC Industrial Area,<br />
                            Sanpada, <br />
                            Navi Mumbai- 400705,<br />
                            Maharashtra, India
                            </p>
                        </div>
                        <div>
                        <h5 className="color-cyne ">Billing Address</h5>
                        <p className="m-0 text-end">
                            A-2189,<br />
                            Main Road,<br />
                            Shivajinagar,<br />
                            Pune- 411003 <br />
                            Maharastra, India.
                        </p>
                        </div>
                        </div>
                        {orderType == 'Initiated' ? <button className="btnOrange mx-auto">Request to Change Address</button> :<></>}
                    </div>
                </div>
            </div>
        </div>
        } </>
    )
}

export default TrackOrder
