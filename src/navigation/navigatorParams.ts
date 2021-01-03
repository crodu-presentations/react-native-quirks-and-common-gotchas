import { NavigatorScreenParams } from '@react-navigation/native';
import { Product } from '../redux/products/productModels';
import { Routes } from './Routes';

export type TabParams = {
  [Routes.HomeStack]: NavigatorScreenParams<HomeStackParams>;
  [Routes.ProductStack]: NavigatorScreenParams<ProductStackParams>;
};

export type HomeStackParams = {
  [Routes.Home]: undefined;
  [Routes.Chart]: {
    maxPoints?: number;
  };
};

export type ProductStackParams = {
  [Routes.ProductsList]: undefined;
  [Routes.ProductDetails]: {
    productId: Product['id'];
  };
};
