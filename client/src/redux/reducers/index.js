import { combineReducers } from "redux";
import { productsReducer, handdleLike, cartHanddle, changeMode ,User, orders,delivered} from "./productReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    likeordislike: handdleLike,
    cartHanddleing: cartHanddle,
    handdleMode: changeMode,
    Orders : orders,
    Delivered : delivered,
    UserName: User,

});

export default reducers;