import React ,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SingleOrder from './SingleOrder'
import{setOrders,setDelivered } from "../redux/actions/productsActions"


import Loader from './helper/Loader';
import Https from '../servises/Https';

function Orders() {
    const dispatch = useDispatch();
    let [loader, setLoder] = useState(true);
    let [toggleBtn,setToggleBtn] = useState(true);
    const USER = useSelector((state) => state.UserName.username);

    let [userOrders,setuserOrders] = useState();
    let [userDeliveredItems,setDeliveredItems] = useState();
    function LoaderTime(){ setTimeout(() => {setLoder(false)},1000)}
    useEffect(() => {LoaderTime()}, []);
    useEffect(()=>{ 
        if(USER){       
        Https.getUser(USER).then((res) => {

            setuserOrders(res.data.orders);
            setDeliveredItems(res.data.deliveredItems);
            //console.log(res.data.orders);

            dispatch(setOrders(res.data.orders));
            dispatch(setDelivered(res.data.deliveredItems));
            setLoder(false);

        });
    }
},[])

    const orders = useSelector(state => state.Orders.allorders)
    const delivered = useSelector(state => state.Delivered.alldelivered)
    return (
        <>
        {loader ? <Loader loaderNum={1} bg={'#eeeeee'}/> :
        toggleBtn ?
        <div style={{ "marginTop": "60px" }}>
            <div className="container">
        <h3 className="py-3">Your Orders</h3>
       <div className="d-flex color-cyne font-sm-13">
           <p className="mx-sm-3 mx-sm-au bdr-b-org cursor" onClick={() => setToggleBtn(true)}>Orders</p>
           <p className="mx-sm-3 mx-sm-au cursor">Buy Again</p>
           <p className="mx-sm-3 mx-sm-au cursor" onClick={() => setToggleBtn(false)}>Delivered Items</p>
           <p className="mx-sm-3 mx-sm-au cursor">Not Yet Shipped</p>
           <p className="mx-sm-3 mx-sm-au cursor">Cancelled Orders</p>
       </div>
       <hr />
       </div>
            {orders!==undefined && orders.length != 0 ? orders.map((val, i, arr) => {
                        return <>
                            <SingleOrder key={val} val={val} ind={i} arr={arr}/>
                        </>
                    }) : <><div className="d-flex align-items-center">
                    <div className="text-center w-100">
                        <h3 className="pb-0 mb-2">You Dont have any Orders..!!!</h3>
                        <img className="pngImg" src="img/emptyCart.png" width="500" />
                    </div>
                    </div></>}
        </div> :
        <div style={{ "marginTop": "60px" }}>
                <div className="container">
            <h3 className="py-3">Your Orders</h3>
           <div className="d-flex color-cyne font-sm-13">
               <p className="mx-sm-3 mx-sm-au cursor" onClick={() => setToggleBtn(true)}>Orders</p>
               <p className="mx-sm-3 mx-sm-au cursor">Buy Again</p>
               <p className="mx-sm-3 mx-sm-au bdr-b-org cursor" onClick={() => setToggleBtn(false)}>Delivered Items</p>
               <p className="mx-sm-3 mx-sm-au cursor">Not Yet Shipped</p>
               <p className="mx-sm-3 mx-sm-au cursor">Cancelled Orders</p>
           </div>
           <hr />
           </div>
                {delivered !== undefined && delivered.length != 0 ? delivered.map((val, i, arr) => {
                            return <>
                                <SingleOrder key={val} val={val} ind={i} arr={arr} />
                            </>
                        }) : <><div className="d-flex align-items-center">
                        <div className="text-center w-100">
                            <h3 className="pb-0 mb-2">You Not have any Delivered Items..!!!</h3>
                            <img className="pngImg" src="img/emptyCart.png" width="500" />
                        </div>
                        </div></>}
        </div>
        }
        </>
    )
}

export default Orders
