import * as faker from 'faker';
import _ from 'lodash';
import { delay, put, takeLatest } from 'redux-saga/effects';
import { productsFetchSuccess } from './productActions';
import { PRODUCTS_FETCH_REQUESTED } from './productActionTypes';
import { Product } from './productModels';

function generateProducts(totalCount: number = 1000): Product[] {
  return _.range(1, totalCount + 1).map((id) => ({
    id,
    imageUrl: `https://picsum.photos/id/${id}/200/300`,
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    isOnWishlist: false,
  }));
}

function* fetchProducts() {
  const products = generateProducts();
  yield delay(1000);
  yield put(productsFetchSuccess(products));
}

function* productSaga() {
  yield takeLatest(PRODUCTS_FETCH_REQUESTED, fetchProducts);
}

export default productSaga;
