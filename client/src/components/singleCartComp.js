import React, { useState, useEffect } from 'react'
import Https from '../servises/Https'
import { BrowserRouter as Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {setCart, decressCartCount } from "../redux/actions/productsActions"


export default function SingleCartComp(props) {
    let [prodData, setProdData] = useState({});
    const USER = useSelector((state) => state.UserName.username)
    
    const dispatch=useDispatch();
    useEffect(() => {
        let id = props.val;
       
        Https.seeProduct(id).then((res) => {
            let obj = res.data;
            setProdData(obj)
        })
    }, [setProdData])
    function removeFromCart(e) {
        if (USER) {
            let id = e.target.id;
            Https.removeFromCart(id, USER).then((res) => {
                if (res.status == 200) {
                    let obj = res.data;
                    dispatch(setCart(obj))
                    dispatch(decressCartCount(1))
                    setProdData(obj)
                }
            })
        }
    }
    return (
        <>
            <div className="individualItem col  my-2 col-md-8 mx-auto" style={{ "border": "1px solid rgb(197, 197, 197)" }}>
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
            </div>
        </>
    )
}

