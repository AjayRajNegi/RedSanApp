import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ListRenderItem,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import {colors, fontSize, sizes, spacing} from '../../constants/theme';
import {TopPlacesData} from '../../data/Index';
import Icons from '../../constants/Icons';

interface PopularSectionProps {
  list: TopPlacesData[];
}

const PopularSection: React.FC<PopularSectionProps> = ({list}) => {
  const renderItem: ListRenderItem<TopPlacesData> = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <ImageBackground
          resizeMode="cover"
          source={item.image}
          style={styles.backgroundImage}
          imageStyle={{borderRadius: 22}}>
          <View style={styles.Detail}>
            <View style={styles.topDetail}>
              <Text style={styles.topDetailText}>{item.title}</Text>
            </View>
            <View style={styles.bottomDetail}>
              <View style={styles.rating}>
                <Image source={Icons.Star} style={styles.ratingImage} />
                <Text style={styles.ratingText}>{item.streakNumber}</Text>
              </View>
              <View style={styles.heart}>
                <Image source={Icons.SmollHeart} style={styles.heartImage} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <TouchableHighlight style={styles.touchableContainer} onPress={() => {}}>
      <FlatList
        horizontal
        data={list}
        renderItem={renderItem}
        decelerationRate="fast"
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
    </TouchableHighlight>
  );
};

export default PopularSection;

const styles = StyleSheet.create({
  touchableContainer: {
    marginLeft: spacing.md,
    marginVertical: spacing.md,
  },
  cardContainer: {
    height: sizes.width / 1.6,
    width: sizes.width / 2,
    marginRight: spacing.md,
    borderRadius: 22,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  Detail: {
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  topDetail: {
    backgroundColor: '#EC5655',
    maxWidth: '70%',
    alignItems: 'center',
    marginBottom: spacing.sm,
    borderRadius: 12,
    padding: 4,
  },
  topDetailText: {
    fontSize: fontSize.md,
    color: colors.white,
    fontWeight: '500',
  },
  bottomDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  ratingImage: {width: 20, height: 20},
  ratingText: {
    fontSize: fontSize.md,
    color: colors.black,
    fontWeight: '500',
  },
  heart: {
    backgroundColor: colors.white,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  heartImage: {
    width: 20,
    height: 20,
  },
});
