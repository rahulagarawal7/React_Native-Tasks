import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EmptyCard = () => {
  return (
    <View style={{justifyContent: 'flex-end', height: '100%', padding: 15}}>
      <View style={styles.box}>
        <Text style={styles.text}>Your Cart is Empty </Text>
      </View>
    </View>
  );
};

export default EmptyCard;

const styles = StyleSheet.create({
  box: {
    marginVertical: 50,
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52b788',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: '500',
  },
});
