import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {sizes} from '../../../constants/theme';
import DiscoverHeader from '../../../components/DiscoverComponents/DiscoverHeader';
import {DiscoverCategory, PLACES, TOP_PLACES} from '../../../data/Index';
import SectionHeader from '../../../components/DiscoverComponents/SectionHeader';
import PopularSection from '../../../components/DiscoverComponents/PopularSection';
import PlacesList from '../../../components/DiscoverComponents/PlacesList';
import RecommendSection from '../../../components/DiscoverComponents/RecommendSection';

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
          <DiscoverHeader list={DiscoverCategory} />
          <SectionHeader title="Popular" list={1} />
          <PopularSection list={TOP_PLACES} />
          <SectionHeader title="Recommended" list={2} />
          <RecommendSection list={PLACES} />
          <SectionHeader title="Hot Places" list={3} />
          <PlacesList list={TOP_PLACES} />
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
