import axios from 'axios';
import {ADD_TO_CART, GET_PRODUCTS, REMOVE_FROM_CART} from '../utils/constants';
import {EMPTY_CART} from '../utils/constants';
import api from '../api/fackStoreURL';

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function emptyCart() {
  return {
    type: EMPTY_CART,
  };
}

export function removeById(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
}

export function getProducts() {
  return async function (dispatch) {
    const response = await api.get('/products');
    console.log(response.data);

    dispatch({type: GET_PRODUCTS, payload: response.data});
  };
}
