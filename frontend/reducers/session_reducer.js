import merge from 'lodash/merge';
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {currentUser: action.currentUser.id};

        case LOGOUT_CURRENT_USER:
            return {};

        default:
            return state;
    }

    return state;
};

export default sessionReducer;
