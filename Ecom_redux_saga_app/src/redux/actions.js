import {
  ADD_TO_CART,
  PRODUCT_LIST_REQUEST,
  REMOVE_FROM_CART,
} from '../utils/constants';
import {EMPTY_CART} from '../utils/constants';

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
export function getProductList() {
  return {
    type: PRODUCT_LIST_REQUEST,
  };
}
