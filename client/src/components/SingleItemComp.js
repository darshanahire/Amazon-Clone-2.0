import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incressLikeCount, decressLikeCount, UserName } from "../redux/actions/productsActions"
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { BrowserRouter as Router, Route, Link, Switch, } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

import Https from '../servises/Https'
import Swal from 'sweetalert2'


export default function SingleItemComp(props) {
    let history=useHistory()
    const USER = useSelector((state) => state.UserName.username);
    const [likeed, disLike] = useState(false);

    // console.log("props.val",props.val);
    const [idtopass, setidtopass] = useState(props.val._id);

    const dispatch = useDispatch()

    const likeDislike = (e) => {
        let id = props.val._id;
        
        let val = likeed;
        const username =USER
        
        if (username) {
            if (!val) dispatch(incressLikeCount(1));
            else dispatch(decressLikeCount(1));
            let id=idtopass;
            Https.handdleLike(id, val, username).then((res) => {

                
                if (res.status == 200) {
                    disLike(!likeed);
                }
                else if (res.status == 201) {
                    Authorization()
                }
            }
            )
        }
        else {
            Authorization();
        }
    }

    function Authorization(){
        if(!USER){
            Swal.fire({
                title: 'You are Not Login..!',
                text: "Please Login to Proceed",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to Login Page'
              }).then((result) => {
                if (result.isConfirmed) {
                    history.push('/login')
                }
              })
        }
    }

    useEffect(() => {
        if (USER) {
            Https.getLikedArr(USER).then((res) => {
                if (res.status == 200) {
                    let arr = res.data
                    let TOF = arr.find((elem) => {
                        return props.arr[props.ind]._id === elem;
                    })
                    disLike(TOF === undefined ? false : true);
                }
                else{
                    console.log(res.status);
                    
                }
            }).catch((e)=>{
                localStorage.removeItem('user');
                console.log('localStorage cleared , use not found in db');
                
            })
        }
    }, [disLike, USER])
 
    return (
        <>
            <div className="individualItem col-12 w-ml-90  my-2 col-md-2" style={{ width: "300px" }}>
                <div className="like-div">
                    <a className="nav-link active cursor d-flex justify-content-end p-0" onClick={likeDislike} >
                        <div>
                            <IconButton color="inherit">
                                {likeed === true ? <FavoriteIcon color="error" id={idtopass} /> : <FavoriteBorderOutlinedIcon id={idtopass} />}
                            </IconButton>
                        </div>
                    </a>
                    <div className="item d-flex justify-content-center my-0">
                        <img className="itemPng mt-0" src={props.val.prodImg} alt="" /></div>
                    <div>
                        <h6 style={{ 'margin': '3px 0' }}>{props.val.prodName}</h6>
                        <p className="star_para">{props.val.prodBrand} <br /> ⭐⭐⭐⭐ 4.8 (21032 reviews)</p>
                        <h5>${props.val.lowPrice} <span className="star_para" style={{ "textDecoration": "line-through ", "fontWeight": "lighter" }}>${props.val.highPrice}</span></h5>
                        <Link className="linkDecoretionNone" to={"/seeprod/" + idtopass}>
                            <button id={props.val._id} className="btnOrange mx-auto my-3 w-75" >View Item</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
