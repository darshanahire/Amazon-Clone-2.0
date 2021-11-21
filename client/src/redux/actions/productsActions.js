import { ActionsTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionsTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedPeoduct = (product) => {
    return {
        type: ActionsTypes.SELECTED_PRODUCT,
        payload: product,
    };
};