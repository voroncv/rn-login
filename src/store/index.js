import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
    baseURL: 'https://reqres.in/api',
    responseType: 'json'
});

import placeReducer from './reducers/placeReducer';

const rootReducer = combineReducers({
    places: placeReducer
});

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(
        axiosMiddleware(client),
    ));
}

export default configureStore;