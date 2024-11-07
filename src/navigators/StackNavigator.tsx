import React, {useEffect, useState} from 'react';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import NumberVerify from '../screens/Auth/NumberVerify';
import HomeScreen from '../screens/App/Home/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

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
  });

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
          <Stack.Screen name="Home" component={HomeScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
