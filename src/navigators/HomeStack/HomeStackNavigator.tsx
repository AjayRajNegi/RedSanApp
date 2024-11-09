import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/App/Home/HomeScreen';
import BusinessScreen from '../../screens/App/Home/BusinessScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BusinessScreen" component={BusinessScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
