import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {sizes} from '../../constants/theme';

const WheelComponent = () => {
  return <View style={styles.mainContainer}></View>;
};

export default WheelComponent;

const styles = StyleSheet.create({
  mainContainer: {
    width: sizes.width,
    height: 300,
    backgroundColor: 'purple',
    marginTop: 100,
  },
});
