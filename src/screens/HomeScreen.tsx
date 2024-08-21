import React from 'react';
import ShopList from '../components/HomeComponents/ShopList';
import {colors, sizes} from '../constants/theme';
import PlacesList from '../components/HomeComponents/PlacesList';
import CategoryList from '../components/HomeComponents/CategoryList';
import RedSanHeader from '../components/HomeComponents/RedSanHeader';
import SectionHeader from '../components/HomeComponents/SectionHeader';
import RedSanCarousal from '../components/HomeComponents/RedSanCarousal';
import {View, StyleSheet, ScrollView} from 'react-native';
import WheelComponent from '../components/HomeComponents/WheelComponent';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PLACES, TOP_PLACES, RedSanCarousalData} from '../data/Index';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
          <RedSanHeader />
          <RedSanCarousal list={RedSanCarousalData} />
          <SectionHeader title="You Pinned📌" />
          <ShopList list={PLACES} />
          <SectionHeader title="Your Streaks✨" />
          <ShopList list={TOP_PLACES} />
          <SectionHeader title="Top Categories" />
          <CategoryList list={PLACES} />
          <SectionHeader title="Hot Places" />
          <PlacesList list={TOP_PLACES} />
          <WheelComponent />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    minWidth: sizes.width,
  },
  scrollContainer: {
    minWidth: sizes.width,
  },
});
