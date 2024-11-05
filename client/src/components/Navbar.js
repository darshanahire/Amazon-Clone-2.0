import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setlikeProduct, setCart, setProducts, setMode, UserName, setAllDataToCart, setOrders, setDelivered, infiniteScroll } from '../redux/actions/productsActions';
import Https from '../servises/Https';
import Debounce from '../servises/Debounce';

import {
    NotificationsNoneSharp as NotificationsIcon,
    FavoriteBorderOutlined as FavoriteIcon,
    ShoppingCartOutlined as CartIcon,
    LocalMallOutlined as OrdersIcon,
    ExitToApp as LogoutIcon,
    AccountCircle as AccountIcon,
    Brightness4 as DarkModeIcon,
    Search as SearchIcon
} from '@material-ui/icons';
import ClearIcon from '@material-ui/icons/Clear';
import {
    IconButton,
    Badge,
    ClickAwayListener,
    Popper,
    Paper,
    MenuList,
    MenuItem,
    Grow,
} from '@material-ui/core';

function Navbar() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [DarkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem("DarkMode")));
    const [open, setOpen] = useState(false);
    const [searchInput, setSearchInput] = useState();
    const [isSearchBtn, setIsSearchBtn] = useState(true);
    const anchorRef = useRef(null);
    const searchInputRef = useRef(null);

    const likeCount = useSelector((state) => state.likeordislike.count);
    const cartCount = useSelector((state) => state.cartHanddleing.count);
    const isDarkMode = useSelector((state) => state.handdleMode.color);
    const USER = useSelector((state) => state.UserName.username);

    // Toggle dropdown menu
    const handleToggle = () => setOpen((prevOpen) => !prevOpen);

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) return;
        setOpen(false);
    };

    // Logout logic
    const logout = () => {
        Https.logout();
        history.push('/login');
        dispatch(setlikeProduct(0));
        dispatch(setAllDataToCart([]));
        dispatch(setOrders(undefined));
        dispatch(setDelivered(undefined));
    };


    const getAllProducts = () =>{
        setIsSearchBtn(true);
        dispatch(infiniteScroll(true));
        setSearchInput("")
        searchInputRef.current.value = "";
        Https.getAllProducts().then((res) => {
        dispatch(setProducts(res.data));
    });
    }
    // Filter products
    const filteredProducts = () => {
        let query = searchInput; 
        //console.log(searchInput);
        if(query){
            setIsSearchBtn(false);
            dispatch(infiniteScroll(false));
            Https.searchProducts(query).then((res)=>{
                //console.log(res.data);
                dispatch(setProducts(res.data));
            }).catch((err)=>{
                console.log(err);
                dispatch(setProducts([]));
            })
        }
        // Https.getAllProducts().then((res) => {
        //     const filteredProds = res.data.filter((item) => {
        //         const lowerInput = input.toLowerCase();
        //         return (
        //             item.prodName.toLowerCase().includes(lowerInput) ||
        //             item.prodBrand.toLowerCase().includes(lowerInput) ||
        //             item.highPrice.toString().toLowerCase().includes(lowerInput) ||
        //             item.lowPrice.toString().toLowerCase().includes(lowerInput)
        //         );
        //     });
        //     (setProducts(filteredProds));
        // });
    };

    // Initial data fetching and mode setup
    useEffect(() => {
        const user = localStorage.getItem('user');
        dispatch(UserName(user));

        if (user) {
            Https.getUser(user).then((res) => {
                const { liked, cartdata, orders, deliveredItems } = res.data;
                dispatch(setlikeProduct(liked.length));
                dispatch(setAllDataToCart(cartdata));
                dispatch(setOrders(orders));
                dispatch(setDelivered(deliveredItems));
            });
        }

        dispatch(setMode(DarkMode));
    }, [dispatch, DarkMode]);

    const muiClass = isDarkMode ? 'mui-white' : 'mui-dark';

    return (
        <nav className={DarkMode ? 'navbar2 fixed-top darkMode' : 'navbar2 fixed-top lightMode'}>
            <Link className="main_logo" to="/">
                <img src={DarkMode ? '/img/logoWhite.png' : '/img/logoBlack.png'} alt="Logo" />
            </Link>
            
            {/* Search Bar */}
            <form className="search_form justify-content-center">
                <input
                    className="inputSearch"
                    type="search"
                    placeholder="Search Items"
                    aria-label="Search"
                    ref={searchInputRef}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                {isSearchBtn ?
                <button className="btnOrange my-0 searchBtn" type="button" onClick={Debounce(filteredProducts,500)}>
                    <SearchIcon />
                </button> :
                                <button className="btnRed my-0 searchBtn" type="button" onClick={Debounce(getAllProducts,500)}>
                                <ClearIcon />
                            </button> 
                }
            </form>

            {/* Navigation Icons */}
            <ul className="nav_list" id="navbar_ul">
                <NavItem to="/orders" icon={<OrdersIcon />} />
                <NavItem icon={<FavoriteIcon />} badgeCount={likeCount} />
                <NavItem to="/cartCom" icon={<CartIcon />} badgeCount={cartCount} />
                <NavItem to="/Notifications" icon={<NotificationsIcon />} badgeCount={0} />

                {/* User Profile & Dropdown */}
                <li className="nav-item">
                    <IconButton
                        aria-label="account"
                        color="inherit"
                        ref={anchorRef}
                        onClick={handleToggle}
                    >
                        <AccountIcon />
                    </IconButton>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: 'center top' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open}>
                                            {!USER ? (
                                                <MenuItemLink to="/Login" icon={<LogoutIcon />} text="Sign In" />
                                            ) : (
                                                <>
                                                    <MenuItem icon={<AccountIcon />} text="Profile" />
                                                    <MenuItemLink to="/cartCom" icon={<CartIcon />} text="My Cart" />
                                                    <MenuItemLink to="/Notifications" icon={<NotificationsIcon />} text="Notifications" />
                                                    <MenuItem icon={<LogoutIcon />} text="Logout" onClick={logout} />
                                                </>
                                            )}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </li>

                {/* Dark Mode Toggle */}
                <li className="nav-item">
                    <IconButton
                        aria-label="dark mode toggle"
                        color="inherit"
                        onClick={() => {
                            setDarkMode((prevMode) => !prevMode);
                            localStorage.setItem('DarkMode', !DarkMode);
                        }}
                    >
                        <DarkModeIcon />
                    </IconButton>
                </li>
            </ul>
        </nav>
    );
}

// Navigation Item Component
const NavItem = ({ to = '#', icon, badgeCount }) => (
    <li className="nav-item">
        <Link className="nav-link linkDecoretionNone cursor" to={to}>
            <IconButton aria-label="nav-icon" color="inherit">
                <Badge badgeContent={badgeCount || 0} color="error">
                    {icon}
                </Badge>
            </IconButton>
        </Link>
    </li>
);

// Menu Item with Link Component
const MenuItemLink = ({ to, icon, text, onClick }) => (
    <Link className="linkDecoretionNone" to={to} onClick={onClick}>
        <MenuItem>
            {icon} <span className="mx-2">{text}</span>
        </MenuItem>
    </Link>
);

export default Navbar;
