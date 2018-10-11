import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import configureStore from './src/store';

const store = configureStore();

import Login from './src/components/Login';
import Terms from './src/components/Terms';

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 0
        }
    }
}

const RootStack = createStackNavigator({
    Login: { screen: Login },
    Terms: { screen: Terms },
}, {
    initialRouteName: 'Login',
    transitionConfig,
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        );
    }
}