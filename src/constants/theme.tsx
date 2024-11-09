import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const colors = {
  primary: '#070f18',
  gray: '#8b8989',
  lightGray: '#b2b2b2',
  light: '#F6F6F6',
  white: '#fff',
  black: '#000',
};

export const shadow = {
  light: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};

export const sizes = {
  width,
  height,
  title: 32,
  h2: 24,
  h3: 18,
  body: 14,
  radius: 16,
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const fontSize = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 36,
};

export const iconSize = {
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
};
