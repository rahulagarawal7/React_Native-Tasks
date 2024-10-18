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
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeById} from '../redux/actions';

const ProductCard = ({item}) => {
  const [isCart, setISCart] = useState(false);
  const disPatch = useDispatch();
  const cartItem = useSelector(store => store?.cart?.productCart);
  const handle = item => {
    const res = cartItem.filter(pro => pro.id == item.id);
    if (res) setISCart(true);

    if (isCart) {
      disPatch(removeById(item.id));
      setISCart(false);
      return;
    }
    disPatch(addToCart(item));
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
      <TouchableOpacity style={styles.btnCart} onPress={() => handle(item)}>
        <Text style={styles.text}>
          {isCart ? 'Remove From Cart' : 'Add to Cart'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Card = ({products}) => {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => <ProductCard item={item} />}
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
  btnCart: {
    backgroundColor: '#52b788',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
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

export default Card;
