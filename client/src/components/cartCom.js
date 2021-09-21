import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import SingleCartComp from './singleCartComp'
import Navbar from './Navbar'

export default function CartCom() {
    let [cartItem,setCartItem] = useState([])

    useEffect(() => {
        let user =localStorage.getItem("user");
        if(user){
        axios.post('/get-cart-items',{user}).then(async(d) => {
            setCartItem(d.data);   
})}}, [setCartItem]) 
    return (
        <>
        <Navbar/>
        
        <div className="row d-flex justify-content-center mx-2 row" style={{"margin-top":"60px","background-color": "rgb(243, 242, 242)"}}>
        <h3 className="text-center my-4">Your Cart Items</h3>
            {
                cartItem.map((val,i,arr)=>{
                    return <>
                    <SingleCartComp  val={val} ind={i} arr={arr} />
                    </>
                })


            }
        </div>
        </>
    )
}
