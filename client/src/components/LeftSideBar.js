import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch, } from 'react-router-dom'
import "../index.css"



function LeftSideBar() {
    const isDarkMode = useSelector((state) => state.handdleMode.color)
    return (
        // <div className="LeftSideBar" style={{ 'backgroundColor': 'white' }}>
        <div className={isDarkMode ? "LeftSideBar darkMode" :"LeftSideBar lightMode"} >
            <ul>
                <li><i className="fas fa-th-large mx-2"></i>Categories</li>
                <li><i className="fas fa-circle-notch mx-2"></i>Echo and Alexa</li>
                <li><i className="fas fa-tablet-alt mx-2"></i>Kindle</li>
                <li><i className="fas fa-desktop mx-2"></i>Electronics</li>
                <li><i className="fab fa-amazon-pay mx-2 fa-lg"></i>Amazon Pay</li>
                <li><i className="fas fa-tshirt mx-2"></i>Fashion</li>
                <li><i className="fas fa-dumbbell mx-2"></i>Health and Beauty</li>
                <li><i className="fas fa-gamepad  mx-2"></i>Games</li>
                <li><i className="fas fa-headphones-alt mx-2"></i>Films and Music</li>
                <li><i className="fas fa-plane-departure mx-2"></i>Sports and Tourism</li>
                <li><i className="fas fa-gift mx-2"></i>Gift Cards</li>
                <li><i className="fas fa-percentage  mx-2"></i><h6 className="my-auto">Sell On Amazon</h6></li>
                <li><i className="far fa-question-circle mx-2"></i><h6 className="my-auto"> Help</h6></li>
                <li className="my-2" ><Link className="linkDecoretionNone" style={isDarkMode ? {'color':'white' } : {'color':'black' }} to={"/Login"}><h5><i className="fas fa-sign-in-alt mx-2"></i>Login</h5></Link></li>
            </ul>
        </div>
    )
}

export default LeftSideBar
