import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InitScreen from '../screens/login/InitScreen';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/login/RegisterScreen';

const LoginStack = createStackNavigator();

const LoginNavigation = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LoginStack.Screen name = 'InitScreen' component={ InitScreen } />
      <LoginStack.Screen name = 'RegisterScreen' component={ RegisterScreen } />
      <LoginStack.Screen name = 'LoginScreen' component={ LoginScreen } />
    </LoginStack.Navigator>
  );
};

export default LoginNavigation;

