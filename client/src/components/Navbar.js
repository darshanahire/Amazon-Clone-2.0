import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setlikeProduct, setCart, setProducts, setMode } from "../redux/actions/productsActions"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import "../index.css"
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import SearchIcon from '@material-ui/icons/Search';
import Https from '../servises/Https';


import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));




function Navbar() {
    const [like, disLike] = useState("png/dislike.png")
    const [toggle, setToggle] = useState(false)
    const [likeCount, setLikeCount] = useState()
    const [cartnotification, setcartNotification] = useState()
    const [DarkMode, setDarkMode] = useState();
    let user = localStorage.getItem("user");
    let [color, setColor] = useState("rgb(50 50 50)")

    let [prodss, setprodss] = useState([]);

    const dispatch = useDispatch()
    let history=useHistory()


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


const Logout =()=>{
    localStorage.clear();
    history.push("/login")
}


    function filteredCompanies(input) {

        let filteredProds = prodss;
        filteredProds = input.toLowerCase()
            ? filteredProds.filter(
                item =>
                    item.prodName.toLowerCase().includes(input) ||
                    item.prodBrand.toLowerCase().includes(input) ||
                    item.highPrice.toLowerCase().includes(input) ||
                    item.lowPrice.toLowerCase().includes(input)
            )
            : filteredProds;
        //   console.log(filteredProds);

        dispatch(setProducts(filteredProds));
    }







    useEffect(() => {
        let mode = JSON.parse(localStorage.getItem("DarkMode"));
        setDarkMode(mode);
        if (user !== null) {
            Https.getUser(user).then((res) => {
                let initialLikesCount = res.data.liked.length;
                let initialCartItemsCount = res.data.cartdata.length;
                setLikeCount(initialLikesCount);
                dispatch(setlikeProduct(initialLikesCount));
                dispatch(setCart(res.data.cartdata));
                setcartNotification(initialCartItemsCount);
            })

            Https.getAllProducts().then((res) => {
                setprodss(res.data)
                dispatch(setProducts(res.data))
            })

        }
    }, [setDarkMode])
    dispatch(setMode(DarkMode));

    const StoreLikeCount = useSelector((state) => state.likeordislike.count)
    const StoreCartCount = useSelector((state) => state.cartHanddleing.count)
    return (
        <>
            <div>
                <nav className="navbar2 fixed-top" style={DarkMode ? { 'backgroundColor': color, "border": color } : { 'backgroundColor': 'white' }}>

                    <Link className="main_logo" to={"/"} ><img src={DarkMode ? "img/logoWhite.png" : "img/logoBlack.png"} alt="amazon" /></Link>
                    <form className="search_form" style={{ 'justifyContent': 'center' }}>
                        <input className="inputSearch" type="search" placeholder="Search" aria-label="Search" style={{ "width": "275px" }}
                            onChange={(e) => { filteredCompanies(e.target.value) }} />
                        <button className="btnOrange my-0 searchBtn" type="button"><SearchIcon /></button>
                    </form>
                    <ul className="nav_list" id="navbar_ul">
                        <li className="nav-item" >
                            <Link className="nav-link linkDecoretionNone cursor" to={'/orders'}>
                                <IconButton aria-label=" new notifications" color="inherit" style={DarkMode ? { "color": 'white' } : { "color": 'Black' }}>
                                    <LocalMallOutlinedIcon />
                                </IconButton>
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link" aria-current="page" href="#" >
                                <IconButton aria-label=" new notifications" color="inherit" style={DarkMode ? { "color": 'white' } : { "color": 'Black' }}>
                                    <Badge badgeContent={StoreLikeCount} color="secondary">
                                        <FavoriteBorderOutlinedIcon />
                                    </Badge>
                                </IconButton>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link linkDecoretionNone cursor" to={'/cartCom'}>
                                <IconButton aria-label=" new notifications" color="inherit" style={DarkMode ? { "color": 'white' } : { "color": 'Black' }}>

                                    <Badge badgeContent={StoreCartCount} color="secondary">
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

                            <Link className="nav-link linkDecoretionNone" to="/">
                                <IconButton aria-label=" new notifications" color="inherit" style={DarkMode ? { "color": 'white' } : { "color": 'Black' }} ref={anchorRef}
                                    aria-controls={open ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle}>
                                    <AccountCircleIcon />
                                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                        {({ TransitionProps, placement }) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                            >
                                                <Paper>
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                        {(localStorage.getItem("user")) === null?
                                                        <Link className="linkDecoretionNone" to={"/Login"}><MenuItem onClick={handleClose}>Login</MenuItem> </Link>:
                                                        <>
                                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                                            <MenuItem onClick={handleClose,Logout}>Logout</MenuItem>
                                                            </>
                                                    }
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </IconButton>

                                {/* {
                                    (localStorage.getItem("user")) === null ? null : <span className="d-none" style={DarkMode ? { "color": 'white' } : { "color": 'Black' }}>Hi , {localStorage.getItem("user")}</span>
                                } */}

                            </Link>
                            {/* <Link className="nav-link linkDecoretionNone" to={'/Login'}><img className="nav-png" src="png/user.png" alt="" id="user_photo" />
                            </Link> */}
                        </li>
                        <li className="nav-item" onClick={() => { setDarkMode(!DarkMode); localStorage.setItem("DarkMode", !DarkMode) }} >
                            <p className="nav-link" aria-current="page"  >
                                <IconButton aria-label=" new notifications" color="inherit" style={DarkMode ? { "color": 'white' } : { "color": 'Black' }}>
                                    <Badge badgeContent={0} color="secondary">
                                        <Brightness4Icon />
                                    </Badge>
                                </IconButton>
                            </p>
                        </li>

                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar



