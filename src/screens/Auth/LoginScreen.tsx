import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

const LoginScreen = ({navigation}: any) => {
  const [userData, setUserData] =
    useState<FirebaseFirestoreTypes.DocumentData | null>(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const documentSnapshot = await firestore()
        .collection('Testing')
        .doc('SkIXAuuJ3i3ZJkYQYS7I')
        .get();

      if (documentSnapshot.exists) {
        const data = documentSnapshot.data();
        setUserData(data || null); // Set state to data or null if undefined
        console.log('User data:', data);
      } else {
        console.log('No such document exists!');
      }
    } catch (err) {
      console.log('Error fetching document:', err);
    }
  };

  return (
    <View>
      <Text style={styles.text}>LoginScreen</Text>
      {/* <Button
        title="Move to signup screen"
        onPress={() => navigation.navigate('SignUp')}
      /> */}
      {userData ? (
        <View>
          <Text style={styles.text}>Name: {userData.name}</Text>
          <Text style={styles.text}>Age: {userData.age}</Text>
        </View>
      ) : (
        <Text style={styles.text}>Loading...</Text>
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  text: {color: 'black'},
});

// return (
//   <View>
//
//     <Text></Text>
//   </View>
// );
