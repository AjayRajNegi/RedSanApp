import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Button, TextInput, View, Text} from 'react-native';
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
      <View>
        {!confirm ? (
          <>
            <TextInput
              value={phoneNumber}
              keyboardType="phone-pad"
              placeholder="Enter Phone Number"
              style={{backgroundColor: 'black'}}
              onChangeText={text => setPhoneNumber(text)}
            />
            <Button title="Send OTP" onPress={verifyPhoneNumber} />
          </>
        ) : (
          <>
            <TextInput
              value={code}
              keyboardType="phone-pad"
              placeholder="Enter OTP"
              style={{backgroundColor: 'black'}}
              onChangeText={text => setCode(text)}
            />
            <Button title="Confirm OTP" onPress={confirmCode} />
          </>
        )}
      </View>
    );
  }
}

export default NumberVerify;
