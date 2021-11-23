import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { setCart } from "../redux/actions/productsActions"
import SingleCartComp from './SingleCartComp'
import Navbar from './Navbar'
import Https from '../servises/Https'

export default function CartCom() {
    let [cartItem, setCartItem] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        let user = localStorage.getItem("user");
        if (user) {
            Https.getCartItems(user).then((res) => {
                setCartItem(res.data);
                dispatch(setCart(res.data));
                
            })
        }
    }, [setCartItem])
    const CurrStoreCart = useSelector((state) => state.cartHanddleing.products)
    return (
        <>
            <Navbar />

            <div className="row d-flex justify-content-center mx-2 row" style={{ "margin-top": "60px", "backgroundColor": "rgb(243, 242, 242)" }}>
                <h3 className="text-center my-4">Your Cart Items</h3>
                {
                    CurrStoreCart.map((val, i, arr) => {
                        return <>
                            <SingleCartComp val={val} ind={i} arr={arr} />
                        </>
                    })


                }
            </div>
        </>
    )
}
