import { ActionsTypes } from "../constants/action-types";
// import {allprods} from "../../servises/Https"


const initialState = {
    products : [],
};


export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionsTypes.SET_PRODUCTS:
            return {...state,products :payload};
        default:
            return state;
    }
}

// increment decrement likes login will have to write