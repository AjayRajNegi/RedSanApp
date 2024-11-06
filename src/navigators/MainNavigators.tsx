import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import TabNavigator from './TabNavigator';
import StackNavigator from './StackNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Stack = createStackNavigator();

const MainNavigators = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  const isVerifiedHandler = async (docId: string): Promise<void> => {
    try {
      const docSnapshot = await firestore()
        .collection('users')
        .doc(docId)
        .get();
      console.log(docSnapshot, 'This is docSnapshot.');
      console.log(docSnapshot.exists);

      if (docSnapshot.exists) {
        const isNumberVerified = docSnapshot.get('isNumberVerified') as
          | boolean
          | null;
        setIsVerified(isNumberVerified ?? false);
      } else {
        console.log('Document does not exist');
        setIsVerified(false);
      }
    } catch (error) {
      console.error('Error fetching document:', error);
      setIsVerified(false);
    }
  };

  useEffect(() => {
    const userEmail = auth().currentUser?.email;
    if (userEmail) {
      isVerifiedHandler(userEmail);
    } else {
      console.log('auth().currentUser?.email Error.');
    }
  }, [auth().currentUser]);

  auth().onAuthStateChanged(user => {
    if (user !== null) {
      setIsLoggedIn(true);
      console.log(user);
    }
  });
  return (
    <NavigationContainer>
      <StatusBar />
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
