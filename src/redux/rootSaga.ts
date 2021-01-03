import { all } from 'redux-saga/effects';
import products from './products/productSagas';

export function* rootSaga() {
  yield all([products()]);
}
