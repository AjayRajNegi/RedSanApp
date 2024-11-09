import React, {useState} from 'react';
import Icons from '../../constants/Icons';
import auth from '@react-native-firebase/auth';
import {TextInput} from 'react-native-gesture-handler';
import {fontSize, spacing} from '../../constants/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

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
    } catch (err: any) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <ImageBackground
            resizeMode="contain"
            source={Icons.RedSanLogin}
            style={{
              width: 160,
              height: 45,
              justifyContent: 'flex-end',
              marginHorizontal: 'auto',
            }}
          />
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.logInTextContainer}>
            <Image source={Icons.LeftArrow} />
            <Text style={styles.loginText}>Log Back In</Text>
            <Image source={Icons.RightArrow} />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                value={email}
                placeholder="Email"
                style={styles.inputs}
                placeholderTextColor="black"
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                secureTextEntry
                value={password}
                style={[styles.inputs, {marginTop: 25, marginBottom: 10}]}
                placeholder="Password"
                placeholderTextColor="black"
                onChangeText={text => setPassword(text)}
              />
              <Text style={{color: 'red'}}>{error}</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => handleLogin()}
                style={styles.loginButton}>
                <Text style={{color: 'white', fontSize: fontSize.md + 3}}>
                  LOGIN NOW
                </Text>
              </TouchableOpacity>
              <View style={styles.signupContainer}>
                <Text style={{color: '#5B5B5E'}}>Dont't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={{color: '#FF0000'}}>SignUp</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.lineWithTextContainer}>
            <View style={styles.flexLine} />
            <Text style={{color: '#5B5B5E'}}> Sign up with </Text>
            <View style={styles.flexLine} />
          </View>

          <View style={styles.loginOptions}>
            <TouchableOpacity style={styles.optionsContainer}>
              <Image source={Icons.Facebook} style={{width: 35, height: 35}} />
              <Text style={{color: 'black'}}>FACEBOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.optionsContainer, {gap: 10, paddingRight: 5}]}>
              <Image source={Icons.Google} style={{width: 35, height: 35}} />
              <Text style={{color: 'black'}}>GOOGLE</Text>
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
    backgroundColor: '#F6F6F6',
  },
  container: {
    marginHorizontal: spacing.md,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  topContainer: {
    marginHorizontal: 'auto',
    marginTop: 40,
    marginBottom: 85,
  },
  welcomeText: {
    fontSize: fontSize.xxl + 15,
    color: 'black',
    marginBottom: 30,
  },
  middleContainer: {
    marginHorizontal: 'auto',
  },
  logInTextContainer: {
    marginHorizontal: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  loginText: {
    color: 'black',
    fontSize: fontSize.xl + 8,
  },
  inputContainer: {
    marginHorizontal: 'auto',
    marginTop: 50,
  },
  formContainer: {
    marginHorizontal: 'auto',
  },
  inputs: {
    backgroundColor: '#D9D9D9',
    color: 'black',
    height: 40,
    width: 200,
    paddingLeft: 15,
    borderRadius: 20,
  },
  loginButton: {
    height: 60,
    width: 300,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4D4D',
    borderRadius: 50,
    //Shadow styling
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 9,
  },
  signupContainer: {
    marginHorizontal: 'auto',
    flexDirection: 'row',
    marginTop: 40,
  },
  bottomContainer: {
    marginHorizontal: 'auto',
    marginTop: 80,
  },
  lineWithTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#B3B3B3',
  },

  loginOptions: {
    flexDirection: 'row',
    marginTop: 10,
    gap: spacing.md,
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    gap: 5,
    backgroundColor: '#FFF',
    width: 140,
    height: 60,
  },
});
