import {
    SET_TARGET_PATH,
} from './router.types';

const RouterReducer = (state, action) => {
    switch( action.type ) {
        case SET_TARGET_PATH:
            return {
                ...state,
                targetPath: action.targetPath,
            };
        default:
            return state;
    }
}

export default RouterReducer;