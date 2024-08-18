import React from 'react';
import Icons from '../constants/Icons';
import {TouchableOpacity} from 'react-native';
import {Image, ImageStyle, StyleProp} from 'react-native';

type IconProps = {
  icon: keyof typeof Icons;
  size: number;
  style?: StyleProp<ImageStyle>;
  onPress: () => void;
};

const Icon: React.FC<IconProps> = ({icon, size, style, onPress}) => {
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
