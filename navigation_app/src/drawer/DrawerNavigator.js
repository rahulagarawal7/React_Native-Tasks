import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="main" component={Main} />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigator;
