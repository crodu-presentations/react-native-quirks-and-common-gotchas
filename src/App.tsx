import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Routes } from './navigation/Routes';
import { HomeScreen } from './screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.Home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
