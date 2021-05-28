import {
    LOGIN,
    LOGOUT,
    SET_USER_DATA,
} from './auth.types';

const authReducer = (state, action) => {
    switch( action.type ) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                userData: null,
            };
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.payload,
            }
        default:
            return state;
    }
}

export default authReducer;