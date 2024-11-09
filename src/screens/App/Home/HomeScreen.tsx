import React from 'react';
import {colors, sizes} from '../../../constants/theme';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ShopList from '../../../components/HomeComponents/ShopList';
import PlacesList from '../../../components/HomeComponents/PlacesList';
import CategoryList from '../../../components/HomeComponents/CategoryList';
import RedSanHeader from '../../../components/HomeComponents/RedSanHeader';
import {PLACES, TOP_PLACES, RedSanCarousalData} from '../../../data/Index';
import SectionHeader from '../../../components/HomeComponents/SectionHeader';
import RedSanCarousal from '../../../components/HomeComponents/RedSanCarousal';
import WheelComponent from '../../../components/HomeComponents/WheelComponent';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
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
  safeArea: {
    flex: 1,
    // backgroundColor: 'red',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: colors.light,
    minWidth: sizes.width,
  },
  scrollContainer: {
    minWidth: sizes.width,
  },
});
