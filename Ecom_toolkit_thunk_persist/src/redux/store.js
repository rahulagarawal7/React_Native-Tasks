import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistStore} from 'redux-persist';
import cartReducer from './cartSlice';

// Set up persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Make sure AsyncStorage is used
  whitelist: ['cart'], // Persist only the cart reducer
};

// Combine your reducers (if you have more than one)
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Create a persisted reducer using persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check to avoid errors with non-serializable actions
    }),
});

// Create persistor
export const persistor = persistStore(store);

export default store;
