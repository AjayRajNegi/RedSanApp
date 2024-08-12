import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {RedSanImages} from '../data/Index';

const RedSanHeader = () => {
  return (
    <View>
      <Image source={RedSanImages.image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {resizeMode: 'contain'},
});

export default RedSanHeader;
