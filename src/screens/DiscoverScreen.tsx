import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {sizes} from '../constants/theme';
import DiscoverHeader from '../components/DiscoverComponents/DiscoverHeader';
import {DiscoverCategory, TOP_PLACES} from '../data/Index';
import SectionHeader from '../components/DiscoverComponents/SectionHeader';
import PopularSection from '../components/DiscoverComponents/PopularSection';

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
          <DiscoverHeader list={DiscoverCategory} />
          <SectionHeader title="Popular" list={2} />
          <PopularSection list={TOP_PLACES} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {},
  scrollContainer: {
    minWidth: sizes.width,
  },
});
