import auth from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import NumberVerify from '../screens/Auth/NumberVerify';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStackNavigator from './HomeStack/HomeStackNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (auth().currentUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    console.log('Stack Navigator');
  }, [auth().currentUser]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isLoggedIn ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="NoVerify" component={NumberVerify} />
          <Stack.Screen name="Home" component={HomeStackNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
