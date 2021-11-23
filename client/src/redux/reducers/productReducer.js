import { ActionsTypes } from "../constants/action-types";
// import {allprods} from "../../servises/Https"


const initialState = {
    products: [],
};

const initialLikes = {
    count: 0,
}

const initialCart = {
    products:[],
    count: 0,
}


export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionsTypes.SET_PRODUCTS:
            return { ...state, products: payload };
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
        case ActionsTypes.SET_CART:
            return { ...state, products: payload , count: payload.length };
            break;
        case ActionsTypes.INCRESS_CART:
            return { ...state, count: state.count + payload };
            break;
        case ActionsTypes.DECRESS_CART:
            return { ...state,count: state.count - payload};
            break;
        default:
            return state;
    }
}

// increment decrement likes login will have to write