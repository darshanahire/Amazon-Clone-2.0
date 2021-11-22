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

export const likeProduct = (product) => {
    return {
        type: ActionsTypes.INCRESS_LIKE,
        payload: product,
    };
};