import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, } from 'react-router-dom'
import axios from 'axios'
export default function SingleItemComp(props) {

const [likedItems, SetLikedItems] = useState([])
const [likeed, disLike] = useState(false);

    let [prodData, setProdData] = useState(props.arr[props.ind]);
    const [idtopass, setidtopass] = useState(prodData._id);

    const likeDislike = (e) => {
        let id = e.target.id;
        let val = likeed;
        let username = localStorage.getItem("user")
        if(username){
        axios.post('/handlelike', { id, val, username }).then(async (d) => {
            if(d.status==200){
            disLike(!likeed);}
            else if(d.status==201){
                alert("Plese Login First")
                // <Alert severity="error">Please Login First!</Alert>
            }
        }
        )}
        else{
            alert("Please Login First")
            // <Alert severity="error">Please Login First!</Alert>
        }
}
    useEffect(() => {
        let user =localStorage.getItem("user");
        if(user){
        axios.post('/getLikedArr',{user}).then(async(d) => {
            if(d.status==200){
           let arr=d.data
            SetLikedItems(arr);
             let TOF=arr.find((elem)=>{
                return props.arr[props.ind]._id===elem;
            })  
            disLike(TOF===undefined?false:true);}
        })}
    }, [disLike])
return (
    <>
        <div className="individualItem col-12 w-ml-90  my-2 col-md-2" style={{ width: "300px" }}>
            <div className="like-div">
                <a className="nav-link active cursor" onClick={likeDislike} style={{ height: "20px" }}><img id={idtopass} className="like-png" src={likeed ===true ? "png/like.png":"png/dislike.png"} /></a>
                <div className="item d-flex justify-content-center my-2">
                    <img className="itemPng" src={prodData.prodImg} alt="" /></div>
                <div>
                    <h6 style={{ 'margin': '3px 0' }}>{prodData.prodName}</h6>
                    <p className="star_para">{prodData.prodBrand} <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                    <h5>${prodData.lowPrice} <span className="star_para" style={{ "text-decoration": "line-through ", "fontWeight": "lighter" }}>${prodData.highPrice}</span></h5>
                    <Link className="linkDecoretionNone" to={"/seeprod/" + idtopass}>
                        <button id={prodData._id} className="btnOrange mx-auto my-3 w-75" >Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
)
}
