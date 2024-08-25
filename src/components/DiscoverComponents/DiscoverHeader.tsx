import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fontSize, sizes, spacing} from '../../constants/theme';
import Icons from '../../constants/Icons';
import DiscoverCategory from './DiscoverCategory';
import {DiscoverCategoryProps} from '../../data/Index';

interface DiscoverHeaderProps {
  list: DiscoverCategoryProps[];
}

const DiscoverHeader: React.FC<DiscoverHeaderProps> = ({list}) => {
  return (
    <View style={styles.header}>
      <View style={styles.topHeader}>
        <Text style={styles.topHeaderText}>Explore</Text>
        <View style={styles.topHeaderLocation}>
          <Image source={Icons.Location} />
          <Text style={styles.topHeaderLocationText}>Doon, India</Text>
          <Image source={Icons.LocationDownArrow} />
        </View>
      </View>
      <View>
        <Text style={styles.middleHeaderText}>Dehradun📌</Text>
      </View>
      <View style={styles.lastHeader}>
        <View style={styles.lastHeaderInputContainer}>
          <Image source={Icons.SearchInput} />
          <TextInput placeholder="Search" />
        </View>
        <Image source={Icons.Filter} style={styles.filterIcon} />
      </View>
      <DiscoverCategory list={list} />
    </View>
  );
};

export default DiscoverHeader;

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    marginLeft: spacing.md,
    marginRight: 0,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topHeaderText: {
    color: colors.black,
  },
  topHeaderLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginRight: spacing.md,
  },
  topHeaderLocationText: {
    color: colors.black,
  },
  middleHeaderText: {
    fontSize: fontSize.xxl,
    color: colors.black,
  },
  lastHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastHeaderInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md,
    paddingLeft: spacing.md,
    gap: spacing.md,
    borderWidth: 1,
    borderRadius: 16,
    // Shadow for iOS
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.2,
    // shadowRadius: 3.84,
    // Shadow for Android
    // elevation: 1,
    minWidth: sizes.width * 0.73,
    height: 40,
  },
  filterIcon: {marginRight: spacing.md},
});
