import { combineReducers } from 'redux';

import users from './users_reducer';
import shops from './shops_reducer';
import products from './products_reducer'
import categories from './categories_reducer';

export default combineReducers({
    users,
    shops,
    products,
    categories
});
