import { combineReducers } from "redux";
import { productsReducer, handdleLike, cartHanddle, changeMode } from "./productReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    likeordislike: handdleLike,
    cartHanddleing: cartHanddle,
    handdleMode: changeMode

});

export default reducers;