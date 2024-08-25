import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {DiscoverCategoryProps} from '../../data/Index';
import {colors, fontSize, spacing} from '../../constants/theme';

interface DiscoverHeaderProps {
  list: DiscoverCategoryProps[];
}
interface CategoryHandlerProps {
  category: string;
}
const DiscoverCategory: React.FC<DiscoverHeaderProps> = ({list}) => {
  const [selectedCategory, setSelectedCategory] = useState('Trending');

  const categoryHandler = ({category}: CategoryHandlerProps): void => {
    console.log(category);
    setSelectedCategory(category);
  };
  const renderItem: ListRenderItem<DiscoverCategoryProps> = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          categoryHandler({category: item.name});
        }}>
        <View
          style={[
            styles.categoryContainer,
            selectedCategory === item.name && {backgroundColor: colors.black},
          ]}>
          <Text style={styles.categoryTextContainer}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      horizontal
      data={list}
      renderItem={renderItem}
      snapToAlignment="center"
      style={styles.flatContainer}
      keyExtractor={id => id.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default DiscoverCategory;

const styles = StyleSheet.create({
  flatContainer: {marginVertical: spacing.md},
  categoryContainer: {
    marginRight: spacing.sm + 3,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm + 6,
    borderRadius: 50,
    backgroundColor: '#CCCCCC',
  },
  categoryTextContainer: {
    color: colors.white,
    fontSize: fontSize.md,
  },
});
