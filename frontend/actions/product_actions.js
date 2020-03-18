import * as APIUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS_BY_CATEGORY = 'RECEIVE_PRODUCTS_BY_CATEGORY';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RECEIVE_PRODUCTS_ERRORS = 'RECEIVE_PRODUCTS_ERRORS';


export const receiveAllProducts = products => {
    return {
        type: RECEIVE_ALL_PRODUCTS,
        products
    }
}

export const receiveProducts = products => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}

export const receiveProduct = product => {
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

export const receiveProductsByCategory = products => {
    return {
        type: RECEIVE_PRODUCTS_BY_CATEGORY,
        products
    }
}

export const removeProduct = id => {
    return {
        type: REMOVE_PRODUCT,
        id
    }
}

export const receiveProductsErrors = errors => {
    return {
        type: RECEIVE_PRODUCTS_ERRORS,
        errors
    }
}

export const fetchAllProducts = () => dispatch => (
    APIUtil.fetchAllProducts().then(products => (
        dispatch(receiveAllProducts(products))
    ))
);

export const fetchProducts = shop_id => dispatch => (
    APIUtil.fetchProducts(shop_id).then(products => (
        dispatch(receiveProducts(products))
    ))
);

export const fetchProduct = id => dispatch => (
    APIUtil.fetchProduct(id).then(product => (
        dispatch(receiveProduct(product))
    ))
);

export const fetchProductsByCategory = category_id => dispatch => (
    APIUtil.fetchProductsByCategory(category_id).then(products => (
        dispatch(receiveProducts(products))
    ))
);

export const createProduct = product => dispatch => (
    APIUtil.createProduct(product).then(
        product => (
            dispatch(receiveProduct(product))
        ), err => (
            dispatch(receiveProductsErrors(err.responseJSON))
        )
    )
);

export const fetchSearchProducts = query => dispatch => (
    APIUtil.fetchSearchProducts(query)
        .then(products => dispatch(receiveProducts(products)),
        )
)