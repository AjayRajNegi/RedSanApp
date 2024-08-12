import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/theme';

const CARD_HEIGHT = 200;
console.log(sizes.width);

const RedSanCarousal = ({list}) => {
  return (
    <FlatList
      data={list}
      horizontal
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={i => i.id}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={{
              marginLeft: 0,
              marginRight: 0,
              marginBottom: spacing.l,
              backgroundColor: 'red',
            }}>
            <View style={[styles.card, shadow.dark]}>
              <Image source={item.image} style={styles.image} />

              {/* <View style={styles.imageBox}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View> */}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: sizes.width,
    height: 253,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'contain',
  },
});

export default RedSanCarousal;
