import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../index.css"
// import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import LocalMallOutlinedIcon  from '@material-ui/icons/LocalMallOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Brightness4Icon from '@material-ui/icons/Brightness4';
function Navbar() {
    const [like, disLike] = useState("png/dislike.png")
    const [toggle, setToggle] = useState(false)
    const [notification, setNotification] = useState()
    const [cartnotification, setcartNotification] = useState()
    const [DarkMode, setDarkMode] = useState();
    let user = localStorage.getItem("user");
    let [color, setColor] = useState("#0C0404")
    if (user !== null) {
        axios.post('/getuser', { user }).then(async (d) => {
            setNotification(d.data.liked.length);
            setcartNotification(d.data.cartdata.length);

        })
    }
    useEffect(() => {
        let mode = JSON.parse(localStorage.getItem("DarkMode"));
        setDarkMode(mode);
    }, [setDarkMode])

    return (
        <>
            <div>
                <nav className="navbar2 fixed-top" style={DarkMode ? { 'background-color': color } : { 'background-color': 'white' }}>

                    <Link className="main_logo" to={"/"} ><img src={DarkMode ? "img/logoWhite.png" : "img/logoBlack.png"} alt="amazon" /></Link>
                    <form className="search_form" style={{ 'justify-content': 'center' }}>
                        <input className="inputSearch" type="search" placeholder="Search" aria-label="Search" style={{ "width": "275px" }} />
                        <button className="btnOrange my-0" type="submit"><img className="searchBtn" src="png/search.png" alt="" /></button>
                    </form>
                    <ul className="nav_list" id="navbar_ul">
                        <li className="nav-item" >
                        <Link className="nav-link linkDecoretionNone cursor" to={'/orders'}>
                                <IconButton aria-label=" new notifications" color="inherit" style={DarkMode ? { "color": 'white' } : { "color": 'Black' }}>
                                    {/* <p className="h6">Orders</p> */}
                                    <LocalMallOutlinedIcon />
                                </IconButton>
                        </Link>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link" aria-current="page" href="#" >
                                <IconButton aria-label=" new notifications" color="inherit" style={DarkMode ? { "color": 'white' } : { "color": 'Black' }}>
                                    <Badge badgeContent={notification} color="secondary">
                                        <FavoriteBorderOutlinedIcon />
                                    </Badge>
                                </IconButton>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link linkDecoretionNone cursor" to={'/cartCom'}>
                                <IconButton aria-label=" new notifications" color="inherit" style={DarkMode ? { "color": 'white' } : { "color": 'Black' }}>

                                    <Badge badgeContent={cartnotification} color="secondary">
                                        <ShoppingCartOutlinedIcon />
                                    </Badge>
                                </IconButton>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkDecoretionNone" href="#">
                                <IconButton aria-label=" new notifications" color="inherit" style={DarkMode ? { "color": 'white' } : { "color": 'Black' }}>
                                    <Badge badgeContent={0} color="secondary">
                                        <NotificationsNoneSharpIcon />
                                    </Badge>
                                </IconButton>
                            </a>
                        </li>
                        <li className="nav-item ">

                            <Link className="nav-link linkDecoretionNone">
                                <IconButton aria-label=" new notifications" color="inherit" style={DarkMode ? { "color": 'white' } : { "color": 'Black' }}>
                                    <AccountCircleOutlinedIcon />

                                </IconButton>

                                {
                                    (localStorage.getItem("user")) === null ? null : <span style={DarkMode ? { "color": 'white' } : { "color": 'Black' }}>Hi , {localStorage.getItem("user")}</span>
                                }

                            </Link>
                            {/* <Link className="nav-link linkDecoretionNone" to={'/Login'}><img className="nav-png" src="png/user.png" alt="" id="user_photo" />
                            </Link> */}
                        </li>
                        <li className="nav-item" onClick={() => { setDarkMode(!DarkMode); localStorage.setItem("DarkMode", !DarkMode) }} >
                            <a className="nav-link" aria-current="page" href="#" >
                                <IconButton aria-label=" new notifications" color="inherit" style={DarkMode ? { "color": 'white' } : { "color": 'Black' }}>
                                    <Badge badgeContent={0} color="secondary">
                                        <Brightness4Icon />
                                    </Badge>
                                </IconButton>
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar



