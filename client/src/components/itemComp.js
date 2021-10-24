import React, { useState,useEffect} from 'react'
import axios from 'axios';
import SingleItemComp from './singleItemComp'

function ItemComp() {

    let [prodData, setProdData] = useState([]);

useEffect(() => {
    axios.post('/getallprods').then((d) => {
        setProdData(d.data);   
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
    return (<>
        <div className="row d-flex justify-content-center mx-2 my-3">
            { 
            prodData.map((val, i ,arr)=>{
                // let like = likedItems.find((valtofind)=>{  
                //    return (arr[i]._id===valtofind);
                // })
                // let sendlike="png/like.png"
                // if(like === undefined) { 
                //     sendlike="png/dislike.png"}                
                return <>
                <SingleItemComp val={val} ind={i} arr={arr} />
                </>
            })
            }
            {/* <div className="individualItem col">
                <div className="like-div">
                    <a className="nav-link active " onClick={likeDislike} ><img className="like-png" src={like} /></a>
                    <div className="item">
                        <img className="itemPng" src="img/boat2.png" alt="" /></div>
                    <div>
                        <h6 style={{ 'margin': '3px 0' }}>Boat Headphone 255</h6>
                        <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                        <h5>$290,00 <span className="star_para" style={{ "text-decoration": "line-through ", "fontWeight": "lighter" }}>$320,00</span></h5>
                        <button className="btnOrange mx-auto my-3 w-75 " onClick={getdata}>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="individualItem col">
                <div className="item"><a className="nav-link active " onClick={likeDislike}><img className="like-png" src={like} /></a><img className="itemPng" src="img/iphone2.webp" alt="" /></div>
                <div>
                    <h6 style={{ 'margin': '3px 0' }}>Boat Headphone 255</h6>
                    <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                    <h5>$290,00 <span className="star_para" style={{ "text-decoration": "line-through ", "fontWeight": "lighter" }}>$320,00</span></h5>
                    <button className="btnOrange mx-auto my-3 w-75 ">Buy Now</button>
                </div>
            </div>
            <div className="individualItem col">
                <div className="item"><a className="nav-link active " onClick={likeDislike} ><img className="like-png" src={like} /></a><img className="itemPng" src="img/boat1.png" alt="" /></div>
                <div>
                    <h6 style={{ 'margin': '3px 0' }}>Boat Headphone 255</h6>
                    <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                    <h5>$290,00 <span className="star_para" style={{ "text-decoration": "line-through ", "fontWeight": "lighter" }}>$320,00</span></h5>
                    <button className="btnOrange mx-auto my-3 w-75 ">Buy Now</button>
                </div>
            </div>
            <div className="individualItem col">
                <div className="item"><a className="nav-link active " onClick={likeDislike} ><img className="like-png" src={like} /></a><img className="itemPng" src="img/watch.webp" alt="" /></div>
                <div>
                    <h6 style={{ 'margin': '3px 0' }}>Boat Headphone 255</h6>
                    <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                    <h5>$290,00 <span className="star_para" style={{ "text-decoration": "line-through ", "fontWeight": "lighter" }}>$320,00</span></h5>
                    <button className="btnOrange mx-auto my-3 w-75 ">Buy Now</button>
                </div>
            </div>
            <div className="individualItem col">
                <div className="item"><a className="nav-link active " onClick={likeDislike}><img className="like-png" src={like} /></a><img className="itemPng" src="img/boat3.png" alt="" /></div>
                <div>
                    <h6 style={{ 'margin': '3px 0' }}>Boat Headphone 255</h6>
                    <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                    <h5>$290,00 <span className="star_para" style={{ "text-decoration": "line-through ", "fontWeight": "lighter" }}>$320,00</span></h5>
                    <button className="btnOrange mx-auto my-3 w-75 ">Buy Now</button>
                </div>
            </div>

            <div className="individualItem col">
                <div className="item"><a className="nav-link active " onClick={likeDislike} ><img className="like-png" src={like} /></a><img className="itemPng" src="img/boat2.png" alt="" /></div>
                <div>
                    <h6 style={{ 'margin': '3px 0' }}>Boat Headphone 255</h6>
                    <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                    <h5>$290,00 <span className="star_para" style={{ "text-decoration": "line-through ", "fontWeight": "lighter" }}>$320,00</span></h5>
                    <button className="btnOrange mx-auto my-3 w-75 ">Buy Now</button>
                </div>
            </div>
            <div className="individualItem col">
                <div className="item"><a className="nav-link active " onClick={likeDislike}><img className="like-png" src={like} /></a><img className="itemPng" src="img/iphone2.webp" alt="" /></div>
                <div>
                    <h6 style={{ 'margin': '3px 0' }}>Boat Headphone 255</h6>
                    <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                    <h5>$290,00 <span className="star_para" style={{ "text-decoration": "line-through ", "fontWeight": "lighter" }}>$320,00</span></h5>
                    <button className="btnOrange mx-auto my-3 w-75 ">Buy Now</button>
                </div>
            </div>
            <div className="individualItem col">
                <div className="item"><a className="nav-link active " onClick={likeDislike} ><img className="like-png" src={like} /></a><img className="itemPng" src="img/boat1.png" alt="" /></div>
                <div>
                    <h6 style={{ 'margin': '3px 0' }}>Boat Headphone 255</h6>
                    <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                    <h5>$290,00 <span className="star_para" style={{ "text-decoration": "line-through ", "fontWeight": "lighter" }}>$320,00</span></h5>
                    <button className="btnOrange mx-auto my-3 w-75 ">Buy Now</button>
                </div>
            </div>
            <div className="individualItem col">
                <div className="item"><a className="nav-link active " onClick={likeDislike} ><img className="like-png" src={like} /></a><img className="itemPng" src="img/watch.webp" alt="" /></div>
                <div>
                    <h6 style={{ 'margin': '3px 0' }}>Boat Headphone 255</h6>
                    <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                    <h5>$290,00 <span className="star_para" style={{ "text-decoration": "line-through ", "fontWeight": "lighter" }}>$320,00</span></h5>
                    <button className="btnOrange mx-auto my-3 w-75 ">Buy Now</button>
                </div>
            </div>
            <div className="individualItem col">
                <div className="item"><a className="nav-link active " onClick={likeDislike}><img className="like-png" src={like} /></a><img className="itemPng" src="img/boat3.png" alt="" /></div>
                <div>
                    <h6 style={{ 'margin': '3px 0' }}>Boat Headphone 255</h6>
                    <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                    <h5>$290,00 <span className="star_para" style={{ "text-decoration": "line-through ", "fontWeight": "lighter" }}>$320,00</span></h5>
                    <button className="btnOrange mx-auto my-3 w-75 ">Buy Now</button>
                </div>
            </div>
            <div className=" individualItem col">
                <div className="item"><a className="nav-link active " onClick={likeDislike} ><img className="like-png" src={like} /></a><img className="itemPng" src="img/macbook2.webp" alt="" /></div>
                <div>
                    <h6 style={{ 'margin': '3px 0' }}>Boat Headphone 255</h6>
                    <p className="star_para">Apple <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                    <h5>$290,00 <span className="star_para" style={{ "text-decoration": "line-through ", "fontWeight": "lighter" }}>$320,00</span></h5>
                    <button className="btnOrange mx-auto my-3 w-75 ">Buy Now</button>
                </div>
            </div> */}
        </div>



    </>
    )
}

export default ItemComp
