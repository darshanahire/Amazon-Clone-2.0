import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setProducts } from "../redux/actions/productsActions"
import SingleItemComp from './SingleItemComp'
import Loading from './helper/Loading'
import Https from "../servises/Https"
function ItemComp() {

    const dispatch = useDispatch()

    let [isloading, setisloading] = useState(true);



    useEffect(() => {
        //Https.getallprods();
        Https.getAllProducts().then((res) => {
            dispatch(setProducts(res.data))
            setisloading(false);
        })
    }, [])

    // get data froms store
    const prods = useSelector((state) => state.allProducts.products)

    const SingleItem = prods.map((val, i, arr) => {
        
        return <SingleItemComp key={i} val={val} ind={i} arr={arr} />

    });
    return (
        <>
        {SingleItem.length == 0 && !isloading ? <div className="text-center w-100 mb-5">
            <h3 className="pb-0">Opps! Items Not Found</h3>
            <img class="pngImg" src="img/notfound2.png" width="400" />
            </div> :
            <div className="row d-flex justify-content-center mx-2 my-3">
                {
                    !isloading ?
                        <>{SingleItem }</>
                        :
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
}
        </>
    )
}

export default ItemComp;

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
