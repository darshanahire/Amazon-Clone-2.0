import { combineReducers } from "redux";
import { productsReducer, handdleLike,cartHanddle } from "./productReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    likeordislike: handdleLike,
    cartHanddleing : cartHanddle

});

export default reducers;