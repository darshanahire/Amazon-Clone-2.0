import { ActionsTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionsTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionsTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const setlikeProduct = (counts) => {
    return {
        type: ActionsTypes.SET_LIKES,
        payload: counts,
    };
};

export const incressLikeCount = (counts) => {
    return {
        type: ActionsTypes.INCRESS_LIKE,
        payload: counts,
    };
};

export const decressLikeCount = (counts) => {
    return {
        type: ActionsTypes.DECRESS_LIKE,
        payload: counts,
    };
};

export const setCart = (counts) => {
    return {
        type: ActionsTypes.SET_CART,
        payload: counts,
    };
};

export const incressCartCount = (counts) => {
    return {
        type: ActionsTypes.INCRESS_CART,
        payload: counts,
    };
};

export const decressCartCount = (counts) => {
    return {
        type: ActionsTypes.DECRESS_CART,
        payload: counts,
    };
};

export const setMode = (counts) => {
    return {
        type: ActionsTypes.CHANGE_MODE,
        payload: counts,
    };
};