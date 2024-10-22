import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';
import './gesture-handler';
import './gesture-handler.native';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
