import React from 'react'
import { BrowserRouter as Router,Route, Link, Switch, } from 'react-router-dom'
import "../App.css"

function LeftSideBar() {
    return (
        <div className="LeftSideBar">
            <ul>
                <li>Categories</li>
                <li>Echo and Alexa</li>
                <li>Kindle</li>
                <li>Electronics</li>
                <li>Fashion</li>
                <li>Health and Beauty</li>
                <li>Home and Garden</li>
                <li>Games</li>
                <li>Films and Music</li>
                <li>Sports and Tourism</li>
                <li>Gift Cards</li>
                <li><h6>Sell On Amazon</h6></li>
                <li><h6>Help</h6></li>
                <li><Link className="linkDecoretionNone" to={"/Login"}><h5>Login In</h5></Link></li>
            </ul>
        </div>
    )
}

export default LeftSideBar
