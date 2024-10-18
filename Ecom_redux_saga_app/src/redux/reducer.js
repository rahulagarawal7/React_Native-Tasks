import {
  ADD_TO_CART,
  EMPTY_CART,
  PRODUCT_LIST,
  REMOVE_FROM_CART,
} from '../utils/constants';

const initialState = {
  productCart: [],
  productList: [],
};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        productCart: [...state.productCart, action.payload],
      };
    case EMPTY_CART:
      return {
        ...state,
        productCart: [],
      };
    case REMOVE_FROM_CART:
      const newProductList = state.productCart.filter(
        item => item.id != action.payload,
      );
      return {
        ...state,
        productCart: newProductList,
      };
    case PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    default:
      return state;
  }
}
