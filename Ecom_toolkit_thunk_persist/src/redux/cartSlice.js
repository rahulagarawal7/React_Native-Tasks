import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'cart/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  },
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productCart: [],
    productsList: [],
    status: 'idle',
  },
  reducers: {
    emptyCart: state => {
      state.productCart = [];
    },
    addToCart: (state, action) => {
      state.productCart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.productCart = state.productCart.filter(
        item => item.id !== action.payload.id,
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.productsList = action.payload;
      })
      .addCase(fetchProducts.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const {addToCart, removeFromCart, emptyCart} = cartSlice.actions;
export default cartSlice.reducer;
