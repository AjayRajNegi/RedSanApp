import {
  ListRenderItem,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import Icons from '../../constants/Icons';
import {PlacesData} from '../../data/Index';
import {colors, spacing} from '../../constants/theme';
import {FlatList} from 'react-native-gesture-handler';

interface CategoryListProps {
  list: PlacesData[];
}
const CategoryList: React.FC<CategoryListProps> = ({list}) => {
  const renderItem: ListRenderItem<PlacesData> = ({item}) => {
    return (
      <TouchableOpacity style={styles.mainContainerO}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const listFooterComponent = () => (
    <TouchableOpacity style={styles.mainContainerO}>
      <Image
        source={Icons.Hamburger}
        style={[styles.image, {backgroundColor: '#E9E9ED'}]}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>More</Text>
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
      ListFooterComponent={listFooterComponent}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  flatContainer: {
    marginLeft: spacing.md,
    marginBottom: spacing.md,
    marginTop: spacing.xs,
  },
  mainContainerO: {
    marginRight: spacing.md,
  },
  titleContainer: {
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  title: {
    color: colors.black,
    fontWeight: '400',
  },
});
