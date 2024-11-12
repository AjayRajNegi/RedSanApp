import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from '../../constants/Icons';
import {sizes} from '../../constants/theme';

const GAP = sizes.width * 0.05;

const Facilities = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 'auto',
        gap: GAP,
      }}>
      <Image source={Icons.WiFi} />
      <Image source={Icons.Dinner} />
      <Image source={Icons.Shower} />
      <Image source={Icons.Pool} />
    </View>
  );
};

export default Facilities;

const styles = StyleSheet.create({});
