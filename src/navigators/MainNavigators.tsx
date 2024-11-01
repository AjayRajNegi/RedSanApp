import React from 'react';
import {StatusBar} from 'react-native';
import TabNavigator from './TabNavigator';
import StackNavigator from './StackNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const MainNavigators = () => {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Screen name="App" component={TabNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={StackNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigators;

{
  /* <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{headerShown: false}}
        /> */
}
