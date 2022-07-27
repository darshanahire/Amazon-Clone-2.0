import React, { useState, useEffect } from 'react'
import Https from '../servises/Https'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { setCart, decressCartCount, setAllDataToCart } from "../redux/actions/productsActions"


export default function SingleCartComp(props) {
    let [prodData, setProdData] = useState({});
    const USER = useSelector((state) => state.UserName.username)

    const dispatch = useDispatch();
    // useEffect(() => {
    //     let id = props.val;

    //     Https.seeProduct(id).then((res) => {
    //         let obj = res.data;
    //         setProdData(obj)
    //     })
    // }, [setProdData])
    function removeFromCart(e) {
        if (USER) {
            let id = props.val;
            Https.removeFromCart(id, USER).then((res) => {
                if (res.status == 200) {
                    let obj = res.data;
                    dispatch(setAllDataToCart(obj))
                    dispatch(decressCartCount(1))
                    setProdData(obj)
                }
            })
        }
    }
    return (
        <>
            <hr className="mt-1" />
            <div className="card-body">
                <div className="row">
                    <div className="col-12 col-lg-10 d-block d-lg-flex justify-content-between">
                            <div class="form-check mx-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            </div>
                        <div className="col-12 col-lg-2 d-flex align-items-center justify-content-center my-md-3">
                            <img className="my-3 my-md-0 shopCartProdImg" src={props.val.prodImg} alt="" width="120px" />
                        </div>
                        <div className="col-12 col-md-8 mx-md-4" >
                            <h5>{props.val.prodName} (Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor</h5>
                            <h6>Brand: {props.val.prodBrand}
                            </h6>

                            <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                            <div className="text-md-start text-center">
                                <div className=" d-flex flex-row align-items-center mt-3">
                                <Link className="Link" to={'/paygateway/' + props.val._id}>
                                    <button className="btnOrange  d-inline border-1 p-1 my-auto px-3 mx-3" onClick={removeFromCart} >Order Now</button>
                                </Link>
                                    <span> Qty : </span>
                                    <select class=" mx-1 mx-md-3 inputSearch btn-white form-select shadow-none border-1" aria-label="Default select example" style={{ 'width': "70px" }}>
                                        <option selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                    {/* <button className="btn border-1 btnRed mt-0 text-white shadow-none">Remove From Cart</button> */}
                                    <div className="vr my-auto d-none d-md-flex"> </div>
                                    <p className="color-cyne my-auto font-13 mx-2 mx-md-3 cursor" id={props.val._id} onClick={removeFromCart} >Delete</p>
                                    <div className="vr my-auto"> </div>
                                    <p className="color-cyne my-auto font-13 mx-2 mx-md-3 cursor">Save to later</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-2 text-center d-flex align-items-center my-3">
                        <p className="h6 m-0 col-6 col-md-12">
                            <p className="my-auto">
                                <span className="d-inline d-md-none">Price : </span>
                                ${props.val.lowPrice}
                            </p>
                        </p>
                        {/* <button className="btnOrange col-6 my-auto d-inline d-md-none">Buy Now</button> */}
                    </div>
                </div>
            </div>
            {/* <div className="individualItem col  my-2 col-md-8 mx-auto" style={{ "border": "1px solid rgb(197, 197, 197)" }}>
                <div className="like-div d-flex flex-row">
                    <div className="item d-flex justify-content-center my-2">
                        <img className="itemPng cursor" src={prodData.prodImg} alt="" /></div>
                    <div className="w-100">
                        <h6 style={{ 'margin': '3px 0' }}>{prodData.prodName}</h6>
                        <p className="star_para">{prodData.prodBrand} <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                        <h5>${prodData.lowPrice} <span className="star_para" style={{ "textDecoration": "line-through ", "fontWeight": "lighter" }}>${prodData.highPrice}</span></h5>
                        <Link className="linkDecoretionNone" >
                            <button id={prodData._id} className="btnOrange mx-auto mt-2 w-75" >Buy Now</button>
                        </Link>
                        <Link className="linkDecoretionNone" >
                            <button id={prodData._id} className="btnNocolor mx-auto mt-1 mb-3 w-75" onClick={removeFromCart}>Remove From Cart</button>
                        </Link>
                    </div>
                </div>
            </div> */}
        </>
    )
}

