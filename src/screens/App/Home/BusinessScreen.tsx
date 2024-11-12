import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icons from '../../../constants/Icons';
import {TopPlacesData} from '../../../data/Index';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute, RouteProp} from '@react-navigation/native';
import {colors, fontSize, sizes} from '../../../constants/theme';
import Facilities from '../../../components/HomeComponents/Facilities';

const MAIN_IMAGE_WIDTH = sizes.width * 0.88;
const MAIN_IMAGE_HEIGHT = MAIN_IMAGE_WIDTH * 1.15;

type HomeStackPropList = {
  Business: {item: TopPlacesData};
};
const BusinessScreen = ({navigation}: any) => {
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
                    navigation.navigate('HomeScreen');
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
          <View style={styles.middleContainer}>
            <Text style={styles.facilities}>Facilities</Text>
            <Facilities />
            <View style={styles.pricingContainer}>
              <View>
                <Text style={styles.price}>Price</Text>
                <Text style={styles.priceAmount}>{item.streakNumber}00</Text>
              </View>
              <TouchableOpacity style={styles.bookNow}>
                <Text style={styles.bookNowText}>Book Now -{`>`}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <Text
              style={{
                marginHorizontal: 'auto',
                color: 'black',
                fontSize: fontSize.md,
                fontWeight: '500',
              }}>
              Photos
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 'auto',
                gap: 10,
                marginTop: 20,
              }}>
              <View style={styles.imagesContainer}>
                <ImageBackground
                  source={item.image}
                  resizeMode="cover"
                  style={{flex: 1}}
                  imageStyle={{borderRadius: 10}}
                />
              </View>
              <View style={styles.imagesContainer}>
                <ImageBackground
                  source={item.image}
                  resizeMode="cover"
                  style={{flex: 1}}
                  imageStyle={{borderRadius: 10}}
                />
              </View>
              <View style={styles.imagesContainer}>
                <ImageBackground
                  source={item.image}
                  resizeMode="cover"
                  style={{flex: 1}}
                  imageStyle={{borderRadius: 10}}
                />
              </View>
            </View>
          </View>
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
    marginTop: 10,
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
  middleContainer: {
    marginHorizontal: 'auto',
    marginTop: 20,
  },
  facilities: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    marginBottom: 10,
    color: 'black',
  },
  pricingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  bookNow: {
    backgroundColor: '#EC5655',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 20,
  },
  bookNowText: {
    color: 'white',
    fontSize: fontSize.lg,
    fontWeight: '800',
  },
  price: {color: 'black', fontWeight: '400'},
  priceAmount: {
    fontSize: fontSize.xl,
    fontWeight: '800',
    color: '#005239',
  },
  bottomContainer: {marginTop: 20, marginBottom: 20},
  imagesContainer: {
    width: MAIN_IMAGE_WIDTH * 0.3,
    height: MAIN_IMAGE_HEIGHT * 0.4,
  },
});
