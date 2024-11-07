import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import Icons from '../../constants/Icons';
import React, {useState, useEffect} from 'react';
import {fontSize, spacing} from '../../constants/theme';
import firestore from '@react-native-firebase/firestore';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

function NumberVerify() {
  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
    // console.log('onAuthStateChanges is working.');
    // console.log('user', user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // console.log(subscriber);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function verifyPhoneNumber() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      // console.log('confirmation', confirmation);
      // console.log('confirm', confirm);
      // console.log('Verify phone no. is working.');
    } catch (error) {
      console.error('Phone verification error:', error);
    }
  }

  async function confirmCode() {
    try {
      if (confirm) {
        const credential = auth.PhoneAuthProvider.credential(
          confirm.verificationId,
          code,
        );
        const userData = await auth().currentUser?.linkWithCredential(
          credential,
        );
        setUser(userData?.user || null);
        // console.log('Credential', credential);
        // console.log('userData', userData);
        // console.log(user, 'user');
        updateDetails();
      }
    } catch (error: any) {
      if (error.code === 'auth/invalid-verification-code') {
        console.log('Invalid code.');
      } else {
        console.log(error);
      }
    }
  }
  async function updateDetails() {
    const email = auth().currentUser?.email;
    if (email) {
      await firestore()
        .collection('users')
        .doc(email)
        .update({
          phoneNumber: phoneNumber,
          isNumberVerified: true,
        })
        .then(() => {
          console.log('Details updated successfully.');
        });
    } else {
      console.log('Email is null or undefined. Cannot update document.');
    }
  }

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Back to Login</Text>
      </View>
    );
  } else if (!user.phoneNumber) {
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
              <Text style={styles.loginText}>Verify Number</Text>
              <Image source={Icons.RightArrow} />
            </View>
            <View style={styles.formContainer}>
              <View>
                {!confirm ? (
                  <>
                    <TextInput
                      value={phoneNumber}
                      keyboardType="phone-pad"
                      placeholder="Phone Number"
                      placeholderTextColor="black"
                      style={[styles.inputs, {marginTop: 25, marginBottom: 10}]}
                      onChangeText={text => setPhoneNumber(text)}
                    />
                    <TouchableOpacity
                      onPress={verifyPhoneNumber}
                      style={styles.loginButton}>
                      <Text style={{color: 'white', fontSize: fontSize.md + 3}}>
                        Send OTP
                      </Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <TextInput
                      value={code}
                      keyboardType="phone-pad"
                      placeholder="Enter OTP"
                      placeholderTextColor="black"
                      style={[styles.inputs, {marginTop: 25, marginBottom: 10}]}
                      onChangeText={text => setCode(text)}
                    />
                    <TouchableOpacity
                      onPress={confirmCode}
                      style={styles.loginButton}>
                      <Text style={{color: 'white', fontSize: fontSize.md + 3}}>
                        Confirm OTP
                      </Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
              <View style={styles.errorContainer}>
                <Text style={{color: 'red'}}>Errorasg</Text>
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
                <Image
                  source={Icons.Facebook}
                  style={{width: 35, height: 35}}
                />
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
  }
}

export default NumberVerify;

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
  errorContainer: {
    marginHorizontal: 'auto',
    marginTop: 50,
  },
  formContainer: {
    marginHorizontal: 'auto',
    marginTop: 100,
  },
  inputs: {
    backgroundColor: '#D9D9D9',
    marginHorizontal: 'auto',
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
