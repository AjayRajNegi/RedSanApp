import {
  FlatList,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import {PlacesData} from '../data/Index';
import {colors, fontSize, shadow, sizes, spacing} from '../constants/theme';

const CARD_WIDTH = sizes.width / 2.8 - (spacing.lg + spacing.lg / 2);
const CARD_WIDTH_SPACING = CARD_WIDTH / 2 + spacing.sm;
const CARD_HEIGHT = 220;

interface TripProps {
  list: PlacesData[];
}

const TripsList: React.FC<TripProps> = ({list}) => {
  return (
    <>
      <FlatList
        data={list}
        horizontal
        snapToInterval={CARD_WIDTH_SPACING}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={i => i.id.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                marginLeft: spacing.md,
                marginRight: index === list.length - 1 ? spacing.sm : 0,
                marginTop: spacing.md,
              }}>
              <View style={[styles.card, shadow.dark]}>
                <View style={styles.streak}>
                  <View
                    style={[
                      styles.streakBox,
                      {backgroundColor: `${item.streakColor}`},
                    ]}>
                    <Text style={styles.streakText}>{item.streakNumber}</Text>
                  </View>
                </View>

                <View style={styles.imageBox}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  streak: {
    alignItems: 'center',
    zIndex: 2,
    backgroundColor: 'yellow',
    position: 'relative',
  },
  streakBox: {
    width: 40,
    height: 40,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: sizes.radius + 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -20,
  },
  streakText: {color: 'black', fontSize: fontSize.md, fontWeight: 'bold'},
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    borderRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    resizeMode: 'cover',
  },

  titleBox: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginVertical: spacing.xs,
    fontSize: sizes.body,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

export default TripsList;
