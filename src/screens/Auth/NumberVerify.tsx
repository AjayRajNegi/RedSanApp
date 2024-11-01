import React, {useState, useEffect} from 'react';
import {Button, TextInput, View, Text} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

function NumberVerify() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
    console.log('onAuthStateChanges is working.');
    console.log('user', user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    console.log('Use Effect is working.');
    console.log(subscriber);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function verifyPhoneNumber() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      console.log('confirmation', confirmation);
      console.log('confirm', confirm);
      console.log('Verify phone no. is working.');
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
        console.log('Credential', credential);
        console.log('userData', userData);
        console.log(user, 'user');
      }
    } catch (error: any) {
      if (error.code === 'auth/invalid-verification-code') {
        console.log('Invalid code.');
      } else {
        console.log('Account linking error');
      }
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
              onChangeText={text => setCode(text)}
            />
            <Button title="Send OTP" onPress={confirmCode} />
          </>
        )}
      </View>
    );
  }
}

export default NumberVerify;

// import {View, Text, Alert, Button} from 'react-native';
// import React, {useState} from 'react';
// import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
// import {TextInput} from 'react-native-gesture-handler';

// const NumberVerify = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [confirmResult, setConfirmResult] =
//     useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
//   const [otp, setOtp] = useState('');

//   const sendOtp = async () => {
//     console.log('sendotp');
//     try {
//       const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//       setConfirmResult(confirmation);
//       console.log(confirmation);
//       console.log(confirmResult);
//       Alert.alert('OTP sent.', 'Please check your phone for the OTP.');
//     } catch (err) {
//       console.log(err);
//       Alert.alert('Error', 'Failed to send OTP.');
//     }
//   };

//   const linkPhoneNumber = async () => {
//     if (confirmResult) {
//       try {
//         const user = auth().currentUser;
//         console.log('Credential', confirmResult);
//         console.log('user', user);
//         if (user) {
//           const credential = auth.PhoneAuthProvider.credential(
//             confirmResult.verificationId,
//             otp,
//           );
//           await user.linkWithCredential(credential);
//           Alert.alert('Success', 'Phone number linked to your account!');
//         }
//       } catch (err) {
//         console.error(err);
//         Alert.alert('Error', 'Failed to link phone number.');
//       }
//     } else {
//       Alert.alert('No confirmation result found.');
//     }
//   };
//   return (
//     <View>
//       <Text style={{backgroundColor: 'black'}}>
//         Number link with your account.
//       </Text>
//       <View style={{backgroundColor: 'black'}}>
//         {!confirmResult ? (
//           <>
//             <TextInput
//               value={phoneNumber}
//               keyboardType="phone-pad"
//               placeholder="Enter Phone Number"
//               onChangeText={text => setPhoneNumber(text)}
//             />
//             <Button title="Send OTP" onPress={sendOtp} />
//           </>
//         ) : (
//           <>
//             <TextInput
//               value={otp}
//               keyboardType="phone-pad"
//               placeholder="Enter OTP"
//               onChangeText={text => setOtp(text)}
//             />
//             <Button title="Send OTP" onPress={linkPhoneNumber} />
//           </>
//         )}
//       </View>
//     </View>
//   );
// };

// export default NumberVerify;
