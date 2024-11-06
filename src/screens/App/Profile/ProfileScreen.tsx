import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {
  useEffect(() => {
    console.log(console.log(auth().currentUser));
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black'}}>{auth().currentUser?.email}</Text>

      <Text style={{color: 'black'}}>{auth().currentUser?.phoneNumber}</Text>
    </View>
  );
};

export default ProfileScreen;
