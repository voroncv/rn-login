const initialState = {
    placeName: '',
    test: '12313',
    places: []
};

const placeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
        return {
            ...state,
            test: action.payload
        };
        default:
        return state;
    }
}

export default placeReducer;