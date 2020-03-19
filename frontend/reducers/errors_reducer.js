import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import shoppingCartItem from './shopping_cart_item_errors_reducer';


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    shoppingCartItem
});

export default errorsReducer;