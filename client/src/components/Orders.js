import React from 'react'
import Navbar from './Navbar'
function Orders() {
    return (
        <div style={{ "margin-top": "60px" }}>
            <div className="container">
                <Navbar />
                <h3 className="py-3">Your Orders</h3>
                <div className="d-flex color-cyne">
                    <p className="mx-3 bdr-b-org px-1 cursor">Orders</p>
                    <p className="mx-3 cursor">Buy Again</p>
                    <p className="mx-3 cursor">Not Yet Shipped</p>
                    <p className="mx-3 cursor">Cancelled Orders</p>
                </div>
                <hr />
                <div className="card mb-4">
                    <div className="card-title d-flex border-bottom p-2" style={{ "background-color": "rgb(243, 242, 242)" }}>
                        <span className="col-4">
                            <p className="my-1 font-13">ORDER PLACED</p>
                            <p className="m-0 font-13">17 October 2021</p>
                        </span>
                        <span className="col-4 text-center">
                            <p className="my-1 font-13">TOTAL</p>
                            <p className="m-0 font-13">$149.00</p>
                        </span>
                        <div className="col-4 px-5 text-end">
                            <p className="my-1 font-13">ORDER # 404-2126309-0497117</p>
                            <p className="m-0 font-13 color-cyne cursor">View order details | invoice</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <h4 className="mb-4 text-success">Successful</h4>
                        <div className="row">
                            <div className="col-2">
                            <img  src="img/iphone.jpg" alt="" width="150px" />
                            </div>
                            <div className="col-7" >
                                <h4>Mi 10i 5G (Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor</h4>
                                <h6>Brand: MI
                                </h6>

                                <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                                <button className="btn border-1 p-1 mt-3 px-3">Buy Again</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-title d-flex border-bottom p-2" style={{ "background-color": "rgb(243, 242, 242)" }}>
                        <span className="col-4">
                            <p className="my-1 font-13">ORDER PLACED</p>
                            <p className="m-0 font-13">17 October 2021</p>
                        </span>
                        <span className="col-4 text-center">
                            <p className="my-1 font-13">TOTAL</p>
                            <p className="m-0 font-13">$149.00</p>
                        </span>
                        <div className="col-4 px-5 text-end">
                            <p className="my-1 font-13">ORDER # 404-2126309-0497117</p>
                            <p className="m-0 font-13 color-cyne cursor">View order details | invoice</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <h4 className="mb-4 text-danger"> Order Failed</h4>
                        <div className="row">
                            <div className="col-2">
                            <img  src="img/iphone.jpg" alt="" width="150px" />
                            </div>
                            <div className="col-7" >
                                <h4>Mi 10i 5G (Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor</h4>
                                <h6>Brand: MI
                                </h6>

                                <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                                <button className="btn border-1 btn-white p-1 mt-3 px-3">Buy Again</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders
