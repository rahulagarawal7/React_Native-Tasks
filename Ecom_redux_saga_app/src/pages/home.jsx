import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import Card from '../components/Card';
import {products} from '../utils/data';
import {useSelector, useDispatch} from 'react-redux';
import {getProductList} from '../redux/actions';

const Home = ({navigation}) => {
  const item = useSelector(store => store?.cart.productCart);
  const {productList} = useSelector(store => store?.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, []);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Product Store</Text>
        <TouchableOpacity
          style={styles.cartBg}
          onPress={() => navigation.navigate('CartPage')}>
          <Text style={styles.textCart}>Cart ({item?.length})</Text>
        </TouchableOpacity>
      </View>
      <Card products={productList} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textCart: {
    fontWeight: '700',
    letterSpacing: 2,
    fontSize: 16,
  },
  cartBg: {
    backgroundColor: '#52b788',
    padding: 15,
    width: '30%',
    alignItems: 'center',
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: '700',
    fontSize: 24,
    padding: 10,
  },
});
