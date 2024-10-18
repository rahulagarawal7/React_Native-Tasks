import cardReducer from './reducer';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    cart: cardReducer,
  },
});

export default store;
