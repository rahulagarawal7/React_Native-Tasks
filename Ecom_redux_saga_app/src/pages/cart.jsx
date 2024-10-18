import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardList from '../components/CartList';
import {products} from '../utils/data';
import {useSelector, useDispatch} from 'react-redux';
import {emptyCart} from '../redux/actions';
import EmptyCard from '../components/EmptyCard';

const Cart = () => {
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  function handle() {
    dispatch(emptyCart());
  }
  const item = useSelector(store => store?.cart?.productCart);
  useEffect(() => {
    if (item) {
      const totalPrice = item.reduce((acc, product) => {
        return acc + product.price;
      }, 0);
      setPrice(totalPrice);
    }
  }, [item]);
  return (
    <View style={{height: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>Product Cart</Text>
        <TouchableOpacity style={styles.cartBg} onPress={() => handle()}>
          <Text style={styles.textCart}>Empty cart </Text>
        </TouchableOpacity>
      </View>
      {item?.length > 0 ? (
        <View style={styles.totalContainer}>
          <Text style={styles.textTotal}>Total Price</Text>
          <Text style={styles.textTotal}>{price.toFixed(2)}</Text>
        </View>
      ) : (
        <View>
          <EmptyCard />
        </View>
      )}
      <CardList products={item} price={price} setPrice={setPrice} />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  textCart: {
    fontWeight: '700',
    letterSpacing: 2,
    fontSize: 16,
    color: 'white',
  },
  cartBg: {
    backgroundColor: '#52b788',
    padding: 15,
    width: '40%',
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
  totalContainer: {
    marginTop: 10,
    backgroundColor: '#52b788',
    height: '10%',
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textTotal: {
    color: 'white',
    fontSize: 20,
  },
});
