import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {TopPlacesData} from '../../data/Index';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {colors, fontSize, sizes, spacing} from '../../constants/theme';

const CARD_WIDTH = sizes.width / 2.8 - (spacing.lg + spacing.lg / 2);
const CARD_WIDTH_SPACING = CARD_WIDTH / 2 + spacing.sm;
const CARD_HEIGHT = 220;

interface TripProps {
  list: TopPlacesData[];
}

const ShopList: React.FC<TripProps> = ({list}) => {
  const navigation =
    useNavigation<NavigationProp<{BusinessScreen: {item: TopPlacesData}}>>();

  const businessProfileHandler = (item: TopPlacesData) => {
    navigation.navigate('BusinessScreen', {item});
  };
  const renderItem: ListRenderItem<TopPlacesData> = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.touchContainer}
        onPress={() => {
          businessProfileHandler(item);
        }}>
        <View style={[styles.card]}>
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
  };
  return (
    <>
      <FlatList
        data={list}
        horizontal
        decelerationRate="fast"
        renderItem={renderItem}
        style={styles.flatContainer}
        keyExtractor={i => i.id.toString()}
        snapToInterval={CARD_WIDTH_SPACING}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  flatContainer: {
    marginLeft: spacing.md,
  },
  touchContainer: {
    paddingTop: spacing.md,
    marginRight: spacing.md,
  },
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
  streakText: {
    color: colors.black,
    fontSize: fontSize.md,
    fontWeight: 'bold',
  },
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

export default ShopList;
