import {
  Text,
  View,
  Image,
  StyleSheet,
  ListRenderItem,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Icons from '../../constants/Icons';
import {TopPlacesData} from '../../data/Index';
import {FlatList} from 'react-native-gesture-handler';
import {colors, fontSize, sizes, spacing} from '../../constants/theme';

interface PlacesListProps {
  list: TopPlacesData[];
}

const RecommendSection: React.FC<PlacesListProps> = ({list}) => {
  const renderItem: ListRenderItem<TopPlacesData> = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <ImageBackground
          source={item.image}
          style={styles.backgroundImage}
          imageStyle={{borderRadius: 22}}
          resizeMode="cover">
          <View style={styles.dayContainer}>
            <Text style={styles.dayText}>4N/5D</Text>
          </View>
        </ImageBackground>
        <View>
          <Text style={styles.bussinessName}>{item.title}</Text>
          <Text style={styles.deals}>{item.location}</Text>
        </View>
      </View>
    );
  };
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <FlatList
        horizontal
        data={list}
        renderItem={renderItem}
        style={styles.flatContainer}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
    </TouchableWithoutFeedback>
  );
};

export default RecommendSection;

const styles = StyleSheet.create({
  flatContainer: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.md,
  },
  cardContainer: {
    width: sizes.width / 2.28,
    marginRight: spacing.md,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    height: 120,
    marginBottom: spacing.sm,
  },
  dayContainer: {
    backgroundColor: 'red',
    width: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 22,
    position: 'relative',
    top: 10,
    left: '100%',
  },
  dayText: {
    color: 'white',
    fontWeight: '500',
    fontSize: fontSize.sm + 2,
  },
  bussinessName: {
    fontSize: fontSize.md,
    fontWeight: 'bold',
    color: 'black',
  },
  deals: {color: 'black'},
});
