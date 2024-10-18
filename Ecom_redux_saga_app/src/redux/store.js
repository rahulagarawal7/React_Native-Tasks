import cardReducer from './reducer';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import sagaData from './saga';
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cart: cardReducer,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(sagaData);
export default store;
