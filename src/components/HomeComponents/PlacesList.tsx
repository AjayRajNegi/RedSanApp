import {
  Text,
  View,
  Image,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {TopPlacesData} from '../../data/Index';
import {FlatList} from 'react-native-gesture-handler';
import {colors, fontSize, spacing} from '../../constants/theme';

interface PlacesListProps {
  list: TopPlacesData[];
}

const PlacesList: React.FC<PlacesListProps> = ({list}) => {
  const renderItem: ListRenderItem<TopPlacesData> = ({item}) => (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.detailContainer}>
            <Text>{item.location}</Text>
            <Text>Ratings-{item.streakNumber}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      horizontal
      data={list}
      renderItem={renderItem}
      style={styles.flatContainer}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  flatContainer: {
    marginLeft: spacing.md,
  },
  container: {
    marginRight: spacing.md,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  title: {
    fontSize: fontSize.md,
    fontWeight: 'bold',
    color: colors.black,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
