import { combineReducers } from 'redux';
import products from './products/productReducer';

export const rootReducer = combineReducers({
  products,
});

export type RootState = ReturnType<typeof rootReducer>;
