import {View, Text, Button} from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="Move to signup screen"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default LoginScreen;
