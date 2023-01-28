import {createStore, combineReducers} from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const store = createStore(combineReducers({
    product: productReducer,
    cart: cartReducer
}));

export default store;