import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {sizes} from '../constants/theme';
import DiscoverHeader from '../components/DiscoverComponents/DiscoverHeader';
import {DiscoverCategory} from '../data/Index';

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
          <DiscoverHeader list={DiscoverCategory} />
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
