import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

const initialState = {
    loading: false,
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}

export default usersReducer;