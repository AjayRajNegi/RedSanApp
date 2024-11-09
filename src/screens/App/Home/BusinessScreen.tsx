import React from 'react';
import {View, Text} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {TopPlacesData} from '../../../data/Index';

type HomeStackPropList = {
  Business: {item: TopPlacesData};
};
const BusinessScreen = () => {
  const route = useRoute<RouteProp<HomeStackPropList, 'Business'>>();
  const {item} = route.params;
  console.log(item);
  return (
    <View>
      <Text style={{color: 'black'}}>{item.title}</Text>
    </View>
  );
};

export default BusinessScreen;
