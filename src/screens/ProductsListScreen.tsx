import { StackNavigationProp } from '@react-navigation/stack';
import { DateTime } from 'luxon';
import React, { useCallback } from 'react';
import { FormattedNumber } from 'react-intl';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect, ConnectedProps, useSelector } from 'react-redux';
import { ProductStackParams } from '../navigation/navigatorParams';
import { Routes } from '../navigation/Routes';
import {
  productsFetchRequest,
  toggleWishlist,
} from '../redux/products/productActions';
import { Product } from '../redux/products/productModels';
import { RootState } from '../redux/rootReducer';
import { Typography } from '../styles/fonts';

type NavigationProp = StackNavigationProp<
  ProductStackParams,
  Routes.ProductsList
>;

interface OwnProps {
  navigation: NavigationProp;
}

const mapState = (state: RootState) => ({
  productIds: state.products.ids,
});

const mapDispatch = {
  fetchProducts: productsFetchRequest,
  toggleWishlist: toggleWishlist,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & OwnProps;

const NUM_COLUMNS = 2;

class ProductsListScreen extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleItemPress = (item: Product['id']) => {
    this.props.navigation.push(Routes.ProductDetails, { productId: item });
  };

  renderItem = ({ item }: ListRenderItemInfo<Product['id']>) => {
    return (
      <ProductListItem
        itemId={item}
        onPress={this.handleItemPress}
        onToggleWishlist={this.props.toggleWishlist}
      />
    );
  };

  keyExtractor = (item: Product['id']) => item.toString();

  render() {
    return (
      <FlatList
        data={this.props.productIds}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        numColumns={NUM_COLUMNS}
      />
    );
  }
}

interface ListItemProps {
  itemId: Product['id'];
  onPress: (itemId: Product['id']) => void;
  onToggleWishlist: (itemId: Product['id']) => void;
}

function ProductListItem({ itemId, onPress, onToggleWishlist }: ListItemProps) {
  const { width } = useWindowDimensions();
  const itemWidth = width / NUM_COLUMNS;

  const item = useSelector((state: RootState) => state.products.byId[itemId]);

  const handlePress = useCallback(() => {
    onPress(itemId);
  }, [onPress, itemId]);

  const handleToggle = useCallback(() => {
    onToggleWishlist(itemId);
  }, [onToggleWishlist, itemId]);

  return (
    <TouchableOpacity style={{ width: itemWidth }} onPress={handlePress}>
      <Image
        source={{ uri: item.imageUrl }}
        width={itemWidth}
        height={100}
        resizeMode="cover"
        style={[
          {
            width: itemWidth,
          },
          styles.image,
        ]}
      />
      <View style={styles.wishlistRow}>
        <Text style={[Typography.bodyStrong, styles.name]}>{item.name}</Text>
        <TouchableOpacity style={styles.wishlistButton} onPress={handleToggle}>
          <Text style={styles.wishlistIcon}>
            {item.isOnWishlist ? '️️★' : '☆'}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={[Typography.bodyStrong, styles.description]}>
        <FormattedNumber value={item.price} style="currency" currency="EUR" />
      </Text>
      <Text style={[Typography.body, styles.description]}>
        Last updated (German locale):
        {'\n'}
        {DateTime.fromISO(item.updatedAt).setLocale('de').toRelative()}
      </Text>
    </TouchableOpacity>
  );
}

const styles = EStyleSheet.create({
  image: {
    height: 100,
    resizeMode: 'cover',
  },
  name: {
    fontSize: '1.2rem',
    marginHorizontal: 5,
    marginVertical: 8,
  },
  description: {
    fontSize: '0.8rem',
    marginHorizontal: 5,
    marginBottom: 16,
  },
  wishlistRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wishlistButton: {
    padding: 12,
  },
  wishlistIcon: {
    fontSize: 24,
  },
});

export default connector(ProductsListScreen);
