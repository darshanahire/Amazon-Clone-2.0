import { ActionsTypes } from "../constants/action-types";
// import {allprods} from "../../servises/Https"


const initialState = {
    products: [],
};

const initialOrders = {
    allorders: [],
};

const initialDelivered = {
    alldelivered: [],
};

const initialLikes = {
    count: 0,
}

const initialCart = {
    products:[],
    productsAllData:[],
    count: 0,
    subtotal:0
}
const initialMode = {
    color:""
}

const username = {
    username:""
}


export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionsTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export const orders = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionsTypes.SET_ORDERS:
            return {...state,allorders: payload };
        default:
            return state;
    }
}

export const delivered = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionsTypes.SET_DELIVERED:
            return {...state,alldelivered: payload };
        default:
            return state;
    }
}
export const handdleLike = (state = initialLikes, { type, payload }) => {
    switch (type) {
        case ActionsTypes.SET_LIKES:
            return { ...state, count: payload };
            break;
        case ActionsTypes.INCRESS_LIKE:
            return { ...state, count: state.count + payload };
            break;
        case ActionsTypes.DECRESS_LIKE:
            return { ...state, count: state.count - payload };
            break;
        default:
            return state;
    }
}

export const cartHanddle = (state = initialCart, { type, payload }) => {
    switch (type) {
        case ActionsTypes.SET_ALL_CART_DATA:
            return { ...state, productsAllData: payload,count: payload.length};
            break;
        case ActionsTypes.SET_CART:
            return { ...state, products: payload , count: payload.length };
            break;
        case ActionsTypes.INCRESS_CART:
            return { ...state, count: state.productsAllData.length };
            break;
        case ActionsTypes.DECRESS_CART:
            return { ...state,count: state.productsAllData.length};
            break;
        case ActionsTypes.SUBTOTAL:
            return { ...state,subtotal: payload};
            break;
        default:
            return state;
    }
}

export const changeMode = (state = initialMode, { type, payload }) => {
    switch (type) {
        case ActionsTypes.CHANGE_MODE:
            return { ...state, color : payload }
        default:
            return state;
    }
}

export const User = (state = username, { type, payload }) => {
    switch (type) {
        case ActionsTypes.USER:
            return { ...state, username : payload }
        default:
            return state;
    }
}

// increment decrement likes login will have to write