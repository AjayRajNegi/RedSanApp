import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import TabNavigator from './TabNavigator';
import StackNavigator from './StackNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const MainNavigators = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  auth().onAuthStateChanged(user => {
    if (user !== null) {
      setIsLoggedIn(true);
      console.log(user);
    }
  });
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn && isVerified ? (
          <Stack.Screen name="App" component={TabNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={StackNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigators;
