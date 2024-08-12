import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {sizes, spacing} from '../constants/theme';

const SectionHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: spacing.m,
    marginRight: spacing.m,
    marginTop: 0,
    marginBottom: 10,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default SectionHeader;
