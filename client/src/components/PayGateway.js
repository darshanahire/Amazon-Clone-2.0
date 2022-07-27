import React,{useEffect,useState} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loader from './helper/Loader';
import SingleItemComp from './SingleItemComp'

import Swal from 'sweetalert2'

import Https from '../servises/Https';


function PayGateway(props) {

    let [loader, setLoder] = useState(false);
    let [lodernum, setlodernum] = useState(1);
    function LoaderTime(){ setTimeout(() => {setLoder(false)},1000)}
    const USER = useSelector((state) => state.UserName.username);
    let history = useHistory()
    let { id } = useParams();

    const [prodData,setprodData] = useState();

    const makePayment = async (e)=>{
        if(USER){            
        let d = new Date();
        let d3 = new Date()
        d3.setDate(d.getDate()+3);
            let OrderData ={
                prod :prodData,
                orderNo : Math.floor((Math.random() * 1000000000)),
                TrackNo : Math.floor((Math.random() * 1000000000)),
                status : "Initiated",
                orderDate : d.toLocaleDateString("en-us",{ day:"numeric",year:"numeric", month:"short"}),
                orderTime : d.toLocaleTimeString("en-us",{hour:"numeric",minute:"numeric"}),
                shipDate : d3.toLocaleDateString("en-us",{ day:"numeric",year:"numeric", month:"short"}),
                paymentMethod : "Online",
                discount :"0",
                payedAmt : prodData.lowPrice,
                deliveryAdd : "ABC",
                ShipAdd : "XYZ"
            }
            Https.order(USER,OrderData).then(async (res) => {
                if (res.status == 200) {
                    let OID = res.data._id;
                    // console.log(OID);
                    history.push("/placedOrder/"+OID)
                }
                else if (res.status == 201) {
                    Swal.fire(
                        'Error',
                        'Order Failed',
                        'Error'
                    )
                }
            })
        }
    }

    useEffect(() => {LoaderTime()}, [setlodernum])
    useEffect(async() => {
        if(!USER){ history.push('/login')}
        if(USER){
        let prod = await Https.seeProduct(id);        
        setprodData(prod.data);
        window.scrollTo(0, 0)
        }
    }, [])
    return (
        <>{loader ||prodData===undefined ? <Loader loaderNum={lodernum} bg={'#eeeeee'}/>: <>
        <div style={{ "marginTop": "80px" }}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-lg-9">
                        <h3 className="my-3">Select a Payment Method</h3>

                        <div className="card">
                            <div className="d-flex align-items-center my-auto">
                            <h5 className="m-2 my-3">Your Available Pay Balance</h5 >
                            </div>
                            <hr className='mt-0'/>
                            <div className="row">
                                <div className="col-7 d-flex align-items-center">
                                    <input type="checkbox" name="useBal" id="useBal" className="mt-1 mx-2" checked/>
                                    <p className="font-14 m-0 p-0">
                                        Use your <span className="bold-7">₹. 600.00 Amazon Pay balance</span>
                                    </p>
                                    <img className="ml-4" src="/img/pay2.jpg" alt="" width="100px" />
                                </div>
                                <div className="col-5">
                                    <p className="font-13">
                                        1.For optimal utilization of your Amazon Pay balance, balance expiring the earliest will be redeemed first.
                                        <br />
                                        2.Your Amazon Pay balance cannot be used along with Cash on Delivery or the EMI payment modes.
                                    </p>
                                </div>
                            </div>
                            </div>
                            <div className="card mt-4">

                            <h5 className="m-2 my-3">Another Payment Methods</h5 >
                            <hr className='mt-0'/>
                            <div className="py-3 font-14">
                                <p>
                                    <input type="radio" name="payselect" id="" className="mx-2" />Add Debit/Credit/ATM Card
                                    <div className="mx-4">
                                        <img className="mx-1" src="/img/visa.png" alt="" width="60px"/>
                                        <img className="mx-1" src="/img/master.png" alt="" width="60px"/>
                                        <img className="mx-1" src="/img/rupay.png" alt="" width="60px"/>
                                        <img className="mx-1" src="/img/maestro.png" alt="" width="60px"/>
                                    </div>
                                </p>
                                <p>
                                    <input type="radio" name="payselect" id="" className="mx-2" checked/>Net Banking
                                    <select className="form-select w-75 mx-3 my-2 py-1 mx-4 shadow-none border-1" aria-label="Default select example">
                                        <option >Choose an Option</option>
                                        <option selected value="1">State Bank Of India</option>
                                        <option value="2">HDFC Bank</option>
                                        <option value="3">Bank of Maharastra</option>
                                    </select>
                                    <p className="font-12 mx-4 my-2">
                                        For faster payment and instant refund, please use UPI</p>
                                </p>
                                <p>
                                    <input type="radio" name="payselect" id="" className="mx-2" />Other UPI Apps
                                </p>
                                <p className="color-gray">
                                    <input type="radio" name="payselect" id="" className="mx-2 " disabled />EMI Unavailable <span className="color-cyne font-12 cursor">Why?</span>
                                </p>
                                <p className="color-darkgray">
                                    <input type="radio" name="payselect" id="" className="mx-2" disabled />Pay on Delivery
                                    <p className="font-12 mx-4 my-1">Due to high demand and to ensure social distancing, Pay on Delivery is not available</p>
                                </p>
                                <div className="card d-flex d-none">
                        <Link className="Link" onClick={makePayment}>
                            <button className="btnOrange w-75 mx-auto mt-3" >Continue</button>
                            </Link>
                            <p className="font-14 text-center my-3">You can review this order before it's final.</p>
                        </div>
                            </div>
                        </div>
                        <h5 className="my-3 d-none d-md-block">More payment options</h5>
                        <hr />
                        <div className="mb-lg-5 d-none d-md-block">
                        <h5>Gift Cards, Vouchers & Promotional Codes</h5>
                        <p className="font-12 color-cyne">Enter a gift card, voucher or promotional code</p>
                        <div className="d-flex justify-content-between flex-lg-row flex-column align-items-center">
                        <input type="text" className="loginInput w-lg-40 w-75 my-3" placeholder="Enter a gift card, voucher or promotional code" />
                        <img className="mx-1" src="/img/giftcard.png" alt="" width="120px"/>
                        </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 my-3">
                    <div className="card my-lg-5 border-lg-auto border-none">
                    <div className="individualItem col-12 w-ml-90  my-2 col-md-2" style={{ width: "300px" }}>
                    <div className="item d-flex justify-content-center my-3">
                        <img className="itemPng mt-0" src={prodData.prodImg} alt="" /></div>
                    <div>
                        <h6 style={{ 'margin': '3px 0' }}>{prodData.prodName}</h6>
                        <br />
                        {/* <p className="star_para">{prodData.prodBrand} <br /></p> */}
                        <div className="d-flex justify-content-center align-items-center flex-column">
                                        <p className="text-success font-13 m-0">
                                            <i class="fas fa-check-circle fa-lg"></i> Your order is eligible for FREE Delivery.</p>
                                        <p className="font-13">Select this option at checkout. <span className="color-cyne cursor">Details</span></p>
                                    </div>
                                    <h6 className=''>Amount To Pay : ${prodData.lowPrice}</h6>

                    </div>
            </div>
                        </div>
                        <div className="card d-md-flex mt-2">
                        <Link className="Link" onClick={makePayment}>
                            <button className="btnOrange w-75 mx-auto mt-3" >Procced to Buy</button>
                        </Link>
                            <p className="font-14 text-center my-3">You can review this order before it's final.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> </>}</>
    )
}

export default PayGateway
