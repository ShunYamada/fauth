import React from 'react';
import { StackNavigator } from 'react-navigation';
import { SignInScreen, HomeScreen } from './screens';

const Router = StackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      title: 'SignIn',
    }
  },
  Main: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
    }
  },
}, {
    initialRouteName: 'SignIn'
});

export default Router;
