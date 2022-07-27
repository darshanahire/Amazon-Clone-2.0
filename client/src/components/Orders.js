import React ,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SingleOrder from './SingleOrder'
import{setOrders } from "../redux/actions/productsActions"


import Loader from './helper/Loader';
import Https from '../servises/Https';

function Orders() {
    const dispatch = useDispatch();
    let [loader, setLoder] = useState(true);
    const USER = useSelector((state) => state.UserName.username);

    let [userOrders,setuserOrders] = useState();
    function LoaderTime(){ setTimeout(() => {setLoder(false)},1000)}
    useEffect(() => {LoaderTime()}, []);
    useEffect(()=>{ 
        if(USER){       
        Https.getUser(USER).then((res) => {
            setuserOrders(res.data.orders);
            // console.log(res.data.orders);
            dispatch(setOrders(res.data.orders));
            setLoder(false);
        });
    }},[])

    const orders = useSelector(state => state.Orders.allorders)
    return (
        <>{loader ? <Loader loaderNum={1} bg={'#eeeeee'}/>:
        <div style={{ "marginTop": "60px" }}>
            <div className="container">
        <h3 className="py-3">Your Orders</h3>
       <div className="d-flex color-cyne font-sm-13">
           <p className="mx-sm-3 mx-sm-au bdr-b-org px-1 cursor">Orders</p>
           <p className="mx-sm-3 mx-sm-au cursor">Buy Again</p>
           <p className="mx-sm-3 mx-sm-au cursor">Not Yet Shipped</p>
           <p className="mx-sm-3 mx-sm-au cursor">Cancelled Orders</p>
       </div>
       <hr />
       </div>
            {orders!==undefined ? orders.map((val, i, arr) => {
                        return <>
                            <SingleOrder key={val} val={val} ind={i} arr={arr} />
                        </>
                    }) : <><div className="d-flex align-items-center">
                    <div className="text-center w-100">
                        <h3 className="pb-0 mb-2">You Dont have any Orders..!!!</h3>
                        <img className="pngImg" src="img/emptyCart.png" width="500" />
                    </div>
                    </div></>}
        </div>
        }</>
    )
}

export default Orders
