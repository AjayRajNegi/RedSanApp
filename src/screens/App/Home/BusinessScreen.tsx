import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {TopPlacesData} from '../../../data/Index';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fontSize, sizes} from '../../../constants/theme';
import Icons from '../../../constants/Icons';

const MAIN_IMAGE_WIDTH = sizes.width * 0.87;
const MAIN_IMAGE_HEIGHT = MAIN_IMAGE_WIDTH * 1.2;

type HomeStackPropList = {
  Business: {item: TopPlacesData};
};
const BusinessScreen = () => {
  const route = useRoute<RouteProp<HomeStackPropList, 'Business'>>();
  const {item} = route.params;
  console.log(item);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
          <View style={styles.topContainer}>
            <View style={styles.mainImageContainer}>
              <ImageBackground
                source={item.image}
                resizeMode="cover"
                style={{flex: 1}}
                imageStyle={{borderRadius: 50}}>
                <TouchableOpacity
                  style={styles.backArrow}
                  onPress={() => {
                    console.log('Hello');
                  }}>
                  <Image source={Icons.BackArrow} />
                </TouchableOpacity>
                {/* <TouchableOpacity
                  style={styles.backArrow}
                  onPress={() => {
                    console.log('Hello');
                  }}>
                  <Image source={Icons.BackArrow} />
                </TouchableOpacity> */}
              </ImageBackground>
            </View>
            <View style={styles.topContainerContent}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={{flexDirection: 'row', gap: 5}}>
                <Text style={styles.rating}>
                  {item.streakNumber} (400 Reviews)
                </Text>
                <Text style={styles.showMap}>Show map</Text>
              </View>
              <Text style={styles.description}>{item.description}</Text>
              <TouchableOpacity>
                <Text style={styles.readMore}>Read more</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.middleContainer}></View>
          <View style={styles.bottomContainer}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BusinessScreen;

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: '#FF2B2B'},
  container: {
    flex: 1,
    backgroundColor: colors.light,
    minWidth: sizes.width,
    marginHorizontal: 'auto',
  },
  scrollContainer: {
    minWidth: sizes.width,
    marginHorizontal: 'auto',
    marginTop: 20,
  },
  topContainer: {marginHorizontal: 'auto'},
  mainImageContainer: {
    width: MAIN_IMAGE_WIDTH,
    height: MAIN_IMAGE_HEIGHT,
  },
  backArrow: {
    backgroundColor: '#d9d9d9',
    width: 35,
    height: 35,
    opacity: 0.6,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: '6%',
    top: 20,
  },
  topContainerContent: {
    marginHorizontal: 'auto',
    maxWidth: MAIN_IMAGE_WIDTH,
    marginTop: 20,
  },
  title: {
    fontSize: fontSize.xl,
    color: 'black',
    fontWeight: '500',
    marginBottom: 5,
  },
  rating: {color: '#606060', fontWeight: '500', fontSize: fontSize.sm + 1},
  showMap: {color: '#FF2B2B', fontWeight: '800'},
  description: {color: 'black', fontWeight: '700', marginTop: 5},
  readMore: {color: '#FF2B2B', fontWeight: '800', marginTop: 10},
  middleContainer: {},
  bottomContainer: {},
});
