import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productCart: [],
    productsList: [],
  },
  reducers: {
    getProductList: (state, action) => {
      state.productsList = action.payload;
    },
    emptyCart: state => {
      state.productCart = [];
    },
    removeFromCart: (state, action) => {
      state.productCart = state.productCart.filter(
        item => item.id !== action.payload.id,
      );
    },
    addToCart: (state, action) => {
      state.productCart.push(action.payload);
    },
  },
});

export default cartSlice.reducer;

export const {addToCart, removeFromCart, emptyCart, getProductList} =
  cartSlice.actions;
