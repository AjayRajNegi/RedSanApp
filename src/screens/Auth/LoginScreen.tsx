import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}: any) => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        const isLoggedIn = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        setError('');
        console.log(isLoggedIn);
        navigation.navigate('SignUp');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Text style={styles.text}>Login Screen</Text>
      <View>
        <TextInput
          value={email}
          placeholder="Email"
          style={styles.text}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          secureTextEntry
          value={password}
          style={styles.text}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity onPress={() => handleLogin()}>
          <Text style={{color: 'black'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: 'black'}}>SignUp</Text>
        </TouchableOpacity>
        <Text>{error}</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  text: {color: 'white', backgroundColor: 'black'},
});
