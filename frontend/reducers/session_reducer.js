import merge from 'lodash/merge';
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
const _nullUser = Object.freeze({
    currentUser: null
});

const sessionReducer = (state = { currentUser: null }, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const currentUser = action.currentUser.id;
            return merge({}, { currentUser });

        case LOGOUT_CURRENT_USER:
            return _nullUser;

        default:
            return state;

        // case RECEIVE_CURRENT_USER:
        //     return Object.assign({}, {
        //         currentUser: action.currentUser.id
        //     });

        // case LOGOUT_CURRENT_USER:
        //     return Object.assign({}, {
        //         currentUser: null
        //     });

        // default:
        //     return state;
    }
};

export default sessionReducer;
