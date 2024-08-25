import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import React from 'react';
import {sizes, spacing} from '../../constants/theme';
import {TopPlacesData} from '../../data/Index';

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
          <Text>{item.title}</Text>
        </ImageBackground>
      </View>
    );
  };
  return (
    <TouchableOpacity style={styles.touchableContainer}>
      <FlatList
        horizontal
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </TouchableOpacity>
  );
};

export default PopularSection;

const styles = StyleSheet.create({
  touchableContainer: {
    marginLeft: spacing.md,
    marginTop: spacing.md,
  },
  cardContainer: {
    height: sizes.width / 1.6,
    width: sizes.width / 2,
    marginRight: spacing.md,
    borderRadius: 22,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
});
