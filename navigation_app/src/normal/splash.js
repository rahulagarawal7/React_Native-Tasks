import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('parent');
    }, 4000);
  }, []);
  return (
    <View>
      <Text>splash</Text>
    </View>
  );
};

export default Splash;
