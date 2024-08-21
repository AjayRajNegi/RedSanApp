import React from 'react';
import Icon from '../components/HomeComponents/Icon';
import {iconSize} from '../constants/theme';
import GameScreen from '../screens/GameScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

type Tabs = {
  name: string;
  screen: React.ComponentType<any>;
};
const tabs: Tabs[] = [
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
