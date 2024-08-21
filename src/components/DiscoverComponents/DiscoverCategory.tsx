import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {DiscoverCategoryProps} from '../../data/Index';

interface DiscoverHeaderProps {
  list: DiscoverCategoryProps[];
}
const DiscoverCategory: React.FC<DiscoverHeaderProps> = ({list}) => {
  const renderItem: ListRenderItem<DiscoverCategoryProps> = ({item}) => {
    return (
      <TouchableOpacity>
        <View>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      style={styles.flatContainer}
      data={list}
      renderItem={renderItem}
      keyExtractor={id => id.id.toString()}
      horizontal
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default DiscoverCategory;

const styles = StyleSheet.create({
  flatContainer: {},
});
