import {
    RECEIVE_SHOPS,
    RECEIVE_SHOP,
    REMOVE_SHOP
} from '../actions/shop_actions';

const shopsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_SHOPS:
            return action.shops;
            
        case RECEIVE_SHOP:
            const shop = { [action.shop.id]: action.shop };
            return Object.assign({}, state, shop);
        
        case REMOVE_SHOP:
            const newObject = Object.assign({}, state);
            delete newObject[action.id];
            return newObject;

        default:
            return state;
    }
};

export default shopsReducer;