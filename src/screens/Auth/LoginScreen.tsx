import React, {useState} from 'react';
import Icons from '../../constants/Icons';
import auth from '@react-native-firebase/auth';
import {TextInput} from 'react-native-gesture-handler';
import {fontSize, spacing} from '../../constants/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Image source={Icons.RedSanLogin} style={styles.RedSanLogin} />
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.logInTextContainer}>
            <Text style={styles.loginText}>‹—Log Back In—›</Text>
          </View>
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
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text>—Sign up with—</Text>
          <View style={styles.loginOptions}>
            <TouchableOpacity>
              <Text>FACEBOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>GOOGLE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: spacing.md,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  topContainer: {
    marginHorizontal: 'auto',
    marginTop: 50,
  },
  welcomeText: {
    fontSize: fontSize.xxl + 15,
    color: 'black',
    marginBottom: 25,
  },
  RedSanLogin: {
    marginHorizontal: 'auto',
  },
  middleContainer: {
    marginHorizontal: 'auto',
  },
  logInTextContainer: {
    marginHorizontal: 'auto',
  },
  loginText: {
    color: 'black',
    fontSize: fontSize.xl,
  },
  bottomContainer: {
    marginHorizontal: 'auto',
  },
  loginOptions: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  text: {
    color: 'white',
    backgroundColor: 'black',
    width: 200,
  },
});
