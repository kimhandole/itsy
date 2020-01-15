import {
    RECEIVE_SHOPS,
    RECEIVE_SHOP
} from '../actions/shop_actions';

const shopsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_SHOPS:
            return Object.assign({}, state, action.shops);
            
        case RECEIVE_SHOP:
            const shop = { [action.shop.id]: action.shop };
            return Object.assign({}, state, shop);

        default:
            return state;
    }
};

export default shopsReducer;