import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeById} from '../redux/actions';
const ProductCard = ({item, setPrice, price}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleSubmitInc = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setPrice(price + item.price);
  };

  const handleSubmitDec = () => {
    if (quantity === 1) return;

    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    setPrice(price - item.price);
  };
  return (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.rating}>
        Rating: {item.rating.rate} ({item.rating.count} reviews)
      </Text>
      <View style={styles.btnBox}>
        <View style={styles.btnCart}>
          <TouchableOpacity onPress={handleSubmitInc}>
            <Text style={styles.inc}>+</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Quantity {quantity}</Text>
          <TouchableOpacity onPress={handleSubmitDec}>
            <Text style={styles.dec}>-</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.removeBtn}
          onPress={() => dispatch(removeById(item.id))}>
          <Text style={styles.removeText}>remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CardList = ({products, price, setPrice}) => {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <ProductCard price={price} setPrice={setPrice} item={item} />
      )}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 5},
    elevation: 5,
  },
  removeText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    alignSelf: 'center',
  },
  inc: {
    fontSize: 24,
    color: 'white',
  },
  btnBox: {
    flexDirection: 'row',
    gap: 5,
  },
  dec: {
    fontSize: 30,
    color: 'white',
  },
  removeBtn: {
    backgroundColor: '#52b788',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    width: '50%',
  },

  btnCart: {
    backgroundColor: '#52b788',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    width: '50%',
  },
  text: {
    color: 'black',
    fontWeight: '700',
    fontSize: 18,
    backgroundColor: 'white',
    padding: 5,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  rating: {
    fontSize: 12,
    color: '#444',
  },
});

export default CardList;
