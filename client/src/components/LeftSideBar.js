import React ,{useState,useEffect} from 'react'
import { BrowserRouter as Router,Route, Link, Switch, } from 'react-router-dom'
import "../index.css"



function LeftSideBar() {
    const [DarkMode,setDarkMode]=useState();
    useEffect(() => {
        let mode=JSON.parse(localStorage.getItem("DarkMode"));
        console.log(typeof(mode));
        setDarkMode(mode);
    }, [setDarkMode])
    return (
        <div className="LeftSideBar" style={{ 'background-color': 'white' }}>
        {/* // <div className="LeftSideBar" style={DarkMode?{ 'background-color': 'black' }:{ 'background-color': 'white' }}> */}
            <ul>
                <li><i class="fas fa-th-large mx-2"></i>Categories</li>
                <li><i class="fas fa-circle-notch mx-2"></i>Echo and Alexa</li>
                <li><i class="fas fa-tablet-alt mx-2"></i>Kindle</li>
                <li><i class="fas fa-desktop mx-2"></i>Electronics</li>
                <li><i class="fab fa-amazon-pay mx-2 fa-lg"></i>Amazon Pay</li>
                <li><i class="fas fa-tshirt mx-2"></i>Fashion</li>
                <li><i class="fas fa-dumbbell mx-2"></i>Health and Beauty</li>
                <li><i class="fas fa-gamepad  mx-2"></i>Games</li>
                <li><i class="fas fa-headphones-alt mx-2"></i>Films and Music</li>
                <li><i class="fas fa-plane-departure mx-2"></i>Sports and Tourism</li>
                <li><i class="fas fa-gift mx-2"></i>Gift Cards</li>
                <li><i class="fas fa-percentage  mx-2"></i><h6 className="my-auto">Sell On Amazon</h6></li>
                <li><i class="far fa-question-circle mx-2"></i><h6 className="my-auto"> Help</h6></li>
                <li className="my-2"><Link className="linkDecoretionNone" to={"/Login"}><h5><i class="fas fa-sign-in-alt mx-2"></i>Login</h5></Link></li>
            </ul>
        </div>
    )
}

export default LeftSideBar
