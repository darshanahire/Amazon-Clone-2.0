import { combineReducers } from "redux";
import { productsReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
});

export default reducers;