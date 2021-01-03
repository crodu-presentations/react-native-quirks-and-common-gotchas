import { RouteProp } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, Switch, Text, useWindowDimensions, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect, ConnectedProps } from 'react-redux';
import { ProductStackParams } from '../navigation/navigatorParams';
import { Routes } from '../navigation/Routes';
import { toggleWishlist } from '../redux/products/productActions';
import { RootState } from '../redux/rootReducer';
import { Typography } from '../styles/fonts';

type CurrentRouteProp = RouteProp<ProductStackParams, Routes.ProductDetails>;

interface OwnProps {
  route: CurrentRouteProp;
}

const mapState = (state: RootState, ownProps: OwnProps) => ({
  product: state.products.products.find(
    (p) => p.id === ownProps.route.params.productId,
  ),
});

const mapDispatch = {
  onToggleWishlist: toggleWishlist,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & OwnProps;

const ProductDetailsScreen = ({ product, onToggleWishlist }: Props) => {
  const { width, height } = useWindowDimensions();
  const imgHeight = 0.4 * height;
  const productId = product?.id;

  const handleToggle = useCallback(() => {
    if (productId) {
      onToggleWishlist(productId);
    }
  }, [productId, onToggleWishlist]);

  if (!product) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.imageUrl }}
        width={width}
        height={imgHeight}
        resizeMode="cover"
        style={[
          {
            width,
            height: imgHeight,
          },
          styles.image,
        ]}
      />
      <Text style={[Typography.bodyStrong, styles.name]}>{product.name}</Text>
      <Text style={[Typography.body, styles.description]}>
        {product.description}
      </Text>
      <View style={styles.wishlistContainer}>
        <Text style={[Typography.bodyStrong, styles.wishlistLabel]}>
          {product.isOnWishlist
            ? 'On Wishlist - toggle to remove'
            : 'Add to your Wish List'}
        </Text>
        <Switch onValueChange={handleToggle} value={product.isOnWishlist} />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
  },
  name: {
    fontSize: '1.2rem',
    marginHorizontal: 16,
    marginTop: 12,
  },
  description: {
    fontSize: '0.8rem',
    marginHorizontal: 16,
    marginVertical: 12,
  },
  wishlistContainer: {
    marginHorizontal: 16,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wishlistLabel: {
    fontSize: '0.8rem',
  },
});

export default connector(ProductDetailsScreen);
