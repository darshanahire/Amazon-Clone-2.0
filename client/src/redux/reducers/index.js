import { combineReducers } from "redux";
import { productsReducer, handdleLike, cartHanddle, changeMode ,User } from "./productReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    likeordislike: handdleLike,
    cartHanddleing: cartHanddle,
    handdleMode: changeMode,
    UserName: User,

});

export default reducers;