import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function PayGateway() {
    return (
        <div style={{ "margin-top": "80px" }}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-lg-9">
                        <h3 className="my-3">Select a payment method</h3>
                        <hr />
                        <div className="card">
                            <h5 className="m-2">Your available balance</h5 >
                            <hr />
                            <div className="row">
                                <div className="col-7 d-flex">
                                    <input type="checkbox" name="useBal" id="useBal" className="mt-1 mx-2" />
                                    <p className="font-14">
                                        Use your <span className="bold-7"> $ 600.00 Amazon Pay balance</span>
                                    </p>
                                </div>
                                <div className="col-5">
                                    <p className="font-13">
                                        1.For optimal utilization of your Amazon Pay balance, balance expiring the earliest will be redeemed first.
                                        <br />
                                        2.Your Amazon Pay balance cannot be used along with Cash on Delivery or the EMI payment modes.
                                    </p>
                                </div>
                            </div>

                            <hr />
                            <h5 className="m-2">Another payment methods</h5 >
                            <div className="card py-3 font-14">
                                <p>
                                    <input type="radio" name="payselect" id="" className="mx-2" />Add Debit/Credit/ATM Card
                                    <div className="mx-4">
                                        <img className="mx-1" src="img/visa.png" alt="" width="60px"/>
                                        <img className="mx-1" src="img/master.png" alt="" width="60px"/>
                                        <img className="mx-1" src="img/rupay.png" alt="" width="60px"/>
                                        <img className="mx-1" src="img/maestro.png" alt="" width="60px"/>
                                    </div>
                                </p>
                                <p>
                                    <input type="radio" name="payselect" id="" className="mx-2" />Net Banking
                                    <select class="form-select w-20 mx-3 my-2 py-1 mx-4" aria-label="Default select example">
                                        <option selected>Choose an Option</option>
                                        <option value="1">State Bank Of India</option>
                                        <option value="2">HDFC Bank</option>
                                        <option value="3">Bank of Maharastra</option>
                                    </select>
                                    <p className="font-12 mx-4 my-2">
                                        For faster payment and instant refund, please use UPI</p>
                                </p>
                                <p>
                                    <input type="radio" name="payselect" id="" className="mx-2" />Other UPI Apps
                                </p>
                                <p className="color-gray">
                                    <input type="radio" name="payselect" id="" className="mx-2 " disabled />EMI Unavailable <span className="color-cyne font-12 cursor">Why?</span>
                                </p>
                                <p className="color-darkgray">
                                    <input type="radio" name="payselect" id="" className="mx-2" disabled />Pay on Delivery
                                    <p className="font-12 mx-4 my-1">Due to high demand and to ensure social distancing, Pay on Delivery is not available</p>
                                </p>
                                <div className="card d-flex d-md-none">
                        <Link className="Link" to={'/placedOrder'}>
                            <button className="btnOrange w-75 mx-auto mt-3" >Continue</button>
                            </Link>
                            <p className="font-14 text-center my-3">You can review this order before it's final.</p>
                        </div>
                            </div>
                        </div>
                        <h5 className="my-3">More payment options</h5>
                        <hr />
                        <div className="mb-lg-5">
                        <h5>Gift Cards, Vouchers & Promotional Codes</h5>
                        <p className="font-12 color-cyne">Enter a gift card, voucher or promotional code</p>
                        <div className="d-flex justify-content-between flex-lg-row flex-column align-items-center">
                        <input type="text" className="loginInput w-lg-40 w-75 my-3" placeholder="Enter a gift card, voucher or promotional code" />
                        <img className="mx-1" src="img/giftcard.png" alt="" width="120px"/>
                        </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 my-lg-5">
                        <div className="card my-lg-5 border-lg-auto border-none">
                        <Link className="Link" to={'/placedOrder'}>
                            <button className="btnOrange w-75 mx-auto mt-3" >Continue</button>
                            </Link>
                            <p className="font-14 text-center my-3">You can review this order before it's final.</p>
                        </div>
                        <div className="card d-none d-md-flex" style={{"margin-top":"195%"}}>
                        <Link className="Link" to={'/placedOrder'}>
                            <button className="btnOrange w-75 mx-auto mt-3" >Continue</button>
                            </Link>
                            <p className="font-14 text-center my-3">You can review this order before it's final.</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default PayGateway
