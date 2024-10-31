import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import {StatusBar} from 'react-native';
import StackNavigator from './StackNavigator';

const Stack = createStackNavigator();

const MainNavigators = () => {
  const isLoggedIn = true;
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
