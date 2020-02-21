import * as APIUtil from '../util/shop_api_util';

export const RECEIVE_SHOPS = 'RECEIVE_SHOPS';
export const RECEIVE_SHOPS_ERRORS = 'RECEIVE_SHOPS_ERRORS';
export const RECEIVE_SHOP = 'RECEIVE_SHOP';

export const REMOVE_SHOP = 'REMOVE_SHOP';


export const receiveShops = shops => ({
    type: RECEIVE_SHOPS,
    shops,
});

export const receiveShop = ({ shop }) => ({
    type: RECEIVE_SHOP,
    shop
    // owner,
});

export const receiveShopsErrors = errors => ({
    type: RECEIVE_SHOPS_ERRORS,
    errors
});

export const removeShop = id => {
    return {
        type: REMOVE_SHOP,
        id
    }
}

export const fetchShops = (owner_id) => dispatch => (
    APIUtil.fetchShops(owner_id).then(shops => (
        dispatch(receiveShops(shops))
    ))
);

export const fetchShop = id => dispatch => (
    APIUtil.fetchShop(id).then(payload => (
        dispatch(receiveShop(payload))
    ))
);

export const createShop = shop => dispatch => (
    APIUtil.createShop(shop).then(
        shop => (
            dispatch(receiveShop(shop))
        ), err => (
            dispatch(receiveShopsErrors(err.responseJSON))
        )
    )
);

export const updateShop = (data, id) => dispatch => (
    APIUtil.updateShop(data, id).then(
        shop => (
            dispatch(receiveShop(shop))
        ), err => (
            dispatch(receiveShopsErrors(err.responseJSON))
        )
    )
);

export const deleteShop = id => dispatch => (
    APIUtil.deleteShop(id).then(
        response => (
            dispatch(removeShop(id))
        )
    )
);