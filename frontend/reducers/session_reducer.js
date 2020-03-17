import merge from 'lodash/merge';
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
// const _nullUser = Object.freeze({
//     currentUser: null
// });

const sessionReducer = (state = {}, action) => {
    Object.freeze(state);
    // if (action.type === undefined) {
    //     return state;
    // }

    switch (action.type) {

        case RECEIVE_CURRENT_USER:
            console.log(action, "@@@")
            // const currentUser = action.currentUser.id;
            // return merge({}, { currentUser });
            return {currentUser: action.currentUser.id};
            // return state

        case LOGOUT_CURRENT_USER:
            return {};

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

    return state;
};

export default sessionReducer;
