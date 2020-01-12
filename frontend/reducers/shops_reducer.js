import {
    RECEIVE_SHOPS,
    RECEIVE_SHOP
} from '../actions/shop_actions';

const shopsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_SHOPS:
            return Object.assign({}, action.shops);
            
        case RECEIVE_SHOP:
            const newShop = { [action.shop.id]: action.shop };
            return Object.assign({}, state, newShop);

        default:
            return state;
    }
};

export default shopsReducer;