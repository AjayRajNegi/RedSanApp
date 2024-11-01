import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {
  useEffect(() => {
    console.log();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black'}}>{auth().currentUser?.email}</Text>
    </View>
  );
};

export default ProfileScreen;
