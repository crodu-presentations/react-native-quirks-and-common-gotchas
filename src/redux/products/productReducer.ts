import {
  PRODUCTS_FETCH_REQUESTED,
  PRODUCTS_FETCH_SUCCEEDED,
  ProductAction,
  TOGGLE_WISHLIST,
} from './productActionTypes';
import { Product } from './productModels';

export interface ProductsState {
  products: Product[];
  isLoading?: boolean;
}

const initialState: ProductsState = {
  products: [],
};

const reducer = (state = initialState, action: ProductAction) => {
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
        products,
      };
    }

    case TOGGLE_WISHLIST: {
      const { productId } = action.payload;
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === productId
            ? {
                ...p,
                isOnWishlist: !p.isOnWishlist,
              }
            : p,
        ),
      };
    }
    default:
      return state;
  }
};

export default reducer;
