import {
  Text,
  View,
  FlatList,
  Pressable,
  StyleSheet,
  ListRenderItem,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {CarousalItem} from '../../data/Index';
import {colors, fontSize, sizes, spacing} from '../../constants/theme';

interface CarousalProps {
  list: CarousalItem[];
}

const RedSanCarousal: React.FC<CarousalProps> = ({list}) => {
  const renderItem: ListRenderItem<CarousalItem> = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 0,
          marginRight: 0,
          marginBottom: spacing.md,
        }}>
        <View style={styles.card}>
          <ImageBackground
            source={item.image}
            style={styles.image}
            resizeMode="cover">
            <View style={styles.carousal}>
              <Text style={styles.heading}>{item.title}</Text>
              <Text style={styles.subHeading}>{item.subTitle}</Text>
              <Pressable
                style={styles.carousalButton}
                onPress={() => {
                  console.log('Press');
                }}>
                <Text style={styles.pressText}>Shop Now</Text>
              </Pressable>
              <Text style={styles.offer}>Get Offers Upto</Text>
              <Text style={styles.offerAmount}>Rs-/499</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      horizontal
      data={list}
      pagingEnabled={true}
      renderItem={renderItem}
      decelerationRate="fast"
      snapToAlignment="center"
      snapToInterval={sizes.width}
      keyExtractor={i => i.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    minWidth: sizes.width,
    overflow: 'hidden',
    display: 'flex',
    height: 250,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  carousal: {
    display: 'flex',
    position: 'absolute',
    maxWidth: sizes.width / 1.9,
    top: spacing.xxl,
    left: spacing.md,
  },
  heading: {
    color: colors.black,
    fontSize: fontSize.xl,
    fontWeight: 'bold',
  },
  subHeading: {
    color: colors.black,
    fontSize: fontSize.lg,
    fontWeight: '400',
  },
  carousalButton: {
    color: colors.black,
    padding: 1,
    marginTop: spacing.sm,
    marginBottom: spacing.sm,
    borderWidth: 2,
    borderRadius: sizes.radius,
    alignItems: 'center',
    width: sizes.width / 4,
    backgroundColor: colors.black,
  },
  pressText: {
    fontSize: fontSize.md,
    color: colors.white,
  },
  offer: {
    color: colors.black,
    fontSize: fontSize.md,
  },
  offerAmount: {
    color: colors.black,
  },
});

export default RedSanCarousal;
