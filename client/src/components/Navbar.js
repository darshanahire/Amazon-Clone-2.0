import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router';
import { setlikeProduct, setCart, setProducts, setMode,UserName } from "../redux/actions/productsActions"
import Https from '../servises/Https';

import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Grow from '@material-ui/core/Grow';

function Navbar() {
    
    const StoreLikeCount = useSelector((state) => state.likeordislike.count);
    const StoreCartCount = useSelector((state) => state.cartHanddleing.count);
    const isDarkMode = useSelector((state) => state.handdleMode.color);
    const USER = useSelector((state) => state.UserName.username);


    const dispatch = useDispatch()
    let history=useHistory()

    let user = localStorage.getItem("user");

    const [DarkMode, setDarkMode] = useState();
    const [prodss, setprodss] = useState([]);
    const [likeCount, setlikeCount] = useState();
    const [cartCount, setcartCount] = useState();
    const [open, setOpen] = useState(false);



    const anchorRef = useRef(null);
    const prevOpen = useRef(open);

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

    function logout(){
        Https.logout();
        history.push("/login")
    }

    function filteredProducts(input) {

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
        dispatch(setProducts(filteredProds));
    }

    useEffect(() => {
        let mode = JSON.parse(localStorage.getItem("DarkMode"));
        setDarkMode(mode);
        dispatch(UserName(user));

        if (user !== null) {
            Https.getUser(user).then((res) => {
                let initialLikesCount = res.data.liked.length;
                setlikeCount(initialLikesCount);
                dispatch(setlikeProduct(initialLikesCount));
                setcartCount(res.data.cartdata.length)
                dispatch(setCart(res.data.cartdata));
            })

            Https.getAllProducts().then((res) => {
                setprodss(res.data)
                dispatch(setProducts(res.data))
            })

        }

        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [setDarkMode, open])
    dispatch(setMode(DarkMode));

    
    const muibtn = [isDarkMode ? "mui-white" : "mui-dark"];


    return (
        <>
            <div>
                <nav className={DarkMode ? 'navbar2 fixed-top darkMode' : 'navbar2 fixed-top lightMode'} >

                    <Link className="main_logo" to={"/"} ><img src={DarkMode ? "img/logoWhite.png" : "img/logoBlack.png"} alt="amazon" /></Link>
                    <form className="search_form justify-content-center">
                        <input className="inputSearch" type="search" placeholder="Search" aria-label="Search"
                            onChange={(e) => { filteredProducts(e.target.value) }} />
                        <button className="btnOrange my-0 searchBtn" type="button"><SearchIcon /></button>
                    </form>
                    <ul className="nav_list" id="navbar_ul">
                        <li className="nav-item" >
                            <Link className={"nav-link linkDecoretionNone cursor " + muibtn[0]} to={'/orders'}>
                                <IconButton aria-label=" new notifications" color="inherit" >
                                    <LocalMallOutlinedIcon />
                                </IconButton>
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <a className={"nav-link " + muibtn[0]} aria-current="page" href="#" >
                                <IconButton aria-label=" new notifications" color="inherit" >
                                    <Badge badgeContent={StoreLikeCount} color="secondary">
                                        <FavoriteBorderOutlinedIcon />
                                    </Badge>
                                </IconButton>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link linkDecoretionNone cursor " + muibtn[0]} to={'/cartCom'}>
                                <IconButton aria-label=" new notifications" color="inherit">
                                    <Badge badgeContent={StoreCartCount} color="secondary">
                                        <ShoppingCartOutlinedIcon />
                                    </Badge>
                                </IconButton>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className={"nav-link linkDecoretionNone cursor " + muibtn[0]} href="#">
                                <IconButton aria-label=" new notifications" color="inherit">
                                    <Badge badgeContent={0} color="secondary">
                                        <NotificationsNoneSharpIcon />
                                    </Badge>
                                </IconButton>
                            </a>
                        </li>
                        <li className="nav-item ">

                            <Link className={"nav-link linkDecoretionNone cursor " + muibtn[0]} to="#">
                                <IconButton aria-label=" new notifications" color="inherit" ref={anchorRef}
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
                                                            {(USER === null) ?
                                                                <Link className="linkDecoretionNone" to={"/Login"}><MenuItem onClick={handleClose}>Login</MenuItem> </Link> :
                                                                <>
                                                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                                                    <MenuItem onClick={handleClose, logout }>Logout</MenuItem>
                                                                </>
                                                            }
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </IconButton>

                            </Link>
                        </li>
                        <li className="nav-item" onClick={() => {
                            setDarkMode(!DarkMode);
                            localStorage.setItem("DarkMode", !DarkMode);
                        }} >
                            <p className={"nav-link " + muibtn[0]} aria-current="page"  >
                                <IconButton aria-label=" new notifications" color="inherit">
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



