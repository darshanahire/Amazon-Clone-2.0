import React ,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loader from './helper/Loader';

function Orders() {
    let [loader, setLoder] = useState(true);
    function LoaderTime(){ setTimeout(() => {setLoder(false)},3000)}
    useEffect(() => {LoaderTime()}, [])
    return (
        <>{loader ? <Loader loaderNum={1} bg={'#eeeeee'}/>:
        <div style={{ "margin-top": "60px" }}>
            <div className="container">
                <h3 className="py-3">Your Orders</h3>
                <div className="d-flex color-cyne font-sm-13">
                    <p className="mx-sm-3 mx-sm-au bdr-b-org px-1 cursor">Orders</p>
                    <p className="mx-sm-3 mx-sm-au cursor">Buy Again</p>
                    <p className="mx-sm-3 mx-sm-au cursor">Not Yet Shipped</p>
                    <p className="mx-sm-3 mx-sm-au cursor">Cancelled Orders</p>
                </div>
                <hr />
                <div className="card mb-4">
                    <div className="card-title d-flex border-bottom p-2 font-13 font-sm-12" style={{ "backgroundColor": "rgb(243, 242, 242)" }}>
                        <span className="col-md-4 mx-auto">
                            <p className="my-1">ORDER PLACED</p>
                            <p className="m-0">17 October 2021</p>
                        </span>
                        <span className="col-md-4 mx-auto text-center">
                            <p className="my-1">TOTAL</p>
                            <p className="m-0">$149.00</p>
                        </span>
                        <div className="col-md-4  mx-auto px-md-5 text-end">
                            <p className="my-1">ORDER # 404-2126309-0497117</p>
                            <p className="m-0 color-cyne cursor">View order details | invoice</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <h4 className="mb-4 text-success">Successful</h4>
                        <div className="row">
                            <div className="col-12 col-md-2 d-flex justify-content-center">
                            <img className="my-3 my-md-0" src="img/iphone.jpg" alt="" width="150px" />
                            </div>
                            <div className="col-12 col-md-7" >
                                <h5>Mi 10i 5G (Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor</h5>
                                <h6>Brand: MI
                                </h6>

                                <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                                <div className="text-md-start text-center">
                                <Link className="Link" to={'/trackOrder'}>
                                <button className="btnOrange  d-inline border-1 p-1 mt-3 px-3 mx-3">Track this Order</button></Link>
                                <button className="btn border-1 btn-white p-1 mb-1 px-3">Buy Again</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-title d-flex border-bottom p-2 font-13 font-sm-12" style={{ "backgroundColor": "rgb(243, 242, 242)" }}>
                        <span className="col-md-4 mx-auto">
                            <p className="my-1">ORDER PLACED</p>
                            <p className="m-0">17 October 2021</p>
                        </span>
                        <span className="col-md-4 mx-auto text-center">
                            <p className="my-1">TOTAL</p>
                            <p className="m-0">$149.00</p>
                        </span>
                        <div className="col-md-4  mx-auto px-md-5 text-end">
                            <p className="my-1">ORDER # 404-2126309-0497117</p>
                            <p className="m-0 color-cyne cursor">View order details | invoice</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <h4 className="mb-4 text-danger">Order Failed</h4>
                        <div className="row">
                            <div className="col-12 col-md-2 d-flex justify-content-center">
                            <img className="my-3 my-md-0" src="img/iphone.jpg" alt="" width="150px" />
                            </div>
                            <div className="col-12 col-md-7" >
                                <h5>Mi 10i 5G (Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor</h5>
                                <h6>Brand: MI
                                </h6>

                                <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                                <div className="text-md-start text-center">
                                <Link className="Link" >
                                <button className="btnRed  d-inline border-1 p-1 mt-3 px-3 mx-3">Order Failed</button></Link>
                                <button className="btn border-1 btn-white p-1 mb-1 px-3">Buy Again</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
}</>
    )
}

export default Orders
