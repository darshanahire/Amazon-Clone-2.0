import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { setCart } from "../redux/actions/productsActions"
import SingleCartComp from './SingleCartComp'
import Https from '../servises/Https'

export default function CartCom() {
    let [cartItem, setCartItem] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        if (USER) {
            Https.getCartItems(USER).then((res) => {
                setCartItem(res.data);
                dispatch(setCart(res.data));
                
            })
        }
    }, [setCartItem])
    const CurrStoreCart = useSelector((state) => state.cartHanddleing.products);
    const USER = useSelector((state) => state.UserName.username)
    return (
        <>


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
