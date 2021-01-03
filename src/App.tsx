import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from './navigation/RootStackParams';
import { Routes } from './navigation/Routes';
import { ChartScreen } from './screens/ChartScreen';
import { HomeScreen } from './screens/HomeScreen';

const Stack = createStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.Home} component={HomeScreen} />
        <Stack.Screen name={Routes.Chart} component={ChartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
