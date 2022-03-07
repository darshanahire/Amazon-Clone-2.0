import React ,{useState,useEffect} from 'react'
import Loader from './helper/Loader';

function TrackOrder() {
    let [loader, setLoder] = useState(true);
    function LoaderTime(){ setTimeout(() => {setLoder(false)},5000)}
    useEffect(() => {LoaderTime()}, [])
    return (
        <>{loader ? <Loader loaderNum={1} bg={'#eeeeee'}/>:
        <div style={{ "margin-top": "60px" }}>
            <div className="container">
                <h3 className="py-3">Order Tracking</h3>
                <hr />
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h4 className="py-2 color-brown text-sm-center text-md-start">In Transit : On shedule</h4>
                        <h5>Expected delivery: <span className="text-success">Monday Nov 20, 2021, by 10 Am</span></h5>
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
                            <li className="step0  text-center" id="step3">Out for Delivery</li>
                            <li className="step0 text-muted text-right" id="step4">Delivered</li>
                        </ul>
                    </div>
                    <div className="row my-5">
                        <div className="col-12 col-md-2 d-flex justify-content-center">
                            <img className="my-3 my-md-0" src="img/iphone.jpg" alt="" width="150px" />
                        </div>
                        <div className="col-12 col-md-7" >
                            <h5>Mi 10i 5G (Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor</h5>
                            <h6>Brand: MI
                            </h6>

                            <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                            <div className="text-md-start text-center">
                                <button className="btnRed  d-inline border-1 p-1 mt-3 px-3 mx-3">Request to cancel order</button>
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
                                <td className="trackTable mx-auto mb-0 col-12 col-md-4" width="30%">
                                    <td>
                                        <tr>Document No-</tr>
                                        <tr>O800000037</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Order No-</tr>
                                        <tr>O000001239</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Track and Trace Number-</tr>
                                        <tr className="text-primary cursor">T800000037</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Order Status-</tr>
                                        <tr className="text-success">Initiated</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Shipment Date-</tr>
                                        <tr>20-Nov-2021</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>location Code-</tr>
                                        <tr> 0010</tr>
                                    </td>
                                <hr className='d-md-none'/>
                                </td>
                                <td className="trackTable mx-auto mb-2 col-12 col-md-4" width="30%">
                                    <td>
                                        <tr>Order Date-</tr>
                                        <tr>10-Nov-2021</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Document Date-</tr>
                                        <tr>10-Nov-2021</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Payment Method-</tr>
                                        <tr>-</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Due Date-</tr>
                                        <tr>-</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Payment Discount-</tr>
                                        <tr>00</tr>
                                    </td>
                                    <hr />
                                    <td>
                                        <tr>Ammount To Pay-</tr>
                                        <tr>$524</tr>
                                    </td>
                                    <td>
                                    </td>                                </td>
                            </table>
                        </div>
                    </div>
                    <div className="bdr-gray mb-5 py-3 font-14">
                    <div className="d-flex justify-content-md-around justify-content-between" >

                        <div>
                            <h5 className="color-cyne ">Billing Address</h5>
                            <p className="m-0">
                                ABC Road,<br />
                                Tal-Pune,<br />
                                Dist-Pune,<br />
                                Pune-12345 <br />
                                Maharastra, India.
                            </p>
                        </div>
                        <div>
                            <h5 className="color-cyne ">Shipping Address</h5>
                            <p className="m-0 text-end">
                                ABC Road,<br />
                                Tal-Pune,<br />
                                Dist-Pune,<br />
                                Pune-12345 <br />
                                Maharastra, India.
                            </p>
                        </div>
                        </div>
                        <button className="btnOrange mx-auto">Request to Change Address</button>
                    </div>
                </div>
            </div>
        </div>
        } </>
    )
}

export default TrackOrder
