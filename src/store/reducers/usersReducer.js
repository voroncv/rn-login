import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

const initialState = {
    loading: false,
    responseText: null
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
                responseText: JSON.stringify(action.payload.data)
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                responseText: JSON.stringify(action.error.request.response) || 'Произошла ошибка'
            };
        default:
            return state;
    }
}

export default usersReducer;