import * as APIUtil from '../util/shop_api_util';

export const RECEIVE_SHOPS = 'RECEIVE_SHOPS';
export const RECEIVE_SHOPS_ERRORS = 'RECEIVE_SHOPS_ERRORS';
export const RECEIVE_SHOP = 'RECEIVE_SHOP';

export const receiveShops = shops => ({
    type: RECEIVE_SHOPS,
    shops,
});

export const receiveShop = ({ shop, owner }) => ({
    type: RECEIVE_SHOP,
    shop,
    owner,
});

export const receiveShopsErrors = errors => ({
    type: RECEIVE_SHOPS_ERRORS,
    errors
});

export const fetchShops = () => dispatch => (
    APIUtil.fetchShops().then(shops => (
        dispatch(receiveShops(shops))
    ))
);

export const fetchShop = id => dispatch => (
    APIUtil.fetchShop(id).then(payload => (
        dispatch(receiveShop(payload))
    ))
);

export const createShop = shop => dispatch => (
    ApiUtil.createShop(shop).then(
        shop => (
            dispatch(receiveShop(shop))
        ), err => (
            dispatch(receiveShopsErrors(err.responseJSON))
        )
    )
);

export const updateShop = (data, id) => dispatch => (
    ApiUtil.updateShop(data, id).then(
        shop => (
            dispatch(receiveShop(shop))
        ), err => (
            dispatch(receiveShopsErrors(err.responseJSON))
        )
    )
);