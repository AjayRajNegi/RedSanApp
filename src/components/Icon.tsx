import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icons from '../constants/Icons';

const Icon = ({onPress, icon, style, size = 32}) => {
  const image = (
    <Image
      source={Icons[icon]}
      style={[{width: size, height: size, resizeMode: 'cover'}, style]}
    />
  );
  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{image}</TouchableOpacity>;
  }
  return image;
};

export default Icon;
