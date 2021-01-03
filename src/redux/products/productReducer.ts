import _ from 'lodash';
import {
  PRODUCTS_FETCH_REQUESTED,
  PRODUCTS_FETCH_SUCCEEDED,
  ProductAction,
  TOGGLE_WISHLIST,
} from './productActionTypes';
import { Product } from './productModels';

export interface ProductsState {
  ids: Product['id'][];
  byId: Record<Product['id'], Product>;
  isLoading?: boolean;
}

const initialState: ProductsState = {
  ids: [],
  byId: {},
};

const reducer = (
  state = initialState,
  action: ProductAction,
): ProductsState => {
  switch (action.type) {
    case PRODUCTS_FETCH_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCTS_FETCH_SUCCEEDED: {
      const { products } = action.payload;
      return {
        ...state,
        isLoading: false,
        ids: products.map((p) => p.id),
        byId: _.keyBy(products, 'id'),
      };
    }

    case TOGGLE_WISHLIST: {
      const { productId } = action.payload;
      const product = state.byId[productId];
      return {
        ...state,
        byId: {
          ...state.byId,
          [productId]: {
            ...product,
            isOnWishlist: !product.isOnWishlist,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
