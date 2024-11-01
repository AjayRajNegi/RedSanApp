import React from 'react';
import {StatusBar} from 'react-native';
<<<<<<< HEAD
import TabNavigator from './TabNavigator';
import StackNavigator from './StackNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
=======
import StackNavigator from './StackNavigator';
>>>>>>> 3e9cfdc2814947a855c65f58deac5841b875d7de

const Stack = createStackNavigator();

const MainNavigators = () => {
<<<<<<< HEAD
  const isLoggedIn = false;
=======
  const isLoggedIn = true;
>>>>>>> 3e9cfdc2814947a855c65f58deac5841b875d7de
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
