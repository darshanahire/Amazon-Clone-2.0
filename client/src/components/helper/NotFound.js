import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function NotFound() {
    let dogsImg=['img/dog1.png','img/dog2.png','img/dog3.png'];
    let [idx,setidx]=useState(Math.floor(Math.random() * 3))
    return (
        <div className="d-flex justify-content-center align-items-center flex-column text-start" style={{"height":"100vh"}}>
            <div >
            <h1 className="font-weight-light" style={{"fontWeight":400}}>SORRY...!!!</h1>
            <h4 style={{"fontWeight":400}}>Something Went Wrong</h4>
            <h6 style={{"fontWeight":400}}>Try Searching or go to <Link className="color-cyne Link" to={'/'}> Amazon's home page</Link></h6>
            </div>
            <img className="my-3" src={dogsImg[idx]} alt="NotFound"  width="400"/>
        </div>
    )
}

export default NotFound
