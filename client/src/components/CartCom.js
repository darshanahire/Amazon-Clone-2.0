import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCart, setSubtotal } from "../redux/actions/productsActions"
import SingleCartComp from './SingleCartComp'
import Https from '../servises/Https'
import Accordion from 'react-bootstrap/Accordion';
import Loader from './helper/Loader';

export default function CartCom() {
    const MYCART = useSelector((state) => state.cartHanddleing.productsAllData)
    let [cartItem, setCartItem] = useState([])
    const dispatch = useDispatch()

    let [loader, setLoder] = useState(true);
    function LoaderTime(){ setTimeout(() => {setLoder(false)},1000)}
    useEffect(() => {LoaderTime()}, [])

    const subtotal = () => {
        let total = 0
        MYCART.forEach(element => {
            total += parseInt(element.lowPrice)
        });
        dispatch(setSubtotal(total));
        return total;
    }
    useEffect(() => {
        subtotal();
    }, [MYCART])

    const CurrSubTotal = useSelector((state) => state.cartHanddleing.subtotal);
    const CurrCartCount = useSelector((state) => state.cartHanddleing.count);




    return (
        <>
             <>{loader ? <Loader loaderNum={1} bg={'#eeeeee'}/>:
            <div style={{ "marginTop": "60px", "backgroundColor": "rgb(243, 242, 242)", "min-height": "100vh" ,height:"100%" }}>
                <div className="container-fluid">
                    <div className="row py-4">
                        <div className="col-12 col-md-7 col-lg-9 order-2">
                            <div className="card">

                                <div className="mx-3 mt-3">
                                    <h4>Shopping Cart</h4>
                                    <p className="color-cyne font-14 cursor m-0">Deselect all items</p>
                                    <div className="float-end" >

                                        <p className="d-none d-md-inline float-end m-0 mx-5">
                                            Price
                                        </p>
                                    </div>
                                </div>
                                {MYCART.length === 0 ? <><hr className="m-1"></hr><div className="text-center w-100 my-3">
                                    <h3 className="pb-0">Opps! Your Cart is Empty</h3>
                                    <img className="pngImg" src="img/notfound2.png" width="500" />
                                </div> </> :

                                    MYCART.map((val, i, arr) => {
                                        return <>
                                            <SingleCartComp key ={i} val={val} ind={i} arr={arr} />
                                        </>
                                    })

                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-3 fixed-right order-1 mb-2">
                            <div className="card mb-2">
                                <img src="img/purprot.png" alt="" className="w-100" />
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                        <p className="text-success font-13 m-0">
                                            <i class="fas fa-check-circle fa-lg"></i> Your order is eligible for FREE Delivery.</p>
                                        <p className="font-13">Select this option at checkout. <span className="color-cyne cursor">Details</span></p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-start">
                                        <div className="d-flex flex-row align-items-center justify-content-start">
                                            <h5>Subtotal ({CurrCartCount} items) : </h5>
                                            <h5> ${CurrSubTotal}</h5>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-start mb-3">

                                            <input class="font-13 form-check-input" type="checkbox" value="" id="flexCheckChecked" /> <p className=" mx-2 m-0 font-13"> This order contains a gift</p>
                                        </div>
                                        {
                                           MYCART.length === 0 ? 
                                           <button className="btnNocolor mt-2 w-75" disabled>Proceed to Buy</button> :
                                           <button className="btnOrange mt-2 w-75" >Proceed to Buy</button>
                                        }
                                    </div>
                                    <div className="mt-4">

                                        <Accordion defaultActiveKey="0" className="shadow-none">
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header> <span className="font-16"> EMI Avilable</span></Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="font-13">
                                                        Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).
                                                        <span className="color-cyne cursor"> Learn more</span>
                                                    </p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
}</>
        </>
    )
}









// {
//     CurrStoreCart.map((val, i, arr) => {
//         return <>
//             <SingleCartComp val={val} ind={i} arr={arr} />
//         </>
//     })


// }