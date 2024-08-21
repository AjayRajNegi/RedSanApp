import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors, sizes, spacing} from '../../constants/theme';

interface Title {
  title: string;
}

const SectionHeader: React.FC<Title> = ({title}) => {
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
    marginLeft: spacing.md,
    marginRight: spacing.md,
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default SectionHeader;
