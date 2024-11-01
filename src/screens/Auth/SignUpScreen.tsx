import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUpScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [number, setNumber] = useState('');

  const handleSignUp = async () => {
    try {
      const createdUser = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      await firestore().collection('users').doc(number).set({email: email});
      console.log(createdUser);
      setError('');
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <View>
      <Text style={styles.text}>SignUpScreen</Text>
      <View>
        <TextInput
          value={number}
          placeholder="Number"
          style={styles.text}
          onChangeText={text => setNumber(text)}
        />
        <TextInput
          value={email}
          placeholder="Email"
          style={styles.text}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          secureTextEntry
          value={password}
          placeholder="Password"
          style={styles.text}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity onPress={() => handleSignUp()}>
          <Text style={{color: 'black'}}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NoVerify')}>
          <Text style={{color: 'black'}}>No. Verify</Text>
        </TouchableOpacity>
        <Text style={{color: 'black'}}>{error}</Text>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  text: {color: 'white', backgroundColor: 'black'},
});
