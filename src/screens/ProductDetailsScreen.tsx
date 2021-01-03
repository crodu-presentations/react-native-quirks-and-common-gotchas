import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ProductStackParams } from '../navigation/navigatorParams';
import { Routes } from '../navigation/Routes';

type CurrentRouteProp = RouteProp<ProductStackParams, Routes.ProductDetails>;

interface Props {
  route: CurrentRouteProp;
}

export const ProductDetailsScreen = ({ route }: Props) => {
  const productId = route.params?.productId;

  return (
    <View style={styles.container}>
      <Text>Product ID: {productId}</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
