import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
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
import { connect, ConnectedProps } from 'react-redux';
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
  products: state.products.products,
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

  handleItemPress = (item: Product) => {
    this.props.navigation.push(Routes.ProductDetails, { productId: item.id });
  };

  renderItem = ({ item }: ListRenderItemInfo<Product>) => {
    return <ProductListItem item={item} onPress={this.handleItemPress} />;
  };

  keyExtractor = (item: Product) => item.id.toString();

  render() {
    return (
      <FlatList
        data={this.props.products}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        numColumns={NUM_COLUMNS}
      />
    );
  }
}

interface ListItemProps {
  item: Product;
  onPress: (item: Product) => void;
}

function ProductListItem({ item, onPress }: ListItemProps) {
  const { width } = useWindowDimensions();
  const itemWidth = width / NUM_COLUMNS;

  const handlePress = useCallback(() => {
    onPress(item);
  }, [onPress, item]);

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
        <View style={styles.wishlistButton}>
          <Text style={styles.wishlistIcon}>
            {item.isOnWishlist ? '❤️' : '🤍'}
          </Text>
        </View>
      </View>
      <Text style={[Typography.body, styles.description]} numberOfLines={3}>
        {item.description}
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
