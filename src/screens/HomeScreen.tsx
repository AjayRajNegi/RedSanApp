import React from 'react';
import TripList from '../components/TripList';
import {colors, sizes} from '../constants/theme';
import RedSanHeader from '../components/RedSanHeader';
import SectionHeader from '../components/SectionHeader';
import RedSanCarousal from '../components/RedSanCarousal';
import {View, StyleSheet, ScrollView} from 'react-native';
import {PLACES, TOP_PLACES, RedSanCarousalData} from '../data/Index';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <RedSanHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{minWidth: sizes.width}}>
        <RedSanCarousal list={RedSanCarousalData} />
        <SectionHeader title="You Pinned📌" />
        <TripList list={PLACES} />
        <SectionHeader title="Your Streaks✨" />
        <TripList list={PLACES} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    minWidth: sizes.width,
  },
});
