import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import {
  HomeStackParams,
  ProductStackParams,
  TabParams,
} from './navigation/navigatorParams';
import { Routes } from './navigation/Routes';
import store from './redux/store';
import { ChartScreen } from './screens/ChartScreen';
import { HomeScreen } from './screens/HomeScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ProductsListScreen from './screens/ProductsListScreen';

const HomeStack = createStackNavigator<HomeStackParams>();
const ProductStack = createStackNavigator<ProductStackParams>();

const Tab = createBottomTabNavigator<TabParams>();

const App = () => {
  const iconStyle = { fontSize: 24 };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name={Routes.HomeStack}
            component={HomeStackScreen}
            options={{
              tabBarIcon: () => <Text style={iconStyle}>🏠</Text>,
              tabBarLabel: 'Home',
            }}
          />
          <Tab.Screen
            name={Routes.ProductStack}
            component={ProductStackScreen}
            options={{
              tabBarIcon: () => <Text style={iconStyle}>🛒</Text>,
              tabBarLabel: 'Products',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={Routes.Home} component={HomeScreen} />
      <HomeStack.Screen name={Routes.Chart} component={ChartScreen} />
    </HomeStack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name={Routes.ProductsList}
        component={ProductsListScreen}
      />
      <ProductStack.Screen
        name={Routes.ProductDetails}
        component={ProductDetailsScreen}
      />
    </ProductStack.Navigator>
  );
}

export default App;
