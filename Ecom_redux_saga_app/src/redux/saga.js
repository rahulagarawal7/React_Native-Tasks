import {put, takeLatest} from 'redux-saga/effects';
import {PRODUCT_LIST, PRODUCT_LIST_REQUEST} from '../utils/constants';

function* fetchData() {
  const data = yield fetch('https://fakestoreapi.com/products');
  const json = yield data.json();
  yield put({type: PRODUCT_LIST, payload: json});
}

function* sagaData() {
  yield takeLatest(PRODUCT_LIST_REQUEST, fetchData);
}

export default sagaData;
