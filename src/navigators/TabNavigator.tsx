import React from 'react';
import {iconSize} from '../constants/theme';
import Icon from '../components/HomeComponents/Icon';
import GameScreen from '../screens/App/Game/GameScreen';
import HomeScreen from '../screens/App/Home/HomeScreen';
import ProfileScreen from '../screens/App/Profile/ProfileScreen';
import DiscoverScreen from '../screens/App/Discover/DiscoverScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStack/HomeStackNavigator';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from '@react-navigation/native';

type Tabs = {
  name: string;
  screen: React.ComponentType<any>;
};
const tabs: Tabs[] = [
  {name: 'Home', screen: HomeStackNavigator},
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
        screenOptions={({route}) => ({
          tabBarStyle: {display: getTabBarVisibility(route) ? 'flex' : 'none'},
          headerShown: false,
        })}>
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
                      size={iconSize.xl}
                      style={{
                        tintColor: focused ? 'black' : 'gray',
                      }}
                      onPress={() => {}}
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

const getTabBarVisibility = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';
  // Hide tab bar on 'Business' screen
  return routeName !== 'BusinessScreen';
};
