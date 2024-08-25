import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {colors, fontSize, spacing} from '../../constants/theme';

interface SectionHeaderProps {
  title: string;
  list: number;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({title, list}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerMainText}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.headerSecondaryText}>See all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: spacing.md,
    marginLeft: spacing.md,
  },
  headerMainText: {
    fontSize: fontSize.md + 3,
    color: colors.black,
    fontWeight: '500',
  },
  headerSecondaryText: {
    fontSize: fontSize.md - 1,
    color: '#176FF2',
    fontWeight: '500',
  },
});
