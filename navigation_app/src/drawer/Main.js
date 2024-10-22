import {View, Text} from 'react-native';
import React from 'react';
import BottomNavigation from '../bottom/BottomNavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from '../bottom/Screen1';
import Screen3 from '../bottom/Screen3';
import Screen2 from '../bottom/Screen2';

const Bottom = createBottomTabNavigator();
const Main = () => {
  return (
    <View style={{flex: 1}}>
      <Bottom.Navigator>
        <Bottom.Screen
          name="1"
          component={Screen1}
          options={{headerShown: false}}
        />
        <Bottom.Screen
          name="2"
          component={Screen2}
          options={{headerShown: false}}
        />
        <Bottom.Screen
          name="3"
          component={Screen3}
          options={{headerShown: false}}
        />
      </Bottom.Navigator>
    </View>
  );
};

export default Main;
