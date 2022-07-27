import { combineReducers } from "redux";
import { productsReducer, handdleLike, cartHanddle, changeMode ,User, orders} from "./productReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    likeordislike: handdleLike,
    cartHanddleing: cartHanddle,
    handdleMode: changeMode,
    Orders : orders,
    UserName: User,

});

export default reducers;