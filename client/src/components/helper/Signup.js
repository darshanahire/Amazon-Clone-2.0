import React ,{useState} from 'react'
import { BrowserRouter as Router,Route, Link, Switch, } from 'react-router-dom'
import { useHistory } from 'react-router-dom';


import Https from '../../servises/Https';
const Signup = () => {
    let history=useHistory()
    let initdata={
        username:"",
        email:"",
        password:"",
        cartdata:[]
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
        Https.signup(userData).then(async(res)=>{
            if(res.status==200){
            // alert(res.data);
            history.push("/login")
            }
            else if(res.status==201){
            // alert(res.data);  
            }

        })
        setUserData(initdata);
    }
    return (
        <div className="centerContainer">
            <Link className="navbar-brand my-3 mx-auto main_logo" to={"/"} ><img src="img/logoBlack.png" alt="amazon" /></Link>
            <div className="loginForm">
                <h3>Create Account</h3>
                <label htmlFor="loginInputEmail" className="lable">Your Name</label>
                <input type="text" className="loginInput" id="loginInputEmail" name="username" value={userData.username} onChange={handleChange}/>
                <label htmlFor="loginInputEmail" className="lable">Email</label>
                <input type="text" className="loginInput" id="loginInputEmail" name="email" value={userData.email} onChange={handleChange}/>
                <label htmlFor="loginInputPass" className="lable">Password</label>
                <input type="password" className="loginInput" id="loginInputPass" name="password" value={userData.password} onChange={handleChange}/>
                <button className="btnOrange" onClick={sendData}>Create Account</button>
                <p style={{ "fontSize": "12px", "marginTop": "5px" }}>
                    We will send you a text to verify your phone.
                    Message and Data rates may apply.</p>
                    </div>
            <div className="newToAmazon">
                <hr /><p style={{ "fontSize": "12px", "margin": "0 2px" }}> Already have an account ? </p><hr />
                </div>
            <Link className="btnNocolor linkDecoretionNone" to={"/Login"} >Sign In</Link>
        </div>
    )
}

export default Signup
