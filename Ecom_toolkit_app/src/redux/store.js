import {configureStore} from '@reduxjs/toolkit';
import reducer from './cartSlice';
const store = configureStore({
  reducer: {
    cart: reducer,
  },
});

export default store;
