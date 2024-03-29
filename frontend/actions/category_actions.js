import * as APIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
});

export const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
});

export const fetchCategory = id => dispatch => (
    APIUtil.fetchCategory(id).then(response => (
        dispatch(receiveCategory(response))
    ))
);

export const fetchCategories = () => dispatch => (
    APIUtil.fetchCategories().then(response => (
        dispatch(receiveCategories(response))
    ))
);