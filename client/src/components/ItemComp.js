import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import SingleItemComp from './SingleItemComp';
import Loading from './helper/Loading';
import Https from "../servises/Https";

function ItemComp() {
    const dispatch = useDispatch();
    const USER = useSelector((state) => state.UserName.username);
    const [likedItems, setlikedItems] = useState([]);
    let [loading, setLoading] = useState(true);
    let [infiniteLoading, setInfiniteLoading] = useState(false);  // New state for infinite scrolling loading
    const [allProds, setAllProds] = useState([]);  // Local state for products
    const infiSroll = useSelector((state) => state.infiniteScroll.infiScroll);
    // Fetch initial products and liked items
    useEffect(() => {
        Https.getAllProducts().then((res) => {
            dispatch(setProducts(res.data));
            setAllProds(res.data); 
            console.log(res.data);
             // Save to local state
            setLoading(false);
        });

        // Moved this from single item comp to avoid multiple calls
        Https.getLikedArr('manager').then((res) => {
            if (res.status === 200) {
                setlikedItems(res.data);
            } else {
                console.log(res.status);
            }
        }).catch((e) => {
            localStorage.removeItem('user');
            console.log('localStorage cleared, user not found in db');
        });
    }, [dispatch]);

    // Infinite scrolling handler
    const handleInfiniteScrolling = () => {
        if (infiSroll && window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && !infiniteLoading) {
            setInfiniteLoading(true);  // Start infinite scroll loading
            console.log(allProds);
            
            Https.getAllProducts().then((res) => {
                const newProds = res.data;
                let arr = [...allProds, ...newProds];
                setAllProds(arr);  // Append new products
                setInfiniteLoading(false);  // Stop infinite scroll loading
                dispatch(setProducts(arr));
            });
        }
    };

    // Add the scroll event listener
    useEffect(() => {
        console.log(infiSroll," infiSroll");
        if (infiSroll){
        window.addEventListener("scroll", handleInfiniteScrolling);
        return () => window.removeEventListener("scroll", handleInfiniteScrolling);  
        }// Cleanup
    }, [infiniteLoading]);  // Include infiniteLoading to avoid repeated calls

    // Get data from the store
    const prods = useSelector((state) => state.allProducts.products);

    const SingleItem = (prods) => {
        return prods.map((val, i, arr) => {
            let liked = likedItems.find((elem) => arr[i]._id === elem) !== undefined;
            
            return <SingleItemComp key={i} val={val} ind={i} arr={arr} liked={liked} />;
        });
    };

    return (
        <>
            {allProds.length === 0 && !loading ? (
                <div className="text-center w-100 mb-5">
                    <h3 className="pb-0">Oops! Items Not Found</h3>
                    <img className="pngImg" src="img/notfound2.png" width="400" alt="Not Found"/>
                </div>
            ) : (
                <div className="row d-flex justify-content-center mx-2 my-3">
                    {!loading ? (
                        <>
                            {SingleItem(prods)}
                            {infiniteLoading && (
                                // <div className="text-center w-100 my-3">
                                    Array(4).fill(<Loading />)
                                // </div>
                            )}
                        </>
                    ) : (
                        <>
                            {Array(16).fill(<Loading />)}  {/* Placeholder loaders */}
                        </>
                    )}
                </div>
            )}
        </>
    );
}

export default ItemComp;
