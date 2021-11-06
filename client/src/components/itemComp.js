import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SingleItemComp from './singleItemComp'
import Loading from './helper/Loading'
function ItemComp() {

    let [prodData, setProdData] = useState([]);
    let [isloading, setisloading] = useState(true);

    useEffect(() => {
        axios.post('/getallprods').then((d) => {
            setProdData(d.data);
            setisloading(false);
        })
    }, [setProdData])
    // console.log(prodData);

    // console.log(likedItems);
    // const getdata = () => {
    //     axios.post('/seeprod', { id }).then((d) => {
    //         console.log(d.data);
    //         setProdData = d.data;
    //     })
    // }
    return (
        <>
            <div className="row d-flex justify-content-center mx-2 my-3">
                {
                    !isloading ?
                    prodData.map((val, i, arr) => {             
                        return <>
                            <SingleItemComp val={val} ind={i} arr={arr} />
                        </>
                    }) :
                    <>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
                    <Loading/>
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