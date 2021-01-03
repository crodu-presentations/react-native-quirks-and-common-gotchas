import { Product } from './productModels';

export const PRODUCTS_FETCH_REQUESTED = 'PRODUCTS_FETCH_REQUESTED';
export const PRODUCTS_FETCH_SUCCEEDED = 'PRODUCTS_FETCH_SUCCEEDED';
export const TOGGLE_WISHLIST = 'TOGGLE_WISHLIST';

interface FetchProductsRequestAction {
  type: typeof PRODUCTS_FETCH_REQUESTED;
}

interface FetchProductsSuccessAction {
  type: typeof PRODUCTS_FETCH_SUCCEEDED;
  payload: {
    products: Product[];
  };
}

interface ToggleWishlistAction {
  type: typeof TOGGLE_WISHLIST;
  payload: {
    productId: Product['id'];
  };
}

export type ProductAction =
  | FetchProductsRequestAction
  | FetchProductsSuccessAction
  | ToggleWishlistAction;
