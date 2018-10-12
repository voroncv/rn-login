import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './types';
import {Alert} from 'react-native';

export function login(data) {
	return {
		type: LOGIN,
		payload: {
      		request: {
        		url: '/login',
        		method: 'post',
                data: {
                	email: data.login,
                	password: data.password
                }
      		}
    	}
	}
};