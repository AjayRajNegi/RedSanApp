import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import GameScreen from '../screens/GameScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from '../components/Icon';

const tabs = [
  {name: 'Home', screen: HomeScreen},
  {name: 'Search', screen: DiscoverScreen},
  {name: 'Favorite', screen: GameScreen},
  {name: 'User', screen: ProfileScreen},
];

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        {tabs.map(({name, screen}, index) => {
          return (
            <Tab.Screen
              key={index}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <Icon
                      icon={name}
                      size={40}
                      style={{
                        tintColor: focused ? 'black' : 'gray',
                      }}
                    />
                  );
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
