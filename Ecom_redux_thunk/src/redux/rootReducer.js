import {combineReducers} from 'redux';
import cardReducer from './reducer';
const rootReducer = combineReducers({
  cart: cardReducer,
});
export default rootReducer;
