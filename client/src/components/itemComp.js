import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import { getallprods } from "../servises/https"
import { useSelector,useDispatch } from "react-redux"
import {setProducts } from "../redux/actions/productsActions"
import SingleItemComp from './singleItemComp'
import Loading from './helper/Loading'
function ItemComp() {

    const dispatch = useDispatch()

    let [prodData, setProdData] = useState([]);
    let [isloading, setisloading] = useState(true);
 
    // these cod ewill have to return in https
    const getallprods = async () => {
        const res = await axios.post("http://localhost:5000/getallprods").catch((err) => {
            console.log(err);
        })
        dispatch(setProducts(res.data));
    }
    useEffect(() => {

        getallprods();
        setisloading(false)
    }, [setProdData])

    // get data froms store
    const prods = useSelector((state) => state.allProducts.products)
    // console.log(prods);
    

    return (
        <>
            <div className="row d-flex justify-content-center mx-2 my-3">
                {
                    !isloading ?
                    prods.map((val, i, arr) => {
                            return <>
                                <SingleItemComp val={val} ind={i} arr={arr} />
                            </>
                        }) :
                        <>
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                        </>
                }
            </div>
        </>
    )
}

export default ItemComp

// :
//  for(var i=0;i<20:i++)
//                 { 
//                        <div className="individualItem col-12 w-ml-90  my-2 col-md-2" style={{ width: "300px", height: "300px",padding:"34px" }}>
//                        <div className="like-div">
//                            <div className="text-center mb-1">
//                                <Skeleton height="120px" />
//                            </div>
//                            <Skeleton height="15px"/>
//                            <div className="my-1">
//                                <Skeleton height="30px" />
//                            </div>
//                            <a className="linkDecoretionNone">
//                                <Skeleton height="40px" />
//                            </a>

//                        </div>
//                    </div>
//                 }