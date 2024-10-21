import { combineReducers } from "redux";
import { productsReducer, handdleLike, cartHanddle, changeMode ,User, orders,delivered,switchInfiniteScroll} from "./productReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    likeordislike: handdleLike,
    cartHanddleing: cartHanddle,
    handdleMode: changeMode,
    Orders : orders,
    Delivered : delivered,
    UserName: User,
    infiniteScroll: switchInfiniteScroll
});

export default reducers;