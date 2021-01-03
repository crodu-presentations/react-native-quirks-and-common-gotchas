import {
  PRODUCTS_FETCH_REQUESTED,
  PRODUCTS_FETCH_SUCCEEDED,
  ProductAction,
  TOGGLE_WISHLIST,
} from './productActionTypes';
import { Product } from './productModels';

export function productsFetchRequest(): ProductAction {
  return {
    type: PRODUCTS_FETCH_REQUESTED,
  };
}

export function productsFetchSuccess(products: Product[]): ProductAction {
  return {
    type: PRODUCTS_FETCH_SUCCEEDED,
    payload: {
      products,
    },
  };
}

export function toggleWishlist(productId: Product['id']): ProductAction {
  return {
    type: TOGGLE_WISHLIST,
    payload: {
      productId,
    },
  };
}
