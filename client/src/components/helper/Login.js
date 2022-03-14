import React ,{useState} from 'react'
import { BrowserRouter as Router,Route, Link, Switch, } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import Https from "../../servises/Https"
import { useSelector, useDispatch } from 'react-redux'
import {UserName,setlikeProduct,setAllDataToCart} from "../../redux/actions/productsActions"
import axios from 'axios'
const Login = () => {
    const dispatch = useDispatch()
    let history=useHistory()
    let initdata={
        email:"",
        password:""
    }
    const [userData,setUserData] =useState(initdata)
    function handleChange(e){
        const {name ,value}=e.target;
        setUserData({
            ...userData,
            [name]:value
        })
    }
    function sendData(){
        if(!initdata.email && !initdata.password ){
            Https.login(userData).then((res)=>{
            console.log(res);
            
            if(res.status==200){
            localStorage.setItem("user",res.data)
            dispatch(UserName(res.data));
            Https.getUser(res.data).then((res) => {
                let initialLikesCount = res.data.liked.length;
                dispatch(setlikeProduct(initialLikesCount));
                dispatch(setAllDataToCart(res.data.cartdata));
            })
            history.push("/")
        }
            if(res.status==201){
            // alert(res.data)  
            }
        })}
        else{
            Swal.fire(
                'Warning',
                'Plese Enter Sufficient Data',
                'warning'
              )
        }
    }
    return (
        <div className="centerContainer">
            <Link className="navbar-brand my-3 mx-auto  main_logo" to={"/"} ><img src="img/logoBlack.png" alt="amazon" /></Link>
            <div className="loginForm">
                <h3>Sign-In</h3>
                <label htmlFor="loginInputEmail" className="lable">Email or mobile phone number</label>
                <input type="text" className="loginInput" id="loginInputEmail" name="email" value={userData.email} onChange={handleChange}/>
                <label htmlFor="loginInputPass" className="lable">Password</label>
                <input type="password" className="loginInput" id="loginInputPass"  name="password" value={userData.password}onChange={handleChange}/>
                <button className="btnOrange" onClick={sendData}>Sign In</button>
                <p style={{ "fontSize": "12px", "marginTop": "5px" }}>
                    By continuing, you agree to Amazon's Conditions of Use Privacy Notice</p>
            </div>
            <div className="newToAmazon">
                <hr /><p style={{ "fontSize": "12px", "margin": "0 5px" }}> New to Amazon ? </p><hr />
            </div>
            <Link rel="stylesheet" className="linkDecoretionNone btnNocolor" to={"/signUp"} > Create your Amazon account</Link>
            
        </div>
    )
}

export default Login
