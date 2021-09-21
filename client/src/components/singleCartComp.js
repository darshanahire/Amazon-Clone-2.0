import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter as  Link } from 'react-router-dom'

export default function SingleCartComp(props) {
    let [prodData, setProdData] = useState({});


    useEffect(() => {
        let id=props.val;
            axios.post('/seeprod', { id }).then(async (d) => {
                let obj=d.data;
                setProdData(obj)
    })
    }, [setProdData])
    function removeFromCart(e){
        let user=localStorage.getItem("user")
        if(user){
        let id=e.target.id;
           axios.post('/remove-from-cart', { user,id }).then(async (d) => {
               if(d.status==200){
                let obj=d.data;
                setProdData(obj)}
    })}
    }
    return (
        <>
            <div className="individualItem col  my-2 col-md-8 mx-auto" style={{border:"1px solid rgb(197, 197, 197)"}}>
                <div className="like-div d-flex flex-row">
                    <div className="item d-flex justify-content-center my-2">
                        <img className="itemPng" src={prodData.prodImg} alt="" /></div>
                    <div className="w-100">
                        <h6 style={{ 'margin': '3px 0' }}>{prodData.prodName}</h6>
                        <p className="star_para">{prodData.prodBrand} <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                        <h5>${prodData.lowPrice} <span className="star_para" style={{ "text-decoration": "line-through ", "fontWeight": "lighter" }}>${prodData.highPrice}</span></h5>
                        <Link className="linkDecoretionNone" >
                            <button id={prodData._id} className="btnOrange mx-auto mt-2 w-75" >Buy Now</button>
                        </Link>
                        <Link className="linkDecoretionNone" >
                            <button id={prodData._id} className="btnNocolor mx-auto mt-1 mb-3 w-75"  onClick={removeFromCart}>Remove From Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

